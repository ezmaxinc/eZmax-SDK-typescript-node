import localVarRequest from 'request';

export * from './activesessionGetCurrentV1Response';
export * from './activesessionGetCurrentV1ResponseMPayload';
export * from './addressRequest';
export * from './apikeyCreateObjectV1Request';
export * from './apikeyCreateObjectV1Response';
export * from './apikeyCreateObjectV1ResponseMPayload';
export * from './apikeyRequest';
export * from './apikeyRequestCompound';
export * from './apikeyResponse';
export * from './attemptResponse';
export * from './commonAudit';
export * from './commonGetAutocompleteV1Response';
export * from './commonGetAutocompleteV1ResponseMPayload';
export * from './commonResponse';
export * from './commonResponseError';
export * from './commonResponseObjDebug';
export * from './commonResponseObjDebugPayload';
export * from './commonResponseObjSQLQuery';
export * from './commonWebhook';
export * from './contactRequest';
export * from './contactRequestCompound';
export * from './contactRequestCompoundAllOf';
export * from './contactinformationsRequest';
export * from './contactinformationsRequestCompound';
export * from './emailRequest';
export * from './ezsigndocumentApplyEzsigntemplateV1Request';
export * from './ezsigndocumentApplyEzsigntemplateV1Response';
export * from './ezsigndocumentCreateObjectV1Request';
export * from './ezsigndocumentCreateObjectV1Response';
export * from './ezsigndocumentCreateObjectV1ResponseMPayload';
export * from './ezsigndocumentDeleteObjectV1Response';
export * from './ezsigndocumentGetDownloadUrlV1Response';
export * from './ezsigndocumentGetDownloadUrlV1ResponseMPayload';
export * from './ezsigndocumentGetObjectV1Response';
export * from './ezsigndocumentGetObjectV1ResponseMPayload';
export * from './ezsigndocumentRequest';
export * from './ezsigndocumentRequestCompound';
export * from './ezsigndocumentResponse';
export * from './ezsigndocumentResponseAllOf';
export * from './ezsigndocumentResponseCompound';
export * from './ezsignfolderCreateObjectV1Request';
export * from './ezsignfolderCreateObjectV1Response';
export * from './ezsignfolderCreateObjectV1ResponseMPayload';
export * from './ezsignfolderDeleteObjectV1Response';
export * from './ezsignfolderGetObjectV1Response';
export * from './ezsignfolderGetObjectV1ResponseMPayload';
export * from './ezsignfolderRequest';
export * from './ezsignfolderRequestCompound';
export * from './ezsignfolderResponse';
export * from './ezsignfolderResponseAllOf';
export * from './ezsignfolderResponseCompound';
export * from './ezsignfolderSendV1Request';
export * from './ezsignfolderSendV1Response';
export * from './ezsignfoldersignerassociationCreateObjectV1Request';
export * from './ezsignfoldersignerassociationCreateObjectV1Response';
export * from './ezsignfoldersignerassociationCreateObjectV1ResponseMPayload';
export * from './ezsignfoldersignerassociationDeleteObjectV1Response';
export * from './ezsignfoldersignerassociationGetInPersonLoginUrlV1Response';
export * from './ezsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload';
export * from './ezsignfoldersignerassociationGetObjectV1Response';
export * from './ezsignfoldersignerassociationRequest';
export * from './ezsignfoldersignerassociationRequestCompound';
export * from './ezsignsignatureCreateObjectV1Request';
export * from './ezsignsignatureCreateObjectV1Response';
export * from './ezsignsignatureCreateObjectV1ResponseMPayload';
export * from './ezsignsignatureDeleteObjectV1Response';
export * from './ezsignsignatureGetObjectV1Response';
export * from './ezsignsignatureRequest';
export * from './ezsignsignatureRequestCompound';
export * from './ezsignsignerRequest';
export * from './ezsignsignerRequestCompound';
export * from './ezsignsignerRequestCompoundContact';
export * from './fieldEEzsigndocumentStep';
export * from './fieldEEzsignfolderSendreminderfrequency';
export * from './fieldEEzsignfolderStep';
export * from './fieldEPhoneType';
export * from './fieldEUserType';
export * from './fieldEUserTypeSSPR';
export * from './franchisereferalincomeCreateObjectV1Request';
export * from './franchisereferalincomeCreateObjectV1Response';
export * from './franchisereferalincomeCreateObjectV1ResponseMPayload';
export * from './franchisereferalincomeRequest';
export * from './franchisereferalincomeRequestCompound';
export * from './globalCustomerGetEndpointV1Response';
export * from './multilingualApikeyDescription';
export * from './phoneRequest';
export * from './ssprResetPasswordRequestV1Request';
export * from './ssprResetPasswordV1Request';
export * from './ssprSendUsernamesV1Request';
export * from './ssprUnlockAccountRequestV1Request';
export * from './ssprUnlockAccountV1Request';
export * from './ssprValidateTokenV1Request';
export * from './uNUSEDEzsigndocumentEditObjectV1Request';
export * from './uNUSEDEzsigndocumentEditObjectV1Response';
export * from './uNUSEDEzsignfolderEditObjectV1Request';
export * from './uNUSEDEzsignfolderEditObjectV1Response';
export * from './uNUSEDEzsignfoldersignerassociationEditObjectV1Request';
export * from './uNUSEDEzsignfoldersignerassociationEditObjectV1Response';
export * from './uNUSEDEzsignsignatureEditObjectV1Request';
export * from './uNUSEDEzsignsignatureEditObjectV1Response';
export * from './userCreateEzsignuserV1Request';
export * from './userCreateEzsignuserV1Response';
export * from './userCreateEzsignuserV1ResponseMPayload';
export * from './userResponse';
export * from './userResponseAllOf';
export * from './webhookEzsignDocumentCompleted';
export * from './webhookEzsignDocumentCompletedAllOf';
export * from './webhookEzsignFolderCompleted';
export * from './webhookEzsignFolderCompletedAllOf';
export * from './webhookResponse';
export * from './webhookUserUserCreated';
export * from './webhookUserUserCreatedAllOf';
export * from './websiteRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ActivesessionGetCurrentV1Response } from './activesessionGetCurrentV1Response';
import { ActivesessionGetCurrentV1ResponseMPayload } from './activesessionGetCurrentV1ResponseMPayload';
import { AddressRequest } from './addressRequest';
import { ApikeyCreateObjectV1Request } from './apikeyCreateObjectV1Request';
import { ApikeyCreateObjectV1Response } from './apikeyCreateObjectV1Response';
import { ApikeyCreateObjectV1ResponseMPayload } from './apikeyCreateObjectV1ResponseMPayload';
import { ApikeyRequest } from './apikeyRequest';
import { ApikeyRequestCompound } from './apikeyRequestCompound';
import { ApikeyResponse } from './apikeyResponse';
import { AttemptResponse } from './attemptResponse';
import { CommonAudit } from './commonAudit';
import { CommonGetAutocompleteV1Response } from './commonGetAutocompleteV1Response';
import { CommonGetAutocompleteV1ResponseMPayload } from './commonGetAutocompleteV1ResponseMPayload';
import { CommonResponse } from './commonResponse';
import { CommonResponseError } from './commonResponseError';
import { CommonResponseObjDebug } from './commonResponseObjDebug';
import { CommonResponseObjDebugPayload } from './commonResponseObjDebugPayload';
import { CommonResponseObjSQLQuery } from './commonResponseObjSQLQuery';
import { CommonWebhook } from './commonWebhook';
import { ContactRequest } from './contactRequest';
import { ContactRequestCompound } from './contactRequestCompound';
import { ContactRequestCompoundAllOf } from './contactRequestCompoundAllOf';
import { ContactinformationsRequest } from './contactinformationsRequest';
import { ContactinformationsRequestCompound } from './contactinformationsRequestCompound';
import { EmailRequest } from './emailRequest';
import { EzsigndocumentApplyEzsigntemplateV1Request } from './ezsigndocumentApplyEzsigntemplateV1Request';
import { EzsigndocumentApplyEzsigntemplateV1Response } from './ezsigndocumentApplyEzsigntemplateV1Response';
import { EzsigndocumentCreateObjectV1Request } from './ezsigndocumentCreateObjectV1Request';
import { EzsigndocumentCreateObjectV1Response } from './ezsigndocumentCreateObjectV1Response';
import { EzsigndocumentCreateObjectV1ResponseMPayload } from './ezsigndocumentCreateObjectV1ResponseMPayload';
import { EzsigndocumentDeleteObjectV1Response } from './ezsigndocumentDeleteObjectV1Response';
import { EzsigndocumentGetDownloadUrlV1Response } from './ezsigndocumentGetDownloadUrlV1Response';
import { EzsigndocumentGetDownloadUrlV1ResponseMPayload } from './ezsigndocumentGetDownloadUrlV1ResponseMPayload';
import { EzsigndocumentGetObjectV1Response } from './ezsigndocumentGetObjectV1Response';
import { EzsigndocumentGetObjectV1ResponseMPayload } from './ezsigndocumentGetObjectV1ResponseMPayload';
import { EzsigndocumentRequest } from './ezsigndocumentRequest';
import { EzsigndocumentRequestCompound } from './ezsigndocumentRequestCompound';
import { EzsigndocumentResponse } from './ezsigndocumentResponse';
import { EzsigndocumentResponseAllOf } from './ezsigndocumentResponseAllOf';
import { EzsigndocumentResponseCompound } from './ezsigndocumentResponseCompound';
import { EzsignfolderCreateObjectV1Request } from './ezsignfolderCreateObjectV1Request';
import { EzsignfolderCreateObjectV1Response } from './ezsignfolderCreateObjectV1Response';
import { EzsignfolderCreateObjectV1ResponseMPayload } from './ezsignfolderCreateObjectV1ResponseMPayload';
import { EzsignfolderDeleteObjectV1Response } from './ezsignfolderDeleteObjectV1Response';
import { EzsignfolderGetObjectV1Response } from './ezsignfolderGetObjectV1Response';
import { EzsignfolderGetObjectV1ResponseMPayload } from './ezsignfolderGetObjectV1ResponseMPayload';
import { EzsignfolderRequest } from './ezsignfolderRequest';
import { EzsignfolderRequestCompound } from './ezsignfolderRequestCompound';
import { EzsignfolderResponse } from './ezsignfolderResponse';
import { EzsignfolderResponseAllOf } from './ezsignfolderResponseAllOf';
import { EzsignfolderResponseCompound } from './ezsignfolderResponseCompound';
import { EzsignfolderSendV1Request } from './ezsignfolderSendV1Request';
import { EzsignfolderSendV1Response } from './ezsignfolderSendV1Response';
import { EzsignfoldersignerassociationCreateObjectV1Request } from './ezsignfoldersignerassociationCreateObjectV1Request';
import { EzsignfoldersignerassociationCreateObjectV1Response } from './ezsignfoldersignerassociationCreateObjectV1Response';
import { EzsignfoldersignerassociationCreateObjectV1ResponseMPayload } from './ezsignfoldersignerassociationCreateObjectV1ResponseMPayload';
import { EzsignfoldersignerassociationDeleteObjectV1Response } from './ezsignfoldersignerassociationDeleteObjectV1Response';
import { EzsignfoldersignerassociationGetInPersonLoginUrlV1Response } from './ezsignfoldersignerassociationGetInPersonLoginUrlV1Response';
import { EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload } from './ezsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload';
import { EzsignfoldersignerassociationGetObjectV1Response } from './ezsignfoldersignerassociationGetObjectV1Response';
import { EzsignfoldersignerassociationRequest } from './ezsignfoldersignerassociationRequest';
import { EzsignfoldersignerassociationRequestCompound } from './ezsignfoldersignerassociationRequestCompound';
import { EzsignsignatureCreateObjectV1Request } from './ezsignsignatureCreateObjectV1Request';
import { EzsignsignatureCreateObjectV1Response } from './ezsignsignatureCreateObjectV1Response';
import { EzsignsignatureCreateObjectV1ResponseMPayload } from './ezsignsignatureCreateObjectV1ResponseMPayload';
import { EzsignsignatureDeleteObjectV1Response } from './ezsignsignatureDeleteObjectV1Response';
import { EzsignsignatureGetObjectV1Response } from './ezsignsignatureGetObjectV1Response';
import { EzsignsignatureRequest } from './ezsignsignatureRequest';
import { EzsignsignatureRequestCompound } from './ezsignsignatureRequestCompound';
import { EzsignsignerRequest } from './ezsignsignerRequest';
import { EzsignsignerRequestCompound } from './ezsignsignerRequestCompound';
import { EzsignsignerRequestCompoundContact } from './ezsignsignerRequestCompoundContact';
import { FieldEEzsigndocumentStep } from './fieldEEzsigndocumentStep';
import { FieldEEzsignfolderSendreminderfrequency } from './fieldEEzsignfolderSendreminderfrequency';
import { FieldEEzsignfolderStep } from './fieldEEzsignfolderStep';
import { FieldEPhoneType } from './fieldEPhoneType';
import { FieldEUserType } from './fieldEUserType';
import { FieldEUserTypeSSPR } from './fieldEUserTypeSSPR';
import { FranchisereferalincomeCreateObjectV1Request } from './franchisereferalincomeCreateObjectV1Request';
import { FranchisereferalincomeCreateObjectV1Response } from './franchisereferalincomeCreateObjectV1Response';
import { FranchisereferalincomeCreateObjectV1ResponseMPayload } from './franchisereferalincomeCreateObjectV1ResponseMPayload';
import { FranchisereferalincomeRequest } from './franchisereferalincomeRequest';
import { FranchisereferalincomeRequestCompound } from './franchisereferalincomeRequestCompound';
import { GlobalCustomerGetEndpointV1Response } from './globalCustomerGetEndpointV1Response';
import { MultilingualApikeyDescription } from './multilingualApikeyDescription';
import { PhoneRequest } from './phoneRequest';
import { SsprResetPasswordRequestV1Request } from './ssprResetPasswordRequestV1Request';
import { SsprResetPasswordV1Request } from './ssprResetPasswordV1Request';
import { SsprSendUsernamesV1Request } from './ssprSendUsernamesV1Request';
import { SsprUnlockAccountRequestV1Request } from './ssprUnlockAccountRequestV1Request';
import { SsprUnlockAccountV1Request } from './ssprUnlockAccountV1Request';
import { SsprValidateTokenV1Request } from './ssprValidateTokenV1Request';
import { UNUSEDEzsigndocumentEditObjectV1Request } from './uNUSEDEzsigndocumentEditObjectV1Request';
import { UNUSEDEzsigndocumentEditObjectV1Response } from './uNUSEDEzsigndocumentEditObjectV1Response';
import { UNUSEDEzsignfolderEditObjectV1Request } from './uNUSEDEzsignfolderEditObjectV1Request';
import { UNUSEDEzsignfolderEditObjectV1Response } from './uNUSEDEzsignfolderEditObjectV1Response';
import { UNUSEDEzsignfoldersignerassociationEditObjectV1Request } from './uNUSEDEzsignfoldersignerassociationEditObjectV1Request';
import { UNUSEDEzsignfoldersignerassociationEditObjectV1Response } from './uNUSEDEzsignfoldersignerassociationEditObjectV1Response';
import { UNUSEDEzsignsignatureEditObjectV1Request } from './uNUSEDEzsignsignatureEditObjectV1Request';
import { UNUSEDEzsignsignatureEditObjectV1Response } from './uNUSEDEzsignsignatureEditObjectV1Response';
import { UserCreateEzsignuserV1Request } from './userCreateEzsignuserV1Request';
import { UserCreateEzsignuserV1Response } from './userCreateEzsignuserV1Response';
import { UserCreateEzsignuserV1ResponseMPayload } from './userCreateEzsignuserV1ResponseMPayload';
import { UserResponse } from './userResponse';
import { UserResponseAllOf } from './userResponseAllOf';
import { WebhookEzsignDocumentCompleted } from './webhookEzsignDocumentCompleted';
import { WebhookEzsignDocumentCompletedAllOf } from './webhookEzsignDocumentCompletedAllOf';
import { WebhookEzsignFolderCompleted } from './webhookEzsignFolderCompleted';
import { WebhookEzsignFolderCompletedAllOf } from './webhookEzsignFolderCompletedAllOf';
import { WebhookResponse } from './webhookResponse';
import { WebhookUserUserCreated } from './webhookUserUserCreated';
import { WebhookUserUserCreatedAllOf } from './webhookUserUserCreatedAllOf';
import { WebsiteRequest } from './websiteRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ActivesessionGetCurrentV1ResponseMPayload.EActivesessionSessiontypeEnum": ActivesessionGetCurrentV1ResponseMPayload.EActivesessionSessiontypeEnum,
        "EzsigndocumentRequest.EEzsigndocumentSourceEnum": EzsigndocumentRequest.EEzsigndocumentSourceEnum,
        "EzsigndocumentRequest.EEzsigndocumentFormatEnum": EzsigndocumentRequest.EEzsigndocumentFormatEnum,
        "EzsigndocumentRequestCompound.EEzsigndocumentSourceEnum": EzsigndocumentRequestCompound.EEzsigndocumentSourceEnum,
        "EzsigndocumentRequestCompound.EEzsigndocumentFormatEnum": EzsigndocumentRequestCompound.EEzsigndocumentFormatEnum,
        "EzsignsignatureRequest.EEzsignsignatureTypeEnum": EzsignsignatureRequest.EEzsignsignatureTypeEnum,
        "EzsignsignatureRequestCompound.EEzsignsignatureTypeEnum": EzsignsignatureRequestCompound.EEzsignsignatureTypeEnum,
        "EzsignsignerRequest.EEzsignsignerLogintypeEnum": EzsignsignerRequest.EEzsignsignerLogintypeEnum,
        "EzsignsignerRequestCompound.EEzsignsignerLogintypeEnum": EzsignsignerRequestCompound.EEzsignsignerLogintypeEnum,
        "FieldEEzsigndocumentStep": FieldEEzsigndocumentStep,
        "FieldEEzsignfolderSendreminderfrequency": FieldEEzsignfolderSendreminderfrequency,
        "FieldEEzsignfolderStep": FieldEEzsignfolderStep,
        "FieldEPhoneType": FieldEPhoneType,
        "FieldEUserType": FieldEUserType,
        "FieldEUserTypeSSPR": FieldEUserTypeSSPR,
        "WebhookResponse.EWebhookModuleEnum": WebhookResponse.EWebhookModuleEnum,
        "WebhookResponse.EWebhookEzsigneventEnum": WebhookResponse.EWebhookEzsigneventEnum,
        "WebhookResponse.EWebhookManagementeventEnum": WebhookResponse.EWebhookManagementeventEnum,
}

let typeMap: {[index: string]: any} = {
    "ActivesessionGetCurrentV1Response": ActivesessionGetCurrentV1Response,
    "ActivesessionGetCurrentV1ResponseMPayload": ActivesessionGetCurrentV1ResponseMPayload,
    "AddressRequest": AddressRequest,
    "ApikeyCreateObjectV1Request": ApikeyCreateObjectV1Request,
    "ApikeyCreateObjectV1Response": ApikeyCreateObjectV1Response,
    "ApikeyCreateObjectV1ResponseMPayload": ApikeyCreateObjectV1ResponseMPayload,
    "ApikeyRequest": ApikeyRequest,
    "ApikeyRequestCompound": ApikeyRequestCompound,
    "ApikeyResponse": ApikeyResponse,
    "AttemptResponse": AttemptResponse,
    "CommonAudit": CommonAudit,
    "CommonGetAutocompleteV1Response": CommonGetAutocompleteV1Response,
    "CommonGetAutocompleteV1ResponseMPayload": CommonGetAutocompleteV1ResponseMPayload,
    "CommonResponse": CommonResponse,
    "CommonResponseError": CommonResponseError,
    "CommonResponseObjDebug": CommonResponseObjDebug,
    "CommonResponseObjDebugPayload": CommonResponseObjDebugPayload,
    "CommonResponseObjSQLQuery": CommonResponseObjSQLQuery,
    "CommonWebhook": CommonWebhook,
    "ContactRequest": ContactRequest,
    "ContactRequestCompound": ContactRequestCompound,
    "ContactRequestCompoundAllOf": ContactRequestCompoundAllOf,
    "ContactinformationsRequest": ContactinformationsRequest,
    "ContactinformationsRequestCompound": ContactinformationsRequestCompound,
    "EmailRequest": EmailRequest,
    "EzsigndocumentApplyEzsigntemplateV1Request": EzsigndocumentApplyEzsigntemplateV1Request,
    "EzsigndocumentApplyEzsigntemplateV1Response": EzsigndocumentApplyEzsigntemplateV1Response,
    "EzsigndocumentCreateObjectV1Request": EzsigndocumentCreateObjectV1Request,
    "EzsigndocumentCreateObjectV1Response": EzsigndocumentCreateObjectV1Response,
    "EzsigndocumentCreateObjectV1ResponseMPayload": EzsigndocumentCreateObjectV1ResponseMPayload,
    "EzsigndocumentDeleteObjectV1Response": EzsigndocumentDeleteObjectV1Response,
    "EzsigndocumentGetDownloadUrlV1Response": EzsigndocumentGetDownloadUrlV1Response,
    "EzsigndocumentGetDownloadUrlV1ResponseMPayload": EzsigndocumentGetDownloadUrlV1ResponseMPayload,
    "EzsigndocumentGetObjectV1Response": EzsigndocumentGetObjectV1Response,
    "EzsigndocumentGetObjectV1ResponseMPayload": EzsigndocumentGetObjectV1ResponseMPayload,
    "EzsigndocumentRequest": EzsigndocumentRequest,
    "EzsigndocumentRequestCompound": EzsigndocumentRequestCompound,
    "EzsigndocumentResponse": EzsigndocumentResponse,
    "EzsigndocumentResponseAllOf": EzsigndocumentResponseAllOf,
    "EzsigndocumentResponseCompound": EzsigndocumentResponseCompound,
    "EzsignfolderCreateObjectV1Request": EzsignfolderCreateObjectV1Request,
    "EzsignfolderCreateObjectV1Response": EzsignfolderCreateObjectV1Response,
    "EzsignfolderCreateObjectV1ResponseMPayload": EzsignfolderCreateObjectV1ResponseMPayload,
    "EzsignfolderDeleteObjectV1Response": EzsignfolderDeleteObjectV1Response,
    "EzsignfolderGetObjectV1Response": EzsignfolderGetObjectV1Response,
    "EzsignfolderGetObjectV1ResponseMPayload": EzsignfolderGetObjectV1ResponseMPayload,
    "EzsignfolderRequest": EzsignfolderRequest,
    "EzsignfolderRequestCompound": EzsignfolderRequestCompound,
    "EzsignfolderResponse": EzsignfolderResponse,
    "EzsignfolderResponseAllOf": EzsignfolderResponseAllOf,
    "EzsignfolderResponseCompound": EzsignfolderResponseCompound,
    "EzsignfolderSendV1Request": EzsignfolderSendV1Request,
    "EzsignfolderSendV1Response": EzsignfolderSendV1Response,
    "EzsignfoldersignerassociationCreateObjectV1Request": EzsignfoldersignerassociationCreateObjectV1Request,
    "EzsignfoldersignerassociationCreateObjectV1Response": EzsignfoldersignerassociationCreateObjectV1Response,
    "EzsignfoldersignerassociationCreateObjectV1ResponseMPayload": EzsignfoldersignerassociationCreateObjectV1ResponseMPayload,
    "EzsignfoldersignerassociationDeleteObjectV1Response": EzsignfoldersignerassociationDeleteObjectV1Response,
    "EzsignfoldersignerassociationGetInPersonLoginUrlV1Response": EzsignfoldersignerassociationGetInPersonLoginUrlV1Response,
    "EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload": EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload,
    "EzsignfoldersignerassociationGetObjectV1Response": EzsignfoldersignerassociationGetObjectV1Response,
    "EzsignfoldersignerassociationRequest": EzsignfoldersignerassociationRequest,
    "EzsignfoldersignerassociationRequestCompound": EzsignfoldersignerassociationRequestCompound,
    "EzsignsignatureCreateObjectV1Request": EzsignsignatureCreateObjectV1Request,
    "EzsignsignatureCreateObjectV1Response": EzsignsignatureCreateObjectV1Response,
    "EzsignsignatureCreateObjectV1ResponseMPayload": EzsignsignatureCreateObjectV1ResponseMPayload,
    "EzsignsignatureDeleteObjectV1Response": EzsignsignatureDeleteObjectV1Response,
    "EzsignsignatureGetObjectV1Response": EzsignsignatureGetObjectV1Response,
    "EzsignsignatureRequest": EzsignsignatureRequest,
    "EzsignsignatureRequestCompound": EzsignsignatureRequestCompound,
    "EzsignsignerRequest": EzsignsignerRequest,
    "EzsignsignerRequestCompound": EzsignsignerRequestCompound,
    "EzsignsignerRequestCompoundContact": EzsignsignerRequestCompoundContact,
    "FranchisereferalincomeCreateObjectV1Request": FranchisereferalincomeCreateObjectV1Request,
    "FranchisereferalincomeCreateObjectV1Response": FranchisereferalincomeCreateObjectV1Response,
    "FranchisereferalincomeCreateObjectV1ResponseMPayload": FranchisereferalincomeCreateObjectV1ResponseMPayload,
    "FranchisereferalincomeRequest": FranchisereferalincomeRequest,
    "FranchisereferalincomeRequestCompound": FranchisereferalincomeRequestCompound,
    "GlobalCustomerGetEndpointV1Response": GlobalCustomerGetEndpointV1Response,
    "MultilingualApikeyDescription": MultilingualApikeyDescription,
    "PhoneRequest": PhoneRequest,
    "SsprResetPasswordRequestV1Request": SsprResetPasswordRequestV1Request,
    "SsprResetPasswordV1Request": SsprResetPasswordV1Request,
    "SsprSendUsernamesV1Request": SsprSendUsernamesV1Request,
    "SsprUnlockAccountRequestV1Request": SsprUnlockAccountRequestV1Request,
    "SsprUnlockAccountV1Request": SsprUnlockAccountV1Request,
    "SsprValidateTokenV1Request": SsprValidateTokenV1Request,
    "UNUSEDEzsigndocumentEditObjectV1Request": UNUSEDEzsigndocumentEditObjectV1Request,
    "UNUSEDEzsigndocumentEditObjectV1Response": UNUSEDEzsigndocumentEditObjectV1Response,
    "UNUSEDEzsignfolderEditObjectV1Request": UNUSEDEzsignfolderEditObjectV1Request,
    "UNUSEDEzsignfolderEditObjectV1Response": UNUSEDEzsignfolderEditObjectV1Response,
    "UNUSEDEzsignfoldersignerassociationEditObjectV1Request": UNUSEDEzsignfoldersignerassociationEditObjectV1Request,
    "UNUSEDEzsignfoldersignerassociationEditObjectV1Response": UNUSEDEzsignfoldersignerassociationEditObjectV1Response,
    "UNUSEDEzsignsignatureEditObjectV1Request": UNUSEDEzsignsignatureEditObjectV1Request,
    "UNUSEDEzsignsignatureEditObjectV1Response": UNUSEDEzsignsignatureEditObjectV1Response,
    "UserCreateEzsignuserV1Request": UserCreateEzsignuserV1Request,
    "UserCreateEzsignuserV1Response": UserCreateEzsignuserV1Response,
    "UserCreateEzsignuserV1ResponseMPayload": UserCreateEzsignuserV1ResponseMPayload,
    "UserResponse": UserResponse,
    "UserResponseAllOf": UserResponseAllOf,
    "WebhookEzsignDocumentCompleted": WebhookEzsignDocumentCompleted,
    "WebhookEzsignDocumentCompletedAllOf": WebhookEzsignDocumentCompletedAllOf,
    "WebhookEzsignFolderCompleted": WebhookEzsignFolderCompleted,
    "WebhookEzsignFolderCompletedAllOf": WebhookEzsignFolderCompletedAllOf,
    "WebhookResponse": WebhookResponse,
    "WebhookUserUserCreated": WebhookUserUserCreated,
    "WebhookUserUserCreatedAllOf": WebhookUserUserCreatedAllOf,
    "WebsiteRequest": WebsiteRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
