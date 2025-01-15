import userModel from '../models/userModel.js'
import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//route for user login
const loginUser = async (req, res) => {
}

//route for user registration

const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        //checking user exitsts or not

        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already Exists" })
        }

        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a vaild email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true ,token})

    } catch (error) {
            console.log(error);
            res.json({success:false ,message:error.message})       
    }

}

//route for admin login

const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }