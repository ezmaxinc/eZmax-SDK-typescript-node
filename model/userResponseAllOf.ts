/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.29
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CommonAudit } from './commonAudit';
import { FieldEUserType } from './fieldEUserType';

export class UserResponseAllOf {
    /**
    * The unique ID of the User
    */
    'pkiUserID': number;
    /**
    * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
    */
    'fkiLanguageID': number;
    'eUserType': FieldEUserType;
    /**
    * The First name of the user
    */
    'sUserFirstname': string;
    /**
    * The Last name of the user
    */
    'sUserLastname': string;
    /**
    * The Login name of the User.
    */
    'sUserLoginname': string;
    'objAudit': CommonAudit;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pkiUserID",
            "baseName": "pkiUserID",
            "type": "number"
        },
        {
            "name": "fkiLanguageID",
            "baseName": "fkiLanguageID",
            "type": "number"
        },
        {
            "name": "eUserType",
            "baseName": "eUserType",
            "type": "FieldEUserType"
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
            "name": "sUserLoginname",
            "baseName": "sUserLoginname",
            "type": "string"
        },
        {
            "name": "objAudit",
            "baseName": "objAudit",
            "type": "CommonAudit"
        }    ];

    static getAttributeTypeMap() {
        return UserResponseAllOf.attributeTypeMap;
    }
}

