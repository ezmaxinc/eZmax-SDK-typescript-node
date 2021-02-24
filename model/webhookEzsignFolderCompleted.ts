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
import { AttemptResponse } from './attemptResponse';
import { CommonWebhook } from './commonWebhook';
import { EzsignfolderResponse } from './ezsignfolderResponse';
import { WebhookEzsignFolderCompletedAllOf } from './webhookEzsignFolderCompletedAllOf';
import { WebhookResponse } from './webhookResponse';

/**
* This is the base Webhook object
*/
export class WebhookEzsignFolderCompleted {
    'objEzsignfolder': EzsignfolderResponse;
    'objWebhook': WebhookResponse;
    /**
    * An array containing details of previous attempts that were made to deliver the message. The array is empty if it\'s the first attempt.
    */
    'a_objAttempt': Array<AttemptResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objEzsignfolder",
            "baseName": "objEzsignfolder",
            "type": "EzsignfolderResponse"
        },
        {
            "name": "objWebhook",
            "baseName": "objWebhook",
            "type": "WebhookResponse"
        },
        {
            "name": "a_objAttempt",
            "baseName": "a_objAttempt",
            "type": "Array<AttemptResponse>"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEzsignFolderCompleted.attributeTypeMap;
    }
}

