import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";

const Contacto = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SideNavigation />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
