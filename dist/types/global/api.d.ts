import { Authorization, AuthorizationConfig } from './interfaces';
export declare const isValidAuthorizationConfig: (authorization: AuthorizationConfig) => boolean;
export interface PaginationQueryParams {
    offset?: number;
    limit?: number;
}
export declare class Api {
    private authorization;
    private handleUnauthorizedAccess;
    private baseUrl;
    constructor(authorization: Authorization, handleUnauthorizedAccess: () => Promise<void>, baseUrl: string);
    request(method: string, path: string, retryUnauthorizedAccess?: boolean): Promise<any>;
    private getHeaders;
}
