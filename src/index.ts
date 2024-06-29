import express from 'express';
import connectDB from './config/db';
import studentRoutes from './routes/studentRoutes';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors())

connectDB();


app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.use('/api', studentRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});