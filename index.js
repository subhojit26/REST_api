const express=require("express")

const coursesRouter=require("./routes/courses")
const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose=require("mongoose")
const app=express()

app.use(bodyParser.json())
app.use("/api/v1/courses", coursesRouter)

mongoose.connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

app.listen(process.env.PORT,()=>{
    console.log("server is running");
})