import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard, getAllUsers, getAdminProfile, updateUserStatus, getAllReportedProblems, updateProblemStatus, deleteReportedProblem, getDetailedStats } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)
adminRouter.get("/users", authAdmin, getAllUsers)
adminRouter.get("/all-users", authAdmin, getAllUsers)
adminRouter.get("/profile", authAdmin, getAdminProfile)
adminRouter.post("/update-user-status", authAdmin, updateUserStatus)
adminRouter.post("/toggle-user-status", authAdmin, updateUserStatus)
adminRouter.get("/reported-problems", authAdmin, getAllReportedProblems)
adminRouter.put("/reported-problems/:id", authAdmin, updateProblemStatus)
adminRouter.delete("/reported-problems/:id", authAdmin, deleteReportedProblem)
adminRouter.post("/update-problem-status", authAdmin, updateProblemStatus)
adminRouter.post("/delete-problem", authAdmin, deleteReportedProblem)
adminRouter.get("/detailed-stats", authAdmin, getDetailedStats)

export default adminRouter;