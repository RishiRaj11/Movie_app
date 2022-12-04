import express from "express";
import connection from "./dbconnection.js";
import cors from 'cors'
import router from "./routes/route.js";
//import defaultData from "./default.js";
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use("/",router);

const PORT = 5000;

const URL="mongodb+srv://rishi:rishi12345@cluster0.fhtn3ag.mongodb.net/?retryWrites=true&w=majority"
connection(URL);
app.listen(PORT, () => {
  console.log("Listening at port  5000");
});
//defaultData();
