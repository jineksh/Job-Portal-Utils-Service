import getCareerAdvice from "../Service/carrerGuidance.js";
import getResumeAnalysis from "../Service/getResumeAnalysis.js";

export const carrerGuide = async (req, res, next) => {
    try {
        const { skills } = req.body;
        const skillsString = skills.join(", ");

        const response = await getCareerAdvice(skillsString);
        return res.status(200).json({
            success: true,
            message: "Carrer guide generated successfully",
            data: response
        });

    } catch (error) {
        next(error);
        return res.status(500).json({
            success: false,
            message: "File upload failed",
            error: error.message
        });
    }
}
 export const resumeAnalyze = async (req, res, next) => {
    try {
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "No resume file uploaded"
            });
        }

        const response = await getResumeAnalysis(req.file);
        return res.status(200).json({
            success: true,
            message: "Resume analyzed successfully",
            data: response
        });

    } catch (error) {
        next(error);
        return res.status(500).json({
            success: false,
            message: "Resume analysis failed",
            error: error.message
        });
    }
}