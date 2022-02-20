import { HttpCode } from "../lib/consts";
import UploadFileService from "../service/storage";
import LocalFileStorage from "../service/local-storage";

const updateImage = async (req, res, next) => {
  const uploadService = new UploadFileService(LocalFileStorage, req.file);
  const image = await uploadService.updateImage();

  res
    .status(HttpCode.OK)
    .json({ status: "success", code: HttpCode.OK, data: image });
};
export default updateImage;
