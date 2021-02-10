/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.29
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
import { EzsignfolderCreateObjectV1Request } from '../model/ezsignfolderCreateObjectV1Request';
import { EzsignfolderCreateObjectV1Response } from '../model/ezsignfolderCreateObjectV1Response';
import { EzsignfolderDeleteObjectV1Response } from '../model/ezsignfolderDeleteObjectV1Response';
import { EzsignfolderEditObjectV1Request } from '../model/ezsignfolderEditObjectV1Request';
import { EzsignfolderEditObjectV1Response } from '../model/ezsignfolderEditObjectV1Response';
import { EzsignfolderGetObjectV1Response } from '../model/ezsignfolderGetObjectV1Response';
import { EzsignfolderSendV1Request } from '../model/ezsignfolderSendV1Request';
import { EzsignfolderSendV1Response } from '../model/ezsignfolderSendV1Response';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://prod.api.appcluster01.ca-central-1.ezmax.com/rest';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ObjectEzsignfolderApiApiKeys {
    Authorization,
}

export class ObjectEzsignfolderApi {
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

    public setApiKey(key: ObjectEzsignfolderApiApiKeys, value: string) {
        (this.authentications as any)[ObjectEzsignfolderApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @summary Create a new Ezsignfolder
     * @param ezsignfolderCreateObjectV1Request 
     */
    public async ezsignfolderCreateObjectV1 (ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfolderCreateObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfolder';
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

        // verify required parameter 'ezsignfolderCreateObjectV1Request' is not null or undefined
        if (ezsignfolderCreateObjectV1Request === null || ezsignfolderCreateObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignfolderCreateObjectV1Request was null or undefined when calling ezsignfolderCreateObjectV1.');
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
            body: ObjectSerializer.serialize(ezsignfolderCreateObjectV1Request, "Array<EzsignfolderCreateObjectV1Request>")
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignfolderCreateObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfolderCreateObjectV1Response");
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
     * @summary Delete an existing Ezsignfolder
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    public async ezsignfolderDeleteObjectV1 (pkiEzsignfolderID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfolderDeleteObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfolder/{pkiEzsignfolderID}'
            .replace('{' + 'pkiEzsignfolderID' + '}', encodeURIComponent(String(pkiEzsignfolderID)));
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

        // verify required parameter 'pkiEzsignfolderID' is not null or undefined
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderDeleteObjectV1.');
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignfolderDeleteObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfolderDeleteObjectV1Response");
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
     * @summary Modify an existing Ezsignfolder
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param ezsignfolderEditObjectV1Request 
     */
    public async ezsignfolderEditObjectV1 (pkiEzsignfolderID: number, ezsignfolderEditObjectV1Request: EzsignfolderEditObjectV1Request, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfolderEditObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfolder/{pkiEzsignfolderID}'
            .replace('{' + 'pkiEzsignfolderID' + '}', encodeURIComponent(String(pkiEzsignfolderID)));
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

        // verify required parameter 'pkiEzsignfolderID' is not null or undefined
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderEditObjectV1.');
        }

        // verify required parameter 'ezsignfolderEditObjectV1Request' is not null or undefined
        if (ezsignfolderEditObjectV1Request === null || ezsignfolderEditObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignfolderEditObjectV1Request was null or undefined when calling ezsignfolderEditObjectV1.');
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
            body: ObjectSerializer.serialize(ezsignfolderEditObjectV1Request, "EzsignfolderEditObjectV1Request")
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignfolderEditObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfolderEditObjectV1Response");
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
     * @summary Retrieve an existing Ezsignfolder\'s children IDs
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    public async ezsignfolderGetChildrenV1 (pkiEzsignfolderID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfolder/{pkiEzsignfolderID}/getChildren'
            .replace('{' + 'pkiEzsignfolderID' + '}', encodeURIComponent(String(pkiEzsignfolderID)));
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

        // verify required parameter 'pkiEzsignfolderID' is not null or undefined
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderGetChildrenV1.');
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
     * @summary Retrieve an existing Ezsignfolder
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    public async ezsignfolderGetObjectV1 (pkiEzsignfolderID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfolderGetObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfolder/{pkiEzsignfolderID}'
            .replace('{' + 'pkiEzsignfolderID' + '}', encodeURIComponent(String(pkiEzsignfolderID)));
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

        // verify required parameter 'pkiEzsignfolderID' is not null or undefined
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderGetObjectV1.');
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignfolderGetObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfolderGetObjectV1Response");
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
     * @summary Send the Ezsignfolder to the signatories for signature
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param ezsignfolderSendV1Request 
     */
    public async ezsignfolderSendV1 (pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignfolderSendV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignfolder/{pkiEzsignfolderID}/send'
            .replace('{' + 'pkiEzsignfolderID' + '}', encodeURIComponent(String(pkiEzsignfolderID)));
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

        // verify required parameter 'pkiEzsignfolderID' is not null or undefined
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderSendV1.');
        }

        // verify required parameter 'ezsignfolderSendV1Request' is not null or undefined
        if (ezsignfolderSendV1Request === null || ezsignfolderSendV1Request === undefined) {
            throw new Error('Required parameter ezsignfolderSendV1Request was null or undefined when calling ezsignfolderSendV1.');
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
            body: ObjectSerializer.serialize(ezsignfolderSendV1Request, "EzsignfolderSendV1Request")
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignfolderSendV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignfolderSendV1Response");
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
