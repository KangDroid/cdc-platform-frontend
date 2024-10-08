/* tslint:disable */

/* eslint-disable */

/**
 * Platform.Workflow
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
import { DatabaseMetadata } from '../model';
// @ts-ignore
import { SourceConnectionVerificationResponse } from '../model';
// @ts-ignore
import { TargetConnectionVerificationResponse } from '../model';

/**
 * WorkflowConnectionApi - axios parameter creator
 * @export
 */
export const WorkflowConnectionApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @param {DatabaseMetadata} [DatabaseMetadata]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyDestinationConnectionAsync: async (
      DatabaseMetadata?: DatabaseMetadata,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/workflows/connections/destination/verification`;
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

      // authentication JwtAuthenticationFilter required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

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
        DatabaseMetadata,
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
     * @param {DatabaseMetadata} [DatabaseMetadata]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifySourceConnectionAsync: async (
      DatabaseMetadata?: DatabaseMetadata,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/workflows/connections/source/verification`;
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

      // authentication JwtAuthenticationFilter required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

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
        DatabaseMetadata,
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
 * WorkflowConnectionApi - functional programming interface
 * @export
 */
export const WorkflowConnectionApiFp = function (
  configuration?: Configuration,
) {
  const localVarAxiosParamCreator =
    WorkflowConnectionApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {DatabaseMetadata} [DatabaseMetadata]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verifyDestinationConnectionAsync(
      DatabaseMetadata?: DatabaseMetadata,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<TargetConnectionVerificationResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.verifyDestinationConnectionAsync(
          DatabaseMetadata,
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
     * @param {DatabaseMetadata} [DatabaseMetadata]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verifySourceConnectionAsync(
      DatabaseMetadata?: DatabaseMetadata,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<SourceConnectionVerificationResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.verifySourceConnectionAsync(
          DatabaseMetadata,
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
 * WorkflowConnectionApi - factory interface
 * @export
 */
export const WorkflowConnectionApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = WorkflowConnectionApiFp(configuration);
  return {
    /**
     *
     * @param {DatabaseMetadata} [DatabaseMetadata]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyDestinationConnectionAsync(
      DatabaseMetadata?: DatabaseMetadata,
      options?: any,
    ): AxiosPromise<TargetConnectionVerificationResponse> {
      return localVarFp
        .verifyDestinationConnectionAsync(DatabaseMetadata, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {DatabaseMetadata} [DatabaseMetadata]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifySourceConnectionAsync(
      DatabaseMetadata?: DatabaseMetadata,
      options?: any,
    ): AxiosPromise<SourceConnectionVerificationResponse> {
      return localVarFp
        .verifySourceConnectionAsync(DatabaseMetadata, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * WorkflowConnectionApi - object-oriented interface
 * @export
 * @class WorkflowConnectionApi
 * @extends {BaseAPI}
 */
export class WorkflowConnectionApi extends BaseAPI {
  /**
   *
   * @param {DatabaseMetadata} [DatabaseMetadata]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkflowConnectionApi
   */
  public verifyDestinationConnectionAsync(
    DatabaseMetadata?: DatabaseMetadata,
    options?: AxiosRequestConfig,
  ) {
    return WorkflowConnectionApiFp(this.configuration)
      .verifyDestinationConnectionAsync(DatabaseMetadata, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {DatabaseMetadata} [DatabaseMetadata]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WorkflowConnectionApi
   */
  public verifySourceConnectionAsync(
    DatabaseMetadata?: DatabaseMetadata,
    options?: AxiosRequestConfig,
  ) {
    return WorkflowConnectionApiFp(this.configuration)
      .verifySourceConnectionAsync(DatabaseMetadata, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
