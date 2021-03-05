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
import { CommonAudit } from './commonAudit';
import { MultilingualApikeyDescription } from './multilingualApikeyDescription';

/**
* An Apikey Object
*/
export class ApikeyResponse {
    'objApikeyDescription': MultilingualApikeyDescription;
    /**
    * The secret token for the API key.  This will be returned only on creation.
    */
    'sComputedToken'?: string;
    /**
    * The unique ID of the Apikey
    */
    'pkiApikeyID': number;
    'objAudit': CommonAudit;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objApikeyDescription",
            "baseName": "objApikeyDescription",
            "type": "MultilingualApikeyDescription"
        },
        {
            "name": "sComputedToken",
            "baseName": "sComputedToken",
            "type": "string"
        },
        {
            "name": "pkiApikeyID",
            "baseName": "pkiApikeyID",
            "type": "number"
        },
        {
            "name": "objAudit",
            "baseName": "objAudit",
            "type": "CommonAudit"
        }    ];

    static getAttributeTypeMap() {
        return ApikeyResponse.attributeTypeMap;
    }
}

