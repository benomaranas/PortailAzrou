import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
    permissions: { 
        type: [String], 
        default: [
            'manage_users',
            'manage_appointments',
            'manage_services',
            'manage_departments',
            'manage_news',
            'manage_projects',
            'manage_requests',
            'view_analytics'
        ]
    },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date }
});

const adminModel = mongoose.models.admin || mongoose.model("admin", adminSchema);
export default adminModel;
