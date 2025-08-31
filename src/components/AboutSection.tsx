import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Nosotros
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Orquestación con Responsabilidad
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                En Catsule Corp, creemos en el poder de la colaboración inteligente. 
                No somos solo una agencia tradicional, somos orquestadores que conectan 
                los mejores talentos especializados del mercado con las necesidades únicas 
                de cada proyecto.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-accent shadow-lg">
                <h4 className="text-xl font-semibold text-primary mb-3">Nuestra Misión</h4>
                <p className="text-muted-foreground">
                  Transformar la forma en que se construyen las soluciones digitales, 
                  conectando responsablemente el talento especializado con proyectos 
                  que requieren excelencia técnica.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-accent shadow-lg">
                <h4 className="text-xl font-semibold text-primary mb-3">Nuestro Enfoque</h4>
                <p className="text-muted-foreground">
                  Cada agente en nuestro ecosistema es seleccionado por su expertise 
                  y compromiso con la calidad. Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Agentes Especializados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <p className="text-muted-foreground">Satisfacción Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;