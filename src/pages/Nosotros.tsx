import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SideNavigation />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
