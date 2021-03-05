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
* Payload for the /1/object/ezsignfoldersignerassociation/createObject API Request
*/
export class EzsignfoldersignerassociationCreateObjectV1ResponseMPayload {
    /**
    * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
    */
    'a_pkiEzsignfoldersignerassociationID': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "a_pkiEzsignfoldersignerassociationID",
            "baseName": "a_pkiEzsignfoldersignerassociationID",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return EzsignfoldersignerassociationCreateObjectV1ResponseMPayload.attributeTypeMap;
    }
}

