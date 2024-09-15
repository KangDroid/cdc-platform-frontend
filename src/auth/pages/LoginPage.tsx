import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { Button, Flex, Image } from 'antd';
import { useSearchParams } from 'react-router-dom';

import GoogleLoginIcon from '../../assets/google_light.svg';
import { GOOGLE_OAUTH_CLIENT_ID } from '../../common/config/config.ts';

export function LoginPage() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
      <InnerLoginComponent />
    </GoogleOAuthProvider>
  );
}

function InnerLoginComponent() {
  const [searchParams] = useSearchParams();
  const login = useGoogleLogin({
    flow: 'auth-code',
    redirect_uri: `${window.location.origin}/auth/callback`,
    ux_mode: 'redirect',
    state: searchParams.get('redirect') ?? '/',
  });
  return (
    <Flex
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <Button
        onClick={() => login()}
        style={{
          width: '220px',
          height: '45px',
          border: '1px solid #d8d8d8',
          borderRadius: '20px',
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: '8px',
          cursor: 'pointer',
        }}
      >
        <Image src={GoogleLoginIcon} preview={false} />
        <div
          style={{
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '18px',
            color: '#000000',
          }}
        >
          구글 계정으로 로그인 하기
        </div>
      </Button>
    </Flex>
  );
}
