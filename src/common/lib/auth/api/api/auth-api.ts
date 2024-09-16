/* tslint:disable */

/* eslint-disable */

/**
 * Platform.Auth
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

// @ts-ignore
import {
  BASE_PATH,
  BaseAPI,
  COLLECTION_FORMATS,
  RequestArgs,
  RequiredError,
} from '../base';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  createRequestFunction,
  serializeDataIfNeeded,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  toPathString,
} from '../common';
import type { Configuration } from '../configuration';
// @ts-ignore
import { ErrorResponse } from '../model';
// @ts-ignore
import { LoginRequest } from '../model';
// @ts-ignore
import { MeResponse } from '../model';
// @ts-ignore
import { RefreshTokenRequest } from '../model';
// @ts-ignore
import { SignUpRequest } from '../model';
// @ts-ignore
import { TokenResponse } from '../model';

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * 등록되지 않은 유저인 경우 NeedsRegistration과 JoinToken을 응답으로 반환합니다.
     * @summary 서비스에 로그인을 실시합니다.
     * @param {LoginRequest} [LoginRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginAsync: async (
      LoginRequest?: LoginRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth/login`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        LoginRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary 현재 로그인된 사용자의 정보를 가져옵니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    meAsync: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/auth/me`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication JwtAuthenticationFilter required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary 리프레시 로직을 실행합니다.
     * @param {RefreshTokenRequest} [RefreshTokenRequest] 리프레시 요청
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshAsync: async (
      RefreshTokenRequest?: RefreshTokenRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth/refresh`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        RefreshTokenRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary 서비스에 회원 가입합니다.
     * @param {SignUpRequest} [SignUpRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerAsync: async (
      SignUpRequest?: SignUpRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth/register`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        SignUpRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration);
  return {
    /**
     * 등록되지 않은 유저인 경우 NeedsRegistration과 JoinToken을 응답으로 반환합니다.
     * @summary 서비스에 로그인을 실시합니다.
     * @param {LoginRequest} [LoginRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async loginAsync(
      LoginRequest?: LoginRequest,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.loginAsync(
        LoginRequest,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary 현재 로그인된 사용자의 정보를 가져옵니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async meAsync(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<MeResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.meAsync(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary 리프레시 로직을 실행합니다.
     * @param {RefreshTokenRequest} [RefreshTokenRequest] 리프레시 요청
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async refreshAsync(
      RefreshTokenRequest?: RefreshTokenRequest,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.refreshAsync(
        RefreshTokenRequest,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary 서비스에 회원 가입합니다.
     * @param {SignUpRequest} [SignUpRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async registerAsync(
      SignUpRequest?: SignUpRequest,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.registerAsync(
        SignUpRequest,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
  };
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AuthApiFp(configuration);
  return {
    /**
     * 등록되지 않은 유저인 경우 NeedsRegistration과 JoinToken을 응답으로 반환합니다.
     * @summary 서비스에 로그인을 실시합니다.
     * @param {LoginRequest} [LoginRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginAsync(
      LoginRequest?: LoginRequest,
      options?: any,
    ): AxiosPromise<TokenResponse> {
      return localVarFp
        .loginAsync(LoginRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary 현재 로그인된 사용자의 정보를 가져옵니다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    meAsync(options?: any): AxiosPromise<MeResponse> {
      return localVarFp
        .meAsync(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary 리프레시 로직을 실행합니다.
     * @param {RefreshTokenRequest} [RefreshTokenRequest] 리프레시 요청
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshAsync(
      RefreshTokenRequest?: RefreshTokenRequest,
      options?: any,
    ): AxiosPromise<TokenResponse> {
      return localVarFp
        .refreshAsync(RefreshTokenRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary 서비스에 회원 가입합니다.
     * @param {SignUpRequest} [SignUpRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerAsync(
      SignUpRequest?: SignUpRequest,
      options?: any,
    ): AxiosPromise<TokenResponse> {
      return localVarFp
        .registerAsync(SignUpRequest, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
  /**
   * 등록되지 않은 유저인 경우 NeedsRegistration과 JoinToken을 응답으로 반환합니다.
   * @summary 서비스에 로그인을 실시합니다.
   * @param {LoginRequest} [LoginRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public loginAsync(LoginRequest?: LoginRequest, options?: AxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .loginAsync(LoginRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary 현재 로그인된 사용자의 정보를 가져옵니다.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public meAsync(options?: AxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .meAsync(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary 리프레시 로직을 실행합니다.
   * @param {RefreshTokenRequest} [RefreshTokenRequest] 리프레시 요청
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public refreshAsync(
    RefreshTokenRequest?: RefreshTokenRequest,
    options?: AxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .refreshAsync(RefreshTokenRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary 서비스에 회원 가입합니다.
   * @param {SignUpRequest} [SignUpRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public registerAsync(
    SignUpRequest?: SignUpRequest,
    options?: AxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .registerAsync(SignUpRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
