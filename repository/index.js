import Hero from "../model";

const getHeroes = async ({ skip, limit }) => {
  const result = await Hero.find().skip(skip).limit(limit);
  return result;
};

const getHero = async (id) => {
  const result = await Hero.findById(id);
  return result;
};

const create = async (body) => {
  const result = await Hero.create({ ...body });
  return result;
};

const remove = async (id) => {
  const result = Hero.findOneAndRemove({ _id: id });
  return result;
};

const update = async (id, body) => {
  const result = await Hero.findByIdAndUpdate(
    {
      _id: id,
    },
    { ...body },
    { new: true }
  );
  return result;
};

const findByNick = async (nick) => {
  const result = Hero.findOne({ nickname: nick });
  return result;
};

export default {
  getHeroes,
  getHero,
  create,
  remove,
  update,
  findByNick,
};
