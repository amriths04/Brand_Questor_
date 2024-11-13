import Brand from '../models/brandModel.js';

export const registerBrand = async (req, res) => {
  try {
    const { name, description, origin_country, founded_year, values, logo_url, website_url, twitter_url, facebook_url, linkedin_url, youtube_url, instagram_url } = req.body;
    
    const existingBrand = await Brand.findOne({ where: { name } });
    if (existingBrand) {
      return res.status(400).json({ message: 'Brand with this name already exists' });
    }
    const newBrand = await Brand.create({
      name,
      description,
      origin_country,
      founded_year,
      values,
      logo_url,
      website_url,
      twitter_url,
      facebook_url,
      linkedin_url,
      youtube_url,
      instagram_url
    });

    res.status(201).json({
      message: 'Brand registered successfully',
      brand_id: newBrand.brand_id,
      name: newBrand.name
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
