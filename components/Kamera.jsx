"use client";

import Webcam from "react-webcam";
import { useRef, useState } from "react";
import Image from "next/image";
import { classifyImage } from "@/pages/api/upload";
import HasilKlasifikasi from "./HasilKlasifikasi";

const Kamera = () => {
  const webcamRef = useRef(null);
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);

  const captureAndPredict = async () => {
    setLoading(true);
    const screenshot = webcamRef.current.getScreenshot();
    const blob = await (await fetch(screenshot)).blob();
    const file = new File([blob], "image.jpg", { type: "image/jpeg" });

    const res = await classifyImage(file);
    setHasil(res);
    setLoading(false);
  };

  const handleUpload = async (e) => {
    if (e.target.files[0]) {
      setLoading(true);
      const res = await classifyImage(e.target.files[0]);
      setHasil(res);
      setLoading(false);
    }
  };

  const resetKamera = () => {
    window.history.back(); // keluar dari kamera
  };

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      {/* Kondisi: Loading */}
      {loading ? (
        <div className="text-white text-lg animate-pulse">⏳ Memproses gambar...</div>
      ) : hasil ? (
        // Kondisi: Hasil sudah ada
        <HasilKlasifikasi
          label={hasil.label}
          confidence={hasil.confidence}
          onReset={() => setHasil(null)}
        />
      ) : (
        // Kondisi Default: Kamera aktif
        <>
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="absolute inset-0 w-full h-full object-cover z-0"
            videoConstraints={{ facingMode: "environment" }}
          />

          {/* Tombol silang kiri atas */}
          <div className="absolute top-4 left-4 z-20">
            <button
              onClick={resetKamera}
              className="w-[39px] h-[40px] bg-white rounded-[7.69px] flex items-center justify-center shadow-lg ml-5 mt-3"
            >
              <Image
                src="/assets/icons/ic_silang.png"
                alt="Tutup"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Tombol upload kanan atas */}
          <div className="absolute top-4 right-4 z-20">
            <label htmlFor="upload" className="cursor-pointer">
              <div className="w-[40px] h-[40px] bg-[#0067FF] rounded-full flex items-center justify-center shadow-lg mr-5 mt-3">
                <Image
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

          {/* Tombol klasifikasi di bawah tengah */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <button
              onClick={captureAndPredict}
              className="w-[160px] h-[40px] bg-[#0067FF] text-white text-[12px] font-archivo rounded-md shadow-md"
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
