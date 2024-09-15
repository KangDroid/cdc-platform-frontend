import { API_BASE_URL } from '../config/config.ts';
import { AuthApi, Configuration } from '../lib/auth/api';

export const authApi = new AuthApi(
  new Configuration({
    basePath: API_BASE_URL,
  }),
);
