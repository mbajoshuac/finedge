const Joi = require('joi')

const regAuth = Joi.object({
      firstName: Joi.string().min(3).max(15).required(),
      lastName: Joi.string().min(3).max(15).required(),
      phoneNumber: Joi.string().min(3).max(15).required(),
      email: Joi.string().min(5).max(45).required(),
      country: Joi.string().min(3).max(45).required(),
      password: Joi.string().min(2).max(55).required(),
    });
    

module.exports= { regAuth };
