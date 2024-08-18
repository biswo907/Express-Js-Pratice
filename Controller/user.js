import UserModel from "../Models/userModels.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const SECRET_KEY = "biswo@123"

export const SignupController = async (req, res) => {
    const { username, phone, email, password, confirm_password } = req.query;

    try {
        // if email is already available in our db then he can not signup using this mail id otherwise do it 
        const exitingUserWithEmail = await UserModel.findOne({ email: email })
        const exitingUserWithPhone = await UserModel.findOne({ phone: phone })
        if (exitingUserWithEmail || exitingUserWithPhone) {
            return res.status(400).json({ message: `user already exits with this email ${email} or with this phone ${phone}` })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        // You can add your signup logic here, like saving the user data to the database
        const result = await UserModel.create({
            username: username,
            phone: phone,
            email: email,
            password: hashPassword,
            confirm_password: hashPassword
        })

        const token = jwt.sign({ email: result.email, id: result?._id }, SECRET_KEY)


        res.json({ message: "Signup Success", status: 200, token: token, users: result });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.json({ message: "Something went wrong", status: 404 });
    }
}

export const LoginController = async (req, res) => {
    const { email, password } = req.query
    try {
        const exitingUser = await UserModel.findOne({ email: email })
        if (!exitingUser) {
            res.status(404).json({ message: `user not found with this email ${email}` })
        }

        // compare password
        const matchPassword = await bcrypt.compare(password, exitingUser.password)

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        const token = jwt.sign({ email: exitingUser.email, id: exitingUser?._id }, SECRET_KEY)

        res.status(200).json({ user: exitingUser, token: token })


    } catch (error) {

    }
}




export const UploadImage = async (req, res) => {
    res.status(201).json({ message: 'Image uploaded successfully' });
}





