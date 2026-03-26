import io

import numpy as np
from PIL import Image
import tensorflow as tf


def load_model():
    """
    Loads the pre-trained MobileNetV2 model without the top classification layer.

    Returns:
        tf.keras.Model: The model used for embedding extraction.
    """
    base_model = tf.keras.applications.MobileNetV2(include_top=False, pooling='avg', input_shape=(224, 224, 3))
    return base_model


def preprocess_image(image_path, target_size=(224, 224)):
    """
    Preprocesses an image by loading, converting to RGB, resizing, and normalization.

    Args:
        image_path (str): Path to the image file.
        target_size (tuple, optional): Desired output size (width, height) in pixels. Defaults to (224, 224).

    Returns:
        np.array: The preprocessed image.
    """
    try:
        img = Image.open(image_path)

        if img.mode != 'RGB':
            img = img.convert('RGB')

        img = img.resize(target_size, resample=Image.LANCZOS)

        img_array = np.array(img)

        img_array = img_array / 255.0

        img_array = np.expand_dims(img_array, axis=0)

        return img_array

    except (IOError, OSError) as e:
        print(f"Error opening image: {image_path and 'image'} ({e})")
        return None


def extract_embeddings(image_array, model):
    """
    Extracts embeddings from the given preprocessed image using the pre-trained model.

    Args:
        image_array (np.array): The preprocessed image array.

    Returns:
        np.array: The extracted image embeddings.
        :param image_array:
        :param model:
    """
    embeddings = model.predict(image_array)
    return embeddings



