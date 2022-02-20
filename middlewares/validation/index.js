import Joi from "joi";

const createHeroSchema = Joi.object({
  name: Joi.string().required(),
  nickname: Joi.string().required(),
  description: Joi.string().required(),
  superpowers: Joi.string().required(),
  phrase: Joi.string().required(),
});

const updateHeroSchema = Joi.object({
  name: Joi.string(),
  nickname: Joi.string(),
  description: Joi.string(),
  superpowers: Joi.string(),
  phrase: Joi.string(),
}).or("name", "nickname", "description", "superpowers", "phrase");

const validationOfCreation = async (req, res, next) => {
  try {
    await createHeroSchema.validateAsync(req.body);
  } catch (err) {
    res
      .status(400)
      .json({ message: `${err.message}, missing required name field` });
    return;
  }
  next();
};

const updateValidation = async (req, res, next) => {
  try {
    await updateHeroSchema.validateAsync(req.body);
  } catch (err) {
    res.status(400).json({ message: "missing required fields" });
    return;
  }
  next();
};

export default {
  validationOfCreation,
  updateValidation,
};
