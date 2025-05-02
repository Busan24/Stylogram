import * as tf from "@tensorflow/tfjs";

let model = null;

export async function preloadModel() {
  if (!model) {
    model = await tf.loadLayersModel("/model/model.json");

    const warmup = tf.zeros([1, 224, 224, 3]);
    model.predict(warmup).dispose();
  }
}


export async function classifyImage(imageElement) {
  if (!model) await preloadModel();

  return tf.tidy(() => {
    const tensor = tf.browser
      .fromPixels(imageElement)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .div(tf.scalar(255))
      .expandDims();

    const prediction = model.predict(tensor);
    const result = prediction.dataSync(); // lebih cepat dari await prediction.data()
    const maxIndex = result.indexOf(Math.max(...result));

    const labels = [
      "Backpacks", "Belts", "Briefs", "Coat", "Cutoffs", "Flip Flops", "Formal Shoes",
      "Handbags", "Heels", "Hoodie", "Jeans", "Kurtas", "Sandals", "Shirts",
      "Socks", "Sports Shoes", "Sunglasses", "Tshirts", "Wallets", "Watches"
    ];

    return {
      label: labels[maxIndex],
      confidence: Math.max(...result) * 100
    };
  });
}

