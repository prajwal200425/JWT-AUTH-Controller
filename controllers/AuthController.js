const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(404)
        .json({
          message: "Email already exist! you can login  ",
          success: false,
        });
    }

    const userModel = new User({ name, email, role, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res
    .status(200)
    .json({ 
        message: "Signup successfull !",
        success: true });

  } catch (error) {
    res
    .status(500)
    .json({ 
        message: "Internal server error.", 
        success: false 
    });
  }
};

const login = async (req, res) => {
    try {
        const {  email,  password } = req.body;
        const errMessage = "email or password incorrect."
        const JWT_SECRET = 'prajwal2004';
        const user = await User.findOne({ email });
        if (!user) {
          return res
            .status(404)
            .json({
              message: errMessage,
              success: false,
            });
        }
    
        const isPassEqual = await bcrypt.compare(password , user.password)
        if(!isPassEqual){
            return res
            .status(404)
            .json({
              message: errMessage,
              success: false,
            });
        }

        const jwtToken = jwt.sign(
            {email: user.email , _id : user._id},
            JWT_SECRET,
            {expiresIn: '48h'}
        )

        res.status(200)
        .json({ 
            message: `Wellcome back ,${user.name}` ,
            success: true ,
            token: jwtToken,
            email,
            name: user.name,
            role: user.role,
        });
    
      } catch (error) {
        res
        .status(500)
        .json({ 
            message: "Internal server error.", 
            success: false 
        });
      }
};

module.exports = {
  login,
  signup,
};
