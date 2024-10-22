import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors";

import { errorHandler } from "./middwares/errorHandler.js"
import adminRoutes from "./routes/adminroutes.js"
import Routes from "./routes/userroutes.js"
import authRoutes from "./routes/authroutes.js"

import { connectDatabase } from "./config/dbConnection.js"

const app = express()
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(express.json())
// app.use(bodyParser.urlencoded({extends: true}))

dotenv.config()

connectDatabase()

app.use(errorHandler)

app.use('/admin', adminRoutes) 
app.use('/', Routes)
app.use('/auth', authRoutes)

const port = process.env.PORT || 3001
app.listen(port, ()=> console.log(`server successfully running on ${port}`))