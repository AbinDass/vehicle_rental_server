import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

import user from "../models/user.js";
import { generateToken } from "../helpers/generateToken.js";

export const Register = async (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty(422)) {
    //     const path = errors.errors[0].path;
    //     const message = errors.errors[0].msg === "Invalid Value" ? `${path} is a invalid value` : errors.errors[0].msg;
    //     return res.status().json({
    //         success: false,
    //         message,
    //     });
    // }
    try {
        const { name, email, password, confirmpassword } = req.body;
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        const isExist = await user.findOne({ email: email });
        if (isExist) {
            return res.status(409).json({
                success: false,
                message: `A user with this email already exist`,
            });
        }
        if (password === confirmpassword) {
            const newUser = new user({
                name: name,
                email: email,
                password: hashedPassword,
            });
            let tokens;
            const data = await newUser.save();
            if (data) {
                tokens = generateToken({
                    id: data._id,
                    name: name,
                    email: email,
                });
            }
            res.status(200).json({
                userData: data,
                success: true,
                message: `successfully registered`,
                Tokens: tokens,
            });
        } else {
            return res.status(409).json({
                success: false,
                message: `password missmatch`,
            });
        }
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty(422)) {
    //     const path = errors.errors[0].path;
    //     const message = errors.errors[0].msg === "Invalid Value" ? `${path} is a invalid value` : errors.errors[0].msg;
    //     return res.status().json({
    //         success: false,
    //         message,
    //     });
    // }
    try {
        const { email, password } = req.body;
        const isExist = await user.findOne({ email: email });
        if (isExist) {
            // const saltRounds = 10;
            // const salt = await bcrypt.genSalt(saltRounds);
            // const hashedPassword = await bcrypt.hash(password, salt);
            const isMatch = await bcrypt.compare(password, isExist.password);
            let tokens;
            if (isMatch) {
                tokens = generateToken({
                    id: isExist._id,
                    name: isExist.name,
                    email: isExist.email,
                });
                return res.status(200).json({
                    userData: isExist,
                    success: true,
                    message: `Successfully loged in`,
                    Tokens: tokens,
                });
            }
        }
    } catch (error) {
        next(error);
    }
};
