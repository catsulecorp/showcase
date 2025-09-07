import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import catsuleLogo from "/catsule-corp-logo-arg-transparent.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link to="/nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </Link>
          </nav>
          
          <Button variant="tech" size="sm" asChild>
            <Link to="/contacto">Trabajemos Juntos</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-4 hover:bg-transparent group rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="h-8 w-8 text-foreground transition-colors" /> : <Menu className="h-8 w-8 text-foreground group-hover:text-yellow-500 transition-colors" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-accent shadow-lg">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link 
              to="/nosotros" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={closeMenu}
            >
              Nosotros
            </Link>
            <div className="pt-2">
              <Button variant="tech" size="sm" className="w-full" asChild>
                <Link to="/contacto" onClick={closeMenu}>
                  Trabajemos Juntos
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;