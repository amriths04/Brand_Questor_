import User from '../models/userModel.js';

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