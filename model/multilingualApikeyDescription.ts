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
* Description of the API Key  
*/
export class MultilingualApikeyDescription {
    /**
    * Value in French
    */
    'sApikeyDescription1'?: string;
    /**
    * Value in English
    */
    'sApikeyDescription2'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sApikeyDescription1",
            "baseName": "sApikeyDescription1",
            "type": "string"
        },
        {
            "name": "sApikeyDescription2",
            "baseName": "sApikeyDescription2",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MultilingualApikeyDescription.attributeTypeMap;
    }
}

