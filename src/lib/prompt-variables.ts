/**
 * Utilitário para extração e manipulação de variáveis em prompts.
 * Variáveis são identificadas pelo padrão [NOME_DA_VARIAVEL].
 */

export interface PromptVariable {
  id: string;
  name: string;
  label: string;
  description: string;
  placeholder: string;
}

/**
 * Extrai todas as variáveis únicas de um texto de prompt.
 * Variáveis seguem o padrão [NOME] ou [NOME DA VARIAVEL].
 */
export function extractVariables(promptText: string): PromptVariable[] {
  const variableRegex = /\[([A-ZÁÀÂÃÉÈÊÍÏÓÔÕÚÜÇ][A-ZÁÀÂÃÉÈÊÍÏÓÔÕÚÜÇ0-9\s_-]*)\]/g;
  const matches = promptText.matchAll(variableRegex);
  const seen = new Set<string>();
  const variables: PromptVariable[] = [];

  for (const match of matches) {
    const rawName = match[1].trim();
    
    // Ignora variáveis que são exemplos de formato (contém números específicos ou são genéricas)
    if (isExampleVariable(rawName)) {
      continue;
    }

    if (!seen.has(rawName)) {
      seen.add(rawName);
      variables.push({
        id: generateVariableId(rawName),
        name: rawName,
        label: formatLabel(rawName),
        description: generateDescription(rawName),
        placeholder: generatePlaceholder(rawName),
      });
    }
  }

  return variables;
}

/**
 * Verifica se a variável é apenas um exemplo de formato, não um campo real.
 */
function isExampleVariable(name: string): boolean {
  const examplePatterns = [
    /^PERGUNTA\s*\d+$/i,
    /^RESPOSTA\s*\d+$/i,
    /^QUESTAO\s*\d+$/i,
    /^OPCAO\s*[A-E]$/i,
    /^ITEM\s*\d+$/i,
    /^EXEMPLO\s*\d+$/i,
    /^CARD\s*\d+$/i,
  ];
  
  return examplePatterns.some(pattern => pattern.test(name));
}

/**
 * Gera um ID seguro para a variável.
 */
function generateVariableId(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

/**
 * Formata o nome da variável para exibição como label.
 */
function formatLabel(name: string): string {
  return name
    .split(/[\s_-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Gera uma descrição contextual para a variável baseada no nome.
 */
function generateDescription(name: string): string {
  const upperName = name.toUpperCase();
  
  const descriptions: Record<string, string> = {
    'TEMA': 'Assunto ou tópico médico principal a ser abordado.',
    'CONCEITO': 'Conceito ou termo médico específico.',
    'CONCEITO ABSTRATO': 'Termo ou mecanismo médico a ser concretizado.',
    'NOVO TEMA': 'Conceito ou tópico a ser integrado ao conhecimento existente.',
    'NOTAS': 'Conteúdo de estudo a ser processado.',
    'ESPECIALIDADE': 'Área ou especialidade médica.',
    'PROVA ALVO': 'Exame ou avaliação para qual está se preparando.',
    'TRECHO DO LIVRO': 'Passagem textual a ser analisada.',
    'SINTOMA': 'Manifestação clínica ou queixa do paciente.',
    'SINTOMAS': 'Lista de manifestações clínicas ou queixas.',
    'DIAGNOSTICO 1': 'Primeira hipótese diagnóstica.',
    'DIAGNOSTICO 2': 'Segunda hipótese diagnóstica.',
    'DOENCA': 'Patologia ou condição médica.',
    'CONDICAO': 'Situação clínica ou patológica.',
    'MEDICAMENTO': 'Fármaco ou classe medicamentosa.',
    'PROCEDIMENTO': 'Técnica ou procedimento médico.',
    'EXAME': 'Exame laboratorial ou de imagem.',
    'SISTEMA': 'Sistema orgânico ou fisiológico.',
    'QUESTAO': 'Enunciado da questão a ser analisada.',
    'RESPOSTA DO ALUNO': 'Sua resposta ou raciocínio.',
    'GABARITO': 'Resposta correta oficial.',
    'TOPICO DIFICIL': 'Assunto que apresenta dificuldade.',
    'CONCEITO CENTRAL': 'Ideia ou conceito principal.',
    'META': 'Objetivo a ser alcançado.',
    'DIAS': 'Número de dias disponíveis.',
    'HABITO': 'Comportamento ou rotina a ser desenvolvida.',
    'PROJETO': 'Trabalho acadêmico ou projeto.',
    'ETAPA': 'Fase ou momento do projeto.',
    'PERIODO': 'Intervalo de tempo para análise.',
    'BLOQUEIO': 'Dificuldade ou obstáculo identificado.',
    'AREA': 'Campo ou área de estudo.',
  };

  // Busca correspondência exata primeiro
  if (descriptions[upperName]) {
    return descriptions[upperName];
  }

  // Busca correspondência parcial
  for (const [key, desc] of Object.entries(descriptions)) {
    if (upperName.includes(key) || key.includes(upperName)) {
      return desc;
    }
  }

  return `Informe ${formatLabel(name).toLowerCase()} para personalizar o prompt.`;
}

/**
 * Gera um placeholder de exemplo para a variável.
 */
function generatePlaceholder(name: string): string {
  const upperName = name.toUpperCase();
  
  const placeholders: Record<string, string> = {
    'TEMA': 'Ex: Insuficiência cardíaca',
    'CONCEITO': 'Ex: Homeostase',
    'CONCEITO ABSTRATO': 'Ex: Feedback negativo',
    'NOVO TEMA': 'Ex: Metabolismo lipídico',
    'NOTAS': 'Cole suas anotações aqui...',
    'ESPECIALIDADE': 'Ex: Cardiologia',
    'PROVA ALVO': 'Ex: REVALIDA, USP-RP, ENARE',
    'TRECHO DO LIVRO': 'Cole o trecho aqui...',
    'SINTOMA': 'Ex: Dispneia',
    'SINTOMAS': 'Ex: Febre, tosse, dispneia',
    'DIAGNOSTICO 1': 'Ex: Pneumonia bacteriana',
    'DIAGNOSTICO 2': 'Ex: Tuberculose pulmonar',
    'DOENCA': 'Ex: Diabetes mellitus tipo 2',
    'CONDICAO': 'Ex: Hipertensão gestacional',
    'MEDICAMENTO': 'Ex: Metformina',
    'PROCEDIMENTO': 'Ex: Intubação orotraqueal',
    'EXAME': 'Ex: Hemograma completo',
    'SISTEMA': 'Ex: Sistema cardiovascular',
    'QUESTAO': 'Cole o enunciado da questão...',
    'RESPOSTA DO ALUNO': 'Descreva seu raciocínio...',
    'GABARITO': 'Ex: Alternativa C',
    'TOPICO DIFICIL': 'Ex: Ciclo de Krebs',
    'CONCEITO CENTRAL': 'Ex: Pressão oncótica',
    'META': 'Ex: Concluir revisão de cardiologia',
    'DIAS': 'Ex: 30',
    'HABITO': 'Ex: Revisar flashcards diariamente',
    'PROJETO': 'Ex: TCC sobre sepse neonatal',
    'ETAPA': 'Ex: Revisão bibliográfica',
    'PERIODO': 'Ex: Última semana',
    'BLOQUEIO': 'Ex: Dificuldade em manter foco',
    'AREA': 'Ex: Clínica médica',
  };

  if (placeholders[upperName]) {
    return placeholders[upperName];
  }

  for (const [key, placeholder] of Object.entries(placeholders)) {
    if (upperName.includes(key) || key.includes(upperName)) {
      return placeholder;
    }
  }

  return `Informe ${formatLabel(name).toLowerCase()}...`;
}

/**
 * Substitui todas as variáveis no prompt pelos valores fornecidos.
 */
export function replaceVariables(
  promptText: string,
  values: Record<string, string>
): string {
  let result = promptText;

  for (const [variableName, value] of Object.entries(values)) {
    if (value.trim()) {
      // Escapa caracteres especiais do regex no nome da variável
      const escapedName = variableName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\[${escapedName}\\]`, 'g');
      result = result.replace(regex, value.trim());
    }
  }

  return result;
}

/**
 * Verifica se todos os campos obrigatórios foram preenchidos.
 */
export function areAllVariablesFilled(
  variables: PromptVariable[],
  values: Record<string, string>
): boolean {
  return variables.every(v => values[v.name]?.trim());
}

/**
 * Conta quantas variáveis estão preenchidas.
 */
export function countFilledVariables(
  variables: PromptVariable[],
  values: Record<string, string>
): { filled: number; total: number } {
  const filled = variables.filter(v => values[v.name]?.trim()).length;
  return { filled, total: variables.length };
}
