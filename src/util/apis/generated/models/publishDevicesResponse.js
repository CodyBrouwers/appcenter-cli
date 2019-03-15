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
 * The information for a single iOS device
 *
 */
class PublishDevicesResponse {
  /**
   * Create a PublishDevicesResponse.
   * @property {string} [profileFileName] The file name for the provisioning
   * profile.
   * @property {string} profilesZipBase64 The updated provisioning profiles zip
   * base64 encoded.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PublishDevicesResponse
   *
   * @returns {object} metadata of PublishDevicesResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PublishDevicesResponse',
      type: {
        name: 'Composite',
        className: 'PublishDevicesResponse',
        modelProperties: {
          profileFileName: {
            required: false,
            serializedName: 'profile_file_name',
            type: {
              name: 'String'
            }
          },
          profilesZipBase64: {
            required: true,
            serializedName: 'profiles_zip_base64',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PublishDevicesResponse;
