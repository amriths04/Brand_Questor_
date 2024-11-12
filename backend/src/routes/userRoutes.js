import express from 'express';
import { getUserProfile,getAllUsers,createUser, loginUser,refreshToken } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile/:user_id', getUserProfile);
router.get('/allusers', getAllUsers);
router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/refresh-token', refreshToken);


export default router;
