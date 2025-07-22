import jwt from "jsonwebtoken";
import adminModel from "../models/adminModel.js";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const atoken = req.headers.atoken || req.headers.aToken;
        
        if (!atoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
        
        // Find admin by ID from token
        const admin = await adminModel.findById(token_decode.id);
        
        if (!admin || !admin.isActive) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }

        // Add admin info to request for use in controllers
        req.admin = {
            id: admin._id,
            email: admin.email,
            role: admin.role,
            permissions: admin.permissions
        };

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authAdmin;