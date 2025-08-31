import ProjectCard from "@/components/ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "TechCommerce Pro",
    description: "Plataforma de e-commerce avanzada con dashboard administrativo completo y sistema de pagos integrado.",
    image: project1,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "SaaS Analytics Hub",
    description: "Dashboard de analytics en tiempo real para empresas con visualización de datos interactiva y reportes automáticos.",
    image: project2,
    technologies: ["Vue.js", "Python", "Redis", "D3.js", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "MobileFirst App",
    description: "Aplicación móvil híbrida con sincronización offline y notificaciones push para gestión empresarial.",
    image: project3,
    technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Nuestros Proyectos
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiencias <span className="text-primary">Digitales</span> Extraordinarias
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una misión única donde combinamos tecnología de vanguardia 
            con diseño innovador para crear soluciones que superan las expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="opacity-0 animate-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿Tienes un proyecto en mente? Hagamos algo increíble juntos.
          </p>
          <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
            <span className="relative z-10">Ver Todos los Proyectos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;