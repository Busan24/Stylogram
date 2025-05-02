"use client";

import Webcam from "react-webcam";
import { useRef, useState, useEffect } from "react";
import NextImage from "next/image";
import { classifyImage, preloadModel } from "@/lib/tfjsClassify";
import HasilKlasifikasi from "./HasilKlasifikasi";

const Kamera = () => {
  const webcamRef = useRef(null);
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modelReady, setModelReady] = useState(false);

  // ⏳ Load model lebih awal saat komponen dimount
  useEffect(() => {
    preloadModel().then(() => setModelReady(true));
  }, []);

  const captureAndPredict = async () => {
    if (!modelReady) return;
    const screenshot = webcamRef.current.getScreenshot();
    const img = new window.Image(); // pastikan bukan dari next/image
    img.src = screenshot;

    img.onload = async () => {
      setLoading(true);
      const res = await classifyImage(img);
      setHasil(res);
      setLoading(false);
    };
  };

  const handleUpload = async (e) => {
    if (!modelReady || !e.target.files[0]) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.src = event.target.result;

      img.onload = async () => {
        setLoading(true);
        const res = await classifyImage(img);
        setHasil(res);
        setLoading(false);
      };
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const resetKamera = () => {
    window.history.back();
  };

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      {!modelReady ? (
        <div className="text-white text-lg animate-pulse">🔄 Memuat Kamera...</div>
      ) : loading ? (
        <div className="text-white text-lg animate-pulse">⏳ Memproses Gambar...</div>
      ) : hasil ? (
        <HasilKlasifikasi
          label={hasil.label}
          confidence={hasil.confidence}
          onReset={() => setHasil(null)}
        />
      ) : (
        <>
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="absolute inset-0 w-full h-full object-cover z-0"
            videoConstraints={{ facingMode: "environment" }}
          />

          {/* Tombol keluar */}
          <div className="absolute top-4 left-4 z-20">
            <button
              onClick={resetKamera}
              className="w-[39px] h-[40px] bg-white rounded-[7.69px] flex items-center justify-center shadow-lg ml-5 mt-3"
            >
              <NextImage
                src="/assets/icons/ic_silang.png"
                alt="Tutup"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Tombol upload */}
          <div className="absolute top-4 right-4 z-20">
            <label htmlFor="upload" className="cursor-pointer">
              <div className="w-[40px] h-[40px] bg-[#0067FF] rounded-full flex items-center justify-center shadow-lg mr-5 mt-3">
                <NextImage
                  src="/assets/icons/ic_upload.png"
                  alt="Upload"
                  width={22}
                  height={22}
                />
              </div>
            </label>
            <input
              id="upload"
              type="file"
              accept="image/*"
              hidden
              onChange={handleUpload}
            />
          </div>

          {/* Tombol klasifikasi */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <button
              onClick={captureAndPredict}
              className="w-[160px] h-[40px] bg-[#0067FF] text-white text-[12px] font-archivo rounded-md shadow-md"
              disabled={!modelReady}
            >
              Klasifikasi Gambar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Kamera;
