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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CommonResponseError } from '../model/commonResponseError';
import { EzsignfoldersignerassociationCreateObjectV1Request } from '../model/ezsignfoldersignerassociationCreateObjectV1Request';
import { EzsignfoldersignerassociationCreateObjectV1Response } from '../model/ezsignfoldersignerassociationCreateObjectV1Response';
import { EzsignfoldersignerassociationDeleteObjectV1Response } from '../model/ezsignfoldersignerassociationDeleteObjectV1Response';
import { EzsignfoldersignerassociationEditObjectV1Request } from '../model/ezsignfoldersignerassociationEditObjectV1Request';
import { EzsignfoldersignerassociationEditObjectV1Response } from '../model/ezsignfoldersignerassociationEditObjectV1Response';
import { EzsignfoldersignerassociationGetInPersonLoginUrlV1Response } from '../model/ezsignfoldersignerassociationGetInPersonLoginUrlV1Response';
import { EzsignfoldersignerassociationGetObjectV1Response } from '../model/ezsignfoldersignerassociationGetObjectV1Response';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://prod.api.appcluster01.ca-central-1.ezmax.com/rest';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ObjectEzsignfoldersignerassociationApiApiKeys {
    Authorization,
}

export class ObjectEzsignfoldersignerassociationApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'Authorization': new ApiKeyAuth('header', 'Authorization'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ObjectEzsignfoldersignerassociationApiApiKeys, value: string) {
        (this.authentications as any)[ObjectEzsignfoldersignerassociationApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @summary Create a new Ezsignfoldersignerassociation
     * @param ezsignfoldersignerassociationCreateObjectV1Request 
     */
    public async ezsignfoldersignerassociationCreateObjectV1 (ezsignfoldersignerassociationCreateObjectV1Request: Array<EzsignfoldersignerassociationCreateObjectV1Request>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationCreateObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfoldersignerassociation';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'ezsignfoldersignerassociationCreateObjectV1Request' is not null or undefined
        if (ezsignfoldersignerassociationCreateObjectV1Request === null || ezsignfoldersignerassociationCreateObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignfoldersignerassociationCreateObjectV1Request was null or undefined when calling ezsignfoldersignerassociationCreateObjectV1.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ezsignfoldersignerassociationCreateObjectV1Request, "Array<EzsignfoldersignerassociationCreateObjectV1Request>")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Authorization.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Authorization.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationCreateObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfoldersignerassociationCreateObjectV1Response");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Delete an existing Ezsignfoldersignerassociation
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    public async ezsignfoldersignerassociationDeleteObjectV1 (pkiEzsignfoldersignerassociationID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationDeleteObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}'
            .replace('{' + 'pkiEzsignfoldersignerassociationID' + '}', encodeURIComponent(String(pkiEzsignfoldersignerassociationID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pkiEzsignfoldersignerassociationID' is not null or undefined
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationDeleteObjectV1.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Authorization.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Authorization.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationDeleteObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfoldersignerassociationDeleteObjectV1Response");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Modify an existing Ezsignfoldersignerassociation
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param ezsignfoldersignerassociationEditObjectV1Request 
     */
    public async ezsignfoldersignerassociationEditObjectV1 (pkiEzsignfoldersignerassociationID: number, ezsignfoldersignerassociationEditObjectV1Request: EzsignfoldersignerassociationEditObjectV1Request, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationEditObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}'
            .replace('{' + 'pkiEzsignfoldersignerassociationID' + '}', encodeURIComponent(String(pkiEzsignfoldersignerassociationID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pkiEzsignfoldersignerassociationID' is not null or undefined
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationEditObjectV1.');
        }

        // verify required parameter 'ezsignfoldersignerassociationEditObjectV1Request' is not null or undefined
        if (ezsignfoldersignerassociationEditObjectV1Request === null || ezsignfoldersignerassociationEditObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignfoldersignerassociationEditObjectV1Request was null or undefined when calling ezsignfoldersignerassociationEditObjectV1.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ezsignfoldersignerassociationEditObjectV1Request, "EzsignfoldersignerassociationEditObjectV1Request")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Authorization.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Authorization.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationEditObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfoldersignerassociationEditObjectV1Response");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * This endpoint returns a Login Url that can be used in a browser or embedded in an I-Frame to allow in person signing.  The signer Login type must be configured as In-Person.
     * @summary Retrieve a Login Url to allow In-Person signing
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    public async ezsignfoldersignerassociationGetInPersonLoginUrlV1 (pkiEzsignfoldersignerassociationID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationGetInPersonLoginUrlV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getInPersonLoginUrl'
            .replace('{' + 'pkiEzsignfoldersignerassociationID' + '}', encodeURIComponent(String(pkiEzsignfoldersignerassociationID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pkiEzsignfoldersignerassociationID' is not null or undefined
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetInPersonLoginUrlV1.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Authorization.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Authorization.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationGetInPersonLoginUrlV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfoldersignerassociationGetInPersonLoginUrlV1Response");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Retrieve an existing Ezsignfoldersignerassociation\'s children IDs
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    public async ezsignfoldersignerassociationGetObjectGetChildrenV1 (pkiEzsignfoldersignerassociationID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getChildren'
            .replace('{' + 'pkiEzsignfoldersignerassociationID' + '}', encodeURIComponent(String(pkiEzsignfoldersignerassociationID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pkiEzsignfoldersignerassociationID' is not null or undefined
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetObjectGetChildrenV1.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Authorization.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Authorization.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Retrieve an existing Ezsignfoldersignerassociation
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    public async ezsignfoldersignerassociationGetObjectV1 (pkiEzsignfoldersignerassociationID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationGetObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}'
            .replace('{' + 'pkiEzsignfoldersignerassociationID' + '}', encodeURIComponent(String(pkiEzsignfoldersignerassociationID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'pkiEzsignfoldersignerassociationID' is not null or undefined
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetObjectV1.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.Authorization.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.Authorization.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: EzsignfoldersignerassociationGetObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfoldersignerassociationGetObjectV1Response");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
