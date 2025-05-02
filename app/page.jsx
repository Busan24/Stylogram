import AboutUsSection from "@/components/AboutUsSection";
import Kategori from "@/components/Kategori";
import Tutorial from "@/components/Tutorial";
import Klasifikasi from "@/components/Klasifikasi";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";


const Home = () => {
  return (
    <main className="w-full">
      <AboutUsSection />
      <BackToTop />
      <Kategori />
      <Tutorial />
      <Klasifikasi />
      <Footer />
    </main>
  );
};

export default Home;
