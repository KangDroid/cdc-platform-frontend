export const ErrorMap: { [key: string]: string } = {
  OAuthFailed: 'OAuth 인증에 실패했습니다.',
  JoinTokenValidationFailed: 'Join Token JWT Validation에 실패했습니다.',
  CredentialAlreadyExists: '이미 같은 인증 정보로 회원 가입 이력이 있습니다.',
  AuthenticationFailed: '인증에 실패했습니다.',
  ChannelAuthorizationFailed: '채널에 충분한 권한이 없습니다.',
  RefreshInvalidAccessToken:
    '리프레시 할 때 요청한 엑세스 토큰이 잘못되었습니다.',
  InvalidRefreshToken: '리프레시 토큰이 잘못되었습니다.',
  RefreshExpired: '리프레시 토큰이 만료되었습니다.',
  UnknownError: '알 수 없는 에러가 발생했습니다.',
};
