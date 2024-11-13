import express from 'express';
import { registerBrand } from '../controllers/brandController.js';

const router = express.Router();

router.post('/register', registerBrand);

export default router;
