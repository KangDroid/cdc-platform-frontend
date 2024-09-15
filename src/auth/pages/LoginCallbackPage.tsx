import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { LocalStorageUtils } from '../../common/utils/LocalStroageUtils.ts';
import { useLogin } from '../services/AuthService.ts';

export function LoginCallbackPage() {
  const [searchParameters] = useSearchParams();
  const navigate = useNavigate();
  const { mutate: login } = useLogin((loginResponse) => {
    if (loginResponse.loginResult === 'NeedsRegistration') {
      LocalStorageUtils.setJoinToken(loginResponse.token);
      navigate('/auth/register');
      return;
    }

    // Set Local storage
    LocalStorageUtils.setAccessToken(loginResponse.token);
    LocalStorageUtils.setRefreshToken(loginResponse.refreshToken!);

    // Redirect to main page
    navigate(searchParameters.get('state') ?? '/');
  });

  useEffect(() => {
    const code = searchParameters.get('code');
    if (code == null) return;

    login({
      code: code,
      currentUrl: window.location.origin,
    });
  }, [login, searchParameters]);

  return <></>;
}
