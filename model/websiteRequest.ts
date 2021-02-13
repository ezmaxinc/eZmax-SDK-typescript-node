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
* A Website Object
*/
export class WebsiteRequest {
    /**
    * The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
    */
    'fkiWebsitetypeID': number;
    /**
    * The URL of the website.
    */
    'sWebsiteAddress': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fkiWebsitetypeID",
            "baseName": "fkiWebsitetypeID",
            "type": "number"
        },
        {
            "name": "sWebsiteAddress",
            "baseName": "sWebsiteAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WebsiteRequest.attributeTypeMap;
    }
}

