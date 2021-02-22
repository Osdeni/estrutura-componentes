import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
import { NotificacaoLink, TipoNotificacao } from '../notificacoes.interfaces';
export declare class NotificacaoItem implements ComponentInterface {
    /**
     * Identificador
     */
    readonly identificador: string;
    /**
     * Tipo de notificação
     */
    readonly tipo: TipoNotificacao;
    /**
     * Texto
     */
    readonly texto: string;
    /**
     * Data e hora
     */
    readonly dataHora: number;
    /**
     * Origem
     */
    readonly origem: string;
    /**
     * Ícone
     */
    readonly icone: string;
    /**
     * Link resultado
     */
    readonly resultadoLink: NotificacaoLink;
    /**
     * Link cancelamento
     */
    readonly cancelamentoLink: NotificacaoLink;
    /**
     * Link acompanhar
     */
    readonly acompanharLink: NotificacaoLink;
    /**
     * Possui progresso?
     */
    readonly possuiProgresso: boolean;
    /**
     * Percentual do progresso
     */
    readonly percentualProgresso: number;
    /**
     * Status
     */
    readonly status: string;
    /**
     * Prioridade
     */
    readonly prioridade: number;
    /**
     * É emitido quando uma notificação é marcada como lida
     */
    notificacaoLida: EventEmitter;
    /**
     * É emitido quando uma notificação é marcada como não lida
     */
    notificacaoNaoLida: EventEmitter;
    private onClickPainel;
    private onClick;
    private isLida;
    private isOrigemUsuario;
    private isOrigemSistema;
    private getClassIcone;
    private getSistema;
    private isProgressoEmAndamento;
    private isProgresso;
    private isProgressoVisualizado;
    private getPercentualProgressoStyle;
    private getTitleNotificacao;
    private possuiLinkResultado;
    private getTitleLinkResultado;
    private possuiLinkResultadoParaExibir;
    private possuiLinkAcompanharParaExibir;
    private possuiLinkProgresso;
    private possuiLinkCancelarParaExibir;
    private possuiLinkCancelar;
    private getLinkTarget;
    render(): any;
}
