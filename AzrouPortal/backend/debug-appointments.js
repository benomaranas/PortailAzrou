import mongoose from 'mongoose';
import userModel from './models/userModel.js';
import appointmentModel from './models/appointmentModel.js';

async function debugAppointments() {
    try {
        await mongoose.connect('mongodb://localhost:27017/azrou-municipality');
        console.log('Connected to MongoDB');
        
        // Find the test user
        const testUser = await userModel.findOne({ email: 'test@test.com' });
        if (!testUser) {
            console.log('Test user not found');
            return;
        }
        
        console.log('Test user found:');
        console.log('- ID:', testUser._id.toString());
        console.log('- Name:', testUser.name);
        console.log('- Email:', testUser.email);
        
        // Find appointments for this user
        const userAppointments = await appointmentModel.find({ userId: testUser._id.toString() });
        console.log('\nAppointments for test user:', userAppointments.length);
        
        // Show all appointments and their user IDs for debugging
        const allAppointments = await appointmentModel.find({});
        console.log('\nAll appointments in database:');
        allAppointments.forEach((appt, i) => {
            console.log(`${i+1}. UserID: ${appt.userId}, Type: ${appt.appointmentType}, User: ${appt.userData?.name}`);
        });
        
        await mongoose.disconnect();
        console.log('\nDisconnected from MongoDB');
    } catch (error) {
        console.error('Error:', error);
    }
}

debugAppointments();
