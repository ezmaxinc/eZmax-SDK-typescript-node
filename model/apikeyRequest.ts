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
import { MultilingualApikeyDescription } from './multilingualApikeyDescription';

/**
* An Apikey Object
*/
export class ApikeyRequest {
    /**
    * The unique ID of the User
    */
    'fkiUserID': number;
    'objApikeyDescription': MultilingualApikeyDescription;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fkiUserID",
            "baseName": "fkiUserID",
            "type": "number"
        },
        {
            "name": "objApikeyDescription",
            "baseName": "objApikeyDescription",
            "type": "MultilingualApikeyDescription"
        }    ];

    static getAttributeTypeMap() {
        return ApikeyRequest.attributeTypeMap;
    }
}

