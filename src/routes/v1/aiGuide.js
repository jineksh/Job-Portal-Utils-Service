import express from 'express';
import { carrerGuide,resumeAnalyze } from '../../controller/AiController.js';
import { uploadResume } from '../../middleware/multer.js';

const router = express.Router();

router.post('/carrer-guide', carrerGuide);
router.post('/resume-analysis', uploadResume, resumeAnalyze);


export default router;