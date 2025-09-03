import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Globe, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Interactive Circuit Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Interactive Circuit Paths */}
          <g>
            {/* Main Circuit Lines */}
            <path 
              id="circuit1"
              d="M50,150 L200,150 L200,250 L350,250 L350,350 L500,350" 
              fill="none" 
              stroke="hsl(190 100% 60%)" 
              strokeWidth="3"
              className="transition-all duration-300 hover:stroke-[hsl(190_100%_80%)] hover:drop-shadow-[0_0_8px_hsl(190_100%_60%)] cursor-pointer opacity-40 hover:opacity-100"
            />
            <path 
              id="circuit2"
              d="M700,100 L850,100 L850,200 L1000,200 L1000,300 L1150,300" 
              fill="none" 
              stroke="hsl(45 100% 75%)" 
              strokeWidth="3"
              className="transition-all duration-300 hover:stroke-[hsl(45_100%_85%)] hover:drop-shadow-[0_0_8px_hsl(45_100%_75%)] cursor-pointer opacity-40 hover:opacity-100"
            />
            <path 
              id="circuit3"
              d="M100,450 L250,450 L250,550 L400,550 L400,650 L550,650" 
              fill="none" 
              stroke="hsl(190 100% 60%)" 
              strokeWidth="3"
              className="transition-all duration-300 hover:stroke-[hsl(190_100%_80%)] hover:drop-shadow-[0_0_8px_hsl(190_100%_60%)] cursor-pointer opacity-40 hover:opacity-100"
            />
            <path 
              id="circuit4"
              d="M800,500 L950,500 L950,600 L1100,600" 
              fill="none" 
              stroke="hsl(45 100% 75%)" 
              strokeWidth="3"
              className="transition-all duration-300 hover:stroke-[hsl(45_100%_85%)] hover:drop-shadow-[0_0_8px_hsl(45_100%_75%)] cursor-pointer opacity-40 hover:opacity-100"
            />
          </g>
          
          {/* Circuit Nodes */}
          <g>
            <circle cx="200" cy="150" r="6" fill="hsl(190 100% 60%)" 
              className="transition-all duration-300 hover:fill-[hsl(190_100%_80%)] hover:drop-shadow-[0_0_12px_hsl(190_100%_60%)] cursor-pointer opacity-60 hover:opacity-100" />
            <circle cx="350" cy="250" r="6" fill="hsl(190 100% 60%)" 
              className="transition-all duration-300 hover:fill-[hsl(190_100%_80%)] hover:drop-shadow-[0_0_12px_hsl(190_100%_60%)] cursor-pointer opacity-60 hover:opacity-100" />
            <circle cx="850" cy="100" r="6" fill="hsl(45 100% 75%)" 
              className="transition-all duration-300 hover:fill-[hsl(45_100%_85%)] hover:drop-shadow-[0_0_12px_hsl(45_100%_75%)] cursor-pointer opacity-60 hover:opacity-100" />
            <circle cx="1000" cy="200" r="6" fill="hsl(45 100% 75%)" 
              className="transition-all duration-300 hover:fill-[hsl(45_100%_85%)] hover:drop-shadow-[0_0_12px_hsl(45_100%_75%)] cursor-pointer opacity-60 hover:opacity-100" />
            <circle cx="250" cy="450" r="6" fill="hsl(190 100% 60%)" 
              className="transition-all duration-300 hover:fill-[hsl(190_100%_80%)] hover:drop-shadow-[0_0_12px_hsl(190_100%_60%)] cursor-pointer opacity-60 hover:opacity-100" />
            <circle cx="400" cy="550" r="6" fill="hsl(190 100% 60%)" 
              className="transition-all duration-300 hover:fill-[hsl(190_100%_80%)] hover:drop-shadow-[0_0_12px_hsl(190_100%_60%)] cursor-pointer opacity-60 hover:opacity-100" />
          </g>
          
          {/* Processor Units */}
          <g>
            <rect x="180" y="130" width="40" height="40" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="2" 
              className="transition-all duration-300 hover:stroke-[hsl(190_100%_80%)] hover:drop-shadow-[0_0_8px_hsl(190_100%_60%)] cursor-pointer opacity-50 hover:opacity-100" />
            <rect x="830" y="80" width="40" height="40" fill="none" stroke="hsl(45 100% 75%)" strokeWidth="2" 
              className="transition-all duration-300 hover:stroke-[hsl(45_100%_85%)] hover:drop-shadow-[0_0_8px_hsl(45_100%_75%)] cursor-pointer opacity-50 hover:opacity-100" />
            <rect x="230" y="430" width="40" height="40" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="2" 
              className="transition-all duration-300 hover:stroke-[hsl(190_100%_80%)] hover:drop-shadow-[0_0_8px_hsl(190_100%_60%)] cursor-pointer opacity-50 hover:opacity-100" />
          </g>
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