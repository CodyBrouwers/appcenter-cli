/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ReleaseDetails class.
 * @constructor
 * Details of an uploaded release
 *
 * @member {string} [id] ID identifying this unique release.
 * 
 * @member {string} [status] OBSOLETE. Will be removed in next version. The
 * availability concept is now replaced with distributed. Any 'available'
 * release will be associated with the default distribution group of an
 * app.</br>
 * The release state.<br>
 * <b>available</b>: The uploaded release has been distributed.<br>
 * <b>unavailable</b>: The uploaded release is not visible to the user. <br>
 * . Possible values include: 'available', 'unavailable'
 * 
 * @member {string} [appName] The app's name (extracted from the uploaded
 * release).
 * 
 * @member {string} [version] The release's version.<br>
 * For iOS: CFBundleVersion from info.plist.
 * For Android: android:versionCode from AppManifest.xml.
 * 
 * @member {string} [shortVersion] The release's short version.<br>
 * For iOS: CFBundleShortVersionString from info.plist.
 * For Android: android:versionName from AppManifest.xml.
 * 
 * @member {string} [releaseNotes] The release's release notes.
 * 
 * @member {string} [provisioningProfileName] The release's release notes.
 * 
 * @member {number} [size] The release's size in bytes.
 * 
 * @member {string} [minOs] The release's minimum required operating system.
 * 
 * @member {string} [fingerprint] MD5 checksum of the release binary.
 * 
 * @member {string} [uploadedAt] UTC time in ISO 8601 format of the uploaded
 * time.
 * 
 * @member {string} [downloadUrl] The URL that hosts the binary for this
 * release.
 * 
 * @member {string} [appIconUrl] A URL to the app's icon.
 * 
 * @member {string} [installUrl] The href required to install a release on a
 * mobile device. On iOS devices will be prefixed with
 * `itms-services://?action=download-manifest&url=`
 * 
 * @member {array} [distributionGroups] a list of distribution groups that are
 * associated with this release.
 * 
 */
function ReleaseDetails() {
}

/**
 * Defines the metadata of ReleaseDetails
 *
 * @returns {object} metadata of ReleaseDetails
 *
 */
ReleaseDetails.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ReleaseDetails',
    type: {
      name: 'Composite',
      className: 'ReleaseDetails',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        appName: {
          required: false,
          serializedName: 'app_name',
          type: {
            name: 'String'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        shortVersion: {
          required: false,
          serializedName: 'short_version',
          type: {
            name: 'String'
          }
        },
        releaseNotes: {
          required: false,
          serializedName: 'release_notes',
          type: {
            name: 'String'
          }
        },
        provisioningProfileName: {
          required: false,
          serializedName: 'provisioning_profile_name',
          type: {
            name: 'String'
          }
        },
        size: {
          required: false,
          serializedName: 'size',
          type: {
            name: 'Number'
          }
        },
        minOs: {
          required: false,
          serializedName: 'min_os',
          type: {
            name: 'String'
          }
        },
        fingerprint: {
          required: false,
          serializedName: 'fingerprint',
          type: {
            name: 'String'
          }
        },
        uploadedAt: {
          required: false,
          serializedName: 'uploaded_at',
          type: {
            name: 'String'
          }
        },
        downloadUrl: {
          required: false,
          serializedName: 'download_url',
          type: {
            name: 'String'
          }
        },
        appIconUrl: {
          required: false,
          serializedName: 'app_icon_url',
          type: {
            name: 'String'
          }
        },
        installUrl: {
          required: false,
          serializedName: 'install_url',
          type: {
            name: 'String'
          }
        },
        distributionGroups: {
          required: false,
          serializedName: 'distribution_groups',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DistributionGroupElementType',
                type: {
                  name: 'Composite',
                  className: 'DistributionGroup'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ReleaseDetails;
