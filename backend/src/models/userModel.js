import { Sequelize} from 'sequelize';
import sequelize from '../config/db.js';


//tried Sequelize for datatypes

const User = sequelize.define('User', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password_hash: Sequelize.STRING,
  salt: Sequelize.STRING,
  preferences: Sequelize.JSONB,
  avatar_url: Sequelize.STRING,
  bio: Sequelize.STRING,
  score: Sequelize.INTEGER,
}, 
{
  tableName: 'Users',  // ensure correct table name
  underscored: true,   // map camelCase fields to snake_case columns
  timestamps: true     // ensure createdAt and updatedAt are handled
});


export default User;
