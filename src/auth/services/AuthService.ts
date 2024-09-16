import { useMutation, useQuery } from '@tanstack/react-query';

import { authApi, authenticatedAuthApi } from '../../common/api/api.ts';
import { CredentialProvider, TokenResponse } from '../../common/lib/auth/api';

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

export const useRegistration = (
  afterRegisterSuccess: (response: TokenResponse) => void,
) => {
  return useMutation({
    mutationKey: ['registration'],
    mutationFn: async (data: {
      name: string;
      email: string;
      joinToken: string;
      provider: CredentialProvider;
    }) => {
      const response = await authApi.registerAsync({
        email: data.email,
        name: data.name,
        joinToken: data.joinToken,
        credentialProvider: data.provider,
      });
      return response.data;
    },
    onSuccess: (data) => {
      afterRegisterSuccess(data);
    },
  });
};

export const useMyInformation = () => {
  return useQuery({
    queryKey: ['my-information'],
    queryFn: async () => {
      const response = await authenticatedAuthApi.meAsync();
      return response.data;
    },
  });
};
