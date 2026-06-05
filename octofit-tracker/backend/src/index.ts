import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './routes/user';
import { activityRouter } from './routes/activity';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit';

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/activities', activityRouter);

app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

mongoose.set('strictQuery', true);
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error', error);
    process.exit(1);
  });
