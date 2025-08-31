import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import catsuleLogo from "/catsule-corp-logo-arg-transparent.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-accent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
            <img 
              src={catsuleLogo} 
              alt="Catsule Corp Logo" 
              className="w-12 h-12"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Catsule Corp</h1>
            <p className="text-sm text-muted-foreground">Soluciones Sorprendentes</p>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link to="/proyectos" className="text-foreground hover:text-primary transition-colors">
              Proyectos
            </Link>
            <Link to="/nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </Link>
          </nav>
          
          <Button variant="tech" size="sm" asChild>
            <Link to="/contacto">Trabajemos Juntos</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;