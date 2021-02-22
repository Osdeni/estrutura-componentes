import { ComponentInterface } from '../../../stencil-public-runtime';
/**
 * Facilita a criação de Ferramentas para o menu. Abstrai comportamentos responsivos e controle do painel lateral.
 *
 * @slot menu_item_mobile - Item do menu para versão mobile
 * @slot menu_descricao_mobile - Descrição para versão mobile
 * @slot menu_item_desktop - Item do menu para versão desktop
 * @slot conteudo_painel_lateral - Conteúdo do painel lateral
 */
export declare class MenuFerramenta implements ComponentInterface {
    el: HTMLBthMenuFerramentaElement;
    isDispositivoMovel: boolean;
    possuiConteudoPainelLateralDeclarado: boolean;
    possuiMenuItemDesktopDeclarado: boolean;
    possuiMenuItemMobileDeclarado: boolean;
    /**
     * Descrição
     */
    readonly descricao: string;
    /**
     * Título do Painel Lateral
     */
    readonly tituloPainelLateral: string;
    connectedCallback(): void;
    onWindowResize(): void;
    /**
     * Fecha os paineis abertos
     */
    fecharPaineisAbertos(): Promise<void>;
    private configurarPropriedadesResponsivas;
    private alternarExibicaoPainelLateral;
    private onToggleEstadoAberto;
    private onPainelLateralShow;
    private onMouseOverToggle;
    private onMouseLeaveToggle;
    render(): any;
}
