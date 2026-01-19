import pdf from 'pdf-parse-fork'

import OpenAI from "openai";
import 'dotenv/config';
import { getATSAnalysisPrompt } from '../utils/resumeAnalysisPrompt.js';
const openai = new OpenAI();


const getResumeAnalysis = async(file)=>{
    try {
        const pdfData = await pdf(file.buffer);
        const resumeText = pdfData.text;

        const prompt = getATSAnalysisPrompt(resumeText);

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant designed to analyze resumes and provide feedback."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            response_format: { type: "json_object" },
        });
        const analysisData = JSON.parse(response.choices[0].message.content);
        return analysisData;

    } catch (error) {
         console.error("Failed to generate career path:", error);
    }
}

export default getResumeAnalysis;