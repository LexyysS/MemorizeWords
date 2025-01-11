import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_API_KEY;
export async function getResponseIA(word) {
  
  const genAI = new GoogleGenerativeAI(
    apiKey
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
Devuelve información sobre la palabra "${word}" en formato JSON estructurado. 
Si la palabra esta en español, traducela a inglés.
Solo incluye lo siguiente:
{
    "word": "string (la palabra en inglés)",
    "translate": "string (traduce la palabra en español)",
    "examples": [
        {
            "sentence": "string (una oración de ejemplo en inglés)",
            "translation": "string (la traducción al español de la oración)"
        },
        ...
    ],
    "usage": "string (cómo se utiliza la palabra en un contexto general)"
}
No incluyas ninguna explicación adicional, solo devuelve el JSON.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
