import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const virfytoken = (req,res,next)=>{
const token = req.header("authorization")

console.log(token)
if(!token) return res.status(401).json({massage:"Unauthorized: no token provide "})
    try {
      const decoded = jwt.verify(token,process.env.JWT_SECRET) 
      req.user = decoded
      next () 
    } catch (error) {
        console.log(error)
        return res.status(403).json({ message: "Invalid or expired token" });
    }

    

}