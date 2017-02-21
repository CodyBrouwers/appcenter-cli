/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Crash class.
 * @constructor
 * @member {string} crashId
 * 
 * @member {string} [displayId]
 * 
 * @member {date} timestamp
 * 
 * @member {string} version
 * 
 * @member {string} build
 * 
 * @member {string} device
 * 
 * @member {string} osVersion
 * 
 * @member {string} [osType]
 * 
 * @member {string} userName
 * 
 * @member {string} [userEmail]
 * 
 */
function Crash() {
}

/**
 * Defines the metadata of Crash
 *
 * @returns {object} metadata of Crash
 *
 */
Crash.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Crash',
    type: {
      name: 'Composite',
      className: 'Crash',
      modelProperties: {
        crashId: {
          required: true,
          serializedName: 'crash_id',
          type: {
            name: 'String'
          }
        },
        displayId: {
          required: false,
          serializedName: 'display_id',
          type: {
            name: 'String'
          }
        },
        timestamp: {
          required: true,
          serializedName: 'timestamp',
          type: {
            name: 'DateTime'
          }
        },
        version: {
          required: true,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        build: {
          required: true,
          serializedName: 'build',
          type: {
            name: 'String'
          }
        },
        device: {
          required: true,
          serializedName: 'device',
          type: {
            name: 'String'
          }
        },
        osVersion: {
          required: true,
          serializedName: 'os_version',
          type: {
            name: 'String'
          }
        },
        osType: {
          required: false,
          serializedName: 'os_type',
          type: {
            name: 'String'
          }
        },
        userName: {
          required: true,
          serializedName: 'user_name',
          type: {
            name: 'String'
          }
        },
        userEmail: {
          required: false,
          serializedName: 'user_email',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Crash;
