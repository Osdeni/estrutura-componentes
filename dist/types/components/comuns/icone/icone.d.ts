import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class Icone implements ComponentInterface {
    /**
     * Identificador do ícone conforme biblioteca `"Material Design Icons"`
     */
    readonly icone: string;
    /**
     * Tamanho em pixels, no mesmo formato do `"font-size"` em CSS.
     * Por padrão irá herdar do contexto inserido.
     */
    readonly tamanho: string;
    /**
     * Cor de preenchimento, no mesmo formato do `"color"` em CSS.
     * Por padrão irá herdar do contexto inserido.
     */
    readonly cor?: string;
    /**
     * Especifica o label a ser utilizado para acessibilidade.
     * Por padrão irá assumir o nome do ícone.
     */
    ariaLabel?: string;
    connectedCallback(): void;
    carregarIcone(): void;
    render(): any;
}
