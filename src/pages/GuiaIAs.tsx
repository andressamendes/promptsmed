import { ArrowLeft, ExternalLink, Sparkles, Brain, Search, Mic, BookOpen, CheckCircle, XCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { cn } from "@/lib/utils";

interface AIData {
  id: string;
  name: string;
  tagline: string;
  color: string;
  bgColor: string;
  borderColor: string;
  link: string;
  icon: React.ReactNode;
  strengths: string[];
  weaknesses: string[];
  bestFor: string[];
  useCases: { title: string; description: string }[];
  tips: string[];
}

const aiData: AIData[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "O versátil e rápido",
    color: "text-[#10a37f]",
    bgColor: "bg-[#10a37f]/10",
    borderColor: "border-[#10a37f]/30",
    link: "https://chat.openai.com/",
    icon: <Sparkles className="w-6 h-6" />,
    strengths: [
      "Excelente para saídas estruturadas e formatadas",
      "Muito rápido em gerar listas e cronogramas",
      "Bom em seguir formatos específicos (CSV, tabelas)",
      "Interface familiar e fácil de usar",
      "Ótimo para tarefas repetitivas e padronizadas",
    ],
    weaknesses: [
      "Pode ser superficial em análises complexas",
      "Às vezes sacrifica profundidade por velocidade",
      "Menos nuançado em raciocínio clínico sutil",
    ],
    bestFor: [
      "Flashcards para Anki",
      "Cronogramas de estudo",
      "Listas e checklists",
      "Conversão de formatos",
      "Tarefas rápidas e objetivas",
    ],
    useCases: [
      { title: "Flashcards Otimizados", description: "Gera 30 flashcards formatados para importação direta no Anki" },
      { title: "Plano de Revisão Espaçada", description: "Cria cronogramas detalhados com intervalos de revisão" },
      { title: "Protocolo Pomodoro", description: "Estrutura sessões de estudo com tempos e pausas" },
    ],
    tips: [
      "Use para tarefas que precisam de formato específico",
      "Ideal quando você precisa de velocidade",
      "Bom para primeira versão de materiais estruturados",
    ],
  },
  {
    id: "claude",
    name: "Claude",
    tagline: "O professor socrático",
    color: "text-[#cc785c]",
    bgColor: "bg-[#cc785c]/10",
    borderColor: "border-[#cc785c]/30",
    link: "https://claude.ai/",
    icon: <Brain className="w-6 h-6" />,
    strengths: [
      "Raciocínio clínico excepcional e nuançado",
      "Excelente para casos clínicos complexos",
      "Tutoria socrática de alta qualidade",
      "Análise profunda e contextualizada",
      "Melhor em conteúdo longo e detalhado",
      "Identificação sutil de misconceptions",
    ],
    weaknesses: [
      "Pode ser mais lento que outros modelos",
      "Às vezes prolixo demais",
      "Menos eficiente para tarefas simples e diretas",
    ],
    bestFor: [
      "Casos clínicos progressivos",
      "Método socrático",
      "Análise de erros",
      "Raciocínio diagnóstico",
      "Conteúdo acadêmico profundo",
      "Tutoria personalizada",
    ],
    useCases: [
      { title: "Casos Clínicos Progressivos", description: "Simula casos interativos com feedback a cada etapa" },
      { title: "Método Socrático", description: "Guia o aprendizado através de perguntas estratégicas" },
      { title: "Análise de Padrões de Erro", description: "Identifica misconceptions e cria correções personalizadas" },
    ],
    tips: [
      "Use para temas que exigem profundidade",
      "Ideal para prática de raciocínio clínico",
      "Melhor escolha quando precisa de feedback nuançado",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: "O visual e multimodal",
    color: "text-[#8e8ea0]",
    bgColor: "bg-[#8e8ea0]/10",
    borderColor: "border-[#8e8ea0]/30",
    link: "https://gemini.google.com/",
    icon: <Sparkles className="w-6 h-6" />,
    strengths: [
      "Excelente para descrições visuais detalhadas",
      "Integração nativa com Google (Docs, Drive)",
      "Bom em criar mapas conceituais estruturados",
      "Capacidade multimodal (imagens + texto)",
      "Forte em síntese de informações visuais",
    ],
    weaknesses: [
      "Menos consistente em tarefas puramente textuais",
      "Pode ser menos preciso em detalhes médicos específicos",
      "Interface ainda em evolução",
    ],
    bestFor: [
      "Mapas conceituais visuais",
      "Dual coding (visual + verbal)",
      "Descrição de diagramas",
      "Integração com Google Workspace",
      "Conteúdo multimodal",
    ],
    useCases: [
      { title: "Mapas Conceituais Estruturados", description: "Cria hierarquias visuais com conexões claras" },
      { title: "Dual Coding Visual", description: "Gera descrições para criar diagramas e ilustrações" },
      { title: "Análise de Imagens Médicas", description: "Descreve e explica imagens quando fornecidas" },
    ],
    tips: [
      "Use quando precisar de representações visuais",
      "Ideal para materiais que serão transformados em diagramas",
      "Bom para integrar com seu Google Drive",
    ],
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    tagline: "O criador de podcasts",
    color: "text-[#4285f4]",
    bgColor: "bg-[#4285f4]/10",
    borderColor: "border-[#4285f4]/30",
    link: "https://notebooklm.google.com/",
    icon: <Mic className="w-6 h-6" />,
    strengths: [
      "Gera podcasts de áudio automaticamente",
      "Excelente para síntese de múltiplos documentos",
      "Cria conversas naturais entre apresentadores",
      "Ideal para aprendizado passivo (caminhadas, transporte)",
      "Transforma PDFs e artigos em áudio explicativo",
    ],
    weaknesses: [
      "Limitado a formatos de áudio/podcast",
      "Menos interativo que chatbots tradicionais",
      "Requer upload de documentos fonte",
    ],
    bestFor: [
      "Podcasts educativos",
      "Síntese de artigos científicos",
      "Aprendizado durante deslocamento",
      "Revisão de múltiplas fontes",
      "Conteúdo em áudio",
    ],
    useCases: [
      { title: "Podcast Educativo AI", description: "Transforma tema médico em episódio de podcast com dois apresentadores" },
      { title: "Síntese de Literatura", description: "Resume múltiplos artigos em uma discussão coerente" },
      { title: "Revisão Auditiva", description: "Cria resumos em áudio para ouvir durante atividades físicas" },
    ],
    tips: [
      "Use para transformar leituras em áudio",
      "Ideal para revisar durante exercícios ou transporte",
      "Upload seus PDFs e artigos para síntese",
    ],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tagline: "O pesquisador científico",
    color: "text-[#20b8cd]",
    bgColor: "bg-[#20b8cd]/10",
    borderColor: "border-[#20b8cd]/30",
    link: "https://www.perplexity.ai/",
    icon: <Search className="w-6 h-6" />,
    strengths: [
      "Busca em tempo real de informações atualizadas",
      "Cita fontes automaticamente",
      "Excelente para evidências científicas",
      "Acesso a literatura médica recente",
      "Ideal para pesquisa PICO estruturada",
    ],
    weaknesses: [
      "Menos criativo que outros modelos",
      "Focado em busca, menos em criação",
      "Pode ser superficial sem direcionamento adequado",
    ],
    bestFor: [
      "Busca de evidências científicas",
      "Pesquisa PICO/PubMed",
      "Informações atualizadas",
      "Verificação de fatos",
      "Referências bibliográficas",
    ],
    useCases: [
      { title: "Busca de Evidências", description: "Estrutura pesquisa PICO e encontra artigos relevantes" },
      { title: "Atualização Científica", description: "Busca guidelines e consensos mais recentes" },
      { title: "Fact-Checking Médico", description: "Verifica informações com fontes confiáveis" },
    ],
    tips: [
      "Use para pesquisas que precisam de fontes",
      "Ideal para verificar informações clínicas",
      "Melhor escolha para literatura atualizada",
    ],
  },
];

const comparisonTable = [
  { feature: "Flashcards/Anki", chatgpt: true, claude: false, gemini: false, notebooklm: false, perplexity: false },
  { feature: "Casos Clínicos", chatgpt: false, claude: true, gemini: false, notebooklm: false, perplexity: false },
  { feature: "Mapas Conceituais", chatgpt: false, claude: false, gemini: true, notebooklm: false, perplexity: false },
  { feature: "Podcasts/Áudio", chatgpt: false, claude: false, gemini: false, notebooklm: true, perplexity: false },
  { feature: "Pesquisa Científica", chatgpt: false, claude: false, gemini: false, notebooklm: false, perplexity: true },
  { feature: "Tutoria Socrática", chatgpt: false, claude: true, gemini: false, notebooklm: false, perplexity: false },
  { feature: "Cronogramas", chatgpt: true, claude: false, gemini: false, notebooklm: false, perplexity: false },
  { feature: "Análise de Erros", chatgpt: false, claude: true, gemini: false, notebooklm: false, perplexity: false },
  { feature: "Dual Coding Visual", chatgpt: false, claude: false, gemini: true, notebooklm: false, perplexity: false },
  { feature: "Síntese de Artigos", chatgpt: false, claude: false, gemini: false, notebooklm: true, perplexity: true },
];

export default function GuiaIAs() {
  return (
    <>
      <Helmet>
        <title>Guia de IAs para Estudantes de Medicina | PromptLab MED</title>
        <meta name="description" content="Comparativo completo das melhores IAs para estudantes de medicina: ChatGPT, Claude, Gemini, NotebookLM e Perplexity. Descubra qual usar para cada tipo de estudo." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 glass border-b border-border">
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Voltar para Prompts</span>
              </Link>
              <Badge variant="outline" className="gap-1">
                <BookOpen className="w-3 h-3" />
                Guia Comparativo
              </Badge>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 bg-pattern">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 gap-1">
                <Sparkles className="w-3 h-3" />
                Guia Completo
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Qual IA Usar para{" "}
                <span className="gradient-text">Cada Tipo de Estudo?</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Comparativo detalhado das 5 principais IAs para estudantes de medicina.
                Descubra os pontos fortes de cada uma e quando utilizá-las.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-12 border-b border-border">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6 text-center">Comparativo Rápido</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Tarefa</th>
                    <th className="py-3 px-2 text-center">
                      <span className="text-[#10a37f] font-semibold">ChatGPT</span>
                    </th>
                    <th className="py-3 px-2 text-center">
                      <span className="text-[#cc785c] font-semibold">Claude</span>
                    </th>
                    <th className="py-3 px-2 text-center">
                      <span className="text-[#8e8ea0] font-semibold">Gemini</span>
                    </th>
                    <th className="py-3 px-2 text-center">
                      <span className="text-[#4285f4] font-semibold">NotebookLM</span>
                    </th>
                    <th className="py-3 px-2 text-center">
                      <span className="text-[#20b8cd] font-semibold">Perplexity</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={row.feature} className={cn("border-b border-border/50", i % 2 === 0 && "bg-muted/20")}>
                      <td className="py-3 px-4 font-medium">{row.feature}</td>
                      <td className="py-3 px-2 text-center">
                        {row.chatgpt ? (
                          <Star className="w-4 h-4 text-[#10a37f] mx-auto fill-current" />
                        ) : (
                          <span className="text-muted-foreground/30">-</span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {row.claude ? (
                          <Star className="w-4 h-4 text-[#cc785c] mx-auto fill-current" />
                        ) : (
                          <span className="text-muted-foreground/30">-</span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {row.gemini ? (
                          <Star className="w-4 h-4 text-[#8e8ea0] mx-auto fill-current" />
                        ) : (
                          <span className="text-muted-foreground/30">-</span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {row.notebooklm ? (
                          <Star className="w-4 h-4 text-[#4285f4] mx-auto fill-current" />
                        ) : (
                          <span className="text-muted-foreground/30">-</span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {row.perplexity ? (
                          <Star className="w-4 h-4 text-[#20b8cd] mx-auto fill-current" />
                        ) : (
                          <span className="text-muted-foreground/30">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Cards */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Análise Detalhada de Cada IA</h2>
            <div className="grid gap-8">
              {aiData.map((ai) => (
                <Card key={ai.id} className={cn("overflow-hidden border-l-4", ai.borderColor)}>
                  <CardHeader className={cn("pb-4", ai.bgColor)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg", ai.bgColor, ai.color)}>
                          {ai.icon}
                        </div>
                        <div>
                          <CardTitle className={cn("text-xl", ai.color)}>{ai.name}</CardTitle>
                          <CardDescription className="text-sm">{ai.tagline}</CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className={cn("gap-1.5", ai.color, ai.borderColor)}
                      >
                        <a href={ai.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Acessar
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Pontos Fortes */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm text-emerald-600">
                          <CheckCircle className="w-4 h-4" />
                          Pontos Fortes
                        </h4>
                        <ul className="space-y-2">
                          {ai.strengths.map((strength, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-emerald-500 mt-1">●</span>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pontos Fracos */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm text-rose-600">
                          <XCircle className="w-4 h-4" />
                          Limitações
                        </h4>
                        <ul className="space-y-2">
                          {ai.weaknesses.map((weakness, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-rose-500 mt-1">●</span>
                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Melhor Para */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Melhor Para:</h4>
                      <div className="flex flex-wrap gap-2">
                        {ai.bestFor.map((item, i) => (
                          <Badge key={i} variant="secondary" className={cn("text-xs", ai.bgColor, ai.color)}>
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Casos de Uso */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Prompts Recomendados:</h4>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {ai.useCases.map((useCase, i) => (
                          <div key={i} className="p-3 rounded-lg bg-muted/30 border border-border/50">
                            <h5 className="font-medium text-sm mb-1">{useCase.title}</h5>
                            <p className="text-xs text-muted-foreground">{useCase.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dicas */}
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                      <h4 className="font-semibold mb-2 text-sm">Dicas de Uso:</h4>
                      <ul className="grid sm:grid-cols-3 gap-2">
                        {ai.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Sparkles className={cn("w-3 h-3 mt-0.5 flex-shrink-0", ai.color)} />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Pronto para Começar?</h2>
              <p className="text-muted-foreground mb-6">
                Explore nossa biblioteca de prompts otimizados e comece a estudar de forma mais inteligente.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/#prompts">
                  <Sparkles className="w-4 h-4" />
                  Ver Todos os Prompts
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}