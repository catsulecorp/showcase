import heroBackground from "/catusle-corp-hq.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center md:bg-center bg-right-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
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