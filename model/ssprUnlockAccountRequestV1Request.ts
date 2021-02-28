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
import { FieldEUserTypeSSPR } from './fieldEUserTypeSSPR';

/**
* Request for the /1/module/sspr/unlockAccountRequest API Request
*/
export class SsprUnlockAccountRequestV1Request {
    /**
    * The customer code assigned to your account
    */
    'pksCustomerCode': string;
    /**
    * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
    */
    'fkiLanguageID': number;
    'eUserTypeSSPR': FieldEUserTypeSSPR;
    /**
    * The email address.
    */
    'sEmailAddress'?: string;
    /**
    * The Login name of the User.
    */
    'sUserLoginname'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pksCustomerCode",
            "baseName": "pksCustomerCode",
            "type": "string"
        },
        {
            "name": "fkiLanguageID",
            "baseName": "fkiLanguageID",
            "type": "number"
        },
        {
            "name": "eUserTypeSSPR",
            "baseName": "eUserTypeSSPR",
            "type": "FieldEUserTypeSSPR"
        },
        {
            "name": "sEmailAddress",
            "baseName": "sEmailAddress",
            "type": "string"
        },
        {
            "name": "sUserLoginname",
            "baseName": "sUserLoginname",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SsprUnlockAccountRequestV1Request.attributeTypeMap;
    }
}

