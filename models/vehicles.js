import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
    // vehicleType: {
    //     type: String,
    //     required: true
    // },
    vehicleType: {
        type: String,
        enum: ["car", "bike"],
        required: true,
    },

    brand: {
        type: String,
        required: true,
    },
    
    image: {
        type: Array,
    },

    manufacture_year: {
        type: Number,
    },

    fuel_type: {
        type: String,
    },
    model: {
        type: String,
    },
    price: {
        type: Number,
    },
    transmission: {
        type: String,
    },
    color: {
        type: String,
    },
    status: {
        type: String,
        enum: ["sold", "available"],
        default: "available",
    },

    youtubeShorsts: {
        type: String,
    }
});


const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
