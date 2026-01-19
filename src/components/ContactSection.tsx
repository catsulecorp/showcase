import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/hooks/useLanguage";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const autoreplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const contactParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.description,
      to_email: 'catsulecorp@gmail.com',
      to_name: 'Catsule Corp'
    };

    const autoreplyParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.description
    };

    emailjs.send(serviceId, contactTemplateId, contactParams, publicKey)
      .then((response) => {
        console.log('Email principal enviado exitosamente:', response);
        return emailjs.send(serviceId, autoreplyTemplateId, autoreplyParams, publicKey);
      })
      .then((response) => {
        console.log('Autoreply enviado exitosamente:', response);
        alert(t.contact.alerts.success);
        setFormData({ name: "", company: "", email: "", projectType: "", description: "" });
      })
      .catch((error) => {
        console.error('Error al enviar email:', error);
        alert(t.contact.alerts.error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#121826] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Connection</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 italic">
              {t.contact.title}
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10" />
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              {t.contact.tagline}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <Card className="relative bg-white/5 backdrop-blur-xl border-white/10 rounded-[2rem] p-4 shadow-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                <CardHeader className="space-y-2 pb-8">
                  <CardTitle className="text-3xl font-bold text-white tracking-tight">{t.contact.form.title}</CardTitle>
                  <CardDescription className="text-white/40 font-light">
                    {t.contact.form.description}
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                          {t.contact.form.name}
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.form.placeholder_name}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                          {t.contact.form.company}
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t.contact.form.placeholder_company}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                        {t.contact.form.email}
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.placeholder_email}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                        {t.contact.form.projectType}
                      </label>
                      <Input
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        placeholder={t.contact.form.placeholder_type}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                        {t.contact.form.description_label}
                      </label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder={t.contact.form.placeholder_description}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[160px] rounded-2xl focus:ring-primary focus:border-primary resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20">
                      {t.contact.form.submit}
                    </Button>
                  </CardContent>
                </form>
              </Card>
            </div>

            {/* Contact Info Column */}
            <div className="flex flex-col space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/10 rounded-[2rem] p-4 hover:border-white/20 transition-all duration-300">
                  <div className="p-4 flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">{t.contact.info.title}</h4>
                      <p className="text-sm font-bold text-white break-all">catsulecorp@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/5 border-white/10 rounded-[2rem] p-4 hover:border-white/20 transition-all duration-300">
                  <div className="p-4 flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">{t.contact.info.location_title}</h4>
                      <p className="text-sm font-bold text-white">{t.contact.info.location}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="flex-1 bg-white/5 border-white/10 rounded-[2rem] p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-center">
                <CardHeader className="pb-8 pt-0 px-0">
                  <CardTitle className="text-xl font-bold text-white uppercase tracking-[0.2em] flex items-center">
                    <span className="w-8 h-[2px] bg-primary mr-4" />
                    {t.contact.hours.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                  {[
                    { day: t.contact.hours.weekdays, time: "11:00 AM - 11:00 PM UTC" },
                    { day: t.contact.hours.saturday, time: "2:00 PM - 11:00 PM UTC" },
                    { day: t.contact.hours.sunday, time: t.contact.hours.sunday_status, special: true }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                      <span className="text-sm text-white/50 font-medium">{item.day}</span>
                      <span className={`text-sm font-bold ${item.special ? 'text-primary' : 'text-white'}`}>{item.time}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Extra Info Card: Response Pipeline */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-transparent rounded-[2rem] blur opacity-20" />
                <Card className="relative bg-[#0a0f1a] bg-gradient-to-br from-primary/10 to-transparent border-primary/20 rounded-[2rem] p-8 overflow-hidden backdrop-blur-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black text-white italic mb-2 tracking-tight flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                    Response Pipeline
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    Our orchestration team typically initiates the discovery phase within <span className="text-white font-bold underline decoration-primary/30 decoration-2 underline-offset-4">24-48 hours</span>. For high-priority missions, your briefing is processed via our express channel.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;