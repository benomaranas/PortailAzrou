import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB...');
        
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 10000
        });
        
        console.log('✅ MongoDB Connected Successfully');
        console.log('Database:', connection.connection.db.databaseName);
        console.log('Host:', connection.connection.host);
        console.log('Port:', connection.connection.port);
        
        // Test the connection with a ping
        const admin = connection.connection.db.admin();
        const pingResult = await admin.ping();
        console.log('✅ Database ping successful:', pingResult);
        
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        console.error('Full error:', error);
        throw error;
    }
};

export default connectDB;
