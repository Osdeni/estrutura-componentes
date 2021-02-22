import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
import { MenuBannerAlteradoEvent } from '../app.interfaces';
import { PainelLateralShowEvent } from './menu-painel-lateral.interfaces';
/**
 * Possibilita incluir conteúdo dinâmico em um painel lateral que sobrepõe o conteúdo da tela pela direita
 *
 * @slot - Conteúdo do painel lateral
 */
export declare class MenuPainelLateral implements ComponentInterface {
    private timeoutAtivoHandler;
    el: HTMLBthMenuPainelLateralElement;
    isDispositivoMovel: boolean;
    menuPossuiBanner: boolean;
    renderSlot: boolean;
    uniqueId: string;
    /**
     * Estado de visibilidade
     */
    show: boolean;
    /**
     * Título que será exibido no cabeçalho
     */
    readonly titulo: string;
    showHandler(): void;
    /**
     * É toda vez em que o estado de exibição ("show") for alterado
     */
    painelLateralShow: EventEmitter<PainelLateralShowEvent>;
    connectedCallback(): void;
    onWindowResize(): void;
    onBannerAlterado(event: CustomEvent<MenuBannerAlteradoEvent>): void;
    onPainelLateralShow(event: CustomEvent<PainelLateralShowEvent>): void;
    /**
     * Alterna o estado em aberto do painel para o valor do parâmetro após um timeout padrão de interações
     */
    setShowComAnimacao(show: boolean): Promise<void>;
    /**
     * Cancela o timeout de interação ativo caso exista
     */
    cancelarAberturaComAnimacao(): Promise<void>;
    /**
     * Fecha o painel lateral e emite evento para que outros sobrepostos sejam fechados.
     */
    fecharPaineisAbertos(): Promise<void>;
    watchShow(novoValor: boolean): void;
    private dispatchFecharTodosEvent;
    private configurarPropriedadesResponsivas;
    private onToggleShow;
    private onCloseAll;
    private onMouseOver;
    private onMouseLeave;
    render(): any;
}
