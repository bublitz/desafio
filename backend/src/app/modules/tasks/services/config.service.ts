import { ConfigRepository } from "../config/repositories/config.repository";

export const ConfigService = {
  getConfig: async () => {
    return ConfigRepository.get();
  },
};
