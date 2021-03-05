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
import { FranchisereferalincomeRequest } from './franchisereferalincomeRequest';
import { FranchisereferalincomeRequestCompound } from './franchisereferalincomeRequestCompound';

/**
* Request for the /1/object/franchisereferalincome/createObject API Request
*/
export class FranchisereferalincomeCreateObjectV1Request {
    'objFranchisereferalincome'?: FranchisereferalincomeRequest;
    'objFranchisereferalincomeCompound'?: FranchisereferalincomeRequestCompound;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objFranchisereferalincome",
            "baseName": "objFranchisereferalincome",
            "type": "FranchisereferalincomeRequest"
        },
        {
            "name": "objFranchisereferalincomeCompound",
            "baseName": "objFranchisereferalincomeCompound",
            "type": "FranchisereferalincomeRequestCompound"
        }    ];

    static getAttributeTypeMap() {
        return FranchisereferalincomeCreateObjectV1Request.attributeTypeMap;
    }
}

