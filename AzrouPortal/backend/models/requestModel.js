import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    requestId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    type: { type: String, required: true },
    department: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['Submitted', 'Under Review', 'In Progress', 'Pending Documents', 'Completed', 'Rejected'], 
        default: 'Submitted' 
    },
    priority: { type: String, enum: ['Low', 'Medium', 'High', 'Urgent'], default: 'Medium' },
    description: { type: String, required: true },
    documents: [String],
    submittedDate: { type: Date, default: Date.now },
    estimatedCompletion: { type: Date },
    actualCompletion: { type: Date },
    assignedTo: { type: String },
    updates: [{
        date: { type: Date, default: Date.now },
        status: String,
        description: String,
        updatedBy: String
    }],
    userData: { type: Object, required: true },
    fee: { type: Number, default: 0 },
    payment: { type: Boolean, default: false }
}, { minimize: false });

const requestModel = mongoose.models.request || mongoose.model("request", requestSchema);
export default requestModel;
