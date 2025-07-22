import mongoose from 'mongoose';
import dotenv from 'dotenv';
import reportedProblemModel from './models/reportedProblemModel.js';
import userModel from './models/userModel.js';

// Load environment variables
dotenv.config();

const createTestReportedProblems = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Get a test user
        const testUser = await userModel.findOne({ email: 'test@test.com' });
        if (!testUser) {
            console.log('No test user found. Creating test user first...');
            return;
        }

        // Create test reported problems
        const testProblems = [
            {
                userId: testUser._id,
                userName: testUser.name,
                userEmail: testUser.email,
                userPhone: testUser.phone,
                title: 'Broken Street Light',
                description: 'The street light on Main Street has been broken for a week',
                category: 'Infrastructure',
                priority: 'Medium',
                status: 'Open',
                location: 'Main Street, Azrou'
            },
            {
                userId: testUser._id,
                userName: testUser.name,
                userEmail: testUser.email,
                userPhone: testUser.phone,
                title: 'Pothole on Road',
                description: 'Large pothole causing damage to vehicles',
                category: 'Infrastructure',
                priority: 'High',
                status: 'In Progress',
                location: 'Avenue Hassan II, Azrou'
            },
            {
                userId: testUser._id,
                userName: testUser.name,
                userEmail: testUser.email,
                userPhone: testUser.phone,
                title: 'Garbage Not Collected',
                description: 'Garbage has not been collected for 3 days',
                category: 'Public Services',
                priority: 'High',
                status: 'Open',
                location: 'Residential Area, Azrou'
            }
        ];

        for (const problemData of testProblems) {
            const existingProblem = await reportedProblemModel.findOne({ 
                title: problemData.title,
                userId: problemData.userId 
            });

            if (!existingProblem) {
                const newProblem = new reportedProblemModel(problemData);
                await newProblem.save();
                console.log(`Created test problem: ${problemData.title}`);
            } else {
                console.log(`Problem already exists: ${problemData.title}`);
            }
        }

        console.log('Test reported problems created successfully!');

    } catch (error) {
        console.error('Error creating test problems:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
};

createTestReportedProblems();
