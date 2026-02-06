import { apiClient } from '../../../../app/shared/api/apiClient';

export interface AppConfig {
  theme: 'light' | 'dark';
  enableNewFeature: boolean;
}

export const ConfigApi = {
  async load(): Promise<AppConfig> {
    const response = await apiClient.get('/config');
    return response.data;
  },
};
