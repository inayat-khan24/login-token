import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

try {
  await mongoose.connect(process.env.MONGO_URL)
  mongoose.set("debug",true)   
} catch (error) {
    console.log(error)
}

const registerSchema = mongoose.Schema({
    name:{type:String,required:true},
    email : {type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
    timestams : true
})

export const loginModel = mongoose.model("user",registerSchema)