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
* Definition of objSQLQuery Object
*/
export class CommonResponseObjSQLQuery {
    /**
    * The SQL Query
    */
    'sQuery': string;
    /**
    * Execution time of the SQL Query in seconds
    */
    'fDuration': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sQuery",
            "baseName": "sQuery",
            "type": "string"
        },
        {
            "name": "fDuration",
            "baseName": "fDuration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CommonResponseObjSQLQuery.attributeTypeMap;
    }
}

