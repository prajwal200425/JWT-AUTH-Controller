const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const ConnectMongo = require("./DB/dbConfig")
const bodyParser = require("body-parser")
const cors = require("cors");
const AuthRouter = require("./routes/authRoute")

const PORT = process.env.PORT || 8000
app.use(bodyParser.json())
app.use(cors());

ConnectMongo() 
// Authentication Route
app.use("/auth" ,AuthRouter);

app.listen(PORT , () =>{
console.log(`Server running at: http://localhost:${process.env.PORT}`);
})

app.get("/" , (req,res) => {
    res.send("Welcome to Home Page");
})