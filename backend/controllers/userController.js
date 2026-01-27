import validator from "validator"
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            return res.json({ success: false, message: "Incorrect Password" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Route for user registration
const registerUser = async (req, res) => {
    console.log(req)
    try {
        const { name, email, password } = req.body

        // check the user already exists or not
        const exist = await userModel.findOne({ email })
        if (exist) {
            return res.json({ success: false, message: "User already exists" })
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" })
        }

        // hash user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user
        const newUser = new userModel({ name, email, password: hashedPassword })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// Route for Admin Login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }
