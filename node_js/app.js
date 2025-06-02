import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/routes.js"
import { virfytoken } from "./middleware/auth.middleware.js"

const app = express()
 app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 5000
app.use("/",router)
app.use("/product",virfytoken,(req,res)=>{
    res.status(200).json({
        message:"Access granted to processd route",
        pro:"hello",
        product : "master ki",
        user:req.user
    })
})

app.listen(PORT,()=>{
console.log(`running surver at ${PORT}`)

})