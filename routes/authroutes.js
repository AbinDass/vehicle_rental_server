import express from "express"

const authRoutes = express.Router()

import { login, Register } from "../controllers/authcontroller.js"
import { checkLogin, checkRegister } from "../middwares/validator.js"

authRoutes.post('/register', checkRegister, Register)
authRoutes.post('/login', checkLogin, login)

export default authRoutes