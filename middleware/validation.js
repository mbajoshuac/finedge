function validateUser(user) {
    const usersSchema = Joi.object({
      fisrtName: Joi.string().min(5).max(15).required(),
      lastName: Joi.string().min(5).max(15).required(),
      phoneNumber: Joi.string().min(3).max(15).required(),
      email: Joi.string().min(5).max(45).required(),
      country: Joi.string().min().max().required(),
      password: Joi.string().min(2).max(55).required(),
    });
    return usersSchema.validate(user, schema)
}

module.exports= { validateUser };
