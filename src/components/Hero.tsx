import heroBackground from "/catsule-corp-hq.png";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a]">
      {/* Background Image with Parallax-like feel */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: '35% center'
        }}
      />

      {/* Advanced Overlay System */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121826]/15 via-transparent to-[#0a0f1a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/40 via-transparent to-transparent opacity-20" />

      {/* Tech Grid & Glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-[45vh]">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12">
          {/* Advanced Tech Badge */}
          <div className="relative group cursor-default">
            <div className="relative px-8 py-3 rounded-full bg-[#121826]/80 border border-white/10 backdrop-blur-xl flex items-center space-x-4 shadow-2xl">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]"></span>
                </span>
                <div className="h-4 w-[1px] bg-white/10 mx-2" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
                  <span className="text-primary mr-2">Pipeline:</span>
                  Operational & Stable
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Keeping it minimal as requested, but adding a spacer or subtle element if needed */}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 hover:bg-white/10 transition-all duration-500 group animate-bounce-slow"
        >
          <svg
            className="w-6 h-6 group-hover:translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;