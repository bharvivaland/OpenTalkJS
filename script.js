import ollama from "ollama";

async function runChat() {
  try {
    const response = await ollama.chat({
      model: "qwen2:0.5b",
      messages: [{ role: 'user', content: "Generate marketing emails" }]
    });

    console.log("Chatbot Response:", response.message.content);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

runChat();