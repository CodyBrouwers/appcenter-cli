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
 * Class representing a JavaScriptToolset.
 */
class JavaScriptToolset {
  /**
   * Create a JavaScriptToolset.
   * @property {array} packageJsonPaths Paths for detected package.json files
   * @property {array} [javascriptSolutions] The React Native solutions
   * detected
   */
  constructor() {
  }

  /**
   * Defines the metadata of JavaScriptToolset
   *
   * @returns {object} metadata of JavaScriptToolset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JavaScriptToolset',
      type: {
        name: 'Composite',
        className: 'JavaScriptToolset',
        modelProperties: {
          packageJsonPaths: {
            required: true,
            serializedName: 'packageJsonPaths',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          javascriptSolutions: {
            required: false,
            serializedName: 'javascriptSolutions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JavaScriptSolutionElementType',
                  type: {
                    name: 'Composite',
                    className: 'JavaScriptSolution'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JavaScriptToolset;
