"use client";

import Image from "next/image";

const tutorialSteps = [
  {
    icon: "/assets/icons/Fashion.png",
    title: "Fashion",
    description: "Pilih satu pakaian yang ingin kamu klasifikasikan. Pastikan pakaian tampak jelas."
  },
  {
    icon: "/assets/icons/Kamera.png",
    title: "Kamera",
    description: "Arahkan kamera ke pakaian yang telah disiapkan. Setelah terlihat jelas lalu ambil gambar."
  },
  {
    icon: "/assets/icons/Upload.png",
    title: "Upload",
    description: "Jika kamu sudah memiliki foto pakaian, unggah langsung dari galeri untuk diklasifikasikan."
  }
];

const Tutorial = () => {
  return (
    <section id="tutorial" className="bg-[#F7F8FC] py-20 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[36px] font-bold text-[#1D2939] font-primary">
          Tutorial
        </h2>
        <p className="italic text-[14px] text-[#1D2939] mt-3">
          Ikuti langkah mudah berikut untuk mengenali jenis pakaian dengan kamera atau unggah gambar.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
          {tutorialSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] w-[258px] h-[300px] flex flex-col items-start text-left px-[30px] pt-[35px] pb-[40px] shadow-md"
            >
              <div className="w-[56px] h-[56px] relative">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[20px] font-bold text-[#0067FF] mt-[25px] leading-[28px] tracking-[0.2px]">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#667085] leading-[28px] tracking-[0.3px] mt-[15px] font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
