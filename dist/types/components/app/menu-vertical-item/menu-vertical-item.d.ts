import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
import { IdentificadorOpcaoMenu, OpcaoMenu } from '../app.interfaces';
import { MenuVerticalSelecionadoEvent } from './menu-vertical-item.interfaces';
/**
 * Item que representa uma opção do menu para navegação vertical
 */
export declare class MenuVerticalItem implements ComponentInterface {
    /**
     * Está ativo?
     */
    readonly ativo: boolean;
    /**
     * Valor que será exibido em uma "badge" próximo ao menu
     */
    readonly contador: number;
    /**
     * Descrição
     */
    readonly descricao: string;
    /**
     * Ícone conforme biblioteca `"Material Design Icons"`
     */
    readonly icone: string;
    /**
     * Identificador
     */
    readonly identificador: IdentificadorOpcaoMenu;
    /**
     * Identificador do menu agrupador "pai"
     */
    readonly identificadorPai: IdentificadorOpcaoMenu;
    /**
     * O menu principal está recolhido?
     *
     * Este parâmetro influência no formato como alguns elementos são exibidos, ex: badge do contador.
     */
    readonly menuLateralRecolhido: boolean;
    /**
     * Possui permissão?
     */
    readonly possuiPermissao: boolean;
    /**
     * Está recolhido?
     */
    readonly recolhido: boolean;
    /**
     * É um submenu?
     */
    readonly submenu: boolean;
    /**
     * Possui submenus?
     */
    readonly submenus?: Array<OpcaoMenu>;
    /**
     * É emitido quando o menu é selecionado
     */
    menuVerticalSelecionado: EventEmitter<MenuVerticalSelecionadoEvent>;
    private onClick;
    render(): any;
}
