import { ComponentInterface } from '../../../stencil-public-runtime';
/**
 * Abstrai a estilização de um ícone para menu-ferramenta.
 * Também implementa a possibilidade de exibição de um `badge` ao lado do ícone, através da propriedade `contador`.
 */
export declare class MenuFerramentaIcone implements ComponentInterface {
    /**
     * Valor que será exibido em uma "badge" próximo ao ícone
     */
    readonly contador: number;
    /**
     * Ícone conforme biblioteca `"Material Design Icons"`
     */
    readonly icone: string;
    /**
     * Define se a estilização é "mobile". Por padrão é "desktop".
     */
    readonly mobile: boolean;
    render(): any;
}
