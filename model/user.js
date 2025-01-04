const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], // Name is mandatory
       
    },
    email: {
        type: String,
        required: [true, 'Email is required'], // Email is mandatory
       
    },
    role: {
        type: String,
        required:true,
         
    },
    password: {
        type: String,
        required: [true, 'Password is required'], // Password is mandatory
        minlength: [6, 'Password must be at least 6 characters long'], // Minimum password length
    },
   
 
});


const User = mongoose.model('User ', userSchema);

module.exports = User; 