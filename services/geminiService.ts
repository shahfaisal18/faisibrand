
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

export const getShoppingAdvice = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    // Construct a context about available products
    const productContext = PRODUCTS.map(p => `- ${p.name} ($${p.price}) in ${p.category}: ${p.description}`).join('\n');

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the FaisiBrands Smart Shopping Assistant. 
      The customer is asking: "${userPrompt}"
      
      Our current inventory:
      ${productContext}
      
      Please provide a helpful, professional, and concise recommendation. 
      Mention specific products from our inventory if they fit the user's request. 
      Keep the tone premium and sophisticated.`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. How else can I help you find something stylish today?";
  }
};
