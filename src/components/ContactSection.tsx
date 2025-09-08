import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    description: ""
  });



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Configuración de EmailJS desde variables de entorno
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const autoreplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    // Parámetros para el email principal (a catsulecorp@gmail.com)
    const contactParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.description,
      to_email: 'catsulecorp@gmail.com',
      to_name: 'Catsule Corp'
    };

    // Parámetros para el autoreply (al cliente)
    const autoreplyParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.description
    };

    // Enviar email principal
    emailjs.send(serviceId, contactTemplateId, contactParams, publicKey)
      .then((response) => {
        console.log('Email principal enviado exitosamente:', response);
        
        // Enviar autoreply al cliente
        return emailjs.send(serviceId, autoreplyTemplateId, autoreplyParams, publicKey);
      })
      .then((response) => {
        console.log('Autoreply enviado exitosamente:', response);
        alert("¡Gracias por contactarnos! Te hemos enviado un email de confirmación.");
        setFormData({ name: "", company: "", email: "", projectType: "", description: "" });
      })
      .catch((error) => {
        console.error('Error al enviar email:', error);
        alert("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              Contacto
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Listos para tu próximo proyecto. Conectemos y hagamos realidad 
              tu visión con los mejores agentes especializados del mercado
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-accent shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Construyamos tu Proyecto</CardTitle>
                <CardDescription>
                  Contanos sobre tu proyecto y te contactaremos lo antes posible
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu empresa" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de Proyecto
                  </label>
                  <Input 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="Web App, E-commerce, SaaS, etc" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Describe tu Proyecto
                  </label>
                  <Textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu visión, objetivos y requirementos técnicos"
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" className="w-full bg-yellow-500 hover:bg-yellow-400 text-white border-yellow-500 hover:border-yellow-400">
                  Iniciar Orquestación
                </Button>
                </CardContent>
              </form>
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
                      <p className="text-muted-foreground">catsulecorp@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Teléfono</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                   */}
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
                      <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Sábados</span>
                      <span className="text-muted-foreground">11:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Domingos</span>
                      <span className="text-muted-foreground">Recarga de Energía</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-yellow-500 mb-3">
                    ¿Proyecto Urgente?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Para proyectos con timeline acelerado, contacta directamente a <strong>gonzalogramagia@gmail.com</strong> para una respuesta inmediata
                  </p>
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