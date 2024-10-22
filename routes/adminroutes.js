import express from "express";

const adminRoutes = express.Router();

import { addVehicles, removeVehicle, updateVehicles } from "../controllers/admincontroller.js";
import { checkVehicleBody } from "../middwares/validator.js";
import { upload, uploadMultiple } from "../middwares/multer.js";

adminRoutes.route("/vehicles").post(checkVehicleBody,uploadMultiple, addVehicles).put(checkVehicleBody,uploadMultiple, updateVehicles).delete(removeVehicle);
export default adminRoutes;
