/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Request for the /1/module/user/createEzsignuser API Request
*/
export class UserCreateEzsignuserV1Request {
    /**
    * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
    */
    'fkiLanguageID': number;
    /**
    * The First name of the user
    */
    'sUserFirstname': string;
    /**
    * The Last name of the user
    */
    'sUserLastname': string;
    /**
    * The email address.
    */
    'sEmailAddress': string;
    /**
    * The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
    */
    'sPhoneRegion': string;
    /**
    * The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
    */
    'sPhoneExchange': string;
    /**
    * The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
    */
    'sPhoneNumber': string;
    /**
    * The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
    */
    'sPhoneExtension'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fkiLanguageID",
            "baseName": "fkiLanguageID",
            "type": "number"
        },
        {
            "name": "sUserFirstname",
            "baseName": "sUserFirstname",
            "type": "string"
        },
        {
            "name": "sUserLastname",
            "baseName": "sUserLastname",
            "type": "string"
        },
        {
            "name": "sEmailAddress",
            "baseName": "sEmailAddress",
            "type": "string"
        },
        {
            "name": "sPhoneRegion",
            "baseName": "sPhoneRegion",
            "type": "string"
        },
        {
            "name": "sPhoneExchange",
            "baseName": "sPhoneExchange",
            "type": "string"
        },
        {
            "name": "sPhoneNumber",
            "baseName": "sPhoneNumber",
            "type": "string"
        },
        {
            "name": "sPhoneExtension",
            "baseName": "sPhoneExtension",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserCreateEzsignuserV1Request.attributeTypeMap;
    }
}

