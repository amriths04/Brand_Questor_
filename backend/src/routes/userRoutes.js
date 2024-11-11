import express from 'express';
import { getUserProfile,getAllUsers,createUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile/:user_id', getUserProfile);
router.get('/allusers', getAllUsers);
router.post('/register', createUser);
router.post('/login', loginUser);


export default router;
