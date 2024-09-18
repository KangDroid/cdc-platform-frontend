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
import { DatabaseMetadataResponse } from './database-metadata-response';
// May contain unused imports in some cases
// @ts-ignore
import { WorkflowStatus } from './workflow-status';

/**
 *
 * @export
 * @interface WorkflowResponse
 */
export interface WorkflowResponse {
  /**
   *
   * @type {string}
   * @memberof WorkflowResponse
   */
  id?: string | null;
  /**
   *
   * @type {string}
   * @memberof WorkflowResponse
   */
  name?: string | null;
  /**
   *
   * @type {string}
   * @memberof WorkflowResponse
   */
  createdBy?: string | null;
  /**
   *
   * @type {string}
   * @memberof WorkflowResponse
   */
  startedAt?: string | null;
  /**
   *
   * @type {string}
   * @memberof WorkflowResponse
   */
  deletedAt?: string | null;
  /**
   *
   * @type {WorkflowStatus}
   * @memberof WorkflowResponse
   */
  workflowStatus?: WorkflowStatus;
  /**
   *
   * @type {DatabaseMetadataResponse}
   * @memberof WorkflowResponse
   */
  sourceMetadata?: DatabaseMetadataResponse;
  /**
   *
   * @type {DatabaseMetadataResponse}
   * @memberof WorkflowResponse
   */
  targetMetadata?: DatabaseMetadataResponse;
}
