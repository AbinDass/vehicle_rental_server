import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default:'user'
    }
})

const user  = mongoose.model('user', userSchema)
export default user