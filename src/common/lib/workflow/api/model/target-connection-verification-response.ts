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
// May contain unused imports in some cases
// @ts-ignore
import { DatabaseMetadata } from './database-metadata';

/**
 *
 * @export
 * @interface TargetConnectionVerificationResponse
 */
export interface TargetConnectionVerificationResponse {
  /**
   *
   * @type {DatabaseMetadata}
   * @memberof TargetConnectionVerificationResponse
   */
  databaseMetadata?: DatabaseMetadata;
  /**
   *
   * @type {boolean}
   * @memberof TargetConnectionVerificationResponse
   */
  result?: boolean;
  /**
   *
   * @type {string}
   * @memberof TargetConnectionVerificationResponse
   */
  reason?: string | null;
}
