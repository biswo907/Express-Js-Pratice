import express from "express"
import { LoginController, SignupController, UploadImage } from "../Controller/user.js"
import { uploadSingle } from "../Middlewares/uploadMiddleware.js"

const userRoute = express.Router()
userRoute.post("/login", LoginController)
userRoute.post("/signup", SignupController)
userRoute.post("/user/upload", uploadSingle('avatar'), UploadImage)
export default userRoute