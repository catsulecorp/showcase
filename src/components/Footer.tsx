import catsuleLogo from "/catsule-corp-logo-arg-transparent.png";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, isSpanish } = useLanguage();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#121826] text-white/60 pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto pl-24 pr-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-16 gap-x-8 mb-20">
          {/* Brand & Mission */}
          <div className="col-span-2 md:col-span-5 space-y-8">
            <a href="#home" onClick={scrollToTop} className="inline-block group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={catsuleLogo}
                    alt="Catsule Corp Logo"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors leading-tight">Catsule Corp</h3>
                  <p className="text-primary/60 text-[10px] uppercase tracking-[0.2em] font-bold">{t.footer.tagline}</p>
                </div>
              </div>
            </a>
            <p className="text-white/50 leading-relaxed max-w-md text-base font-light">
              {t.footer.description}
            </p>
          </div>

          <div className="hidden md:block md:col-span-1" />

          {/* Services */}
          <div className="col-span-1 md:col-span-3 space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">{t.footer.services.title}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                  {t.footer.services.web}
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                  {t.footer.services.custom}
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-primary transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                  {t.footer.services.apis}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-3 space-y-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">{t.footer.contact_title}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-primary transition-all duration-300 block">
                  catsulecorp@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/catsulecorp/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 flex items-center">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/CatsuleCorp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 flex items-center">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-9 flex justify-center md:justify-start items-center text-[10px] font-bold tracking-widest uppercase text-white/20">
              © 2026 | Mens sana in corpore sano
            </div>

            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="flex items-center space-x-3 group px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500">
                <span className="text-primary font-black text-[10px] tracking-[0.3em]">HQ</span>
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">
                  {t.footer.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;