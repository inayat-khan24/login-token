import express, { Router } from "express"
import { postLogin, postRegister,getdata} from "../controllers/controllers.js"

const router =  Router()

router.post("/register",postRegister)
router.post("/login",postLogin)

router.get("/home",getdata)






export default router 