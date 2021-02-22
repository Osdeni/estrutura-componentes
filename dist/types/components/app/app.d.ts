import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { OpcaoMenu, IdentificadorOpcaoMenu, Banner, MenuBannerAlteradoEvent, OpcaoMenuSelecionadaEvent, OpcaoMenuInterna, ConteudoSinalizadoEvent } from './app.interfaces';
import { MenuHorizontalSelecionadoEvent } from './menu-horizontal-item/menu-horizontal-item.interfaces';
import { PainelLateralShowEvent } from './menu-painel-lateral/menu-painel-lateral.interfaces';
import { MenuVerticalSelecionadoEvent } from './menu-vertical-item/menu-vertical-item.interfaces';
/**
 * Permite configurar opções de navegação nos modelos de menu horizontal e vertical.
 * Possui áreas pré-definidas que permite compor as aplicações.
 *
 * @slot menu_marca_produto - Área da marca e produto, precede o menu horizontal e geralmente contém a logo e nome do produto
 * @slot menu_ferramentas - Área de ferramentas, fica na lateral direita do menu horizontal e geralmente comporta extensões da plataforma
 * @slot container_contexto - Área do contexto logo abaixo do menu horizontal, permite compor componentes como a barra de contexto, ja pré estiliza <ul>
 * @slot container_aplicacao - Área servindo como container para aplicação
 */
export declare class App implements ComponentInterface {
    private timeoutAtivoHandler;
    private ferramentasSinalizacaoPendente;
    el: HTMLBthAppElement;
    isMenuVerticalRecolhido: boolean;
    isMenuVerticalFlutuando: boolean;
    isMenuVerticalAberto: boolean;
    isDispositivoMovel: boolean;
    isPainelFerramentasDispositivoMovelAberto: boolean;
    opcoesMenu?: Array<OpcaoMenuInterna>;
    possuiSinalizacaoPendente: boolean;
    /**
     * Opções de navegação do menu
     */
    readonly opcoes?: Array<OpcaoMenu>;
    /**
     * Define se as opções do menu serão exibidas no formato "vertical", caso contrário serão exibidas no formato "horizontal"
     */
    readonly menuVertical?: boolean;
    /**
     * Permite customizar a cor de fundo da barra do menu. Por padrão segue a cor da linha dos produtos.
     */
    readonly menuBgColor: string;
    /**
     * Permite definir um banner que é exibido acima do menu
     */
    readonly banner?: Banner;
    /**
     * É emitido quando o componente de menu possuir alterações na propriedade de banner
     */
    bannerAlterado: EventEmitter<MenuBannerAlteradoEvent>;
    /**
     * É emitido quando alguma opção do menu for selecionada
     */
    opcaoMenuSelecionada: EventEmitter<OpcaoMenuSelecionadaEvent>;
    connectedCallback(): void;
    watchOpcoesChanged(): void;
    onWindowResize(): void;
    onConteudoSinalizado(event: CustomEvent<ConteudoSinalizadoEvent>): void;
    onPainelLateralShow(event: CustomEvent<PainelLateralShowEvent>): void;
    onMenuHorizontalSelecionado(event: CustomEvent<MenuHorizontalSelecionadoEvent>): void;
    onMenuVerticalSelecionado(event: CustomEvent<MenuVerticalSelecionadoEvent>): void;
    private dispararEventoOpcaoSelecionada;
    onChangeBanner(): void;
    onChangemenuBgColor(): void;
    /**
     * Define o estado de ativo para o menu do parâmetro
     *
     * @param identificador Identificador do menu
     */
    setMenuAtivo(identificador: IdentificadorOpcaoMenu): Promise<void>;
    /**
     * Define o valor do contador de um item do menu
     *
     * @param identificador Identificador do item do menu
     * @param valor Valor do contador
     */
    setContadorMenu(identificador: IdentificadorOpcaoMenu, valor: number): Promise<void>;
    private setCorBackgroundCustomizado;
    private possuiSlotMarcaProduto;
    private possuiSlotFerramentas;
    private possuiSlotContexto;
    private possuiFerramentasSinalizadas;
    private possuiOpcoes;
    private possuiBanner;
    private possuiNavegacaoVertical;
    private possuiNavegacaoHorizontal;
    private setEstadoInicialMenu;
    private salvarEstadoLocalStorage;
    private recuperarEstadoLocalStorage;
    private marcarAtivoMenuVertical;
    private marcarAtivoMenuHorizontal;
    private findOpcaoMenuById;
    private possuiSubmenus;
    private validarPermissaoAcessarOpcaoMenu;
    private cancelarTimeoutRecolhimentoMenu;
    private alterarEstadoRecolhimentoMenuVertical;
    private onMouseOverMenuVertical;
    private onMouseLeaveMenuVertical;
    private onMouseOverBotaoMenu;
    private onMouseLeaveBotaoMenu;
    private onTogglePainelFerramentas;
    private onClickBotaoFixar;
    private onClickBotaoMenu;
    private renderBannerSection;
    private renderMenuHorizontal;
    private renderMenuVertical;
    private renderAppContainer;
    render(): any;
}
