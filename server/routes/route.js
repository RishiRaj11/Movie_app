import { Router } from "express";
import { userLogin,userSignUp } from "../controller/user_controller.js";




const router=Router();



router.get("/login",userLogin);
router.post("/signup",userSignUp);




export default router;