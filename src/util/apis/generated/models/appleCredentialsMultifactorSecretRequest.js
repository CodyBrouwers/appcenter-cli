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

const models = require('./index');

/**
 * Apple connection secrets
 *
 * @extends models['AppleConnectionSecretRequest']
 */
class AppleCredentialsMultifactorSecretRequest extends models['AppleConnectionSecretRequest'] {
  /**
   * Create a AppleCredentialsMultifactorSecretRequest.
   * @property {object} data apple secret details
   * @property {string} [data.username] username to connect to apple store.
   * @property {string} [data.password] password to connect to apple store.
   * @property {string} [data.authCode] The 6 digit Apple OTP for Multifactor
   * accounts
   * @property {string} [data.appSpecificPassword] The app specific password
   * required for app publishing for 2FA accounts
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AppleCredentialsMultifactorSecretRequest
   *
   * @returns {object} metadata of AppleCredentialsMultifactorSecretRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleCredentialsMultifactorSecretRequest',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'SharedConnectionRequest',
        className: 'AppleCredentialsMultifactorSecretRequest',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          credentialType: {
            required: false,
            serializedName: 'credentialType',
            defaultValue: 'credentials',
            type: {
              name: 'String'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          data: {
            required: true,
            serializedName: 'data',
            type: {
              name: 'Composite',
              className: 'AppleMultifactorSecretDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleCredentialsMultifactorSecretRequest;
