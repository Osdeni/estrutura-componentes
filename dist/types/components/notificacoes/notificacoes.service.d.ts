import { PaginationQueryParams } from '../../global/api';
import { AuthorizationConfig } from '../../global/interfaces';
export declare class NotificacoesService {
    private api;
    constructor(authorization: AuthorizationConfig, notificacoesApi: string);
    buscar(params?: PaginationQueryParams): Promise<any>;
    buscarNaoLidas(params?: PaginationQueryParams): Promise<any>;
    buscarLidas(params?: PaginationQueryParams): Promise<any>;
    buscarEmProgresso(params?: PaginationQueryParams): Promise<any>;
    clearInProgressUnread(): Promise<any>;
    clearUnreads(): Promise<any>;
    setRead(notificationId: string): Promise<any>;
    setUnread(notificationId: string): Promise<any>;
}
