import { Router } from "express";
import { userLogin,userSignUp } from "../controller/user_controller.js";
import  getAllMovies from '../controller/movies_controller.js'



const router=Router();



router.get("/login",userLogin);
router.post("/signup",userSignUp);
router.get("/movies",getAllMovies);



export default router;