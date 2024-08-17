import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRoutes from './routes/ProjectRoutes.js';
import skillRoutes from './routes/SkillRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
