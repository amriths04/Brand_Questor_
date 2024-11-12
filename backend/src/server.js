import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 20000;

app.use(cors());
app.use(bodyParser.json());



app.use('/api/users', userRoutes); // user routes





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
