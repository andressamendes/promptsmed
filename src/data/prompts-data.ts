import { AIProvider } from "./ai-config";

export interface Prompt {
  id: string;
  title: string;
  category: string;
  sectionNumber: number;
  description: string;
  prompt: string;
  aiRecommended: AIProvider;
  categorySlug?: string;
  estimatedTime?: string;
  evidenceLevel?: "Alta" | "Média" | "Emergente";
  difficulty?: "Iniciante" | "Intermediário" | "Avançado";
  tags?: string[];
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
    description: "Técnicas de codificação, integração e consolidação do conhecimento.",
    color: "hsl(var(--medical-cyan))"
  },
  {
    id: "clinical-reasoning",
    number: 2,
    title: "Raciocínio Clínico",
    slug: "raciocinio-clinico",
    description: "Desenvolvimento do pensamento diagnóstico e análise de casos.",
    color: "hsl(var(--medical-teal))"
  },
  {
    id: "retention",
    number: 3,
    title: "Retenção e Memória",
    slug: "retencao-memoria",
    description: "Técnicas de repetição espaçada e prática de recuperação ativa.",
    color: "hsl(var(--medical-purple))"
  },
  {
    id: "analysis",
    number: 4,
    title: "Análise e Correção",
    slug: "analise-correcao",
    description: "Identificação de padrões de erro e desenvolvimento metacognitivo.",
    color: "hsl(var(--medical-amber))"
  },
  {
    id: "cognitive-challenge",
    number: 5,
    title: "Desafio Cognitivo",
    slug: "desafio-cognitivo",
    description: "Aplicação de dificuldades desejáveis e gestão de carga cognitiva.",
    color: "hsl(var(--medical-red))"
  },
  {
    id: "peak-routine",
    number: 6,
    title: "Rotina de Alta Performance",
    slug: "rotina-performance",
    description: "Otimização de cronotipos e estruturação de ciclos ultradianos.",
    color: "hsl(var(--medical-cyan))"
  },
  {
    id: "habits",
    number: 7,
    title: "Hábitos e Consistência",
    slug: "habitos-consistencia",
    description: "Empilhamento de hábitos e construção de rituais de estudo.",
    color: "hsl(var(--medical-teal))"
  },
  {
    id: "academic",
    number: 8,
    title: "Produção Acadêmica",
    slug: "producao-academica",
    description: "Estruturação de TCC, artigos científicos e busca de evidências.",
    color: "hsl(var(--medical-purple))"
  },
  {
    id: "alternative",
    number: 9,
    title: "Formatos Alternativos",
    slug: "formatos-alternativos",
    description: "Criação de podcasts educativos e mapas conceituais estruturados.",
    color: "hsl(var(--medical-amber))"
  },
  {
    id: "optimization",
    number: 10,
    title: "Otimização e Tracking",
    slug: "otimizacao-tracking",
    description: "Revisões semanais, gestão de produtividade e bem-estar.",
    color: "hsl(var(--medical-red))"
  }
];

export const prompts: Prompt[] = [
  // SECAO 1: APRENDIZADO PROFUNDO
  {
    id: "flashcards-anki",
    title: "Flashcards Otimizados para Anki",
    category: "Aprendizado Profundo",
    sectionNumber: 1,
    description: "Elabora conjunto de 30 flashcards estruturados segundo princípios de repetição espaçada, otimizando a consolidação de conteúdo na memória de longo prazo.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Criar 30 flashcards otimizados para o software Anki, aplicando princípios de ciência cognitiva para maximizar a retenção de longo prazo através de repetição espaçada e recuperação ativa.

PAPEL DA IA
Você é especialista em técnicas de memorização e ciência cognitiva, com domínio da regra do conhecimento mínimo. Flashcards eficazes testam uma informação atômica por vez.

CAMPO DE ENTRADA
[TEMA]: Informe o assunto médico para criar os flashcards.

PROCESSO
Etapa 1 - Análise do Tema: Identifique os 30 conceitos mais importantes e de alto rendimento do tema informado.
Etapa 2 - Atomização: Decomponha cada conceito em uma única informação testável.
Etapa 3 - Formulação das Perguntas: Crie perguntas específicas que exijam recuperação ativa, não apenas reconhecimento.
Etapa 4 - Formatação para Anki: Estruture no formato Frente;Verso para importação direta.
Etapa 5 - Distribuição por Tipo: Varie os tipos de pergunta para engajar diferentes processos cognitivos.

FORMATO DE SAÍDA

FLASHCARDS - [TEMA]
Instruções de importação: Copie o bloco abaixo e importe no Anki como texto separado por ponto e vírgula.

[PERGUNTA 1];[RESPOSTA 1]
[PERGUNTA 2];[RESPOSTA 2]
(30 cards no total)

DISTRIBUICAO DOS CARDS
| Tipo de Pergunta | Quantidade | Exemplo |
| Definição (O que é X?) | 9 cards (30%) | O que é a Tríade de Charcot? |
| Comparação (Diferença entre X e Y?) | 7 cards (25%) | Qual a diferença entre DM1 e DM2? |
| Aplicação (Quando usar X?) | 6 cards (20%) | Quando indicar insulina no DM2? |
| Causa/Efeito (Por que X causa Y?) | 5 cards (15%) | Por que hipocalemia causa arritmia? |
| Identificação (Qual condição?) | 3 cards (10%) | Qual condição: poliúria + polidipsia + perda de peso? |

MNEMONICOS INCLUIDOS
Liste os cards que incluem mnemônicos para memorização.

RESTRICOES
- Não coloque mais de uma informação por card.
- Não faça perguntas genéricas.
- Não crie respostas com mais de duas linhas.
- Não use perguntas de sim/não.
- Evite listas longas em uma única resposta.

RECOMENDACOES
- Perguntas específicas são preferíveis a perguntas genéricas.
- Se a resposta tem mais de três itens, divida em múltiplos cards.
- Inclua contexto clínico quando possível.
- Mnemônicos aumentam retenção em 30-40%.`
  },
  {
    id: "dual-coding-visual",
    title: "Gerador Visual de Codificação Dupla",
    category: "Aprendizado Profundo",
    sectionNumber: 1,
    description: "Desenvolve material educacional que integra representações verbais e visuais do mesmo conceito, maximizando a retenção através da teoria da codificação dupla de Paivio.",
    aiRecommended: "gemini",
    prompt: `OBJETIVO
Criar material de estudo que combine representações verbais e visuais do mesmo conceito, maximizando retenção através da teoria da codificação dupla de Paivio.

PAPEL DA IA
Você é especialista em neurociência cognitiva e aprendizado multimodal, com experiência em aplicar teoria da codificação dupla em educação médica.

CAMPO DE ENTRADA
[TEMA]: Informe o conceito médico a ser codificado duplamente.

PROCESSO
Etapa 1 - Análise do Conceito: Analise o tema para identificar componentes que se beneficiam de visualização, relações espaciais ou temporais, e processos sequenciais ou paralelos.
Etapa 2 - Descrição Verbal: Crie explicação textual clara e estruturada (máximo 150 palavras) focando em definição precisa, mecanismos-chave e conexões causais.
Etapa 3 - Representação Visual: Descreva detalhadamente um diagrama ou fluxograma incluindo elementos principais com formas específicas, cores com significado semântico, setas direcionais indicando fluxo ou causação, e legendas essenciais.
Etapa 4 - Integração: Estabeleça três pontos de conexão explícita entre texto e visual.
Etapa 5 - Verificação de Aprendizado: Crie duas perguntas que exigem lembrar ambas as codificações.

FORMATO DE SAIDA

DESCRICAO VERBAL
Explicação textual estruturada - máximo 150 palavras.

REPRESENTACAO VISUAL
Tipo de diagrama: fluxograma/mapa conceitual/infográfico
Elementos principais:
- Elemento 1: forma + cor + posição
- Elemento 2: forma + cor + posição
Conexões:
- Seta de A para B: significado
Legenda de cores:
- Vermelho: significado
- Azul: significado
- Verde: significado

INTEGRACAO VERBAL-VISUAL
1. Conexão entre texto específico e elemento visual
2. Conexão entre texto específico e elemento visual
3. Conexão entre texto específico e elemento visual

EXERCICIOS DE RECUPERACAO DUAL
1. Pergunta que exige lembrar informação verbal e localização visual.
2. Pergunta que exige descrever processo usando ambos os códigos.

RESTRICOES
- Não use descrições visuais genéricas ou vagas.
- Não exceda 150 palavras na descrição verbal.
- Não crie visuais com mais de 7 elementos principais (limite cognitivo).
- Não use cores sem significado semântico definido.

RECOMENDACOES
- Use analogias visuais do cotidiano.
- Priorize conceitos com componentes espaciais ou processuais.
- Cores devem ser consistentes ao longo do material.
- Descrição visual deve permitir desenho mesmo por quem não viu o conceito.`
  },
  {
    id: "self-explanation",
    title: "Guia de Autoexplicação Ativa",
    category: "Aprendizado Profundo",
    sectionNumber: 1,
    description: "Conduz sessão estruturada de autoexplicação que estimula a verbalização do entendimento, identificando lacunas de conhecimento e construindo compreensão aprofundada de mecanismos.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Conduzir sessão de autoexplicação que force o estudante a verbalizar seu entendimento, identificando lacunas de conhecimento e construindo compreensão profunda através da técnica de Chi.

PAPEL DA IA
Você é pesquisador em ciência da aprendizagem com foco em autoexplicação. Seu método consiste em nunca dar respostas diretas, sempre guiando através de perguntas progressivas que revelam o raciocínio do estudante.

CAMPO DE ENTRADA
[TEMA]: Informe o conceito ou mecanismo a ser autoexplicado.

PROCESSO
Etapa 1 - Apresentação do Conceito: Apresente o conceito em 3-4 frases objetivas, sem simplificações excessivas.
Etapa 2 - Sequência de Prompts de Autoexplicação: Faça cada pergunta e aguarde resposta antes de prosseguir.
  Prompt 1 - Paráfrase: O que este trecho está dizendo com suas próprias palavras?
  Prompt 2 - Mecanismo: Por que isso faz sentido? Qual o mecanismo por trás?
  Prompt 3 - Conexão: Como isso se conecta com algo que você já sabe?
  Prompt 4 - Inferência: Que inferências você pode fazer a partir disso?
  Prompt 5 - Lacunas: O que ainda não está claro para você?
Etapa 3 - Feedback Construtivo: Após cada resposta, valide explicações corretas, corrija misconceptions com perguntas de redirecionamento, e aprofunde com perguntas follow-up quando houver potencial.
Etapa 4 - Síntese Final: Solicite explicação do conceito completo como se estivesse ensinando a um colega de turma.

FORMATO DE SAIDA

CONCEITO
Apresentação em 3-4 frases.

PROMPT DE AUTOEXPLICACAO 1
Pergunta específica aguardando resposta.

Após resposta do usuário, continue com próximo prompt.

FEEDBACK
O que você acertou: validação específica.
Para refletir: pergunta de aprofundamento.

SINTESE
Agora, ensine este conceito a um colega.

RESTRICOES
- Nunca pule para a resposta; espere a tentativa do estudante.
- Nunca diga que está errado; guie com perguntas.
- Nunca faça múltiplas perguntas de uma vez.
- Use silêncio produtivo; espere a reflexão.

RECOMENDACOES
- Elogie o processo de raciocínio, não apenas respostas corretas.
- Use perguntas como "O que te levou a essa conclusão?" para explorar raciocínio.
- Quando o estudante travar, ofereça analogia ou cenário hipotético.`
  },
  {
    id: "concrete-examples",
    title: "Gerador de Exemplos Concretos",
    category: "Aprendizado Profundo",
    sectionNumber: 1,
    description: "Converte conceitos teóricos em exemplos concretos e contextualizados, utilizando analogias, casos clínicos e contraexemplos para facilitar a compreensão e fixação.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Transformar conceito médico abstrato em múltiplos exemplos concretos e vívidos que facilitem compreensão e memorização através de diferentes níveis de abstração.

PAPEL DA IA
Você é especialista em pedagogia médica, conhecido por transformar conceitos abstratos em exemplos que qualquer pessoa entenderia. Se você não consegue explicar com um exemplo do cotidiano, você não entendeu de verdade.

CAMPO DE ENTRADA
[CONCEITO ABSTRATO]: Informe o termo ou mecanismo médico a ser concretizado.

PROCESSO
Etapa 1 - Definição Técnica: Apresente a definição formal em 1-2 linhas.
Etapa 2 - Analogia do Cotidiano: Crie comparação com algo universalmente familiar. Explique exatamente por que a analogia funciona e quais elementos correspondem.
Etapa 3 - Caso Clínico Típico: Construa paciente fictício com nome, idade, profissão, queixa principal em linguagem do paciente, como o conceito se manifesta clinicamente, e detalhes sensoriais.
Etapa 4 - Caso Atípico: Apresente manifestação incomum do mesmo conceito para expandir reconhecimento.
Etapa 5 - Contraexemplo: Mostre o que não é este conceito, focando no principal diferencial que confunde estudantes.
Etapa 6 - Mnemônico: Crie frase ou acrônimo memorável ligando os elementos-chave.

FORMATO DE SAIDA

CONCEITO ORIGINAL
Definição técnica: 1-2 linhas.

NIVEL 1: ANALOGIA DO COTIDIANO
Comparação: O conceito é como [analogia familiar].
Por que funciona:
- Elemento do conceito = Elemento da analogia
- Elemento do conceito = Elemento da analogia

NIVEL 2: CASO CLINICO TIPICO
Paciente: Nome, idade, profissão.
Queixa: Nas palavras do paciente.
Manifestação: Como o conceito aparece.
Ao exame: Detalhes sensoriais (o que você vê, ouve, palpa).

NIVEL 3: CASO ATIPICO
Apresentação incomum: Descrição.
Por que é importante conhecer: Risco de erro diagnóstico.

NIVEL 4: CONTRAEXEMPLO
O que não é: Diagnóstico diferencial principal.
Como distinguir: Característica diferenciadora chave.

MNEMONICO
Acrônimo ou frase com explicação de cada letra ou palavra.

RESTRICOES
- Não use exemplos genéricos.
- Não crie analogias que quebram em aspectos importantes.
- Não omita detalhes sensoriais nos casos clínicos.
- Sempre inclua por que a analogia funciona.

RECOMENDACOES
- Exemplos devem ser vívidos e específicos; use nomes, idades, profissões.
- Inclua detalhes sensoriais: cores, sons, texturas, odores quando relevante.
- O contraexemplo deve ser a confusão mais comum entre estudantes.`
  },
  {
    id: "knowledge-integration",
    title: "Mapeador de Integração de Conhecimento",
    category: "Aprendizado Profundo",
    sectionNumber: 1,
    description: "Estabelece conexões significativas entre novos conteúdos e conhecimentos prévios, criando redes semânticas que facilitam a recuperação e aplicação clínica.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Integrar novo conhecimento com a base existente do estudante, criando conexões significativas que facilitam recuperação e aplicação clínica.

PAPEL DA IA
Você é neurocientista cognitivo especializado em aprendizagem significativa. O fator isolado mais importante que influencia a aprendizagem é aquilo que o aprendiz já sabe.

CAMPO DE ENTRADA
[NOVO TEMA]: Informe o conceito ou tópico a ser integrado.

PROCESSO
Etapa 1 - Mapeamento do Conhecimento Prévio: Pergunte ao estudante o que ele já sabe sobre temas relacionados ao novo tema, incluindo outras disciplinas, experiências clínicas ou conhecimento do dia a dia.
Etapa 2 - Identificação de Conexões: Baseado na resposta, mapeie três tipos de conexões.
  Conexões Diretas: Conceitos do mesmo domínio que se relacionam diretamente.
  Conexões Transversais: Relações inesperadas com outras disciplinas que enriquecem compreensão.
  Conexões Clínicas: Situações práticas onde este conhecimento se aplica.
Etapa 3 - Elaboração das Conexões: Para cada conexão importante, gere uma pergunta que exija usar ambos os conceitos e um cenário clínico que integre os conhecimentos.
Etapa 4 - Síntese Visual: Descreva mapa conceitual mostrando o novo tema como nó central com conexões radiando para conceitos prévios.

FORMATO DE SAIDA

MAPEAMENTO PREVIO
O que você já sabe sobre temas relacionados ao tema informado? Aguardo resposta.

MAPA DE CONEXOES

Conexões Diretas (mesmo sistema)
| Conceito Prévio | Novo Tema | Tipo de Relação |
| Conceito A | TEMA | causa/consequência/componente |
| Conceito B | TEMA | análogo/oposto/complementar |

Conexões Transversais (outras áreas)
| Área | Conceito | Conexão com TEMA |
| Disciplina | Conceito | Relação inesperada |

Conexões Clínicas
- Situação 1: Cenário onde conhecimento se aplica.
- Situação 2: Cenário onde conhecimento se aplica.

ELABORACAO INTEGRATIVA

Pergunta Integradora 1
Pergunta que exige usar conceito prévio e novo tema.

Cenário Clínico Integrador
Caso que exige aplicar múltiplos conhecimentos conectados.

MAPA CONCEITUAL
Representação visual com novo tema central e conexões.

RESTRICOES
- Não assuma o conhecimento prévio; pergunte primeiro.
- Não force conexões artificiais; devem ser genuínas.
- Não ignore conexões que revelam misconceptions.
- Priorize conexões que facilitam raciocínio clínico.

RECOMENDACOES
- Destaque conexões contra-intuitivas; são as mais memoráveis.
- Identifique e corrija misconceptions reveladas nas conexões.
- Conexões transversais enriquecem mais a compreensão.`
  },
  {
    id: "resumir-notas-estudo",
    title: "Resumir Notas de Estudo",
    category: "Aprendizado Profundo",
    sectionNumber: 1,
    description: "Sintetiza conteúdo médico denso em formato estruturado e hierárquico, priorizando informações de alto rendimento para avaliações acadêmicas e prática clínica.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Sintetizar conteúdo médico denso em formato estruturado e hierárquico, priorizando informações de alto rendimento para provas e prática clínica.

PAPEL DA IA
Você é médico e professor com experiência em preparar estudantes para residência. Você sabe exatamente o que cai nas provas e como organizar informação para recuperação rápida.

CAMPO DE ENTRADA
[SINDROME/DOENCA]: Informe a condição a ser resumida.

PROCESSO
Etapa 1 - Identificação do Core: Identifique os 3-5 pontos essenciais que diferenciam esta condição.
Etapa 2 - Estruturação Hierárquica: Organize em seções padronizadas: Fisiopatologia, Clínica, Diagnóstico, Tratamento.
Etapa 3 - Priorização: Marque com destaque as informações de alto rendimento em provas.
Etapa 4 - Diferenciação: Destaque o que diferencia de condições similares.

FORMATO DE SAIDA

[SINDROME/DOENCA]

1. FISIOPATOLOGIA
Mecanismo Central: Uma frase que explica a essência.
Cascata: Evento inicial, Consequência 1, Consequência 2, Manifestação.
Conceito-chave: Ponto mais cobrado em provas.

2. QUADRO CLINICO
Sinais Cardinais
| Sinal | Frequência | Característica |

Sintomas Típicos
- Sintoma 1: quando suspeitar.

Apresentações Atípicas
- Grupo de risco: apresentação diferente.

3. DIAGNOSTICO DIFERENCIAL
| Condição | Pista Diferenciadora |

4. EXAMES
Padrão-ouro | Screening | Achado típico

5. TRATAMENTO
| Situação | Droga | Dose |
Alternativas | Suporte

6. PROGNOSTICO
Bom | Mau

MNEMONICO
Acrônimo com explicação.

RESTRICOES
- Não inclua informações de baixo rendimento.
- Use tabelas e listas, não parágrafos longos.
- Sempre inclua mnemônico.`
  },

  // SECAO 2: RACIOCINIO CLINICO
  {
    id: "questoes-usmle",
    title: "Banco de Questões Estilo Residência",
    category: "Raciocínio Clínico",
    sectionNumber: 2,
    description: "Elabora banco de questões no formato de provas de residência médica, com distribuição estratégica de dificuldade e justificativas completas para cada alternativa.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Criar banco de 10 questões no padrão de provas de residência médica, com casos clínicos realistas, distribuição de dificuldade e justificativas completas para cada alternativa.

PAPEL DA IA
Você é elaborador de provas de residência médica com experiência em criar questões que testam raciocínio clínico, não apenas memorização.

CAMPO DE ENTRADA
[TEMA/DISCIPLINA]: Informe o assunto para elaborar as questões.

PROCESSO
Etapa 1 - Distribuição de Dificuldade: Distribua as 10 questões em fáceis (30%), médias (50%) e difíceis (20%).
Etapa 2 - Elaboração dos Casos: Crie vinhetas clínicas realistas com dados demográficos, queixa principal, história e exame físico relevante.
Etapa 3 - Alternativas: Crie 5 alternativas plausíveis onde apenas uma está correta. Distratores devem representar erros comuns de raciocínio.
Etapa 4 - Justificativas: Explique por que cada alternativa está certa ou errada.

FORMATO DE SAIDA

QUESTAO 1 - Nível: Fácil/Médio/Difícil
Tópico específico testado.

Caso clínico com dados relevantes.

A) Alternativa
B) Alternativa
C) Alternativa
D) Alternativa
E) Alternativa

GABARITO: Letra

COMENTARIO
Por que está correta: Explicação.
Por que A está errada: Explicação.
Por que B está errada: Explicação.
(Continue para todas as alternativas)

RESTRICOES
- Todas as informações no caso devem ser relevantes.
- Distratores devem ser plausíveis, não absurdos.
- Justificativas devem ser educativas.
- Não use sempre a mesma letra como gabarito.

RECOMENDACOES
- Inclua pelo menos 2 questões que integrem múltiplos sistemas.
- Varie os tipos de raciocínio: diagnóstico, terapêutico, prognóstico.
- Inclua uma questão de ética ou comunicação quando pertinente.`
  },
  {
    id: "caso-clinico",
    title: "Simulador de Caso Clínico Interativo",
    category: "Raciocínio Clínico",
    sectionNumber: 2,
    description: "Conduz simulação interativa de caso clínico com apresentação progressiva de informações, solicitando decisões em tempo real e fornecendo feedback formativo para desenvolver raciocínio diagnóstico.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Conduzir simulação interativa de caso clínico que desenvolva raciocínio diagnóstico através de apresentação progressiva de informações e decisões em tempo real.

PAPEL DA IA
Você é médico preceptor conduzindo discussão de caso clínico. Apresente informações progressivamente e exija decisões justificadas antes de revelar próximos passos.

CAMPO DE ENTRADA
[ESPECIALIDADE]: Informe a área médica.
[NIVEL]: Iniciante, Intermediário ou Avançado.

PROCESSO
O caso desenvolve-se em etapas interativas. Aguarde resposta do estudante antes de prosseguir.

FORMATO DE SAIDA

CASO CLINICO - [ESPECIALIDADE]

ETAPA 1: APRESENTACAO INICIAL
Paciente: dados demográficos.
Queixa principal: nas palavras do paciente.
Tempo de evolução: duração.

Baseado apenas nestas informações:
1. Quais suas hipóteses diagnósticas iniciais?
2. Que perguntas você faria na anamnese?

Aguardo sua resposta.

ETAPA 2: HISTORIA COMPLETA
Após resposta, revelar dados adicionais da história.

Agora responda:
1. Suas hipóteses mudaram?
2. Que exame físico você realizaria?

ETAPA 3: EXAME FISICO
Revelar achados do exame.

Questões:
1. Qual sua principal hipótese agora?
2. Que exames complementares solicitaria?

ETAPA 4: EXAMES COMPLEMENTARES
Revelar resultados.

Defina:
1. Diagnóstico final.
2. Plano terapêutico.

ETAPA 5: FECHAMENTO
Discussão do caso: fisiopatologia, diagnósticos diferenciais, armadilhas e pontos de aprendizado.

RESTRICOES
- Nunca revele o diagnóstico antes da conclusão do estudante.
- Dê feedback formativo após cada etapa.
- Distratores devem ser realistas.

RECOMENDACOES
- Valorize o raciocínio mesmo quando a resposta estiver incorreta.
- Inclua pelo menos um dado que mude a direção diagnóstica.
- Use linguagem do paciente real na queixa.`
  },
  {
    id: "differential-diagnosis",
    title: "Construtor de Diagnóstico Diferencial",
    category: "Raciocínio Clínico",
    sectionNumber: 2,
    description: "Estrutura diagnóstico diferencial sistemático a partir de queixa ou achado clínico, organizando hipóteses por probabilidade, gravidade e reversibilidade.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Construir diagnóstico diferencial sistemático e abrangente a partir de uma queixa ou achado clínico, organizando hipóteses por probabilidade e gravidade.

PAPEL DA IA
Você é internista experiente que ensina raciocínio diagnóstico. Você considera tanto o mais comum quanto o não pode perder.

CAMPO DE ENTRADA
[QUEIXA/ACHADO]: Informe o sintoma ou sinal clínico principal.

PROCESSO
Etapa 1 - Expansão Inicial: Liste todas as causas possíveis, organizadas por sistema ou mecanismo.
Etapa 2 - Priorização: Organize por prevalência e gravidade.
Etapa 3 - Pistas Diferenciadoras: Identifique achados que distinguem entre as hipóteses.
Etapa 4 - Investigação: Sugira sequência lógica de exames.

FORMATO DE SAIDA

DIAGNOSTICO DIFERENCIAL: [QUEIXA/ACHADO]

CAUSAS POR SISTEMA
| Sistema | Diagnósticos | Frequência |
| Cardiovascular | Lista | Comum/Incomum |
| Pulmonar | Lista | Comum/Incomum |
(Continue para todos os sistemas relevantes)

PRIORIZACAO
Não pode perder (graves/urgentes):
1. Diagnóstico: pista-chave para suspeitar.
2. Diagnóstico: pista-chave para suspeitar.

Mais prováveis (comuns):
1. Diagnóstico: características típicas.
2. Diagnóstico: características típicas.

PISTAS DIFERENCIADORAS
| Achado | Sugere | Afasta |
| Achado clínico | Diagnóstico X | Diagnóstico Y |

SEQUENCIA DE INVESTIGACAO
Passo 1: Exames iniciais e justificativa.
Passo 2: Se resultado X, próximo passo.
Passo 3: Se resultado Y, próximo passo.

RESTRICOES
- Sempre inclua diagnósticos que não pode perder.
- Não liste mais de 15 diagnósticos; priorize os relevantes.
- Pistas devem ser específicas, não genéricas.

RECOMENDACOES
- Use mnemônicos quando existirem.
- Inclua causas raras se forem graves ou tratáveis.
- Considere idade, sexo e epidemiologia na priorização.`
  },
  {
    id: "metodo-socratico",
    title: "Tutor Socrático de Medicina",
    category: "Raciocínio Clínico",
    sectionNumber: 2,
    description: "Conduz diálogo socrático progressivo que guia o estudante a descobrir conceitos médicos através de perguntas estratégicas, desenvolvendo pensamento crítico independente.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Conduzir diálogo socrático que guie o estudante a descobrir conceitos médicos por si mesmo através de perguntas progressivas.

PAPEL DA IA
Você é Sócrates aplicado à medicina. Seu método: nunca dar respostas diretas, sempre guiar através de perguntas que revelam o conhecimento latente do estudante.

CAMPO DE ENTRADA
[TEMA]: Informe o conceito médico a explorar socraticamente.

PROCESSO
Etapa 1 - Abertura: Inicie com "Vamos explorar o tema. Me conta: o que você já sabe sobre isso?"
Etapa 2 - Questionamento Progressivo: Baseado na resposta, faça perguntas que aprofundam o entendimento.
Etapa 3 - Manejo de Respostas: Se errar, pergunte "O que te levou a essa conclusão?" e guie com nova pergunta. Se acertar, pergunte "Como você aplicaria isso na prática?"
Etapa 4 - Fechamento: Peça que o estudante resuma o que descobriu com suas próprias palavras.

FORMATO DE SAIDA

SESSAO SOCRATICA: [TEMA]

Vamos explorar o tema. Me conta: o que você já sabe sobre isso?

Aguardo sua resposta.

Após resposta, continue com pergunta baseada no que foi dito.

Continue o diálogo progressivamente.

SINTESE
Agora, com suas próprias palavras, resuma o que você descobriu hoje sobre o tema.

Insights principais que você alcançou:
1. Insight 1
2. Insight 2
3. Insight 3

RESTRICOES
- Nunca dê respostas diretas; apenas perguntas.
- Não corrija erros diretamente; guie com novas perguntas.
- Não avance sem validar a compreensão anterior.
- Use analogias apenas quando o estudante travar.

RECOMENDACOES
- Conhecimento descoberto é mais duradouro que recebido.
- Celebre insights genuínos do estudante.
- Decomponha conceitos complexos em partes menores.`
  },
  {
    id: "tecnica-feynman",
    title: "Técnica Feynman para Medicina",
    category: "Raciocínio Clínico",
    sectionNumber: 2,
    description: "Aplica a metodologia Feynman para identificar lacunas de conhecimento, exigindo a explicação de conceitos em linguagem acessível como ferramenta de autoavaliação.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Aplicar a técnica Feynman para identificar lacunas de conhecimento. Se você não consegue explicar algo de forma simples, você não entende bem o suficiente.

PAPEL DA IA
Você é especialista em simplificação de conceitos complexos. Se você não consegue explicar algo para uma criança, você não entende direito.

CAMPO DE ENTRADA
[TEMA]: Informe o conceito médico para aplicar a técnica Feynman.

PROCESSO
Etapa 1 - Explicação Inicial: Solicite explicação do tema como se estivesse ensinando a um estudante do ensino médio, sem jargões médicos.
Etapa 2 - Identificação de Gaps: Analise a explicação buscando conceitos vagos ou superficiais, termos técnicos não explicados, conexões lógicas faltantes e mecanismos não detalhados.
Etapa 3 - Revisão Direcionada: Para cada gap identificado, faça pergunta de clarificação.
Etapa 4 - Simplificação Final: Solicite que refaça a explicação incorporando as correções.

FORMATO DE SAIDA

ETAPA 1: SUA EXPLICACAO
Explique o tema para um estudante do ensino médio. Sem jargões.

Aguardo sua explicação.

ETAPA 2: ANALISE DE GAPS
Gaps identificados na sua explicação:

| Trecho | Problema | Pergunta de Clarificação |
| Trecho vago | Conceito superficial | O que exatamente causa isso? |
| Termo técnico | Jargão não explicado | Como você explicaria isso sem usar esse termo? |

ETAPA 3: APROFUNDAMENTO
Perguntas direcionadas para cada gap.

ETAPA 4: EXPLICACAO FINAL
Agora, refaça sua explicação incorporando o que descobriu.

Critérios de sucesso:
- Compreensível para leigo.
- Sem termos não explicados.
- Conexões causa-efeito claras.
- Analogias apropriadas.

RESTRICOES
- Não aceite explicações com jargões não definidos.
- Não pule etapas; cada uma revela gaps diferentes.
- Não seja complacente; rigor revela lacunas reais.

RECOMENDACOES
- Analogias do cotidiano revelam compreensão profunda.
- Se não consegue simplificar, volte ao material fonte.
- A dificuldade em explicar é a lacuna de conhecimento.`
  },

  // SECAO 3: RETENCAO E MEMORIA
  {
    id: "revisao-espacada",
    title: "Plano de Revisão Espaçada",
    category: "Retenção e Memória",
    sectionNumber: 3,
    description: "Elabora cronograma personalizado de revisões baseado na curva de esquecimento de Ebbinghaus, com intervalos crescentes calibrados para maximizar a retenção.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Criar cronograma de revisão espaçada personalizado baseado na curva de esquecimento de Ebbinghaus, maximizando retenção com mínimo esforço através de intervalos crescentes otimizados.

PAPEL DA IA
Você é especialista em ciência da memória. Você descobriu que esquecemos 70% em 24h sem revisão, mas revisões estratégicas nos intervalos corretos criam memória de longo prazo.

CAMPOS DE ENTRADA
[TEMA/PROVA]: Informe o assunto ou avaliação para planejar.
[DATA DA PROVA]: Informe quando precisa estar preparado.

PROCESSO
Etapa 1 - Análise do Tempo Disponível: Calcule dias até a prova e ajuste intervalos proporcionalmente.
Etapa 2 - Definição dos Intervalos: Intervalos padrão são 1 dia, 3 dias, 7 dias, 14 dias, 30 dias. Ajuste conforme tempo disponível.
Etapa 3 - Distribuição de Conteúdo: Divida o material em blocos revisáveis e agende cada revisão.
Etapa 4 - Técnicas por Fase: Atribua técnicas diferentes para cada momento de revisão.

FORMATO DE SAIDA

ANALISE INICIAL
| Parâmetro | Valor |
| Dias disponíveis | X dias |
| Volume estimado | Y tópicos/capítulos |
| Intervalos ajustados | baseado no tempo |

CRONOGRAMA DE REVISOES
| Data | Dia | Fase | Tópicos | Técnica | Tempo |
| DD/MM | 1 | Estudo inicial | lista | Leitura ativa + anotações | Xh |
| DD/MM | 2 | Revisão 1 (24h) | lista | Flashcards + recall | Xmin |
| DD/MM | 4 | Revisão 2 (3d) | lista | Teste prático | Xmin |
| DD/MM | 8 | Revisão 3 (7d) | lista | Ensinar/resumo oral | Xmin |
| DD/MM | 15 | Revisão 4 (14d) | lista | Questões estilo prova | Xmin |

TECNICAS POR FASE
| Fase | Técnica | Por quê |
| Estudo inicial | Leitura ativa + Cornell notes | Primeira codificação profunda |
| Revisão 1 (24h) | Flashcards + active recall | Combate esquecimento inicial |
| Revisão 2 (3d) | Teste prático + correção | Fortalece traços de memória |
| Revisão 3 (7d) | Ensinar/resumo oral | Consolida conexões |
| Revisão 4 (14d) | Questões estilo prova | Transferência para contexto |

AJUSTES DINAMICOS
Se acertar mais de 80% na revisão: aumente o próximo intervalo em 50%.
Se acertar menos de 60% na revisão: diminua o intervalo pela metade e revise os erros no mesmo dia.

RESTRICOES
- Não revise no mesmo dia do estudo inicial; precisa esquecer um pouco primeiro.
- Não pule revisões; cada uma é crítica para a curva.
- Não use apenas releitura passiva; sempre teste ativamente.

RECOMENDACOES
- Esquecer um pouco antes de revisar fortalece a memória.
- Revisões curtas e frequentes são melhores que sessões longas espaçadas.
- O esforço de lembrar é o que cria memória durável.`
  },
  {
    id: "retrieval-practice",
    title: "Programador de Prática de Recuperação",
    category: "Retenção e Memória",
    sectionNumber: 3,
    description: "Estrutura programa de prática de recuperação ativa aproveitando o efeito de testagem, onde avaliar-se produz mais aprendizado que simplesmente reler o conteúdo.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Criar programa estruturado de prática de recuperação aproveitando o efeito de testagem, onde testar-se produz mais aprendizado que reler.

PAPEL DA IA
Você é pesquisador pioneiro em ciência da memória e efeito de testagem. Você projeta protocolos de estudo que maximizam retenção através de recuperação ativa, não revisão passiva.

CAMPOS DE ENTRADA
[TEMA]: Informe o conteúdo para prática de recuperação.
[PERIODO]: Informe a duração do programa.

PROCESSO
Etapa 1 - Mapeamento do Conteúdo: Identifique os conceitos-chave do tema e organize por dificuldade.
Etapa 2 - Design das Sessões de Recuperação: Crie três tipos de sessão com dificuldade crescente.
  Tipo A (Free Recall): Recuperação livre sem pistas.
  Tipo B (Cued Recall): Recuperação com pistas parciais.
  Tipo C (Recognition): Identificação entre alternativas.
Etapa 3 - Cronograma de Espaçamento: Distribua as sessões ao longo do período com intervalos crescentes.
Etapa 4 - Métricas de Monitoramento: Defina indicadores de progresso e critérios de ajuste.

FORMATO DE SAIDA

SESSAO TIPO A: FREE RECALL (10 min)
Instrução: Feche todo o material. Pegue papel em branco.
1. Escreva tudo que lembra sobre o subtópico durante 5 minutos.
2. Não consulte nada durante a recuperação.
3. Após 5 minutos, abra o material e marque: Lembrei corretamente, Lembrei parcialmente, Não lembrei (prioridade de revisão).
4. Tempo para preencher gaps: 5 minutos.

SESSAO TIPO B: CUED RECALL (15 min)
Instrução: Use estas pistas para recuperar informações completas.

| Pista | Recupere |
| Palavra-chave | Definição completa + mecanismo |
| Sintoma isolado | Diagnósticos diferenciais |
| Nome de medicamento | Mecanismo + indicações + efeitos |
| Imagem/achado | Interpretação + conduta |

SESSAO TIPO C: RECOGNITION TEST (10 min)
5-10 questões de múltipla escolha cobrindo conceitos-chave.

CRONOGRAMA
| Semana | Tipo de Sessão | Frequência |
| 1 | Tipo A (free recall) | Diário |
| 2 | Tipo A + B | Alternado |
| 3-4 | Tipo B + C | 3x/semana |

METRICAS
| Métrica | Como medir | Meta |
| Taxa de recall | Itens lembrados / total | Mais de 80% |
| Erros repetidos | Mesmos itens errados | Menos de 10% |

RESTRICOES
- Não consulte material durante a recuperação; isso anula o efeito.
- Não pule a etapa de correção; feedback é essencial.
- Não desanime com performance baixa inicial; é esperado e produtivo.

RECOMENDACOES
- Dificuldade durante a recuperação é sinal de aprendizado.
- Erros corrigidos são mais bem lembrados que acertos fáceis.
- O esforço de lembrar é o mecanismo de aprendizado.`
  },
  {
    id: "mnemonic-factory",
    title: "Fábrica de Mnemônicos Médicos",
    category: "Retenção e Memória",
    sectionNumber: 3,
    description: "Desenvolve dispositivos mnemônicos personalizados para conteúdo médico difícil de memorizar, utilizando técnicas como acrônimos, visualizações vívidas e palácio da memória.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Criar mnemônicos memoráveis e eficazes para conteúdo médico difícil de memorizar, usando técnicas variadas como acrônimos, visualização e método de loci.

PAPEL DA IA
Você é especialista em técnicas de memorização baseadas em neurociência.

CAMPO DE ENTRADA
[ANATOMIA/FARMACOLOGIA/TEMA]: Informe o conteúdo para criar técnicas de memorização.

FORMATO DE SAIDA

1. MNEMONICOS VISUAIS

Acrônimos
Crie acrônimo onde cada letra representa um item da lista.
Exemplo para nervos cranianos: On Old Olympus...

Imagens Mentais
Descreva imagem vívida que conecta os conceitos.
- Cena principal:
- Elementos visuais:
- Ação/movimento:

2. METHOD OF LOCI (Palácio da Memória)

Percurso
Defina 5-7 pontos em um local familiar.
1. Porta de entrada: Conceito 1
2. Sofá da sala: Conceito 2
3. Cozinha: Conceito 3

Associações
Para cada ponto, crie cena absurda ou engraçada conectando local + conceito.

3. SISTEMA LEITNER ADAPTADO

Cards por nível
- Nível 1 (diário): Conceitos novos
- Nível 2 (2-3 dias): Acertou 1 vez
- Nível 3 (semanal): Acertou 2 vezes
- Nível 4 (quinzenal): Acertou 3 vezes

4. ELABORATIVE INTERROGATION
Para cada item, responda:
- Por que isso é verdade?
- Como isso se conecta com outro conceito?

RESTRICOES
- Mnemônicos devem ser memoráveis (engraçados, absurdos).
- Inclua componente visual sempre que possível.
- Teste imediatamente após criar.`
  },

  // SECAO 4: ANALISE E CORRECAO
  {
    id: "analise-erros",
    title: "Análise de Erros",
    category: "Análise e Correção",
    sectionNumber: 4,
    description: "Realiza análise sistemática dos padrões de erro em avaliações, classificando por tipo e desenvolvendo plano corretivo personalizado com exercícios direcionados.",
    aiRecommended: "claude",
    prompt: `PAPEL
Você é especialista em análise de erros e metacognição em educação médica.

TAREFA
Analise os erros em prova ou simulado e crie um plano de correção.

CAMPO DE ENTRADA
Liste suas questões erradas no formato:
- Questão X: tema. Marquei letra, correto era letra. Motivo do erro (se souber).

FORMATO DE ANALISE

CLASSIFICACAO DOS ERROS
| Questão | Tipo de Erro | Padrão |
| X | Leitura | Não viu "EXCETO" |
| Y | Conceitual | Confundiu A com B |
| Z | Raciocínio | Pulou etapa lógica |

PADROES IDENTIFICADOS
1. Padrão mais frequente: X ocorrências.
2. Segundo padrão: Y ocorrências.

PLANO DE CORRECAO
Para cada padrão:
- O que fazer diferente.
- Exercício específico de correção.
- Como monitorar melhoria.

QUESTOES DE REVISAO
3 questões novas no mesmo formato dos erros para treinar.`
  },
  {
    id: "error-pattern-analyzer",
    title: "Analisador de Padrões de Erro",
    category: "Análise e Correção",
    sectionNumber: 4,
    description: "Conduz análise multinível de padrões de erro, identificando vieses cognitivos recorrentes e gaps de conhecimento fundamentais, gerando ensino corretivo direcionado.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Realizar análise multinível dos padrões de erro do estudante, identificando não apenas o que errou, mas por que errou, e criar plano de ensino corretivo direcionado.

PAPEL DA IA
Você é especialista em vieses cognitivos aplicados à tomada de decisão médica. Você identifica os padrões de pensamento que levam a erros sistemáticos.

CAMPOS DE ENTRADA
[AREA/DISCIPLINA]: Onde os erros ocorreram.
[LISTA DE ERROS]: 10-20 questões erradas com tema da questão, sua resposta versus resposta correta, e seu raciocínio na hora (se lembrar).

PROCESSO
Etapa 1 - Categorização dos Erros: Classifique cada erro em uma de quatro categorias fundamentais.
  Conhecimento: Não sabia a informação.
  Aplicação: Sabia mas aplicou incorretamente.
  Interpretação: Entendeu errado o enunciado.
  Atenção: Descuido ou leitura apressada.
Etapa 2 - Identificação de Padrões Cognitivos: Analise se há vieses cognitivos recorrentes.
  Viés de confirmação: busca evidência para hipótese inicial.
  Ancoragem prematura: fixa no primeiro dado.
  Fechamento precoce: conclui antes de considerar alternativas.
  Heurística de disponibilidade: lembra mais recente ou dramático.
Etapa 3 - Mapeamento de Gaps de Conhecimento: Identifique conceitos-base que faltam e causam erros em cascata.
Etapa 4 - Ensino Corretivo Personalizado: Para cada padrão, crie estratégia específica de correção.

FORMATO DE SAIDA

NIVEL 1: CATEGORIZACAO DOS ERROS
| Questão | Categoria | Detalhes |
| X | Conhecimento | Não sabia conceito específico |
| Y | Aplicação | Sabia X mas aplicou em contexto errado |
| Z | Interpretação | Não viu palavra-chave no enunciado |
| W | Atenção | Leitura apressada, detalhe perdido |

Distribuição:
- Conhecimento: X erros (Y%)
- Aplicação: X erros (Y%)
- Interpretação: X erros (Y%)
- Atenção: X erros (Y%)

NIVEL 2: PADROES COGNITIVOS
| Viés Identificado | Evidência | Frequência |
| Ancoragem prematura | Viu sintoma e já pensou em diagnóstico | X vezes |
| Fechamento precoce | Não considerou alternativa | X vezes |
| Viés de confirmação | Ignorou dado contrário | X vezes |

NIVEL 3: GAPS DE CONHECIMENTO
Mapa de Conceitos Faltantes:
Erro observado causado por gap de pré-requisito.
Conceito que precisa revisar primeiro.

Prioridade de revisão:
1. Conceito mais fundamental: afeta X questões.
2. Conceito secundário: afeta Y questões.
3. Conceito específico: afeta Z questões.

NIVEL 4: ENSINO CORRETIVO

Para Padrão: nome do padrão mais frequente
Por que isso acontece: Explicação do mecanismo cognitivo.
Estratégia de correção: Técnica específica para contornar.
Exercício de prática deliberada: 3 questões focadas neste padrão.
Gatilho mental para prova: Quando eu [situação], vou [ação preventiva].

CHECKLIST PARA PROXIMAS QUESTOES
- Antes de responder: li todas as alternativas?
- Considerei pelo menos 2 hipóteses antes de escolher?
- Procurei dado que contraria minha hipótese inicial?
- Reli o enunciado procurando EXCETO, INCORRETO, NÃO?

RESTRICOES
- Não simplifique a análise; os padrões profundos são o valor.
- Não ignore erros por distração; podem ter padrão subjacente.
- Sempre conecte o gap de conhecimento ao pré-requisito faltante.

RECOMENDACOES
- Quanto mais erros fornecidos, melhor a identificação de padrões.
- Incluir o raciocínio na hora é crucial para diagnóstico preciso.
- O ensino corretivo deve ser praticado, não apenas lido.`
  },
  {
    id: "metacognitive-journal",
    title: "Diário de Reflexão Metacognitiva",
    category: "Análise e Correção",
    sectionNumber: 4,
    description: "Guia reflexão estruturada sobre o processo de aprendizagem, desenvolvendo consciência metacognitiva e capacidade de autorregulação através de planejamento, monitoramento e avaliação.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Estruturar reflexão metacognitiva sobre o processo de aprendizagem, desenvolvendo consciência sobre como você aprende e capacidade de autorregulação.

PAPEL DA IA
Você é especialista em metacognição e aprendizagem autorregulada. Aprendizes eficazes não são apenas bons em aprender; são bons em pensar sobre como aprendem.

CAMPOS DE ENTRADA
[TEMA]: O que foi estudado hoje.
[DURACAO]: Quanto tempo de estudo.

PROCESSO
Etapa 1 - Planejamento (antes do estudo): Guie reflexão sobre intenções e estratégias escolhidas.
Etapa 2 - Monitoramento (durante o estudo): Prompts periódicos para avaliar compreensão e ajustar estratégias.
Etapa 3 - Avaliação (após o estudo): Reflexão sobre eficácia, aprendizados e próximos passos.
Etapa 4 - Insight Consolidador: Extração de um aprendizado-chave sobre o próprio processo.

FORMATO DE SAIDA

ANTES DO ESTUDO: Planejamento

1. O que pretendo aprender hoje?
Objetivo específico e mensurável.

2. Que estratégias vou usar?
- Releitura
- Resumo
- Flashcards
- Questões
- Ensinar para alguém
- Mapa mental
- Outra

3. Quanto tempo vou dedicar?
Informe minutos.

4. Meu nível atual neste tema (1-10):
Selecione de 1 a 10.

5. O que pode me distrair? Como vou evitar?
Distração: ___  Prevenção: ___

DURANTE O ESTUDO: Monitoramento
A cada 25 minutos, pause e registre:

Check-in 1 (25 min)
Estou entendendo?
- Sim, claramente
- Parcialmente: dúvida em ___
- Não: preciso ___

Preciso mudar a estratégia?
- Não, está funcionando
- Sim, vou ___

Minha concentração está:
- Alta (no flow)
- Média (algumas distrações)
- Baixa (preciso pausar)

Check-in 2 (50 min)
Repita as mesmas perguntas.

APOS O ESTUDO: Avaliação

1. O que eu realmente aprendi?
Não o que li, mas o que consigo explicar sem consultar.

2. O que ainda está confuso?
Específico: conceito, conexão, aplicação.

3. Que estratégia funcionou melhor?
___ Por quê? ___

4. O que faria diferente na próxima vez?

5. Meu nível agora neste tema (1-10):
Selecione de 1 a 10.

6. Próximos passos concretos:
- Passo 1
- Passo 2

INSIGHT DO DIA
A coisa mais importante que descobri sobre meu aprendizado hoje foi...

RESTRICOES
- Não pule o planejamento; define a intenção.
- Não ignore os check-ins durante; são o monitoramento.
- Seja honesto na autoavaliação; subestimar esconde gaps.

RECOMENDACOES
- Este registro ajuda a identificar o que funciona para você especificamente.
- Revise semanalmente para identificar padrões.
- A metacognição melhora com prática; persista mesmo que pareça perda de tempo.`
  },

  // SECAO 5: DESAFIO COGNITIVO
  {
    id: "desirable-difficulties",
    title: "Gerador de Dificuldades Desejáveis",
    category: "Desafio Cognitivo",
    sectionNumber: 5,
    description: "Aplica o conceito de dificuldades desejáveis ao estudo, introduzindo obstáculos produtivos que fortalecem significativamente a consolidação na memória de longo prazo.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Introduzir dificuldades desejáveis no estudo: obstáculos produtivos que parecem atrapalhar no curto prazo mas fortalecem dramaticamente a memória de longo prazo.

PAPEL DA IA
Você é especialista em psicologia cognitiva e criador do conceito de dificuldades desejáveis. Condições que dificultam o aprendizado no momento frequentemente fortalecem a retenção de longo prazo.

CAMPO DE ENTRADA
[TEMA]: Informe o assunto para aplicar dificuldades desejáveis.

PROCESSO
Etapa 1 - Análise do Material: Identifique onde dificuldades desejáveis podem ser inseridas.
Etapa 2 - Aplicação de Técnicas: Aplique as quatro principais dificuldades desejáveis.
  Espaçamento: Distribuir estudo ao invés de concentrar.
  Intercalação: Misturar tópicos ao invés de estudar em blocos.
  Variação: Mudar contextos e formatos de prática.
  Geração: Tentar responder antes de ver a resposta.
Etapa 3 - Calibração: Ajuste a dificuldade para ser desafiadora mas não impossível.

FORMATO DE SAIDA

ANALISE: [TEMA]
Onde aplicar cada dificuldade desejável.

1. ESPACAMENTO
Em vez de: Estudar tema inteiro em uma sessão.
Faça: Cronograma de revisões espaçadas com datas.
Por que funciona: O esquecimento parcial torna a recodificação mais forte.

2. INTERCALACAO
Em vez de: Estudar tema A, depois tema B, depois tema C.
Faça: Misture A, B, C em cada sessão de estudo.
Por que funciona: Força discriminação entre conceitos similares.

Exemplo para tema:
| Bloco 1 | Bloco 2 | Bloco 3 |
| Subtema A | Subtema B | Subtema A |
| Subtema C | Subtema A | Subtema B |

3. VARIACAO
Mude o contexto de prática:
- Local diferente.
- Horário diferente.
- Formato diferente (leitura, vídeo, questões, ensino).

Por que funciona: Cria múltiplos caminhos de recuperação.

4. GERACAO
Antes de ler/assistir, tente:
Perguntas para responder antes de estudar. Errar primeiro fortalece o aprendizado posterior.

PLANO INTEGRADO
Semana de estudo aplicando as quatro dificuldades.

| Dia | Técnica | Atividade |
| Segunda | Geração | Tentar responder antes de ler |
| Terça | Espaçamento | Revisão do dia anterior |
| Quarta | Intercalação | Misturar temas |
| Quinta | Variação | Contexto diferente |

RESTRICOES
- Não confunda dificuldade desejável com dificuldade excessiva.
- Não espere fluência imediata; desconforto é produtivo.
- Não desista se parecer mais lento; o ganho é de longo prazo.

RECOMENDACOES
- A sensação de dificuldade é sinal de aprendizado profundo.
- Fluência fácil pode ser ilusão de aprendizado.
- Confie no processo mesmo quando frustrante.`
  },
  {
    id: "cognitive-load-manager",
    title: "Gerenciador de Carga Cognitiva",
    category: "Desafio Cognitivo",
    sectionNumber: 5,
    description: "Aplica princípios da teoria da carga cognitiva para otimizar o estudo de temas complexos, equilibrando dificuldade intrínseca com simplificação de elementos externos.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Aplicar teoria da carga cognitiva para otimizar estudo de material complexo, reduzindo carga extrínseca (má apresentação), gerenciando carga intrínseca (complexidade) e maximizando carga relevante (aprendizado).

PAPEL DA IA
Você é especialista em design instrucional e teoria da carga cognitiva. A memória de trabalho é limitada; design inteligente respeita esse limite.

CAMPO DE ENTRADA
[TEMA COMPLEXO]: Informe o assunto de alta carga cognitiva para otimizar.

PROCESSO
Etapa 1 - Análise de Carga: Identifique os três tipos de carga no material.
Etapa 2 - Chunking: Divida o conteúdo em unidades de 3-4 elementos.
Etapa 3 - Scaffolding Progressivo: Organize em camadas: versão simplificada, detalhes essenciais, nuances e exceções.
Etapa 4 - Integração: Crie exercício que integra todos os chunks de forma significativa.

FORMATO DE SAIDA

ANALISE DE CARGA COGNITIVA

Carga INTRINSECA (complexidade do conteúdo)
Nível estimado: Baixo/Médio/Alto
Elementos interativos:
- Elemento 1 interage com Elemento 2.
- Conceito A depende de Conceito B.
Pré-requisitos necessários:
- Conceito base 1: domina? Sim/Não
- Conceito base 2: domina? Sim/Não

Carga EXTRINSECA (má apresentação) - ELIMINAR
Problemas identificados:
- Informação redundante.
- Split attention: texto longe da imagem relevante.
- Detalhes irrelevantes.
Ações corretivas:
- Como eliminar cada problema.

Carga RELEVANTE (esforço produtivo) - MAXIMIZAR
Atividades que promovem aprendizado profundo:
- Atividade 1
- Atividade 2

CHUNKING DO CONTEUDO

Chunk 1: Nome do conceito central
Elementos (máximo 4):
1. Elemento essencial
2. Elemento essencial
3. Elemento essencial
Verificação: Consigo explicar sem consultar? Sim/Não

Chunk 2: Nome do segundo conceito
Elementos (máximo 4):
1. Elemento essencial
2. Elemento essencial
3. Elemento essencial
Verificação: Consigo explicar sem consultar? Sim/Não

SCAFFOLDING PROGRESSIVO

Camada 1: Versão Simplificada (essência apenas)
O conceito reduzido ao mínimo essencial em 2-3 frases.
Analogia simples: Comparação com algo familiar.

Camada 2: Detalhes Essenciais
Adicione os detalhes que mudam decisões clínicas.
Casos onde isso importa: Exemplos.

Camada 3: Nuances e Exceções
Casos atípicos, exceções, pegadinhas de prova.
Quando suspeitar da exceção: Gatilhos.

EXERCICIO DE INTEGRACAO
Caso ou problema que exige usar todos os chunks de forma integrada.

SINAIS DE SOBRECARGA
Se sentir durante o estudo:
- Confusão crescente: pare e revise chunk anterior.
- Frustração: simplifique, volte uma camada.
- Brancos: pausa de 10 minutos + chunks menores.

RESTRICOES
- Não crie chunks com mais de 4 elementos.
- Não pule camadas do scaffolding.
- Não ignore os pré-requisitos faltantes.
- A sensação de fácil demais é boa; significa espaço cognitivo livre.

RECOMENDACOES
- Menos é mais; é melhor dominar 3 chunks que superficialmente ver 10.
- Pré-requisitos faltantes causam sobrecarga; resolva antes.
- A integração final é onde o aprendizado profundo acontece.`
  },
  {
    id: "pressure-simulator",
    title: "Simulador de Pressão de Prova",
    category: "Desafio Cognitivo",
    sectionNumber: 5,
    description: "Desenvolve resiliência e estratégias de regulação emocional para avaliações através de exposição controlada e progressiva a condições de estresse similares às de prova real.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Treinar performance sob pressão através de simulação controlada de estresse, desenvolvendo resiliência e estratégias de regulação emocional para o dia da prova real.

PAPEL DA IA
Você é especialista em "choke under pressure" (por que pessoas falham sob pressão e como prevenir). Exposição controlada ao estresse antes da prova real constrói resiliência.

CAMPO DE ENTRADA
[TEMA/PROVA]: Informe o assunto ou avaliação para simular pressão.

PROCESSO
Etapa 1 - Configuração do Ambiente: Instruções para recriar condições de prova real.
Etapa 2 - Fases Progressivas de Pressão: Aumento gradual de estresse para construir tolerância.
Etapa 3 - Debriefing: Análise de como a pressão afetou o desempenho e estratégias de melhoria.

FORMATO DE SAIDA

CONFIGURACAO DO AMBIENTE
Antes de começar:
1. Configure timer visível.
2. Celular fora do alcance.
3. Sentado como estará na prova.
4. Nenhum material de consulta.
5. Água apenas (como na prova).

SIMULACAO DE PRESSAO

FASE 1: AQUECIMENTO SOB TEMPO (5 min)
Instruções: 5 questões rápidas, 1 minuto cada.
Nível de estresse: Baixo.
5 questões de recall direto sobre o tema.

FASE 2: PRESSAO MODERADA (10 min)
Instruções: 3 questões complexas, tempo apertado.
Nível de estresse: Médio.
Distratores: A cada questão, imagine uma interrupção.
3 questões que exigem raciocínio sobre o tema.

FASE 3: PRESSAO ALTA (10 min)
Instruções: 2 casos clínicos, metade do tempo confortável.
Nível de estresse: Alto.
2 casos clínicos complexos sobre o tema.

DEBRIEFING
Após terminar, responda:
1. Sensação física: Como seu corpo reagiu em cada fase?
2. Estratégias: O que você fez para manejar a ansiedade?
3. Impacto: Onde a pressão prejudicou seu desempenho?
4. Plano: O que fará diferente na prova real?

TECNICAS DE REGULACAO PARA A PROVA
| Técnica | Como fazer | Quando usar |
| Respiração 4-7-8 | Inspire 4s, segure 7s, expire 8s | Antes de começar / durante brancos |
| Âncora de confiança | Lembre de um momento de sucesso | Quando duvidar de si |
| Self-talk positivo | Eu estudei para isso | Durante questões difíceis |
| Grounding | Sinta os pés no chão | Quando ansiedade subir |

RESTRICOES
- Não pause o timer; simule condições reais.
- Não consulte material; confie no que sabe.
- Não desista se travar; pratique recuperação.

RECOMENDACOES
- Exposição controlada ao estresse constrói resiliência.
- O debriefing é onde o aprendizado acontece.
- Repita a simulação até a pressão parecer familiar.`
  },

  // SECAO 6: ROTINA DE ALTA PERFORMANCE
  {
    id: "ultradian-architect",
    title: "Arquiteto de Ciclos Ultradianos",
    category: "Rotina de Alta Performance",
    sectionNumber: 6,
    description: "Estrutura rotina de estudo em ciclos ultradianos de 90 minutos alinhados aos ritmos biológicos do cérebro, maximizando foco sustentado e prevenindo fadiga cognitiva.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Estruturar rotina de estudo em ciclos ultradianos de 90 minutos, alinhados aos ritmos naturais do cérebro para maximizar foco e evitar fadiga cognitiva.

PAPEL DA IA
Você é pesquisador que descobriu os ritmos ultradianos: ciclos de 90 minutos de atenção máxima seguidos por períodos de recuperação. Trabalhe com seu cérebro, não contra ele.

CAMPO DE ENTRADA
[MEU CONTEXTO]: Inclua horário de acordar, horário de dormir, compromissos fixos e objetivo principal.

PROCESSO
Etapa 1 - Mapeamento do Dia: Identifique janelas disponíveis para ciclos completos.
Etapa 2 - Estruturação dos Ciclos: Divida cada 90 minutos em fases otimizadas.
Etapa 3 - Alocação de Atividades: Distribua tarefas conforme demanda cognitiva e momento do dia.

FORMATO DE SAIDA

ESTRUTURA DO CICLO ULTRADIANO (90 min)

FASE 1: AQUECIMENTO + FOCO (52 min)
| Minutos | Atividade | Propósito |
| 0-10 | Revisão do dia anterior | Ativar memória |
| 10-52 | Deep work no tema principal | Aprendizado profundo |

FASE 2: PICO DE PERFORMANCE (25 min)
| Minutos | Atividade | Propósito |
| 52-77 | Tarefa de maior demanda cognitiva | Aproveitar pico de foco |

FASE 3: CONSOLIDACAO (13 min)
| Minutos | Atividade | Propósito |
| 77-90 | Revisão + anotação de dúvidas | Consolidar aprendizado |

INTERVALO ENTRE CICLOS (20 min)
Atividades de recuperação (não use telas):
- Caminhar
- Alongar
- Hidratar
- Snack leve
- Contato com natureza

CRONOGRAMA DIARIO
| Ciclo | Horário | Foco Principal | Estado de Energia |
| 1 | XX:XX - XX:XX | Tema prioritário | Alto |
| 2 | XX:XX - XX:XX | Segundo tema | Alto |
| 3 | XX:XX - XX:XX | Revisão/Questões | Médio |
| 4 | XX:XX - XX:XX | Leitura leve | Médio |

ALOCACAO DE TAREFAS POR DEMANDA
| Demanda Cognitiva | Melhor Momento | Exemplos |
| Alta | Manhã / 1o ciclo | Conceitos novos, casos complexos |
| Média | Tarde | Revisão, questões práticas |
| Baixa | Final do dia | Organização, leitura leve |

RESTRICOES
- Não pule os intervalos; recuperação é parte do processo.
- Não force mais de 4 ciclos por dia; qualidade supera quantidade.
- Não use telas no intervalo; precisa ser descanso real.

RECOMENDACOES
- O intervalo não é perda de tempo; é quando o cérebro consolida.
- Respeitar o ritmo natural aumenta produtividade total.
- 3 ciclos bem executados superam 6 ciclos forçados.`
  },
  {
    id: "cronotype-optimizer",
    title: "Otimizador de Cronotipo",
    category: "Rotina de Alta Performance",
    sectionNumber: 6,
    description: "Diagnostica padrão cronobiológico individual e otimiza a rotina de estudos alinhando atividades cognitivamente demandantes aos picos naturais de energia e atenção.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Identificar seu cronotipo (padrão biológico de sono/vigília) e otimizar a rotina de estudos para alinhar tarefas cognitivas aos seus picos naturais de energia e atenção.

PAPEL DA IA
Você é cronobiólogo que identificou os 4 cronotipos principais. Não existe horário universalmente melhor; existe o seu horário melhor baseado na sua biologia.

CAMPO DE ENTRADA
[RESPOSTAS AO QUESTIONARIO]: Responda as perguntas abaixo.

PROCESSO
Etapa 1 - Questionário de Cronotipo: Aplique perguntas para identificar padrão biológico.
Etapa 2 - Análise: Determine cronotipo predominante.
Etapa 3 - Otimização: Alinhe rotina de estudos aos picos naturais.

FORMATO DE SAIDA

QUESTIONARIO DE CRONOTIPO

1. Em férias, sem despertador, a que horas você acordaria naturalmente?
a) Antes das 6h
b) Entre 6h e 8h
c) Entre 8h e 10h
d) Após 10h

2. Em que horário você se sente mais alerta mentalmente?
a) Primeiras horas da manhã
b) Meio da manhã
c) Tarde
d) Noite

3. Se tivesse uma prova importante, que horário escolheria?
a) 8h
b) 10h
c) 14h
d) 18h ou mais tarde

4. Você se descreve como:
a) Definitivamente matutino
b) Mais matutino que noturno
c) Mais noturno que matutino
d) Definitivamente noturno

ANALISE DO CRONOTIPO

Seu cronotipo: Leão/Urso/Lobo/Golfinho
Características:
- Leão: Madrugadores, pico 8h-12h.
- Urso: Seguem o sol, pico 10h-14h.
- Lobo: Noturnos, pico 17h-21h.
- Golfinho: Sono leve, picos variáveis.

ROTINA OTIMIZADA PARA SEU CRONOTIPO

Picos de Performance
| Horário | Tipo de Tarefa |
| Primeiro pico | Tarefas mais difíceis |
| Segundo pico | Tarefas criativas |
| Vale | Tarefas administrativas |

Cronograma Sugerido
Manhã: Atividades para seu cronotipo.
Tarde: Atividades para seu cronotipo.
Noite: Atividades para seu cronotipo.

RESTRICOES
- Não force rotinas contra seu cronotipo; é desperdício de energia.
- Não ignore sinais de fadiga; são informação biológica.
- Adapte gradualmente, não drasticamente.

RECOMENDACOES
- Alinhar com cronotipo aumenta produtividade em 20-30%.
- Respeite seu ritmo mesmo que diferente do convencional.
- Cronotipos podem mudar com idade.`
  },
  {
    id: "plano-estudos-prova",
    title: "Plano Estratégico de Estudos para Prova",
    category: "Rotina de Alta Performance",
    sectionNumber: 6,
    description: "Elabora plano de estudos completo e periodizado para provas específicas, com distribuição de conteúdo, simulados progressivos e protocolo de revisão final.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Criar plano de estudos completo e personalizado para uma prova específica, integrando todas as técnicas de aprendizado em cronograma realista e sustentável.

PAPEL DA IA
Você é coach de estudos especializado em preparação para residência médica e concursos. Você transforma objetivo em plano de ação concreto.

CAMPOS DE ENTRADA
[PROVA]: Nome da prova ou concurso.
[DATA]: Quando será.
[NIVEL ATUAL]: Onde você está (simulados, nota estimada).
[HORAS DISPONIVEIS]: Quanto tempo de estudo por dia/semana.
[RECURSOS]: Materiais que você tem acesso.

PROCESSO
Etapa 1 - Diagnóstico: Avalie situação atual versus meta.
Etapa 2 - Cronograma: Distribua conteúdo ao longo do tempo disponível.
Etapa 3 - Simulados: Planeje testes progressivos para calibração.
Etapa 4 - Revisão Final: Estruture últimos dias pré-prova.

FORMATO DE SAIDA

1. ANALISE GAP
| Parâmetro | Atual | Meta |
| Horas/semana | X | Y |
| Materiais | lista | lista |
| Simulados | quantidade | quantidade ideal |

2. CRONOGRAMA SEMANAL

SEMANAS 1-2: FUNDAMENTOS
Objetivo: Solidificar base e preencher lacunas críticas.
- Tópicos prioritários: lista.
- Técnicas: Leitura ativa, flashcards iniciais.
- Meta: X horas/semana.

SEMANAS 3-4: APROFUNDAMENTO
Objetivo: Integração de sistemas e raciocínio clínico.
- Foco: Casos clínicos, conexões entre sistemas.
- Técnicas: Prática intercalada, método socrático.
- Meta: X questões/dia.

SEMANAS 5-6: CONSOLIDACAO
Objetivo: Revisão espaçada e simulados progressivos.
- Foco: Temas de alto rendimento.
- Técnicas: Retrieval practice intensivo.
- Meta: 1 simulado completo/semana.

SEMANAS 7-8: SPRINT FINAL
Objetivo: Polimento e gestão de performance.
- Foco: Erros recorrentes, pontos fracos.
- Técnicas: Revisão de alto rendimento.
- Meta: Manutenção de confiança.

3. SIMULADOS PROGRESSIVOS
| Semana | Simulado | Objetivo | Meta de Acerto |
| 2 | Diagnóstico | Baseline | Qualquer |
| 4 | Intermediário 1 | Medir progresso | +10% do baseline |
| 6 | Intermediário 2 | Ajuste fino | +15% do baseline |
| 7 | Final | Simulação real | Meta final |

Protocolo de análise de erros:
1. Categorizar: Não sabia / Sabia mas errei / Desatenção.
2. Revisar cada erro no mesmo dia.
3. Criar flashcard de cada erro.

4. PROTOCOLO DE REVISAO FINAL (Últimos 3 dias)
| Dia | Atividade | Objetivo |
| D-3 | Revisão de resumos + erros frequentes | Consolidação |
| D-2 | Flashcards + descanso | Manutenção leve |
| D-1 | Nenhum estudo novo + preparação logística | Recuperação |

5. GESTAO DE ANSIEDADE
Técnicas pré-prova (semana anterior):
- Visualização de sucesso.
- Rotina de sono regular.
- Redução gradual de carga.

No dia da prova:
- Chegada com 30 minutos de antecedência.
- Respiração 4-7-8 antes de começar.
- Self-talk preparado.

RESTRICOES
- Não estude conteúdo novo nos últimos 3 dias.
- Não pule simulados; são essenciais para calibração.
- Não ignore sinais de burnout; ajuste o plano.

RECOMENDACOES
- Plano flexível supera plano perfeito que você não segue.
- Semanas 7-8 são para manutenção, não para desespero.
- Confiança é construída por preparação sistemática.`
  },

  // SECAO 7: HABITOS E CONSISTENCIA
  {
    id: "habit-stacking",
    title: "Designer de Empilhamento de Hábitos",
    category: "Hábitos e Consistência",
    sectionNumber: 7,
    description: "Implementa estratégia de empilhamento de hábitos conectando novos comportamentos de estudo a hábitos já consolidados, usando a fórmula comportamental de James Clear.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Criar estratégia de empilhamento de hábitos conectando novos comportamentos de estudo a hábitos existentes que já são automáticos, usando a técnica de James Clear.

PAPEL DA IA
Você é especialista em design comportamental e autor do conceito de Atomic Habits. Você não sobe ao nível dos seus objetivos; você cai ao nível dos seus sistemas.

CAMPOS DE ENTRADA
[HABITOS EXISTENTES]: Comportamentos que já faço automaticamente.
[NOVOS HABITOS]: Comportamentos de estudo que quero adquirir.
[MOMENTO]: Manhã/Tarde/Noite, quando tenho mais disponibilidade.

PROCESSO
Etapa 1 - Mapeamento de Hábitos Existentes: Identifique comportamentos que o estudante já faz automaticamente todos os dias.
Etapa 2 - Seleção de Âncoras: Escolha os hábitos existentes mais adequados para servir como gatilhos.
Etapa 3 - Design das Pilhas: Crie a fórmula "Depois de [hábito existente], vou [novo hábito, versão mínima]".
Etapa 4 - Progressão Gradual: Planeje como escalar a duração sem quebrar a consistência.

FORMATO DE SAIDA

MAPEAMENTO DE HABITOS EXISTENTES
Liste hábitos que você já faz automaticamente:
- Acordar
- Escovar os dentes (manhã)
- Tomar café da manhã
- Chegar em casa após aula/trabalho
- Almoçar
- Tomar banho
- Jantar
- Escovar os dentes (noite)
- Outros

PILHAS DE HABITOS DE ESTUDO

Pilha Matinal
Fórmula:
Depois de [hábito existente: exemplo, tomar café da manhã],
vou [novo hábito: revisar 5 flashcards no Anki, 2 minutos].

Por que funciona:
- O hábito existente é o gatilho automático.
- O novo hábito é ridiculamente pequeno (2 minutos).
- A consistência vem antes da duração.

Pilha de Transição
Fórmula:
Depois de [hábito existente: exemplo, chegar em casa],
vou [novo hábito: revisar anotações do dia, 2 minutos].

Pilha Noturna
Fórmula:
Depois de [hábito existente: exemplo, escovar os dentes à noite],
vou [novo hábito: ler 1 página de livro-texto, 2 minutos].

REGRAS DE OURO

1. Comece ridiculamente pequeno.
   - 2 minutos máximo no início.
   - Tão fácil que é impossível falhar.

2. Vincule ao hábito, não ao horário.
   - Errado: Às 8h vou estudar (depende de circunstâncias).
   - Certo: Depois do café vou estudar (hábito é o gatilho).

3. Celebre imediatamente após fazer.
   - Diga "Isso!" ou faça gesto de vitória.
   - A celebração cria associação positiva.

4. Nunca perca 2 dias seguidos.
   - Um dia de falha é acidente.
   - Dois dias seguidos é novo padrão.

PROGRESSAO SEMANAL
| Semana | Foco | Duração |
| 1-2 | Apenas estabelecer o gatilho | 2 min |
| 3-4 | Aumentar gradualmente | 5 min |
| 5-6 | Expandir | 10 min |
| 7+ | Adicionar nova pilha | 15 min |

TROUBLESHOOTING

Se eu falhar:
Volte para versão ainda menor. 2 minutos é muito? Faça 30 segundos.

Se eu esquecer:
Adicione lembrete visual no local do gatilho. Exemplo: Post-it no espelho do banheiro.

Se eu resistir:
Aplique a Regra dos 2 minutos. Só preciso fazer 2 minutos. Depois de 2 minutos, decido se continuo.

RESTRICOES
- Não comece com mais de 5 minutos; mata a consistência.
- Não tente várias pilhas novas de uma vez.
- Não vincule a horários; vincule a hábitos.

RECOMENDACOES
- A consistência vence a intensidade; melhor 2 minutos todo dia que 1 hora esporadicamente.
- O hábito existe mais fácil que você imagina para manter.
- Celebração é ciência, não bobagem; cria dopamina associada ao comportamento.`
  },
  {
    id: "consistency-tracker",
    title: "Rastreador de Consistência",
    category: "Hábitos e Consistência",
    sectionNumber: 7,
    description: "Implementa sistema visual gamificado de acompanhamento de hábitos de estudo, com métricas de streaks e indicadores que motivam a manutenção da consistência.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Criar sistema visual de acompanhamento de consistência em hábitos de estudo, usando gamificação e métricas que motivam continuidade.

PAPEL DA IA
Você é especialista em gamificação e ciência comportamental, designer de sistemas de tracking que tornam progresso visível e motivador. O que é medido, melhora. O que é medido visualmente, melhora mais rápido.

CAMPOS DE ENTRADA
[HABITOS]: Lista de hábitos de estudo a rastrear.
[PERIODO]: Semanal ou mensal.
[METAS]: Frequência mínima desejada por hábito.

PROCESSO
Etapa 1 - Setup do Tracker: Configure tabela visual com hábitos selecionados e metas realistas.
Etapa 2 - Sistema de Streaks: Implemente contagem de dias consecutivos com gamificação.
Etapa 3 - Métricas de Análise: Defina indicadores que revelam padrões e oportunidades de melhoria.
Etapa 4 - Regras de Recuperação: Estabeleça protocolo para quando quebrar sequência.

FORMATO DE SAIDA

HABIT TRACKER VISUAL

Semana: ___/___/___ a ___/___/___

| Hábito | Seg | Ter | Qua | Qui | Sex | Sáb | Dom | Meta | Real | % |
| Anki | | | | | | | | 7/7 | /7 | % |
| Questões | | | | | | | | 5/7 | /7 | % |
| Leitura | | | | | | | | 4/7 | /7 | % |
| Resumo | | | | | | | | 3/7 | /7 | % |

Legenda:
- Vazio: Não feito
- Marcado: Feito
- Destaque: Feito + acima da meta
- Estrela: Dia perfeito (todos os hábitos)

SISTEMA DE STREAKS
| Hábito | Streak Atual | Recorde | Meta de Streak |
| Anki | ___ dias | ___ dias | 30 dias |
| Questões | ___ dias | ___ dias | 21 dias |
| Leitura | ___ dias | ___ dias | 14 dias |

Streak Geral (todos os hábitos): ___ dias
Recorde Geral: ___ dias

Níveis de Streak
- Bronze: 7 dias consecutivos
- Prata: 21 dias consecutivos
- Ouro: 30 dias consecutivos
- Diamante: 60 dias consecutivos
- Lendário: 100 dias consecutivos

METRICAS SEMANAIS
Taxa de Conclusão Geral: ___%
Tendência: Subindo / Estável / Caindo

Hábito mais consistente: ___
O que está funcionando: ___

Hábito que precisa atenção: ___
O que está atrapalhando: ___

Dia mais produtivo: ___
Dia mais fraco: ___

REGRAS DE RECUPERACAO

Se quebrar streak:
1. Volte no dia seguinte (não na próxima segunda).
2. Faça a versão mínima (2 minutos conta).
3. Não se puna; analise e ajuste.

Regra dos 2 dias:
Nunca pule 2 dias seguidos.
1 dia = acidente.
2 dias = início de novo padrão.

Versão de emergência:
Se não conseguir fazer o hábito completo:
- Anki: apenas 5 cards (1 minuto).
- Questões: apenas 1 questão (2 minutos).
- Leitura: apenas 1 parágrafo (1 minuto).

RECOMPENSAS
| Conquista | Recompensa |
| 7 dias de streak | Recompensa pequena |
| 21 dias de streak | Recompensa média |
| 30 dias de streak | Recompensa especial |
| Semana perfeita | Recompensa semanal |

RESTRICOES
- Não rastreie mais de 4-5 hábitos simultaneamente.
- Não defina metas irrealistas que causem frustração.
- Não ignore a versão mínima; consistência supera perfeição.

RECOMENDACOES
- Mantenha o tracker visível, na mesa de estudos ou tela do celular.
- Marque imediatamente após fazer; não deixe para depois.
- Revise semanalmente para identificar padrões.`
  },
  {
    id: "melhorar-habitos-estudo",
    title: "Redesenhar Hábitos de Estudo",
    category: "Hábitos e Consistência",
    sectionNumber: 7,
    description: "Analisa e reestrutura padrões de estudo utilizando ciência comportamental, transformando tendências à procrastinação em rotinas consistentes através de micro-hábitos.",
    aiRecommended: "chatgpt",
    prompt: `PAPEL
Você é especialista em ciência comportamental e formação de hábitos.

TAREFA
Analise e redesenhe meus hábitos de estudo.

CAMPO DE ENTRADA
Descreva seus hábitos atuais:
- Quando estuda?
- Onde estuda?
- Quanto tempo consegue manter foco?
- O que te distrai?

FORMATO DE SAIDA

1. DIAGNOSTICO DE HABITOS ATUAIS
- Gatilhos identificados.
- Comportamentos problemáticos.
- Recompensas atuais.

2. HABIT STACKING (Empilhamento)
Fórmula: Depois de [hábito existente], vou [hábito de estudo].
Exemplos personalizados.

3. ENVIRONMENT DESIGN
- O que remover do ambiente.
- O que adicionar.
- Configuração ideal do local.

4. MICRO-HABITOS (2 min)
Para cada hábito desejado, versão mínima de 2 minutos.

5. SISTEMA DE RECOMPENSAS
- Recompensas imediatas.
- Celebrações.
- Tracking visual.`
  },

  // SECAO 8: PRODUCAO ACADEMICA
  {
    id: "estrutura-tcc",
    title: "Estruturador de TCC",
    category: "Produção Acadêmica",
    sectionNumber: 8,
    description: "Desenvolve estrutura completa para trabalho de conclusão de curso na área da saúde, com orientações metodológicas e formatação acadêmica padronizada.",
    aiRecommended: "claude",
    prompt: `PAPEL
Você é orientador de TCC em medicina com experiência em metodologia científica.

TAREFA
Ajude a estruturar meu TCC sobre [TEMA].

CAMPO DE ENTRADA
Informe o tema do TCC.

FORMATO DE SAIDA

1. DEFINICAO DO ESCOPO
- Problema de pesquisa (pergunta clara).
- Objetivo geral.
- Objetivos específicos (3-5).
- Justificativa (relevância).

2. REVISAO DE LITERATURA
- Palavras-chave para busca.
- Bases de dados recomendadas.
- Estrutura da revisão (tópicos).

3. METODOLOGIA
- Tipo de estudo recomendado.
- População e amostra.
- Critérios de inclusão/exclusão.
- Instrumentos de coleta.
- Análise de dados.
- Aspectos éticos.

4. CRONOGRAMA
| Etapa | Mês 1 | Mês 2 | Mês 3 | Mês 4 | Mês 5 | Mês 6 |

5. ESTRUTURA DO DOCUMENTO
- Elementos pré-textuais.
- Elementos textuais.
- Elementos pós-textuais.`
  },
  {
    id: "busca-evidencias",
    title: "Busca de Evidências PICO",
    category: "Produção Acadêmica",
    sectionNumber: 8,
    description: "Desenvolve estratégia de busca de evidências utilizando o framework PICO, com termos MeSH otimizados e strings de busca para as principais bases de dados científicas.",
    aiRecommended: "perplexity",
    prompt: `PAPEL
Você é bibliotecário especialista em busca de evidências médicas.

TAREFA
Ajude a construir uma estratégia de busca para a dúvida clínica informada.

CAMPO DE ENTRADA
[MINHA DUVIDA CLINICA]: Informe sua dúvida.

ESTRUTURACAO PICO
Transforme a dúvida em:
- P (População): Quem são os pacientes?
- I (Intervenção): O que está sendo avaliado?
- C (Comparação): Comparado com o quê?
- O (Outcome): Qual resultado interessa?

ESTRATEGIA DE BUSCA

TERMOS MeSH SUGERIDOS
- Termo 1: em inglês.
- Termo 2: em inglês.
- Termo 3: em inglês.

STRING DE BUSCA (PubMed)
("Termo 1"[MeSH] OR "sinônimo") AND ("Termo 2"[MeSH] OR "sinônimo") AND ("Termo 3"[MeSH])

FILTROS RECOMENDADOS
- Tipo de estudo: mais adequado.
- Período: últimos X anos.
- Idioma: se aplicável.

BASES DE DADOS
1. PubMed (primária).
2. Cochrane Library (revisões sistemáticas).
3. LILACS (literatura latino-americana).

AVALIACAO CRITICA
Após encontrar artigos, avalie:
- Nível de evidência.
- Risco de viés.
- Aplicabilidade ao contexto.`
  },
  {
    id: "revisor-academico",
    title: "Revisor Acadêmico",
    category: "Produção Acadêmica",
    sectionNumber: 8,
    description: "Realiza revisão acadêmica completa de textos médicos verificando estrutura, coerência argumentativa, adequação de linguagem e conformidade com normas ABNT.",
    aiRecommended: "claude",
    prompt: `PAPEL
Você é revisor acadêmico especialista em textos médicos e normas ABNT.

TAREFA
Revise o texto que vou fornecer sobre o tema ou seção do trabalho.

CAMPO DE ENTRADA
[TEMA/SECAO DO TRABALHO]: Informe o texto a ser revisado.

CHECKLIST DE REVISAO

ESTRUTURA
- Introdução-Desenvolvimento-Conclusão presentes.
- Parágrafos com tópico frasal claro.
- Transições entre parágrafos.
- Progressão lógica das ideias.

LINGUAGEM ACADEMICA
- Impessoalidade (sem "eu", "nós").
- Objetividade (sem opinião não fundamentada).
- Clareza (frases não muito longas).
- Precisão terminológica.

COERENCIA E COESAO
- Conectivos adequados.
- Referências anafóricas claras.
- Não há contradições internas.
- Argumentação fundamentada.

NORMAS ABNT
- Citações diretas e indiretas corretas.
- Formatação de referências.
- Uso de siglas (definir na primeira vez).

FORMATO DO FEEDBACK
Para cada problema encontrado:
1. Trecho original.
2. Tipo de problema.
3. Sugestão de correção.
4. Explicação breve.

PRIORIZACAO
Classifique os problemas em:
- Crítico: Compromete compreensão ou regra grave.
- Importante: Melhoria significativa.
- Sugestão: Polimento.`
  },

  // SECAO 9: FORMATOS ALTERNATIVOS
  {
    id: "podcast-educativo",
    title: "Podcast Educativo",
    category: "Formatos Alternativos",
    sectionNumber: 9,
    description: "Desenvolve roteiro estruturado para podcast educativo sobre tema médico, com fundamentação teórica, casos práticos e identificação de erros comuns a evitar.",
    aiRecommended: "notebooklm",
    prompt: `INSTRUCOES PARA GERACAO DE PODCAST
Gere um podcast educativo sobre o tema informado.

CAMPO DE ENTRADA
[TEMA]: Informe o tema do podcast.

ESTRUTURA DO PODCAST
1. Abertura (1-2 min): Gancho inicial + contextualização do tema.
2. Fundamentos (3-4 min): Conceitos essenciais com analogias do cotidiano.
3. Aprofundamento (4-5 min): Casos práticos e exemplos clínicos.
4. Armadilhas (2-3 min): Erros comuns e como evitá-los.
5. Fechamento (1-2 min): Resumo + próximos passos de estudo.

APRESENTADORES
- Apresentador 1: Abordagem teórica e fundamentação científica.
- Apresentador 2: Visão prática e aplicação clínica.

DIRETRIZES
- Tom: Profissional mas acessível.
- Duração: 12-15 minutos.
- Inclua momentos de discordância construtiva.
- Use analogias do cotidiano para explicar conceitos complexos.`
  },
  {
    id: "mapas-conceituais",
    title: "Mapas Conceituais Estruturados",
    category: "Formatos Alternativos",
    sectionNumber: 9,
    description: "Desenvolve estrutura hierárquica de mapa conceitual para organização visual do conhecimento, com conexões explícitas entre conceitos e destaque dos elementos essenciais.",
    aiRecommended: "gemini",
    prompt: `TAREFA
Crie um mapa mental estruturado sobre o tema informado.

CAMPO DE ENTRADA
[TEMA]: Informe o tema do mapa conceitual.

ESTRUTURA
CONCEITO CENTRAL: [TEMA]
|
+-- RAMO 1: Categoria Principal
|   +-- Subtópico 1.1
|   |   +-- Detalhe importante
|   +-- Subtópico 1.2
|
+-- RAMO 2: Categoria Principal
|   +-- Subtópico 2.1
|   +-- Subtópico 2.2
|
+-- RAMO 3: Categoria Principal
|   +-- ...
|
+-- CONEXOES
    +-- Ramo 1 relaciona-se com Ramo 2 (tipo de relação)

REGRAS
- Máximo 5 ramos principais.
- Máximo 3 níveis de profundidade.
- Use palavras-chave, não frases longas.
- Indique relações com setas e verbos.
- Destaque os 3 conceitos mais importantes.

SECAO FINAL
Liste os 5 conceitos-chave para memorização.`
  },
  {
    id: "encontrar-recursos",
    title: "Curadoria de Recursos de Estudo",
    category: "Formatos Alternativos",
    sectionNumber: 9,
    description: "Realiza curadoria criteriosa de recursos educacionais para disciplinas médicas, avaliando livros, vídeos, aplicativos e bases de dados segundo critérios de rigor acadêmico e eficácia.",
    aiRecommended: "perplexity",
    prompt: `OBJETIVO
Curar e recomendar os melhores recursos educacionais disponíveis para uma disciplina médica específica, incluindo livros, vídeos, apps, podcasts e bases de dados.

PAPEL DA IA
Você é bibliotecário médico com experiência avaliando recursos educacionais. Você conhece profundamente o que funciona para cada tipo de aprendizado e sabe distinguir recursos de qualidade.

CAMPO DE ENTRADA
[DISCIPLINA MEDICA]: Informe a área ou especialidade para curar recursos.

PROCESSO
Etapa 1 - Identificação de Categorias: Mapeie os tipos de recursos relevantes para a disciplina.
Etapa 2 - Avaliação de Qualidade: Aplique critérios de rigor acadêmico, atualização, acessibilidade.
Etapa 3 - Recomendação Estratificada: Organize por nível (básico/avançado) e modalidade.

FORMATO DE SAIDA

CURADORIA DE RECURSOS - [DISCIPLINA MEDICA]

1. LIVROS-TEXTO

Nível Básico:
| Título | Autor | Por que é bom | Melhor para |

Nível Avançado:
| Título | Autor | Por que é bom | Melhor para |

2. VIDEOS EDUCACIONAIS
| Plataforma | O que oferece | Preço | Ideal para |

3. APPS INTERATIVOS
Anatomia:
- Complete Anatomy: descrição.
- Visible Body: descrição.

Flashcards:
- Anki: Decks recomendados.
- Quizlet: descrição.

4. BASES DE DADOS E EVIDENCIAS
| Base | Foco | Acesso | Melhor para |
| PubMed | Artigos primários | Gratuito | Pesquisa |
| UpToDate | Revisões clínicas | Pago | Consulta rápida |
| DynaMed | Evidências resumidas | Pago | Decisão clínica |

5. PODCASTS MEDICOS
| Podcast | Foco | Frequência | Duração típica |

RECOMENDACAO DO CURADOR
Para começar: 1-2 recursos essenciais.
Para aprofundar: 1-2 recursos avançados.
Custo-benefício: Melhor opção gratuita/barata.

RESTRICOES
- Não recomende recursos desatualizados.
- Não inclua recursos sem credibilidade acadêmica.
- Priorize recursos com evidência de eficácia.

RECOMENDACOES
- Menos recursos bem usados superam muitos recursos superficiais.
- Verifique data de última edição dos livros.
- Combine modalidades (leitura + vídeo + prática).`
  },

  // SECAO 10: OTIMIZACAO E TRACKING
  {
    id: "diagnostico-perfil",
    title: "Diagnóstico de Perfil de Aprendizagem",
    category: "Otimização e Tracking",
    sectionNumber: 10,
    description: "Identifica perfil individual de aprendizagem através de questionário estruturado, determinando modalidades preferidas e gerando recomendações de técnicas personalizadas.",
    aiRecommended: "claude",
    prompt: `OBJETIVO
Diagnosticar seu perfil de aprendizagem através de questionário estruturado, identificando modalidades preferidas, ambiente ideal e técnicas que funcionam melhor para você especificamente.

PAPEL DA IA
Você é especialista em estilos de aprendizagem e diversidade cognitiva. Não existe método universal; existe o método certo para cada pessoa.

CAMPO DE ENTRADA
[RESPOSTAS AO QUESTIONARIO]: Responda as perguntas abaixo.

PROCESSO
Etapa 1 - Questionário: Aplique questionário cobrindo múltiplas dimensões do aprendizado.
Etapa 2 - Análise de Padrões: Identifique tendências nas respostas.
Etapa 3 - Diagnóstico: Determine perfil predominante e características secundárias.
Etapa 4 - Personalização: Gere recomendações específicas para o perfil identificado.

FORMATO DE SAIDA

QUESTIONARIO DE PERFIL DE APRENDIZAGEM

Bloco 1: Processamento de Informação

1. Quando estuda algo novo, você prefere:
a) Ler textos e fazer anotações.
b) Ver diagramas e vídeos.
c) Ouvir explicações ou podcasts.
d) Fazer exercícios práticos.

2. Você lembra melhor o que:
a) Leu.
b) Viu em imagens.
c) Ouviu.
d) Fez/praticou.

Bloco 2: Ambiente

3. Você estuda melhor:
a) Em silêncio absoluto.
b) Com música de fundo.
c) Em ambiente com algum ruído (café, biblioteca).
d) Tanto faz.

4. Você prefere estudar:
a) Sozinho.
b) Em dupla.
c) Em grupo pequeno.
d) Varia conforme o tema.

Bloco 3: Ritmo e Tempo

5. Quando você se sente mais produtivo?
a) Manhã cedo.
b) Final da manhã / início da tarde.
c) Tarde / início da noite.
d) Noite.

6. Como você responde a prazos?
a) Começo com antecedência, divido em partes.
b) Deixo para mais perto, trabalho sob pressão.
c) Depende da importância.

Aguardo suas respostas.

ANALISE DO SEU PERFIL
Modalidade predominante: Visual / Auditivo / Cinestésico / Leitura-escrita.
Modalidade secundária: Segunda preferência.

Características identificadas:
- Ambiente ideal: descrição.
- Melhor momento: período do dia.
- Estilo de organização: descrição.
- Resposta a pressão: descrição.

TECNICAS RECOMENDADAS PARA VOCE
| Técnica | Por que funciona para seu perfil |

TECNICAS A EVITAR
| Técnica | Por que não funciona para você |

PLANO PERSONALIZADO
Rotina ideal de estudo: Descrição da rotina otimizada para seu perfil.

RESTRICOES
- Não force técnicas que vão contra seu perfil natural.
- Não ignore modalidades secundárias; podem complementar.
- Lembre: perfis são tendências, não caixas rígidas.

RECOMENDACOES
- Use seu perfil como ponto de partida, não como limitação.
- Experimente técnicas das outras modalidades ocasionalmente.
- Adapte as recomendações à sua realidade.`
  },
  {
    id: "weekly-review",
    title: "Template de Revisão Semanal",
    category: "Otimização e Tracking",
    sectionNumber: 10,
    description: "Estrutura revisão semanal sistemática de estudos para identificar padrões de produtividade, celebrar vitórias, diagnosticar obstáculos e planejar a semana seguinte.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Estruturar revisão semanal que identifica padrões, celebra vitórias, diagnostica problemas e planeja próxima semana para melhoria contínua.

PAPEL DA IA
Você é coach de produtividade especializado em estudantes. A revisão semanal é onde o sistema se aprimora; sem ela, você repete os mesmos erros.

CAMPO DE ENTRADA
[SEMANA]: Data de início e fim da semana a revisar.

PROCESSO
Etapa 1 - Retrospectiva: Revise o que aconteceu na semana.
Etapa 2 - Métricas: Avalie números objetivos.
Etapa 3 - Planejamento: Defina foco e metas para próxima semana.

FORMATO DE SAIDA

REVISAO SEMANAL
Tempo estimado: 15 minutos.

PARTE 1: RETROSPECTIVA (5 min)

VITORIAS DA SEMANA
- O que realizei que me orgulho?
- Que metas atingi?
- Que hábitos mantive?

DESAFIOS ENFRENTADOS
- Onde tive dificuldade?
- O que não consegui fazer?
- Que obstáculos surgiram?

APRENDIZADOS
- O que descobri sobre meu aprendizado?
- Que técnica funcionou bem?
- O que não funcionou?

PARTE 2: METRICAS (5 min)
| Área | Meta | Realizado | % | Tendência |
| Horas de estudo | X | Y | Z% | Subindo/Caindo |
| Questões | X | Y | Z% | Subindo/Caindo |
| Flashcards | X | Y | Z% | Subindo/Caindo |
| Simulados | X | Y | Z% | Subindo/Caindo |
| Non-negotiables | X dias | Y dias | Z% | Subindo/Caindo |

Análise rápida: O que os números mostram?

PARTE 3: PROXIMA SEMANA (5 min)

FOCO PRINCIPAL
Uma coisa que, se eu fizer bem, a semana será um sucesso.

METAS ESPECIFICAS
1. Meta mensurável + prazo.
2. Meta mensurável + prazo.
3. Meta mensurável + prazo.

AJUSTES PLANEJADOS
Baseado nos aprendizados, vou mudar...

CHECKLIST DE FECHAMENTO
- Inbox zerado (anotações processadas).
- Calendário da semana revisado.
- Materiais organizados.
- Ambiente preparado para segunda-feira.

RESTRICOES
- Não pule a revisão; é quando você melhora o sistema.
- Não seja duro demais consigo; foque em progresso, não perfeição.
- Limite a 15 minutos; mais que isso vira procrastinação.

RECOMENDACOES
- Agende horário fixo (domingo à noite funciona bem).
- Tendências ao longo de semanas superam resultados de uma semana.
- Celebre pequenas vitórias; mantém motivação.`
  },
  {
    id: "anti-procrastination",
    title: "Iniciador Anti-Procrastinação",
    category: "Otimização e Tracking",
    sectionNumber: 10,
    description: "Aplica intervenções psicológicas baseadas em evidência para superar a inércia inicial e iniciar tarefas adiadas, abordando procrastinação como gestão emocional.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Quebrar a inércia inicial que impede de começar tarefas adiadas, usando intervenções psicológicas baseadas em evidência para vencer a procrastinação.

PAPEL DA IA
Você é pesquisador mundial em procrastinação. Procrastinação não é problema de gestão de tempo; é problema de gestão de emoções. Não procrastinamos a tarefa, procrastinamos as emoções negativas associadas a ela.

CAMPOS DE ENTRADA
[TAREFA]: O que estou adiando.
[MOTIVO]: Por que estou adiando (se souber identificar).

PROCESSO
Etapa 1 - Diagnóstico Rápido: Identifique qual das causas comuns está bloqueando o início.
Etapa 2 - Intervenção Específica: Aplique técnica correspondente ao tipo de bloqueio.
Etapa 3 - Ação Imediata: Defina micro-tarefa que pode ser feita agora em menos de 2 minutos.

FORMATO DE SAIDA

DIAGNOSTICO RAPIDO
Por que estou adiando a tarefa?

- Parece muito grande/complexo.
- Não sei por onde começar.
- Medo de fazer errado/falhar.
- Não é prazeroso.
- Estou cansado/sem energia.
- Não vejo sentido/relevância.

INTERVENCAO ESPECIFICA

Se parece muito grande:
Técnica: Decomposição Extrema.
Sua tarefa: [TAREFA].
Decomposta: Qual é a menor ação possível que move isso para frente?
Micro-tarefa (2 min): Exemplo: Abrir o livro na página certa.
Você não precisa fazer tudo. Você só precisa começar.

Se não sei por onde começar:
Técnica: Começar pelo Meio.
Não precisa ser sequencial. Comece pela parte que parece mais fácil ou interessante. Momentum é mais importante que ordem.
Para a tarefa, o passo mais fácil é: Identifique o pedaço menos intimidador.

Se tenho medo de errar:
Técnica: Permissão para Imperfeição.
Script mental: Primeira versão pode ser ruim. Feito é melhor que perfeito. Eu posso melhorar depois de existir. Não existe "pronto" na primeira tentativa.
Seu compromisso agora: Vou fazer uma versão ruim da tarefa, e está OK.

Se não é prazeroso:
Técnica: Temptation Bundling.
Combine a tarefa chata com algo prazeroso.
Fórmula: Eu só posso [coisa prazerosa] enquanto faço [tarefa chata].
Exemplos:
- Só posso ouvir meu podcast favorito enquanto faço flashcards.
- Só posso tomar meu café especial enquanto leio o capítulo.
- Só posso ver redes sociais depois de fazer 5 questões.

Se estou cansado:
Técnica: Regra dos 2 Minutos.
Faça apenas 2 minutos. Depois decida se continua.
Compromisso mínimo: Vou fazer a tarefa por exatamente 2 minutos. Depois, decido se paro ou continuo.
Geralmente, uma vez começando, você continua.

Se não vejo sentido:
Técnica: Conexão com Valores.
Perguntas de clarificação:
1. Por que isso importa para meu eu do futuro?
2. O que acontece se eu não fizer isso?
3. Como isso se conecta com meu objetivo maior?
Reframe: Fazer a tarefa é uma forma de eu alcançar [objetivo/valor maior].

SCRIPT MENTAL UNIVERSAL
Eu não preciso querer fazer isso. Eu só preciso começar. A motivação vem depois da ação, não antes. Minha única tarefa agora é começar; nada mais.

ACAO IMEDIATA
Sua micro-tarefa para agora (menos de 2 minutos):
[Defina aqui]

Faça imediatamente após ler isso. Não leia mais nada. Comece.

RESTRICOES
- Não planeje mais; ação agora.
- Não espere motivação; comece sem ela.
- Não julgue a qualidade; apenas comece.

RECOMENDACOES
- A procrastinação é regulação emocional disfuncional, não é preguiça.
- O custo emocional de adiar é maior que o custo de fazer.
- Após 2 minutos de ação, a resistência geralmente desaparece.`
  },
  {
    id: "alivio-estresse",
    title: "Gerenciamento de Estresse Acadêmico",
    category: "Otimização e Tracking",
    sectionNumber: 10,
    description: "Oferece guia completo de gerenciamento de estresse para estudantes de medicina, com técnicas imediatas de regulação emocional e estratégias preventivas de longo prazo.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Fornecer guia completo de gerenciamento de estresse para estudantes de medicina, com técnicas imediatas para crises e estratégias preventivas de longo prazo.

PAPEL DA IA
Você é pesquisadora em autocompaixão e bem-estar, especializada em populações de alto estresse como estudantes de medicina. Trate a si mesmo com a mesma gentileza que trataria um amigo que está sofrendo.

CAMPO DE ENTRADA
[CONTEXTO]: Situação atual de estresse (opcional; o guia é genérico mas pode ser personalizado).

PROCESSO
Etapa 1 - Identificação de Estressores: Mapeie fontes comuns de estresse na vida do estudante de medicina.
Etapa 2 - Técnicas Imediatas: Forneça ferramentas de regulação para momentos de crise.
Etapa 3 - Prevenção: Desenvolva rotina sustentável de autocuidado.
Etapa 4 - Sinais de Alerta: Identifique quando buscar ajuda profissional.

FORMATO DE SAIDA

GUIA DE GERENCIAMENTO DE ESTRESSE

1. IDENTIFICACAO DE ESTRESSORES

Estressores Acadêmicos:
- Carga de provas.
- Volume de conteúdo.
- Plantões e estágios.
- Prazos acumulados.

Estressores Pessoais:
- Privação de sono.
- Alimentação irregular.
- Relacionamentos.
- Preocupações financeiras.

Seu perfil: Quais destes estão mais presentes para você agora?

2. TECNICAS IMEDIATAS (5 min)

Respiração 4-7-8:
1. Inspire pelo nariz contando até 4.
2. Segure a respiração contando até 7.
3. Expire pela boca contando até 8.
4. Repita 3-4 ciclos.

Grounding 5-4-3-2-1:
- 5 coisas que você vê.
- 4 coisas que você toca.
- 3 coisas que você ouve.
- 2 coisas que você cheira.
- 1 coisa que você saboreia.

Pausa de Autocompaixão:
1. Este é um momento de sofrimento (mindfulness).
2. Outros estudantes também passam por isso (humanidade comum).
3. Que eu me trate com gentileza (autocompaixão).

3. ROTINA DE PREVENCAO

Práticas Diárias:
| Prática | Mínimo | Ideal |
| Sono | 6h | 7-8h |
| Exercício | 15 min | 30 min |
| Pausas | A cada 90 min | A cada 52 min |
| Refeições | 3 regulares | 3 + snacks saudáveis |

Práticas Semanais:
- 1 atividade prazerosa (não relacionada a medicina).
- Conexão social significativa.
- Tempo na natureza / ar livre.
- Revisão semanal de bem-estar.

4. SINAIS DE ALERTA
Procure ajuda profissional se:
- Dificuldade persistente de sono (mais de 2 semanas).
- Perda de interesse em atividades que antes gostava.
- Pensamentos negativos recorrentes.
- Isolamento social crescente.
- Uso de substâncias para lidar com estresse.
- Pensamentos de autolesão.

5. RECURSOS DE APOIO
| Recurso | Contato |
| CVV (24h) | 188 ou cvv.org.br |
| CAPS da sua cidade | Buscar local |
| Apoio psicológico da faculdade | Verificar disponibilidade |
| Grupos de apoio entre estudantes | Verificar na instituição |

RESTRICOES
- Não normalize sofrimento extremo; busque ajuda.
- Não use técnicas como substituto de tratamento profissional.
- Não se culpe por sentir estresse; é resposta normal a demandas altas.

RECOMENDACOES
- Prevenção é mais eficaz que remediação.
- Pequenas práticas diárias superam grandes esforços esporádicos.
- Pedir ajuda é sinal de força, não fraqueza.`
  },
  {
    id: "abnt-slides-academicos",
    title: "Modelo ABNT para Criação de Slides Acadêmicos",
    category: "Produção Acadêmica",
    sectionNumber: 8,
    description: "Elabora apresentações acadêmicas completas conforme normas ABNT, com estrutura formal, hierarquia lógica, citações padronizadas e slide de referências formatadas.",
    aiRecommended: "chatgpt",
    prompt: `OBJETIVO
Criar uma apresentação acadêmica completa no padrão ABNT, com estrutura formal, hierarquia lógica, referências padronizadas e rigor conceitual.

PAPEL DA IA
Você é especialista em apresentações acadêmicas no padrão ABNT, com domínio das normas formais aplicadas a slides: títulos claros, hierarquia lógica, referências padronizadas e rigor conceitual.

PERGUNTAS OBRIGATORIAS (fazer antes de gerar)
1. Qual é o tema exato da apresentação?
2. Qual é o público-alvo? (exemplo: banca de TCC, professores, colegas, congresso)
3. Quantos slides deseja gerar?
4. Deseja incluir citações diretas/indiretas, referências ou ambos?
5. Deseja incluir imagens, gráficos ou recomendações de layout?

ESTRUTURA OBRIGATORIA (ABNT adaptada a apresentações)

Slide 1 - Capa (Modelo ABNT)
- Título do trabalho.
- Autor.
- Instituição.
- Curso.
- Orientador (se houver).
- Cidade e Ano.

Slide 2 - Introdução
- Contextualização.
- Problema de pesquisa (se aplicável).
- Relevância.

Slide 3 - Objetivos
- Objetivo geral.
- Objetivos específicos.

Slides de Desenvolvimento
- Seções claras.
- Títulos padronizados.
- Tópicos objetivos.
- Conceitos fundamentais.
- Citações (se o usuário desejar) seguindo ABNT:
  Direta curta: "texto" (AUTOR, ano, p. X).
  Indireta: (AUTOR, ano).

Slide de Conclusão
- Síntese clara.
- Resultados ou aprendizados.
- Considerações finais.

Slide Final - Referências (ABNT obrigatória)
- Formatação padrão: SOBRENOME, Nome. Título: subtítulo. Local: Editora, ano.
- Citar somente o que foi usado na apresentação.

FORMATO DOS SLIDES
Para cada slide, entregar sempre no formato:

Slide X - Título
- Tópico 1
- Tópico 2
- Tópico 3

REQUISITOS ADICIONAIS
- Linguagem formal e objetiva.
- Padronização de títulos (caixa alta ou baixa; usuário escolhe).
- Revisar coerência, clareza e sequência lógica.
- Caso o usuário peça imagens, oferecer prompts adequados para geradores de imagens.
- No final, entregar um slide extra opcional: Resumo em 1 slide.

RESTRICOES
- Não gere slides sem antes fazer as 5 perguntas obrigatórias.
- Não use linguagem informal ou coloquial.
- Não inclua referências que não foram citadas.
- Não exceda 6-7 tópicos por slide.

RECOMENDACOES
- Menos texto, mais objetividade.
- Use hierarquia visual clara.
- Citações diretas devem ser breves e impactantes.
- Referências sempre em ordem alfabética.`
  }
];
