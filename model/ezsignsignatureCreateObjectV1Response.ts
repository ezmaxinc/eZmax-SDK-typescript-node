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
import { EzsignsignatureCreateObjectV1ResponseMPayload } from './ezsignsignatureCreateObjectV1ResponseMPayload';

/**
* Response for the /1/object/ezsignsignature/createObject API Request
*/
export class EzsignsignatureCreateObjectV1Response {
    'mPayload': EzsignsignatureCreateObjectV1ResponseMPayload;
    'objDebugPayload'?: CommonResponseObjDebugPayload;
    'objDebug'?: CommonResponseObjDebug;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mPayload",
            "baseName": "mPayload",
            "type": "EzsignsignatureCreateObjectV1ResponseMPayload"
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
        return EzsignsignatureCreateObjectV1Response.attributeTypeMap;
    }
}

