import mongoose from 'mongoose';
import appointmentModel from './models/appointmentModel.js';

async function updateAppointments() {
    try {
        await mongoose.connect('mongodb://localhost:27017/azrou-municipality');
        console.log('Connected to MongoDB');
        
        // Update all appointments that don't have appointmentType
        const result = await appointmentModel.updateMany(
            { appointmentType: { $exists: false } },
            { appointmentType: 'doctor' }
        );
        
        console.log('Updated', result.modifiedCount, 'appointments to have appointmentType: doctor');
        
        // List all appointments to verify
        const appointments = await appointmentModel.find({});
        console.log('\nAll appointments:');
        appointments.forEach((appt, i) => {
            console.log(`${i+1}. Type: ${appt.appointmentType}, User: ${appt.userData?.name}, Service: ${appt.serviceData?.name || 'N/A'}, Doctor: ${appt.docData?.name || 'N/A'}`);
        });
        
        await mongoose.disconnect();
        console.log('\nDisconnected from MongoDB');
    } catch (error) {
        console.error('Error:', error);
    }
}

updateAppointments();
