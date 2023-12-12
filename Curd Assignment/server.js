const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/User.route");
require("dotenv").config()

const PORT = 3000

const app=express();

const connectToDatabase = require("./config/dbConnection")
connectToDatabase()

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/",userRoute)  // user route

app.listen(PORT, () => {
    console.log("Server Started on PORT NO:", PORT)
})