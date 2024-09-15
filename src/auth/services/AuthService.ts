import { useMutation } from '@tanstack/react-query';

import { authApi } from '../../common/api/api.ts';
import { TokenResponse } from '../../common/lib/auth/api';

export const useLogin = (
  onLoginCompleted: (response: TokenResponse) => void,
) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: { code: string; currentUrl: string }) => {
      const response = await authApi.loginAsync({
        authenticationCode: data.code,
        provider: 'Google',
      });

      return response.data;
    },
    onSuccess: (data) => {
      onLoginCompleted(data);
    },
  });
};
