import mongoose from 'mongoose';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const createTestAppointment = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    // For testing, let's see what users we have and create appointments for all of them
    const users = await mongoose.connection.db.collection('users').find().toArray();
    console.log('Available users:');
    users.forEach(user => {
      console.log(`- User: ${user.name} (${user.email}) - ID: ${user._id}`);
    });
    
    // Get a department
    const department = await mongoose.connection.db.collection('departments').findOne();
    if (!department) {
      console.log('No departments found.');
      return;
    }
    
    // Create appointments for all users to ensure the current user has one
    for (const user of users) {
      console.log(`\nCreating test appointment for user: ${user.name}`);
      
      // Create test appointment
      const testAppointment = {
        userId: user._id,
        docId: department._id,
        slotDate: "25_07_2025",
        slotTime: "10:00 am",
        userData: {
          name: user.name,
          email: user.email,
          phone: user.phone || "+212 600-000-000"
        },
        docData: {
          name: department.name,
          speciality: department.name,
          fees: 100
        },
        serviceData: {
          name: department.services[0]?.name || department.name,
          department: department.name,
          icon: department.icon,
          fee: department.services[0]?.fee || 100
        },
        amount: 100,
        date: Date.now(),
        cancelled: false,
        payment: false,
        isCompleted: false
      };
      
      const result = await mongoose.connection.db.collection('appointments').insertOne(testAppointment);
      console.log(`✅ Test appointment created for ${user.name}:`, result.insertedId);
    }
    
    const totalAppointments = await mongoose.connection.db.collection('appointments').countDocuments();
    console.log(`\n📊 Total appointments in database: ${totalAppointments}`);
    
    await mongoose.disconnect();
    
  } catch (error) {
    console.error('Error:', error);
  }
};

createTestAppointment();
