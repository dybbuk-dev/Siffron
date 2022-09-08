import FileStorage from '../../services/file/fileStorage';

export default class FileRepository {
  static async fillDownloadUrl(files) {
    if (!files) {
      return files;
    }

    return await Promise.all(
      files.map(async (file) => {
        let downloadUrl;

        if (file.publicUrl) {
          downloadUrl = file.publicUrl;
        } else {
          downloadUrl = await FileStorage.downloadUrl(
            file.privateUrl,
          );
        }

        return {
          ...file,
          downloadUrl,
        };
      }),
    );
  }
}
