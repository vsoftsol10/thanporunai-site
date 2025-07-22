const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB Atlas
connectDB();

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Routes
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

// Root Route (Optional Health Check)
app.get('/', (req, res) => {
  res.send('🚀 API is running and connected to MongoDB Atlas');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
