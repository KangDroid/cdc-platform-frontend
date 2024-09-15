export class LocalStorageUtils {
  static accessTokenKey: string = 'accessToken';
  static refreshTokenKey: string = 'refreshToken';

  static setAccessToken(accessToken: string) {
    localStorage.setItem(this.accessTokenKey, accessToken);
  }

  static getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  static removeAccessToken() {
    localStorage.removeItem(this.accessTokenKey);
  }

  static setRefreshToken(refreshToken: string) {
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  static getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  static removeRefreshToken() {
    localStorage.removeItem(this.refreshTokenKey);
  }
}
