/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { EzsignfoldersignerassociationRequest } from './ezsignfoldersignerassociationRequest';
import { EzsignfoldersignerassociationRequestCompound } from './ezsignfoldersignerassociationRequestCompound';

/**
* Request for the /1/object/ezsignfoldersignerassociation/createObject API Request
*/
export class EzsignfoldersignerassociationCreateObjectV1Request {
    'objEzsignfoldersignerassociation'?: EzsignfoldersignerassociationRequest;
    'objEzsignfoldersignerassociationCompound'?: EzsignfoldersignerassociationRequestCompound;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objEzsignfoldersignerassociation",
            "baseName": "objEzsignfoldersignerassociation",
            "type": "EzsignfoldersignerassociationRequest"
        },
        {
            "name": "objEzsignfoldersignerassociationCompound",
            "baseName": "objEzsignfoldersignerassociationCompound",
            "type": "EzsignfoldersignerassociationRequestCompound"
        }    ];

    static getAttributeTypeMap() {
        return EzsignfoldersignerassociationCreateObjectV1Request.attributeTypeMap;
    }
}

