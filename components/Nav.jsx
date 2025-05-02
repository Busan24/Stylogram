"use client";

import { useState } from "react";
import useSectionObserver from "@/utils/useSectionObserver";

const links = [
  { name: "About us", path: "about" },
  { name: "Kategori", path: "kategori" },
  { name: "Tutorial", path: "tutorial" },
  { name: "Klasifikasi", path: "klasifikasi" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  useSectionObserver(links.map(link => link.path), setActiveSection);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id); // opsional: berfungsi langsung sebelum observer update
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <button
          key={link.path}
          onClick={() => handleScroll(link.path)}
          className={`capitalize font-medium cursor-pointer transition-all ${
            activeSection === link.path
              ? "text-[#0067FF] border-b-2 border-[#0067FF]"
              : "text-[#1D2939] border-b-2 border-transparent"
          }`}
          style={{ transition: "border-color 0.3s ease, color 0.3s ease" }}
        >
          {link.name}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
