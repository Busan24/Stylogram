"use client";

import Image from "next/image";
import deskripsiKategori from "@/utils/deskripsiKategori";
import { useRouter } from "next/navigation";

const HasilKlasifikasi = ({ label, confidence, onReset }) => {
  const router = useRouter();

  const handleSelesai = async () => {
    // 1. Arahkan ke halaman utama dengan hash
    await router.push("/#klasifikasi");

    // 2. Scroll manual untuk memastikan posisi benar
    setTimeout(() => {
      const target = document.getElementById("klasifikasi");
      if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }

      // 3. Paksa trigger observer
      window.dispatchEvent(new Event("scroll"));

      // 4. Hapus hash dari URL agar bersih
      window.history.replaceState(null, "", "/");

      // 5. Tutup modal kamera (reset state)
      onReset();
    }, 600);
  };

  return (
    <div className="bg-[#F7F8FC] rounded-[20px] p-6 max-w-[900px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg">
      {/* Kiri - Icon & Background */}
      <div className="relative w-[140px] h-[140px] flex-shrink-0 mx-auto md:mx-0">
        <Image
          src="/assets/bg_hasil_klasifikasi.png"
          alt="Background Icon"
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={`/assets/label/${label}.png`}
            alt={label}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* Kanan - Text */}
      <div className="flex flex-col justify-center text-center md:text-left md:ml-[25px] w-full">
        <h3 className="text-[20px] font-bold text-[#1D2939] font-primary">
          Hasil Klasifikasi <span className="text-[#0067FF]">{label}</span>
        </h3>
        <p className="italic text-[12px] text-[#667085]  mx-auto md:mx-0 max-w-[320px]">
        {deskripsiKategori[label.replace(/\s/g, "")] || "Deskripsi tidak tersedia untuk kategori ini."}
        </p>

        <div className="mt-4 flex justify-center md:justify-start">
          <button
            onClick={handleSelesai}
            className="w-[95px] h-[39px] bg-[#0067FF] text-white text-[14px] rounded-[8px] font-medium"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default HasilKlasifikasi;
