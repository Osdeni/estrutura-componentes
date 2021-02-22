import { EventEmitter } from '../../../stencil-public-runtime';
import { IdentificadorOpcaoMenu } from '../app.interfaces';
import { MenuHorizontalSelecionadoEvent } from './menu-horizontal-item.interfaces';
/**
 * Item que representa uma opção do menu para navegação horizontal
 */
export declare class MenuHorizontalItem {
    /**
     * Está ativo?
     */
    readonly ativo: boolean;
    /**
     * Contador
     *
     * Exibe o valor inforamdo em um badge próximo ao menu
     */
    readonly contador: number;
    /**
     * Descrição
     */
    readonly descricao: string;
    /**
     * Identificador
     */
    readonly identificador: IdentificadorOpcaoMenu;
    /**
     * Possui permissão?
     */
    readonly possuiPermissao: boolean;
    /**
     * É emitido quando o menu é selecionado
     */
    menuHorizontalSelecionado: EventEmitter<MenuHorizontalSelecionadoEvent>;
    private onClick;
    render(): any;
}
