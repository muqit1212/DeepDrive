from chromadb import Client, Settings

from chromadb.utils.data_loaders import ImageLoader

from chromadb.utils.embedding_functions import OpenCLIPEmbeddingFunction

from utils import load_model, preprocess_image, extract_embeddings


class Prediction:
    model = None
    client = None
    collection = None
    embedding_function = None
    data_loader = None

    def __init__(self):
        self.embedding = None
        if Prediction.model is None:
            Prediction.model = load_model()
            Prediction.embedding_function = OpenCLIPEmbeddingFunction()
            Prediction.data_loader = ImageLoader()
            Prediction.client = Client(settings=Settings(is_persistent=True, persist_directory="./clip_chroma"))
            Prediction.collection = Prediction.client.get_or_create_collection(name="car_prediction",
                                                                               embedding_function=Prediction.
                                                                               embedding_function,
                                                                               data_loader=Prediction.data_loader)

    def generate_embeddings(self, image):
        preprocessed_image = preprocess_image(image)
        if preprocessed_image is not None:
            embedding = extract_embeddings(preprocessed_image, Prediction.model)
            self.embedding = embedding

    def predict(self):
        query = Prediction.collection.query(
            query_embeddings=self.embedding.tolist(),
            n_results=1
        )
        return query
