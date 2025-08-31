import catsuleLogo from "@/assets/catsule-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={catsuleLogo} 
                alt="Catsule Corp Logo" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold">Catsule Corp</h3>
                <p className="text-background/70">Development Agency</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed max-w-md">
              Transformamos ideas en experiencias digitales extraordinarias. 
              Especialistas en desarrollo web moderno con tecnología de vanguardia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li>Desarrollo Web</li>
              <li>Aplicaciones SaaS</li>
              <li>E-commerce</li>
              <li>Apps Móviles</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80">
              <li>hello@catsulecorp.com</li>
              <li>+1 (555) 123-4567</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Catsule Corp. Todos los derechos reservados. • Powered by Capsule Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;