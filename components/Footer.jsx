"use client";

const Footer = () => {
    return (
      <footer className="bg-[#F7F8FC] text-[#1D2939] py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Stylogram - Kelompok 6. All rights reserved.
          </p>
          <p className="text-sm mt-2">
          Kenali Jenis Pakaianmu dengan Mudah bersama Stylogram
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  