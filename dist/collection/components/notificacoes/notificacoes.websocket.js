import { isNill } from '../../utils/functions';
import { MessageType } from './notificacoes.constants';
// https://developer.mozilla.org/pt-BR/docs/Web/API/CloseEvent
const CODES_TO_RECONNECT = [1001, 1006];
const RETRY_TIMEOUT_IN_MS = 5000;
export class NotificationWebSocket {
    constructor(authorization, notificationsWs, refreshTime = 0, listeners = {}, closed = false) {
        this.authorization = authorization;
        this.notificationsWs = notificationsWs;
        this.refreshTime = refreshTime;
        this.listeners = listeners;
        this.closed = closed;
        this.sequence = 0;
        this.webSocket = new WebSocket(this.getUrl());
        this.addEventListener('open', () => {
            this.refreshTime = 0;
        });
        this.addEventListener('open', () => {
            if (this.hasStarted()) {
                this.send({ type: MessageType.RESTARTED, sequence: this.sequence });
            }
            else {
                this.send({ type: MessageType.STARTED });
            }
        });
        this.addEventListener('message', (event) => {
            if (/type/.test(event.data)) {
                const data = JSON.parse(event.data);
                this.sequence = data.sequence;
            }
        });
        this.addEventListener('close', async (event) => {
            if (CODES_TO_RECONNECT.includes(event.code) && !this.closed) {
                await this.authorization.handleUnauthorizedAccess();
                const retryTime = this.refreshTime;
                this.refreshTime += RETRY_TIMEOUT_IN_MS;
                setTimeout(() => this.refresh(), retryTime);
            }
        });
    }
    addEventListener(listener, callback) {
        if (isNill(listener)) {
            return;
        }
        const callbackListener = function (event) {
            callback(event);
        };
        this.listeners[listener] = this.listeners[listener] || [];
        this.listeners[listener].push(callbackListener);
        this.webSocket.addEventListener(listener, callbackListener);
    }
    send(message) {
        this.webSocket.send(JSON.stringify(message));
    }
    hasStarted() {
        return this.sequence > 0;
    }
    refresh() {
        this.webSocket = new WebSocket(this.getUrl());
        for (const listener in this.listeners) {
            if (Object.prototype.hasOwnProperty.call(this.listeners, listener)) {
                const listenerCallbacks = this.listeners[listener];
                listenerCallbacks.forEach(callback => {
                    this.webSocket.addEventListener(listener, callback);
                });
            }
        }
    }
    getUrl() {
        return shouldInsertAccessToken(this.notificationsWs)
            ? concatAccessToken(this.notificationsWs, this.authorization.getAuthorization().accessToken)
            : this.notificationsWs;
        function shouldInsertAccessToken(url) {
            return url.indexOf('access_token=') < 0;
        }
        function concatAccessToken(url, authorization) {
            return (/[?&].*=/.test(url) ? url + '&' : url + '?') + 'access_token=' + authorization;
        }
    }
    close() {
        this.listeners = {};
        this.closed = true;
        this.webSocket.close();
        this.webSocket = null;
    }
}
