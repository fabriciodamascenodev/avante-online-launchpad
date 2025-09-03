import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter,
  Code,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-dark border-t border-border/50 relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400">
          <defs>
            <pattern id="footerGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(190 100% 60%)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  AVANTE SOLUÇÕES
                </span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  ONLINE
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Impulsionamos seu negócio com soluções digitais inovadoras, 
                sempre à frente das tendências tecnológicas para garantir sua presença online de impacto.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>contato@avanteonline.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <Button 
                variant="ghost" 
                size="icon"
                className="w-10 h-10 rounded-full bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="w-10 h-10 rounded-full bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="w-10 h-10 rounded-full bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Desenvolvimento Web",
                "Apps Mobile",
                "E-commerce",
                "SEO & Marketing",
                "Cloud & DevOps",
                "Segurança Digital"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Empresa</h4>
            <ul className="space-y-3">
              {[
                "Sobre Nós",
                "Nossos Projetos",
                "Depoimentos",
                "Blog",
                "Carreiras",
                "Contato"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-secondary rounded-full group-hover:scale-150 transition-transform"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code className="w-4 h-4" />
            <span>© 2024 Avante Soluções Online. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Termos de Uso
            </a>
            
            {/* Scroll to top */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-4 right-4 w-1 h-1 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
    </footer>
  );
};

export default Footer;