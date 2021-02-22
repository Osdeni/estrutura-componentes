export declare const API_HOST = "https://api.novidades.betha.cloud/v1";
export declare const PAYLOAD: {
    id: string;
    titulo: string;
    mensagem: string;
    url: string;
    dataInicial: string;
    dataFinal: string;
};
export declare function construirLocalStorageKey(userId: string, novidadeId: string): string;
