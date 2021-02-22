import { isNill } from '../utils/functions';
const UNAUTHORIZED_STATUS_CODE = 401;
const OK_STATUS_CODE = 200;
export const isValidAuthorizationConfig = (authorization) => {
    if (isNill(authorization)) {
        return false;
    }
    return !isNill(authorization.getAuthorization) && !isNill(authorization.handleUnauthorizedAccess);
};
export class Api {
    constructor(authorization, handleUnauthorizedAccess, baseUrl) {
        this.authorization = authorization;
        this.handleUnauthorizedAccess = handleUnauthorizedAccess;
        this.baseUrl = baseUrl;
    }
    async request(method, path, retryUnauthorizedAccess = true) {
        const response = await fetch(`${this.baseUrl}/${path}`, { method, headers: this.getHeaders() });
        if (response.status === UNAUTHORIZED_STATUS_CODE && retryUnauthorizedAccess && this.handleUnauthorizedAccess !== undefined) {
            await this.handleUnauthorizedAccess();
            return await this.request(method, path, false);
        }
        if (response.status !== OK_STATUS_CODE) {
            throw new Error(response.statusText);
        }
        return await response.json().catch(() => null);
    }
    getHeaders() {
        const headers = new Headers();
        headers.append('Authorization', 'bearer ' + this.authorization.accessToken);
        return headers;
    }
}
