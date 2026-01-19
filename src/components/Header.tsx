import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import catsuleLogo from "/catsule-corp-logo-arg-transparent.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, isSpanish } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121826]/90 backdrop-blur-md border-b border-white/5 shadow-2xl">
      <div className="container mx-auto pl-24 pr-24 py-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center space-x-4 group"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <img
              src={catsuleLogo}
              alt="Catsule Corp Logo"
              className="w-10 h-10"
            />
          </div>
          <div>
            <span className="text-xl font-bold text-white group-hover:text-primary transition-colors block leading-tight">Catsule Corp</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60">{t.header.tagline}</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-sm font-medium transition-all duration-300 text-white/70 hover:text-primary"
            >
              {t.header.nav.home}
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-sm font-medium transition-all duration-300 text-white/70 hover:text-primary"
            >
              {t.header.nav.about}
            </a>
          </nav>

          <Button
            variant="tech"
            size="sm"
            className="h-9 px-6 bg-white/5 hover:bg-white/10 text-white border-white/10"
            asChild
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              {t.header.nav.contact}
            </a>
          </Button>

          {/* Improved Language Switcher */}
          <Link
            to={isSpanish ? "/" : "/es"}
            className="flex items-center space-x-1 px-3 h-9 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 group"
          >
            <span className={`text-[10px] font-bold ${!isSpanish ? 'text-primary' : 'text-white/40 group-hover:text-white/60'}`}>EN</span>
            <span className="text-white/5 text-[10px]">|</span>
            <span className={`text-[10px] font-bold ${isSpanish ? 'text-primary' : 'text-white/40 group-hover:text-white/60'}`}>ES</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link
            to={isSpanish ? "/" : "/es"}
            className="flex items-center space-x-1 px-2 h-8 rounded-full bg-white/5 border border-white/10"
          >
            <span className={`text-[10px] font-bold ${!isSpanish ? 'text-primary' : 'text-white/40'}`}>EN</span>
            <span className="text-white/5 text-[10px]">|</span>
            <span className={`text-[10px] font-bold ${isSpanish ? 'text-primary' : 'text-white/40'}`}>ES</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-white/5 group rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white group-hover:text-primary transition-colors" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#121826] border-b border-white/5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="container mx-auto px-6 py-8 space-y-6">
            <a
              href="#home"
              className="block text-lg font-medium transition-colors text-white/70 hover:text-primary"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              {t.header.nav.home}
            </a>
            <a
              href="#about"
              className="block text-lg font-medium transition-colors text-white/70 hover:text-primary"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              {t.header.nav.about}
            </a>
            <div className="pt-4">
              <Button
                variant="tech"
                className="w-full py-6 text-base bg-white/5 text-white"
                asChild
              >
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  {t.header.nav.contact}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;