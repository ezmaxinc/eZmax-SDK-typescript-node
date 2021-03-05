/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.32
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
import { EzsignfoldersignerassociationCreateObjectV1ResponseMPayload } from './ezsignfoldersignerassociationCreateObjectV1ResponseMPayload';

/**
* Response for the /1/object/ezsignfoldersignerassociation/createObject API Request
*/
export class EzsignfoldersignerassociationCreateObjectV1Response {
    'mPayload': EzsignfoldersignerassociationCreateObjectV1ResponseMPayload;
    'objDebugPayload'?: CommonResponseObjDebugPayload;
    'objDebug'?: CommonResponseObjDebug;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mPayload",
            "baseName": "mPayload",
            "type": "EzsignfoldersignerassociationCreateObjectV1ResponseMPayload"
        },
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
        return EzsignfoldersignerassociationCreateObjectV1Response.attributeTypeMap;
    }
}

