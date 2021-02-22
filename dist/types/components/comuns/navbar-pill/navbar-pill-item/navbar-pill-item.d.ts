import { EventEmitter, ComponentInterface } from '../../../../stencil-public-runtime';
export declare class NavbarPillItem implements ComponentInterface {
    /**
     * Identificador.
     * É enviado no evento de click.
     */
    readonly identificador: any;
    /**
     * Descrição
     */
    readonly descricao: string;
    /**
     * Está ativo?
     */
    readonly ativo: boolean;
    /**
     * Ícone conforme biblioteca `"Material Design Icons"`
     */
    readonly icone: string;
    /**
     * Totalizador
     */
    readonly totalizador: number;
    /**
     * Exibir totalizador?
     */
    readonly showTotalizador: boolean;
    /**
     * É emitido ao clicar no filtro
     */
    navbarPillItemClicked: EventEmitter;
    private onClick;
    render(): any;
}
