import { Button } from "@/components/ui/button";
import catsuleLogo from "@/assets/catsule-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-accent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={catsuleLogo} 
            alt="Catsule Corp Logo" 
            className="w-12 h-12 rounded-full"
            style={{ filter: 'drop-shadow(var(--shadow-glow))' }}
          />
          <div>
            <h1 className="text-2xl font-bold text-primary">Catsule Corp</h1>
            <p className="text-sm text-muted-foreground">Custom Solutions Agency</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">
            Proyectos
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>
        
        <Button variant="tech" size="sm">
          Trabajemos Juntos
        </Button>
      </div>
    </header>
  );
};

export default Header;