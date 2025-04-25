import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import incidentRoutes from './routes/incidentRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/incidents', incidentRoutes);

app.use(notFound);
app.use(errorHandler);

connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
