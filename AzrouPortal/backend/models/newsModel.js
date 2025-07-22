import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    urgent: { type: Boolean, default: false },
    image: { type: String },
    author: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
    lastModified: { type: Date, default: Date.now },
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'published' },
    views: { type: Number, default: 0 },
    tags: [String]
}, { minimize: false });

const newsModel = mongoose.models.news || mongoose.model("news", newsSchema);
export default newsModel;
