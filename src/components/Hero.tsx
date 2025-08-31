import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-accent/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary tracking-tight">
              CATSULE
              <span className="block text-primary-glow">CORP</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
          </div>
          
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Desarrollamos experiencias web futuristas que transforman ideas en 
            <span className="text-primary font-semibold"> tecnología avanzada</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Ver Proyectos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Conocer Más
            </Button>
          </div>
        </div>
        
        {/* Tech Elements */}
        <div className="absolute top-1/2 left-8 w-2 h-32 bg-gradient-to-b from-primary to-transparent rounded-full opacity-60" />
        <div className="absolute top-1/2 right-8 w-2 h-24 bg-gradient-to-b from-primary-glow to-transparent rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default Hero;