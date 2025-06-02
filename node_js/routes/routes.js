import express, { Router } from "express"
import { postLogin, postRegister } from "../controllers/controllers.js"

const router =  Router()

router.post("/register",postRegister)
router.post("/login",postLogin)





export default router 