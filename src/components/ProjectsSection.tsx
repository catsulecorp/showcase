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
    title: "Tu próximo proyecto podría aparecer aquí",
    description: "Este espacio está reservado para mostrar el proyecto que construiremos juntos. ¿Tienes una idea? Conectemos y hagamos realidad tu visión con nuestros agentes de IA especializados.",
    image: "/catsule.png",
    technologies: ["Próximamente"],
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
        

      </div>
    </section>
  );
};

export default ProjectsSection;