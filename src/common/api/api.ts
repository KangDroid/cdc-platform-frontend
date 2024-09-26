import axios from 'axios';

import { API_BASE_URL } from '../config/config.ts';
import { AuthApi, Configuration } from '../lib/auth/api';
import { WorkflowApi, WorkflowConnectionApi } from '../lib/workflow/api';
import { LocalStorageUtils } from '../utils/LocalStroageUtils.ts';

export const defaultAuthorizationInstance = axios.create();

defaultAuthorizationInstance.interceptors.request.use(async (config) => {
  let token: string | undefined;

  try {
    token = LocalStorageUtils.getAccessToken() ?? undefined;
    if (!token) {
      throw new Error('Cannot find access token on storage');
    }
  } catch (e) {
    window.location.href = '/auth/login';
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

defaultAuthorizationInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      try {
        const refreshToken = await authApi.refreshAsync({
          accessToken: LocalStorageUtils.getAccessToken()!,
          refreshToken: LocalStorageUtils.getRefreshToken()!,
        });

        if (refreshToken.data) {
          LocalStorageUtils.setAccessToken(refreshToken.data.token);
          LocalStorageUtils.setRefreshToken(refreshToken.data.refreshToken!);
          config.headers.Authorization = `Bearer ${refreshToken.data.token}`;
          return axios(config);
        }
      } catch (e) {
        console.log('Refresh Token is not valid. Redirecting to login page.');
        LocalStorageUtils.removeAccessToken();
        LocalStorageUtils.removeRefreshToken();
        window.location.href = '/auth/login';
      }
    }

    return Promise.reject(error);
  },
);

const config = new Configuration({
  basePath: API_BASE_URL,
});

export const authApi = new AuthApi(config);

export const authenticatedAuthApi = new AuthApi(
  config,
  undefined,
  defaultAuthorizationInstance,
);

export const workflowApi = new WorkflowApi(
  config,
  undefined,
  defaultAuthorizationInstance,
);

export const workflowConnectionApi = new WorkflowConnectionApi(
  config,
  undefined,
  defaultAuthorizationInstance,
);
