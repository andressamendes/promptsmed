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
    tagline: "Rápido e organizado",
    color: "text-[#10a37f]",
    bgColor: "bg-[#10a37f]/10",
    borderColor: "border-[#10a37f]/30",
    link: "https://chat.openai.com/",
    icon: <Sparkles className="w-6 h-6" />,
    strengths: [
      "Ótimo para gerar listas, tabelas e cronogramas",
      "Responde rápido e segue formatos bem",
      "Flashcards saem prontos para importar no Anki",
      "Interface simples e familiar",
      "Bom para tarefas repetitivas e padronizadas",
    ],
    weaknesses: [
      "Às vezes fica superficial em análises complexas",
      "Pode trocar profundidade por velocidade",
      "Raciocínio clínico não é seu forte",
    ],
    bestFor: [
      "Flashcards para Anki",
      "Cronogramas de revisão",
      "Listas e checklists",
      "Conversão de formatos",
      "Tarefas rápidas e diretas",
    ],
    useCases: [
      { title: "Flashcards prontos", description: "Gera 30 cards formatados para importar direto no Anki" },
      { title: "Plano de revisão", description: "Monta cronograma com intervalos de repetição espaçada" },
      { title: "Pomodoro personalizado", description: "Estrutura suas sessões de estudo com pausas" },
    ],
    tips: [
      "Use quando precisar de algo estruturado e rápido",
      "Ideal para primeira versão de materiais",
      "Bom para formatar conteúdo que você já estudou",
    ],
  },
  {
    id: "claude",
    name: "Claude",
    tagline: "Professor particular",
    color: "text-[#cc785c]",
    bgColor: "bg-[#cc785c]/10",
    borderColor: "border-[#cc785c]/30",
    link: "https://claude.ai/",
    icon: <Brain className="w-6 h-6" />,
    strengths: [
      "Raciocínio clínico de outro nível",
      "Casos clínicos complexos são a especialidade",
      "Ensina no estilo socrático (te faz pensar)",
      "Análise profunda e contextualizada",
      "Identifica seus erros de raciocínio com precisão",
    ],
    weaknesses: [
      "Pode ser mais lento que outros",
      "Às vezes escreve demais",
      "Para coisas simples, é overkill",
    ],
    bestFor: [
      "Casos clínicos interativos",
      "Discussão diagnóstica",
      "Análise de erros em provas",
      "Entender mecanismos complexos",
      "Tutoria personalizada",
    ],
    useCases: [
      { title: "Caso clínico passo a passo", description: "Simula atendimento com feedback a cada decisão sua" },
      { title: "Método socrático", description: "Te guia com perguntas até você chegar na resposta" },
      { title: "Análise de erros", description: "Identifica padrões nas questões que você erra" },
    ],
    tips: [
      "Use para temas que precisa entender de verdade",
      "Ideal quando quer treinar raciocínio",
      "Melhor escolha para feedback aprofundado",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: "Visual e conectado",
    color: "text-[#8e8ea0]",
    bgColor: "bg-[#8e8ea0]/10",
    borderColor: "border-[#8e8ea0]/30",
    link: "https://gemini.google.com/",
    icon: <Sparkles className="w-6 h-6" />,
    strengths: [
      "Descrições visuais detalhadas para criar diagramas",
      "Integra com Google Docs e Drive",
      "Bom para mapas conceituais estruturados",
      "Entende imagens (multimodal)",
      "Sintetiza informações visuais bem",
    ],
    weaknesses: [
      "Menos consistente em textos puros",
      "Pode errar detalhes médicos específicos",
      "Interface ainda melhorando",
    ],
    bestFor: [
      "Mapas conceituais",
      "Dual coding (visual + texto)",
      "Descrever diagramas para criar",
      "Integrar com Google Workspace",
      "Análise de imagens",
    ],
    useCases: [
      { title: "Mapa conceitual", description: "Cria hierarquias visuais com conexões claras" },
      { title: "Dual coding", description: "Gera descrições para você criar diagramas" },
      { title: "Análise de imagem", description: "Explica imagens médicas quando você envia" },
    ],
    tips: [
      "Use quando precisar de representações visuais",
      "Ideal para materiais que viram diagramas",
      "Bom se você já usa Google Drive",
    ],
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    tagline: "Transforma em podcast",
    color: "text-[#4285f4]",
    bgColor: "bg-[#4285f4]/10",
    borderColor: "border-[#4285f4]/30",
    link: "https://notebooklm.google.com/",
    icon: <Mic className="w-6 h-6" />,
    strengths: [
      "Cria podcasts de áudio automaticamente",
      "Sintetiza vários documentos de uma vez",
      "Conversa natural entre dois apresentadores",
      "Perfeito para ouvir enquanto faz outras coisas",
      "Transforma PDFs em áudio explicativo",
    ],
    weaknesses: [
      "Só faz áudio/podcast",
      "Menos interativo que chatbots",
      "Precisa fazer upload dos documentos",
    ],
    bestFor: [
      "Podcasts de revisão",
      "Resumir artigos científicos",
      "Estudar no ônibus ou academia",
      "Consolidar várias fontes",
      "Aprendizado passivo",
    ],
    useCases: [
      { title: "Podcast do tema", description: "Transforma qualquer assunto em episódio com dois hosts" },
      { title: "Resumo de artigos", description: "Junta vários papers numa discussão coerente" },
      { title: "Revisão no treino", description: "Cria áudio para ouvir enquanto malha" },
    ],
    tips: [
      "Use para transformar leituras em áudio",
      "Ideal para revisar durante exercício ou transporte",
      "Sobe seus PDFs e artigos para sintetizar",
    ],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tagline: "Pesquisador com fontes",
    color: "text-[#20b8cd]",
    bgColor: "bg-[#20b8cd]/10",
    borderColor: "border-[#20b8cd]/30",
    link: "https://www.perplexity.ai/",
    icon: <Search className="w-6 h-6" />,
    strengths: [
      "Busca informações atualizadas em tempo real",
      "Cita as fontes automaticamente",
      "Perfeito para encontrar evidências",
      "Acessa literatura médica recente",
      "Ideal para pesquisa PICO",
    ],
    weaknesses: [
      "Menos criativo que outros",
      "Focado em buscar, não em criar",
      "Pode ser superficial sem bom direcionamento",
    ],
    bestFor: [
      "Buscar evidências científicas",
      "Pesquisa PICO/PubMed",
      "Informações atualizadas",
      "Checar se algo é verdade",
      "Achar referências",
    ],
    useCases: [
      { title: "Busca PICO", description: "Estrutura sua pergunta e acha artigos relevantes" },
      { title: "Guidelines atuais", description: "Busca consensos e protocolos mais recentes" },
      { title: "Checagem de fatos", description: "Verifica informações com fontes confiáveis" },
    ],
    tips: [
      "Use quando precisar de fontes",
      "Ideal para checar informações clínicas",
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
        <title>Guia para Estudantes de Medicina | MedPrompts</title>
        <meta name="description" content="Comparativo completo das melhores ferramentas para estudantes de medicina: ChatGPT, Claude, Gemini, NotebookLM e Perplexity. Descubra qual usar para cada tipo de estudo." />
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
                Guia Prático
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Qual IA usar{" "}
                <span className="gradient-text">em cada situação?</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Cada IA tem seu ponto forte. Aqui você descobre quando usar cada uma para estudar melhor.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-12 border-b border-border">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6 text-center">Resumo: qual usar para quê</h2>
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
            <h2 className="text-2xl font-bold mb-8 text-center">Conheça cada uma em detalhe</h2>
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
                          Onde brilha
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
                          Onde peca
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
                      <h4 className="font-semibold mb-3 text-sm">Usa quando precisar de:</h4>
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
                      <h4 className="font-semibold mb-3 text-sm">Exemplos de uso:</h4>
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
                      <h4 className="font-semibold mb-2 text-sm">Na prática:</h4>
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
              <h2 className="text-2xl font-bold mb-4">Bora estudar?</h2>
              <p className="text-muted-foreground mb-6">
                Agora que você sabe qual IA usar, escolhe um prompt e começa.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/#prompts">
                  <Sparkles className="w-4 h-4" />
                  Ver os Prompts
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}