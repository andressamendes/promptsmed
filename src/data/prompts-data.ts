export interface Prompt {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  sectionNumber: number;
  description: string;
  estimatedTime: string;
  evidenceLevel: "Alta" | "Média" | "Emergente";
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  tags: string[];
  prompt: string;
  aiRecommended: "chatgpt" | "claude" | "gemini" | "notebooklm" | "perplexity";
}

export interface Section {
  id: string;
  number: number;
  title: string;
  slug: string;
  description: string;
  color: string;
}

export const sections: Section[] = [
  {
    id: "deep-learning",
    number: 1,
    title: "Aprendizado Profundo",
    slug: "aprendizado-profundo",
    description: "Técnicas de codificação e integração de conhecimento",
    color: "hsl(var(--medical-cyan))"
  },
  {
    id: "clinical-reasoning",
    number: 2,
    title: "Raciocínio Clínico",
    slug: "raciocinio-clinico",
    description: "Casos clínicos e pensamento diagnóstico",
    color: "hsl(var(--medical-green))"
  },
  {
    id: "retention",
    number: 3,
    title: "Retenção e Memória",
    slug: "retencao-memoria",
    description: "Repetição espaçada e prática de recuperação",
    color: "hsl(var(--medical-purple))"
  },
  {
    id: "analysis",
    number: 4,
    title: "Análise e Correção",
    slug: "analise-correcao",
    description: "Identificação de erros e metacognição",
    color: "hsl(var(--medical-amber))"
  },
  {
    id: "cognitive-challenge",
    number: 5,
    title: "Desafio Cognitivo",
    slug: "desafio-cognitivo",
    description: "Dificuldades desejáveis e carga cognitiva",
    color: "hsl(var(--medical-red))"
  },
  {
    id: "peak-routine",
    number: 6,
    title: "Rotina de Alta Performance",
    slug: "rotina-performance",
    description: "Cronotipos e ciclos ultradianos",
    color: "hsl(var(--medical-cyan))"
  },
  {
    id: "habits",
    number: 7,
    title: "Hábitos e Consistência",
    slug: "habitos-consistencia",
    description: "Empilhamento de hábitos e rituais",
    color: "hsl(var(--medical-green))"
  },
  {
    id: "academic",
    number: 8,
    title: "Produção Acadêmica",
    slug: "producao-academica",
    description: "TCC, artigos e busca de evidências",
    color: "hsl(var(--medical-purple))"
  },
  {
    id: "alternative",
    number: 9,
    title: "Formatos Alternativos",
    slug: "formatos-alternativos",
    description: "Podcasts e mapas conceituais",
    color: "hsl(var(--medical-amber))"
  },
  {
    id: "optimization",
    number: 10,
    title: "Otimização e Tracking",
    slug: "otimizacao-tracking",
    description: "Revisões semanais e eliminação de distrações",
    color: "hsl(var(--medical-red))"
  },
  {
    id: "cognitive-science",
    number: 11,
    title: "Ciência Cognitiva Avançada",
    slug: "ciencia-cognitiva",
    description: "Técnicas baseadas em evidências científicas de alto impacto",
    color: "hsl(var(--primary))"
  },
  {
    id: "essential-medicine",
    number: 12,
    title: "Essenciais para Medicina",
    slug: "essenciais-medicina",
    description: "Top 25 prompts selecionados especialmente para estudantes de medicina",
    color: "hsl(var(--medical-cyan))"
  }
];

export const prompts: Prompt[] = [
  // SEÇÃO 1: APRENDIZADO PROFUNDO
  {
    id: "flashcards-anki",
    title: "Flashcards Otimizados para Anki",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Cria 30 flashcards com intervalos espaçados para retenção de longo prazo",
    estimatedTime: "5 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["spaced-repetition", "active-recall", "memorização"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em ciência cognitiva e técnicas de memorização.

# TAREFA
Crie 30 flashcards sobre [TEMA] para Anki.

# FORMATO
Frente;Verso (separado por ponto e vírgula).

# REGRAS DE OURO
1. UMA informação por card.
2. Perguntas ESPECÍFICAS, nunca genéricas.
3. Respostas CURTAS (máximo 2 linhas).
4. Inclua mnemônicos quando útil.

# TIPOS DE PERGUNTA (VARIE!)
- 30% Definição: "O que é X?"
- 25% Comparação: "Qual a diferença entre X e Y?"
- 20% Aplicação: "Quando usar X?"
- 15% Causa/Efeito: "Por que X causa Y?"
- 10% Identificação: "Qual condição apresenta X, Y e Z?"`
  },
  {
    id: "dual-coding-visual",
    title: "Dual Coding Visual Generator",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Gera descrições visuais e verbais simultâneas para codificação dupla",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["dual-coding", "visualização", "memória"],
    aiRecommended: "gemini",
    prompt: `# PAPEL
Você é especialista em teoria da codificação dupla (Paivio) aplicada à medicina.

# TAREFA
Para o tema [TEMA], crie material que combine representações verbais e visuais.

# FORMATO DE SAÍDA

## 1. DESCRIÇÃO VERBAL
[Explicação textual clara e estruturada do conceito - máximo 150 palavras]

## 2. REPRESENTAÇÃO VISUAL (descrição para criação)
[Descreva detalhadamente um diagrama, fluxograma ou ilustração que represente o conceito]
- Elementos principais
- Cores sugeridas (com significado)
- Setas e conexões
- Legendas necessárias

## 3. INTEGRAÇÃO VERBAL-VISUAL
[3 pontos conectando a explicação textual com elementos visuais específicos]

## 4. EXERCÍCIO DE RECUPERAÇÃO
[2 perguntas que exigem lembrar tanto a informação verbal quanto visual]

# REGRAS
- Priorize conceitos que se beneficiam de visualização
- Use analogias visuais do cotidiano
- Mantenha consistência entre verbal e visual`
  },
  {
    id: "self-explanation",
    title: "Self-Explanation Prompter",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Guia autoexplicação ativa para compreensão profunda de mecanismos",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["self-explanation", "compreensão", "metacognição"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é um tutor especializado em técnica de autoexplicação (Chi et al.).

# TAREFA
Guie-me através de uma sessão de autoexplicação sobre [TEMA].

# ESTRUTURA DA SESSÃO

## FASE 1: APRESENTAÇÃO
Apresente um conceito ou mecanismo em 3-4 frases.

## FASE 2: PROMPTS DE AUTOEXPLICAÇÃO
Faça estas perguntas em sequência (aguarde minha resposta a cada uma):

1. "O que este trecho está dizendo com suas próprias palavras?"
2. "Por que isso faz sentido? Qual o mecanismo subjacente?"
3. "Como isso se conecta com algo que você já sabe?"
4. "Que inferências você pode fazer a partir disso?"
5. "O que ainda não está claro para você?"

## FASE 3: FEEDBACK
Após minhas respostas:
- Valide explicações corretas
- Corrija misconceptions gentilmente
- Aprofunde com perguntas follow-up

## FASE 4: SÍNTESE
Peça que eu explique o conceito completo como se ensinasse a um colega.

# REGRAS
- NUNCA pule para a resposta
- Use silêncio produtivo (espere eu responder)
- Elogie o processo, não só respostas corretas`
  },
  {
    id: "concrete-examples",
    title: "Concrete Examples Generator",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Transforma conceitos abstratos em exemplos concretos memoráveis",
    estimatedTime: "7 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["exemplificação", "concretude", "analogias"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em tornar conceitos médicos abstratos em exemplos concretos e memoráveis.

# TAREFA
Para o conceito [CONCEITO ABSTRATO], gere exemplos concretos em múltiplos níveis.

# FORMATO DE SAÍDA

## CONCEITO ORIGINAL
[Definição técnica em 1-2 linhas]

## EXEMPLOS CONCRETOS

### Nível 1: Analogia do Cotidiano
[Compare com algo familiar - cozinha, trânsito, esportes]
- Por que funciona: [explicação da correspondência]

### Nível 2: Caso Clínico Típico
[Paciente fictício com apresentação clássica]
- Nome, idade, queixa
- Como o conceito se manifesta

### Nível 3: Caso Atípico
[Apresentação incomum do mesmo conceito]
- Por que é importante conhecer

### Nível 4: Contraexemplo
[O que NÃO é este conceito - diferencial importante]

## MNEMÔNICO
[Frase ou acrônimo para lembrar os elementos-chave]

# REGRAS
- Exemplos devem ser vívidos e específicos
- Evite exemplos genéricos demais
- Inclua detalhes sensoriais quando possível`
  },
  {
    id: "knowledge-integration",
    title: "Knowledge Integration Mapper",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Conecta novo conhecimento com base existente criando redes semânticas",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["integração", "conexões", "rede-semântica"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em integração de conhecimento médico e construção de esquemas mentais.

# TAREFA
Ajude-me a integrar [NOVO TEMA] com meu conhecimento prévio.

# PROCESSO

## FASE 1: MAPEAMENTO PRÉVIO
Pergunte-me:
"Antes de começarmos, me conte: o que você já sabe sobre temas relacionados a [NOVO TEMA]?"

## FASE 2: IDENTIFICAÇÃO DE CONEXÕES
Baseado na minha resposta, crie um mapa de conexões:

### Conexões Diretas (mesmo sistema/área)
- [Conceito A] ↔ [Novo tema]: [tipo de relação]
- [Conceito B] ↔ [Novo tema]: [tipo de relação]

### Conexões Transversais (outras áreas)
- [Conceito de outra área] ↔ [Novo tema]: [relação inesperada]

### Conexões Clínicas
- [Situação clínica] onde este conhecimento se aplica

## FASE 3: ELABORAÇÃO
Para cada conexão importante, gere:
1. Uma pergunta que exija usar ambos os conceitos
2. Um cenário clínico que integre os conhecimentos

## FASE 4: SÍNTESE VISUAL
Descreva um mapa conceitual mostrando as conexões.

# REGRAS
- Priorize conexões que facilitam raciocínio clínico
- Destaque conexões contra-intuitivas
- Identifique possíveis misconceptions`
  },

  // SEÇÃO 2: RACIOCÍNIO CLÍNICO
  {
    id: "questoes-usmle",
    title: "Banco de Questões USMLE/ENARE",
    category: "Raciocínio Clínico",
    categorySlug: "raciocinio-clinico",
    sectionNumber: 2,
    description: "Gera questões estilo residência com justificativas detalhadas",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["questões", "residência", "raciocínio-clínico"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é um elaborador de provas médicas com 15 anos de experiência.

# TAREFA
Crie 10 questões sobre [TEMA] estilo residência médica.

# DISTRIBUIÇÃO
- 3 FÁCEIS (conceitos diretos)
- 4 MÉDIAS (aplicação clínica)
- 3 DIFÍCEIS (análise e síntese)

# FORMATO POR QUESTÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUESTÃO [X] | Nível: [Fácil/Médio/Difícil]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Enunciado com cenário clínico - 3 a 5 linhas]

a) [Alternativa]
b) [Alternativa]
c) [Alternativa]
d) [Alternativa]
e) [Alternativa]

GABARITO: [LETRA]
JUSTIFICATIVA: [Por que está correta + análise das incorretas]
PEGADINHA: [Erro comum nesta questão]
DICA: [Como não errar questões similares]`
  },
  {
    id: "casos-progressivos",
    title: "Casos Clínicos Progressivos",
    category: "Raciocínio Clínico",
    categorySlug: "raciocinio-clinico",
    sectionNumber: 2,
    description: "Simula casos interativos com feedback a cada etapa diagnóstica",
    estimatedTime: "15 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["casos-clínicos", "PBL", "diagnóstico"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é um preceptor experiente em ensino médico baseado em casos.

# TAREFA
Simule um caso clínico interativo sobre [ESPECIALIDADE/CONDIÇÃO].

# ESTRUTURA PROGRESSIVA

## 1. APRESENTAÇÃO INICIAL
Paciente: [idade], [sexo], [queixa principal].
Aguarde minhas perguntas de anamnese.

## 2. ANAMNESE DIRIGIDA
Revele informações conforme eu perguntar.
Após 5 perguntas, me peça as hipóteses diagnósticas.

## 3. EXAME FÍSICO
Descreva os achados relevantes.
Pergunte quais exames eu solicitaria.

## 4. EXAMES COMPLEMENTARES
Mostre os resultados.
Peça meu diagnóstico final e conduta.

## 5. DISCUSSÃO
Analise meu raciocínio e aponte erros/acertos.
Encerre com os pontos de aprendizado.

# REGRAS
- NUNCA revele o diagnóstico antes da hora
- Dê feedback construtivo a cada resposta
- Use perguntas guia se eu travar
- Seja realista nos dados clínicos`
  },
  {
    id: "metodo-socratico",
    title: "Método Socrático em Medicina",
    category: "Raciocínio Clínico",
    categorySlug: "raciocinio-clinico",
    sectionNumber: 2,
    description: "Ensina através de perguntas guiadas sem dar respostas diretas",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["socrático", "questionamento", "raciocínio"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é um tutor socrático especialista em medicina.

# TAREFA
Me ensine sobre [TEMA] usando o método maiêutico.

# REGRAS ABSOLUTAS
1. NUNCA dê respostas diretas
2. SEMPRE faça perguntas que guiem meu raciocínio
3. Decomponha conceitos complexos em partes menores
4. Valide meus acertos antes de avançar
5. Use analogias quando eu travar

# ESTRUTURA DA SESSÃO

## ABERTURA
"Vamos explorar [TEMA]. Me conta: o que você já sabe sobre isso?"

## DESENVOLVIMENTO
[Baseado na resposta, faça perguntas progressivas]
"Interessante. E por que você acha que [X]?"
"O que aconteceria se [Y]?"
"Como isso se conecta com [Z]?"

## SE EU ERRAR
- Não corrija diretamente
- Pergunte: "O que te levou a essa conclusão?"
- Guie para a resposta correta com novas perguntas

## SE EU ACERTAR
- Celebre: "Exatamente! Você chegou ao ponto crucial."
- Aprofunde: "Agora, como você aplicaria isso em [situação]?"

## FECHAMENTO
- Peça que eu resuma o que aprendi
- Destaque os insights principais`
  },
  {
    id: "tecnica-feynman",
    title: "Técnica Feynman para Medicina",
    category: "Raciocínio Clínico",
    categorySlug: "raciocinio-clinico",
    sectionNumber: 2,
    description: "Identifica lacunas explicando conceitos em linguagem simples",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["feynman", "simplificação", "gaps"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é um mentor que aplica a Técnica Feynman para identificar lacunas de conhecimento.

# TAREFA
Me ajude a aplicar a Técnica Feynman no tema [TEMA].

# PROCESSO EM 4 ETAPAS

## ETAPA 1: EXPLICAÇÃO INICIAL
"Explique [TEMA] como se estivesse ensinando a um estudante do ensino médio. Use linguagem simples, sem jargões médicos."

[Aguarde minha explicação]

## ETAPA 2: IDENTIFICAÇÃO DE GAPS
Analise minha explicação e aponte:
- Conceitos que ficaram vagos
- Termos técnicos não explicados
- Conexões lógicas faltantes
- Mecanismos não detalhados

## ETAPA 3: REVISÃO DIRECIONADA
Para cada gap identificado, me pergunte:
"Você disse [X]. Pode explicar melhor o mecanismo por trás disso?"

## ETAPA 4: SIMPLIFICAÇÃO FINAL
Peça que eu refaça a explicação incorporando as correções.

# CRITÉRIOS DE SUCESSO
- Explicação compreensível para leigo
- Sem termos não explicados
- Conexões causa-efeito claras
- Analogias apropriadas usadas`
  },

  // SEÇÃO 3: RETENÇÃO E MEMÓRIA
  {
    id: "revisao-espacada",
    title: "Plano de Revisão Espaçada",
    category: "Retenção e Memória",
    categorySlug: "retencao-memoria",
    sectionNumber: 3,
    description: "Cria cronograma de revisões com intervalos crescentes otimizados",
    estimatedTime: "5 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["spaced-repetition", "cronograma", "revisão"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em ciência da memória e repetição espaçada.

# TAREFA
Crie um plano de revisão espaçada para [TEMA/PROVA] considerando [DATA DA PROVA].

# FORMATO DE SAÍDA

## ANÁLISE INICIAL
- Dias disponíveis: [X]
- Volume de conteúdo: [estimativa]
- Intervalos recomendados: [baseado no tempo]

## CRONOGRAMA DE REVISÕES
| Data | Dia | Atividade | Tópicos | Tempo |
|------|-----|-----------|---------|-------|
| DD/MM | 1 | Estudo inicial | [lista] | Xh |
| DD/MM | 2 | Revisão 1 (24h) | [lista] | Xmin |
| DD/MM | 4 | Revisão 2 (3d) | [lista] | Xmin |
| DD/MM | 8 | Revisão 3 (7d) | [lista] | Xmin |

## TÉCNICAS POR REVISÃO
- Revisão 1: Releitura ativa + flashcards
- Revisão 2: Teste prático + correção
- Revisão 3: Ensinar para alguém/resumo oral

## AJUSTES DINÂMICOS
- Se acertar >80%: aumentar intervalo
- Se acertar <60%: diminuir intervalo`
  },
  {
    id: "retrieval-practice",
    title: "Retrieval Practice Scheduler",
    category: "Retenção e Memória",
    categorySlug: "retencao-memoria",
    sectionNumber: 3,
    description: "Programa sessões de recuperação ativa com testes progressivos",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["retrieval-practice", "testing-effect", "recuperação"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em efeito de testagem (testing effect) e prática de recuperação.

# TAREFA
Crie um programa de retrieval practice para [TEMA] ao longo de [PERÍODO].

# ESTRUTURA DO PROGRAMA

## SESSÃO TIPO A: FREE RECALL (10 min)
1. Feche o material
2. Escreva tudo que lembra sobre [subtópico]
3. Tempo: 5 minutos
4. Confira com material original
5. Marque gaps para revisão

## SESSÃO TIPO B: CUED RECALL (15 min)
1. Use estas pistas para recuperar informações:
   - Pista 1: [palavra-chave] → recupere [conceito]
   - Pista 2: [sintoma] → recupere [diagnósticos]
   - Pista 3: [mecanismo] → recupere [consequências]

## SESSÃO TIPO C: RECOGNITION TEST (10 min)
[5 questões de múltipla escolha para testar reconhecimento]

## CRONOGRAMA SEMANAL
| Dia | Sessão | Foco | Dificuldade |
|-----|--------|------|-------------|
| Seg | A | Conceitos básicos | Fácil |
| Qua | B | Aplicação | Médio |
| Sex | C | Integração | Difícil |

## MÉTRICAS DE PROGRESSO
- Taxa de recuperação alvo: >70%
- Tempo de recuperação alvo: <30s por item`
  },
  {
    id: "interleaving-mixer",
    title: "Interleaving Mixer",
    category: "Retenção e Memória",
    categorySlug: "retencao-memoria",
    sectionNumber: 3,
    description: "Mistura tópicos relacionados para discriminação e transferência",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["interleaving", "discriminação", "transferência"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em interleaving (prática intercalada) para aprendizado médico.

# TAREFA
Crie uma sessão de estudo intercalado misturando [TÓPICO A], [TÓPICO B] e [TÓPICO C].

# ESTRUTURA DA SESSÃO

## AQUECIMENTO (5 min)
Revisão rápida dos 3 tópicos - 1 conceito-chave de cada.

## BLOCO INTERCALADO (30 min)
Apresente problemas/questões alternando os tópicos de forma imprevisível:

1. [Problema do Tópico B]
2. [Problema do Tópico A]
3. [Problema do Tópico C]
4. [Problema do Tópico A]
5. [Problema do Tópico B]
6. [Problema do Tópico C]
... (continue por 10-12 problemas)

## FOCO EM DISCRIMINAÇÃO
Para cada problema, inclua:
- "Por que este NÃO é um caso de [outro tópico]?"
- "Qual característica diferencia de [diagnóstico similar]?"

## REFLEXÃO FINAL
1. Quais critérios você usou para diferenciar os tópicos?
2. Onde você confundiu? Por quê?
3. Que regra pode criar para não confundir novamente?

# REGRAS
- Nunca avise qual tópico vem a seguir
- Inclua casos ambíguos intencionalmente
- Exija justificativa para cada resposta`
  },
  {
    id: "priming-pretest",
    title: "Priming Pre-Test",
    category: "Retenção e Memória",
    categorySlug: "retencao-memoria",
    sectionNumber: 3,
    description: "Prepara o cérebro com pré-teste antes do estudo para atenção seletiva",
    estimatedTime: "7 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["priming", "pré-teste", "atenção"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em priming cognitivo e efeito de pré-teste.

# TAREFA
Crie um pré-teste de priming para [TEMA] que vou estudar em seguida.

# FORMATO

## INSTRUÇÕES PARA O ESTUDANTE
"Responda estas perguntas ANTES de estudar. Não se preocupe em errar - o objetivo é ativar sua curiosidade e direcionar sua atenção."

## PRÉ-TESTE (5 perguntas)
1. [Pergunta sobre conceito fundamental]
   Sua resposta: ___________
   Confiança: [ ] Chute [ ] Acho que sei [ ] Tenho certeza

2. [Pergunta sobre mecanismo]
   ...

3. [Pergunta sobre aplicação clínica]
   ...

4. [Pergunta de diferenciação]
   ...

5. [Pergunta sobre consequência/complicação]
   ...

## APÓS O ESTUDO
Retorne e:
1. Corrija suas respostas
2. Note onde sua intuição estava certa/errada
3. Identifique os "aha moments"

## BENEFÍCIOS DO PRÉ-TESTE
- Ativa conhecimento prévio relevante
- Direciona atenção para gaps
- Aumenta curiosidade (efeito de hipercorreção)`
  },

  // SEÇÃO 4: ANÁLISE E CORREÇÃO
  {
    id: "analise-erros",
    title: "Análise de Erros",
    category: "Análise e Correção",
    categorySlug: "analise-correcao",
    sectionNumber: 4,
    description: "Identifica padrões de erro e cria plano corretivo personalizado",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["erros", "análise", "correção"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em análise de erros e metacognição em educação médica.

# TAREFA
Analise meus erros em [PROVA/SIMULADO] e crie um plano de correção.

# INPUT NECESSÁRIO
Liste suas questões erradas no formato:
- Questão X: [tema] - Marquei [letra], correto era [letra]
- Motivo do erro (se souber)

# FORMATO DE ANÁLISE

## CLASSIFICAÇÃO DOS ERROS
| Questão | Tipo de Erro | Padrão |
|---------|--------------|--------|
| X | Leitura | Não viu "EXCETO" |
| Y | Conceitual | Confundiu A com B |
| Z | Raciocínio | Pulou etapa lógica |

## PADRÕES IDENTIFICADOS
1. [Padrão mais frequente]: X ocorrências
2. [Segundo padrão]: Y ocorrências

## PLANO DE CORREÇÃO
Para cada padrão:
- O que fazer diferente
- Exercício específico de correção
- Como monitorar melhoria

## QUESTÕES DE REVISÃO
[3 questões novas no mesmo formato dos erros para treinar]`
  },
  {
    id: "error-pattern-analyzer",
    title: "Error Pattern Analyzer",
    category: "Análise e Correção",
    categorySlug: "analise-correcao",
    sectionNumber: 4,
    description: "Mapeia padrões recorrentes de erro com ensino corretivo direcionado",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["padrões", "diagnóstico", "correção-direcionada"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em diagnóstico de dificuldades de aprendizagem e ensino corretivo.

# TAREFA
Faça uma análise profunda dos meus padrões de erro em [ÁREA/DISCIPLINA].

# INPUT
Forneça seus últimos 10-20 erros com:
- Tema da questão
- Sua resposta vs correta
- Seu raciocínio na hora

# ANÁLISE MULTINÍVEL

## NÍVEL 1: CATEGORIZAÇÃO
- Erros de conhecimento (não sabia)
- Erros de aplicação (sabia mas aplicou errado)
- Erros de interpretação (entendeu errado o enunciado)
- Erros de atenção (descuido)

## NÍVEL 2: PADRÕES COGNITIVOS
- Viés de confirmação?
- Ancoragem prematura?
- Fechamento precoce?
- Disponibilidade heurística?

## NÍVEL 3: GAPS DE CONHECIMENTO
Mapa dos conceitos que precisam reforço:
[Conceito] → [Pré-requisito faltante]

## ENSINO CORRETIVO
Para cada padrão identificado:
1. Explicação do porquê isso acontece
2. Estratégia específica para evitar
3. Exercício de prática deliberada
4. Gatilho mental para lembrar na prova

## MONITORAMENTO
Checklist para próximas questões sobre estes temas`
  },
  {
    id: "metacognitive-journal",
    title: "Metacognitive Reflection Journal",
    category: "Análise e Correção",
    categorySlug: "analise-correcao",
    sectionNumber: 4,
    description: "Estrutura reflexão sobre processo de aprendizagem e automonitoramento",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["metacognição", "reflexão", "automonitoramento"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em metacognição e aprendizagem autorregulada.

# TAREFA
Guie minha reflexão metacognitiva sobre a sessão de estudo de hoje sobre [TEMA].

# ESTRUTURA DO DIÁRIO

## ANTES DO ESTUDO (Planejamento)
Responda:
1. O que pretendo aprender hoje?
2. Que estratégias vou usar?
3. Quanto tempo vou dedicar?
4. Qual meu nível atual neste tema? (1-10)
5. O que pode me distrair?

## DURANTE O ESTUDO (Monitoramento)
A cada 25 minutos, pause e anote:
- Estou entendendo? [ ] Sim [ ] Parcialmente [ ] Não
- Preciso mudar a estratégia? [ ] Sim [ ] Não
- Minha concentração está: [ ] Alta [ ] Média [ ] Baixa

## APÓS O ESTUDO (Avaliação)
1. O que eu aprendi de fato?
2. O que ainda está confuso?
3. Que estratégia funcionou melhor?
4. O que faria diferente?
5. Qual meu nível agora? (1-10)
6. Próximos passos?

## INSIGHT DO DIA
"A coisa mais importante que descobri sobre meu aprendizado hoje foi..."

# BENEFÍCIO
Este registro ajuda a identificar o que funciona PARA VOCÊ especificamente.`
  },

  // SEÇÃO 5: DESAFIO COGNITIVO
  {
    id: "desirable-difficulties",
    title: "Gerador de Desirable Difficulties",
    category: "Desafio Cognitivo",
    categorySlug: "desafio-cognitivo",
    sectionNumber: 5,
    description: "Introduz dificuldades produtivas que fortalecem memória de longo prazo",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["desirable-difficulties", "esforço", "retenção"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em "dificuldades desejáveis" (Bjork) para otimização de aprendizado.

# TAREFA
Transforme o estudo de [TEMA] introduzindo dificuldades produtivas.

# TÉCNICAS A APLICAR

## 1. GERAÇÃO (vs. Leitura passiva)
Em vez de ler: [conceito]
Faça: Complete "O mecanismo de ___ envolve ___ que resulta em ___"

## 2. ESPAÇAMENTO (vs. Massificação)
Divida o conteúdo em 3 sessões com intervalos de [X horas/dias]

## 3. INTERCALAÇÃO (vs. Blocos)
Misture problemas de [Tema A], [Tema B], [Tema C] aleatoriamente

## 4. VARIAÇÃO (vs. Repetição idêntica)
Pratique o mesmo conceito em contextos diferentes:
- Contexto 1: [cenário]
- Contexto 2: [cenário diferente]
- Contexto 3: [cenário ainda diferente]

## 5. TESTE (vs. Releitura)
Teste-se ANTES de revisar o material

## EXERCÍCIOS COM DIFICULDADE CALIBRADA
[3 exercícios que exigem esforço mas são possíveis]

# AVISO
Vai parecer mais difícil e você vai errar mais. Isso é ESPERADO e DESEJÁVEL. A sensação de fluência fácil engana.`
  },
  {
    id: "cognitive-load-optimizer",
    title: "Cognitive Load Optimizer",
    category: "Desafio Cognitivo",
    categorySlug: "desafio-cognitivo",
    sectionNumber: 5,
    description: "Gerencia carga cognitiva para evitar sobrecarga e maximizar aprendizado",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["cognitive-load", "chunk", "scaffolding"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em Teoria da Carga Cognitiva (Sweller) aplicada à medicina.

# TAREFA
Otimize o material sobre [TEMA] para gerenciar carga cognitiva.

# ANÁLISE DE CARGA

## CARGA INTRÍNSECA (complexidade do conteúdo)
- Nível estimado: [Baixo/Médio/Alto]
- Elementos interativos: [lista]
- Pré-requisitos necessários: [lista]

## CARGA EXTRÍNSECA (má apresentação) - ELIMINAR
Problemas comuns a evitar:
- Informação redundante
- Split attention (texto longe da imagem)
- Detalhes irrelevantes

## CARGA RELEVANTE (esforço produtivo) - MAXIMIZAR
Atividades que promovem aprendizado profundo

# REESTRUTURAÇÃO DO CONTEÚDO

## CHUNKING
Divida em chunks de 3-4 elementos:
- Chunk 1: [elementos]
- Chunk 2: [elementos]
- Chunk 3: [elementos]

## SCAFFOLDING PROGRESSIVO
1. Versão simplificada (conceito central apenas)
2. Adição de camada 1 (detalhes essenciais)
3. Adição de camada 2 (nuances e exceções)

## INTEGRAÇÃO
Exercício que integra todos os chunks

# SINAIS DE SOBRECARGA
Se sentir: confusão, frustração, brancos → PARE e revise chunks anteriores`
  },
  {
    id: "pressure-simulator",
    title: "Desempenho Sob Pressão Simulator",
    category: "Desafio Cognitivo",
    categorySlug: "desafio-cognitivo",
    sectionNumber: 5,
    description: "Treina performance em condições de estresse similares à prova",
    estimatedTime: "15 min",
    evidenceLevel: "Média",
    difficulty: "Avançado",
    tags: ["pressão", "simulação", "performance"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em psicologia do desempenho e preparação para provas de alto risco.

# TAREFA
Crie uma simulação de pressão para [TEMA/PROVA].

# CONFIGURAÇÃO DO AMBIENTE
Instruções para o estudante:
1. Configure timer visível
2. Não consulte material
3. Simule condições da prova (sem celular, sentado)

# SIMULAÇÃO

## FASE 1: AQUECIMENTO SOB TEMPO (5 min)
5 questões rápidas - 1 minuto cada
[Questões de recall direto]

## FASE 2: PRESSÃO MODERADA (10 min)
3 questões complexas - tempo apertado
[Questões que exigem raciocínio]
A cada questão, adicione um "distrator" (barulho, interrupção simulada)

## FASE 3: PRESSÃO ALTA (10 min)
2 casos clínicos completos
Tempo: metade do que seria confortável
[Casos que exigem múltiplas decisões]

## DEBRIEFING
Após terminar:
1. Como você se sentiu em cada fase?
2. Que estratégias usou para manejar a ansiedade?
3. Onde a pressão prejudicou seu desempenho?
4. O que pode fazer diferente na prova real?

# TÉCNICAS DE REGULAÇÃO
- Respiração 4-7-8
- Âncora de confiança
- Self-talk positivo
- Acceptance and Commitment`
  },

  // SEÇÃO 6: ROTINA DE ALTA PERFORMANCE
  {
    id: "ultradian-architect",
    title: "Ultradian Performance Architect",
    category: "Rotina de Alta Performance",
    categorySlug: "rotina-performance",
    sectionNumber: 6,
    description: "Estrutura rotina em blocos de 90 minutos alinhados aos picos de energia",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["ultradian", "90-minutos", "energia"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em ritmos ultradianos e neurociência do desempenho.

# TAREFA
Crie uma rotina de estudo baseada em ciclos ultradianos de 90 minutos para [MEU CONTEXTO].

# INPUT NECESSÁRIO
- Horário de acordar: [X]
- Horário de dormir: [Y]
- Compromissos fixos: [lista]
- Objetivo principal: [prova/tema]

# ESTRUTURA DO CICLO ULTRADIANO (90 min)

## FASE 1: FOCO INTENSO (52 min)
- Minutos 0-10: Aquecimento (revisão do dia anterior)
- Minutos 10-52: Deep work no tema principal
- Técnica recomendada: [baseada no tipo de tarefa]

## FASE 2: PICO DE PERFORMANCE (25 min)
- Minutos 52-77: Atividade de maior demanda cognitiva
- Este é seu momento de resolver problemas difíceis

## FASE 3: CONSOLIDAÇÃO (13 min)
- Minutos 77-90: Revisão ativa do que estudou
- Anotações de dúvidas para próxima sessão

## INTERVALO OBRIGATÓRIO (20 min)
- Movimente-se fisicamente
- Evite telas
- Hidrate-se

# CRONOGRAMA DO DIA
| Horário | Ciclo | Foco | Estado Energético |
|---------|-------|------|-------------------|
| [X] | 1 | [mais difícil] | Pico |
| [X+2h] | 2 | [difícil] | Alto |
| [X+4h] | 3 | [moderado] | Médio |

# SINAIS DE QUEBRA DO CICLO
Se sentir: bocejo, dispersão, fome → respeite o intervalo`
  },
  {
    id: "chronotype-optimizer",
    title: "Chronotype-Based Schedule",
    category: "Rotina de Alta Performance",
    categorySlug: "rotina-performance",
    sectionNumber: 6,
    description: "Alinha estudos com seu cronotipo para máxima eficiência cognitiva",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["cronotipo", "ritmo-circadiano", "produtividade"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em cronobiologia e otimização circadiana.

# TAREFA
Crie um cronograma de estudos otimizado para meu cronotipo.

# IDENTIFICAÇÃO DO CRONOTIPO
Responda:
1. Horário natural de acordar (sem despertador): [X]
2. Horário de maior disposição: [manhã/tarde/noite]
3. Horário de sono natural: [X]
4. Como se sente às 10h? [muito alerta/ok/sonolento]

# CRONOGRAMAS POR CRONOTIPO

## MATUTINO (Leão)
- Pico cognitivo: 8h-12h
- Estudo pesado: manhã
- Revisões leves: tarde
- Evitar: estudo após 20h

## INTERMEDIÁRIO (Urso)
- Pico cognitivo: 10h-14h
- Estudo pesado: meio da manhã até início da tarde
- Revisões: final da tarde
- Evitar: madrugada

## VESPERTINO (Lobo)
- Pico cognitivo: 16h-22h
- Estudo pesado: tarde e noite
- Revisões: manhã (se acordado)
- Evitar: início da manhã

# SEU CRONOGRAMA PERSONALIZADO
[Baseado nas respostas, criar horário específico]

| Atividade | Melhor Horário | Tipo de Tarefa |
|-----------|----------------|----------------|
| Deep work | [X] | Conteúdo novo difícil |
| Revisão ativa | [X] | Flashcards, questões |
| Leitura leve | [X] | Material de apoio |`
  },
  {
    id: "pomodoro-protocol",
    title: "Systematic Pomodoro Protocol",
    category: "Rotina de Alta Performance",
    categorySlug: "rotina-performance",
    sectionNumber: 6,
    description: "Implementa técnica Pomodoro adaptada para estudo médico intensivo",
    estimatedTime: "5 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["pomodoro", "foco", "intervalos"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em produtividade e técnica Pomodoro adaptada para estudos médicos.

# TAREFA
Configure um sistema Pomodoro otimizado para [MEU OBJETIVO DE ESTUDO].

# PROTOCOLO POMODORO MÉDICO

## CONFIGURAÇÃO BASE
- Pomodoro: 25 minutos
- Pausa curta: 5 minutos
- Pausa longa: 15-30 minutos (após 4 pomodoros)

## ADAPTAÇÃO POR TIPO DE ATIVIDADE

### LEITURA DE CONTEÚDO NOVO
- Pomodoro: 25 min (com anotações ativas)
- Pausa: 5 min (sem telas)
- Meta: 2-3 páginas produtivas por pomodoro

### RESOLUÇÃO DE QUESTÕES
- Pomodoro: 30 min (batch de questões)
- Pausa: 5 min (correção rápida)
- Meta: 5-8 questões por pomodoro

### REVISÃO DE FLASHCARDS
- Pomodoro: 20 min (mais intenso)
- Pausa: 5 min
- Meta: 50-70 cards por pomodoro

## REGISTRO DIÁRIO
| Pomodoro | Horário | Atividade | Completado? | Observação |
|----------|---------|-----------|-------------|------------|
| 1 | [X] | [atividade] | [ ] | |
| 2 | [X] | [atividade] | [ ] | |

## REGRAS DE OURO
1. Se interrompido, o pomodoro não conta
2. Registre todas as distrações que surgirem
3. Não estenda pomodoros - a pausa é sagrada
4. Revise e ajuste durações semanalmente`
  },
  {
    id: "energy-audit",
    title: "Energy Audit & Peak Mapper",
    category: "Rotina de Alta Performance",
    categorySlug: "rotina-performance",
    sectionNumber: 6,
    description: "Mapeia flutuações de energia para alocação estratégica de tarefas",
    estimatedTime: "15 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["energia", "mapeamento", "produtividade"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em gestão de energia pessoal e produtividade sustentável.

# TAREFA
Conduza uma auditoria de energia para otimizar minha rotina de estudos.

# COLETA DE DADOS (7 dias)
Registre a cada 2 horas:
- Horário
- Nível de energia (1-10)
- Nível de foco (1-10)
- Humor
- O que estava fazendo
- O que comeu/bebeu antes

# TEMPLATE DE REGISTRO
| Horário | Energia | Foco | Humor | Atividade | Alimentação |
|---------|---------|------|-------|-----------|-------------|
| 08:00 | 7 | 6 | Neutro | Aula | Café |
| 10:00 | 8 | 8 | Bom | Estudo | - |
| 12:00 | 5 | 4 | Cansado | Almoço | Refeição |

# ANÁLISE (após 7 dias)

## PADRÕES IDENTIFICADOS
- Horários de pico: [X, Y, Z]
- Horários de vale: [A, B, C]
- Gatilhos de energia: [lista]
- Drenos de energia: [lista]

## MAPA DE ALOCAÇÃO
| Nível de Energia | Tipo de Tarefa Ideal |
|------------------|---------------------|
| 8-10 (Pico) | Aprendizado novo, problemas difíceis |
| 5-7 (Médio) | Revisão, questões moderadas |
| 1-4 (Baixo) | Tarefas administrativas, descanso |

## INTERVENÇÕES SUGERIDAS
1. [Mudança específica baseada nos dados]
2. [Mudança específica baseada nos dados]`
  },

  // SEÇÃO 7: HÁBITOS E CONSISTÊNCIA
  {
    id: "habit-stacking",
    title: "Habit Stacking Chain Builder",
    category: "Hábitos e Consistência",
    categorySlug: "habitos-consistencia",
    sectionNumber: 7,
    description: "Conecta novos hábitos de estudo a rotinas existentes para automação",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["habit-stacking", "rotina", "automação"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em formação de hábitos e habit stacking (James Clear).

# TAREFA
Crie uma cadeia de habit stacking para incorporar [HÁBITO DE ESTUDO DESEJADO].

# MAPEAMENTO DA ROTINA ATUAL
Liste seus hábitos atuais sólidos:
- Manhã: [ex: acordar, café, banho]
- Tarde: [ex: almoço, trabalho]
- Noite: [ex: jantar, série, dormir]

# FÓRMULA DO HABIT STACKING
"Depois de [HÁBITO ATUAL], eu vou [NOVO HÁBITO]."

# CADEIA PROPOSTA

## MANHÃ
1. Depois de [servir o café], vou [revisar 10 flashcards]
2. Depois de [escovar os dentes], vou [ler 1 página do tema do dia]

## TARDE
3. Depois de [almoçar], vou [fazer 5 questões]
4. Depois de [chegar em casa], vou [30 min de deep work]

## NOITE
5. Depois de [jantar], vou [revisar anotações do dia]
6. Depois de [deitar], vou [ouvir 1 podcast médico]

# IMPLEMENTAÇÃO GRADUAL
- Semana 1: Implementar apenas 1-2 stacks
- Semana 2: Adicionar mais 1-2
- Semana 3: Cadeia completa

# TROUBLESHOOTING
Se o hábito não pegar:
- O âncora é forte o suficiente?
- O novo hábito é pequeno demais?
- Há recompensa imediata?`
  },
  {
    id: "daily-non-negotiables",
    title: "Daily Non-Negotiables Tracker",
    category: "Hábitos e Consistência",
    categorySlug: "habitos-consistencia",
    sectionNumber: 7,
    description: "Define e rastreia ações mínimas diárias inegociáveis para progresso",
    estimatedTime: "5 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["não-negociáveis", "mínimo-viável", "consistência"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em sistemas de consistência e mínimo viável para progresso.

# TAREFA
Defina meus non-negotiables diários para [OBJETIVO].

# CONCEITO
Non-negotiables são ações MÍNIMAS que você faz TODOS os dias, não importa o que aconteça. São tão pequenas que não há desculpa para não fazer.

# CRITÉRIOS PARA DEFINIÇÃO
1. Leva menos de 10 minutos
2. Pode ser feito em qualquer condição
3. Tem impacto composto ao longo do tempo
4. É específico e mensurável

# SEUS NON-NEGOTIABLES (máximo 5)

## ESTUDO
1. [ ] Revisar [X] flashcards (10 min)
2. [ ] Resolver [Y] questões (15 min)
3. [ ] Ler [Z] páginas (10 min)

## SAÚDE
4. [ ] [Atividade física mínima] (10 min)
5. [ ] [Hábito de sono] (5 min)

# TRACKER SEMANAL
| Non-Neg | Seg | Ter | Qua | Qui | Sex | Sab | Dom |
|---------|-----|-----|-----|-----|-----|-----|-----|
| Flashcards | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Questões | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Leitura | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

# REGRA DE OURO
Nos dias ruins, faça APENAS os non-negotiables. Nos dias bons, faça mais. A consistência vence a intensidade.`
  },
  {
    id: "cornerstone-behavior",
    title: "Cornerstone Behavior Identifier",
    category: "Hábitos e Consistência",
    categorySlug: "habitos-consistencia",
    sectionNumber: 7,
    description: "Identifica o hábito-chave que desencadeia outros comportamentos positivos",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["keystone-habit", "efeito-cascata", "mudança"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em keystone habits e mudança comportamental sistêmica.

# TAREFA
Identifique meu comportamento cornerstone para [OBJETIVO DE TRANSFORMAÇÃO].

# O QUE É CORNERSTONE BEHAVIOR
É o hábito que, quando executado, naturalmente desencadeia uma cascata de outros comportamentos positivos. Mudar este único hábito pode transformar múltiplas áreas.

# ANÁLISE

## MAPEAMENTO DE CONEXÕES
Liste seus hábitos atuais e como se conectam:
- Quando faço [X], fico mais propenso a [Y]
- Quando não faço [X], acabo fazendo [Z]

## IDENTIFICAÇÃO DO CORNERSTONE
Perguntas-guia:
1. Que hábito, quando você faz, o resto do dia flui melhor?
2. Que hábito, quando você pula, o dia tende a desandar?
3. Que pequena vitória no início do dia te dá momentum?

## CANDIDATOS A CORNERSTONE
Para estudantes de medicina, frequentemente são:
- Acordar no horário planejado
- Primeira sessão de estudo da manhã
- Exercício físico
- Sono de qualidade

# SEU CORNERSTONE IDENTIFICADO
[Baseado na análise]

## PROTOCOLO DE PROTEÇÃO
Este hábito deve ser:
1. Protegido de interrupções
2. Feito primeiro (antes de decisões)
3. Nunca negociável
4. Celebrado quando cumprido

## EFEITO CASCATA ESPERADO
[Cornerstone] → [Consequência 1] → [Consequência 2] → [Resultado final]`
  },
  {
    id: "pre-study-ritual",
    title: "Pre-Study Activation Ritual",
    category: "Hábitos e Consistência",
    categorySlug: "habitos-consistencia",
    sectionNumber: 7,
    description: "Cria ritual de transição para entrar rapidamente em estado de foco",
    estimatedTime: "5 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["ritual", "transição", "foco"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em psicologia do desempenho e rituais de transição.

# TAREFA
Crie um ritual pré-estudo personalizado para [MEU CONTEXTO].

# CONCEITO
Um ritual pré-estudo é uma sequência fixa de ações que sinaliza ao seu cérebro: "hora de focar". Com repetição, você entra em estado de fluxo mais rapidamente.

# ESTRUTURA DO RITUAL (5 min total)

## MINUTO 1: AMBIENTE
- [ ] Organizar mesa (apenas material necessário)
- [ ] Silenciar celular (ou colocar em outra sala)
- [ ] Ajustar iluminação

## MINUTO 2: CORPO
- [ ] 5 respirações profundas (4-7-8)
- [ ] Quick stretch (pescoço, ombros)
- [ ] Postura de prontidão

## MINUTO 3: MENTE
- [ ] Definir intenção: "Nos próximos [X] minutos, vou [tarefa específica]"
- [ ] Visualizar conclusão bem-sucedida
- [ ] Abandonar preocupações (anotar para depois)

## MINUTO 4-5: AQUECIMENTO
- [ ] Revisão rápida do dia anterior (2 min)
- [ ] Primeira tarefa minúscula já iniciada

# PERSONALIZAÇÃO
Adicione elementos que funcionam para VOCÊ:
- Música específica?
- Bebida ritual (chá, café)?
- Frase motivacional?
- Playlist específica?

# GATILHO
Escolha um gatilho sensorial consistente:
- Mesma música de início
- Mesmo chá/café
- Mesmo lugar

Após 21 dias, o ritual se torna automático.`
  },

  // SEÇÃO 8: PRODUÇÃO ACADÊMICA
  {
    id: "assistente-tcc",
    title: "Assistente de TCC",
    category: "Produção Acadêmica",
    categorySlug: "producao-academica",
    sectionNumber: 8,
    description: "Estrutura metodologia, objetivos e cronograma do trabalho acadêmico",
    estimatedTime: "15 min",
    evidenceLevel: "Média",
    difficulty: "Avançado",
    tags: ["TCC", "metodologia", "pesquisa"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é orientador de TCC em medicina com experiência em metodologia científica.

# TAREFA
Me ajude a estruturar meu TCC sobre [TEMA].

# ETAPAS DE CONSTRUÇÃO

## 1. DELIMITAÇÃO DO TEMA
- Refine meu tema para algo específico e viável
- Sugira 3 recortes possíveis
- Avalie a viabilidade de cada um

## 2. PROBLEMA DE PESQUISA
- Formule a pergunta norteadora
- Justifique a relevância científica e social

## 3. OBJETIVOS
- Objetivo geral (1)
- Objetivos específicos (3-4)
- Verifique se são mensuráveis

## 4. METODOLOGIA
- Tipo de estudo mais adequado
- População e amostra
- Critérios de inclusão/exclusão
- Instrumentos de coleta de dados
- Análise de dados proposta
- Considerações éticas

## 5. ESTRUTURA DO DOCUMENTO
- Sumário preliminar
- Estimativa de páginas por seção
- Cronograma de execução

# NORMAS
- Siga ABNT
- Linguagem acadêmica impessoal
- Evite primeira pessoa`
  },
  {
    id: "busca-evidencias",
    title: "Busca de Evidências em Medicina",
    category: "Produção Acadêmica",
    categorySlug: "producao-academica",
    sectionNumber: 8,
    description: "Estrutura estratégia PICO e busca sistemática em bases científicas",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["PICO", "PubMed", "evidências"],
    aiRecommended: "perplexity",
    prompt: `# PAPEL
Você é bibliotecário especialista em busca de evidências médicas.

# TAREFA
Me ajude a construir uma estratégia de busca para [MINHA DÚVIDA CLÍNICA].

# ESTRUTURAÇÃO PICO
Transforme minha dúvida em:
- P (População): [quem são os pacientes?]
- I (Intervenção): [o que está sendo avaliado?]
- C (Comparação): [comparado com o quê?]
- O (Outcome): [qual resultado interessa?]

# ESTRATÉGIA DE BUSCA

## TERMOS MeSH SUGERIDOS
- Termo 1: [em inglês]
- Termo 2: [em inglês]
- Termo 3: [em inglês]

## STRING DE BUSCA (PubMed)
("Termo 1"[MeSH] OR "sinônimo") AND ("Termo 2"[MeSH] OR "sinônimo") AND ("Termo 3"[MeSH])

## FILTROS RECOMENDADOS
- Tipo de estudo: [mais adequado]
- Período: [últimos X anos]
- Idioma: [se aplicável]

## BASES DE DADOS
1. PubMed (primária)
2. Cochrane Library (revisões sistemáticas)
3. LILACS (literatura latino-americana)

# AVALIAÇÃO CRÍTICA
Após encontrar artigos, avalie:
- Nível de evidência
- Risco de viés
- Aplicabilidade ao contexto`
  },
  {
    id: "revisor-academico",
    title: "Revisor Acadêmico",
    category: "Produção Acadêmica",
    categorySlug: "producao-academica",
    sectionNumber: 8,
    description: "Revisa texto acadêmico verificando estrutura, coerência e ABNT",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["revisão", "ABNT", "escrita"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é revisor acadêmico especialista em textos médicos e normas ABNT.

# TAREFA
Revise o texto que vou fornecer sobre [TEMA/SEÇÃO DO TRABALHO].

# CHECKLIST DE REVISÃO

## ESTRUTURA
- [ ] Introdução-Desenvolvimento-Conclusão presentes
- [ ] Parágrafos com tópico frasal claro
- [ ] Transições entre parágrafos
- [ ] Progressão lógica das ideias

## LINGUAGEM ACADÊMICA
- [ ] Impessoalidade (sem "eu", "nós")
- [ ] Objetividade (sem opinião não fundamentada)
- [ ] Clareza (frases não muito longas)
- [ ] Precisão terminológica

## COERÊNCIA E COESÃO
- [ ] Conectivos adequados
- [ ] Referências anafóricas claras
- [ ] Não há contradições internas
- [ ] Argumentação fundamentada

## NORMAS ABNT
- [ ] Citações diretas e indiretas corretas
- [ ] Formatação de referências
- [ ] Uso de siglas (definir na primeira vez)

# FORMATO DO FEEDBACK
Para cada problema encontrado:
1. Trecho original
2. Tipo de problema
3. Sugestão de correção
4. Explicação breve

# PRIORIZAÇÃO
Classifique os problemas em:
- CRÍTICO: Compromete compreensão ou regra grave
- IMPORTANTE: Melhoria significativa
- SUGESTÃO: Polimento`
  },

  // SEÇÃO 9: FORMATOS ALTERNATIVOS
  {
    id: "podcast-educativo",
    title: "Podcast Educativo AI",
    category: "Formatos Alternativos",
    categorySlug: "formatos-alternativos",
    sectionNumber: 9,
    description: "Gera script para podcast educativo sobre tema médico específico",
    estimatedTime: "10 min",
    evidenceLevel: "Emergente",
    difficulty: "Intermediário",
    tags: ["podcast", "áudio", "aprendizado-passivo"],
    aiRecommended: "notebooklm",
    prompt: `# INSTRUÇÕES PARA NOTEBOOKLM / GERAÇÃO DE PODCAST
Gere um podcast educativo sobre [TEMA].

# ESTRUTURA DO PODCAST
1. ABERTURA (1-2 min): Gancho inicial + contextualização do tema
2. FUNDAMENTOS (3-4 min): Conceitos essenciais com analogias do cotidiano
3. APROFUNDAMENTO (4-5 min): Casos práticos e exemplos clínicos
4. ARMADILHAS (2-3 min): Erros comuns e como evitá-los
5. FECHAMENTO (1-2 min): Resumo + próximos passos de estudo

# APRESENTADORES
- Ana: Abordagem teórica e fundamentação científica
- Lucas: Visão prática e aplicação clínica

# DIRETRIZES
- Tom: Profissional mas acessível
- Duração: 12-15 minutos
- Inclua momentos de discordância construtiva
- Use analogias do cotidiano para explicar conceitos complexos`
  },
  {
    id: "mapas-conceituais",
    title: "Mapas Conceituais Estruturados",
    category: "Formatos Alternativos",
    categorySlug: "formatos-alternativos",
    sectionNumber: 9,
    description: "Cria estrutura de mapa mental com hierarquia e conexões claras",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["mapa-mental", "visual", "conexões"],
    aiRecommended: "gemini",
    prompt: `# TAREFA
Crie um mapa mental estruturado sobre [TEMA].

# ESTRUTURA
\`\`\`
CONCEITO CENTRAL: [TEMA]
│
├── RAMO 1: [Categoria Principal]
│   ├── Subtópico 1.1
│   │   └── Detalhe importante
│   └── Subtópico 1.2
│
├── RAMO 2: [Categoria Principal]
│   ├── Subtópico 2.1
│   └── Subtópico 2.2
│
├── RAMO 3: [Categoria Principal]
│   └── ...
│
└── CONEXÕES
    └── Ramo 1 → Ramo 2 (tipo de relação)
\`\`\`

# REGRAS
- Máximo 5 ramos principais
- Máximo 3 níveis de profundidade
- Use palavras-chave, não frases longas
- Indique relações com setas e verbos
- Destaque os 3 conceitos mais importantes

# SEÇÃO FINAL
Liste os 5 conceitos-chave para memorização.`
  },

  // SEÇÃO 10: OTIMIZAÇÃO E TRACKING
  {
    id: "diagnostico-perfil",
    title: "Diagnóstico de Perfil de Aprendizagem",
    category: "Otimização e Tracking",
    categorySlug: "otimizacao-tracking",
    sectionNumber: 10,
    description: "Identifica estilo de aprendizagem e recomenda estratégias personalizadas",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["perfil", "diagnóstico", "personalização"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em estilos de aprendizagem e personalização de estudos.

# TAREFA
Faça um diagnóstico do meu perfil de aprendizagem através de perguntas.

# QUESTIONÁRIO

## PROCESSAMENTO DE INFORMAÇÃO
1. Quando estuda algo novo, você prefere:
   a) Ler textos e fazer anotações
   b) Ver diagramas e vídeos
   c) Ouvir explicações
   d) Fazer exercícios práticos

2. Você lembra melhor o que:
   a) Leu
   b) Viu em imagens
   c) Ouviu
   d) Fez/praticou

[Continue com mais 8 perguntas cobrindo:]
- Ambiente preferido de estudo
- Tolerância a distrações
- Preferência por estudo solo vs grupo
- Melhor momento do dia
- Resposta a pressão de prazos
- Uso de tecnologia

# ANÁLISE DO PERFIL
Baseado nas respostas:
- Modalidade predominante: [Visual/Auditivo/Cinestésico/Leitura-escrita]
- Ambiente ideal: [descrição]
- Técnicas mais eficazes: [lista]
- Técnicas a evitar: [lista]

# PLANO PERSONALIZADO
[Recomendações específicas baseadas no perfil]`
  },
  {
    id: "weekly-review",
    title: "Weekly High-Performance Review",
    category: "Otimização e Tracking",
    categorySlug: "otimizacao-tracking",
    sectionNumber: 10,
    description: "Estrutura revisão semanal de performance com ajustes estratégicos",
    estimatedTime: "15 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["revisão-semanal", "retrospectiva", "ajustes"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é coach de alta performance para estudantes de medicina.

# TAREFA
Guie minha revisão semanal de desempenho.

# ESTRUTURA DA REVISÃO (15 min)

## PARTE 1: RETROSPECTIVA (5 min)

### Vitórias da Semana
- O que realizei que me orgulho?
- Que metas atingi?
- Que hábitos mantive?

### Desafios Enfrentados
- Onde tive dificuldade?
- O que não consegui fazer?
- Que obstáculos surgiram?

### Aprendizados
- O que descobri sobre meu aprendizado?
- Que técnica funcionou bem?
- O que não funcionou?

## PARTE 2: MÉTRICAS (5 min)

| Área | Meta | Realizado | % |
|------|------|-----------|---|
| Horas de estudo | X | Y | Z% |
| Questões | X | Y | Z% |
| Flashcards | X | Y | Z% |
| Non-negotiables | X dias | Y dias | Z% |

## PARTE 3: PRÓXIMA SEMANA (5 min)

### Foco Principal
Uma coisa que, se eu fizer bem, a semana será um sucesso: _____

### Metas Específicas
1. [Meta mensurável]
2. [Meta mensurável]
3. [Meta mensurável]

### Ajustes Planejados
Baseado nos aprendizados, vou mudar: _____

### Possíveis Obstáculos
- Obstáculo: _____ | Plano B: _____`
  },
  {
    id: "strategic-breaks",
    title: "Strategic Break Activity Designer",
    category: "Otimização e Tracking",
    categorySlug: "otimizacao-tracking",
    sectionNumber: 10,
    description: "Projeta pausas que recuperam energia e consolidam aprendizado",
    estimatedTime: "5 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["pausas", "recuperação", "energia"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em recuperação cognitiva e pausas estratégicas.

# TAREFA
Projete pausas otimizadas para minha rotina de estudos.

# PRINCÍPIOS DAS PAUSAS EFETIVAS
1. Devem contrastar com a atividade de estudo
2. Não devem exigir decisões
3. Devem ser definidas previamente
4. Devem ter duração fixa

# MENU DE PAUSAS

## PAUSAS CURTAS (5 min)
Escolha 1:
- [ ] Micro-alongamento (pescoço, ombros, pulsos)
- [ ] Olhar pela janela (visão distante)
- [ ] Respiração box (4-4-4-4)
- [ ] Caminhar até a cozinha e beber água
- [ ] 10 agachamentos ou polichinelos

## PAUSAS MÉDIAS (15 min)
Escolha 1:
- [ ] Caminhada curta ao ar livre
- [ ] Alongamento completo
- [ ] Lanche nutritivo com atenção plena
- [ ] Música instrumental + olhos fechados
- [ ] Conversa leve com alguém da casa

## PAUSAS LONGAS (30+ min)
Escolha 1:
- [ ] Exercício físico
- [ ] Banho relaxante
- [ ] Refeição completa
- [ ] Socialização presencial
- [ ] Hobby não relacionado a telas

# O QUE NÃO FAZER NAS PAUSAS
- Redes sociais (não recuperam)
- Notícias (drenam energia)
- Decisões complexas (gastam willpower)
- "Só mais uma questão" (sabota o descanso)`
  },
  {
    id: "context-switching-eliminator",
    title: "Context-Switching Eliminator",
    category: "Otimização e Tracking",
    categorySlug: "otimizacao-tracking",
    sectionNumber: 10,
    description: "Identifica e elimina trocas de contexto que drenam produtividade",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["foco", "distrações", "monotasking"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em produtividade profunda e eliminação de distrações.

# TAREFA
Ajude-me a identificar e eliminar context-switching na minha rotina de estudos.

# CONCEITO
Context-switching é trocar frequentemente entre tarefas diferentes. Cada troca custa 15-25 minutos para recuperar foco profundo.

# AUDITORIA DE INTERRUPÇÕES

## REGISTRO (faça por 1 dia)
A cada interrupção, anote:
| Horário | Interrupção | Fonte | Necessária? | Duração perdida |
|---------|-------------|-------|-------------|-----------------|
| [X] | [descrição] | [interna/externa] | [S/N] | [X min] |

## CLASSIFICAÇÃO

### INTERRUPÇÕES EXTERNAS (outras pessoas, notificações)
- Quais são evitáveis?
- Quais podem ser agrupadas?
- Quais precisam de novo sistema?

### INTERRUPÇÕES INTERNAS (pensamentos, impulsos)
- Que pensamentos recorrentes interrompem?
- Que impulsos (checar celular, comer)?
- Que preocupações não resolvidas?

# PROTOCOLO DE ELIMINAÇÃO

## BLINDE O AMBIENTE
1. [ ] Modo avião no celular
2. [ ] Bloqueador de sites (Cold Turkey, Freedom)
3. [ ] Comunicar indisponibilidade
4. [ ] Fones de ouvido (mesmo sem música = sinal social)

## CAPTURE PARA DEPOIS
Quando surgir pensamento:
1. Anote em papel ao lado (5 segundos)
2. Volte imediatamente ao estudo
3. Processe a lista na pausa

## BATCHING
Agrupe atividades similares:
- Checar mensagens: 3x ao dia apenas
- E-mails: horário fixo
- Redes sociais: após estudos`
  },
  {
    id: "anti-procrastination",
    title: "Anti-Procrastination Task Starter",
    category: "Otimização e Tracking",
    categorySlug: "otimizacao-tracking",
    sectionNumber: 10,
    description: "Estratégias para vencer inércia inicial e começar tarefas adiadas",
    estimatedTime: "5 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["procrastinação", "início", "momentum"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em psicologia da procrastinação e técnicas de ativação.

# TAREFA
Me ajude a começar [TAREFA QUE ESTOU ADIANDO].

# DIAGNÓSTICO RÁPIDO
Por que estou adiando?
- [ ] Parece muito grande/complexo
- [ ] Não sei por onde começar
- [ ] Medo de fazer errado
- [ ] Não é prazeroso
- [ ] Estou cansado

# INTERVENÇÃO IMEDIATA

## SE PARECE GRANDE DEMAIS
"Qual é a menor ação possível?"
→ [Decomponha em micro-tarefa de 2 minutos]
Ex: "Estudar farmacologia" → "Abrir o livro na página certa"

## SE NÃO SEI POR ONDE COMEÇAR
"Comece pelo meio ou pelo mais fácil"
→ Não precisa ser sequencial
→ Momentum é mais importante que ordem

## SE TENHO MEDO DE ERRAR
"Permissão para fazer mal feito"
→ Primeira versão pode ser lixo
→ "Feito é melhor que perfeito"

## SE NÃO É PRAZEROSO
"Temptation bundling"
→ Combine com algo prazeroso
→ "Só posso [prazer] enquanto faço [tarefa]"

## SE ESTOU CANSADO
"Regra dos 2 minutos"
→ Faça apenas 2 minutos
→ Depois decida se continua

# SCRIPT MENTAL
"Eu não preciso querer fazer isso. Eu só preciso COMEÇAR. O querer vem depois."

# AÇÃO IMEDIATA
Sua micro-tarefa para AGORA (menos de 2 min):
→ [Defina e faça IMEDIATAMENTE]`
  },

  // SEÇÃO 11: CIÊNCIA COGNITIVA AVANÇADA (NOVOS PROMPTS)
  {
    id: "gerador-dificuldades-desejaveis",
    title: "Gerador de Dificuldades Desejáveis",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Cria desafios calibrados que otimizam consolidação de longo prazo",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["dificuldades-desejáveis", "bjork", "consolidação"],
    aiRecommended: "claude",
    prompt: `# CONTEXTO CIENTÍFICO
Técnica baseada na teoria de Dificuldades Desejáveis (Bjork & Bjork, 2011) - obstáculos estratégicos que parecem dificultar o aprendizado imediato, mas fortalecem a memória de longo prazo.

# PAPEL
Você é neurocientista especializado em otimização de aprendizado médico através de esforço cognitivo calibrado.

# TAREFA
Para o tema [TEMA MÉDICO], construa uma sequência de exercícios com dificuldade progressiva que maximize a consolidação neural.

# ESTRUTURA DE SAÍDA

## FASE 1: GERAÇÃO ATIVA (vs. leitura passiva)
Em vez de apresentar a informação, crie lacunas estratégicas:
"O mecanismo fisiopatológico da _____ envolve [processo A] → [?] → [processo C], resultando em _____."

## FASE 2: VARIAÇÃO CONTEXTUAL
Apresente o MESMO conceito em 3 cenários completamente diferentes:
- Cenário ambulatorial
- Cenário de emergência
- Cenário de pesquisa/artigo

## FASE 3: ESPAÇAMENTO FORÇADO
Divida o conteúdo em 3 micro-sessões com instruções para intervalos:
- Sessão 1: Agora
- Sessão 2: Em 4-6 horas
- Sessão 3: Amanhã

## FASE 4: INTERCALAÇÃO IMPREVISÍVEL
Misture [TEMA] com 2 temas relacionados sem aviso prévio.

## FASE 5: TESTE ANTES DE REVISAR
Crie 5 perguntas para responder SEM consultar material.

# CALIBRAÇÃO DE DIFICULDADE
- Alvo: 60-80% de acerto (zona de aprendizado ótimo)
- Se muito fácil: aumentar complexidade
- Se muito difícil: adicionar scaffolding

# AVISO IMPORTANTE
"A sensação de dificuldade é o sinal de que seu cérebro está criando conexões duradouras. Confie no processo."`
  },
  {
    id: "codificacao-dupla-visual",
    title: "Codificação Dupla Visual-Verbal",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Integra representações visuais e verbais para múltiplas vias de memória",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["dual-coding", "paivio", "visualização"],
    aiRecommended: "gemini",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado na Teoria da Codificação Dupla (Paivio, 1986) - informações codificadas tanto verbal quanto visualmente criam múltiplas rotas de recuperação na memória.

# PAPEL
Você é especialista em design instrucional multimodal para educação médica.

# TAREFA
Para [CONCEITO MÉDICO], crie material que ative simultaneamente os sistemas verbal e imagético do cérebro.

# ESTRUTURA DE SAÍDA

## 1. REPRESENTAÇÃO VERBAL ESTRUTURADA
[Explicação textual clara e hierárquica - máximo 150 palavras]
- Conceito central
- Subcomponentes
- Relações causais

## 2. BLUEPRINT VISUAL DETALHADO
Descreva precisamente um diagrama para criar ou imaginar:

### Elementos Visuais Principais
- Forma central: [descrição]
- Elementos secundários: [lista]
- Posicionamento espacial: [instruções]

### Código de Cores (com significado)
- Cor 1: [hsl/nome] = [representa]
- Cor 2: [hsl/nome] = [representa]

### Setas e Conexões
- [Origem] → [Destino]: [tipo de relação]

### Legendas e Rótulos
- [Posição]: [texto]

## 3. PONTE VERBAL-VISUAL
3 afirmações que conectam explicitamente texto e imagem:
"Quando você lê [conceito X], visualize [elemento Y do diagrama]..."

## 4. EXERCÍCIO DE RECUPERAÇÃO DUAL
2 perguntas que exigem lembrar AMBAS as representações:
- "Descreva verbalmente E desenhe..."
- "Localize no diagrama mental E explique o mecanismo..."

# REGRAS
- Priorize conceitos com alta carga visual natural
- Use metáforas visuais do cotidiano
- Mantenha consistência entre verbal e visual`
  },
  {
    id: "priming-cognitivo-preteste",
    title: "Priming Cognitivo Pré-Teste",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Ativa atenção seletiva e conhecimento prévio antes do estudo",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["priming", "pré-teste", "atenção-seletiva"],
    aiRecommended: "chatgpt",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado em Priming Cognitivo (Tulving, 1983) e Efeito de Pré-Teste (Richland et al., 2009) - tentar responder antes de estudar aumenta atenção seletiva e retenção subsequente.

# PAPEL
Você é especialista em preparação cognitiva e ativação de esquemas mentais para aprendizado.

# TAREFA
Crie uma sessão de priming pré-estudo para [TEMA MÉDICO].

# ESTRUTURA DE SAÍDA

## INSTRUÇÕES PARA O ESTUDANTE
"Responda estas perguntas ANTES de estudar o material. O objetivo NÃO é acertar, mas ativar sua curiosidade e preparar seu cérebro para absorver informações relevantes."

## ATIVAÇÃO DE CONHECIMENTO PRÉVIO (2 min)
"O que você JÁ SABE sobre [TEMA]? Liste 3-5 fatos, mesmo incertos:"
1. _____
2. _____
3. _____

## PRÉ-TESTE PRIMING (5 perguntas)

### Pergunta 1: Conceito Fundamental
[Pergunta sobre definição/conceito básico]
- Minha resposta agora: _____
- Nível de certeza: [ ] Chutando [ ] Acho que sei [ ] Certeza

### Pergunta 2: Mecanismo
[Pergunta sobre processo/fisiopatologia]
- Minha resposta agora: _____
- Nível de certeza: [ ] Chutando [ ] Acho que sei [ ] Certeza

### Pergunta 3: Aplicação Clínica
[Pergunta sobre caso prático]
- Minha resposta agora: _____
- Nível de certeza: [ ] Chutando [ ] Acho que sei [ ] Certeza

### Pergunta 4: Diferenciação
[Pergunta comparativa com conceito similar]
- Minha resposta agora: _____
- Nível de certeza: [ ] Chutando [ ] Acho que sei [ ] Certeza

### Pergunta 5: Consequência/Complicação
[Pergunta sobre desfechos]
- Minha resposta agora: _____
- Nível de certeza: [ ] Chutando [ ] Acho que sei [ ] Certeza

## APÓS ESTUDAR - RETORNE AQUI
1. Corrija suas respostas com cor diferente
2. Marque os "aha moments" (onde sua intuição estava errada)
3. Identifique onde tinha conhecimento parcial

## BENEFÍCIO NEUROLÓGICO
- Perguntas não respondidas criam "curiosity gaps"
- Seu cérebro priorizará informações que preenchem esses gaps
- Erros no pré-teste potencializam correção (hipercorreção)`
  },
  {
    id: "intercalacao-inteligente",
    title: "Intercalação Inteligente de Temas",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Mistura temas relacionados forçando discriminação e conexões profundas",
    estimatedTime: "15 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["interleaving", "discriminação", "transferência"],
    aiRecommended: "claude",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado em Interleaving Practice (Rohrer & Taylor, 2007) - alternar entre tópicos durante o estudo força o cérebro a discriminar entre conceitos similares, fortalecendo aprendizado profundo.

# PAPEL
Você é especialista em design de prática intercalada para maximizar discriminação e transferência em medicina.

# TAREFA
Crie uma sessão de estudo intercalado misturando [TÓPICO A], [TÓPICO B] e [TÓPICO C] de forma estratégica.

# ESTRUTURA DE SAÍDA

## AQUECIMENTO CONCEITUAL (5 min)
Revisão ultrarápida - 1 frase definidora de cada:
- [Tópico A]: _____
- [Tópico B]: _____
- [Tópico C]: _____

## BLOCO INTERCALADO IMPREVISÍVEL (25 min)
Apresente 12 problemas/casos em ordem ALEATÓRIA (não agrupe por tema):

### Problema 1: [TÓPICO ?]
[Caso clínico ou pergunta conceitual]
→ Qual tópico? _____ 
→ Sua resposta: _____
→ Por que NÃO é [outro tópico]? _____

### Problema 2: [TÓPICO ?]
[Continue com ordem imprevisível...]

[Repita para 12 problemas, variando dificuldade]

## FOCO EM DISCRIMINAÇÃO
Para CADA problema, inclua:
1. "Qual característica-chave identificou o tópico correto?"
2. "Que pista poderia ter enganado você para outro tópico?"

## CASOS AMBÍGUOS INTENCIONAIS
Inclua 2-3 casos onde múltiplos tópicos poderiam se aplicar:
"Este caso poderia ser A ou B. Que informação adicional diferenciaria?"

## REFLEXÃO METACOGNITIVA
Após completar:
1. Onde você confundiu os tópicos? Por quê?
2. Que regra discriminativa você pode criar?
3. Quais conexões inesperadas descobriu entre os tópicos?

# AVISO
"A dificuldade de alternar temas É o aprendizado acontecendo. Se parecesse fácil, você estaria apenas reconhecendo, não aprendendo."`
  },
  {
    id: "diario-metacognitivo",
    title: "Diário Metacognitivo Estruturado",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Desenvolve consciência sobre o próprio processo de aprendizagem",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["metacognição", "autorregulação", "reflexão"],
    aiRecommended: "chatgpt",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado em Metacognição e Aprendizagem Autorregulada (Flavell, 1979; Zimmerman, 2002) - refletir sobre o próprio pensamento melhora estratégias de estudo e identifica blind spots.

# PAPEL
Você é especialista em desenvolvimento metacognitivo e coaching de aprendizagem autorregulada.

# TAREFA
Guie uma sessão de reflexão metacognitiva sobre meu estudo de [TEMA] hoje.

# ESTRUTURA DO DIÁRIO METACOGNITIVO

## FASE 1: PRÉ-ESTUDO (Planejamento) - 2 min
Responda antes de começar:

### Consciência do Conhecimento
"Meu nível atual neste tema (1-10): _____"
"O que JÁ SEI sobre isso: _____"
"Minhas lacunas conhecidas: _____"

### Planejamento Estratégico
"Meu objetivo específico para esta sessão: _____"
"Estratégias que vou usar: _____"
"Tempo planejado: _____ min"
"Possíveis obstáculos: _____"

## FASE 2: DURANTE O ESTUDO (Monitoramento) - Check a cada 20 min

### Checkpoint de Compreensão
"Estou entendendo? [ ] Sim [ ] Parcialmente [ ] Não"
"Preciso reler algo? [ ] Sim - o quê? _____ [ ] Não"
"Minha estratégia está funcionando? [ ] Sim [ ] Preciso mudar"

### Detecção de Confusão
"Momento de confusão: _____"
"O que fiz quando confundi: _____"
"Funcionou? _____"

## FASE 3: PÓS-ESTUDO (Avaliação) - 5 min

### Avaliação de Aprendizado
"Meu nível AGORA (1-10): _____"
"O que aprendi DE FATO (sem olhar anotações): _____"
"O que ainda está confuso: _____"

### Avaliação de Estratégia
"Estratégia mais eficaz: _____"
"Estratégia que não funcionou: _____"
"O que farei diferente amanhã: _____"

### Calibração de Confiança
"Minha confiança neste tema: [ ] Subestimo [ ] Calibrada [ ] Superestimo"
"Evidência para isso: _____"

## INSIGHT METACOGNITIVO DO DIA
"A descoberta mais importante sobre COMO eu aprendo foi: _____"

# PADRÕES A LONGO PRAZO
Após 7 dias de diário, analise:
- Em que horários você aprende melhor?
- Quais estratégias aparecem como mais eficazes?
- Onde você consistentemente superestima/subestima?`
  },
  {
    id: "gerador-exemplos-concretos",
    title: "Gerador de Exemplos Concretos",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Transforma abstrações em casos específicos e memoráveis",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["exemplificação", "concretude", "ancoragem"],
    aiRecommended: "chatgpt",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado na Hipótese de Concretude (Paivio, 1991) e Efeito de Exemplificação (Rawson & Dunlosky, 2016) - conceitos abstratos ancorados em exemplos concretos são significativamente mais memoráveis.

# PAPEL
Você é especialista em tornar conceitos médicos abstratos em exemplos vívidos, específicos e memoráveis.

# TAREFA
Para [CONCEITO MÉDICO ABSTRATO], gere uma cascata de exemplos em múltiplos níveis de concretude.

# ESTRUTURA DE SAÍDA

## CONCEITO ABSTRATO ORIGINAL
"[Definição técnica em linguagem acadêmica - 1-2 linhas]"

## CASCATA DE EXEMPLIFICAÇÃO

### NÍVEL 1: Analogia do Cotidiano
[Metáfora usando algo familiar: cozinha, trânsito, esportes, tecnologia]
- Analogia: "[Conceito] é como [situação cotidiana] porque..."
- Correspondência ponto-a-ponto:
  - [Elemento abstrato A] = [Elemento concreto A']
  - [Elemento abstrato B] = [Elemento concreto B']
- Limitações da analogia: "Onde a comparação quebra..."

### NÍVEL 2: Caso Clínico Típico Vívido
Paciente: [Nome fictício], [idade], [ocupação]
- Queixa: "[Palavras exatas do paciente]"
- História: [Detalhes sensoriais - o que você vê, ouve, sente]
- Como [CONCEITO] se manifesta: [Conexão explícita]
- Desfecho: [O que aconteceu]

### NÍVEL 3: Caso Atípico Memorável
[Apresentação incomum do mesmo conceito]
- Por que é importante conhecer: "Se você só conhecer o típico, vai perder..."
- Pista diferenciadora: [O que deveria ter chamado atenção]

### NÍVEL 4: Contraexemplo Esclarecedor
"[CONCEITO] NÃO é [conceito frequentemente confundido]"
- Diferença crucial: [Em uma frase]
- Teste discriminativo: "Se você vir [X], é [A]. Se vir [Y], é [B]."

### NÍVEL 5: Exemplo Extremo/Limite
[Caso no limite do conceito - onde a definição é testada]
- Por que é interessante: [Revela nuances da definição]

## MNEMÔNICO ANCORADO
"Para lembrar [CONCEITO], pense em [imagem/frase baseada nos exemplos]"

# EXERCÍCIO DE TRANSFERÊNCIA
"Agora você: crie um exemplo próprio de [CONCEITO] diferente dos apresentados."`
  },
  {
    id: "autoexplicacao-guiada",
    title: "Autoexplicação Guiada",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Força articulação do raciocínio revelando lacunas lógicas",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["self-explanation", "elaboração", "compreensão"],
    aiRecommended: "claude",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado na Técnica de Autoexplicação (Chi et al., 1994) - explicar cada etapa do raciocínio em voz alta ou por escrito identifica lacunas e fortalece compreensão profunda.

# PAPEL
Você é tutor socrático especializado em guiar autoexplicação elaborativa para maximizar compreensão em medicina.

# TAREFA
Conduza uma sessão de autoexplicação sobre [TEMA/MECANISMO MÉDICO].

# ESTRUTURA DA SESSÃO

## FASE 1: APRESENTAÇÃO SEGMENTADA
Apresente o conteúdo em 4-5 segmentos curtos (3-4 frases cada).

### Segmento 1:
"[Primeira parte do conceito/mecanismo]"

→ PAUSA PARA AUTOEXPLICAÇÃO
Pergunte:
1. "O que este trecho está dizendo COM SUAS PALAVRAS?"
2. "POR QUE isso faz sentido? Qual o mecanismo subjacente?"
3. "COMO isso se conecta com algo que você já sabe?"
4. "QUE INFERÊNCIAS você pode fazer a partir disso?"
5. "O que AINDA NÃO ESTÁ CLARO para você?"

[Aguarde minha resposta antes de continuar]

### Segmento 2:
"[Segunda parte...]"

→ PAUSA PARA AUTOEXPLICAÇÃO
[Repita as 5 perguntas]

[Continue para todos os segmentos]

## FASE 2: DETECÇÃO DE LACUNAS
Após cada explicação minha:
- Se correta: "Exatamente! Você capturou [ponto-chave]. Agora, o que isso implica para [situação clínica]?"
- Se parcial: "Você está no caminho. O que acontece entre [A] e [B]?"
- Se incorreta: "Interessante raciocínio. O que te levou a essa conclusão? Vamos examinar..."

## FASE 3: SÍNTESE INTEGRADA
"Agora, explique TODO o [TEMA] como se estivesse ensinando a um colega de turma. Comece do zero."

[Avalie a síntese e aponte:]
- Pontos de força
- Lacunas remanescentes
- Conexões que poderiam ser feitas

## FASE 4: APLICAÇÃO
"Dado um paciente com [cenário], como você aplicaria este conhecimento? Explique seu raciocínio passo a passo."

# REGRAS ABSOLUTAS
- NUNCA pule para a resposta
- Use silêncio produtivo (espere eu elaborar)
- Elogie o PROCESSO de raciocínio, não apenas respostas corretas
- Se eu travar, ofereça scaffolding: "E se você pensasse sobre [aspecto X]..."`
  },
  {
    id: "otimizador-carga-cognitiva",
    title: "Otimizador de Carga Cognitiva",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Gerencia sobrecarga mental fragmentando e sequenciando conteúdo",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["carga-cognitiva", "sweller", "scaffolding"],
    aiRecommended: "claude",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado na Teoria da Carga Cognitiva (Sweller, 1988) - a memória de trabalho tem capacidade limitada; otimizar a apresentação do conteúdo maximiza aprendizado.

# PAPEL
Você é especialista em design instrucional baseado na Teoria da Carga Cognitiva para educação médica.

# TAREFA
Otimize o material sobre [TEMA COMPLEXO] para gerenciar carga cognitiva e maximizar aprendizado.

# ANÁLISE DE CARGA

## DIAGNÓSTICO DE COMPLEXIDADE

### Carga Intrínseca (inerente ao conteúdo)
- Nível estimado: [ ] Baixa [ ] Média [ ] Alta
- Número de elementos interativos: _____
- Pré-requisitos necessários: [lista]
- Interatividade entre elementos: [descrição]

### Carga Extrínseca (má apresentação) - ELIMINAR
Identifique e remova:
- [ ] Informação redundante (texto + imagem dizendo o mesmo)
- [ ] Split attention (texto longe de imagem relacionada)
- [ ] Detalhes irrelevantes
- [ ] Excesso de cores/formatação
- [ ] Linguagem desnecessariamente complexa

### Carga Relevante (esforço produtivo) - MAXIMIZAR
- [ ] Conexões com conhecimento prévio
- [ ] Exemplos e contra-exemplos
- [ ] Prática de recuperação
- [ ] Elaboração ativa

## REESTRUTURAÇÃO DO CONTEÚDO

### 1. CHUNKING ESTRATÉGICO
Divida em chunks de 3-4 elementos (limite da memória de trabalho):

**Chunk 1: [Nome descritivo]**
- Elemento A
- Elemento B
- Elemento C
→ Conexão unificadora: _____

**Chunk 2: [Nome descritivo]**
- Elemento D
- Elemento E
- Elemento F
→ Conexão unificadora: _____

[Continue conforme necessário]

### 2. SCAFFOLDING PROGRESSIVO
Construa em camadas:

**Camada 1 - Esqueleto:** [Conceito central apenas, máxima simplificação]

**Camada 2 - Estrutura:** [Adiciona detalhes essenciais]

**Camada 3 - Nuances:** [Exceções, casos especiais, profundidade]

### 3. INTEGRAÇÃO GRADUAL
Exercício que conecta chunks progressivamente:
- "Depois de dominar Chunk 1, como ele se relaciona com Chunk 2?"
- "Agora integre Chunks 1+2+3 em uma explicação unificada."

## SINAIS DE ALERTA DE SOBRECARGA
Se sentir:
- [ ] Confusão crescente
- [ ] Frustração
- [ ] "Brancos" frequentes
- [ ] Releitura sem compreensão

→ AÇÃO: Volte ao chunk anterior. Domine antes de avançar.

## CHECKLIST DE OTIMIZAÇÃO
- [ ] Removi redundâncias?
- [ ] Integrei texto e imagem?
- [ ] Eliminei detalhes não essenciais?
- [ ] Sequenciei do simples ao complexo?
- [ ] Criei conexões explícitas entre partes?`
  },
  {
    id: "programador-recuperacao-espacada",
    title: "Programador de Recuperação Espaçada",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Cria cronograma de testes de memória em intervalos expandidos ótimos",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["recuperação-espaçada", "testing-effect", "distribuição"],
    aiRecommended: "chatgpt",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado no Efeito de Testagem (Roediger & Karpicke, 2006) e Espaçamento Ótimo (Cepeda et al., 2008) - testar-se em intervalos expandidos fortalece memória mais que reler.

# PAPEL
Você é especialista em programação de prática de recuperação distribuída para retenção médica de longo prazo.

# TAREFA
Crie um programa de retrieval practice para [TEMA] ao longo de [PERÍODO até prova/uso].

# ESTRUTURA DO PROGRAMA

## PARÂMETROS INICIAIS
- Tema: [TEMA]
- Data de início: [hoje]
- Data alvo: [prova/uso clínico]
- Dias disponíveis: [calcular]
- Volume de conteúdo: [ ] Pequeno [ ] Médio [ ] Grande

## CRONOGRAMA DE INTERVALOS EXPANDIDOS
Baseado em curva de esquecimento otimizada:

| Sessão | Intervalo | Data | Tipo de Teste | Status |
|--------|-----------|------|---------------|--------|
| 1 | D+0 | [data] | Estudo inicial + teste imediato | [ ] |
| 2 | D+1 | [data] | Free recall (sem pistas) | [ ] |
| 3 | D+3 | [data] | Cued recall (com pistas) | [ ] |
| 4 | D+7 | [data] | Questões aplicadas | [ ] |
| 5 | D+14 | [data] | Casos clínicos | [ ] |
| 6 | D+30 | [data] | Integração com outros temas | [ ] |

## PROTOCOLOS POR TIPO DE SESSÃO

### SESSÃO TIPO A: FREE RECALL (mais difícil, mais eficaz)
1. Feche TODO o material
2. Configure timer: 5 minutos
3. Escreva TUDO que lembra sobre [subtópico]
4. Não pare de escrever até o timer
5. Compare com material original
6. Marque gaps com cor diferente

### SESSÃO TIPO B: CUED RECALL
Use estas pistas para recuperar informações:
- Pista 1: "[Primeira palavra]" → Complete: _____
- Pista 2: "[Sintoma X]" → Diagnósticos: _____
- Pista 3: "[Mecanismo]" → Consequências: _____

### SESSÃO TIPO C: APLICAÇÃO
[3-5 questões de múltipla escolha ou casos curtos]

## REGRA CRÍTICA
"Recupere da memória ANTES de revisar. O esforço de lembrar é o que fortalece a memória, não a releitura."

## AJUSTES DINÂMICOS
- Se taxa de acerto >85%: Aumente intervalo em 50%
- Se taxa de acerto <60%: Diminua intervalo em 50%
- Se taxa de acerto 60-85%: Mantenha intervalo

## MÉTRICAS DE ACOMPANHAMENTO
| Data | Sessão | Itens testados | Acertos | Taxa | Tempo |
|------|--------|----------------|---------|------|-------|
| | | | | % | min |`
  },
  {
    id: "analisador-padroes-erro",
    title: "Analisador de Padrões de Erro",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Identifica misconceptions e gera ensino corretivo personalizado",
    estimatedTime: "15 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["análise-erros", "misconceptions", "correção-direcionada"],
    aiRecommended: "claude",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado em Feedback Formativo (Hattie & Timperley, 2007) e Análise de Misconceptions (Chi, 2005) - identificar PADRÕES de erro revela concepções errôneas subjacentes que uma correção pontual não resolve.

# PAPEL
Você é especialista em diagnóstico de dificuldades de aprendizagem e ensino corretivo direcionado em medicina.

# TAREFA
Faça uma análise profunda dos meus padrões de erro em [ÁREA/DISCIPLINA] e crie intervenções corretivas específicas.

# INPUT NECESSÁRIO
Forneça seus últimos 10-20 erros no formato:
- Questão: [tema]
- Sua resposta: [X] | Correta: [Y]
- Seu raciocínio na hora: [o que você pensou]

## ANÁLISE MULTINÍVEL

### NÍVEL 1: CATEGORIZAÇÃO DE ERROS

| Questão | Tipo de Erro | Frequência |
|---------|--------------|------------|
| | Conhecimento (não sabia) | |
| | Aplicação (sabia, aplicou errado) | |
| | Interpretação (entendeu errado o enunciado) | |
| | Atenção (descuido/pressa) | |
| | Raciocínio (pulou etapa lógica) | |

### NÍVEL 2: PADRÕES COGNITIVOS (vieses identificados)
Avalie presença de:
- [ ] Viés de confirmação: "Busquei informação que confirmava minha hipótese inicial"
- [ ] Ancoragem: "Fiquei preso na primeira ideia"
- [ ] Fechamento prematuro: "Parei de considerar alternativas muito cedo"
- [ ] Disponibilidade: "Lembrei do caso mais recente/marcante, não do mais provável"
- [ ] Representatividade: "Busquei o diagnóstico 'clássico' ignorando variações"

### NÍVEL 3: MAPA DE GAPS DE CONHECIMENTO
[Conceito com erro] → [Pré-requisito possivelmente faltante]
[Conceito com erro] → [Pré-requisito possivelmente faltante]

## ENSINO CORRETIVO PERSONALIZADO

### Para cada padrão identificado:

**Padrão 1: [Nome do padrão]**
- Por que isso acontece: [Explicação cognitiva]
- Estratégia de prevenção: [O que fazer diferente]
- Exercício de prática deliberada: [Atividade específica]
- Gatilho mental para prova: "Quando perceber [sinal], faça [ação]"

**Padrão 2: [Nome do padrão]**
[Repita estrutura]

## QUESTÕES CORRETIVAS
[3-5 novas questões especificamente desenhadas para treinar os pontos fracos identificados]

## CHECKLIST DE MONITORAMENTO
Para próximas questões sobre estes temas:
- [ ] Antes de responder, considerei diagnósticos alternativos?
- [ ] Li o enunciado completamente, incluindo negativas?
- [ ] Verifiquei se minha resposta responde O QUE foi perguntado?
- [ ] Busquei ativamente evidências CONTRA minha hipótese?`
  },
  {
    id: "mapeador-integracao-conhecimento",
    title: "Mapeador de Integração de Conhecimento",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Conecta novo conhecimento à base existente via interrogação elaborativa",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["integração", "elaboração", "rede-semântica"],
    aiRecommended: "claude",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado em Interrogação Elaborativa (Pressley et al., 1987) e Construção de Esquemas (Bartlett, 1932) - perguntas "por quê?" e "como?" forçam conexão do novo com o existente, criando redes semânticas robustas.

# PAPEL
Você é especialista em integração de conhecimento médico e construção de esquemas mentais interconectados.

# TAREFA
Ajude-me a integrar profundamente [NOVO TEMA] com minha base de conhecimento existente.

# ESTRUTURA DA SESSÃO

## FASE 1: MAPEAMENTO DO CONHECIMENTO PRÉVIO
"Antes de explorarmos [NOVO TEMA], me conte:"
1. O que você JÁ SABE sobre temas relacionados?
2. Que disciplinas/sistemas você já estudou que podem se conectar?
3. Que casos clínicos você já viu que podem ser relevantes?

[Aguarde minha resposta]

## FASE 2: APRESENTAÇÃO + INTERROGAÇÃO ELABORATIVA
Para cada conceito novo, faça:

### Conceito: [X]
Apresentação: "[Informação nova]"

→ Interrogação imediata:
1. "POR QUE isso faz sentido fisiologicamente?"
2. "COMO isso se relaciona com [conceito prévio que você mencionou]?"
3. "O QUE aconteceria se [variação do mecanismo]?"
4. "QUANDO clinicamente você veria isso?"

[Aguarde minhas respostas e aprofunde]

## FASE 3: MAPA DE CONEXÕES
Baseado em nossas discussões, construa:

### Conexões Diretas (mesmo sistema)
- [Conceito Prévio A] ↔ [Novo tema]: [tipo: causa/efeito/complementar/oposto]
- [Conceito Prévio B] ↔ [Novo tema]: [tipo]

### Conexões Transversais (outros sistemas)
- [Conceito de outra área] ↔ [Novo tema]: [relação inesperada mas válida]

### Conexões Clínicas
- [Situação clínica 1] onde ambos os conhecimentos se aplicam
- [Situação clínica 2] onde a conexão muda a conduta

## FASE 4: PERGUNTAS INTEGRATIVAS
Crie 3 perguntas que EXIGEM usar múltiplos conceitos conectados:
1. [Pergunta integrando 2 conceitos]
2. [Pergunta integrando 3 conceitos]
3. [Caso clínico exigindo integração completa]

## FASE 5: MAPA CONCEITUAL INTEGRADO
Descreva visualmente as conexões:
\`\`\`
[Novo Tema]
    ├── conecta-se a → [Conceito Prévio A]
    │       └── que por sua vez → [Consequência Clínica 1]
    ├── contrasta com → [Conceito Prévio B]
    └── aplica-se em → [Situação Clínica]
            └── junto com → [Outro Conhecimento]
\`\`\`

## SÍNTESE FINAL
"Em uma frase, como [NOVO TEMA] se encaixa no seu modelo mental de [área maior]?"`
  },
  {
    id: "simulador-pressao-contextual",
    title: "Simulador de Pressão Contextual",
    category: "Ciência Cognitiva Avançada",
    categorySlug: "ciencia-cognitiva",
    sectionNumber: 11,
    description: "Treina recuperação em condições similares à prova real",
    estimatedTime: "20 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["memória-dependente-contexto", "pressão", "performance"],
    aiRecommended: "claude",
    prompt: `# CONTEXTO CIENTÍFICO
Baseado em Memória Dependente de Contexto (Godden & Baddeley, 1975) e Inoculação de Estresse (Meichenbaum, 1985) - treinar em condições similares às da prova melhora recuperação sob pressão.

# PAPEL
Você é especialista em psicologia do desempenho e preparação para provas de alta pressão em medicina.

# TAREFA
Crie uma simulação de pressão progressiva para [TEMA/TIPO DE PROVA].

# CONFIGURAÇÃO DO AMBIENTE
Instruções obrigatórias para o estudante:
1. [ ] Timer VISÍVEL configurado
2. [ ] Material de consulta FECHADO/fora de alcance
3. [ ] Celular em modo avião em OUTRO cômodo
4. [ ] Sentado como estará na prova
5. [ ] Água disponível (como na prova)

## SIMULAÇÃO EM 4 FASES

### FASE 1: AQUECIMENTO SOB TEMPO (5 min)
5 questões de recall direto - 1 minuto cada
"Responda SEM PENSAR MUITO. Primeira resposta que vier."

Q1: [Questão direta de conhecimento]
Tempo: 60s | Sua resposta: _____ | Confiança: [1-5]

[Q2-Q5 similar]

→ CHECKPOINT: Como está sua ansiedade? [1-10]

### FASE 2: PRESSÃO MODERADA (10 min)
3 questões complexas com tempo apertado

Q6: [Caso clínico curto exigindo raciocínio]
Tempo: 3 minutos
[ADICIONE DISTRATOR: "Enquanto responde, imagine que alguém está observando você"]

Q7: [Questão de múltiplas etapas]
Tempo: 3 minutos
[DISTRATOR: "Você tem mais 2 questões difíceis depois desta"]

Q8: [Questão com alternativas muito similares]
Tempo: 2 minutos
[DISTRATOR: "Lembre-se: errar aqui pode custar a aprovação"]

→ CHECKPOINT: Como está sua ansiedade? [1-10]
→ Se >7: Faça 3 respirações 4-7-8 antes de continuar

### FASE 3: PRESSÃO ALTA (15 min)
2 casos clínicos completos com tempo 30% menor que o confortável

CASO 1: [Caso complexo com múltiplas perguntas]
Tempo total: 6 minutos para 4 perguntas

CASO 2: [Caso com informações ambíguas/incompletas]
Tempo total: 5 minutos para 3 perguntas
[INSTRUÇÃO: "Se não souber, marque sua melhor estimativa e siga"]

→ CHECKPOINT: Como está sua ansiedade? [1-10]

### FASE 4: DEBRIEFING REFLEXIVO (10 min)

#### Análise de Performance
1. Em que momento a ansiedade mais atrapalhou?
2. Que pensamentos negativos surgiram?
3. Onde você "travou"? O que fez para destravar?
4. A pressão fez você errar algo que saberia normalmente?

#### Estratégias Utilizadas
- O que funcionou para manejar a pressão?
- O que você faria diferente?

#### Técnicas de Regulação (pratique agora)
1. **Respiração 4-7-8:** Inspire 4s, segure 7s, expire 8s (3x)
2. **Âncora de confiança:** Lembre de uma prova que foi bem
3. **Self-talk:** "Eu me preparei. Eu sei isso. Uma questão de cada vez."
4. **Grounding:** 5 coisas que você vê, 4 que ouve, 3 que sente

## PROTOCOLO DE EXPOSIÇÃO GRADUAL
Repita esta simulação 1x por semana, aumentando:
- Semana 1: Tempo 50% maior que real
- Semana 2: Tempo 20% maior que real
- Semana 3: Tempo real
- Semana 4: Tempo 10% menor que real`
  },

  // SEÇÃO 12: ESSENCIAIS PARA MEDICINA - TOP 25
  {
    id: "resumir-notas-estudo",
    title: "Resumir Notas de Estudo",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Sintetiza informações complexas de anatomia, fisiologia e patologia",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["síntese", "organização", "fisiopatologia"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em síntese de conteúdo médico denso.

# TAREFA
Resuma meus estudos sobre [SÍNDROME/DOENÇA] de forma estruturada e hierárquica.

# FORMATO DE SAÍDA

## 1. FISIOPATOLOGIA
[Mecanismo subjacente em 3-5 pontos-chave]

## 2. QUADRO CLÍNICO
- Sinais cardinais:
- Sintomas típicos:
- Apresentação atípica:

## 3. DIAGNÓSTICO DIFERENCIAL
| Condição | Diferenciador-chave |
|----------|---------------------|
| [DD 1]   | [Como distinguir]   |
| [DD 2]   | [Como distinguir]   |

## 4. EXAMES COMPLEMENTARES
- Laboratoriais:
- Imagem:
- Especializados:

## 5. TRATAMENTO
- Primeira linha:
- Alternativas:
- Suporte:

## 6. PROGNÓSTICO
[Fatores de bom/mau prognóstico]

# REGRAS
- Use hierarquia clara
- Priorize informações de alto rendimento
- Inclua mnemônicos quando útil`
  },
  {
    id: "estrategia-exame-medico",
    title: "Criar Estratégia de Exame",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Plano estratégico 360° para provas de medicina e residência",
    estimatedTime: "15 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["estratégia", "provas", "residência", "planejamento"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é coach especializado em preparação para exames médicos de alto impacto.

# TAREFA
Crie plano estratégico de 8 semanas para prova de [DISCIPLINA MÉDICA/RESIDÊNCIA].

# FORMATO DE SAÍDA

## 1. DIAGNÓSTICO INICIAL
- Avaliação de conhecimento base
- Identificação de lacunas prioritárias
- Tempo disponível vs. conteúdo

## 2. CRONOGRAMA SEMANAL

### Semanas 1-2: Fundamentos
[Distribuição de tópicos prioritários]

### Semanas 3-4: Aprofundamento
[Integração de sistemas e casos clínicos]

### Semanas 5-6: Consolidação
[Revisão espaçada e simulados]

### Semanas 7-8: Sprint Final
[Revisão de alto rendimento e gestão de ansiedade]

## 3. SIMULADOS PROGRESSIVOS
- Frequência:
- Análise de erros:
- Métricas de acompanhamento:

## 4. PROTOCOLO DE REVISÃO FINAL
[Últimos 3 dias antes da prova]

## 5. GESTÃO DE ANSIEDADE
- Técnicas pré-prova:
- No dia da prova:

# APLICAÇÕES
- Provas de ciclo básico (Anatomia, Fisiologia, Bioquímica)
- OSCE (Objective Structured Clinical Examination)
- Preparação para residência médica
- Provas práticas`
  },
  {
    id: "melhorar-anotacoes-med",
    title: "Melhorar Anotações Médicas",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Sistema híbrido de notas para volume massivo de informações",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["anotações", "cornell", "mind-map", "organização"],
    aiRecommended: "gemini",
    prompt: `# PAPEL
Você é especialista em sistemas de anotação para alta carga informacional.

# TAREFA
Crie sistema híbrido de anotações para medicina combinando Cornell + Mind Map digital.

# FORMATO DE SAÍDA

## 1. TEMPLATE CORNELL ADAPTADO PARA CASOS CLÍNICOS

### Coluna Esquerda (Cues)
- Diagnósticos diferenciais
- Perguntas-chave

### Área Principal
- Dados do caso
- Raciocínio clínico
- Exames e resultados

### Rodapé
- Síntese do caso
- Pontos de aprendizado

## 2. CODIFICAÇÃO POR GRAVIDADE
🔴 Vermelho: Urgência/Emergência
🟡 Amarelo: Diagnóstico diferencial importante
🟢 Verde: Conduta padrão
🔵 Azul: Conceito-base

## 3. MIND MAP PARA INTEGRAÇÃO DE SISTEMAS
[Estrutura para conectar sistemas corporais]
- Nó central: [Sistema principal]
- Ramos: [Conexões com outros sistemas]
- Links bidirecionais

## 4. WORKFLOW DE REVISÃO
- Diário: 5 min scanning
- Semanal: Conexões entre notas
- Mensal: Reorganização e gaps

## 5. FERRAMENTAS RECOMENDADAS
- Notion/Obsidian para digital
- Codificação de cores consistente
- Sistema de tags semântico`
  },
  {
    id: "truques-memoria-med",
    title: "Truques de Retenção de Memória",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Técnicas de memorização baseadas em neurociência para medicina",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["memorização", "mnemônicos", "anki", "neurociência"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é neurocientista especializado em técnicas de memorização aplicadas à medicina.

# TAREFA
Crie técnicas de memorização baseadas em neurociência para [ANATOMIA/FARMACOLOGIA/TEMA].

# FORMATO DE SAÍDA

## 1. MNEMÔNICOS VISUAIS
[Criar 5 mnemônicos vívidos e memoráveis]

Exemplo para nervos cranianos:
"On Old Olympus Towering Tops A Finn And German Viewed Some Hops"

## 2. SISTEMA LEITNER DIGITALIZADO
### Configuração Anki
- Deck principal: [TEMA]
- Subdecks por dificuldade
- Intervalos customizados para medicina

### Regras de Progressão
- Acertou fácil: +3 dias
- Acertou com esforço: +1 dia
- Errou: Volta ao início

## 3. METHOD OF LOCI PARA ANATOMIA
[Palácio da memória adaptado para estruturas anatômicas]

### Seu Palácio
- Sala 1: [Sistema/Região]
- Objetos: [Estruturas anatômicas]
- Cenas memoráveis

## 4. ELABORATIVE INTERROGATION
Para cada conceito, responda:
- POR QUE isso funciona assim?
- COMO isso se conecta com X?
- O QUE acontece SE...?

## 5. GERAÇÃO ATIVA DE PERGUNTAS
Transforme cada tópico em 3 perguntas:
1. Conceitual (O que é?)
2. Mecanística (Como funciona?)
3. Clínica (Quando é relevante?)`
  },
  {
    id: "preparacao-exames-med",
    title: "Preparação Completa para Exames",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Técnicas específicas para provas médicas tipo USMLE/REVALIDA",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["provas", "usmle", "revalida", "técnicas"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em preparação para concursos médicos de alto nível.

# TAREFA
Desenvolva plano de preparação para [PROVA MÉDICA ESPECÍFICA].

# FORMATO DE SAÍDA

## 1. ANÁLISE DE PADRÕES DE QUESTÕES
### Distribuição por Área
| Área | % Histórico | Prioridade |
|------|-------------|------------|
| Clínica Médica | X% | Alta |
| Cirurgia | X% | Média |
| [etc] | X% | [nível] |

### Tipos de Questão
- Múltipla escolha direta: X%
- Casos clínicos: X%
- Imagens/exames: X%

## 2. ESTRATÉGIAS POR TIPO

### Questões de Anatomia
[Técnicas específicas]

### Questões de Farmacologia
[Abordagem por classe de fármacos]

### Casos Clínicos
[Framework de resolução em 5 passos]

## 3. GERENCIAMENTO DE ANSIEDADE
- Técnicas de respiração pré-prova
- Ancoragem de confiança
- Self-talk positivo

## 4. ALOCAÇÃO DE TEMPO
- Questões fáceis: X segundos
- Questões médias: X minutos
- Casos complexos: X minutos
- Revisão final: X minutos

## 5. PROTOCOLO DE REVISÃO
- O que revisar no último dia
- O que NÃO fazer antes da prova
- Checklist do dia da prova`
  },
  {
    id: "cronograma-estudo-med",
    title: "Cronograma de Estudo Otimizado",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Distribuição algorítmica de 8+ disciplinas simultâneas",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["cronograma", "planejamento", "organização", "tempo"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em otimização de cronogramas de estudo para medicina.

# TAREFA
Gere cronograma otimizado para estudante de medicina com [X] disciplinas.

# INFORMAÇÕES NECESSÁRIAS
- Número de disciplinas:
- Horas disponíveis por dia:
- Dias até a próxima prova:
- Dificuldades específicas:

# FORMATO DE SAÍDA

## 1. ALGORITMO DE DISTRIBUIÇÃO DE CARGA COGNITIVA

### Manhã (alta energia)
- Disciplinas que exigem raciocínio: [lista]

### Tarde (energia média)
- Revisão ativa e questões: [lista]

### Noite (baixa energia)
- Revisão passiva e Anki: [lista]

## 2. BLOCOS TEMÁTICOS INTERCALADOS
Exemplo para Cardiologia:
- Bloco 1: Anatomia cardíaca
- Bloco 2: Fisiologia cardiovascular
- Bloco 3: Patologia cardíaca
- Bloco 4: Integração clínica

## 3. REVISÃO ESPAÇADA INTEGRADA
| Dia | Novo Conteúdo | Revisão D+1 | Revisão D+7 |
|-----|---------------|-------------|-------------|
| Seg | [Tema A] | - | - |
| Ter | [Tema B] | Tema A | - |
| [etc] | | | |

## 4. FLEXIBILIDADE PARA PLANTÕES
- Blocos de contingência
- Recuperação de atrasos
- Ajustes semanais

## 5. SINCRONIZAÇÃO COM CALENDÁRIO
- Formato exportável para Google Calendar
- Alertas e lembretes
- Checkpoints semanais`
  },
  {
    id: "estrategias-fazer-provas",
    title: "Estratégias para Fazer Provas",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Técnicas de eliminação e raciocínio clínico em provas",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["provas", "técnicas", "eliminação", "raciocínio"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é coach de performance em provas médicas.

# TAREFA
Otimize minha performance em provas de medicina.

# FORMATO DE SAÍDA

## 1. ESTRATÉGIAS POR TIPO DE QUESTÃO

### Anatomia
- Visualize a estrutura
- Use referências espaciais
- Conecte com função

### Farmacologia
- Pense por classe primeiro
- Mecanismo → Indicação → Efeitos adversos
- Elimine por toxicidade

### Casos Clínicos
1. Leia a última pergunta primeiro
2. Identifique dados-chave
3. Formule hipótese antes de ver alternativas
4. Elimine distradores óbvios
5. Compare alternativas similares

## 2. TÉCNICAS DE ELIMINAÇÃO
- Alternativas absolutas ("sempre", "nunca") = suspeitas
- Duas alternativas opostas = uma provavelmente certa
- Alternativa mais longa/detalhada = frequentemente correta

## 3. GESTÃO DE ANSIEDADE
- Respiração 4-7-8 entre blocos
- Âncora de confiança em questões difíceis
- "Uma questão de cada vez"

## 4. ALOCAÇÃO DE TEMPO
- 1ª passada: questões fáceis (marcar e seguir)
- 2ª passada: questões médias
- 3ª passada: questões difíceis + revisão

## 5. ANÁLISE PÓS-PROVA
- Padrões de erro
- Temas recorrentes
- Ajustes para próxima prova`
  },
  {
    id: "guias-anotacao-med",
    title: "Guias de Anotação por Disciplina",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Metodologias específicas para cada tipo de conteúdo médico",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["anotações", "metodologia", "organização"],
    aiRecommended: "gemini",
    prompt: `# PAPEL
Você é especialista em metodologias de anotação para diferentes tipos de conteúdo.

# TAREFA
Desenvolva guias de anotação específicos para cada disciplina médica.

# FORMATO DE SAÍDA

## 1. CORNELL PARA AULAS TEÓRICAS

### Anatomia
- Cues: Estruturas, relações
- Notas: Descrições, funções
- Resumo: Integração clínica

### Fisiologia
- Cues: Mecanismos-chave
- Notas: Fluxogramas, equações
- Resumo: Aplicação patológica

## 2. OUTLINE PARA FARMACOLOGIA

### Estrutura Hierárquica
1. Classe farmacológica
   1.1 Mecanismo de ação
   1.2 Fármacos representantes
       1.2.1 Indicações
       1.2.2 Efeitos adversos
       1.2.3 Interações

## 3. MIND MAPS PARA INTEGRAÇÃO DE SISTEMAS

### Exemplo: Neuro + Endócrino + Cardiovascular
[Nó central] → [Ramos de conexão] → [Aplicação clínica]

## 4. SKETCHNOTING PARA ANATOMIA VISUAL
- Desenhos simplificados
- Cores por sistema
- Legendas padronizadas
- Notas marginais

## 5. WORKFLOW DE REVISÃO ATIVA
- Ocultar respostas
- Testar memória
- Marcar dúvidas
- Revisar espaçadamente`
  },
  {
    id: "planejamento-longo-prazo",
    title: "Planejamento de Longo Prazo",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Estratégia semestral e anual com OKRs para medicina",
    estimatedTime: "15 min",
    evidenceLevel: "Média",
    difficulty: "Avançado",
    tags: ["planejamento", "OKRs", "longo-prazo", "estratégia"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é consultor de carreira médica e planejamento estratégico.

# TAREFA
Planeje estratégia de estudos de longo prazo para medicina usando OKRs.

# FORMATO DE SAÍDA

## 1. VISÃO GERAL (6 ANOS)
### Ciclo Básico (Anos 1-2)
- Objetivos macro
- Competências-chave

### Ciclo Clínico (Anos 3-4)
- Objetivos macro
- Competências-chave

### Internato (Anos 5-6)
- Objetivos macro
- Preparação residência

## 2. OKRs SEMESTRAIS

### Objetivo 1: [Dominar X]
- KR1: Acertar 80% questões de X
- KR2: Completar Y casos clínicos
- KR3: Revisar Z flashcards/dia

### Objetivo 2: [Desenvolver habilidade Y]
- KR1: [Métrica mensurável]
- KR2: [Métrica mensurável]

## 3. MILESTONES SEMANAIS
- Semana 1: [Entregável]
- Semana 2: [Entregável]
- [etc]

## 4. RETROSPECTIVAS DE APRENDIZADO
### Após Cada Prova
- O que funcionou?
- O que falhou?
- Ajustes para próximo ciclo

## 5. DASHBOARD VISUAL DE PROGRESSO
| Área | Teórico | Prático | Habilidades |
|------|---------|---------|-------------|
| Cardio | 🟢 | 🟡 | 🟢 |
| Neuro | 🟡 | 🔴 | 🟡 |
| [etc] | | | |`
  },
  {
    id: "gerenciar-tempo-estudo",
    title: "Gerenciar Tempo de Estudo",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Time-blocking para aulas, plantões e vida pessoal",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["tempo", "produtividade", "pomodoro", "priorização"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em produtividade para profissionais de alta demanda.

# TAREFA
Crie sistema de gestão de tempo para estudante de medicina.

# INFORMAÇÕES NECESSÁRIAS
- Horas de aula por dia:
- Plantões (frequência e duração):
- Horas de estudo desejadas:
- Compromissos fixos:

# FORMATO DE SAÍDA

## 1. TIME-BLOCKING FLEXÍVEL
### Template de Dia Típico
| Horário | Bloco | Atividade |
|---------|-------|-----------|
| 06:00-07:00 | Energia Alta | Estudo denso |
| 07:00-12:00 | Aulas | [Faculdade] |
| [etc] | | |

### Adaptação para Dias de Plantão
[Template alternativo]

## 2. TÉCNICA POMODORO ADAPTADA
- 25 min estudo focado
- 5 min pausa ativa
- A cada 4 pomodoros: pausa longa (20 min)
- Meta diária: X pomodoros

## 3. MATRIZ EISENHOWER PARA DISCIPLINAS
| | Urgente | Não Urgente |
|---|---------|-------------|
| Importante | Prova amanhã | Base sólida |
| Não Importante | Otimizar | Eliminar |

## 4. BUFFER PARA EMERGÊNCIAS
- 2h/semana para imprevistos
- Recuperação de atrasos
- Flexibilidade sem culpa

## 5. PROTEÇÃO DE SONO/BEM-ESTAR
- Horário de dormir inegociável
- Exercício mínimo semanal
- Tempo social protegido`
  },
  {
    id: "rotina-estudo-personalizada",
    title: "Construir Rotina de Estudo",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Rotina adaptada para cronotipo e plantões noturnos",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["rotina", "cronotipo", "plantões", "hábitos"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em cronobiologia e design de rotinas.

# TAREFA
Desenvolva rotina personalizada de estudos para medicina.

# INFORMAÇÕES NECESSÁRIAS
- Cronotipo (matutino/vespertino/intermediário):
- Frequência de plantões noturnos:
- Períodos de provas:

# FORMATO DE SAÍDA

## 1. ANÁLISE DO CRONOTIPO
### Matutino
- Pico cognitivo: 06:00-11:00
- Declínio: 14:00-16:00
- Segundo pico: 17:00-19:00

### Vespertino
[Horários adaptados]

## 2. TIME-BLOCKING ADAPTATIVO

### Dia Normal
[Grade horária otimizada]

### Pós-Plantão Noturno
- Sono de recuperação: X horas
- Estudo leve após acordar
- Retorno gradual à rotina

### Semana de Provas
[Intensificação controlada]

## 3. RITUAIS DE TRANSIÇÃO
- Início do estudo: [ritual de 5 min]
- Entre disciplinas: [pausa ativa]
- Fim do estudo: [ritual de fechamento]

## 4. TÉCNICAS DE RECUPERAÇÃO COGNITIVA
- Power naps (10-20 min)
- Caminhada entre blocos
- Hidratação e snacks estratégicos

## 5. MÉTRICAS DE ACOMPANHAMENTO
- Horas estudadas vs. planejadas
- Qualidade do foco (1-10)
- Energia ao final do dia`
  },
  {
    id: "estrategias-neurociencia",
    title: "Estratégias Baseadas em Neurociência",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Técnicas de retrieval practice e interleaving para provas",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["neurociência", "retrieval", "interleaving", "elaboração"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é neurocientista especializado em aprendizagem e memória.

# TAREFA
Desenvolva estratégias de preparação baseadas em neurociência para prova de [DISCIPLINA].

# FORMATO DE SAÍDA

## 1. RETRIEVAL PRACTICE (Prática de Recuperação)
### Implementação
- Feche o material
- Tente lembrar ativamente
- Verifique e corrija
- Repita após intervalo

### Formatos
- Flashcards
- Questões de prova
- Explicar em voz alta
- Mapas mentais de memória

## 2. INTERLEAVING (Alternância de Tópicos)
### Por que funciona
[Explicação neurocientífica]

### Como aplicar
- Não estude um tópico até "dominar"
- Alterne entre 3-4 tópicos por sessão
- Exemplo de sequência: A → B → C → A → B → C

## 3. ELABORAÇÃO
### Técnicas
- Conectar com conhecimento prévio
- Gerar exemplos próprios
- Explicar "por quê" e "como"
- Comparar e contrastar

## 4. SELF-EXPLANATION
### Processo
1. Leia um trecho
2. Pause e explique em suas palavras
3. Identifique o que não ficou claro
4. Busque a resposta ativamente

## 5. ESPAÇAMENTO
### Cronograma Ideal
- Revisão 1: 24 horas após
- Revisão 2: 3 dias após
- Revisão 3: 7 dias após
- Revisão 4: 21 dias após`
  },
  {
    id: "melhorar-habitos-estudo",
    title: "Melhorar Hábitos de Estudo",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Transformar procrastinação em consistência com micro-hábitos",
    estimatedTime: "8 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["hábitos", "consistência", "procrastinação", "micro-hábitos"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em ciência comportamental e formação de hábitos.

# TAREFA
Analise e redesenhe meus hábitos de estudo.

# INFORMAÇÕES NECESSÁRIAS
Descreva seus hábitos atuais:
- Quando estuda?
- Onde estuda?
- Quanto tempo consegue manter foco?
- O que te distrai?

# FORMATO DE SAÍDA

## 1. DIAGNÓSTICO DE HÁBITOS ATUAIS
- Gatilhos identificados
- Comportamentos problemáticos
- Recompensas atuais

## 2. HABIT STACKING (Empilhamento)
### Fórmula
"Depois de [HÁBITO EXISTENTE], vou [NOVO HÁBITO]"

### Exemplos para Medicina
- Depois do café da manhã → 30 min Anki
- Depois de chegar em casa → revisar anotações do dia
- Depois de escovar os dentes → ler 10 páginas

## 3. GATILHOS AMBIENTAIS
- Local de estudo dedicado
- Celular em modo avião
- Materiais prontos na noite anterior
- Ambiente sem distrações visuais

## 4. ACCOUNTABILITY (Responsabilização)
- Grupo de estudos com check-ins
- App de tracking (Habitica, Streaks)
- Parceiro de accountability
- Metas públicas compartilhadas

## 5. REFORÇO POSITIVO PROGRESSIVO
- Micro-recompensas após blocos
- Celebrar pequenas vitórias
- Tracking visual de sequência
- Recompensa semanal por meta cumprida`
  },
  {
    id: "encontrar-recursos-estudo",
    title: "Encontrar Recursos de Estudo",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Curadoria de livros, vídeos, apps e artigos para medicina",
    estimatedTime: "8 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["recursos", "curadoria", "livros", "apps"],
    aiRecommended: "perplexity",
    prompt: `# PAPEL
Você é curador de recursos educacionais para medicina.

# TAREFA
Selecione os melhores recursos para [DISCIPLINA MÉDICA].

# FORMATO DE SAÍDA

## 1. LIVROS-TEXTO ATUALIZADOS
### Básico
- [Título] - [Autor] - [Por que é bom]

### Avançado
- [Título] - [Autor] - [Por que é bom]

### Referência Rápida
- [Título] - [Para que serve]

## 2. VÍDEOS EDUCACIONAIS
### Plataformas Recomendadas
- Osmosis: [O que oferece]
- Lecturio: [O que oferece]
- Khan Academy Medicine: [O que oferece]
- Canais YouTube específicos

## 3. APPS INTERATIVOS
### Anatomia
- Complete Anatomy
- Visible Body

### Flashcards
- Anki (decks recomendados)
- Quizlet

### Questões
- [Apps de questões por área]

## 4. ARTIGOS DE REVISÃO
### Bases de Dados
- PubMed
- UpToDate
- DynaMed

### Revistas de Alto Impacto
- NEJM
- Lancet
- JAMA

## 5. PODCASTS MÉDICOS
- [Nome] - [Foco] - [Frequência]

# CRITÉRIOS DE SELEÇÃO
- Qualidade acadêmica
- Atualização recente
- Acessibilidade
- Custo-benefício`
  },
  {
    id: "checklist-rotina-estudo",
    title: "Checklist de Rotina de Estudo",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Checklists diários para garantir consistência no estudo",
    estimatedTime: "5 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["checklist", "rotina", "consistência", "tracking"],
    aiRecommended: "gemini",
    prompt: `# PAPEL
Você é especialista em design de sistemas de produtividade.

# TAREFA
Crie checklist de rotina diária de estudos para medicina.

# FORMATO DE SAÍDA

## CHECKLIST DIÁRIO DE ESTUDOS

### ☐ PRÉ-ESTUDO (5 min)
- [ ] Local organizado
- [ ] Água/café prontos
- [ ] Celular em modo avião
- [ ] Meta do dia definida
- [ ] Materiais separados

### ☐ REVISÃO ESPAÇADA (15-30 min)
- [ ] Anki: X cards revisados
- [ ] Flashcards de ontem
- [ ] Quick review da semana

### ☐ ESTUDO ATIVO (2-4h)
- [ ] Bloco 1: [Tema] - [X] min
- [ ] Pausa ativa (5 min)
- [ ] Bloco 2: [Tema] - [X] min
- [ ] Pausa ativa (5 min)
- [ ] Bloco 3: [Tema] - [X] min

### ☐ QUESTÕES/CASOS (30-60 min)
- [ ] X questões resolvidas
- [ ] Análise de erros feita
- [ ] Conceitos anotados

### ☐ FECHAMENTO (10 min)
- [ ] O que aprendi hoje?
- [ ] O que revisar amanhã?
- [ ] Meta cumprida? (1-10)
- [ ] Preparar amanhã

## GATILHOS AMBIENTAIS
- Alarme às [HORÁRIO] = iniciar estudo
- [LOCAL ESPECÍFICO] = modo estudo
- [MÚSICA/SOM] = foco ativado

## RECOMPENSAS
- Bloco completo = [micro-recompensa]
- Dia completo = [recompensa maior]
- Semana completa = [celebração]`
  },
  {
    id: "rastrear-progresso-notas",
    title: "Rastrear Progresso de Notas",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Dashboard visual de evolução por disciplina e gaps",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["tracking", "progresso", "dashboard", "análise"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é analista de dados educacionais especializado em medicina.

# TAREFA
Crie sistema de tracking de notas e performance para estudante de medicina.

# FORMATO DE SAÍDA

## 1. DASHBOARD DE PROGRESSO

### Visão Geral
| Disciplina | Nota Atual | Meta | Tendência | Próxima Ação |
|------------|------------|------|-----------|--------------|
| Anatomia | 7.5 | 8.5 | ↗️ | Manter ritmo |
| Fisiologia | 6.0 | 8.0 | ↘️ | Intensificar |
| [etc] | | | | |

### Gráfico de Evolução
[Descrição de gráfico de linha temporal]

## 2. IDENTIFICAÇÃO DE LACUNAS

### Mapa de Calor por Tópico
| Tópico | Domínio | Prioridade |
|--------|---------|------------|
| Cardio | 🟢 Alto | Manter |
| Neuro | 🟡 Médio | Reforçar |
| Endócrino | 🔴 Baixo | Urgente |

## 3. ANÁLISE DE ERROS RECORRENTES
- Padrão 1: [Tipo de erro] - [Frequência] - [Solução]
- Padrão 2: [Tipo de erro] - [Frequência] - [Solução]

## 4. INSIGHTS ACIONÁVEIS
Baseado nos dados:
1. [Ação específica para esta semana]
2. [Ajuste de estratégia]
3. [Recurso recomendado]

## 5. MÉTRICAS DE ACOMPANHAMENTO
- Tempo de estudo vs. resultado
- Questões certas vs. erradas
- Progressão semanal`
  },
  {
    id: "templates-cronograma",
    title: "Templates de Cronograma Semestral",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Templates reutilizáveis com visualização Gantt",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["template", "cronograma", "semestre", "gantt"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em gestão de projetos aplicada à educação médica.

# TAREFA
Crie template de cronograma semestral para medicina.

# INFORMAÇÕES NECESSÁRIAS
- Disciplinas do semestre:
- Datas de provas:
- Horas semanais disponíveis:

# FORMATO DE SAÍDA

## 1. VISÃO GERAL SEMESTRAL (GANTT)

### Mês 1
| Semana | Disciplina A | Disciplina B | Disciplina C |
|--------|--------------|--------------|--------------|
| S1 | [Tópico] | [Tópico] | [Tópico] |
| S2 | [Tópico] | [Tópico] | [Tópico] |

[Continua para todos os meses]

## 2. DISTRIBUIÇÃO BALANCEADA
### Carga por Semana
- Teoria: X horas
- Prática: X horas
- Questões: X horas
- Revisão: X horas

## 3. SLOTS DE REVISÃO ESPAÇADA
- Revisão D+1: [horário fixo]
- Revisão D+7: [dia da semana]
- Revisão D+30: [momento do mês]

## 4. BUFFER PARA IMPREVISTOS
- 2-3 horas/semana sem programação
- Flexibilidade para ajustes
- Recuperação de atrasos

## 5. EXPORTAÇÃO
### Google Calendar
- Eventos com alertas
- Código de cores por disciplina
- Lembretes de revisão

### Notion/Excel
- Template estruturado
- Checkboxes de progresso
- Fórmulas de acompanhamento`
  },
  {
    id: "organizar-elearning",
    title: "Organizar E-Learning",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Sistema de organização de materiais digitais médicos",
    estimatedTime: "8 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["organização", "digital", "pastas", "e-learning"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em gestão de conhecimento digital.

# TAREFA
Redesenhe a organização de materiais digitais de medicina.

# FORMATO DE SAÍDA

## 1. ESTRUTURA DE PASTAS

### Por Sistema/Disciplina
📁 Medicina
├── 📁 01_Ciclo_Basico
│   ├── 📁 Anatomia
│   │   ├── 📁 Membros
│   │   ├── 📁 Tronco
│   │   └── 📁 Cabeça_Pescoco
│   ├── 📁 Fisiologia
│   └── 📁 Bioquimica
├── 📁 02_Ciclo_Clinico
│   ├── 📁 Clinica_Medica
│   ├── 📁 Cirurgia
│   └── 📁 Pediatria
└── 📁 03_Internato

## 2. NOMENCLATURA PADRONIZADA
Formato: [Módulo]_[Tema]_[Tipo]_[Data]
Exemplo: CM01_ICC_Resumo_2024-03

### Tipos de Arquivo
- RES = Resumo
- QST = Questões
- CASO = Caso clínico
- AULA = Material de aula
- REF = Referência

## 3. SISTEMA DE TAGS SEMÂNTICO
### Tags de Status
#revisar #dominado #dificil #urgente

### Tags de Tipo
#teoria #pratica #questoes #imagem

## 4. BUSCA EFICIENTE
- Ferramenta: [Recomendação]
- Atalhos de teclado
- Filtros salvos

## 5. BACKUP E SINCRONIZAÇÃO
- Google Drive/OneDrive
- Versionamento automático
- Acesso multi-dispositivo`
  },
  {
    id: "criar-resumos-estudo",
    title: "Criar Resumos de Estudo",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Sínteses executivas para revisão rápida pré-prova",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["resumos", "síntese", "revisão", "pré-prova"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em síntese de alto rendimento para medicina.

# TAREFA
Produza resumo executivo de [TÓPICO MÉDICO] otimizado para revisão rápida.

# FORMATO DE SAÍDA

## RESUMO EXECUTIVO: [TÓPICO]
**Tempo de leitura:** 5 minutos

### 1. CONCEITOS-CHAVE (Máx. 5)
1. [Conceito essencial 1]
2. [Conceito essencial 2]
3. [Conceito essencial 3]

### 2. FISIOPATOLOGIA SIMPLIFICADA
[Mecanismo em 3 frases máximo]

📌 **Mnemônico:** [Se aplicável]

### 3. QUADRO CLÍNICO
**Clássico:** [Apresentação típica em 1 linha]
**Atípico:** [O que não esquecer]

### 4. DIAGNÓSTICO DIFERENCIAL
| Condição | Diferenciador |
|----------|---------------|
| [DD 1] | [Chave] |
| [DD 2] | [Chave] |

### 5. TRATAMENTO
**1ª Linha:** [Tratamento]
**Alternativa:** [Se 1ª linha falhar]

### 6. ARMADILHAS DE PROVA ⚠️
- [Pegadinha comum 1]
- [Pegadinha comum 2]

### 7. HIGH YIELD
💡 [Fato de alto rendimento que CAI EM PROVA]

---
📚 **Para aprofundar:** [Referência rápida]`
  },
  {
    id: "testes-digitais-questoes",
    title: "Criar Banco de Questões Digital",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Sistema de questões com feedback e adaptive testing",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["questões", "banco", "feedback", "adaptive"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em avaliação educacional e design instrucional.

# TAREFA
Desenvolva sistema de questões personalizado para [DISCIPLINA].

# FORMATO DE SAÍDA

## 1. BANCO DE QUESTÕES ESTRUTURADO

### Por Nível de Dificuldade
- 🟢 Fácil (30%): Conceitos básicos
- 🟡 Médio (50%): Aplicação clínica
- 🔴 Difícil (20%): Análise e síntese

### Por Tipo
- Múltipla escolha: X%
- Casos clínicos: X%
- Associação: X%
- V ou F justificado: X%

## 2. QUESTÕES RANDOMIZADAS
[Sistema de embaralhamento inteligente]
- Evitar repetição recente
- Balancear dificuldade
- Variar tipos

## 3. FEEDBACK EXPLICATIVO
### Para Resposta Correta
✅ Correto! [Explicação breve do porquê]

### Para Resposta Incorreta
❌ Incorreto. 
- Por que não é [alternativa marcada]
- A correta é [letra] porque [explicação]
- 📖 Revisar: [Tópico específico]

## 4. ANÁLISE DE ERROS POR TÓPICO
| Tópico | Acertos | Erros | Taxa | Ação |
|--------|---------|-------|------|------|
| [A] | X | Y | Z% | [Recomendação] |

## 5. ADAPTIVE TESTING
### Lógica de Progressão
- 3 acertos consecutivos → aumenta dificuldade
- 2 erros consecutivos → reduz dificuldade
- Mantém zona de desafio ótimo (70-85% acerto)

## 6. RELATÓRIO DE PERFORMANCE
- Gráfico de evolução
- Áreas fortes/fracas
- Tempo médio por questão
- Comparativo com meta`
  },
  {
    id: "modulos-adaptativos",
    title: "Módulos de Estudo Adaptativos",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Plataforma que ajusta dificuldade conforme desempenho",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["adaptativo", "personalizado", "desempenho"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em aprendizagem adaptativa.

# TAREFA
Crie módulos de estudo que se adaptem ao meu desempenho em [DISCIPLINA].

# FORMATO DE SAÍDA

## 1. AVALIAÇÃO DIAGNÓSTICA INICIAL
[10 questões de diferentes níveis para mapear conhecimento]

### Resultado
- Nível atual: [Iniciante/Intermediário/Avançado]
- Gaps identificados: [Lista]
- Pontos fortes: [Lista]

## 2. TRILHA PERSONALIZADA

### Se Iniciante
- Módulo 1: Fundamentos [X horas]
- Módulo 2: Conceitos básicos [X horas]
- Módulo 3: Introdução à aplicação [X horas]

### Se Intermediário
- Módulo 1: Revisão rápida [X horas]
- Módulo 2: Aplicação clínica [X horas]
- Módulo 3: Casos complexos [X horas]

### Se Avançado
- Módulo 1: Casos atípicos [X horas]
- Módulo 2: Integração de sistemas [X horas]
- Módulo 3: Simulação de prova [X horas]

## 3. AJUSTE DINÂMICO
### Gatilhos de Progressão
- >80% acerto → Avançar dificuldade
- 60-80% acerto → Manter nível
- <60% acerto → Revisar base

## 4. CHECKPOINTS
- Avaliação a cada módulo
- Redirecionamento automático
- Reforço de gaps

## 5. GAMIFICAÇÃO
- XP por módulo completo
- Badges de proficiência
- Ranking pessoal de evolução`
  },
  {
    id: "dicas-tempo-produtividade",
    title: "Dicas de Tempo e Produtividade",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Técnicas de produtividade para alta carga de estudos",
    estimatedTime: "6 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["produtividade", "tempo", "técnicas", "eficiência"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é coach de produtividade para estudantes de alta performance.

# TAREFA
Compartilhe técnicas de produtividade otimizadas para estudante de medicina.

# FORMATO DE SAÍDA

## 1. TÉCNICAS DE FOCO

### Pomodoro Adaptado para Medicina
- 45 min estudo denso + 10 min pausa
- Ideal para: casos clínicos, anatomia
- Meta: 4-6 pomodoros/dia

### Deep Work
- 2-4h sem interrupções
- Ideal para: estudo de base, revisão
- Requisitos: ambiente controlado

### Time Boxing
- Definir tempo máximo por tarefa
- Evita perfeccionismo
- Força priorização

## 2. ELIMINAÇÃO DE DISTRAÇÕES
- Celular em outra sala
- Bloqueadores de sites
- Fones com ruído branco
- "Não perturbe" ativo

## 3. ENERGIA, NÃO SÓ TEMPO
### Gestão de Energia
- Tarefas difíceis = pico de energia
- Tarefas repetitivas = baixa energia
- Pausas ativas = recuperação

## 4. BATCH PROCESSING
- Agrupar tarefas similares
- Ex: todas as questões juntas
- Reduz troca de contexto

## 5. REGRA DOS 2 MINUTOS
- Se leva <2 min, faça agora
- Evita acúmulo de pequenas tarefas
- Mantém mente leve

## 6. REVISÃO SEMANAL (30 min)
- O que funcionou?
- O que ajustar?
- Prioridades da próxima semana`
  },
  {
    id: "ferramentas-rastreamento-metas",
    title: "Ferramentas de Rastreamento de Metas",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Acompanhar objetivos de longo prazo como residência",
    estimatedTime: "10 min",
    evidenceLevel: "Média",
    difficulty: "Intermediário",
    tags: ["metas", "tracking", "residência", "objetivos"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em definição e acompanhamento de metas.

# TAREFA
Crie sistema de rastreamento de metas para estudante de medicina com foco em [OBJETIVO: ex. residência].

# FORMATO DE SAÍDA

## 1. DEFINIÇÃO DE META SMART

### Meta Principal
- **S**pecífico: Passar em residência de [especialidade]
- **M**ensurável: Nota mínima de X no ENARE
- **A**tingível: Baseado em histórico e recursos
- **R**elevante: Alinhado com carreira desejada
- **T**emporal: Data da prova: [DATA]

## 2. DECOMPOSIÇÃO EM SUBMETAS

### Trimestre 1
- [ ] Completar revisão de [área]
- [ ] Atingir X% em simulados
- [ ] Resolver X questões

### Trimestre 2
- [ ] [Submetas específicas]

### [Continua...]

## 3. KPIs DE ACOMPANHAMENTO
| Indicador | Meta | Atual | Status |
|-----------|------|-------|--------|
| Questões/dia | 50 | 35 | 🟡 |
| % acerto simulados | 75% | 68% | 🟡 |
| Horas estudo/semana | 40h | 38h | 🟢 |

## 4. REVISÕES PERIÓDICAS
- Semanal: Check rápido (15 min)
- Mensal: Análise detalhada (1h)
- Trimestral: Reajuste de rota (2h)

## 5. CELEBRAÇÃO DE MARCOS
- Pequenas vitórias = pequenas recompensas
- Grandes marcos = celebração maior
- Manter motivação ao longo do tempo`
  },
  {
    id: "alivio-estresse-academico",
    title: "Alívio do Estresse Acadêmico",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Guia de gerenciamento de estresse para burnout acadêmico",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["estresse", "burnout", "saúde-mental", "bem-estar"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é psicólogo especializado em saúde mental de estudantes de medicina.

# TAREFA
Crie guia de gerenciamento de estresse para estudante de medicina.

# FORMATO DE SAÍDA

## 1. IDENTIFICAÇÃO DE ESTRESSORES

### Acadêmicos
- Volume de conteúdo
- Provas e avaliações
- Competição por vagas
- Expectativas próprias e externas

### Práticos
- Plantões noturnos
- Contato com sofrimento
- Responsabilidade crescente

### Pessoais
- Falta de tempo para lazer
- Relacionamentos afetados
- Saúde física negligenciada

## 2. TÉCNICAS DE MINDFULNESS

### Respiração 4-7-8
1. Inspire por 4 segundos
2. Segure por 7 segundos
3. Expire por 8 segundos
4. Repita 3-4 vezes

### Body Scan (5 min)
[Guia passo a passo]

### Âncora no Presente
- 5 coisas que vê
- 4 coisas que ouve
- 3 coisas que sente
- 2 coisas que cheira
- 1 coisa que saboreia

## 3. HIGIENE DO SONO
- Horário fixo (mesmo fim de semana)
- Sem telas 1h antes
- Ambiente escuro e fresco
- Ritual de descompressão

## 4. ESTRATÉGIAS DE ENFRENTAMENTO
- Reestruturação cognitiva
- Suporte social
- Atividade física regular
- Hobbies protegidos

## 5. SINAIS DE ALERTA
⚠️ Buscar ajuda profissional se:
- Dificuldade persistente de concentração
- Alterações de sono ou apetite
- Isolamento social
- Pensamentos negativos recorrentes`
  },
  {
    id: "metodos-alivio-estresse-evidencia",
    title: "Métodos de Alívio de Estresse Baseados em Evidência",
    category: "Essenciais para Medicina",
    categorySlug: "essenciais-medicina",
    sectionNumber: 12,
    description: "Lista de métodos validados cientificamente para estudantes",
    estimatedTime: "6 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["estresse", "evidência", "exercício", "meditação"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é pesquisador em neurociência do estresse e bem-estar.

# TAREFA
Liste métodos de alívio de estresse baseados em evidência científica para estudantes de medicina.

# FORMATO DE SAÍDA

## 1. EXERCÍCIO FÍSICO
**Evidência:** Meta-análises mostram redução de 40% em sintomas de ansiedade

### Recomendações
- **Aeróbico:** 30 min, 3-5x/semana
  - Caminhada, corrida, natação
- **HIIT:** 15-20 min, 2-3x/semana
  - Eficiente para quem tem pouco tempo
- **Yoga:** 1-2x/semana
  - Combina movimento + mindfulness

## 2. MEDITAÇÃO E MINDFULNESS
**Evidência:** Reduz cortisol em 23% após 8 semanas

### Apps Recomendados
- Headspace
- Calm
- Insight Timer

### Prática Mínima Efetiva
- 10 min/dia
- Melhor que nada: 5 min

## 3. RESPIRAÇÃO DIAFRAGMÁTICA
**Evidência:** Ativa sistema parassimpático em 60-90 segundos

### Técnicas
- 4-7-8 (Weil)
- Respiração quadrada (4-4-4-4)
- Suspiro fisiológico (dupla inspiração + expiração longa)

## 4. JOURNALING
**Evidência:** Expressão escrita reduz rumination

### Formatos
- 3 gratidões do dia
- Brain dump (descarregar pensamentos)
- Reflexão pós-prova

## 5. CONEXÃO SOCIAL
**Evidência:** Suporte social é protetor de burnout

### Ações
- Grupo de estudos
- Tempo com amigos (não de medicina)
- Conversa com família

## 6. NATUREZA
**Evidência:** 20 min em área verde reduz cortisol

### Opções
- Caminhada em parque
- Estudo ao ar livre
- Plantas no ambiente`
  }
];

export const getPromptsBySection = (sectionNumber: number): Prompt[] => {
  return prompts.filter(p => p.sectionNumber === sectionNumber);
};

export const getPromptById = (id: string): Prompt | undefined => {
  return prompts.find(p => p.id === id);
};

export const searchPrompts = (query: string): Prompt[] => {
  const lowerQuery = query.toLowerCase();
  return prompts.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(t => t.toLowerCase().includes(lowerQuery)) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
};
