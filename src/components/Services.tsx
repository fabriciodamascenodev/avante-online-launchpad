import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Cloud, 
  Shield,
  ArrowRight,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
      features: ["React & Next.js", "Landing Pages", "Sistemas Web"],
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicações móveis nativas e híbridas para iOS e Android.",
      features: ["React Native", "Flutter", "PWA"],
      color: "text-secondary"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Lojas virtuais completas com integração de pagamentos e gestão.",
      features: ["Shopify", "WooCommerce", "Soluções Custom"],
      color: "text-primary"
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Otimização para mecanismos de busca e estratégias de marketing digital.",
      features: ["Google Ads", "SEO Técnico", "Analytics"],
      color: "text-secondary"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestrutura em nuvem, deploy automatizado e monitoramento.",
      features: ["AWS", "Docker", "CI/CD"],
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteção de dados, autenticação e compliance com LGPD.",
      features: ["SSL", "Backup", "Auditoria"],
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/50 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-secondary rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">NOSSOS SERVIÇOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Soluções Completas
            </span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Para Sua Empresa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de serviços digitais para acelerar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-card overflow-hidden cursor-pointer"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-6 relative z-10">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-card to-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full border border-border/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 p-0 h-auto font-semibold group/btn"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-all duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para transformar sua presença digital?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe especializada está pronta para desenvolver a solução perfeita para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-3 font-semibold group"
              >
                Solicitar Proposta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 px-8 py-3"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;