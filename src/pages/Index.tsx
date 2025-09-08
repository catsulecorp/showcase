import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SideNavigation from "@/components/SideNavigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SideNavigation />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
