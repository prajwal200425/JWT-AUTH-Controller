const mongoose = require("mongoose");
require("dotenv").config();

async function ConnectMongo(){
    try {
        await mongoose.connect("mongodb+srv://prajwal25:vq5dBWebgJGHH7Sh@project-management.umd4z.mongodb.net/?retryWrites=true&w=majority&appName=project-management")
        console.log("connect successfully! to mongoDB")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = ConnectMongo;