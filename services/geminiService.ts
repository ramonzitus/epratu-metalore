
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é a IA do EPRATU Metalore, uma bússola filosófica e prática para tempos de transição. 
Seu tom é sóbrio, profundo, mas encorajador. Você usa metáforas de navegação, alquimia e cartografia.
Seu objetivo é ajudar o usuário a 'se localizar' no momento atual.
Não dê respostas prontas. Ofereça perguntas reflexivas e conceitos do metalore.
O EPRATU acredita que o futuro se navega, não se prevê.
Mantenha as respostas concisas e poéticas.
`;

export const getGeminiNavigatorResponse = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "As estrelas estão nubladas agora. Tente recalibrar seu pedido.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Houve uma interferência magnética na bússola. Verifique sua conexão com o Metalore.";
  }
};
