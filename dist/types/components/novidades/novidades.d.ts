import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { AuthorizationConfig } from '../../global/interfaces';
import { ConteudoSinalizadoEvent } from '../app/app.interfaces';
import { OpcaoFiltro, Novidade, NovidadeLeituraEvent } from './novidades.interfaces';
export declare class Novidades implements ComponentInterface {
    private novidadesService;
    private pollingHandler;
    isBuscandoNovidades: boolean;
    isApiIndisponivel: boolean;
    filtros: Array<OpcaoFiltro>;
    novidades: Novidade[];
    /**
     * Configuração de autorização. É necessária para o componente poder realizar autentizar com os serviços.
     */
    readonly authorization: AuthorizationConfig;
    /**
     * URL para a api de novidades. Por padrão irá obter do env.js.
     */
    readonly novidadesApi?: string;
    /**
     * É emitido quando houver novidades lidas ou não lidas a ser sinalizadas ao menu
     */
    conteudoSinalizado: EventEmitter<ConteudoSinalizadoEvent>;
    onPainelLateralShow(data: CustomEvent): void;
    onNovidadeLida(data: CustomEvent<NovidadeLeituraEvent>): void;
    onNovidadeNaoLida(data: CustomEvent<NovidadeLeituraEvent>): void;
    onNavbarPillItemClicked(data: CustomEvent): void;
    watchAuthorization(): void;
    watchNovidadesApi(): Promise<void>;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private handleBuscar;
    private stopPollingListener;
    private startPollingListener;
    private buscar;
    private isConfiguracaoApiInconsistente;
    private setFiltroNovidadePadrao;
    private onClickMarcarTodasComoLidas;
    private atualizarIndicadorConteudoSinalizado;
    private getNovidadesApi;
    private setFiltroNovidade;
    private getQtdNaoLidas;
    private getQtdLidas;
    private getOpcaoFiltroAtivo;
    private isFiltroPorLidas;
    private isFiltroPorNaoLidas;
    private isEmptyStateVisible;
    private renderLoader;
    render(): any;
}
