import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"
import municipalityRouter from "./routes/municipalityRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000

// Database connection
connectDB()
connectCloudinary()

console.log("Starting Azrou Municipality Backend Server...")
console.log("Environment check:", {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV || 'development'
})

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)
app.use("/api/municipality", municipalityRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))