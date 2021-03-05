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
import { EzsignsignatureRequest } from './ezsignsignatureRequest';
import { EzsignsignatureRequestCompound } from './ezsignsignatureRequestCompound';

/**
* Request for the /1/object/ezsignsignature/createObject API Request
*/
export class EzsignsignatureCreateObjectV1Request {
    'objEzsignsignature'?: EzsignsignatureRequest;
    'objEzsignsignatureCompound'?: EzsignsignatureRequestCompound;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objEzsignsignature",
            "baseName": "objEzsignsignature",
            "type": "EzsignsignatureRequest"
        },
        {
            "name": "objEzsignsignatureCompound",
            "baseName": "objEzsignsignatureCompound",
            "type": "EzsignsignatureRequestCompound"
        }    ];

    static getAttributeTypeMap() {
        return EzsignsignatureCreateObjectV1Request.attributeTypeMap;
    }
}

