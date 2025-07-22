import mongoose from "mongoose"

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    // For doctor appointments
    docId: { type: String, required: false },
    docData: { type: Object, required: false },
    // For service appointments
    serviceId: { type: String, required: false },
    serviceData: { type: Object, required: false },
    // Common fields
    slotDate: { type: String, required: true },
    slotTime: { type: String, required: true },
    userData: { type: Object, required: true },
    amount: { type: Number, required: true },
    date: { type: Number, required: true },
    cancelled: { type: Boolean, default: false },
    payment: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false },
    // Appointment type
    appointmentType: { type: String, enum: ['doctor', 'service'], required: true }
})

const appointmentModel = mongoose.models.appointment || mongoose.model("appointment", appointmentSchema)
export default appointmentModel