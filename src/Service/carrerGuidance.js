import OpenAI from "openai";
import 'dotenv/config';
import { GetCarrerprompt } from "../utils/carrerGuidancePrompt.js";

const openai = new OpenAI();

async function getCareerAdvice(userSkills) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Must be gpt-4o or gpt-3.5-turbo-0125 for JSON mode
      messages: [
        { 
          role: "system", 
          content: "You are a helpful assistant designed to output JSON." 
        },
        { 
          role: "user", 
          content: GetCarrerprompt(userSkills) 
        },
      ],
      // This forces the model to output a valid JSON string
      response_format: { type: "json_object" }, 
    });

    // Parse the string response into a real JavaScript object
    const careerData = JSON.parse(response.choices[0].message.content);
    
    console.log(careerData);
    return careerData;
    
  } catch (error) {
    console.error("Failed to generate career path:", error);
  }
}


export default getCareerAdvice;