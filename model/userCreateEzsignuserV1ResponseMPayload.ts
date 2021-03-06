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

/**
* Payload for the /1/module/user/createEzsignuser API Request
*/
export class UserCreateEzsignuserV1ResponseMPayload {
    /**
    * An array of email addresses that succeeded.
    */
    'a_sEmailAddressSuccess': Array<string>;
    /**
    * An array of email addresses that failed.
    */
    'a_sEmailAddressFailure': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "a_sEmailAddressSuccess",
            "baseName": "a_sEmailAddressSuccess",
            "type": "Array<string>"
        },
        {
            "name": "a_sEmailAddressFailure",
            "baseName": "a_sEmailAddressFailure",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return UserCreateEzsignuserV1ResponseMPayload.attributeTypeMap;
    }
}

