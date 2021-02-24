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
import { CommonResponseObjSQLQuery } from './commonResponseObjSQLQuery';

/**
* This is a generic debug object that is returned by all API requests
*/
export class CommonResponseObjDebug {
    /**
    * The peak memory allocated during the API request execution. Formatted as a human readable string
    */
    'sMemoryUsage': string;
    /**
    * The total server execution time of the API request execution. Formatted as a human readable string
    */
    'sRunTime': string;
    /**
    * The number of SQL SELECT queries that were sent to the database server during the API request execution
    */
    'iSQLSelects': number;
    /**
    * The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
    */
    'iSQLQueries': number;
    /**
    * An array of the SQL Queries that were executed during the API request execution
    */
    'a_objSQLQuery': Array<CommonResponseObjSQLQuery>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sMemoryUsage",
            "baseName": "sMemoryUsage",
            "type": "string"
        },
        {
            "name": "sRunTime",
            "baseName": "sRunTime",
            "type": "string"
        },
        {
            "name": "iSQLSelects",
            "baseName": "iSQLSelects",
            "type": "number"
        },
        {
            "name": "iSQLQueries",
            "baseName": "iSQLQueries",
            "type": "number"
        },
        {
            "name": "a_objSQLQuery",
            "baseName": "a_objSQLQuery",
            "type": "Array<CommonResponseObjSQLQuery>"
        }    ];

    static getAttributeTypeMap() {
        return CommonResponseObjDebug.attributeTypeMap;
    }
}

