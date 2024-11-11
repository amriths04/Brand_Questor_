import User from '../models/userModel.js';
import { verifyPassword,encryptPassword } from '../../src/utils/passwordUtils.js';

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.user_id;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({
      user_id: user.user_id,
      username: user.username,
      email: user.email,
      preferences: user.preferences,
      avatar_url: user.avatar_url,
      bio: user.bio,
      score: user.score,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
export const createUser = async (req, res) => {
  try {
    const { username, email, password, preferences, bio, avatar_url } = req.body;

    const { hash, salt } = encryptPassword(password);
  
    const user = await User.create({
      username,
      email,
      password_hash: hash,
      salt,
      preferences,
      bio,
      avatar_url,
    });
  
    res.status(201).json({
      message: 'User created successfully',
      user_id: user.user_id,
      username: user.username,
      email: user.email,
      salt, // Store the unique salt
      preferences: user.preferences,
      bio: user.bio,
      avatar_url: user.avatar_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
  
export const loginUser = async (req, res) => {
  
try {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) 
    return res.status(404).json({ message: 'User not found' });
  
  const isValidPassword = verifyPassword(password, user.password_hash, user.salt); 

  if (!isValidPassword) 
    return res.status(401).json({ message: 'Invalid credentials' });

  res
  .json({ message: 'Login successful', user_id: user.user_id }); 

} catch (error) {
  
  console.error(error);
  res.status(500).json({ message: 'Server error' });
  }
};