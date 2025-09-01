import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Youtube, Handshake } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, youtubeUrl }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-accent/50 hover:border-primary/30 h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-lg cursor-pointer">
        {liveUrl ? (
          <a href={liveUrl === "#" ? "/contacto" : liveUrl} target={liveUrl === "#" ? "_self" : "_blank"} rel={liveUrl === "#" ? "" : "noopener noreferrer"}>
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        ) : (
          <>
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        )}
      </div>
      
      <CardHeader>
        {liveUrl ? (
          <CardTitle className={`text-xl cursor-pointer transition-colors ${title === "Tu próximo proyecto podría aparecer aquí" ? "text-sky-500 group-hover:text-yellow-500" : "text-yellow-500 hover:text-yellow-400"}`}>
            <a href={liveUrl === "#" ? "/contacto" : liveUrl} target={liveUrl === "#" ? "_self" : "_blank"} rel={liveUrl === "#" ? "" : "noopener noreferrer"}>
              {title}
            </a>
          </CardTitle>
        ) : (
          <CardTitle className={`text-xl ${title === "Tu próximo proyecto podría aparecer aquí" ? "text-sky-500" : "text-yellow-500"}`}>{title}</CardTitle>
        )}
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2 mt-auto">
          {liveUrl && (
            <Button 
              variant={liveUrl === "#" ? "tech" : "default"} 
              size="sm" 
              className={`${title === "Tu próximo proyecto podría aparecer aquí" ? "w-full" : "flex-1"} ${title !== "Tu próximo proyecto podría aparecer aquí" ? "bg-yellow-500 hover:bg-yellow-400 text-white border-yellow-500 hover:border-yellow-400" : "group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500"}`} 
              asChild
            >
              <a href={title === "Tu próximo proyecto podría aparecer aquí" ? "/contacto" : liveUrl} target={title === "Tu próximo proyecto podría aparecer aquí" ? "_self" : "_blank"} rel={title === "Tu próximo proyecto podría aparecer aquí" ? "" : "noopener noreferrer"}>
                {title === "Tu próximo proyecto podría aparecer aquí" ? <Handshake className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />}
                {title === "Tu próximo proyecto podría aparecer aquí" ? "Trabajemos juntos" : "Ver Proyecto"}
              </a>
            </Button>
          )}
          {youtubeUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                <Youtube className="w-4 h-4" />
              </a>
            </Button>
          )}
          {githubUrl && !youtubeUrl && title !== "Tu próximo proyecto podría aparecer aquí" && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;