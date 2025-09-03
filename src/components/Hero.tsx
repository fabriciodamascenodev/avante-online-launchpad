import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Globe, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Tech background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated tech lines */}
          <g className="animate-tech-lines">
            <path 
              d="M100,100 L300,200 L500,150 L700,250 L900,200" 
              fill="none" 
              stroke="hsl(190 100% 60%)" 
              strokeWidth="2"
              strokeDasharray="10,5"
            />
            <path 
              d="M200,300 L400,400 L600,350 L800,450 L1000,400" 
              fill="none" 
              stroke="hsl(190 100% 60%)" 
              strokeWidth="2"
              strokeDasharray="15,10"
            />
          </g>
          
          {/* Floating circles */}
          <circle cx="150" cy="200" r="4" fill="hsl(190 100% 60%)" className="animate-float">
            <animate attributeName="cy" values="200;180;200" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="800" cy="300" r="6" fill="hsl(45 100% 75%)" className="animate-float">
            <animate attributeName="cy" values="300;280;300" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1000" cy="150" r="3" fill="hsl(190 100% 60%)" className="animate-float">
            <animate attributeName="cy" values="150;130;150" dur="6s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Company Logo/Name */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                AVANTE
              </span>
              <br />
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                SOLUÇÕES
              </span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ONLINE
              </span>
            </h1>
          </div>

          {/* Main tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Impulsionamos seu negócio com soluções digitais inovadoras e presença online de impacto
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-foreground">Desenvolvimento Ágil</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Code className="w-5 h-5 text-secondary" />
              <span className="text-foreground">Soluções Personalizadas</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-foreground">Presença Digital</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold group animate-pulse-glow"
            >
              Solicitar Orçamento
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 px-8 py-4 text-lg"
            >
              Nossos Projetos
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;