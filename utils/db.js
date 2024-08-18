import mongoose from 'mongoose';

const MONGO_URL = "mongodb://localhost:27017/pratice"


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

// Usage:
export default connectDB
