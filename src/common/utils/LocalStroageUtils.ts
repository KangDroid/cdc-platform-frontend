export class LocalStorageUtils {
  static accessTokenKey: string = 'accessToken';
  static refreshTokenKey: string = 'refreshToken';
  static joinTokenKey: string = 'joinToken';

  static setJoinToken(joinToken: string) {
    localStorage.setItem(this.joinTokenKey, joinToken);
  }

  static getJoinToken(): string {
    const data = localStorage.getItem(this.joinTokenKey);
    if (data === null) {
      throw new Error('Cannot find join token on storage');
    }
    return data;
  }

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
