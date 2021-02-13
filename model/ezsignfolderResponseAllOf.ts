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
import { CommonAudit } from './commonAudit';
import { FieldEEzsignfolderSendreminderfrequency } from './fieldEEzsignfolderSendreminderfrequency';
import { FieldEEzsignfolderStep } from './fieldEEzsignfolderStep';

export class EzsignfolderResponseAllOf {
    /**
    * The unique ID of the Ezsignfoldertype.    This value can be queried by the API and is also visible in the admin interface.    There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
    */
    'fkiEzsignfoldertypeID': number;
    /**
    * The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server\'s time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server\'s time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
    */
    'fkiEzsigntsarequirementID': number;
    /**
    * The description of the Ezsign Folder
    */
    'sEzsignfolderDescription': string;
    /**
    * Somes extra notes about the eZsign Folder
    */
    'tEzsignfolderNote': string;
    'eEzsignfolderSendreminderfrequency': FieldEEzsignfolderSendreminderfrequency;
    /**
    * The unique ID of the Ezsignfolder
    */
    'pkiEzsignfolderID': number;
    /**
    * The date and time at which the Ezsign folder was sent the last time.
    */
    'dtEzsignfolderSentdate': string;
    'eEzsignfolderStep': FieldEEzsignfolderStep;
    /**
    * The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
    */
    'dtEzsignfolderClose': string;
    'objAudit': CommonAudit;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fkiEzsignfoldertypeID",
            "baseName": "fkiEzsignfoldertypeID",
            "type": "number"
        },
        {
            "name": "fkiEzsigntsarequirementID",
            "baseName": "fkiEzsigntsarequirementID",
            "type": "number"
        },
        {
            "name": "sEzsignfolderDescription",
            "baseName": "sEzsignfolderDescription",
            "type": "string"
        },
        {
            "name": "tEzsignfolderNote",
            "baseName": "tEzsignfolderNote",
            "type": "string"
        },
        {
            "name": "eEzsignfolderSendreminderfrequency",
            "baseName": "eEzsignfolderSendreminderfrequency",
            "type": "FieldEEzsignfolderSendreminderfrequency"
        },
        {
            "name": "pkiEzsignfolderID",
            "baseName": "pkiEzsignfolderID",
            "type": "number"
        },
        {
            "name": "dtEzsignfolderSentdate",
            "baseName": "dtEzsignfolderSentdate",
            "type": "string"
        },
        {
            "name": "eEzsignfolderStep",
            "baseName": "eEzsignfolderStep",
            "type": "FieldEEzsignfolderStep"
        },
        {
            "name": "dtEzsignfolderClose",
            "baseName": "dtEzsignfolderClose",
            "type": "string"
        },
        {
            "name": "objAudit",
            "baseName": "objAudit",
            "type": "CommonAudit"
        }    ];

    static getAttributeTypeMap() {
        return EzsignfolderResponseAllOf.attributeTypeMap;
    }
}

