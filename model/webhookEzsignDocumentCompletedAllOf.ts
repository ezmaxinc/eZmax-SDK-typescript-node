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
import { EzsigndocumentResponse } from './ezsigndocumentResponse';

export class WebhookEzsignDocumentCompletedAllOf {
    'objEzsigndocument': EzsigndocumentResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objEzsigndocument",
            "baseName": "objEzsigndocument",
            "type": "EzsigndocumentResponse"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEzsignDocumentCompletedAllOf.attributeTypeMap;
    }
}

