import Brand from '../models/brandModel.js';
import { Op, Sequelize } from 'sequelize'; 

export const searchByBrandName = async (req, res) => {
  try {
    const { query } = req.query;
    const brand = await Brand.findOne({ where: { name: query } });
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const searchSimilarBrandNames = async (req, res) => {
  try {
    const { query } = req.query;
    const brands = await Brand.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`
        }
      }
    });
    if (brands.length === 0) {
      return res.status(404).json({ message: 'No similar brands found' });
    }
    res.json(brands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const fuzzySearchBrandNames = async (req, res) => {
    try {
      const { query } = req.query;
  
      const brands = await Brand.findAll({
        where: Sequelize.where(
          Sequelize.fn('levenshtein', Sequelize.col('name'), query),  
          { [Op.lte]: 3 } //A smaller number (e.g., 2) will return only very similar matches, while a larger number (e.g., 5) will return more loosely matching results.
        ),
      });
  
      if (brands.length === 0) {
        return res.status(404).json({ message: 'No similar brands found' });
      }
  
      res.json(brands);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };