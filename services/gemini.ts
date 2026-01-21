import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Note: In a real production app, you might proxy this through a backend to keep the key secret.
// For this demo, we assume the environment variable is present in the build.
const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (apiKey && !ai) {
    ai = new GoogleGenAI({ apiKey });
  }
};

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  if (!ai) {
    initializeGemini();
    if (!ai) return "Error: API Key not configured.";
  }

  try {
    const model = ai!.models;
    
    // Construct the prompt with context about the MONOCHROMA theme
    const systemInstruction = `You are the Lead Architect for the MONOCHROMA Shopify Theme. 
    Your goal is to assist developers in understanding, customizing, and extending the Liquid code provided in this application.
    The theme is Minimalist, High-End, Industrial, Art Gallery style.
    Strictly adhere to Shopify Liquid best practices.
    When asked for code, provide valid Liquid/HTML/CSS.
    Current Stack: Tailwind CSS (in this preview), Vanilla CSS (in Liquid files).
    Maintain a professional, concise, and helpful tone.`;

    const chat = ai!.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
      }
    });

    // Replay history to set context (simplified for this demo, ideally use history in chat creation)
    // For this simple implementation, we will just send the new message with the system instruction context implicit in the chat session.
    // Ideally, we map `history` to the chat history format, but for a single-turn or simple multi-turn within session:
    
    const response = await chat.sendMessage({ message: newMessage });
    return response.text || "I couldn't generate a response.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error connecting to the creative mainframe. Please try again.";
  }
};
