import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto. Sites simples podem ficar prontos em 7-15 dias, enquanto projetos mais complexos podem levar de 3-8 semanas. Sempre definimos prazos claros no início do projeto."
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Oferecemos 30 dias de suporte gratuito após a entrega para ajustes e dúvidas. Também temos planos de manutenção mensal para atualizações contínuas e suporte técnico."
    },
    {
      question: "O site será responsivo (mobile-friendly)?",
      answer: "Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo perfeita visualização em smartphones, tablets e desktops. É fundamental nos dias de hoje."
    },
    {
      question: "Vocês trabalham com e-commerce?",
      answer: "Sim, desenvolvemos lojas virtuais completas com sistemas de pagamento, gestão de produtos, controle de estoque e integração com correios para cálculo de frete."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Nosso processo inclui: 1) Briefing e análise de necessidades, 2) Criação do protótipo e layout, 3) Desenvolvimento e programação, 4) Testes e ajustes, 5) Entrega e treinamento. Você acompanha cada etapa."
    },
    {
      question: "Vocês fazem a hospedagem do site?",
      answer: "Oferecemos consultoria para escolha da melhor hospedagem e podemos gerenciar a hospedagem para você. Trabalhamos com os melhores provedores do mercado para garantir performance e segurança."
    },
    {
      question: "O site terá otimização para Google (SEO)?",
      answer: "Sim! Todos os nossos sites são desenvolvidos com técnicas de SEO on-page: URLs amigáveis, meta tags otimizadas, velocidade de carregamento, estrutura semântica e outras práticas para melhor posicionamento."
    },
    {
      question: "Posso fazer alterações no site depois de pronto?",
      answer: "Desenvolvemos sites com painéis administrativos intuitivos onde você pode gerenciar conteúdo facilmente. Para alterações mais complexas, oferecemos suporte técnico especializado."
    }
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços de desenvolvimento web
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg px-6 transition-all duration-300 hover:shadow-card hover:border-primary/30"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;