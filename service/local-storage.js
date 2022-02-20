import path from "path";
import fs from "fs/promises";
import { updateAvatar } from "../repository/updateAvatar";

class LocalStorage {
  constructor(file) {
    this.filename = file.filename;
    this.filePath = file.path;
    this.folderImages = process.env.FOLDER_FOR_IMAGES;
  }

  async save() {
    const destination = path.join(this.folderImages, "/images");
    await fs.mkdir(destination, { recursive: true });
    await fs.rename(this.filePath, path.join(destination, this.filename));
    const avatarUrl = path.normalize(path.resolve(this.filename));
    await updateAvatar(this.userId, avatarUrl);
    return avatarUrl;
  }
}

export default LocalStorage;
