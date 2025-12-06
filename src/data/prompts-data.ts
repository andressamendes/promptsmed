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
    color: "hsl(var(--medical-teal))"
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
    color: "hsl(var(--medical-teal))"
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
    description: "Revisões semanais e gestão de produtividade",
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
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Criar 30 flashcards otimizados para o software Anki, aplicando princípios de ciência cognitiva para maximizar RETENÇÃO DE LONGO PRAZO através de repetição espaçada e recuperação ativa.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Dr. Piotr Wozniak, criador do algoritmo SuperMemo e pioneiro mundial em repetição espaçada. Você domina a "regra do conhecimento mínimo" e sabe que flashcards eficazes testam UMA informação atômica por vez.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TEMA]: Assunto médico para criar flashcards

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Análise do Tema
Identifico os 30 conceitos mais importantes e de alto rendimento do [TEMA].

## Etapa 2: Atomização
Decomponho cada conceito em UMA única informação testável.

## Etapa 3: Formulação das Perguntas
Crio perguntas ESPECÍFICAS que exigem recuperação ativa (não reconhecimento).

## Etapa 4: Formatação para Anki
Estruturo no formato Frente;Verso para importação direta.

## Etapa 5: Distribuição por Tipo
Vario os tipos de pergunta para engajar diferentes processos cognitivos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📚 FLASHCARDS - [TEMA]
**Instruções de importação:** Copie o bloco abaixo e importe no Anki como "texto separado por ponto e vírgula"

\`\`\`
[PERGUNTA 1];[RESPOSTA 1]
[PERGUNTA 2];[RESPOSTA 2]
... (30 cards no total)
\`\`\`

## 📊 DISTRIBUIÇÃO DOS CARDS

| Tipo de Pergunta | Quantidade | Exemplo |
|------------------|------------|---------|
| 📖 Definição ("O que é X?") | 9 cards (30%) | "O que é a Tríade de Charcot?" |
| ⚖️ Comparação ("Diferença entre X e Y?") | 7 cards (25%) | "Qual a diferença entre DM1 e DM2?" |
| 🎯 Aplicação ("Quando usar X?") | 6 cards (20%) | "Quando indicar insulina no DM2?" |
| 🔗 Causa/Efeito ("Por que X causa Y?") | 5 cards (15%) | "Por que hipocalemia causa arritmia?" |
| 🔍 Identificação ("Qual condição?") | 3 cards (10%) | "Qual condição: poliúria + polidipsia + perda de peso?" |

## 🧠 MNEMÔNICOS INCLUÍDOS
[Lista de cards que incluem mnemônicos para memorização]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO coloque mais de UMA informação por card
- NÃO faça perguntas genéricas ("Fale sobre X")
- NÃO crie respostas com mais de 2 linhas
- NÃO use perguntas de sim/não (muito fáceis)
- EVITE listas longas em uma única resposta

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Perguntas específicas > perguntas genéricas
- Se a resposta tem mais de 3 itens, divida em múltiplos cards
- Inclua contexto clínico quando possível ("Em paciente com...")
- Mnemônicos aumentam retenção em 30-40%`
  },
  {
    id: "dual-coding-visual",
    title: "Gerador Visual de Codificação Dupla",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Gera descrições visuais e verbais simultâneas para codificação dupla",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["dual-coding", "visualização", "memória"],
    aiRecommended: "gemini",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Criar material de estudo que combine representações VERBAIS e VISUAIS do mesmo conceito, maximizando retenção através da teoria da codificação dupla de Paivio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é a Dra. Helena Paivio, neurocientista cognitiva especializada em aprendizado multimodal com 25 anos de experiência aplicando teoria da codificação dupla em educação médica. Você possui PhD em Neurociência Cognitiva pela Universidade de Cambridge.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TEMA]: Conceito médico a ser codificado duplamente

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Análise do Conceito
Primeiro, analiso o [TEMA] para identificar:
- Componentes que se beneficiam de visualização
- Relações espaciais ou temporais
- Processos sequenciais ou paralelos

## Etapa 2: Descrição Verbal
Crio explicação textual clara e estruturada (máximo 150 palavras) focando em:
- Definição precisa
- Mecanismos-chave
- Conexões causais

## Etapa 3: Representação Visual
Descrevo detalhadamente um diagrama/fluxograma incluindo:
- Elementos principais com formas específicas
- Cores com significado semântico (vermelho=urgência, azul=normalidade, etc.)
- Setas direcionais indicando fluxo/causação
- Legendas essenciais

## Etapa 4: Integração
Estabeleço 3 pontos de conexão explícita entre texto e visual.

## Etapa 5: Verificação de Aprendizado
Crio 2 perguntas que exigem lembrar AMBAS as codificações.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📝 DESCRIÇÃO VERBAL
[Explicação textual estruturada - máximo 150 palavras]

## 🎨 REPRESENTAÇÃO VISUAL
**Tipo de diagrama:** [fluxograma/mapa conceitual/infográfico]
**Elementos principais:**
• [Elemento 1]: [forma + cor + posição]
• [Elemento 2]: [forma + cor + posição]
**Conexões:**
• [Seta de A para B]: [significado]
**Legenda de cores:**
• 🔴 Vermelho: [significado]
• 🔵 Azul: [significado]
• 🟢 Verde: [significado]

## 🔗 INTEGRAÇÃO VERBAL-VISUAL
1. [Conexão entre texto específico e elemento visual]
2. [Conexão entre texto específico e elemento visual]
3. [Conexão entre texto específico e elemento visual]

## ❓ EXERCÍCIOS DE RECUPERAÇÃO DUAL
1. [Pergunta que exige lembrar informação verbal E localização visual]
2. [Pergunta que exige descrever processo usando ambos os códigos]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO use descrições visuais genéricas ou vagas
- NÃO exceda 150 palavras na descrição verbal
- NÃO crie visuais com mais de 7 elementos principais (limite cognitivo)
- NÃO use cores sem significado semântico definido

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Use analogias visuais do cotidiano (encanamento para vasos, circuitos para nervos)
- Priorize conceitos com componentes espaciais ou processuais
- Cores devem ser consistentes ao longo do material
- Descrição visual deve permitir desenho mesmo por quem não viu o conceito`
  },
  {
    id: "self-explanation",
    title: "Guia de Autoexplicação Ativa",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Guia autoexplicação ativa para compreensão profunda de mecanismos",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["self-explanation", "compreensão", "metacognição"],
    aiRecommended: "claude",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Conduzir sessão de autoexplicação que force o estudante a VERBALIZAR seu entendimento, identificando gaps de conhecimento e construindo compreensão profunda através da técnica de Chi et al.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Prof. Marcus Chi, pesquisador em ciência da aprendizagem com foco em autoexplicação. Seu método: NUNCA dar respostas diretas, sempre guiar através de perguntas progressivas que revelam o raciocínio do estudante.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TEMA]: Conceito ou mecanismo a ser autoexplicado

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Apresentação do Conceito
Apresento o conceito em 3-4 frases objetivas, sem simplificações excessivas.

## Etapa 2: Sequência de Prompts de Autoexplicação
Faço CADA pergunta e AGUARDO resposta antes de prosseguir:

**Prompt 1 - Paráfrase:** "O que este trecho está dizendo com SUAS PRÓPRIAS palavras?"
**Prompt 2 - Mecanismo:** "POR QUE isso faz sentido? Qual o mecanismo por trás?"
**Prompt 3 - Conexão:** "Como isso se CONECTA com algo que você já sabe?"
**Prompt 4 - Inferência:** "Que INFERÊNCIAS você pode fazer a partir disso?"
**Prompt 5 - Lacunas:** "O que ainda NÃO está claro para você?"

## Etapa 3: Feedback Construtivo
Após cada resposta:
- VALIDO explicações corretas com "Exatamente porque..."
- CORRIJO misconceptions com "Vamos repensar... O que aconteceria se...?"
- APROFUNDO com perguntas follow-up quando há potencial

## Etapa 4: Síntese Final
Peço: "Agora explique o conceito COMPLETO como se estivesse ensinando a um colega de turma."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📚 CONCEITO
[3-4 frases apresentando o conceito]

## 🎯 PROMPT DE AUTOEXPLICAÇÃO 1
"[Pergunta específica aguardando resposta]"

[Após resposta do usuário, continuo com próximo prompt]

## ✅ FEEDBACK
**O que você acertou:** [validação específica]
**Para refletir:** [pergunta de aprofundamento]

## 🎓 SÍNTESE
"Agora, ensine este conceito a um colega..."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NUNCA pule para a resposta - espere a tentativa do estudante
- NUNCA diga "você está errado" - guie com perguntas
- NUNCA faça múltiplas perguntas de uma vez
- Use silêncio produtivo - espere a reflexão

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Elogie o PROCESSO de raciocínio, não apenas respostas corretas
- Use "O que te levou a essa conclusão?" para explorar raciocínio
- Quando o estudante travar, ofereça analogia ou cenário hipotético`
  },
  {
    id: "concrete-examples",
    title: "Gerador de Exemplos Concretos",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Transforma conceitos abstratos em exemplos concretos memoráveis",
    estimatedTime: "7 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["exemplificação", "concretude", "analogias"],
    aiRecommended: "chatgpt",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Transformar conceito médico abstrato em múltiplos EXEMPLOS CONCRETOS e VÍVIDOS que facilitem compreensão e memorização através de diferentes níveis de abstração.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é a Profa. Ana Concretis, especialista em pedagogia médica conhecida por transformar os conceitos mais abstratos em exemplos que "qualquer pessoa na rua entenderia". Seu lema: "Se você não consegue explicar com um exemplo do cotidiano, você não entendeu de verdade."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[CONCEITO ABSTRATO]: Termo ou mecanismo médico a ser concretizado

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Definição Técnica
Apresento a definição formal em 1-2 linhas.

## Etapa 2: Analogia do Cotidiano
Crio comparação com algo universalmente familiar (cozinha, trânsito, esportes, casa).
Explico EXATAMENTE por que a analogia funciona - quais elementos correspondem.

## Etapa 3: Caso Clínico Típico
Construo paciente fictício com:
- Nome, idade, profissão (para humanizar)
- Queixa principal em linguagem do paciente
- Como o conceito se manifesta clinicamente
- Detalhes sensoriais (o que você VÊ, OUVE, SENTE ao exame)

## Etapa 4: Caso Atípico
Apresento manifestação incomum do mesmo conceito para expandir reconhecimento.

## Etapa 5: Contraexemplo
Mostro o que NÃO É este conceito - o principal diferencial que confunde estudantes.

## Etapa 6: Mnemônico
Crio frase ou acrônimo memorável ligando os elementos-chave.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📖 CONCEITO ORIGINAL
**Definição técnica:** [1-2 linhas]

## 🏠 NÍVEL 1: ANALOGIA DO COTIDIANO
**Comparação:** "[Conceito] é como [analogia familiar]"
**Por que funciona:**
• [Elemento do conceito] = [Elemento da analogia]
• [Elemento do conceito] = [Elemento da analogia]

## 👤 NÍVEL 2: CASO CLÍNICO TÍPICO
**Paciente:** [Nome], [idade] anos, [profissão]
**Queixa:** "[Nas palavras do paciente]"
**Manifestação:** [Como o conceito aparece]
**Ao exame:** [Detalhes sensoriais - o que você vê/ouve/palpa]

## 🔍 NÍVEL 3: CASO ATÍPICO
**Apresentação incomum:** [Descrição]
**Por que é importante conhecer:** [Risco de erro diagnóstico]

## ❌ NÍVEL 4: CONTRAEXEMPLO
**O que NÃO é:** [Diagnóstico diferencial principal]
**Como distinguir:** [Característica diferenciadora chave]

## 🧠 MNEMÔNICO
**[ACRÔNIMO ou frase]:** [Explicação de cada letra/palavra]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO use exemplos genéricos ("um paciente com dor")
- NÃO crie analogias que quebram em aspectos importantes
- NÃO omita detalhes sensoriais nos casos clínicos
- SEMPRE inclua por que a analogia funciona

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Exemplos devem ser VÍVIDOS e ESPECÍFICOS - use nomes, idades, profissões
- Inclua detalhes sensoriais: cores, sons, texturas, odores quando relevante
- O contraexemplo deve ser a confusão MAIS COMUM entre estudantes`
  },
  {
    id: "knowledge-integration",
    title: "Mapeador de Integração de Conhecimento",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Conecta novo conhecimento com base existente criando redes semânticas",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["integração", "conexões", "rede-semântica"],
    aiRecommended: "claude",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Integrar NOVO conhecimento com a BASE EXISTENTE do estudante, criando conexões significativas que facilitam recuperação e aplicação clínica.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Dr. Ricardo Ausubel, neurocientista cognitivo especializado em aprendizagem significativa. Seu princípio: "O fator isolado mais importante que influencia a aprendizagem é aquilo que o aprendiz já sabe."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[NOVO TEMA]: Conceito ou tópico a ser integrado

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Mapeamento do Conhecimento Prévio
Primeiro, PERGUNTO ao estudante:
"Antes de começarmos, me conte: o que você JÁ SABE sobre temas relacionados a [NOVO TEMA]? Pode ser de outras disciplinas, experiências clínicas ou até conhecimento do dia a dia."

## Etapa 2: Identificação de Conexões
Baseado na resposta, mapeio três tipos de conexões:

### Conexões Diretas (mesmo sistema/área)
Conceitos do mesmo domínio que se relacionam diretamente.

### Conexões Transversais (outras áreas)
Relações inesperadas com outras disciplinas que enriquecem compreensão.

### Conexões Clínicas
Situações práticas onde este conhecimento se aplica.

## Etapa 3: Elaboração das Conexões
Para cada conexão importante, gero:
1. Uma pergunta que exija usar AMBOS os conceitos
2. Um cenário clínico que INTEGRE os conhecimentos

## Etapa 4: Síntese Visual
Descrevo mapa conceitual mostrando o novo tema como nó central com conexões radiando para conceitos prévios.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🗺️ MAPEAMENTO PRÉVIO
"O que você já sabe sobre temas relacionados a [NOVO TEMA]?"
[Aguardo resposta]

## 🔗 MAPA DE CONEXÕES

### Conexões Diretas (mesmo sistema)
| Conceito Prévio | → | Novo Tema | Tipo de Relação |
|-----------------|---|-----------|-----------------|
| [Conceito A] | ↔ | [TEMA] | [causa/consequência/componente] |
| [Conceito B] | ↔ | [TEMA] | [análogo/oposto/complementar] |

### Conexões Transversais (outras áreas)
| Área | Conceito | → | Conexão com [TEMA] |
|------|----------|---|-------------------|
| [Disciplina] | [Conceito] | ↔ | [Relação inesperada] |

### Conexões Clínicas
• **Situação 1:** [Cenário onde conhecimento se aplica]
• **Situação 2:** [Cenário onde conhecimento se aplica]

## 🧩 ELABORAÇÃO INTEGRATIVA

### Pergunta Integradora 1
"[Pergunta que exige usar conceito prévio E novo tema]"

### Cenário Clínico Integrador
[Caso que exige aplicar múltiplos conhecimentos conectados]

## 🎨 MAPA CONCEITUAL
\`\`\`
            [Conceito Prévio A]
                    ↕
[Conceito B] ← [NOVO TEMA] → [Conceito C]
                    ↕
            [Aplicação Clínica]
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO assuma o conhecimento prévio - PERGUNTE primeiro
- NÃO force conexões artificiais - devem ser genuínas
- NÃO ignore conexões que revelam misconceptions
- PRIORIZE conexões que facilitam raciocínio clínico

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Destaque conexões CONTRA-INTUITIVAS - são as mais memoráveis
- Identifique e corrija misconceptions reveladas nas conexões
- Conexões transversais (ex: física → fisiologia) enriquecem mais`
  },
  {
    id: "resumir-notas-estudo",
    title: "Resumir Notas de Estudo",
    category: "Aprendizado Profundo",
    categorySlug: "aprendizado-profundo",
    sectionNumber: 1,
    description: "Sintetiza informações complexas de anatomia, fisiologia e patologia",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["síntese", "organização", "fisiopatologia"],
    aiRecommended: "claude",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sintetizar conteúdo médico denso em formato ESTRUTURADO e HIERÁRQUICO, priorizando informações de ALTO RENDIMENTO para provas e prática clínica.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Prof. Fernando Consolidador, médico e professor de medicina com 30 anos de experiência preparando estudantes para residência. Você sabe exatamente O QUE CAI nas provas e como organizar informação para recuperação rápida.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[SÍNDROME/DOENÇA]: Condição a ser resumida

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Identificação do Core
Identifico os 3-5 pontos ESSENCIAIS que diferenciam esta condição.

## Etapa 2: Estruturação Hierárquica
Organizo em seções padronizadas: Fisiopatologia → Clínica → Diagnóstico → Tratamento.

## Etapa 3: Priorização
Marco com ⭐ as informações de ALTO RENDIMENTO em provas.

## Etapa 4: Diferenciação
Destaco o que DIFERENCIA de condições similares (diagnóstico diferencial chave).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# 📋 [SÍNDROME/DOENÇA]

## 1. 🔬 FISIOPATOLOGIA
**Mecanismo Central:** [1 frase que explica a essência]
**Cascata:** [Evento inicial] → [Consequência 1] → [Consequência 2] → [Manifestação]
**⭐ Conceito-chave:** [Ponto mais cobrado em provas]

## 2. 🩺 QUADRO CLÍNICO
### ⭐ Sinais Cardinais
| Sinal | Frequência | Característica |
|-------|------------|----------------|
### Sintomas Típicos
- [Sintoma 1]: [quando suspeitar]
### ⚠️ Apresentações Atípicas
- [Grupo de risco]: [apresentação diferente]

## 3. 🔍 DIAGNÓSTICO DIFERENCIAL
| Condição | ⭐ Pista Diferenciadora |
|----------|------------------------|

## 4. 🧪 EXAMES
**Padrão-ouro:** | **Screening:** | **Achado típico:**

## 5. 💊 TRATAMENTO
| Situação | Droga | Dose |
**Alternativas:** | **Suporte:**

## 6. 📊 PROGNÓSTICO
**Bom:** | **Mau:**

## 🧠 MNEMÔNICO
**[ACRÔNIMO]:**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO inclua informações de baixo rendimento
- USE tabelas e listas, não parágrafos longos
- SEMPRE inclua mnemônico`
  },

  // SEÇÃO 2: RACIOCÍNIO CLÍNICO
  {
    id: "questoes-usmle",
    title: "Banco de Questões Estilo Residência",
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
    title: "Programador de Prática de Recuperação",
    category: "Retenção e Memória",
    categorySlug: "retencao-memoria",
    sectionNumber: 3,
    description: "Programa sessões de recuperação ativa com testes progressivos",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["retrieval-practice", "testing-effect", "recuperação"],
    aiRecommended: "chatgpt",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Criar programa estruturado de PRÁTICA DE RECUPERAÇÃO (retrieval practice) aproveitando o "testing effect" - o fenômeno onde TESTAR-SE produz mais aprendizado que RELER.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Dr. Henry Roediger, pesquisador pioneiro em ciência da memória e efeito de testagem. Você projeta protocolos de estudo que maximizam retenção através de recuperação ativa, não revisão passiva.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TEMA]: Conteúdo para prática de recuperação
[PERÍODO]: Duração do programa (ex: 2 semanas)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Mapeamento do Conteúdo
Identifico os conceitos-chave do [TEMA] e organizo por dificuldade.

## Etapa 2: Design das Sessões de Recuperação
Crio três tipos de sessão com dificuldade crescente:
- **Tipo A (Free Recall):** Recuperação livre sem pistas
- **Tipo B (Cued Recall):** Recuperação com pistas parciais
- **Tipo C (Recognition):** Identificação entre alternativas

## Etapa 3: Cronograma de Espaçamento
Distribuo as sessões ao longo do [PERÍODO] com intervalos crescentes.

## Etapa 4: Métricas de Monitoramento
Defino indicadores de progresso e critérios de ajuste.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 SESSÃO TIPO A: FREE RECALL (10 min)
**Instrução:** Feche TODO o material. Pegue papel em branco.
1. Escreva TUDO que lembra sobre [subtópico] - 5 minutos
2. NÃO consulte nada durante a recuperação
3. Após 5 minutos, abra o material e marque:
   ✅ Lembrei corretamente
   ⚠️ Lembrei parcialmente
   ❌ Não lembrei (PRIORIDADE de revisão)
4. Tempo para preencher gaps: 5 minutos

## 📋 SESSÃO TIPO B: CUED RECALL (15 min)
**Instrução:** Use estas pistas para recuperar informações completas:

| Pista | → | Recupere |
|-------|---|----------|
| [Palavra-chave] | → | [Definição completa + mecanismo] |
| [Sintoma isolado] | → | [Diagnósticos diferenciais] |
| [Nome de medicamento] | → | [Mecanismo + indicações + efeitos] |
| [Imagem/achado] | → | [Interpretação + conduta] |

## 📋 SESSÃO TIPO C: RECOGNITION TEST (10 min)
[5-10 questões de múltipla escolha cobrindo conceitos-chave]

**Questão 1:** [Enunciado]
a) [Alternativa]
b) [Alternativa]
c) [Alternativa]
d) [Alternativa]

[Continue para todas as questões]

## 📅 CRONOGRAMA SEMANAL
| Dia | Tipo | Foco | Dificuldade | Tempo |
|-----|------|------|-------------|-------|
| Seg | A | Conceitos básicos | ⭐ | 10 min |
| Ter | - | Descanso cognitivo | - | - |
| Qua | B | Aplicação clínica | ⭐⭐ | 15 min |
| Qui | - | Descanso cognitivo | - | - |
| Sex | C | Integração + distinção | ⭐⭐⭐ | 10 min |

## 📊 MÉTRICAS DE PROGRESSO
**Taxa de recuperação alvo:** >70% na primeira tentativa
**Tempo de recuperação alvo:** <30 segundos por item
**Progressão esperada:**
- Semana 1: 50-60% de recuperação
- Semana 2: 70-80% de recuperação
- Semana 3+: >85% de recuperação

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO permita consulta durante a recuperação
- NÃO pule sessões - consistência é crucial
- NÃO confunda reconhecimento com recordação
- A dificuldade deve ser CALIBRADA - desafiador mas possível

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Errar durante recuperação é DESEJÁVEL - fortalece a memória
- O esforço da recuperação é o que produz aprendizado
- Sessões curtas e frequentes > sessões longas e esporádicas`
  },
  {
    id: "interleaving-mixer",
    title: "Misturador de Prática Intercalada",
    category: "Retenção e Memória",
    categorySlug: "retencao-memoria",
    sectionNumber: 3,
    description: "Mistura tópicos relacionados para discriminação e transferência",
    estimatedTime: "10 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["interleaving", "discriminação", "transferência"],
    aiRecommended: "claude",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Criar sessão de PRÁTICA INTERCALADA (interleaving) que mistura tópicos relacionados de forma IMPREVISÍVEL, forçando o cérebro a discriminar entre conceitos similares e melhorar transferência de aprendizado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é a Dra. Elizabeth Bjork, pesquisadora em ciência da aprendizagem especializada em "dificuldades desejáveis". Você sabe que prática intercalada PARECE mais difícil mas produz aprendizado MAIS DURADOURO que prática em blocos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TÓPICO A]: Primeiro conceito/condição
[TÓPICO B]: Segundo conceito/condição (relacionado a A)
[TÓPICO C]: Terceiro conceito/condição (relacionado a A e B)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Aquecimento
Reviso rapidamente 1 conceito-chave de cada tópico.

## Etapa 2: Bloco Intercalado
Apresento 10-12 problemas ALTERNANDO os tópicos de forma IMPREVISÍVEL.
Crucial: o estudante NÃO sabe qual tópico vem a seguir.

## Etapa 3: Foco em Discriminação
Para cada problema, exijo que o estudante JUSTIFIQUE:
- Por que É este tópico?
- Por que NÃO É os outros tópicos?

## Etapa 4: Reflexão sobre Critérios
Ao final, ajudo a extrair REGRAS de discriminação.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🔥 AQUECIMENTO (5 min)
**[TÓPICO A]:** [1 conceito-chave essencial]
**[TÓPICO B]:** [1 conceito-chave essencial]
**[TÓPICO C]:** [1 conceito-chave essencial]

## 🔀 BLOCO INTERCALADO (30 min)

### Problema 1 ❓
[Cenário clínico ou questão conceitual]
**Antes de ver a resposta:** 
- Qual tópico? ___
- Por que NÃO é [outro tópico]? ___

### Problema 2 ❓
[Cenário clínico ou questão conceitual - OUTRO tópico]
**Antes de ver a resposta:**
- Qual tópico? ___
- Qual característica diferenciou? ___

### Problema 3 ❓
[Continue alternando de forma IMPREVISÍVEL]

[... 10-12 problemas no total, incluindo casos AMBÍGUOS intencionalmente]

## 🎯 FOCO EM DISCRIMINAÇÃO
Para os problemas mais difíceis:
| Problema | Parece ser... | Mas é... | Pista diferenciadora |
|----------|---------------|----------|---------------------|
| [X] | [Tópico errado] | [Tópico certo] | [O que distingue] |

## 🧠 REFLEXÃO FINAL
1. **Quais critérios você usou para diferenciar os tópicos?**
   [Espaço para resposta]

2. **Onde você confundiu? Por quê?**
   [Espaço para resposta]

3. **Que REGRA você pode criar para não confundir novamente?**
   [Espaço para resposta]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NUNCA avise qual tópico vem a seguir
- INCLUA casos ambíguos intencionalmente (vida real é assim)
- EXIJA justificativa para CADA resposta
- NÃO organize por tópico - a aleatoriedade é o ponto

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Vai parecer mais difícil que prática em blocos - isso é ESPERADO
- A confusão inicial é parte do processo de aprendizado
- Os casos ambíguos são os que mais ensinam`
  },
  {
    id: "mnemonic-generator",
    title: "Gerador de Mnemônicos Médicos",
    category: "Retenção e Memória",
    categorySlug: "retencao-memoria",
    sectionNumber: 3,
    description: "Cria técnicas de memorização para anatomia, farmacologia e protocolos",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["mnemônicos", "memorização", "anatomia", "farmacologia"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é especialista em técnicas de memorização baseadas em neurociência.

# TAREFA
Crie técnicas de memorização para [ANATOMIA/FARMACOLOGIA/TEMA].

# FORMATO DE SAÍDA

## 1. MNEMÔNICOS VISUAIS
### Acrônimos
[Crie acrônimo onde cada letra representa um item da lista]
Exemplo para nervos cranianos: "On Old Olympus..."

### Imagens Mentais
[Descreva imagem vívida que conecta os conceitos]
- Cena principal:
- Elementos visuais:
- Ação/movimento:

## 2. METHOD OF LOCI (Palácio da Memória)
### Percurso
[Defina 5-7 pontos em um local familiar]
1. Porta de entrada → [Conceito 1]
2. Sofá da sala → [Conceito 2]
3. Cozinha → [Conceito 3]
...

### Associações
Para cada ponto, crie cena absurda/engraçada conectando local + conceito

## 3. SISTEMA LEITNER ADAPTADO
### Cards por nível
- Nível 1 (diário): Conceitos novos
- Nível 2 (2-3 dias): Acertou 1x
- Nível 3 (semanal): Acertou 2x
- Nível 4 (quinzenal): Acertou 3x

## 4. ELABORATIVE INTERROGATION
Para cada item, responda:
- POR QUE isso é verdade?
- COMO isso se conecta com X?

# REGRAS
- Mnemônicos devem ser memoráveis (engraçados, absurdos)
- Inclua componente visual sempre que possível
- Teste imediatamente após criar`
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
    title: "Analisador de Padrões de Erro",
    category: "Análise e Correção",
    categorySlug: "analise-correcao",
    sectionNumber: 4,
    description: "Mapeia padrões recorrentes de erro com ensino corretivo direcionado",
    estimatedTime: "12 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["padrões", "diagnóstico", "correção-direcionada"],
    aiRecommended: "claude",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Realizar análise MULTINÍVEL dos padrões de erro do estudante, identificando não apenas O QUE errou, mas POR QUE errou, e criar plano de ENSINO CORRETIVO direcionado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Dr. Daniel Kahneman, Nobel em Economia e especialista em vieses cognitivos aplicados à tomada de decisão médica. Você identifica os padrões de pensamento que levam a erros sistemáticos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ÁREA/DISCIPLINA]: Onde os erros ocorreram
[LISTA DE ERROS]: 10-20 questões erradas com:
- Tema da questão
- Sua resposta vs resposta correta
- Seu raciocínio na hora (se lembrar)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Categorização dos Erros
Classifico cada erro em uma de quatro categorias fundamentais:
- **Conhecimento:** Não sabia a informação
- **Aplicação:** Sabia mas aplicou incorretamente
- **Interpretação:** Entendeu errado o enunciado
- **Atenção:** Descuido ou leitura apressada

## Etapa 2: Identificação de Padrões Cognitivos
Analiso se há vieses cognitivos recorrentes:
- Viés de confirmação (busca evidência para hipótese inicial)
- Ancoragem prematura (fixa no primeiro dado)
- Fechamento precoce (conclui antes de considerar alternativas)
- Heurística de disponibilidade (lembra mais recente/dramático)

## Etapa 3: Mapeamento de Gaps de Conhecimento
Identifico conceitos-base que faltam e que causam erros em cascata.

## Etapa 4: Ensino Corretivo Personalizado
Para cada padrão, crio estratégia específica de correção.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📊 NÍVEL 1: CATEGORIZAÇÃO DOS ERROS

| Questão | Categoria | Detalhes |
|---------|-----------|----------|
| [X] | 🧠 Conhecimento | Não sabia [conceito específico] |
| [Y] | 🔧 Aplicação | Sabia [X] mas aplicou em [contexto errado] |
| [Z] | 📖 Interpretação | Não viu "[palavra-chave]" no enunciado |
| [W] | 👁️ Atenção | Leitura apressada - [detalhe perdido] |

**Distribuição:**
- Conhecimento: X erros (Y%)
- Aplicação: X erros (Y%)
- Interpretação: X erros (Y%)
- Atenção: X erros (Y%)

## 🧠 NÍVEL 2: PADRÕES COGNITIVOS

| Viés Identificado | Evidência | Frequência |
|-------------------|-----------|------------|
| Ancoragem prematura | "Viu [sintoma] e já pensou em [diagnóstico]" | X vezes |
| Fechamento precoce | "Não considerou [alternativa]" | X vezes |
| Viés de confirmação | "Ignorou [dado contra]" | X vezes |

## 📚 NÍVEL 3: GAPS DE CONHECIMENTO

**Mapa de Conceitos Faltantes:**
\`\`\`
[Erro observado] ← causado por ← [Gap de pré-requisito]
      ↓
[Conceito que precisa revisar PRIMEIRO]
\`\`\`

**Prioridade de revisão:**
1. [Conceito mais fundamental] - afeta X questões
2. [Conceito secundário] - afeta Y questões
3. [Conceito específico] - afeta Z questões

## 🎯 NÍVEL 4: ENSINO CORRETIVO

### Para Padrão: [Nome do padrão mais frequente]
**Por que isso acontece:**
[Explicação do mecanismo cognitivo]

**Estratégia de correção:**
[Técnica específica para contornar]

**Exercício de prática deliberada:**
[3 questões focadas neste padrão]

**Gatilho mental para prova:**
"Quando eu [situação], vou [ação preventiva]"

### Para Padrão: [Segundo padrão]
[Repita estrutura acima]

## ✅ CHECKLIST PARA PRÓXIMAS QUESTÕES
□ Antes de responder: li TODAS as alternativas?
□ Considerei pelo menos 2 hipóteses antes de escolher?
□ Procurei dado que CONTRA a minha hipótese inicial?
□ Reli o enunciado procurando "EXCETO", "INCORRETO", "NÃO"?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO simplifique a análise - os padrões profundos são o valor
- NÃO ignore erros por "distração" - podem ter padrão subjacente
- SEMPRE conecte o gap de conhecimento ao pré-requisito faltante

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Quanto mais erros fornecidos, melhor a identificação de padrões
- Incluir o raciocínio na hora é crucial para diagnóstico preciso
- O ensino corretivo deve ser PRATICADO, não apenas lido`
  },
  {
    id: "metacognitive-journal",
    title: "Diário de Reflexão Metacognitiva",
    category: "Análise e Correção",
    categorySlug: "analise-correcao",
    sectionNumber: 4,
    description: "Estrutura reflexão sobre processo de aprendizagem e automonitoramento",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["metacognição", "reflexão", "automonitoramento"],
    aiRecommended: "chatgpt",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Estruturar REFLEXÃO METACOGNITIVA sobre o processo de aprendizagem, desenvolvendo consciência sobre COMO você aprende e capacidade de AUTORREGULAÇÃO.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Prof. John Flavell, pai da metacognição, especialista em aprendizagem autorregulada. Seu princípio: "Aprendizes eficazes não são apenas bons em aprender - são bons em PENSAR SOBRE como aprendem."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TEMA]: O que foi estudado hoje
[DURAÇÃO]: Quanto tempo de estudo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Planejamento (ANTES do estudo)
Guio reflexão sobre intenções e estratégias escolhidas.

## Etapa 2: Monitoramento (DURANTE o estudo)
Prompts periódicos para avaliar compreensão e ajustar estratégias.

## Etapa 3: Avaliação (APÓS o estudo)
Reflexão sobre eficácia, aprendizados e próximos passos.

## Etapa 4: Insight Consolidador
Extração de um aprendizado-chave sobre o próprio processo.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 ANTES DO ESTUDO: Planejamento

**1. O que pretendo aprender hoje?**
[Objetivo específico e mensurável]
_________________________________________________

**2. Que estratégias vou usar?**
□ Releitura
□ Resumo
□ Flashcards
□ Questões
□ Ensinar para alguém
□ Mapa mental
□ Outra: _______________

**3. Quanto tempo vou dedicar?**
[___] minutos

**4. Meu nível atual neste tema (1-10):**
[ 1 ][ 2 ][ 3 ][ 4 ][ 5 ][ 6 ][ 7 ][ 8 ][ 9 ][ 10 ]

**5. O que pode me distrair? Como vou evitar?**
Distração: _______________ → Prevenção: _______________

---

## 🔄 DURANTE O ESTUDO: Monitoramento
*A cada 25 minutos, pause e registre:*

### Check-in 1 (25 min)
**Estou entendendo?**
□ Sim, claramente
□ Parcialmente - dúvida em: _______________
□ Não - preciso: _______________

**Preciso mudar a estratégia?**
□ Não, está funcionando
□ Sim, vou: _______________

**Minha concentração está:**
□ Alta (no flow)
□ Média (algumas distrações)
□ Baixa (preciso pausar)

### Check-in 2 (50 min)
[Repita as mesmas perguntas]

---

## ✅ APÓS O ESTUDO: Avaliação

**1. O que eu REALMENTE aprendi?**
[Não o que li, mas o que consigo explicar sem consultar]
_________________________________________________

**2. O que ainda está confuso?**
[Específico - conceito, conexão, aplicação]
_________________________________________________

**3. Que estratégia funcionou MELHOR?**
_________________________________________________
Por quê? _______________

**4. O que faria DIFERENTE na próxima vez?**
_________________________________________________

**5. Meu nível AGORA neste tema (1-10):**
[ 1 ][ 2 ][ 3 ][ 4 ][ 5 ][ 6 ][ 7 ][ 8 ][ 9 ][ 10 ]

**6. Próximos passos concretos:**
- [ ] _________________________________________________
- [ ] _________________________________________________

---

## 💡 INSIGHT DO DIA
"A coisa mais importante que descobri sobre MEU APRENDIZADO hoje foi..."
_________________________________________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO pule o planejamento - define a intenção
- NÃO ignore os check-ins durante - são o monitoramento
- SEJA HONESTO na autoavaliação - subestimar esconde gaps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Este registro ajuda a identificar o que funciona PARA VOCÊ especificamente
- Revise semanalmente para identificar padrões
- A metacognição melhora com prática - persista mesmo que pareça "perda de tempo"`
  },

  // SEÇÃO 5: DESAFIO COGNITIVO
  {
    id: "desirable-difficulties",
    title: "Gerador de Dificuldades Desejáveis",
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
    title: "Otimizador de Carga Cognitiva",
    category: "Desafio Cognitivo",
    categorySlug: "desafio-cognitivo",
    sectionNumber: 5,
    description: "Gerencia carga cognitiva para evitar sobrecarga e maximizar aprendizado",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Intermediário",
    tags: ["cognitive-load", "chunk", "scaffolding"],
    aiRecommended: "claude",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Otimizar material de estudo aplicando princípios da TEORIA DA CARGA COGNITIVA de Sweller: eliminar carga EXTRÍNSECA (desperdício), gerenciar carga INTRÍNSECA (complexidade) e maximizar carga RELEVANTE (aprendizado produtivo).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Dr. John Sweller, criador da Teoria da Carga Cognitiva, especialista em design instrucional. Você sabe que a memória de trabalho tem capacidade LIMITADA e que sobrecarregá-la impede aprendizado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TEMA]: Material a ser otimizado
[NÍVEL DO ESTUDANTE]: Iniciante/Intermediário/Avançado

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Análise das Três Cargas
Avalio a complexidade intrínseca, identifico excessos extrínsecos e planejo atividades relevantes.

## Etapa 2: Chunking
Divido o conteúdo em unidades de 3-4 elementos (limite da memória de trabalho).

## Etapa 3: Scaffolding Progressivo
Organizo em camadas: versão simplificada → detalhes essenciais → nuances e exceções.

## Etapa 4: Integração
Crio exercício que integra todos os chunks de forma significativa.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📊 ANÁLISE DE CARGA COGNITIVA

### Carga INTRÍNSECA (complexidade do conteúdo)
**Nível estimado:** [⭐ Baixo | ⭐⭐ Médio | ⭐⭐⭐ Alto]
**Elementos interativos:** 
- [Elemento 1] interage com [Elemento 2]
- [Conceito A] depende de [Conceito B]
**Pré-requisitos necessários:**
- [ ] [Conceito base 1] - domina? □ Sim □ Não
- [ ] [Conceito base 2] - domina? □ Sim □ Não

### Carga EXTRÍNSECA (má apresentação) - ELIMINAR ❌
**Problemas identificados:**
- ❌ Informação redundante: [exemplo]
- ❌ Split attention: [texto longe da imagem relevante]
- ❌ Detalhes irrelevantes: [exemplo para remover]
**Ações corretivas:**
- [Como eliminar cada problema]

### Carga RELEVANTE (esforço produtivo) - MAXIMIZAR ✅
**Atividades que promovem aprendizado profundo:**
- ✅ [Atividade 1]
- ✅ [Atividade 2]

---

## 🧩 CHUNKING DO CONTEÚDO

### Chunk 1: [Nome do conceito central]
**Elementos (máx. 4):**
1. [Elemento essencial]
2. [Elemento essencial]
3. [Elemento essencial]
**Verificação:** Consigo explicar sem consultar? □ Sim □ Não

### Chunk 2: [Nome do segundo conceito]
**Elementos (máx. 4):**
1. [Elemento essencial]
2. [Elemento essencial]
3. [Elemento essencial]
**Verificação:** Consigo explicar sem consultar? □ Sim □ Não

### Chunk 3: [Nome do terceiro conceito]
[Continue o padrão]

---

## 📈 SCAFFOLDING PROGRESSIVO

### Camada 1: Versão Simplificada (essência apenas)
[O conceito reduzido ao mínimo essencial - 2-3 frases]
**Analogia simples:** [Comparação com algo familiar]

### Camada 2: Detalhes Essenciais
[Adicione os detalhes que mudam decisões clínicas]
**Casos onde isso importa:** [Exemplos]

### Camada 3: Nuances e Exceções
[Casos atípicos, exceções, pegadinhas de prova]
**Quando suspeitar da exceção:** [Gatilhos]

---

## 🔗 EXERCÍCIO DE INTEGRAÇÃO
[Caso ou problema que exige usar TODOS os chunks de forma integrada]

---

## ⚠️ SINAIS DE SOBRECARGA
Se sentir durante o estudo:
- 😵 Confusão crescente → PARE e revise chunk anterior
- 😤 Frustração → SIMPLIFIQUE - volte uma camada
- 🤯 "Brancos" → PAUSA de 10 min + chunks menores

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO crie chunks com mais de 4 elementos
- NÃO pule camadas do scaffolding
- NÃO ignore os pré-requisitos faltantes
- A sensação de "fácil demais" é boa - significa espaço cognitivo livre

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Menos é mais - é melhor dominar 3 chunks que superficialmente ver 10
- Pré-requisitos faltantes causam sobrecarga - resolva antes
- A integração final é onde o aprendizado profundo acontece`
  },
  {
    id: "pressure-simulator",
    title: "Simulador de Pressão de Prova",
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
    title: "Arquiteto de Ciclos Ultradianos",
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
- Minutos 77-90: Revisão do que estudou
- Anote dúvidas e insights
- Prepare o próximo ciclo

## INTERVALO ENTRE CICLOS (20 min)
Atividades de recuperação (NÃO telas):
- Caminhar
- Alongar
- Hidratar
- Snack leve

# CRONOGRAMA DIÁRIO
[Distribua 2-4 ciclos conforme horários fornecidos]`
  },
  {
    id: "cronotype-optimizer",
    title: "Otimizador de Cronotipo",
    category: "Rotina de Alta Performance",
    categorySlug: "rotina-performance",
    sectionNumber: 6,
    description: "Identifica seu cronotipo e alinha tarefas aos picos naturais de energia",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["cronotipo", "energia", "otimização"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é especialista em cronobiologia e otimização de performance.

# TAREFA
Identifique meu cronotipo e otimize minha rotina de estudos.

# QUESTIONÁRIO DE CRONOTIPO
Responda:
1. A que horas você naturalmente acordaria sem despertador?
2. A que horas você naturalmente sentiria sono?
3. Quando você se sente mais alerta? Manhã/Tarde/Noite?
4. Quando você prefere fazer exercício físico?
5. Você se considera mais produtivo de manhã ou à noite?

# FORMATO DE SAÍDA

## SEU CRONOTIPO
[Leão/Urso/Lobo/Golfinho] - [Descrição breve]

## JANELAS DE OURO
- Pico de energia 1: [horário] → [tipo de tarefa ideal]
- Pico de energia 2: [horário] → [tipo de tarefa ideal]
- Vale de energia: [horário] → [tarefas leves/pausas]

## ROTINA IDEAL
| Horário | Energia | Atividade Recomendada |
|---------|---------|----------------------|
| [X-Y] | Alta | Deep work / Raciocínio |
| [Y-Z] | Média | Revisão / Leitura |
| [Z-W] | Baixa | Pausa / Exercício |

## AJUSTES PARA MEDICINA
- Melhor horário para: Anatomia, Questões, Casos clínicos
- Quando evitar: Estudar temas novos/complexos`
  },
  {
    id: "estrategia-exame-medico",
    title: "Estratégia de Exame Completa",
    category: "Rotina de Alta Performance",
    categorySlug: "rotina-performance",
    sectionNumber: 6,
    description: "Plano estratégico de 8 semanas para provas de medicina e residência",
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
- No dia da prova:`
  },

  // SEÇÃO 7: HÁBITOS E CONSISTÊNCIA
  {
    id: "habit-stacking",
    title: "Designer de Empilhamento de Hábitos",
    category: "Hábitos e Consistência",
    categorySlug: "habitos-consistencia",
    sectionNumber: 7,
    description: "Cria pilhas de hábitos conectando novos comportamentos a rotinas existentes",
    estimatedTime: "7 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["habit-stacking", "rotina", "comportamento"],
    aiRecommended: "chatgpt",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Criar estratégia de EMPILHAMENTO DE HÁBITOS (habit stacking) conectando NOVOS comportamentos de estudo a hábitos EXISTENTES que já são automáticos, usando a técnica de James Clear.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Prof. James Clear, autor de "Atomic Habits" e especialista em design comportamental. Seu princípio: "Você não sobe ao nível dos seus objetivos. Você cai ao nível dos seus sistemas."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[HÁBITOS EXISTENTES]: Comportamentos que já faço automaticamente
[NOVOS HÁBITOS]: Comportamentos de estudo que quero adquirir
[MOMENTO]: Manhã/Tarde/Noite - quando tenho mais disponibilidade

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Mapeamento de Hábitos Existentes
Identifico comportamentos que o estudante JÁ FAZ automaticamente todos os dias.

## Etapa 2: Seleção de Âncoras
Escolho os hábitos existentes mais adequados para servir como GATILHOS.

## Etapa 3: Design das Pilhas
Crio a fórmula: "DEPOIS DE [hábito existente], VOU [novo hábito - versão mínima]"

## Etapa 4: Progressão Gradual
Planejo como escalar a duração sem quebrar a consistência.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📋 MAPEAMENTO DE HÁBITOS EXISTENTES

**Liste hábitos que você JÁ faz automaticamente:**
- □ Acordar
- □ Escovar os dentes (manhã)
- □ Tomar café da manhã
- □ Chegar em casa após aula/trabalho
- □ Almoçar
- □ Tomar banho
- □ Jantar
- □ Escovar os dentes (noite)
- □ Outros: _______________

---

## 🔗 PILHAS DE HÁBITOS DE ESTUDO

### Pilha Matinal ☀️
**Fórmula:**
> "DEPOIS DE [hábito existente: ex. tomar café da manhã],
> VOU [novo hábito: revisar 5 flashcards no Anki - 2 min]"

**Por que funciona:**
- O hábito existente é o GATILHO automático
- O novo hábito é RIDICULAMENTE pequeno (2 min)
- A consistência vem ANTES da duração

### Pilha de Transição 🚶
**Fórmula:**
> "DEPOIS DE [hábito existente: ex. chegar em casa],
> VOU [novo hábito: revisar anotações do dia - 2 min]"

### Pilha Noturna 🌙
**Fórmula:**
> "DEPOIS DE [hábito existente: ex. escovar os dentes à noite],
> VOU [novo hábito: ler 1 página de livro-texto - 2 min]"

---

## 📏 REGRAS DE OURO

1. **Comece RIDICULAMENTE pequeno**
   - 2 minutos máximo no início
   - "Tão fácil que é impossível falhar"

2. **Vincule ao HÁBITO, não ao horário**
   - ❌ "Às 8h vou estudar" (depende de circunstâncias)
   - ✅ "Depois do café vou estudar" (hábito é o gatilho)

3. **Celebre IMEDIATAMENTE após fazer**
   - Diga "Isso!" ou faça gesto de vitória
   - A celebração cria associação positiva

4. **Nunca perca 2 dias seguidos**
   - Um dia de falha é acidente
   - Dois dias seguidos é novo padrão

---

## 📈 PROGRESSÃO SEMANAL

| Semana | Foco | Duração |
|--------|------|---------|
| 1-2 | Apenas estabelecer o gatilho | 2 min |
| 3-4 | Aumentar gradualmente | 5 min |
| 5-6 | Expandir | 10 min |
| 7+ | Adicionar nova pilha | 15 min |

---

## 🔧 TROUBLESHOOTING

**Se eu falhar:**
→ Volte para versão AINDA MENOR
→ 2 min é muito? Faça 30 segundos

**Se eu esquecer:**
→ Adicione LEMBRETE VISUAL no local do gatilho
→ Ex: Post-it no espelho do banheiro

**Se eu resistir:**
→ Aplique a "Regra dos 2 minutos" - só preciso fazer 2 min
→ Depois de 2 min, decido se continuo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO comece com mais de 5 minutos - mata a consistência
- NÃO tente várias pilhas novas de uma vez
- NÃO vincule a horários - vincule a hábitos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- A consistência VENCE a intensidade - melhor 2 min todo dia que 1h esporadicamente
- O hábito existe mais fácil que você imagina para manter
- Celebração é ciência, não bobagem - cria dopamina associada ao comportamento`
  },
  {
    id: "consistency-tracker",
    title: "Rastreador de Consistência",
    category: "Hábitos e Consistência",
    categorySlug: "habitos-consistencia",
    sectionNumber: 7,
    description: "Sistema visual de acompanhamento de hábitos de estudo",
    estimatedTime: "5 min",
    evidenceLevel: "Média",
    difficulty: "Iniciante",
    tags: ["tracking", "consistência", "visual"],
    aiRecommended: "chatgpt",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Criar sistema VISUAL de acompanhamento de consistência em hábitos de estudo, usando gamificação e métricas que motivam continuidade.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é especialista em gamificação e ciência comportamental, designer de sistemas de tracking que tornam progresso VISÍVEL e MOTIVADOR. Seu princípio: "O que é medido, melhora. O que é medido visualmente, melhora mais rápido."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[HÁBITOS]: Lista de hábitos de estudo a rastrear
[PERÍODO]: Semanal ou mensal
[METAS]: Frequência mínima desejada por hábito

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Setup do Tracker
Configuro tabela visual com hábitos selecionados e metas realistas.

## Etapa 2: Sistema de Streaks
Implemento contagem de dias consecutivos com gamificação.

## Etapa 3: Métricas de Análise
Defino indicadores que revelam padrões e oportunidades de melhoria.

## Etapa 4: Regras de Recuperação
Estabeleço protocolo para quando quebrar sequência.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📊 HABIT TRACKER VISUAL

### Semana: ___/___/___ a ___/___/___

| Hábito | Seg | Ter | Qua | Qui | Sex | Sáb | Dom | Meta | Real | % |
|--------|-----|-----|-----|-----|-----|-----|-----|------|------|---|
| 📚 Anki | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | 7/7 | /7 | % |
| 📝 Questões | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | 5/7 | /7 | % |
| 📖 Leitura | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | 4/7 | /7 | % |
| 🧠 Resumo | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | 3/7 | /7 | % |

**Legenda:**
- ⬜ Não feito
- ✅ Feito
- 🔥 Feito + acima da meta
- ⭐ Dia perfeito (todos os hábitos)

---

## 🔥 SISTEMA DE STREAKS

| Hábito | Streak Atual | Recorde | Meta de Streak |
|--------|--------------|---------|----------------|
| 📚 Anki | ___ dias | ___ dias | 30 dias |
| 📝 Questões | ___ dias | ___ dias | 21 dias |
| 📖 Leitura | ___ dias | ___ dias | 14 dias |

**Streak Geral (todos os hábitos):** ___ dias
**Recorde Geral:** ___ dias

### Níveis de Streak 🎮
- 🥉 Bronze: 7 dias consecutivos
- 🥈 Prata: 21 dias consecutivos
- 🥇 Ouro: 30 dias consecutivos
- 💎 Diamante: 60 dias consecutivos
- 👑 Lendário: 100 dias consecutivos

---

## 📈 MÉTRICAS SEMANAIS

**Taxa de Conclusão Geral:** ___%
**Tendência:** ⬆️ Subindo | ➡️ Estável | ⬇️ Caindo

**Hábito mais consistente:** _______________
→ O que está funcionando: _______________

**Hábito que precisa atenção:** _______________
→ O que está atrapalhando: _______________

**Dia mais produtivo:** _______________
**Dia mais fraco:** _______________

---

## 🔄 REGRAS DE RECUPERAÇÃO

**Se quebrar streak:**
1. ✅ Volte no DIA SEGUINTE (não na "próxima segunda")
2. ✅ Faça a versão MÍNIMA (2 minutos conta!)
3. ✅ Não se puna - analise e ajuste

**Regra dos 2 dias:**
> "Nunca pule 2 dias seguidos"
> 1 dia = acidente
> 2 dias = início de novo padrão

**Versão de emergência:**
Se não conseguir fazer o hábito completo:
- Anki: apenas 5 cards (1 min)
- Questões: apenas 1 questão (2 min)
- Leitura: apenas 1 parágrafo (1 min)

---

## 🎯 RECOMPENSAS

| Conquista | Recompensa |
|-----------|------------|
| 7 dias de streak | [Recompensa pequena] |
| 21 dias de streak | [Recompensa média] |
| 30 dias de streak | [Recompensa especial] |
| Semana perfeita | [Recompensa semanal] |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO rastreie mais de 4-5 hábitos simultaneamente
- NÃO defina metas irrealistas que causem frustração
- NÃO ignore a versão mínima - consistência > perfeição

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Mantenha o tracker VISÍVEL - na mesa de estudos ou tela do celular
- Marque IMEDIATAMENTE após fazer - não deixe para depois
- Revise semanalmente para identificar padrões`
  },
  {
    id: "melhorar-habitos-estudo",
    title: "Redesenhar Hábitos de Estudo",
    category: "Hábitos e Consistência",
    categorySlug: "habitos-consistencia",
    sectionNumber: 7,
    description: "Transforma procrastinação em consistência com micro-hábitos",
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

  // SEÇÃO 8: PRODUÇÃO ACADÊMICA
  {
    id: "estrutura-tcc",
    title: "Estrutura de TCC em Medicina",
    category: "Produção Acadêmica",
    categorySlug: "producao-academica",
    sectionNumber: 8,
    description: "Monta estrutura completa de trabalho científico com seções IMRD",
    estimatedTime: "15 min",
    evidenceLevel: "Alta",
    difficulty: "Avançado",
    tags: ["TCC", "estrutura", "IMRD"],
    aiRecommended: "claude",
    prompt: `# PAPEL
Você é orientador de TCC em medicina com 20 anos de experiência.

# TAREFA
Ajude-me a estruturar meu TCC sobre [TEMA].

# FORMATO DE SAÍDA

## 1. TÍTULO (3 opções)
- Opção 1: [descritivo]
- Opção 2: [com pergunta]
- Opção 3: [com resultados]

## 2. INTRODUÇÃO
### Contextualização (1 parágrafo)
[Cenário geral do problema]

### Problema de pesquisa (1 parágrafo)
[Lacuna no conhecimento]

### Justificativa (1 parágrafo)
[Por que é relevante]

### Objetivos
- Geral:
- Específicos (3-4):

## 3. METODOLOGIA
- Tipo de estudo:
- População/amostra:
- Critérios de inclusão/exclusão:
- Instrumentos de coleta:
- Análise de dados:
- Aspectos éticos:

## 4. RESULTADOS ESPERADOS
[Baseado na literatura, o que se espera encontrar]

## 5. CRONOGRAMA
| Etapa | Mês 1 | Mês 2 | Mês 3 | Mês 4 | Mês 5 | Mês 6 |
|-------|-------|-------|-------|-------|-------|-------|

## 6. REFERÊNCIAS SUGERIDAS
[5-10 artigos-chave para começar]`
  },
  {
    id: "busca-evidencias",
    title: "Busca de Evidências PICO",
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
    title: "Podcast Educativo",
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
  {
    id: "encontrar-recursos",
    title: "Curadoria de Recursos de Estudo",
    category: "Formatos Alternativos",
    categorySlug: "formatos-alternativos",
    sectionNumber: 9,
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

## 1. LIVROS-TEXTO
### Básico
- [Título] - [Autor] - [Por que é bom]

### Avançado
- [Título] - [Autor] - [Por que é bom]

## 2. VÍDEOS EDUCACIONAIS
### Plataformas Recomendadas
- Osmosis: [O que oferece]
- Lecturio: [O que oferece]
- Khan Academy Medicine: [O que oferece]

## 3. APPS INTERATIVOS
### Anatomia
- Complete Anatomy
- Visible Body

### Flashcards
- Anki (decks recomendados)
- Quizlet

## 4. ARTIGOS DE REVISÃO
### Bases de Dados
- PubMed
- UpToDate
- DynaMed

## 5. PODCASTS MÉDICOS
- [Nome] - [Foco] - [Frequência]

# CRITÉRIOS
- Qualidade acadêmica
- Atualização recente
- Acessibilidade`
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
    title: "Revisão Semanal de Performance",
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
Baseado nos aprendizados, vou mudar: _____`
  },
  {
    id: "anti-procrastination",
    title: "Iniciador Anti-Procrastinação",
    category: "Otimização e Tracking",
    categorySlug: "otimizacao-tracking",
    sectionNumber: 10,
    description: "Estratégias para vencer inércia inicial e começar tarefas adiadas",
    estimatedTime: "5 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["procrastinação", "início", "momentum"],
    aiRecommended: "chatgpt",
    prompt: `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Quebrar a INÉRCIA INICIAL que impede de começar tarefas adiadas, usando intervenções psicológicas baseadas em evidência para vencer a procrastinação.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 PAPEL DA IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Você é o Dr. Timothy Pychyl, pesquisador mundial em procrastinação. Seu insight-chave: "Procrastinação não é problema de gestão de tempo - é problema de gestão de EMOÇÕES. Não procrastinamos a tarefa, procrastinamos as emoções negativas associadas a ela."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 ENTRADA NECESSÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TAREFA]: O que estou adiando
[MOTIVO]: Por que estou adiando (se souber identificar)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 PROCESSO (Chain-of-Thought)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Etapa 1: Diagnóstico Rápido
Identifico qual das causas comuns está bloqueando o início.

## Etapa 2: Intervenção Específica
Aplico técnica correspondente ao tipo de bloqueio.

## Etapa 3: Ação Imediata
Defino micro-tarefa que pode ser feita AGORA em menos de 2 minutos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 FORMATO DE SAÍDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🔍 DIAGNÓSTICO RÁPIDO
**Por que estou adiando [TAREFA]?**

□ 🏔️ Parece muito GRANDE/complexo
□ 🤷 Não sei por onde COMEÇAR
□ 😰 MEDO de fazer errado/falhar
□ 😒 Não é PRAZEROSO
□ 😴 Estou CANSADO/sem energia
□ 🎯 Não vejo SENTIDO/relevância

---

## 💊 INTERVENÇÃO ESPECÍFICA

### Se parece muito GRANDE 🏔️
**Técnica: Decomposição Extrema**

Sua tarefa: "[TAREFA]"
↓
Decomposta: "Qual é a MENOR ação possível que move isso para frente?"
↓
Micro-tarefa (2 min): "[Ex: Abrir o livro na página certa]"

> "Você não precisa fazer tudo. Você só precisa começar."

---

### Se não sei por onde COMEÇAR 🤷
**Técnica: Começar pelo Meio**

> Não precisa ser sequencial. Comece pela parte que parece mais fácil ou interessante. Momentum é mais importante que ordem.

**Para [TAREFA], o passo mais fácil é:**
"[Identifique o pedaço menos intimidador]"

---

### Se tenho MEDO de errar 😰
**Técnica: Permissão para Imperfeição**

Script mental:
> "Primeira versão pode ser lixo. Feito é melhor que perfeito. Eu posso melhorar DEPOIS de existir. Não existe 'pronto' na primeira tentativa."

**Seu compromisso agora:**
"Vou fazer uma versão RUIM de [TAREFA] - e está OK."

---

### Se não é PRAZEROSO 😒
**Técnica: Temptation Bundling**

> Combine a tarefa chata com algo prazeroso.

**Fórmula:**
"Eu SÓ posso [coisa prazerosa] ENQUANTO faço [tarefa chata]"

**Exemplos:**
- "Só posso ouvir meu podcast favorito enquanto faço flashcards"
- "Só posso tomar meu café especial enquanto leio o capítulo"
- "Só posso ver redes sociais depois de fazer 5 questões"

---

### Se estou CANSADO 😴
**Técnica: Regra dos 2 Minutos**

> Faça apenas 2 minutos. Depois DECIDA se continua.

**Compromisso mínimo:**
"Vou fazer [TAREFA] por exatamente 2 minutos. Depois, decido se paro ou continuo."

*Geralmente, uma vez começando, você continua.*

---

### Se não vejo SENTIDO 🎯
**Técnica: Conexão com Valores**

**Perguntas de clarificação:**
1. "Por que isso importa para meu eu do futuro?"
2. "O que acontece se eu NÃO fizer isso?"
3. "Como isso se conecta com meu objetivo maior?"

**Reframe:**
"Fazer [TAREFA] é uma forma de eu [objetivo/valor maior]"

---

## 🧠 SCRIPT MENTAL UNIVERSAL

> "Eu não preciso QUERER fazer isso.
> Eu só preciso COMEÇAR.
> A motivação vem DEPOIS da ação, não antes.
> Minha única tarefa agora é começar - nada mais."

---

## ⚡ AÇÃO IMEDIATA

**Sua micro-tarefa para AGORA (menos de 2 min):**

➤ "_________________________________________________"

**Faça IMEDIATAMENTE após ler isso.**
**Não leia mais nada. COMECE.**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ RESTRIÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NÃO planeje mais - ação AGORA
- NÃO espere motivação - comece sem ela
- NÃO julgue a qualidade - apenas comece

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 DICAS DE QUALIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- A procrastinação é regulação emocional disfuncional - não é preguiça
- O custo emocional de adiar é MAIOR que o custo de fazer
- Após 2 minutos de ação, a resistência geralmente desaparece`
  },
  {
    id: "alivio-estresse",
    title: "Gerenciamento de Estresse Acadêmico",
    category: "Otimização e Tracking",
    categorySlug: "otimizacao-tracking",
    sectionNumber: 10,
    description: "Técnicas baseadas em evidência para gerenciar estresse e burnout",
    estimatedTime: "8 min",
    evidenceLevel: "Alta",
    difficulty: "Iniciante",
    tags: ["estresse", "burnout", "bem-estar", "mindfulness"],
    aiRecommended: "chatgpt",
    prompt: `# PAPEL
Você é psicólogo especializado em saúde mental de estudantes de medicina.

# TAREFA
Crie guia de gerenciamento de estresse para estudante de medicina.

# FORMATO DE SAÍDA

## 1. IDENTIFICAÇÃO DE ESTRESSORES
### Acadêmicos
- Carga de provas
- Volume de conteúdo
- Plantões
- Prazos

### Pessoais
- Sono
- Alimentação
- Relacionamentos
- Finanças

## 2. TÉCNICAS IMEDIATAS (5 min)

### Respiração 4-7-8
1. Inspire por 4 segundos
2. Segure por 7 segundos
3. Expire por 8 segundos
4. Repita 3x

### Grounding (5-4-3-2-1)
- 5 coisas que você VÊ
- 4 coisas que você TOCA
- 3 coisas que você OUVE
- 2 coisas que você CHEIRA
- 1 coisa que você SABOREIA

## 3. ROTINA DE PREVENÇÃO

### Diário
- 7-8h de sono
- 30 min exercício
- Pausas a cada 90 min
- Alimentação regular

### Semanal
- 1 atividade prazerosa
- Conexão social
- Tempo na natureza

## 4. SINAIS DE ALERTA
Procure ajuda se:
- Dificuldade persistente de sono
- Perda de interesse nas atividades
- Pensamentos negativos recorrentes
- Isolamento social

## 5. RECURSOS
- CAPS/Apoio psicológico da faculdade
- CVV: 188
- Grupos de apoio entre estudantes`
  }
];
