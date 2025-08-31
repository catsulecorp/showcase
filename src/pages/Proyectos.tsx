import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Proyectos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Proyectos;
