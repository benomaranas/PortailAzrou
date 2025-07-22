import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import adminModel from './models/adminModel.js';
import 'dotenv/config';

const createAdminAccount = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Check if admin already exists
        const existingAdmin = await adminModel.findOne({ email: process.env.ADMIN_EMAIL });
        
        if (existingAdmin) {
            console.log('⚠️  Admin account already exists with email:', process.env.ADMIN_EMAIL);
            console.log('Admin ID:', existingAdmin._id);
            console.log('Admin Name:', existingAdmin.name);
            process.exit(0);
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

        // Create admin data
        const adminData = {
            name: 'Azrou Municipality Admin',
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: 'super_admin',
            permissions: [
                'manage_users',
                'manage_appointments', 
                'manage_services',
                'manage_departments',
                'manage_news',
                'manage_projects',
                'manage_requests',
                'view_analytics',
                'manage_admins',
                'system_settings'
            ],
            isActive: true,
            createdAt: new Date()
        };

        // Save admin to database
        const newAdmin = new adminModel(adminData);
        await newAdmin.save();

        console.log('🎉 Admin account created successfully!');
        console.log('📧 Email:', process.env.ADMIN_EMAIL);
        console.log('🔐 Password:', process.env.ADMIN_PASSWORD);
        console.log('🆔 Admin ID:', newAdmin._id);
        console.log('');
        console.log('⚡ You can now log in to the admin panel with these credentials');

    } catch (error) {
        console.error('❌ Error creating admin account:', error);
    } finally {
        await mongoose.disconnect();
        console.log('📤 Disconnected from MongoDB');
        process.exit(0);
    }
};

createAdminAccount();
