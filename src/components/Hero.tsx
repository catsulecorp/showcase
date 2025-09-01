import { useState, useRef } from "react";
import heroBackground from "/catusle-corp-hq.png";

const Hero = () => {
  const [imagePosition, setImagePosition] = useState(50); // 50% = center
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMouseMove(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    // Invertir la dirección para que sea más intuitivo
    setImagePosition(Math.max(0, Math.min(100, 100 - percentage)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleTouchMove(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    // Invertir la dirección para que sea más intuitivo
    setImagePosition(Math.max(0, Math.min(100, 100 - percentage)));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };
      return (
      <section 
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
                {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroBackground})`,
              backgroundPosition: `${imagePosition}% center`
            }}
          />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/25 to-background/10" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
          </div>
          

          

        </div>
        


      </div>
    </section>
  );
};

export default Hero;