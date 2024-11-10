import express from 'express';
import { getUserProfile,getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile/:user_id', getUserProfile);
router.get('/allusers', getAllUsers);

export default router;
