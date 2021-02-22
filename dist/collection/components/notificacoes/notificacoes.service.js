import { Api } from '../../global/api';
export class NotificacoesService {
    constructor(authorization, notificacoesApi) {
        this.api = new Api(authorization.getAuthorization(), authorization.handleUnauthorizedAccess, notificacoesApi);
    }
    async buscar(params = { offset: 0, limit: 20 }) {
        return this.api.request('GET', `api/messages/?limit=${params.limit}&offset=${params.offset}`);
    }
    async buscarNaoLidas(params = { offset: 0, limit: 20 }) {
        return this.api.request('GET', `api/messages/unreads/all?limit=${params.limit}&offset=${params.offset}`);
    }
    async buscarLidas(params = { offset: 0, limit: 20 }) {
        return this.api.request('GET', `api/messages/reads?limit=${params.limit}&offset=${params.offset}`);
    }
    async buscarEmProgresso(params = { offset: 0, limit: 20 }) {
        return this.api.request('GET', `api/messages/in-progress?limit=${params.limit}&offset=${params.offset}`);
    }
    async clearInProgressUnread() {
        return this.api.request('DELETE', 'api/messages/in-progress/unread');
    }
    async clearUnreads() {
        return this.api.request('DELETE', 'api/messages/unread?keepInProgress=true');
    }
    async setRead(notificationId) {
        return this.api.request('PUT', `api/messages/${notificationId}/read`);
    }
    async setUnread(notificationId) {
        return this.api.request('PUT', `api/messages/${notificationId}/unread`);
    }
}
