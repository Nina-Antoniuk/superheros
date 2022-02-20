import mongoose from "mongoose";

const { Schema, model } = mongoose;

const heroSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for hero"],
  },
  nickname: {
    type: String,
    required: [true, "Set nickname for hero"],
  },
  description: {
    type: String,
    required: [true, "Set description for hero"],
  },
  superpowers: {
    type: String,
    required: [true, "Set superpowers for hero"],
  },
  phrase: {
    type: String,
    required: [true, "Set phrase for hero"],
  },
});

const Hero = model("superheroes", heroSchema);

export default Hero;
