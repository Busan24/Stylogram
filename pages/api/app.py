from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from flask_cors import CORS
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load model
model = load_model("benar_model_inceptionv3.h5")

# Daftar label (urutan sesuai training)
labels = [
    "Backpacks", "Belts", "Briefs", "Coat", "Cutoffs", "Flip Flops",
    "Formal Shoes", "Handbags", "Heels", "Hoodie", "Jeans", "Kurtas",
    "Sandals", "Shirts", "Socks", "Sports Shoes", "Sunglasses",
    "Tshirts", "Wallets", "Watches"
]

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    img = image.load_img(file, target_size=(224, 224))  # Sesuaikan dengan input model
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0

    prediction = model.predict(img_array)
    class_index = np.argmax(prediction)
    confidence = float(np.max(prediction))

    return jsonify({
        "label": labels[class_index],
        "confidence": round(confidence * 100, 2)
    })

if __name__ == "__main__":
    app.run(debug=True)
