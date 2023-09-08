import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";

export const registerUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword,
        } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exist " });
        }

        if (password != confirmPassword) {
            return res.status(400).json({ msg: "Password doesn't match" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword,
        });

        /**
         * 
        res.status(201).json({
            msg:"Registered Sucessfully "
        })
        */
        sendCookie(user, res, "Registered Sucessfully", 201);
    } catch (error) {
        res.status(406).json({
            err: error.message || "Error while registering",
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;
        let user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ msg: "User doesn't exist" });
        }

        const isMatchPassword = await bcrypt.compare(password, user.password);
        if (password != confirmPassword) {
            return res.status(400).json({ msg: "Password doesn't match" });
        }
        if (!isMatchPassword) {
            return res.status(400).json({ msg: "Incorrect Password" });
        }

        /**
         * 
        res.status(201).json({
            msg:"Login Sucessfully"
        })
        */
        sendCookie(
            user,
            res,
            `Login sucessfully ${user.firstName + " " + user.lastName}`,
            201
        );
    } catch (err) {
        console.log(err);
        res.status(406).json({
            err: err.message || "Error while login",
        });
    }
};

export const logout = (req, res) => {
    res.status(200)
        .cookie("token", "", {
            expires: new Date(Date.now()),
            sameSite: process.env.NODE_ENV == "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV == "Development" ? false : true,
        })
        .json({
            sucess: true,
            user: req.user,
        });
};
