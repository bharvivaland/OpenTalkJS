//Task_1
// import ollama from "ollama";

// async function runChat() {
//   try {
//     const response = await ollama.chat({
//       model: "qwen2:0.5b",
//       messages: [{ role: 'user', content: "Generate marketing emails" }]
//     });

//     console.log("Chatbot Response:", response.message.content);
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//   }
// }

// runChat();

//Task_2
// import fs from "fs"
// import ollama from "ollama"

// async function runChat() {
//   try {
//     const inputFilePath = "q.txt"
//     const inputContent = fs.readFileSync(inputFilePath, "utf-8")

//     const response = await ollama.chat({
//       model: "qwen2:0.5b",
//       messages: [{ role: "user", content: inputContent }]
//     })

//     const chatbotResponse = response.message.content

//     const outputFilePath = "a.txt"
//     fs.writeFileSync(outputFilePath, chatbotResponse, "utf-8")

//     console.log("Chatbot response has been saved to a.txt.")
//   } catch (error) {
//     console.error("Error occurred:", error.message)
//   }
// }

// runChat()



//Task2 B
// import fs from "fs";
// import ollama from "ollama";

// /**
//  * Loads the content of a file.
//  * @param {string} filePath - Path to the file to be loaded.
//  * @returns {string} - The content of the file.
//  */
// function loadFile(filePath) {
//   try {
//     return fs.readFileSync(filePath, "utf-8");
//   } catch (error) {
//     console.error(`Error loading file at ${filePath}:`, error.message);
//     throw error;
//   }
// }

// /**
//  * Saves content to a specified file.
//  * @param {string} filePath - Path to the file where content will be saved.
//  * @param {string} content - The content to save to the file.
//  */
// function saveFile(filePath, content) {
//   try {
//     fs.writeFileSync(filePath, content, "utf-8");
//     console.log(`Response has been saved to ${filePath}.`);
//   } catch (error) {
//     console.error(`Error saving to file at ${filePath}:`, error.message);
//     throw error;
//   }
// }

// /**
//  * Handles chatbot interaction and stores the response.
//  */
// async function executeChat() {
//   try {
//     const inputFilePath = "q.txt";
//     const inputContent = loadFile(inputFilePath);

//     const response = await ollama.chat({
//       model: "qwen2:0.5b",
//       messages: [{ role: "user", content: inputContent }]
//     });

//     const chatbotResponse = response.message.content;

//     const outputFilePath = "a.txt";
//     saveFile(outputFilePath, chatbotResponse);
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//   }
// }

// executeChat();

//Task_3
// import fs from "fs";
// import path from "path";
// import ollama from "ollama";

// async function GenAi_ForAll() {
//   try {
//     const questionsDir = "./Questions";
//     const answersDir = "./Answers";

  
//     if (!fs.existsSync(answersDir)) {
//       fs.mkdirSync(answersDir, { recursive: true });
//     }

    
//     const questionFiles = fs.readdirSync(questionsDir);

//     for (const file of questionFiles) {
//       const inputFilePath = path.join(questionsDir, file);

      
//       if (fs.statSync(inputFilePath).isFile()) {
//         const inputContent = fs.readFileSync(inputFilePath, "utf-8");

        
//         const response = await ollama.chat({
//           model: "qwen2:0.5b",
//           messages: [{ role: "user", content: inputContent }]
//         });

//         const chatbotResponse = response.message.content;

        
//         const outputFilePath = path.join(answersDir, file);
//         fs.writeFileSync(outputFilePath, chatbotResponse, "utf-8");

//         console.log(`Response for ${file} has been saved to ${outputFilePath}`);
//       }
//     }

//     console.log("All responses have been processed and saved in Answer directory .");
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//   }
// }

// GenAi_ForAll();
