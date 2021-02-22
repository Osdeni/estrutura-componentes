import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { AuthorizationConfig } from '../../global/interfaces';
import { ConteudoSinalizadoEvent } from '../app/app.interfaces';
import { OpcaoFiltro, Notificacao, NotificacaoLeituraEvent, NotificacaoComLinkEvent } from './notificacoes.interfaces';
export declare class Notificacoes implements ComponentInterface {
    private notificacoesService;
    private websocket;
    private carregouTodasEmProgresso;
    private carregouTodasNaoLidas;
    private carregouTodasLidas;
    private carregouNaoLidas;
    private carregouLidas;
    private carregouEmProgresso;
    private tracker;
    el: HTMLBthNotificacoesElement;
    isInicializado: boolean;
    filtros: Array<OpcaoFiltro>;
    notificacoesNaoLidas: Notificacao[];
    notificacoesLidas: Notificacao[];
    notificacoesEmProgresso: Notificacao[];
    quantidadeTotalNaoLidas: number;
    quantidadeEmProgressoNaoLidas: number;
    quantidadeEmNaoLidas: number;
    isBuscandoNotificacoes: boolean;
    isApiIndisponivel: boolean;
    /**
     * Configuração de autorização. É necessária para o componente poder realizar autentizar com os serviços.
     */
    readonly authorization: AuthorizationConfig;
    /**
     * True, exibe somente o box de notificações, sem barra e badge
     */
    readonly onlyContent?: boolean;
    /**
     * Altura do painel de notificações
     */
    readonly heightPainelNotificacoes?: string;
    /**
     * URL para a api de notificações. Por padrão irá obter do env.js
     */
    readonly notificacoesApi?: string;
    /**
     * URL para o channel websocket de notificações. Por padrão irá obter do env.js
     */
    readonly notificacoesWs?: string;
    /**
     * É emitido quando houver notificações lidas ou não lidas a ser sinalizadas ao menu
     */
    conteudoSinalizado: EventEmitter<ConteudoSinalizadoEvent>;
    /**
     * É emitido quando alguma notificação do tipo mensagem for recebida
     */
    novaNotificacaoComLink: EventEmitter<NotificacaoComLinkEvent>;
    onPainelLateralShow(data: CustomEvent): void;
    onNotificacaoLida(event: CustomEvent<NotificacaoLeituraEvent>): void;
    onNotificacaoNaoLida(event: CustomEvent<NotificacaoLeituraEvent>): void;
    onNavbarPillItemClicked(data: CustomEvent): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    onChangeQuantidadeTotalNaoLidas(novoValor: any): void;
    onChangeApiRelatedProperties(): void;
    private inicializarServices;
    private isConfiguracaoApiInconsistente;
    private setFiltroNotificacaoPadrao;
    private getNotificacoesApi;
    private getNotificacoesWs;
    private inicializarWebSocket;
    private onWebsocketStarted;
    private onWebsocketNewNotifications;
    private addNovaMensagem;
    private addMensagemNaoLida;
    private addMensagemAltaPrioridade;
    private removerDeTodasListas;
    private onWebsocketReadAction;
    private marcarTodasComoLida;
    private resetarListasNotificacoes;
    private marcarTodasEmProgressoComoLida;
    private marcarNotificacaoComoLida;
    private marcarNotificacaoComoNaoLida;
    private onClickMarcarTodasComoLidas;
    private carregarNotificacoesNaoLidas;
    private carregarNotificacoesLidas;
    private carregarNotificacoesEmProgresso;
    private getPaginationQueryParams;
    private getOpcaoFiltroAtivo;
    private setFiltroNotificacao;
    private hasNotificacoes;
    private getNotificacoesPorFiltroAtivo;
    private isFiltroPorLidas;
    private isFiltroPorNaoLidas;
    private isFiltroPorProgresso;
    private onContentScroll;
    private carregarNotificacoes;
    private renderLoader;
    private getHeightPainelNotificacoes;
    render(): any;
}
