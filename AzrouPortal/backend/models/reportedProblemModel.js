import mongoose from "mongoose";

const reportedProblemSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        required: true 
    },
    userName: { 
        type: String, 
        required: true 
    },
    userEmail: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true,
        enum: ['Infrastructure', 'Public Services', 'Environment', 'Safety', 'Other']
    },
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    priority: { 
        type: String, 
        default: 'Medium',
        enum: ['Low', 'Medium', 'High', 'Critical']
    },
    status: { 
        type: String, 
        default: 'Open',
        enum: ['Open', 'In Progress', 'Resolved', 'Closed']
    },
    assignedTo: { 
        type: String, 
        default: '' 
    },
    adminNotes: { 
        type: String, 
        default: '' 
    },
    images: [{
        type: String // URLs for uploaded images
    }],
    reportedDate: { 
        type: Date, 
        default: Date.now 
    },
    updatedDate: { 
        type: Date, 
        default: Date.now 
    },
    resolvedDate: { 
        type: Date 
    }
}, { timestamps: true });

const reportedProblemModel = mongoose.models.reportedProblem || mongoose.model('reportedProblem', reportedProblemSchema);

export default reportedProblemModel;
