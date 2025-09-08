import { useState, useEffect } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/30 backdrop-blur-sm">
      <div className="w-20 h-20 border-8 border-primary/20 border-t-primary rounded-full animate-spin" style={{ borderTopWidth: '12px', borderRadius: '50%' }}></div>
    </div>
  );
};

export default Loader;
