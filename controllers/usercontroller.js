import Vehicle from "../models/vehicles.js";

export const getVehicleList = async (req, res, next) => {
    const vehicleType = req.query.type.trim();
    console.log(vehicleType, "car");
    try {
        const vehicleList = await Vehicle.find({ vehicleType: vehicleType });
        console.log(vehicleType);

        res.status(200).json({
            success: true,
            list: vehicleList,
        });
    } catch (error) {
        next(error);
    }
};

export const getAllVehicleList = async (req, res, next) => {
    try {
        const vehicleList = await Vehicle.find({});
        res.status(200).json({
            success: true,
            list: vehicleList,
        });
    } catch (error) {
        next(error);
    }
};
