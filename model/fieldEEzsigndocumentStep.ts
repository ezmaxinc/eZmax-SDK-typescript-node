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
* The signature step of the Ezsigndocument.
*/
export enum FieldEEzsigndocumentStep {
    Unsent = <any> 'Unsent',
    Unsigned = <any> 'Unsigned',
    PartiallySigned = <any> 'PartiallySigned',
    Completed = <any> 'Completed'
}
