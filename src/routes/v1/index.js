import express from 'express';
import uploadRouter  from './upload.js';
import aiGuideRouter from './aiGuide.js';
const router = express.Router();

router.use('/uploads', uploadRouter);
router.use('/ai', aiGuideRouter);

export default router;