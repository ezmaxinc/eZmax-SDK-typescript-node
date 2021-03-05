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
* The user type of the User.
*/
export enum FieldEUserType {
    AgentBroker = <any> 'AgentBroker',
    Assistant = <any> 'Assistant',
    Attendance = <any> 'Attendance',
    Customer = <any> 'Customer',
    Employee = <any> 'Employee',
    Ezcom = <any> 'Ezcom',
    EzsignSigner = <any> 'EzsignSigner',
    EzsignUser = <any> 'EzsignUser',
    FranchiseCustomerServer = <any> 'FranchiseCustomerServer',
    Normal = <any> 'Normal',
    RewardAdministration = <any> 'RewardAdministration',
    RewardMember = <any> 'RewardMember',
    RewardRepresentative = <any> 'RewardRepresentative',
    RewardCustomer = <any> 'RewardCustomer',
    RewardDistributorServer = <any> 'RewardDistributorServer',
    Supplier = <any> 'Supplier',
    VetrxCustomer = <any> 'VetrxCustomer',
    Vetrxcustomergroup = <any> 'Vetrxcustomergroup',
    VetrxCustomerServer = <any> 'VetrxCustomerServer',
    VetrxManufacturer = <any> 'VetrxManufacturer',
    VetrxVendor = <any> 'VetrxVendor'
}
