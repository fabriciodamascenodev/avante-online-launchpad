import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      business: "Boutique Elegance",
      rating: 5,
      text: "A Avante Soluções Online transformou minha loja online! O site ficou lindo e as vendas aumentaram 300% em 3 meses. Equipe muito profissional e atenciosa.",
      location: "São Paulo, SP"
    },
    {
      name: "João Santos",
      business: "Santos Advocacia",
      rating: 5,
      text: "Excelente trabalho! Criaram um site profissional que passou mais credibilidade para meu escritório. Agora recebo muito mais clientes através da internet.",
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Ana Costa",
      business: "Clínica Vida Saudável",
      rating: 5,
      text: "Superou todas as expectativas! O site é moderno, rápido e fácil de usar. Os pacientes elogiam muito o sistema de agendamento online. Recomendo!",
      location: "Belo Horizonte, MG"
    },
    {
      name: "Carlos Oliveira",
      business: "TechFix Assistência",
      rating: 5,
      text: "Trabalho impecável! Desenvolveram um sistema completo para minha assistência técnica. Agora consigo gerenciar tudo online. Muito satisfeito com o resultado.",
      location: "Brasília, DF"
    },
    {
      name: "Fernanda Lima",
      business: "Consultoria FL",
      rating: 5,
      text: "A presença digital que eu precisava! Site elegante, otimizado e que me posiciona como autoridade no mercado. Investimento que valeu cada centavo.",
      location: "Curitiba, PR"
    },
    {
      name: "Roberto Mendes",
      business: "Construtora Mendes",
      rating: 5,
      text: "Equipe fantástica! Entenderam perfeitamente nossa necessidade e criaram um portfólio online incrível. Nossos clientes ficaram impressionados.",
      location: "Porto Alegre, RS"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Depoimentos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes falam sobre nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 transition-all duration-300 hover:shadow-card hover:border-primary/30 hover:transform hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary opacity-60" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-secondary text-secondary" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t border-border/30 pt-4">
                <h4 className="font-semibold text-foreground text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-primary font-medium">
                  {testimonial.business}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-background/20 backdrop-blur-sm px-6 py-3 rounded-full border border-border/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-foreground font-semibold">Google Meu Negócio</span>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-muted-foreground">4.9/5 ⭐ (127 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;