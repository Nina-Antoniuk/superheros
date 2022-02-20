import Jimp from "jimp";

class UploadFileService {
  constructor(Storage, file) {
    this.storage = new Storage(file);
    this.pathFile = file.path;
  }

  async updateImage() {
    await this.transformImage(this.pathFile);
    const userUrlAvatar = await this.storage.save();
    return userUrlAvatar;
  }

  async transformImage(pathFile) {
    const pic = await Jimp.read(pathFile);
    await pic
      .autocrop()
      .cover(
        200,
        200,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(pathFile);
  }
}

export default UploadFileService;
