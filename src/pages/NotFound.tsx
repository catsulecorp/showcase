import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const NotFound = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Ocultar el loader después de un tiempo
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-start md:items-center justify-center w-full pt-24 md:pt-0">
        <div className="w-full h-auto md:h-full flex items-center justify-center">
          <img 
            src="/404.png" 
            alt="404 - Página no encontrada" 
            className="w-full h-auto max-h-[60vh] md:max-h-none md:h-full object-contain"
          />
        </div>
        
        {/* Flecha izquierda para ir a Nosotros */}
        <Link
          to="/nosotros"
          className="fixed left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-50 bg-background/20 backdrop-blur-sm border border-accent rounded-full p-3 md:p-4 shadow-lg hover:bg-primary hover:text-background transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 group-hover:animate-none" />
        </Link>
        
        {/* Flecha derecha para ir a Trabajemos Juntos */}
        <Link
          to="/contacto"
          className="fixed right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-50 bg-background/20 backdrop-blur-sm border border-accent rounded-full p-3 md:p-4 shadow-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7 group-hover:animate-none" />
        </Link>
      </main>
      
      <Footer />
      
      <style jsx>{`
        @keyframes slideRight {
          0%, 85%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          5%, 25% {
            transform: translateY(-50%) translateX(6px);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
