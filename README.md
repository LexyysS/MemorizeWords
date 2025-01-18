
# MemorizeWords

MemorizeWords es una aplicación web diseñada para facilitar el aprendizaje de palabras en inglés que resultan difíciles de memorizar. Permite seleccionar palabras manualmente o buscarlas con IA, ofreciendo traducciones, ejemplos y significados. Incluye una actividad de memoria donde el usuario repasa palabras guardadas en el navegador, marcando si las sabe o no. Las palabras aprendidas se descartan temporalmente, mientras que las desconocidas muestran su traducción para reforzar el aprendizaje.

Link Demo: https://memorizewords.netlify.app/


<img width="1440" alt="Captura de pantalla 2025-01-16 a las 7 58 00 p  m" src="https://github.com/user-attachments/assets/aa6b1193-1462-4705-8fa5-e0aee38012c4" />

## Installation

Instalar el proyecto

```bash
  git clone https://github.com/LexyysS/MemorizeWords.git
  cd MemorizeWords
  npm run dev
```
Crea un archivo .env en la raiz del proyecto y Inserta tu api key de Gemini AI.
```bash
  VITE_API_KEY = tu_api_key
```

## Stack y tecnologias Utilizadas

- React
- TailwindCSS
- LocalStorage (Para guardar las palabras localmente)
- Zustand (Gestion de estados global)



