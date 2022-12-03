import express from "express";
import connection from "./dbconnection.js";
import router from "./routes/route.js";
const app = express();


app.use("/",router);

const PORT = 5000;

const URL="mongodb+srv://rishi:rishi12345@cluster0.fhtn3ag.mongodb.net/?retryWrites=true&w=majority"
connection(URL);
app.listen(PORT, () => {
  console.log("Listening at port  5000");
});
