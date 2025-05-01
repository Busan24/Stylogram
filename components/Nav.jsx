"use client";

import { useState, useEffect } from "react";

const links = [
  { name: "About us", path: "about" },
  { name: "Kategori", path: "kategori" },
  { name: "Tutorial", path: "tutorial" },
  { name: "Klasifikasi", path: "klasifikasi" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  // Menggunakan IntersectionObserver untuk melacak bagian aktif
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Bagian terlihat setidaknya 50%
    );

    links.forEach((link) => {
      const element = document.getElementById(link.path);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -70; // Offset untuk header
      const yPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
  
      // Perbarui bagian aktif
      setActiveSection(id);
    }
  };
  

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
      <a
        key={index}
        onClick={() => handleScroll(link.path)}
        className={`capitalize font-medium cursor-pointer transition-all ${
          activeSection === link.path
            ? "text-[#0067FF] border-b-2 border-[#0067FF]"
            : "text-[#1D2939] border-b-2 border-transparent"
        }`}        
        style={{ transition: "border-color 0.3s ease, color 0.3s ease" }}
      >
        {link.name}
      </a>
    ))}
    </nav>
  );
};

export default Nav;
