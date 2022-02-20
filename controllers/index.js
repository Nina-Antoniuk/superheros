import repository from "../repository";
import { HttpCode } from "../lib/consts";

const getHeroes = async (req, res, next) => {
  try {
    const getHeroesList = await repository.getHeroes(req.query);
    return res
      .status(HttpCode.OK)
      .json({ status: HttpCode.OK, heroes: getHeroesList });
  } catch (err) {
    next(err);
  }
};

const getHero = async (req, res, next) => {
  const id = req.params.id;
  try {
    const getHeroInfo = await repository.getHero(id);
    return res
      .status(HttpCode.OK)
      .json({ status: HttpCode.OK, hero: getHeroInfo });
  } catch (err) {
    next(err);
  }
};

const createHero = async (req, res, next) => {
  try {
    const { nickname } = req.body;
    const isHeroExist = await repository.findByNick(nickname);
    if (isHeroExist) {
      return res.status(HttpCode.CONFLICT).json({
        status: `${HttpCode.CONFLICT}`,
        message: "nickname is exist",
      });
    }
    const newHero = await repository.create(req.body);
    if (newHero) {
      const getHeroesList = await repository.getHeroes(0, 5);
      return res
        .status(HttpCode.CREATED)
        .json({ status: HttpCode.CREATED, heroes: getHeroesList });
    }
    return res
      .status(HttpCode.BAD_REQUEST)
      .json({ status: HttpCode.BAD_REQUEST, message: " Bad request" });
  } catch (err) {
    next(err);
  }
};

const deleteHero = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedHero = await repository.remove(id);
    if (deletedHero) {
      return res
        .status(HttpCode.OK)
        .json({ status: HttpCode.OK, message: "hero deleted" });
    }
    return res
      .status(HttpCode.NOT_FOUND)
      .json({ status: HttpCode.BAD_REQUEST, message: "Not found" });
  } catch (err) {
    next(err);
  }
};

const updateHero = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedHero = await repository.update(id, req.body);

    if (updatedHero) {
      return res
        .status(HttpCode.OK)
        .json({ status: HttpCode.OK, hero: updatedHero });
    }
    return res
      .status(HttpCode.NOT_FOUND)
      .json({ status: HttpCode.BAD_REQUEST, message: "Not found" });
  } catch (err) {
    next(err);
  }
};

export default { getHeroes, getHero, createHero, deleteHero, updateHero };
