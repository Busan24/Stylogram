export async function classifyImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("http://localhost:5000/predict", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Gagal memproses gambar");
  return await res.json();
}
