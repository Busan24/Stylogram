"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";


const Klasifikasi = () => {
    const router = useRouter();
  return (
    <section id="klasifikasi" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Judul & Deskripsi atas */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#1D2939] font-primary">
          Klasifikasi Fashion
        </h2>
        <p className="italic text-[14px] text-[#1D2939] mt-3 max-w-xl mx-auto">
          Unggah atau ambil gambar pakaian yang ingin dikenali, lalu sistem akan membantu
          mengklasifikasikan jenisnya, seperti T-Shirt, Shirt, Jeans, dan lainnya.
        </p>

        {/* Box utama */}
        <div className="bg-[#F7F8FC] rounded-[20px] mt-12 mx-auto w-full max-w-[1200px] px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-md">
          {/* Gambar */}
          <div className="w-full lg:w-[45%] flex">
            <Image
              src="/assets/gambar_baju.png"
              alt="Gambar Baju"
              width={400}
              height={500}
              className="object-contain max-w-full h-auto"
              priority
            />
          </div>

          {/* Text & Button */}
          <div className="w-full lg:w-[55%] flex flex-col items-center text-center px-4">
            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1D2939] font-primary">
              Kenali Jenis Fashion Anda
            </h3>
            <p className="italic text-[14px] text-[#1D2939] mt-3 max-w-md">
              Cukup ambil atau unggah gambar, dan lihat hasil klasifikasinya langsung
            </p>

            <button 
            onClick={() => router.push("/kamera")}
            className="flex items-center justify-center bg-[#0067FF] hover:bg-blue-700 text-white rounded-[10px] mt-6 w-[191px] h-[57px]">
              <Image
                src="/assets/icons/ic_camera.png"
                alt="Camera"
                width={33}
                height={33}
                className="mr-2"
              />
              <span className="text-[14px] font-medium">Mulai Klasifikasi</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Klasifikasi;
