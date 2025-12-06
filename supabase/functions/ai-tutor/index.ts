import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, messages, explanation, context } = await req.json();

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY não configurada");
    }

    console.log(`AI Tutor request - type: ${type}`);

    if (type === "tutor") {
      // Streaming tutor chat
      const systemPrompt = `Você é um tutor IA especializado em medicina, usando o método socrático. 
Suas diretrizes:
- Faça perguntas guiadas para ajudar o estudante a chegar às conclusões
- Use linguagem clara e profissional
- Referencie evidências científicas quando relevante
- Seja paciente e encorajador
- Responda em português brasileiro
- Evite dar respostas diretas; guie o raciocínio do estudante
- Seja conciso, mas preciso`;

      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map((m: { role: string; content: string }) => ({
              role: m.role,
              content: m.content,
            })),
          ],
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("AI Gateway error:", response.status, errorText);
        
        if (response.status === 429) {
          return new Response(JSON.stringify({ error: "Limite de requisições excedido. Aguarde um momento." }), {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        if (response.status === 402) {
          return new Response(JSON.stringify({ error: "Créditos insuficientes." }), {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        throw new Error("Erro ao conectar com IA");
      }

      return new Response(response.body, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    if (type === "correct") {
      // Explanation corrector (non-streaming)
      const systemPrompt = `Você é um avaliador de explicações médicas. Analise a explicação do estudante e retorne um JSON com:
{
  "correct": ["pontos corretos"],
  "inaccuracies": ["imprecisões encontradas"],
  "errors": ["erros conceituais"],
  "suggestions": ["sugestões de melhoria"]
}
Seja construtivo e educativo. Responda APENAS com o JSON, sem markdown.`;

      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: `Contexto do prompt: ${context.title}\n\n${context.content}\n\nExplicação do estudante:\n${explanation}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        console.error("AI Gateway error:", response.status);
        throw new Error("Erro ao analisar explicação");
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || "";
      
      try {
        const result = JSON.parse(content.replace(/```json\n?|```\n?/g, ""));
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch {
        return new Response(JSON.stringify({
          correct: [],
          inaccuracies: [],
          errors: [],
          suggestions: ["Não foi possível analisar a explicação. Tente novamente."],
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    if (type === "generate") {
      // Question generator (non-streaming)
      const systemPrompt = `Você é um gerador de questões médicas. Baseado no contexto, crie 5 questões de múltipla escolha.
Retorne um JSON no formato:
{
  "questions": [
    {
      "question": "Pergunta aqui",
      "options": ["Opção A", "Opção B", "Opção C", "Opção D"],
      "correct": 0,
      "explanation": "Explicação da resposta correta"
    }
  ]
}
Crie questões de diferentes níveis de dificuldade. Responda APENAS com o JSON, sem markdown.`;

      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: `Crie questões baseadas neste prompt:\nTítulo: ${context.title}\n\nConteúdo:\n${context.content}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        console.error("AI Gateway error:", response.status);
        throw new Error("Erro ao gerar questões");
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || "";
      
      try {
        const result = JSON.parse(content.replace(/```json\n?|```\n?/g, ""));
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch {
        return new Response(JSON.stringify({ questions: [] }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    return new Response(JSON.stringify({ error: "Tipo de requisição inválido" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("AI Tutor error:", error);
    const message = error instanceof Error ? error.message : "Erro interno";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
