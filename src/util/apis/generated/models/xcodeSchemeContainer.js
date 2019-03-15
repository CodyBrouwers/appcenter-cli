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
 * Class representing a XcodeSchemeContainer.
 */
class XcodeSchemeContainer {
  /**
   * Create a XcodeSchemeContainer.
   * @property {string} path Path to project
   * @property {array} sharedSchemes Project schemes
   * @property {string} [podfilePath] Path to CocoaPods file, if present
   * @property {string} [cartfilePath] Path to Carthage file, if present
   * @property {string} [xcodeProjectSha] repo object Id of the pbxproject
   * @property {string} [workspaceProjectPaths] Related projects paths for
   * xcworkspace
   * @property {array} [appExtensionTargets] Information regarding project app
   * extensions, if present
   */
  constructor() {
  }

  /**
   * Defines the metadata of XcodeSchemeContainer
   *
   * @returns {object} metadata of XcodeSchemeContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'XcodeSchemeContainer',
      type: {
        name: 'Composite',
        className: 'XcodeSchemeContainer',
        modelProperties: {
          path: {
            required: true,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          sharedSchemes: {
            required: true,
            serializedName: 'sharedSchemes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'XcodeSchemeElementType',
                  type: {
                    name: 'Composite',
                    className: 'XcodeScheme'
                  }
              }
            }
          },
          podfilePath: {
            required: false,
            serializedName: 'podfilePath',
            type: {
              name: 'String'
            }
          },
          cartfilePath: {
            required: false,
            serializedName: 'cartfilePath',
            type: {
              name: 'String'
            }
          },
          xcodeProjectSha: {
            required: false,
            serializedName: 'xcodeProjectSha',
            type: {
              name: 'String'
            }
          },
          workspaceProjectPaths: {
            required: false,
            serializedName: 'workspaceProjectPaths',
            type: {
              name: 'String'
            }
          },
          appExtensionTargets: {
            required: false,
            serializedName: 'appExtensionTargets',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IosAppExtensionInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'IosAppExtensionInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = XcodeSchemeContainer;
