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

/**
 *
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
  /**
   *
   * @type {number}
   * @memberof ErrorResponse
   */
  statusCodes?: number;
  /**
   *
   * @type {string}
   * @memberof ErrorResponse
   */
  errorMessage?: string | null;
  /**
   *
   * @type {string}
   * @memberof ErrorResponse
   */
  errorTitle?: string | null;
}
