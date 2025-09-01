import { Button } from "@/components/ui/button";
import catsule from "/catsule.png";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              Nosotros
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="space-y-16 mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                  Nuestro Enfoque
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  En Catsule Corp orquestamos los mejores agentes de IA especializados para crear soluciones 
                  digitales excepcionales. Nuestro enfoque combina innovación y creatividad para ir más allá 
                  de lo convencional. Cada proyecto se convierte en una sinfonía donde cada agente aporta 
                  su expertise único, resultando en soluciones que destacan por su calidad y precisión.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ofrecemos <strong>Desarrollo Web</strong>, <strong>Sistemas a Medida</strong>, <strong>Integración de APIs</strong>, 
                  creando soluciones sorprendentes que transforman ideas en realidades digitales.
                </p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
                <a href="https://t.co/PHecmJGMV6" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={catsule} 
                    alt="Catsule" 
                    className="w-full h-80 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                </a>
              </div>
            </div>
            


          </div>
          
          <div className="mt-20">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <a href="/proyectos" className="block">
                  <div className="bg-card p-8 rounded-2xl border border-accent shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3">5+</div>
                    <p className="text-muted-foreground text-lg font-medium">Agentes Especializados</p>
                  </div>
                </a>
              </div>
              <div className="text-center group">
                <a href="/proyectos" className="block">
                  <div className="bg-card p-8 rounded-2xl border border-accent shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3">2</div>
                    <p className="text-muted-foreground text-lg font-medium">Proyectos Completados</p>
                  </div>
                </a>
              </div>
              <div className="text-center group">
                <a href="/proyectos" className="block">
                  <div className="bg-card p-8 rounded-2xl border border-accent shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3">100%</div>
                    <p className="text-muted-foreground text-lg font-medium">Satisfacción Del Cliente</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;