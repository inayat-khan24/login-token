import { loginModel } from "../model/model.login.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"



dotenv.config()


export const postRegister = async(req,res)=>{
try {
    const {name,email,password} = req.body
const isemail = await loginModel.findOne({email})
if(isemail) return res.status(409).json("mail is already exist")
const passwordHashed = await bcrypt.hash(password,10)
const create = new  loginModel({name,email,password:passwordHashed})
  const saveRegister = await create.save()
 return res.status(201).json({massage:"created successful",data:saveRegister})
} catch (error) {
    console.log(error)
    return res.status(500).json("internal server error")
}}


export const postLogin = async(req,res)=>{
try {
    const {email,password} = req.body
const user = await loginModel.findOne({email})
if(!user) return res.status(409).json("enter correct email")
const passwordcompare = await bcrypt.compare(password,user.password)
if(!passwordcompare) return res.status(403).res.json("wrong password please Enter correct password")
const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"})


  
 return res.status(200).json({massage:"created successful",data:token})
} catch (error) {
    console.log(error)
    return res.status(500).json("internal server error")
}}

export const getdata= async(req,res)=>{
   const get = await loginModel.find()
   res.status(200).json(get)
}