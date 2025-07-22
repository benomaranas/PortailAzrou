import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, enum: ['Planning', 'In Progress', 'Near Completion', 'Completed'], default: 'Planning' },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    budget: { type: String, required: true },
    startDate: { type: Date, required: true },
    expectedCompletion: { type: Date, required: true },
    actualCompletion: { type: Date },
    image: { type: String },
    department: { type: String, required: true },
    manager: { type: String, required: true },
    updates: [{
        date: { type: Date, default: Date.now },
        update: String,
        progress: Number
    }],
    documents: [String],
    priority: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'], default: 'Medium' }
}, { minimize: false });

const projectModel = mongoose.models.project || mongoose.model("project", projectSchema);
export default projectModel;
