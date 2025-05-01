"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutUsSection = () => {
  // Fungsi untuk scroll ke section #klasifikasi
  const handleScrollToKlasifikasi = () => {
    const section = document.getElementById("klasifikasi");
    if (section) {
      const yOffset = -70; // Offset jika ada navbar fixed
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg_about_us.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div
        id="about"
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-28 lg:pt-28 pb-20 min-h-screen px-4"
      >
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[36px] sm:text-[42px] md:text-[48px] xl:text-[50px] leading-[1.4] font-bold text-[#1D2939]">
            Kenali Jenis Pakaianmu <br className="hidden sm:block" />
            dengan Mudah
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-[#667085] mt-3">
            Unggah atau ambil gambar pakaian, lalu sistem akan membantu mengenali
            jenis fashion seperti T-Shirt, Shirt, Jeans, dan lainnya dengan cepat dan praktis.
          </p>
          <Button
            onClick={handleScrollToKlasifikasi}
            className="rounded-[10px] text-white bg-[#0067FF] hover:bg-blue-700 transition-all mt-5"
            size="md"
          >
            Mulai Klasifikasi
          </Button>
        </div>

        {/* Image Section */}
        <div className="w-full mt-5 lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0">
          <Image
            src="/assets/baju_biru.png"
            alt="Baju"
            width={400}
            height={700}
            className="object-contain max-h-[700px] h-auto w-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
