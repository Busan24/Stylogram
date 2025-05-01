from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

# Inisialisasi Flask
app = Flask(__name__)
CORS(app)

# Load model
model = tf.keras.models.load_model("model/benar_model_inceptionv3.h5")

# Label sesuai urutan training
labels = [
    "Backpacks", "Belts", "Briefs", "Coat", "Cutoffs", "Flip Flops", "Formal Shoes",
    "Handbags", "Heels", "Hoodie", "Jeans", "Kurtas", "Sandals", "Shirts",
    "Socks", "Sports Shoes", "Sunglasses", "Tshirts", "Wallets", "Watches"
]

# Fungsi Preprocessing
def preprocess_image(image_bytes):
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = img.resize((224, 224))  # sesuai input model
    img_array = np.array(img) / 255.0
    return np.expand_dims(img_array, axis=0)

# Endpoint klasifikasi
@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files["image"]
    img_bytes = image_file.read()
    processed = preprocess_image(img_bytes)

    prediction = model.predict(processed)
    label_index = np.argmax(prediction)
    confidence = float(np.max(prediction))

    return jsonify({
        "label": labels[label_index],
        "confidence": round(confidence * 100, 2)
    })

if __name__ == "__main__":
    app.run(debug=True)
