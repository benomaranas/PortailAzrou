import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import doctorModel from "../models/doctorModel.js";
import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import userModel from "../models/userModel.js";
import reportedProblemModel from "../models/reportedProblemModel.js";

// API for admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find admin in database
        const admin = await adminModel.findOne({ email });

        if (!admin) {
            return res.json({ success: false, message: "Admin not found" });
        }

        if (!admin.isActive) {
            return res.json({ success: false, message: "Admin account is deactivated" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password);

        if (isMatch) {
            // Update last login
            await adminModel.findByIdAndUpdate(admin._id, { lastLogin: new Date() });

            // Generate token
            const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET);
            res.json({ 
                success: true, 
                token,
                admin: {
                    id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    role: admin.role,
                    permissions: admin.permissions
                }
            });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// API to get all appointments list
const appointmentsAdmin = async (req, res) => {
    try {
        const appointments = await appointmentModel.find({}).sort({ date: -1 });

        // Enhanced appointments with proper data structure
        const enhancedAppointments = [];
        
        for (const appointment of appointments) {
            const appointmentObj = appointment.toObject();
            
            // Get user data if userId exists
            if (appointment.userId) {
                try {
                    const user = await userModel.findById(appointment.userId).select('name email phone image dob');
                    if (user) {
                        appointmentObj.userData = {
                            name: user.name || 'Unknown User',
                            email: user.email || '',
                            phone: user.phone || '',
                            image: user.image || '',
                            dob: user.dob || ''
                        };
                    } else {
                        appointmentObj.userData = {
                            name: 'Unknown User',
                            email: '',
                            phone: '',
                            image: '',
                            dob: ''
                        };
                    }
                } catch (error) {
                    appointmentObj.userData = {
                        name: 'Unknown User',
                        email: '',
                        phone: '',
                        image: '',
                        dob: ''
                    };
                }
            }
            
            // Get doctor data if docId exists
            if (appointment.docId) {
                try {
                    const doctor = await doctorModel.findById(appointment.docId).select('name email image speciality');
                    if (doctor) {
                        appointmentObj.docData = {
                            name: doctor.name || 'Unknown Doctor',
                            email: doctor.email || '',
                            image: doctor.image || '',
                            speciality: doctor.speciality || ''
                        };
                    }
                } catch (error) {
                    // If doctor not found, don't add docData
                }
            }
            
            enhancedAppointments.push(appointmentObj);
        }

        res.json({ success: true, appointments: enhancedAppointments });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API for appointment cancellation
const appointmentCancel = async (req, res) => {
    try {

        const { appointmentId } = req.body
        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

        res.json({ success: true, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API for adding Doctor
const addDoctor = async (req, res) => {

    try {

        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        res.json({ success: true, message: 'Doctor Added' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all doctors list for admin panel
const allDoctors = async (req, res) => {
    try {

        const doctors = await doctorModel.find({}).select('-password')
        res.json({ success: true, doctors })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
    try {
        const doctors = await doctorModel.find({});
        const users = await userModel.find({});
        const appointments = await appointmentModel.find({})
            .sort({ date: -1 })
            .limit(10);

        // Enhanced latest appointments with proper data structure
        const latestAppointments = [];
        
        for (const appointment of appointments) {
            const appointmentObj = appointment.toObject();
            
            // Get user data if userId exists
            if (appointment.userId) {
                try {
                    const user = await userModel.findById(appointment.userId).select('name email');
                    if (user) {
                        appointmentObj.userData = {
                            name: user.name || 'Unknown User',
                            email: user.email || ''
                        };
                    }
                } catch (error) {
                    appointmentObj.userData = {
                        name: 'Unknown User',
                        email: ''
                    };
                }
            }
            
            // Get doctor data if docId exists
            if (appointment.docId) {
                try {
                    const doctor = await doctorModel.findById(appointment.docId).select('name speciality image');
                    if (doctor) {
                        appointmentObj.docData = {
                            name: doctor.name || 'Unknown Doctor',
                            speciality: doctor.speciality || '',
                            image: doctor.image || ''
                        };
                    }
                } catch (error) {
                    // If doctor not found, don't add docData
                }
            }
            
            latestAppointments.push(appointmentObj);
        }

        const dashData = {
            doctors: doctors.length,
            appointments: await appointmentModel.countDocuments(),
            patients: users.length,
            latestAppointments: latestAppointments
        };

        res.json({ success: true, dashData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to get all users for admin management
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({}).select('-password');
        res.json({ success: true, users });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to get admin profile
const getAdminProfile = async (req, res) => {
    try {
        const admin = await adminModel.findById(req.admin.id).select('-password');
        res.json({ success: true, admin });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to update user status (activate/deactivate)
const updateUserStatus = async (req, res) => {
    try {
        const { userId, isActive } = req.body;
        await userModel.findByIdAndUpdate(userId, { isActive });
        res.json({ success: true, message: `User ${isActive ? 'activated' : 'deactivated'} successfully` });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to get all reported problems
const getAllReportedProblems = async (req, res) => {
    try {
        const problems = await reportedProblemModel.find({})
            .sort({ reportedDate: -1 })
            .populate('userId', 'name email phone');
        
        res.json({ success: true, problems });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to update reported problem status
const updateProblemStatus = async (req, res) => {
    try {
        const problemId = req.params.id || req.body.problemId;
        const { status, assignedTo, adminNotes, priority } = req.body;
        
        const updateData = { 
            status, 
            updatedDate: new Date(),
            assignedTo: assignedTo || '',
            adminNotes: adminNotes || '',
            priority: priority || 'Medium'
        };
        
        if (status === 'Resolved' || status === 'Closed') {
            updateData.resolvedDate = new Date();
        }
        
        await reportedProblemModel.findByIdAndUpdate(problemId, updateData);
        
        res.json({ success: true, message: "Problem status updated successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to delete reported problem
const deleteReportedProblem = async (req, res) => {
    try {
        const problemId = req.params.id || req.body.problemId;
        
        await reportedProblemModel.findByIdAndDelete(problemId);
        
        res.json({ success: true, message: "Problem deleted successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to get detailed statistics
const getDetailedStats = async (req, res) => {
    try {
        const users = await userModel.countDocuments();
        const appointments = await appointmentModel.countDocuments();
        const doctors = await doctorModel.countDocuments();
        const problems = await reportedProblemModel.countDocuments();
        
        // Get appointment statistics
        const appointmentStats = await appointmentModel.aggregate([
            {
                $group: {
                    _id: "$appointmentType",
                    count: { $sum: 1 }
                }
            }
        ]);
        
        // Get problem statistics by status
        const problemStats = await reportedProblemModel.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ]);
        
        // Get recent activities
        const recentAppointments = await appointmentModel.find({})
            .sort({ date: -1 })
            .limit(5)
            .populate('userId', 'name');
            
        const recentProblems = await reportedProblemModel.find({})
            .sort({ reportedDate: -1 })
            .limit(5)
            .populate('userId', 'name');
        
        res.json({ 
            success: true, 
            stats: {
                users,
                appointments,
                doctors,
                problems,
                appointmentStats,
                problemStats,
                recentAppointments,
                recentProblems
            }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {
    loginAdmin,
    appointmentsAdmin,
    appointmentCancel,
    addDoctor,
    allDoctors,
    adminDashboard,
    getAllUsers,
    getAdminProfile,
    updateUserStatus,
    getAllReportedProblems,
    updateProblemStatus,
    deleteReportedProblem,
    getDetailedStats
}