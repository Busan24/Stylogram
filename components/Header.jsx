"use client";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F7F8FC] py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("about");
            if (target) {
              const yOffset = -70;
              const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          <img
            src="/assets/logo/style-logo.png"
            alt="Logo"
            className="h-10 object-contain cursor-pointer"
          />
        </Link>


        {/* Nav desktop */}
        <nav className="hidden xl:flex gap-8">
          <Nav />
        </nav>

        {/* Mobile menu */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
