"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const kategoriData = [
  { name: "Cutoffs", img: "/assets/kategori/Cutoofs.png" },
  { name: "Shirts", img: "/assets/kategori/Shirt.png" },
  { name: "Coats", img: "/assets/kategori/Coats.png" },
  { name: "Jeans", img: "/assets/kategori/Jeans.png" },
  { name: "Backpack", img: "/assets/kategori/Backpack.png" },
  { name: "T-Shirts", img: "/assets/kategori/Tshirt.png" },
  { name: "Sports Shoes", img: "/assets/kategori/sprotshoes.png" },
  { name: "Wallets", img: "/assets/kategori/wallets.png" },
  { name: "Sandals", img: "/assets/kategori/sandals.png" },
  { name: "Flip Flops", img: "/assets/kategori/flipflops.png" },
  { name: "Belts", img: "/assets/kategori/belts.png" },
  { name: "Briefs", img: "/assets/kategori/briefs.png" },
  { name: "Socks", img: "/assets/kategori/socks.png" },
  { name: "Handbags", img: "/assets/kategori/handbags.png" },
  { name: "Watches", img: "/assets/kategori/watches.png" },
  { name: "Sunglasses", img: "/assets/kategori/sunglasses.png" },
  { name: "Formal Shoes", img: "/assets/kategori/formalshoes.png" },
  { name: "Heels", img: "/assets/kategori/heels.png" },
  { name: "Hoodie", img: "/assets/kategori/hoodie.png" },
  { name: "Kurtas", img: "/assets/kategori/kurtas.png" },
];

const Kategori = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const container = marqueeRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (container) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
        container.scrollLeft = scrollAmount;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="kategori" className="bg-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-[36px] font-bold text-[#1D2939] font-primary">
          Kategori Fashion
        </h2>
        <p className="italic text-[14px] text-[#1D2939] mt-3">
          Jelajahi berbagai jenis pakaian yang dapat dikenali oleh sistem klasifikasi Stylogram
        </p>

        {/* Kategori List Berjalan */}
        <div className="overflow-hidden mt-16 relative">
          <div
            ref={marqueeRef}
            className="flex gap-[80px] animate-marquee whitespace-nowrap w-max items-center"
          >
            {kategoriData.concat(kategoriData).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-[100px] min-w-[100px] flex-shrink-0"
              >
                <div className="w-[70px] h-[70px] flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="object-contain mx-auto"
                  />
                </div>
                <p className="mt-2 text-[#1D2939] text-[14px] italic text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kategori;
