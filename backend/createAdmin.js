const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = 'admin@thanporunaiarakattalai.com';
    const newPassword = 'Th@nPoruna!';
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updated = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );

    if (updated) {
      console.log('✅ Admin password updated successfully!');
    } else {
      console.log('⚠️ Admin not found. Creating new admin user...');
      await User.create({ email, password: hashedPassword });
      console.log('✅ New admin user created successfully!');
    }

    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error:', err.message);
    mongoose.disconnect();
  }
};

createAdmin();
