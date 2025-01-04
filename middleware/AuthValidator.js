const joi = require("joi");
  
    exports.signupValidator = (req , res, next)=>{
    const schema = joi.object({
        name:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required(),
        role: joi.string().valid('manager', 'employee').required(),

    })

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).send({message:"bad request" , error})
    }
    next();
}

exports.loginValidator = (req , res, next)=>{
    const schema = joi.object({
        
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required(),

    })

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).send({message:"bad request" , error})
    }
    next();
}

