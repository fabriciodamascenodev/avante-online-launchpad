import { ExternalLink, Github, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Boutique Elegance",
      category: "Loja Virtual",
      description: "Plataforma completa de vendas online com integração de pagamentos, gestão de estoque e painel administrativo desenvolvido com IA.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "PostgreSQL", "IA Integration"],
      features: ["Catálogo inteligente", "Recomendações por IA", "Chatbot automatizado"],
      results: "+300% em vendas",
      link: "#"
    },
    {
      title: "Sistema Clínica Vida Saudável",
      category: "Sistema de Gestão",
      description: "Sistema completo para gestão de clínicas com agendamento inteligente, prontuários digitais e análise preditiva por IA.",
      image: "/placeholder.svg",
      tech: ["React", "Firebase", "AI Analytics", "API Integration"],
      features: ["Agendamento inteligente", "Análise de dados", "Relatórios automáticos"],
      results: "+150% eficiência",
      link: "#"
    },
    {
      title: "Portal Santos Advocacia",
      category: "Site Institucional",
      description: "Website profissional com sistema de consultas, blog automatizado e geração de conteúdo assistida por IA para SEO.",
      image: "/placeholder.svg",
      tech: ["Next.js", "CMS", "SEO AI", "Content Generation"],
      features: ["SEO automatizado", "Blog inteligente", "Consultas online"],
      results: "+200% clientes",
      link: "#"
    },
    {
      title: "App TechFix Assistência",
      category: "Aplicativo",
      description: "Aplicativo para gestão de assistência técnica com diagnóstico inteligente, estimativas automáticas e suporte por IA.",
      image: "/placeholder.svg",
      tech: ["React Native", "AI Diagnostics", "Cloud Functions", "ML Models"],
      features: ["Diagnóstico por IA", "Estimativas automáticas", "Suporte inteligente"],
      results: "+400% produtividade",
      link: "#"
    },
    {
      title: "Plataforma Construtora Mendes",
      category: "Portfólio Digital",
      description: "Portfólio interativo com tour virtual 3D, calculadora de orçamentos inteligente e geração automática de propostas.",
      image: "/placeholder.svg",
      tech: ["Three.js", "AI Calculator", "Document Generation", "VR Support"],
      features: ["Tours virtuais", "Orçamentos automáticos", "Propostas inteligentes"],
      results: "+250% conversões",
      link: "#"
    },
    {
      title: "Dashboard Consultoria FL",
      category: "Painel Analítico",
      description: "Dashboard executivo com análise preditiva, insights automáticos e relatórios gerados por IA para tomada de decisões.",
      image: "/placeholder.svg",
      tech: ["React", "D3.js", "Machine Learning", "Big Data"],
      features: ["Análise preditiva", "Insights automáticos", "Relatórios inteligentes"],
      results: "+180% decisões assertivas",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Nossos Últimos Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos mais recentes desenvolvidos com tecnologia de ponta e inteligência artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Eye className="w-12 h-12 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs border border-secondary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Principais Recursos:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-2 rounded-lg border border-primary/20">
                    <span className="text-sm font-semibold text-primary">Resultado: </span>
                    <span className="text-sm text-foreground">{project.results}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn border-primary/30 hover:border-primary hover:bg-primary/5"
                  >
                    <Eye className="w-4 h-4 mr-2 group-hover/btn:text-primary transition-colors" />
                    Ver Detalhes
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-secondary/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Pronto para Criar Seu Próximo Projeto?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Desenvolva sua solução digital com tecnologia de ponta e inteligência artificial. 
              Vamos transformar sua ideia em realidade.
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground">
              Iniciar Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;