import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Lightbulb, Globe2 } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      icon: Rocket,
      title: "AVANTE",
      subtitle: "Sempre à Frente",
      description: "Estamos sempre um passo à frente das tendências tecnológicas, oferecendo soluções inovadoras que impulsionam seu negócio para o futuro.",
      features: ["Tecnologias Emergentes", "Metodologias Ágeis", "Inovação Constante"],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Lightbulb,
      title: "SOLUÇÕES",
      subtitle: "Inteligentes e Eficazes",
      description: "Desenvolvemos soluções personalizadas que resolvem problemas reais, otimizam processos e geram resultados mensuráveis para sua empresa.",
      features: ["Desenvolvimento Custom", "Integração de Sistemas", "Automação Inteligente"],
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Globe2,
      title: "PRESENÇA ONLINE",
      subtitle: "Visibilidade Digital",
      description: "Construímos e fortalecemos sua presença digital com estratégias eficazes que conectam sua marca ao seu público-alvo.",
      features: ["Sites Responsivos", "E-commerce", "Marketing Digital"],
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background tech elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Nossos Três Pilares
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A base sólida que sustenta todas as nossas soluções digitais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="relative group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:shadow-glow/20 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-8 relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full ${pillar.gradient} flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="group/btn text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 p-0 h-auto font-semibold"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold group"
          >
            Converse Conosco
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pillars;