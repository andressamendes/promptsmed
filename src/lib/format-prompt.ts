// Remove emojis and clean up prompt text for professional display
export function removeEmojis(text: string): string {
  // Remove emoji characters
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F000}-\u{1F02F}]|[\u{1F0A0}-\u{1F0FF}]|[\u{1F100}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]/gu;
  
  return text
    .replace(emojiRegex, "")
    .replace(/\s+/g, " ") // Clean up extra spaces
    .trim();
}

// Clean section headers for professional display
export function cleanSectionHeader(text: string): string {
  return removeEmojis(text).replace(/^#+\s*/, "").trim();
}

// Parse prompt into structured sections
export interface PromptSection {
  type: "header" | "subheader" | "list" | "numbered" | "text" | "code" | "divider";
  content: string;
  level?: number;
}

export function parsePromptSections(text: string): PromptSection[] {
  const lines = text.split("\n");
  const sections: PromptSection[] = [];
  let inCodeBlock = false;
  let codeContent = "";

  for (const line of lines) {
    const trimmed = line.trim();

    // Handle code blocks
    if (trimmed.startsWith("```")) {
      if (inCodeBlock) {
        sections.push({ type: "code", content: codeContent.trim() });
        codeContent = "";
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + "\n";
      continue;
    }

    // Skip empty lines
    if (!trimmed) continue;

    // Divider lines
    if (/^[━═─]{5,}$/.test(trimmed)) {
      sections.push({ type: "divider", content: "" });
      continue;
    }

    // Headers with emoji patterns like "🎯 OBJETIVO"
    const headerMatch = trimmed.match(/^[^\w]*([A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ\s\-()]+)$/);
    if (headerMatch && trimmed.length < 50) {
      sections.push({ 
        type: "header", 
        content: removeEmojis(trimmed),
        level: 1 
      });
      continue;
    }

    // Markdown headers
    if (trimmed.startsWith("# ")) {
      sections.push({ type: "header", content: cleanSectionHeader(trimmed), level: 1 });
      continue;
    }
    if (trimmed.startsWith("## ")) {
      sections.push({ type: "subheader", content: cleanSectionHeader(trimmed), level: 2 });
      continue;
    }
    if (trimmed.startsWith("### ")) {
      sections.push({ type: "subheader", content: cleanSectionHeader(trimmed), level: 3 });
      continue;
    }

    // List items
    if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      sections.push({ type: "list", content: removeEmojis(trimmed.slice(2)) });
      continue;
    }

    // Numbered items
    const numberedMatch = trimmed.match(/^(\d+)\.\s(.*)$/);
    if (numberedMatch) {
      sections.push({ type: "numbered", content: removeEmojis(numberedMatch[2]), level: parseInt(numberedMatch[1]) });
      continue;
    }

    // Regular text
    sections.push({ type: "text", content: removeEmojis(trimmed) });
  }

  return sections;
}

// Highlight variables in text [VARIABLE]
export function highlightVariables(text: string): { text: string; isVariable: boolean }[] {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.filter(Boolean).map((part) => ({
    text: part.startsWith("[") && part.endsWith("]") ? part.slice(1, -1) : part,
    isVariable: part.startsWith("[") && part.endsWith("]"),
  }));
}
