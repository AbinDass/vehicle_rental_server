import jwt from "jsonwebtoken"

export const generateToken = (data)=>{
   let Tokens
   const accessToken = jwt.sign(data, process.env.JWT_SECRET_KEY,{expiresIn: process.env.ACCESS_EXPIRY}) 
   // const refreshToken = jwt.sign(data, process.env.REFRESH_SECRET,{expiresIn: process.env.REFRESH_EXPIRY})
   return Tokens = {
    accessToken: accessToken,
   //  refreshToken: refreshToken
   }
}
