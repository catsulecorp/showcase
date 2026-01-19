import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1a] overflow-hidden">
      <Header />

      <main className="flex-1 relative flex items-center justify-center py-40 md:py-60">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="relative inline-block">
              <span className="text-[12rem] md:text-[18rem] font-black text-white/5 tracking-tighter leading-none select-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight italic">
                  Lost in <span className="text-primary tracking-widest">ORBIT</span>
                </h1>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-white/40 font-light leading-relaxed max-w-lg mx-auto">
                The capsule you are looking for has disconnected from the main station or never existed in this sector.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center px-10 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all duration-300 shadow-xl shadow-primary/20 group"
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Return to Mission Control
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
