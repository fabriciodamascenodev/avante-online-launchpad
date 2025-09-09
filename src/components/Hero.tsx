import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Globe, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
const Hero = () => {
  const circuitRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circuitRef.current) return;
      const rect = circuitRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;

      // Update CSS custom properties for mouse position
      circuitRef.current.style.setProperty('--mouse-x', `${x}%`);
      circuitRef.current.style.setProperty('--mouse-y', `${y}%`);
    };
    const container = circuitRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark pt-16">
      {/* Interactive Electronic Circuits */}
      <div ref={circuitRef} className="absolute inset-0 opacity-30 circuit-container" style={{
      '--mouse-x': '50%',
      '--mouse-y': '50%'
    } as React.CSSProperties}>
        {/* Main Circuit Board Grid */}
        <div className="absolute inset-0 circuit-grid"></div>
        
        {/* Electronic Circuit Paths */}
        <svg className="w-full h-full absolute inset-0" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Central Processing Hub */}
          <g className="circuit-hub">
            <rect x="580" y="380" width="40" height="40" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="2" className="circuit-element hub-core" />
            <circle cx="600" cy="400" r="3" fill="hsl(190 100% 60%)" className="circuit-element hub-center" />
          </g>

          {/* Main Circuit Branches */}
          <g className="circuit-branch branch-1">
            <path d="M600,380 L600,300 L500,300 L500,200 L400,200" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="2" className="circuit-path" />
            <circle cx="500" cy="300" r="4" fill="hsl(190 100% 60%)" className="circuit-node" />
            <circle cx="500" cy="200" r="4" fill="hsl(190 100% 60%)" className="circuit-node" />
            <rect x="380" y="190" width="20" height="20" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="1.5" className="circuit-chip" />
          </g>

          <g className="circuit-branch branch-2">
            <path d="M620,400 L720,400 L720,300 L820,300 L820,250" fill="none" stroke="hsl(45 100% 75%)" strokeWidth="2" className="circuit-path" />
            <circle cx="720" cy="400" r="4" fill="hsl(45 100% 75%)" className="circuit-node" />
            <circle cx="720" cy="300" r="4" fill="hsl(45 100% 75%)" className="circuit-node" />
            <rect x="810" y="240" width="20" height="20" fill="none" stroke="hsl(45 100% 75%)" strokeWidth="1.5" className="circuit-chip" />
          </g>

          <g className="circuit-branch branch-3">
            <path d="M600,420 L600,500 L700,500 L700,600 L800,600" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="2" className="circuit-path" />
            <circle cx="600" cy="500" r="4" fill="hsl(190 100% 60%)" className="circuit-node" />
            <circle cx="700" cy="500" r="4" fill="hsl(190 100% 60%)" className="circuit-node" />
            <rect x="790" y="590" width="20" height="20" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="1.5" className="circuit-chip" />
          </g>

          <g className="circuit-branch branch-4">
            <path d="M580,400 L480,400 L480,500 L380,500 L380,550" fill="none" stroke="hsl(45 100% 75%)" strokeWidth="2" className="circuit-path" />
            <circle cx="480" cy="400" r="4" fill="hsl(45 100% 75%)" className="circuit-node" />
            <circle cx="480" cy="500" r="4" fill="hsl(45 100% 75%)" className="circuit-node" />
            <rect x="370" y="540" width="20" height="20" fill="none" stroke="hsl(45 100% 75%)" strokeWidth="1.5" className="circuit-chip" />
          </g>

          {/* Data Flow Lines */}
          <g className="data-flow">
            <path d="M200,150 L300,150 L300,250 L200,250" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="1" strokeDasharray="5,5" className="data-path" />
            <path d="M900,350 L1000,350 L1000,450 L900,450" fill="none" stroke="hsl(45 100% 75%)" strokeWidth="1" strokeDasharray="5,5" className="data-path" />
          </g>

          {/* Connection Points */}
          <g className="connection-points">
            <circle cx="300" cy="150" r="2" fill="hsl(190 100% 60%)" className="connection-dot" />
            <circle cx="200" cy="250" r="2" fill="hsl(190 100% 60%)" className="connection-dot" />
            <circle cx="900" cy="350" r="2" fill="hsl(45 100% 75%)" className="connection-dot" />
            <circle cx="1000" cy="450" r="2" fill="hsl(45 100% 75%)" className="connection-dot" />
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
              <span className="text-foreground">Desenvolvimento Assistido por IA</span>
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
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold group animate-pulse-glow">
              Solicitar Orçamento
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 px-8 py-4 text-lg">
              Nossos Projetos
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          
        </div>
      </div>
    </section>;
};
export default Hero;