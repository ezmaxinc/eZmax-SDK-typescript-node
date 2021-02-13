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
import { CommonResponse } from './commonResponse';
import { CommonResponseObjDebug } from './commonResponseObjDebug';
import { CommonResponseObjDebugPayload } from './commonResponseObjDebugPayload';

/**
* Response for the /1/object/ezsignfolder/deleteObject API Request
*/
export class EzsignfolderDeleteObjectV1Response {
    'objDebugPayload'?: CommonResponseObjDebugPayload;
    'objDebug'?: CommonResponseObjDebug;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objDebugPayload",
            "baseName": "objDebugPayload",
            "type": "CommonResponseObjDebugPayload"
        },
        {
            "name": "objDebug",
            "baseName": "objDebug",
            "type": "CommonResponseObjDebug"
        }    ];

    static getAttributeTypeMap() {
        return EzsignfolderDeleteObjectV1Response.attributeTypeMap;
    }
}

