export * from './globalCustomerApi';
import { GlobalCustomerApi } from './globalCustomerApi';
export * from './moduleSsprApi';
import { ModuleSsprApi } from './moduleSsprApi';
export * from './moduleUserApi';
import { ModuleUserApi } from './moduleUserApi';
export * from './objectActivesessionApi';
import { ObjectActivesessionApi } from './objectActivesessionApi';
export * from './objectApikeyApi';
import { ObjectApikeyApi } from './objectApikeyApi';
export * from './objectEzsigndocumentApi';
import { ObjectEzsigndocumentApi } from './objectEzsigndocumentApi';
export * from './objectEzsignfolderApi';
import { ObjectEzsignfolderApi } from './objectEzsignfolderApi';
export * from './objectEzsignfoldersignerassociationApi';
import { ObjectEzsignfoldersignerassociationApi } from './objectEzsignfoldersignerassociationApi';
export * from './objectEzsignsignatureApi';
import { ObjectEzsignsignatureApi } from './objectEzsignsignatureApi';
export * from './objectFranchisebrokerApi';
import { ObjectFranchisebrokerApi } from './objectFranchisebrokerApi';
export * from './objectFranchiseofficeApi';
import { ObjectFranchiseofficeApi } from './objectFranchiseofficeApi';
export * from './objectFranchisereferalincomeApi';
import { ObjectFranchisereferalincomeApi } from './objectFranchisereferalincomeApi';
export * from './objectPeriodApi';
import { ObjectPeriodApi } from './objectPeriodApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [GlobalCustomerApi, ModuleSsprApi, ModuleUserApi, ObjectActivesessionApi, ObjectApikeyApi, ObjectEzsigndocumentApi, ObjectEzsignfolderApi, ObjectEzsignfoldersignerassociationApi, ObjectEzsignsignatureApi, ObjectFranchisebrokerApi, ObjectFranchiseofficeApi, ObjectFranchisereferalincomeApi, ObjectPeriodApi];
