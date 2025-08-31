import ProjectCard from "@/components/ProjectCard";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import placeholder from "/placeholder.svg";

const projects = [
  {
    title: "Alianza La Libertad Avanza Córdoba",
    description: "Plataforma web fullstack para la transparencia, acceso ágil y centralización de la información institucional de una organización política.",
    image: project1,
    technologies: ["Vue 3", "TypeScript", "Nuxt 3", "Tailwind CSS", "Supabase", "PostgreSQL", "Auth", "Storage"],
    liveUrl: "https://www.alianzalalibertadavanzacordoba.com.ar/",
    youtubeUrl: "https://www.youtube.com/watch?v=qX0PC89YqlY"
  },
  {
    title: "Entrenar.app",
    description: "App para que estudiantes de la Universidad Nacional de Córdoba puedan hacer seguimiento de sus entrenamientos físicos y mantenerse motivados.",
    image: project2,
    technologies: ["React", "TypeScript", "Go", "Material UI","Supabase", "PostgreSQL", "Google OAuth", "Testing Libraries"],
    liveUrl: "https://entrenar.app",
    githubUrl: "https://github.com/goalritmo/gym"
  },
  {
    title: "Lorem Ipsum Project",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["Consectetur", "adipiscing", "elit", "sed", "do"],
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