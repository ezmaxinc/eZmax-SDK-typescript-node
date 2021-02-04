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
import { EzsignsignatureCreateObjectV1Request } from '../model/ezsignsignatureCreateObjectV1Request';
import { EzsignsignatureCreateObjectV1Response } from '../model/ezsignsignatureCreateObjectV1Response';
import { EzsignsignatureDeleteObjectV1Response } from '../model/ezsignsignatureDeleteObjectV1Response';
import { EzsignsignatureEditObjectV1Request } from '../model/ezsignsignatureEditObjectV1Request';
import { EzsignsignatureEditObjectV1Response } from '../model/ezsignsignatureEditObjectV1Response';
import { EzsignsignatureGetObjectV1Response } from '../model/ezsignsignatureGetObjectV1Response';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://prod.api.appcluster01.ca-central-1.ezmax.com/rest';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ObjectEzsignsignatureApiApiKeys {
    Authorization,
}

export class ObjectEzsignsignatureApi {
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

    public setApiKey(key: ObjectEzsignsignatureApiApiKeys, value: string) {
        (this.authentications as any)[ObjectEzsignsignatureApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @summary Create a new Ezsignsignature
     * @param ezsignsignatureCreateObjectV1Request 
     */
    public async ezsignsignatureCreateObjectV1 (ezsignsignatureCreateObjectV1Request: Array<EzsignsignatureCreateObjectV1Request>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignsignatureCreateObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignsignature';
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

        // verify required parameter 'ezsignsignatureCreateObjectV1Request' is not null or undefined
        if (ezsignsignatureCreateObjectV1Request === null || ezsignsignatureCreateObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignsignatureCreateObjectV1Request was null or undefined when calling ezsignsignatureCreateObjectV1.');
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
            body: ObjectSerializer.serialize(ezsignsignatureCreateObjectV1Request, "Array<EzsignsignatureCreateObjectV1Request>")
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignsignatureCreateObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignsignatureCreateObjectV1Response");
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
     * @summary Delete an existing Ezsignsignature
     * @param pkiEzsignsignatureID The unique ID of the Ezsignsignature
     */
    public async ezsignsignatureDeleteObjectV1 (pkiEzsignsignatureID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignsignatureDeleteObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignsignature/{pkiEzsignsignatureID}'
            .replace('{' + 'pkiEzsignsignatureID' + '}', encodeURIComponent(String(pkiEzsignsignatureID)));
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

        // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
        if (pkiEzsignsignatureID === null || pkiEzsignsignatureID === undefined) {
            throw new Error('Required parameter pkiEzsignsignatureID was null or undefined when calling ezsignsignatureDeleteObjectV1.');
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignsignatureDeleteObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignsignatureDeleteObjectV1Response");
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
     * @summary Modify an existing Ezsignsignature
     * @param pkiEzsignsignatureID The unique ID of the Ezsignsignature
     * @param ezsignsignatureEditObjectV1Request 
     */
    public async ezsignsignatureEditObjectV1 (pkiEzsignsignatureID: number, ezsignsignatureEditObjectV1Request: EzsignsignatureEditObjectV1Request, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignsignatureEditObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignsignature/{pkiEzsignsignatureID}'
            .replace('{' + 'pkiEzsignsignatureID' + '}', encodeURIComponent(String(pkiEzsignsignatureID)));
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

        // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
        if (pkiEzsignsignatureID === null || pkiEzsignsignatureID === undefined) {
            throw new Error('Required parameter pkiEzsignsignatureID was null or undefined when calling ezsignsignatureEditObjectV1.');
        }

        // verify required parameter 'ezsignsignatureEditObjectV1Request' is not null or undefined
        if (ezsignsignatureEditObjectV1Request === null || ezsignsignatureEditObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignsignatureEditObjectV1Request was null or undefined when calling ezsignsignatureEditObjectV1.');
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
            body: ObjectSerializer.serialize(ezsignsignatureEditObjectV1Request, "EzsignsignatureEditObjectV1Request")
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignsignatureEditObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignsignatureEditObjectV1Response");
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
     * @summary Retrieve an existing Ezsignsignature\'s children IDs
     * @param pkiEzsignsignatureID The unique ID of the Ezsignsignature
     */
    public async ezsignsignatureGetObjectGetChildrenV1 (pkiEzsignsignatureID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignsignature/{pkiEzsignsignatureID}/getChildren'
            .replace('{' + 'pkiEzsignsignatureID' + '}', encodeURIComponent(String(pkiEzsignsignatureID)));
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

        // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
        if (pkiEzsignsignatureID === null || pkiEzsignsignatureID === undefined) {
            throw new Error('Required parameter pkiEzsignsignatureID was null or undefined when calling ezsignsignatureGetObjectGetChildrenV1.');
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
     * @summary Retrieve an existing Ezsignsignature
     * @param pkiEzsignsignatureID The unique ID of the Ezsignsignature
     */
    public async ezsignsignatureGetObjectV1 (pkiEzsignsignatureID: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: EzsignsignatureGetObjectV1Response;  }> {
        const localVarPath = this.basePath + '/1/object/ezsignsignature/{pkiEzsignsignatureID}'
            .replace('{' + 'pkiEzsignsignatureID' + '}', encodeURIComponent(String(pkiEzsignsignatureID)));
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

        // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
        if (pkiEzsignsignatureID === null || pkiEzsignsignatureID === undefined) {
            throw new Error('Required parameter pkiEzsignsignatureID was null or undefined when calling ezsignsignatureGetObjectV1.');
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
            return new Promise<{ response: http.IncomingMessage; body: EzsignsignatureGetObjectV1Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "EzsignsignatureGetObjectV1Response");
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
