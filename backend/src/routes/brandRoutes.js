import express from 'express';
import { registerBrand } from '../controllers/brandController.js';
import { searchByBrandName, searchSimilarBrandNames, fuzzySearchBrandNames } from '../controllers/brandSearch.js';


const router = express.Router();

router.post('/register', registerBrand);

router.get('/search/exact', searchByBrandName);
router.get('/search/similar', searchSimilarBrandNames);
router.get('/search/fuzzy', fuzzySearchBrandNames);


export default router;
