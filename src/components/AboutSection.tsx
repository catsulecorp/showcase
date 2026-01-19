import { useLanguage } from "@/hooks/useLanguage";
import catsule from "/catsule.png";

const AboutSection = () => {
  const { t, isSpanish } = useLanguage();


  return (
    <section id="about" className="relative min-h-screen bg-[#0a0f1a] overflow-hidden py-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">Methodology</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 italic">
              {t.about.title}
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <a href="https://t.co/PHecmJGMV6" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={catsule}
                    alt="Catsule HQ"
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
                </a>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2 text-left">
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {t.about.approach.title}
                </h3>
                <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                  <p>{t.about.approach.description1}</p>
                  <p>{t.about.approach.description2}</p>
                </div>
              </div>

              <div className="pt-8">
                <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Focused on stability and clean architecture</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: "3+", label: t.about.stats.agents },
              { val: "5+", label: t.about.stats.projects },
              { val: "100%", label: t.about.stats.satisfaction }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl text-center hover:border-white/20 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">{stat.val}</div>
                  <p className="text-primary/60 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;