// import fs from "fs";
// import path from "path";
// import ollama from "ollama";

// async function GenAi_ForCategory(selectedCategory) {
//   try {
//     const questionsDir = "./Questions";
//     const answersDir = "./Answers";

//     // Ensure the answers directory exists
//     if (!fs.existsSync(answersDir)) {
//       fs.mkdirSync(answersDir, { recursive: true });
//     }

//     // Validate the category directory
//     const categoryDir = path.join(questionsDir, selectedCategory);
//     if (!fs.existsSync(categoryDir)) {
//       console.error(`The category "${selectedCategory}" does not exist in the Questions directory.`);
//       return;
//     }

//     const questionFiles = fs.readdirSync(categoryDir);

//     // Keep a counter to generate A1.txt, A2.txt, etc.
//     let answerCounter = 1;

//     // Parse and process each question file in the selected category
//     for (const file of questionFiles) {
//       const inputFilePath = path.join(categoryDir, file);

//       if (fs.statSync(inputFilePath).isFile()) {
//         const inputContent = fs.readFileSync(inputFilePath, "utf-8");

//         // Send the question content to the LLM for an answer
//         const response = await ollama.chat({
//           model: "qwen2:0.5b",
//           messages: [{ role: "user", content: inputContent }],
//         });

//         const chatbotResponse = response.message.content;

//         // Save the chatbot's response as A1.txt, A2.txt, etc.
//         const outputCategoryDir = path.join(answersDir, selectedCategory);
//         if (!fs.existsSync(outputCategoryDir)) {
//           fs.mkdirSync(outputCategoryDir, { recursive: true });
//         }
//         const outputFilePath = path.join(outputCategoryDir, `A${answerCounter}.txt`);
//         fs.writeFileSync(outputFilePath, chatbotResponse, "utf-8");

//         console.log(`Response for ${file} has been saved as ${outputFilePath}`);
//         answerCounter++; // Increment the counter
//       }
//     }

//     console.log(`All responses for category "${selectedCategory}" have been processed and saved.`);
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//   }
// }

// // Command-line input for selecting a category
// const args = process.argv.slice(2);
// if (args.length === 0) {
//   console.error("Please provide a category as a command-line argument (e.g., Academic, Professional, Creative).");
//   process.exit(1);
// }

// const selectedCategory = args[0];
// GenAi_ForCategory(selectedCategory);






//Random_final
import fs from 'fs';
import path from 'path';
import ollama from 'ollama';

async function GenAi_ForCategory(selectedCategory) {
  try {
    const questionsDir = './Questions';
    const answersDir = './Answers';

    if (!fs.existsSync(answersDir)) {
      fs.mkdirSync(answersDir, { recursive: true });
    }

    const categoryDir = path.join(questionsDir, selectedCategory);
    if (!fs.existsSync(categoryDir)) {
      console.error(`The category "${selectedCategory}" does not exist in the Questions directory.`);
      return;
    }

    const questionFiles = fs.readdirSync(categoryDir);

    if (questionFiles.length === 0) {
      console.error(`No question files found in the "${selectedCategory}" category.`);
      return;
    }

    // Randomly select one question file
    const randomFile = questionFiles[Math.floor(Math.random() * questionFiles.length)];
    const inputFilePath = path.join(categoryDir, randomFile);
    console.log(`Randomly selected question file: ${randomFile}`);

    const inputContent = fs.readFileSync(inputFilePath, 'utf-8');

    const response = await ollama.chat({
      model: 'qwen2:0.5b',
      messages: [{ role: 'user', content: inputContent }],
    });

    const chatbotResponse = response.message.content;

    const outputCategoryDir = path.join(answersDir, selectedCategory);
    if (!fs.existsSync(outputCategoryDir)) {
      fs.mkdirSync(outputCategoryDir, { recursive: true });
    }

    const existingAnswers = fs.readdirSync(outputCategoryDir).filter(file => /^A\d+\.txt$/.test(file));
    const nextAnswerNumber = existingAnswers.length + 1;
    const answerFileName = `A${nextAnswerNumber}.txt`;
    const outputFilePath = path.join(outputCategoryDir, answerFileName);

    fs.writeFileSync(outputFilePath, chatbotResponse, 'utf-8');
    console.log(`Response for ${randomFile} has been saved as ${outputFilePath}`);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Please provide a category as a command-line argument (e.g., Academic, Professional, Creative).');
  process.exit(1);
}

const selectedCategory = args[0];
GenAi_ForCategory(selectedCategory);
