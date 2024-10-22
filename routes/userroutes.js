import express from "express"

const Routes = express.Router()

import { getAllVehicleList, getVehicleList } from "../controllers/usercontroller.js"
import { authentication } from "../middwares/authenticate.js"

Routes.get('/vehicles', getVehicleList)
Routes.get('/allvehicles', getAllVehicleList)

export default Routes