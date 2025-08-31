import ProjectCard from "@/components/ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "TechCommerce Pro",
    description: "Plataforma de e-commerce avanzada con dashboard administrativo completo y sistema de pagos integrado",
    image: project1,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "SaaS Analytics Hub",
    description: "Dashboard de analytics en tiempo real para empresas con visualización de datos interactiva y reportes automáticos",
    image: project2,
    technologies: ["Vue.js", "Python", "Redis", "D3.js", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "MobileFirst App",
    description: "Aplicación móvil híbrida con sincronización offline y notificaciones push para gestión empresarial",
    image: project3,
    technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Proyectos
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8" />
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una misión única donde orquestamos los mejores agentes especializados 
            del mercado para crear soluciones a medida que superan las expectativas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="/contacto" 
            className="text-muted-foreground hover:text-primary-glow transition-colors cursor-pointer"
          >
            ¿Tienes un proyecto en mente? Hagamos algo increíble juntos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;