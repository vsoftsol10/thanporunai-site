const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Import routes *AFTER* initializing app and middleware
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes'); // <== FIXED ORDER

// Use routes
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes); // <== use after importing

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
