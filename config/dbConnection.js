import  Mongoose from "mongoose";

export const connectDatabase = async()=>{
    try {
        await Mongoose.connect("mongodb://localhost:27017/secondgear", {
            useNewUrlParser: true,  // use new url string parser isteade of older.
            useUnifiedTopology: true,  // use Mongo db's new connection management engine.
        });
        console.log('database connected...');
    } catch (error) {
        console.log('Database connected failed...', error);
        process.exit(1)  //  Node.js proccess to exit immediatly and returns a status code of 1, which indicates an error.
    }
}