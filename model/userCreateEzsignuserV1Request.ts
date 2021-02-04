/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.28
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

