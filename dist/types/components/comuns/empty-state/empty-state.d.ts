import { ComponentInterface } from '../../../stencil-public-runtime';
export declare class EmptyState implements ComponentInterface {
    /**
     * Define se o empty state está visível
     */
    readonly show: boolean;
    /**
     * Define se o empty state é para registros
     */
    readonly registros: boolean;
    /**
     * Define se o empty state é para registros com pesquisa
     */
    readonly registrosPesquisa: boolean;
    /**
    * Define se o empty state é para conexão online
    */
    readonly online: boolean;
    /**
    * Define se o empty state é para conexão offline
    */
    readonly offline: boolean;
    /**
    * Define se o empty state é para página não encontrada
    */
    readonly paginaNaoEncontrada: boolean;
    /**
    * Define se o empty state é de tamanho pequeno
    */
    readonly pequeno: boolean;
    render(): any;
}
