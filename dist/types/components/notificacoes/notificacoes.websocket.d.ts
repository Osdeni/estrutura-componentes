import { AuthorizationConfig } from '../../global/interfaces';
import { NotificacaoWebsocketMessage } from './notificacoes.interfaces';
export declare class NotificationWebSocket {
    private authorization;
    private notificationsWs;
    private refreshTime;
    private listeners;
    private closed;
    private webSocket;
    private sequence;
    constructor(authorization: AuthorizationConfig, notificationsWs: string, refreshTime?: number, listeners?: {}, closed?: boolean);
    addEventListener(listener: string, callback: Function): void;
    send(message: NotificacaoWebsocketMessage): void;
    hasStarted(): boolean;
    refresh(): void;
    getUrl(): string;
    close(): void;
}
