import mongoose from 'mongoose';
import userModel from './models/userModel.js';
import bcrypt from 'bcrypt';

async function createTestUser() {
    try {
        await mongoose.connect('mongodb://localhost:27017/azrou-municipality');
        console.log('Connected to MongoDB');
        
        // Create a test user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('test123', salt);
        
        const userData = {
            name: 'Test User',
            email: 'test@test.com',
            password: hashedPassword,
        };
        
        // Check if user already exists
        const existingUser = await userModel.findOne({ email: 'test@test.com' });
        if (existingUser) {
            console.log('Test user already exists');
        } else {
            const newUser = new userModel(userData);
            await newUser.save();
            console.log('Test user created successfully');
        }
        
        console.log('You can now log in with:');
        console.log('Email: test@test.com');
        console.log('Password: test123');
        
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error:', error);
    }
}

createTestUser();
