import { ComponentInterface } from '../../stencil-public-runtime';
import { AuthorizationConfig } from '../../global/interfaces';
import { Produto } from './marca-produto.interfaces';
/**
 * Este componente exibe o logo da Betha e o nome do produto
 *
 * Este componente foi elaborado para comportar o slot de "menu_marca_produto"
 */
export declare class MarcaProduto implements ComponentInterface {
    private activeTimeoutHandler;
    private tracker;
    produtos: Array<Produto>;
    isBuscandoProdutos: boolean;
    isApiIndisponivel: boolean;
    isDropdownProdutosAberto: boolean;
    isDispositivoMovel: boolean;
    /**
     * Nome do produto
     */
    readonly produto: string;
    /**
     * Configuração de autorização. É necessária para o componente poder se autentizar com os serviços.
     */
    readonly authorization: AuthorizationConfig;
    /**
     * Define se o componente exibirá os produtos, condicionando a busca. Caso informado `false` não irá buscar por produtos.
     */
    readonly exibirProdutos?: boolean;
    /**
     * URL para a API de user accounts. Por padrão irá obter do env.js
     */
    readonly userAccountsApi?: string;
    /**
     * URL para home da suite de usuários. Por padrão irá obter do env.js
     */
    readonly suiteHome?: string;
    /**
     * URL para a home da betha store. Por padrão irá obter do env.js
     */
    readonly storeHome?: string;
    connectedCallback(): void;
    onWindowResize(): void;
    watchExibirProdutos(novoValor: boolean): Promise<void>;
    private buscarProdutos;
    private getSuiteHome;
    private getStoreHome;
    private getUserAccountsApi;
    private isConfiguracaoApiInconsistente;
    private configurarPropriedadesResponsivas;
    private cancelarTimeoutAtivo;
    private alterarEstadoAberto;
    private onMouseOverMenuProduto;
    private onMouseLeaveMenuProduto;
    private onMouseOverToggleProduto;
    private onToggleAberto;
    private onClickFechar;
    private openLink;
    private getClassPorLinhaProduto;
    render(): any;
}
