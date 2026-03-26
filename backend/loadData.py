import os

import numpy as np

from chromadb import Client, Settings
from chromadb.utils.data_loaders import ImageLoader
from chromadb.utils.embedding_functions import OpenCLIPEmbeddingFunction

from utils import load_model, preprocess_image, extract_embeddings


class LoadData:
    def __init__(self, dataset_dir):
        self.model = load_model()
        self.car_ids = []
        self.embeddings_list = []
        self.meta_data = []
        self.dataset_dir = dataset_dir
        self.embedding_function = OpenCLIPEmbeddingFunction()
        self.client = Client(settings=Settings(is_persistent=True, persist_directory="./clip_chroma"))
        self.data_loader = ImageLoader()
        self.collection = self.client.get_or_create_collection(name="car_prediction",
                                                               embedding_function=self.embedding_function,
                                                               data_loader=self.data_loader)
        self.model = load_model()

    def generate_embeddings(self):
        image_id = 0
        for car_id, image in enumerate(os.listdir(self.dataset_dir)):
            car_path = os.path.join(self.dataset_dir, image)
            path = [os.path.join(car_path, image) for image in os.listdir(car_path)]

            for _ in range(len(path)):
                print(path[_])
                preprocessed_image = preprocess_image(path[_])
                if preprocessed_image is not None:
                    embedding = extract_embeddings(preprocessed_image, self.model)
                    print(embedding.shape)
                    self.embeddings_list.append(embedding[0])
                    self.car_ids.append(str(image_id))
                    os_seperator = os.path.sep
                    print(path[_].split(os_seperator)[-1], path[_].split(os_seperator)[-2])
                    self.meta_data.append({path[_].split(os_seperator)[-1]: path[_].split(os_seperator)[-2]})

                    image_id += 1

    def add_embeddings_to_chroma(self):
        print(len(self.car_ids))
        print(self.car_ids)
        print(len(self.embeddings_list))
        self.embeddings_list = np.array(self.embeddings_list, dtype=np.float32)
        batch_size = 100
        for i in range(0, len(self.car_ids), batch_size):
            batch_ids = self.car_ids[i:i + batch_size]
            batch_embeddings = self.embeddings_list[i:i + batch_size]
            batch_metadatas = self.meta_data[i:i + batch_size]

            self.collection.add(
                ids=batch_ids,
                embeddings=batch_embeddings,
                metadatas=batch_metadatas,
            )


if __name__ == "__main__":
    image_dir = "Data2"
    print("Initializing Prediction...")
    prediction = LoadData(image_dir)
    print("Generating embeddings...")
    prediction.generate_embeddings()
    print("Adding embeddings to Chroma...")
    prediction.add_embeddings_to_chroma()
