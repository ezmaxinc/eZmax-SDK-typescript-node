/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.28
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CommonAudit } from './commonAudit';
import { EzsigndocumentResponse } from './ezsigndocumentResponse';
import { FieldEEzsigndocumentStep } from './fieldEEzsigndocumentStep';

/**
* An Ezsigndocument Object and children to create a complete structure
*/
export class EzsigndocumentResponseCompound {
    /**
    * The unique ID of the Ezsignfolder
    */
    'fkiEzsignfolderID': number;
    /**
    * The maximum date and time at which the document can be signed.
    */
    'dtEzsigndocumentDuedate': string;
    /**
    * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
    */
    'fkiLanguageID': number;
    /**
    * The actual file name that will be used when downloading or attaching to an email.
    */
    'sEzsigndocumentFilename': string;
    /**
    * The name of the document that will be presented to Ezsignfoldersignerassociations
    */
    'sEzsigndocumentName': string;
    /**
    * The unique ID of the Ezsigntemplate
    */
    'pkiEzsigndocumentID': number;
    'eEzsigndocumentStep': FieldEEzsigndocumentStep;
    /**
    * The date and time when the Ezsigndocument was first sent.
    */
    'dtEzsigndocumentFirstsend': string;
    /**
    * The date and time when the Ezsigndocument was sent the last time.
    */
    'dtEzsigndocumentLastsend': string;
    /**
    * The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
    */
    'iEzsigndocumentOrder': number;
    /**
    * The number of pages in the Ezsigndocument.
    */
    'iEzsigndocumentPagetotal': number;
    /**
    * The number of signatures that were signed in the document.
    */
    'iEzsigndocumentSignaturesigned': number;
    /**
    * The number of total signatures that were requested in the Ezsigndocument.
    */
    'iEzsigndocumentSignaturetotal': number;
    /**
    * MD5 Hash of the initial PDF Document before signatures were applied to it.
    */
    'sEzsigndocumentMD5initial': string;
    /**
    * MD5 Hash of the final PDF Document after all signatures were applied to it.
    */
    'sEzsigndocumentMD5signed': string;
    'objAudit': CommonAudit;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fkiEzsignfolderID",
            "baseName": "fkiEzsignfolderID",
            "type": "number"
        },
        {
            "name": "dtEzsigndocumentDuedate",
            "baseName": "dtEzsigndocumentDuedate",
            "type": "string"
        },
        {
            "name": "fkiLanguageID",
            "baseName": "fkiLanguageID",
            "type": "number"
        },
        {
            "name": "sEzsigndocumentFilename",
            "baseName": "sEzsigndocumentFilename",
            "type": "string"
        },
        {
            "name": "sEzsigndocumentName",
            "baseName": "sEzsigndocumentName",
            "type": "string"
        },
        {
            "name": "pkiEzsigndocumentID",
            "baseName": "pkiEzsigndocumentID",
            "type": "number"
        },
        {
            "name": "eEzsigndocumentStep",
            "baseName": "eEzsigndocumentStep",
            "type": "FieldEEzsigndocumentStep"
        },
        {
            "name": "dtEzsigndocumentFirstsend",
            "baseName": "dtEzsigndocumentFirstsend",
            "type": "string"
        },
        {
            "name": "dtEzsigndocumentLastsend",
            "baseName": "dtEzsigndocumentLastsend",
            "type": "string"
        },
        {
            "name": "iEzsigndocumentOrder",
            "baseName": "iEzsigndocumentOrder",
            "type": "number"
        },
        {
            "name": "iEzsigndocumentPagetotal",
            "baseName": "iEzsigndocumentPagetotal",
            "type": "number"
        },
        {
            "name": "iEzsigndocumentSignaturesigned",
            "baseName": "iEzsigndocumentSignaturesigned",
            "type": "number"
        },
        {
            "name": "iEzsigndocumentSignaturetotal",
            "baseName": "iEzsigndocumentSignaturetotal",
            "type": "number"
        },
        {
            "name": "sEzsigndocumentMD5initial",
            "baseName": "sEzsigndocumentMD5initial",
            "type": "string"
        },
        {
            "name": "sEzsigndocumentMD5signed",
            "baseName": "sEzsigndocumentMD5signed",
            "type": "string"
        },
        {
            "name": "objAudit",
            "baseName": "objAudit",
            "type": "CommonAudit"
        }    ];

    static getAttributeTypeMap() {
        return EzsigndocumentResponseCompound.attributeTypeMap;
    }
}

