import { validationResult } from "express-validator";
import Vehicle from "../models/vehicles.js";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import mongoose from "mongoose";
import { configFirbase } from "../config/firebase.config.js";

export const addVehicles = async (req, res, next) => {
    //   const errors = validationResult(req);
    // if (!errors.isEmpty(422)) {
    //   const path = errors.errors[0].path;
    //   const message =
    //     errors.errors[0].msg === "Invalid Value"
    //       ? `${path} is a invalid value`
    //       : errors.errors[0].msg;
    //   return res.status().json({
    //     success: false,
    //     message,
    //   });
    // }

    try {
        const vehicleData = req.body;
        const uploadImages = req.files.map((file) => configFirbase(file));
        const imageUrls = await Promise.all(uploadImages);
        Object.assign(vehicleData, { image: imageUrls });
        console.log(vehicleData);
        await Vehicle.create(vehicleData);
        res.status(200).json({
            success: true,
            message: `Vehicle added successfully`,
        });
    } catch (error) {
        next(error);
    }
};

export const updateVehicles = async (req, res, next) => {
    //   const errors = validationResult(req);
    // if (!errors.isEmpty(422)) {
    //   const path = errors.errors[0].path;
    //   const message =
    //     errors.errors[0].msg === "Invalid Value"
    //       ? `${path} is a invalid value`
    //       : errors.errors[0].msg;
    //   return res.status().json({
    //     success: false,
    //     message,
    //   });
    // }
    try {
        // const vehicleId = mongoose.Types.ObjectId(req.query.vehicleId);
        console.log(req.body,1)
        console.log(req.files,1)
        const vehicleId = req.query.vehicleId.trim();
        const { vehicleType, brand, model, manufacture_year, transmission, fuel_type, price, color } = req.body;
        const vehicleExist = await Vehicle.findOne({ _id: vehicleId });
        
        if (vehicleExist) {
            const uploadImages = req.files.map((file) => configFirbase(file));
            const imageUrls = await Promise.all(uploadImages);
            await Vehicle.findOneAndUpdate(
                { _id: vehicleId },
                {
                    $set: {
                        vehicleType: vehicleType,
                        brand: brand,
                        model: model,
                        manufacture_year: manufacture_year,
                        transmission: transmission,
                        fuel_type: fuel_type,
                        price: price,
                        color: color,
                        image: imageUrls
                    },
                }
            );
        } else {
            res.status(500).json({
                success: false,
                message: `vehicle not exist`,
            });
        }
        res.status(200).json({
            success: true,
            message: `Vehicle updated successfully`,
        });
    } catch (error) {
        next(error);
    }
};

export const removeVehicle = async (req, res) => {
    const vehicleId = req.query.vehicleId.trim();
    try {
        const vehicleExist = await Vehicle.findOne({ _id: vehicleId });
        if (vehicleExist) {
            await Vehicle.findByIdAndDelete({ _id: vehicleId });
            res.status(200).json({
                success: true,
                message: `Vehicle removed successfully`,
            });
        } else {
            res.status(500).json({
                success: false,
                message: `vehicle not exist`,
            });
        }
    } catch (error) {
        next(error);
    }
};
