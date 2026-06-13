const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_GENAI_API_KEY
})

const invokeGeminiAi = async () => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents : "Hello Gemini. Answer in 10 words. What is AI ?"
    })

    console.log(response.text);
}

module.exports = invokeGeminiAi;