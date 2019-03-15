/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Error
 *
 */
class ErrorModel {
  /**
   * Create a ErrorModel.
   * @property {object} [error]
   * @property {number} [error.code] The status code return by the API. It can
   * be 400 or 403 or 500.
   * @property {string} [error.message] The reason for the request failed
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorModel
   *
   * @returns {object} metadata of ErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Error',
      type: {
        name: 'Composite',
        className: 'ErrorModel',
        modelProperties: {
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ErrorError'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorModel;
