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
* An Ezsignfoldersignerassociation Object
*/
export class EzsignfoldersignerassociationRequest {
    /**
    * A reference to a valid User.  This is only used if the signatory will be a user from the system.
    */
    'fkiUserID'?: number;
    /**
    * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
    */
    'fkiEzsignfolderID': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fkiUserID",
            "baseName": "fkiUserID",
            "type": "number"
        },
        {
            "name": "fkiEzsignfolderID",
            "baseName": "fkiEzsignfolderID",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EzsignfoldersignerassociationRequest.attributeTypeMap;
    }
}

