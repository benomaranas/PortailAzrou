import departmentModel from "../models/departmentModel.js";
import newsModel from "../models/newsModel.js";
import projectModel from "../models/projectModel.js";
import requestModel from "../models/requestModel.js";

// Get all departments
const getDepartments = async (req, res) => {
    try {
        const departments = await departmentModel.find({ available: true });
        res.json({ success: true, departments });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get department by ID
const getDepartmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await departmentModel.findById(id);
        if (!department) {
            return res.json({ success: false, message: "Department not found" });
        }
        res.json({ success: true, department });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get latest news
const getNews = async (req, res) => {
    try {
        const { limit = 4, category } = req.query;
        let filter = { status: 'published' };
        if (category) filter.category = category;
        
        const news = await newsModel
            .find(filter)
            .sort({ publishDate: -1 })
            .limit(parseInt(limit));
        
        res.json({ success: true, news });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get featured projects
const getProjects = async (req, res) => {
    try {
        const { limit = 4, status } = req.query;
        let filter = {};
        if (status) filter.status = status;
        
        const projects = await projectModel
            .find(filter)
            .sort({ priority: -1, startDate: -1 })
            .limit(parseInt(limit));
        
        res.json({ success: true, projects });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Track request by ID
const trackRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        const request = await requestModel.findOne({ requestId: requestId.toUpperCase() });
        
        if (!request) {
            return res.json({ success: false, message: "Request not found" });
        }
        
        res.json({ success: true, request });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Submit new request
const submitRequest = async (req, res) => {
    try {
        const { type, department, description, userData } = req.body;
        
        // Generate unique request ID
        const requestId = `AZ${new Date().getFullYear()}${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
        
        const newRequest = new requestModel({
            requestId,
            userId: userData.userId,
            type,
            department,
            description,
            userData,
            updates: [{
                status: 'Submitted',
                description: 'Your request has been received and is being reviewed.',
                date: new Date()
            }]
        });
        
        await newRequest.save();
        res.json({ success: true, requestId, message: "Request submitted successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get city statistics
const getCityStats = async (req, res) => {
    try {
        const totalRequests = await requestModel.countDocuments();
        const completedRequests = await requestModel.countDocuments({ status: 'Completed' });
        const activeProjects = await projectModel.countDocuments({ status: { $in: ['In Progress', 'Near Completion'] } });
        const totalDepartments = await departmentModel.countDocuments({ available: true });
        
        const stats = {
            population: '65,000',
            altitude: '1,250m',
            digitalUsers: totalRequests.toString(),
            satisfaction: '95%',
            onlineServices: '24/7',
            departments: totalDepartments.toString(),
            completedRequests,
            activeProjects
        };
        
        res.json({ success: true, stats });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {
    getDepartments,
    getDepartmentById,
    getNews,
    getProjects,
    trackRequest,
    submitRequest,
    getCityStats
};
