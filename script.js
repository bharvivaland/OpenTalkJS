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


// //Task_4
// import fs from "fs";
// import path from "path";
// import ollama from "ollama";

// async function GenAi_ForCategory(selectedCategory) {
//     try {
//         const questionsDir = "./Questions";
//         const answersDir = "./Answers";

//         if (!fs.existsSync(answersDir)) {
//             fs.mkdirSync(answersDir, { recursive: true });
//         }

//         const categoryDir = path.join(questionsDir, selectedCategory);
//         if (!fs.existsSync(categoryDir)) {
//             console.error(`The category ${selectedCategory} does not exist in Questions directory.`);
//             return;
//         }

//         const questionFiles = fs.readdirSync(categoryDir);

//         for (const file of questionFiles) {
//             const inputFilePath = path.join(categoryDir, file);

//             if (fs.statSync(inputFilePath).isFile()) {
//                 const inputContent = fs.readFileSync(inputFilePath, "utf-8");

//                 const response = await ollama.chat({
//                     model: "qwen2:0.5b",
//                     messages: [{ role: "user", content: inputContent }],
//                 });

//                 const chatbotResponse = response.message.content;

//                 const outputCategoryDir = path.join(answersDir, selectedCategory);
//                 if (!fs.existsSync(outputCategoryDir)) {
//                     fs.mkdirSync(outputCategoryDir, { recursive: true });
//                 }
//                 const outputFilePath = path.join(outputCategoryDir, file);
//                 fs.writeFileSync(outputFilePath, chatbotResponse, "utf-8");

//                 console.log(`Response for ${file} has been saved to ${outputFilePath}`);
//             }
//         }

//         console.log(`All responses for category ${selectedCategory} have been processed and saved.`);
//     } catch (error) {
//         console.error("Error occurred:", error.message);
//     }
// }

// const args = process.argv.slice(2);
// if (args.length === 0) {
//     console.error("Please provide a category as a command-line argument (e.g., Academic, Professional, Creative).");
//     process.exit(1);
// }

// const selectedCategory = args[0];
// GenAi_ForCategory(selectedCategory);

