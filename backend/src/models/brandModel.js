import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';

const Brand = sequelize.define('Brand', {
  brand_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  origin_country: Sequelize.STRING,
  founded_year: Sequelize.INTEGER,
  values: Sequelize.JSONB,
  logo_url: Sequelize.STRING,
  twitter_url: Sequelize.STRING,
  facebook_url: Sequelize.STRING,
  website_url: Sequelize.STRING,
  linkedin_url: Sequelize.STRING,
  youtube_url: Sequelize.STRING,
  instagram_url: Sequelize.STRING
}, 
{
  tableName: 'Brands',  
  underscored: true,     
  timestamps: true      
});

export default Brand;
