/* tslint:disable */

/* eslint-disable */

/**
 * Platform.Notification
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
import { NotificationSeverity } from './notification-severity';

/**
 *
 * @export
 * @interface NotificationResponse
 */
export interface NotificationResponse {
  /**
   *
   * @type {string}
   * @memberof NotificationResponse
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof NotificationResponse
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof NotificationResponse
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof NotificationResponse
   */
  content: string;
  /**
   *
   * @type {NotificationSeverity}
   * @memberof NotificationResponse
   */
  severity: NotificationSeverity;
  /**
   *
   * @type {string}
   * @memberof NotificationResponse
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof NotificationResponse
   */
  readAt?: string | null;
}
