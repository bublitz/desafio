import { create } from 'zustand';
import { ConfigApi, AppConfig } from '../api/config.api';

interface ConfigState {
  config?: AppConfig;
  loadConfig: () => Promise<void>;
}

export const useConfigStore = create<ConfigState>(set => ({
  config: undefined,

  loadConfig: async () => {
    const data = await ConfigApi.load();
    set({ config: data });
  },
}));
