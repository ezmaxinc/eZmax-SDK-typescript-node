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
* An Address Object
*/
export class AddressRequest {
    /**
    * The unique ID of the Addresstype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Real Estate Invoice| |4|Invoicing| |5|Shipping|
    */
    'fkiAddresstypeID': number;
    /**
    * The Civic number.
    */
    'sAddressCivic': string;
    /**
    * The Street Name
    */
    'sAddressStreet': string;
    /**
    * The Suite or appartment number
    */
    'sAddressSuite': string;
    /**
    * The City name
    */
    'sAddressCity': string;
    /**
    * The unique ID of the Province.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|(Canada) Alberta |2|(Canada) British Columbia| |3|(Canada) Manitoba| |3|(Canada) Manitoba| |4|(Canada) New Brunswick| |5|(Canada) Newfoundland| |6|(Canada) Northwest Territories| |7|(Canada) Nova Scotia| |8|(Canada) Nunavut| |9|(Canada) Ontario| |10|(Canada) Prince Edward Island| |11|(Canada) Quebec| |12|(Canada) Saskatchewan| |13|(Canada) Yukon| |14|(United-States) Alabama| |15|(United-States) Alaska| |16|(United-States) Arizona| |17|(United-States) Arkansas| |18|(United-States) California| |19|(United-States) Colorado| |20|(United-States) Connecticut| |21|(United-States) Delaware| |22|(United-States) District of Columbia| |23|(United-States) Florida| |24|(United-States) Georgia| |25|(United-States) Hawaii| |26|(United-States) Idaho| |27|(United-States) Illinois| |28|(United-States) Indiana| |29|(United-States) Iowa| |30|(United-States) Kansas| |31|(United-States) Kentucky| |32|(United-States) Louisiane| |33|(United-States) Maine| |34|(United-States) Maryland| |35|(United-States) Massachusetts| |36|(United-States) Michigan| |37|(United-States) Minnesota| |38|(United-States) Mississippi| |39|(United-States) Missouri| |40|(United-States) Montana| |41|(United-States) Nebraska| |42|(United-States) Nevada| |43|(United-States) New Hampshire| |44|(United-States) New Jersey| |45|(United-States) New Mexico| |46|(United-States) New York| |47|(United-States) North Carolina| |48|(United-States) North Dakota| |49|(United-States) Ohio| |50|(United-States) Oklahoma| |51|(United-States) Oregon| |52|(United-States) Pennsylvania| |53|(United-States) Rhode Island| |54|(United-States) South Carolina| |55|(United-States) South Dakota| |56|(United-States) Tennessee| |57|(United-States) Texas| |58|(United-States) Utah| |60|(United-States) Vermont| |59|(United-States) Virginia| |61|(United-States) Washington| |62|(United-States) West Virginia| |63|(United-States) Wisconsin| |64|(United-States) Wyoming|
    */
    'fkiProvinceID': number;
    /**
    * The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
    */
    'fkiCountryID': number;
    /**
    * The Postal/Zip Code  The value must be entered without spaces
    */
    'sAddressZip': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fkiAddresstypeID",
            "baseName": "fkiAddresstypeID",
            "type": "number"
        },
        {
            "name": "sAddressCivic",
            "baseName": "sAddressCivic",
            "type": "string"
        },
        {
            "name": "sAddressStreet",
            "baseName": "sAddressStreet",
            "type": "string"
        },
        {
            "name": "sAddressSuite",
            "baseName": "sAddressSuite",
            "type": "string"
        },
        {
            "name": "sAddressCity",
            "baseName": "sAddressCity",
            "type": "string"
        },
        {
            "name": "fkiProvinceID",
            "baseName": "fkiProvinceID",
            "type": "number"
        },
        {
            "name": "fkiCountryID",
            "baseName": "fkiCountryID",
            "type": "number"
        },
        {
            "name": "sAddressZip",
            "baseName": "sAddressZip",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddressRequest.attributeTypeMap;
    }
}

