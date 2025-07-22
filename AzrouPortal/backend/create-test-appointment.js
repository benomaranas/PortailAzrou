import mongoose from 'mongoose';
import userModel from './models/userModel.js';
import appointmentModel from './models/appointmentModel.js';

async function createTestServiceAppointment() {
    try {
        await mongoose.connect('mongodb://localhost:27017/azrou-municipality');
        console.log('Connected to MongoDB');
        
        // Find the test user
        const testUser = await userModel.findOne({ email: 'test@test.com' });
        if (!testUser) {
            console.log('Test user not found');
            return;
        }
        
        console.log('Creating test service appointment for:', testUser.name);
        
        // Create a test service appointment
        const serviceAppointmentData = {
            userId: testUser._id.toString(),
            serviceId: "1",
            userData: {
                name: testUser.name,
                email: testUser.email,
                image: testUser.image || ""
            },
            serviceData: {
                id: "1",
                name: "Birth Certificate",
                department: "Civil Registry",
                fee: "50 MAD"
            },
            amount: 50,
            slotTime: "10:00",
            slotDate: "22_7_2025",
            date: Date.now(),
            appointmentType: 'service'
        };
        
        const newAppointment = new appointmentModel(serviceAppointmentData);
        await newAppointment.save();
        
        console.log('Test service appointment created successfully!');
        
        // Verify it was created
        const userAppointments = await appointmentModel.find({ userId: testUser._id.toString() });
        console.log('User now has', userAppointments.length, 'appointment(s)');
        
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error:', error);
    }
}

createTestServiceAppointment();
