import mongoose from 'mongoose';

export const connection = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Database connected successfully.');
  } catch (error) {
    console.error('❌ Error while connecting to the database:', error);
    throw error;
  }
};
