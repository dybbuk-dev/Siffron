import MongooseRepository from '../database/repositories/mongooseRepository';
import SettingsRepository from '../database/repositories/settingsRepository';

const DEFAULT_SETTINGS = {
  theme: 'default',
};

class SettingsService {
  static async findOrCreateDefault(options) {
    return SettingsRepository.findOrCreateDefault(
      DEFAULT_SETTINGS,
      options,
    );
  }

  static async save(data, options) {
    const session = await MongooseRepository.createSession(
      options.database,
    );

    const settings = await SettingsRepository.save(
      data,
      options,
    );

    await MongooseRepository.commitTransaction(session);

    return settings;
  }
}

export default SettingsService;
