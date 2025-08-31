import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Contacto
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Listo para orquestar tu próximo proyecto? Conectemos y hagamos realidad 
              tu visión con los mejores agentes especializados del mercado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-accent shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Empecemos tu Proyecto</CardTitle>
                <CardDescription>
                  Cuéntanos sobre tu proyecto y te conectaremos con los agentes perfectos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input placeholder="Tu empresa" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de Proyecto
                  </label>
                  <Input placeholder="Web App, E-commerce, SaaS, etc." />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Describe tu Proyecto
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu visión, objetivos y requirements técnicos..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="hero" className="w-full">
                  Iniciar Orquestación
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-accent shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">@</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">hello@catsulecorp.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Teléfono</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">🌍</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Ubicación</p>
                      <p className="text-muted-foreground">Global • Remote First</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Horarios de Atención</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-foreground">Lunes - Viernes</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Sábados</span>
                      <span className="text-muted-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Domingos</span>
                      <span className="text-muted-foreground">Cerrado</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Respuesta típica en 24 horas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent shadow-lg bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    ¿Proyecto Urgente?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Para proyectos con timeline acelerado, contáctanos directamente. 
                    Nuestros agentes premium están disponibles 24/7.
                  </p>
                  <Button variant="tech" className="w-full">
                    Contacto Urgente
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;