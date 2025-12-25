import express from 'express';
import uploadRouter  from './upload.js';

const router = express.Router();

router.use('/uploads', uploadRouter);
export default router;