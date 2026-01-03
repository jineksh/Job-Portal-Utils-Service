import express from 'express';
import { uploadFile,deleteFile } from '../../controller/uploadController.js';

const router = express.Router();

router.post('/', uploadFile);
router.delete('/delete',deleteFile);

export default router;