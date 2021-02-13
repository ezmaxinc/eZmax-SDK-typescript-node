/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Payload for the /1/object/ezsigndocument/{pkiEzsigndocument}/getDownloadUrl API Request
*/
export class EzsigndocumentGetDownloadUrlV1ResponseMPayload {
    /**
    * The Url to the requested document.  Url will expire after 5 minutes.
    */
    'sDownloadUrl': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sDownloadUrl",
            "baseName": "sDownloadUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EzsigndocumentGetDownloadUrlV1ResponseMPayload.attributeTypeMap;
    }
}

