import { Api } from '../../global/api';
export class NovidadesService {
    constructor(authorization, novidadesApi) {
        this.authorization = authorization;
        this.api = new Api(authorization.getAuthorization(), authorization.handleUnauthorizedAccess, novidadesApi);
    }
    async buscar() {
        return this.api.request('GET', 'api/novidades');
    }
    marcarComoLida(novidadeId) {
        localStorage.setItem(this.construirStorageKey(novidadeId), 'true');
    }
    marcarComoNaoLida(novidadeId) {
        localStorage.removeItem(this.construirStorageKey(novidadeId));
    }
    isLida(novidadeId) {
        return localStorage.getItem(this.construirStorageKey(novidadeId)) !== null;
    }
    construirStorageKey(novidadeId) {
        const { userId } = this.authorization.getAuthorization();
        return `novidades_${userId !== null && userId !== void 0 ? userId : 'anonimo'}_${novidadeId}`;
    }
}
