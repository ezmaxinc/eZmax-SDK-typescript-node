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
import { AddressRequest } from './addressRequest';
import { ContactRequestCompound } from './contactRequestCompound';
import { FranchisereferalincomeRequest } from './franchisereferalincomeRequest';

/**
* A Franchisereferalincome Object and children to create a complete structure
*/
export class FranchisereferalincomeRequestCompound {
    'objAddress'?: AddressRequest;
    'a_objContact': Array<ContactRequestCompound>;
    /**
    * The unique ID of the Franchisebroker
    */
    'fkiFranchisebrokerID': number;
    /**
    * The unique ID of the Franchisereferalincomeprogram
    */
    'fkiFranchisereferalincomeprogramID': number;
    /**
    * The unique ID of the Period
    */
    'fkiPeriodID': number;
    /**
    * The loan amount
    */
    'dFranchisereferalincomeLoan': string;
    /**
    * The amount that will be given to the franchise
    */
    'dFranchisereferalincomeFranchiseamount': string;
    /**
    * The amount that will be kept by the franchisor
    */
    'dFranchisereferalincomeFranchisoramount': string;
    /**
    * The amount that will be given to the agent
    */
    'dFranchisereferalincomeAgentamount': string;
    /**
    * The date the amounts were disbursed
    */
    'dtFranchisereferalincomeDisbursed': string;
    /**
    * A comment about the transaction
    */
    'tFranchisereferalincomeComment': string;
    /**
    * The unique ID of the Franchisereoffice
    */
    'fkiFranchiseofficeID': number;
    'sFranchisereferalincomeRemoteid': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objAddress",
            "baseName": "objAddress",
            "type": "AddressRequest"
        },
        {
            "name": "a_objContact",
            "baseName": "a_objContact",
            "type": "Array<ContactRequestCompound>"
        },
        {
            "name": "fkiFranchisebrokerID",
            "baseName": "fkiFranchisebrokerID",
            "type": "number"
        },
        {
            "name": "fkiFranchisereferalincomeprogramID",
            "baseName": "fkiFranchisereferalincomeprogramID",
            "type": "number"
        },
        {
            "name": "fkiPeriodID",
            "baseName": "fkiPeriodID",
            "type": "number"
        },
        {
            "name": "dFranchisereferalincomeLoan",
            "baseName": "dFranchisereferalincomeLoan",
            "type": "string"
        },
        {
            "name": "dFranchisereferalincomeFranchiseamount",
            "baseName": "dFranchisereferalincomeFranchiseamount",
            "type": "string"
        },
        {
            "name": "dFranchisereferalincomeFranchisoramount",
            "baseName": "dFranchisereferalincomeFranchisoramount",
            "type": "string"
        },
        {
            "name": "dFranchisereferalincomeAgentamount",
            "baseName": "dFranchisereferalincomeAgentamount",
            "type": "string"
        },
        {
            "name": "dtFranchisereferalincomeDisbursed",
            "baseName": "dtFranchisereferalincomeDisbursed",
            "type": "string"
        },
        {
            "name": "tFranchisereferalincomeComment",
            "baseName": "tFranchisereferalincomeComment",
            "type": "string"
        },
        {
            "name": "fkiFranchiseofficeID",
            "baseName": "fkiFranchiseofficeID",
            "type": "number"
        },
        {
            "name": "sFranchisereferalincomeRemoteid",
            "baseName": "sFranchisereferalincomeRemoteid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FranchisereferalincomeRequestCompound.attributeTypeMap;
    }
}

