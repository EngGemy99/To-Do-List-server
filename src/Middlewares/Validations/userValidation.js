import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().min(2).max(20).trim().required(),
  email: Joi.string().trim().required().email(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().max(11).required(),
  profilePic: Joi.string().required(),
  role: Joi.string().valid("user", "admin").required(),
  isActive: Joi.boolean().default(true),
  verified: Joi.boolean().default(false),
});
