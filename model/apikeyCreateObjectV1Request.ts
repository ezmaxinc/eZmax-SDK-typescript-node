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
import { ApikeyRequest } from './apikeyRequest';
import { ApikeyRequestCompound } from './apikeyRequestCompound';

/**
* Request for the /1/object/apikey/createObject API Request
*/
export class ApikeyCreateObjectV1Request {
    'objApikey'?: ApikeyRequest;
    'objApikeyCompound'?: ApikeyRequestCompound;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objApikey",
            "baseName": "objApikey",
            "type": "ApikeyRequest"
        },
        {
            "name": "objApikeyCompound",
            "baseName": "objApikeyCompound",
            "type": "ApikeyRequestCompound"
        }    ];

    static getAttributeTypeMap() {
        return ApikeyCreateObjectV1Request.attributeTypeMap;
    }
}

