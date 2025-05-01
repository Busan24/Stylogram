"use client";
import { useState } from "react";
import useSectionObserver from "@/utils/useSectionObserver";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "About us", path: "about" },
  { name: "Kategori", path: "kategori" },
  { name: "Tutorial", path: "tutorial" },
  { name: "Klasifikasi", path: "klasifikasi" },
];

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("");
  useSectionObserver(links.map(link => link.path), setActiveSection);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>
        <nav className="flex flex-col gap-4 mt-3">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleScroll(link.path)}
              className={`capitalize text-xl font-medium hover:text-accent transition-all text-left inline-block ${
                activeSection === link.path
                  ? "text-accent border-b-2 border-accent w-fit"
                  : "w-fit"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
