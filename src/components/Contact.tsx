import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <radialGradient id="contactGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(190 100% 60%)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="150" r="100" fill="url(#contactGradient)" className="animate-float" />
          <circle cx="800" cy="300" r="150" fill="url(#contactGradient)" className="animate-float" style={{ animationDelay: '2s' }} />
          <circle cx="1000" cy="100" r="80" fill="url(#contactGradient)" className="animate-float" style={{ animationDelay: '4s' }} />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Vamos Conversar?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Entre em Contato
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa equipe está pronta para atender você. Escolha a forma de contato que preferir e vamos começar a trabalhar juntos!
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefone</h4>
                    <p className="text-primary hover:text-primary/80 transition-colors">+55 (11) 99999-9999</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-mail</h4>
                    <p className="text-secondary hover:text-secondary/80 transition-colors">contato@avanteonline.com.br</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-primary hover:text-primary/80 transition-colors">Resposta imediata</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick CTA */}
            <div className="pt-6">
              <Button 
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 py-4 text-lg font-semibold group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Falar no WhatsApp Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Solicite um Orçamento
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome Completo
                  </label>
                  <Input 
                    placeholder="Seu nome completo"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input 
                    placeholder="(11) 99999-9999"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Empresa
                  </label>
                  <Input 
                    placeholder="Nome da sua empresa"
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tipo de Projeto
                </label>
                <select className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:border-primary focus:outline-none transition-colors text-foreground">
                  <option value="">Selecione o tipo de projeto</option>
                  <option value="website">Website Institucional</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="app">Aplicativo Mobile</option>
                  <option value="system">Sistema Web</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Descreva seu Projeto
                </label>
                <Textarea 
                  placeholder="Conte-nos mais sobre seu projeto, objetivos e expectativas..."
                  rows={4}
                  className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-secondary text-secondary-foreground hover:shadow-glow transition-all duration-300 py-4 text-lg font-semibold group"
              >
                <Send className="mr-2 w-5 h-5" />
                Enviar Solicitação
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;