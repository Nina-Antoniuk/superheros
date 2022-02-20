import express from "express";
import heroControllers from "../../controllers";
import validation from "../../middlewares/validation";

const router = express.Router();

router.get("/", heroControllers.getHeroes);
router.get("/hero/:id", heroControllers.getHero);

router.post(
  "/create",
  validation.validationOfCreation,
  heroControllers.createHero
);

router.patch(
  "/update/:id",
  validation.updateValidation,
  heroControllers.updateHero
);

router.delete("/delete/:id", heroControllers.deleteHero);

export default router;
