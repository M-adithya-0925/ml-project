import tensorflow as tf
import tensorflow_hub as hub
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np

# Load the pre-trained MobileNetV2 model from TensorFlow Hub
model_url = "https://tfhub.dev/google/tf2-preview/mobilenet_v2/classification/4"
model = tf.keras.Sequential([
    hub.KerasLayer(model_url, input_shape=(224, 224, 3))
])

# Load and preprocess an image for inference
def preprocess_image(image_path):
    img = load_img(image_path, target_size=(224, 224))
    img = img_to_array(img)
    img = tf.image.convert_image_dtype(img, tf.float32)
    img = img[tf.newaxis, ...]
    return img

# Make predictions on an image
def predict_plant(image_path):
    img = preprocess_image(image_path)
    predictions = model.predict(img)
    decoded_predictions = tf.keras.applications.mobilenet_v2.decode_predictions(predictions.numpy())
    return decoded_predictions

# Example usage
image_path = "path_to_your_plant_image.jpg"
predictions = predict_plant(image_path)
print(predictions)
