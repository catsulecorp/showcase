import { useState, useEffect } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ocultar el loader después de un tiempo mínimo
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800); // 800ms para que se vea el loader

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo animado */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Texto de carga */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Catsule Corp</h2>
          <p className="text-sm text-muted-foreground animate-pulse">
            Orquestando agentes de IA...
          </p>
        </div>
        
        {/* Barra de progreso animada */}
        <div className="w-48 h-1 bg-primary/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
