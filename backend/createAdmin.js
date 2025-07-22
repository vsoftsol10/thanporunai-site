const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/thanporunaiDB')
  .then(async () => {
    const email = 'admin@thanporunaiarakattalai.com';
    const newPassword = 'Th@nPoruna!'; // 🔐 Your new strong password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Find existing admin and update password
    const updated = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );

    if (updated) {
      console.log('✅ Password updated successfully!');
    } else {
      console.log('⚠️ Admin not found, creating new admin user...');
      await User.create({ email, password: hashedPassword });
      console.log('✅ New admin user created');
    }

    mongoose.disconnect();
  })
  .catch(err => console.error('❌ DB connection failed', err));