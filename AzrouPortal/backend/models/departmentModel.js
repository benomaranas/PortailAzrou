import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    services: [{ 
        name: String,
        description: String,
        fee: Number,
        processingTime: String,
        documents: [String]
    }],
    contactInfo: {
        phone: String,
        email: String,
        office: String,
        hours: String
    },
    available: { type: Boolean, default: true },
    appointmentRequired: { type: Boolean, default: true },
    date: { type: Number, default: Date.now }
}, { minimize: false });

const departmentModel = mongoose.models.department || mongoose.model("department", departmentSchema);
export default departmentModel;
