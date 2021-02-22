import { AuthorizationConfig } from '../../global/interfaces';
export declare class NovidadesService {
    private api;
    private authorization;
    constructor(authorization: AuthorizationConfig, novidadesApi: string);
    buscar(): Promise<any>;
    marcarComoLida(novidadeId: string): void;
    marcarComoNaoLida(novidadeId: string): void;
    isLida(novidadeId: string): boolean;
    private construirStorageKey;
}
