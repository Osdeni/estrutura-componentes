import { Component, Host, State, Element, h, Prop, Watch, Listen } from '@stencil/core';
import { isNill } from '../../../utils/functions';
import { PromiseTracker } from '../../../utils/promise-tracker';
/**
 * Este componente permite compor uma lista de seleção de contexto.
 *
 * @slot sem_resultado - Permite customizar a área de sem resultados
 * @slot cabecalho - Permite customizar o cabecalho
 * @slot rodape - Permite customizar o rodape
 */
export class SelecaoContexto {
    constructor() {
        this.tracker = new PromiseTracker((active) => {
            this.isBuscandoItens = active;
        });
        this.itens = [];
        this.itensFiltrados = [];
        this.possuiSlotSemResultadoDeclarado = false;
        this.buscarItens = async () => {
            if (isNill(this.buscar)) {
                return;
            }
            const promise = this.buscar()
                .then((itens) => {
                this.itens = [...itens];
                this.itensFiltrados = [...itens];
            });
            this.tracker.addPromise(promise);
        };
        this.onSelecionar = (event, item) => {
            event.preventDefault();
            this.selecionar(item);
        };
        this.onInputSearch = (event) => {
            this.termoPesquisa = event.target.value;
            this.itensFiltrados = this.itens
                .filter(item => item.descricao && item.descricao.toUpperCase().includes(this.termoPesquisa.toUpperCase()));
        };
        this.possuiImagemAvatar = (item) => {
            return item.imagemAvatar !== undefined;
        };
        this.possuiIcone = (item) => {
            return item.icone !== undefined;
        };
        this.getTipoEmptyState = () => {
            if (this.possuiSlotSemResultadoDeclarado) {
                return null;
            }
            if (this.termoPesquisa !== undefined && this.termoPesquisa.length > 0) {
                return { registrosPesquisa: true };
            }
            return { registros: true };
        };
        this.isElementLink = (element) => element.tagName === 'A';
        this.isElementInput = (element) => element.tagName === 'INPUT';
    }
    connectedCallback() {
        this.configurarPresencaSemResultado();
        this.buscarItens();
    }
    componentDidRender() {
        if (!this.isBuscandoItens) {
            this.setInputFocus();
        }
    }
    handleKeyDown(event) {
        if (event.key === 'ArrowUp') {
            this.handleArrowUp();
        }
        else if (event.key === 'ArrowDown') {
            this.handleArrowDown(event);
        }
    }
    /**
     * Define a configuração do componente
     *
     * @param configuracao Configuração do componente
     */
    async watchBuscar() {
        this.buscarItens();
    }
    async setInputFocus() {
        const input = this.el.shadowRoot.querySelector('input');
        if (isNill(input)) {
            return;
        }
        input.focus();
    }
    configurarPresencaSemResultado() {
        this.possuiSlotSemResultadoDeclarado = this.el.querySelector('[slot="sem_resultado"]') !== null;
    }
    handleArrowDown(event) {
        const activeElement = this.el.shadowRoot.activeElement;
        if (this.isElementInput(activeElement)) {
            // Evita que o primeiro scroll do container cubra o primeiro item selecionado
            event.preventDefault();
            const listElement = this.el.shadowRoot.querySelector('ul');
            if (!isNill(listElement.firstElementChild)) {
                this.setFocusListItem(listElement.firstElementChild);
            }
        }
        if (this.isElementLink(activeElement)) {
            if (isNill(activeElement.parentNode)) {
                return;
            }
            const nextSibling = activeElement.parentNode.nextSibling;
            this.setFocusListItem(nextSibling);
        }
    }
    handleArrowUp() {
        const activeElement = this.el.shadowRoot.activeElement;
        if (activeElement.getAttribute('tabindex') === '1') {
            this.el.shadowRoot.querySelector('input').focus();
        }
        if (this.isElementLink(activeElement)) {
            if (isNill(activeElement.parentNode)) {
                return;
            }
            const previousListItem = activeElement.parentNode.previousSibling;
            this.setFocusListItem(previousListItem);
        }
    }
    setFocusListItem(listItem) {
        if (isNill(listItem)) {
            return;
        }
        const listItemFocusableElement = listItem.querySelector('a');
        if (isNill(listItemFocusableElement)) {
            return;
        }
        listItemFocusableElement.focus();
    }
    render() {
        var _a;
        return (h(Host, null,
            h("section", { class: "selecao-contexto" },
                !this.isBuscandoItens && (h("slot", { name: "cabecalho" })),
                !this.isBuscandoItens && (h("div", { class: "selecao-contexto__search" },
                    h("input", { type: "text", class: "form-control", placeholder: (_a = this.placeholderPesquisa) !== null && _a !== void 0 ? _a : 'Digite os termos para pesquisar', tabindex: "1", value: this.termoPesquisa, onInput: this.onInputSearch, disabled: this.isBuscandoItens, "aria-label": "Digite os termos para pesquisar" }))),
                h("bth-empty-state", Object.assign({}, this.getTipoEmptyState(), { show: !this.isBuscandoItens && this.itensFiltrados.length <= 0 }), this.possuiSlotSemResultadoDeclarado && (h("slot", { name: "sem_resultado" }))),
                h("div", { class: "selecao-contexto__body" },
                    this.isBuscandoItens && (h("div", { class: "selecao-contexto__body--loader" },
                        h("bth-loader", null))),
                    !this.isBuscandoItens && (h("ul", { id: "lista-contexto" }, this.itensFiltrados.map((item, index) => (h("li", { key: item.id, onClick: event => this.onSelecionar(event, item) },
                        h("a", { href: "", tabindex: index + 1 },
                            this.possuiImagemAvatar(item) && (h("bth-avatar", { src: item.imagemAvatar, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })),
                            this.possuiIcone(item) && (h("bth-avatar", { icone: item.icone, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })),
                            !this.possuiImagemAvatar(item) && !this.possuiIcone(item) && (h("bth-avatar", { iniciais: item.descricao, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })),
                            h("section", null,
                                h("h4", { title: item.descricao }, item.descricao),
                                h("p", { title: item.complemento }, item.complemento))))))))),
                !this.isBuscandoItens && (h("footer", null,
                    h("slot", { name: "rodape" }))))));
    }
    static get is() { return "bth-selecao-contexto"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["selecao-contexto.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["selecao-contexto.css"]
    }; }
    static get properties() { return {
        "placeholderPesquisa": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Placeholder para o input de pesquisa"
            },
            "attribute": "placeholder-pesquisa",
            "reflect": false
        },
        "buscar": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "() => Promise<ItemSelecaoContexto[]>",
                "resolved": "() => Promise<ItemSelecaoContexto[]>",
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "ItemSelecaoContexto": {
                        "location": "import",
                        "path": "./selecao-contexto.interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "M\u00E9todo para buscar os itens de sele\u00E7\u00E3o"
            }
        },
        "selecionar": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(item: ItemSelecaoContexto) => Promise<any> | void",
                "resolved": "(item: ItemSelecaoContexto) => void | Promise<any>",
                "references": {
                    "ItemSelecaoContexto": {
                        "location": "import",
                        "path": "./selecao-contexto.interfaces"
                    },
                    "Promise": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "M\u00E9todo executado ao selecionar algum item da lista"
            }
        }
    }; }
    static get states() { return {
        "isBuscandoItens": {},
        "itens": {},
        "itensFiltrados": {},
        "termoPesquisa": {},
        "possuiSlotSemResultadoDeclarado": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "buscar",
            "methodName": "watchBuscar"
        }]; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
