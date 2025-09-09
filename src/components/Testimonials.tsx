import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Maria Silva",
    business: "Boutique Elegance",
    rating: 5,
    text: "A Avante Soluções Online transformou minha loja online! O site ficou lindo e as vendas aumentaram 300% em 3 meses. Equipe muito profissional e atenciosa.",
    location: "São Paulo, SP"
  }, {
    name: "João Santos",
    business: "Santos Advocacia",
    rating: 5,
    text: "Excelente trabalho! Criaram um site profissional que passou mais credibilidade para meu escritório. Agora recebo muito mais clientes através da internet.",
    location: "Rio de Janeiro, RJ"
  }, {
    name: "Ana Costa",
    business: "Clínica Vida Saudável",
    rating: 5,
    text: "Superou todas as expectativas! O site é moderno, rápido e fácil de usar. Os pacientes elogiam muito o sistema de agendamento online. Recomendo!",
    location: "Belo Horizonte, MG"
  }, {
    name: "Carlos Oliveira",
    business: "TechFix Assistência",
    rating: 5,
    text: "Trabalho impecável! Desenvolveram um sistema completo para minha assistência técnica. Agora consigo gerenciar tudo online. Muito satisfeito com o resultado.",
    location: "Brasília, DF"
  }, {
    name: "Fernanda Lima",
    business: "Consultoria FL",
    rating: 5,
    text: "A presença digital que eu precisava! Site elegante, otimizado e que me posiciona como autoridade no mercado. Investimento que valeu cada centavo.",
    location: "Curitiba, PR"
  }, {
    name: "Roberto Mendes",
    business: "Construtora Mendes",
    rating: 5,
    text: "Equipe fantástica! Entenderam perfeitamente nossa necessidade e criaram um portfólio online incrível. Nossos clientes ficaram impressionados.",
    location: "Porto Alegre, RS"
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Depoimentos de Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços e resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-6 h-6 text-primary/60 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-border/30 pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary font-medium">{testimonial.business}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;