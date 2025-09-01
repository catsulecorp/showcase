import catsuleLogo from "/catsule-corp-logo-arg-transparent.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={catsuleLogo} 
                alt="Catsule Corp Logo" 
                className="w-12 h-12"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }}
              />
              <div>
                <h3 className="text-2xl font-bold">Catsule Corp</h3>
                <p className="text-background/70">Soluciones Sorprendentes</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed max-w-md">
              Orquestamos los mejores agentes del mercado para crear soluciones digitales innovadoras
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li>Desarrollo Web</li>
              <li>Sistemas a Medida</li>
              <li>Integración de APIs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/contacto" onClick={scrollToTop} className="hover:text-yellow-500 transition-colors">catsulecorp@gmail.com</Link></li>
              <li><a href="https://www.linkedin.com/company/catsulecorp/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-colors">LinkedIn</a></li>
              {/* <li>GitHub</li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2025 Catsule Corp. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;