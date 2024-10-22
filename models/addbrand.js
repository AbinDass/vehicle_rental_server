import mongoose from "mongoose"

const barandSchema = mongoose.Schema({
    brandName:{
        type:String,
    },
    brandImage:{
        type:String,
    },
})

const user  = mongoose.model('brand', barandSchema)
export default user