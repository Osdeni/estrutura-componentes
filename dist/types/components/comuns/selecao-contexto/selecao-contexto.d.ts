import { ComponentInterface } from '../../../stencil-public-runtime';
import { ItemSelecaoContexto } from './selecao-contexto.interfaces';
/**
 * Este componente permite compor uma lista de seleção de contexto.
 *
 * @slot sem_resultado - Permite customizar a área de sem resultados
 * @slot cabecalho - Permite customizar o cabecalho
 * @slot rodape - Permite customizar o rodape
 */
export declare class SelecaoContexto implements ComponentInterface {
    private tracker;
    el: HTMLBthSelecaoContextoElement;
    /**
     * Placeholder para o input de pesquisa
     */
    readonly placeholderPesquisa?: string;
    /**
     * Método para buscar os itens de seleção
     */
    readonly buscar: () => Promise<ItemSelecaoContexto[]>;
    /**
     * Método executado ao selecionar algum item da lista
     */
    readonly selecionar: (item: ItemSelecaoContexto) => Promise<any> | void;
    isBuscandoItens: boolean;
    itens: ItemSelecaoContexto[];
    itensFiltrados: ItemSelecaoContexto[];
    termoPesquisa: string;
    possuiSlotSemResultadoDeclarado: boolean;
    connectedCallback(): void;
    componentDidRender(): void;
    handleKeyDown(event: KeyboardEvent): void;
    /**
     * Define a configuração do componente
     *
     * @param configuracao Configuração do componente
     */
    watchBuscar(): Promise<void>;
    private setInputFocus;
    private buscarItens;
    private configurarPresencaSemResultado;
    private onSelecionar;
    private onInputSearch;
    private possuiImagemAvatar;
    private possuiIcone;
    private getTipoEmptyState;
    private isElementLink;
    private isElementInput;
    private handleArrowDown;
    private handleArrowUp;
    private setFocusListItem;
    render(): any;
}
