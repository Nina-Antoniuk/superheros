import Hero from "../model";

export const updateAvatar = async (id, avatar) => {
  return await Hero.updateOne({ _id: id }, { avatar });
};
