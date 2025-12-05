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
  aiRecommended: "chatgpt" | "claude" | "gemini";
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
    aiRecommended: "claude",
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
    aiRecommended: "claude",
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
    aiRecommended: "chatgpt",
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
    aiRecommended: "chatgpt",
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
