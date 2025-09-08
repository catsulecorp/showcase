import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SideNavigation = () => {
  const location = useLocation();

  // Función para obtener la navegación basada en la ruta actual
  const getNavigation = () => {
    const currentPath = location.pathname;
    
    switch (currentPath) {
      case '/':
        return {
          current: 'Inicio',
          prev: null,
          next: { label: 'Nosotros', path: '/nosotros' }
        };
      case '/nosotros':
        return {
          current: 'Nosotros',
          prev: { label: 'Inicio', path: '/' },
          next: { label: 'Trabajemos Juntos', path: '/contacto' }
        };
      case '/contacto':
        return {
          current: 'Trabajemos Juntos',
          prev: { label: 'Nosotros', path: '/nosotros' },
          next: null
        };
      default:
        return {
          current: 'Inicio',
          prev: null,
          next: { label: 'Nosotros', path: '/nosotros' }
        };
    }
  };

  const navigation = getNavigation();

  return (
    <>
      {/* Flecha izquierda */}
      {navigation.prev && (
        <Link 
          to={navigation.prev.path} 
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 bg-background/20 backdrop-blur-sm border border-accent rounded-full p-3 hover:bg-primary hover:text-background transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </Link>
      )}

      {/* Flecha derecha */}
      {navigation.next && (
        <Link 
          to={navigation.next.path} 
          className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 bg-background/20 backdrop-blur-sm border border-accent rounded-full p-3 hover:bg-yellow-500 hover:text-background transition-all duration-300 shadow-lg ${
            location.pathname === '/' ? 'animate-pulse' : ''
          }`}
          style={{
            animation: location.pathname === '/' ? 'slideRight 4s ease-in-out infinite' : 'none'
          }}
        >
          <ChevronRight className="h-6 w-6" />
        </Link>
      )}
      
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
    </>
  );
};

export default SideNavigation;
