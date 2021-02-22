import { r as registerInstance, h, H as Host, g as getElement } from './index-97eb0dde.js';
import { P as PromiseTracker, i as isNill } from './promise-tracker-7ca963d0.js';

const selecaoContextoCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.selecao-contexto{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 auto}.selecao-contexto ::slotted(h3){margin:10px 0;font-size:20px;font-weight:500}.selecao-contexto__search{display:-ms-inline-flexbox !important;display:inline-flex !important;position:relative;width:100%;margin-bottom:10px}.selecao-contexto__search input{border:1px solid silver;border-radius:2px;-webkit-box-shadow:none;box-shadow:none;color:var(--bth-app-gray-dark-30);font-size:13px;width:100%;height:34px;padding:6px 12px;background-color:var(--bth-app-gray-light-40);display:block;margin:0}.selecao-contexto__search input:focus{border-color:var(--bth-app-blue);-webkit-box-shadow:none;box-shadow:none;outline:none}.selecao-contexto__search input[disabled]{background-color:var(--bth-app-gray-light-20);border-color:var(--bth-app-gray);color:var(--bth-app-gray-dark-10);cursor:not-allowed}.selecao-contexto__body{max-height:480px;overflow-y:auto}.selecao-contexto__body--loader{height:200px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.selecao-contexto__body ul li{width:100%;outline:none;position:relative}.selecao-contexto__body ul li:not(:last-child){margin-bottom:8px}.selecao-contexto__body ul li bth-icone{position:absolute;top:42px;left:42px;width:20px;height:20px;padding:0px 2px;background:var(--bth-app-gray-light-40);border-radius:50%;font-size:16px;text-align:center;line-height:1.3 !important;z-index:1}.selecao-contexto__body ul li a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;cursor:pointer;border-radius:2px;background-color:var(--bth-app-gray-light-30);width:100%;padding:12px;text-decoration:none;color:var(--bth-app-gray-dark-30);outline:none}.selecao-contexto__body ul li a section{padding:0 12px}.selecao-contexto__body ul li a section h4{font-size:18px;font-weight:500;line-height:1.1}.selecao-contexto__body ul li a section p{margin-top:6px;color:var(--bth-app-gray-dark-20);font-size:12px;line-height:1.5}.selecao-contexto__body ul li a:focus{-webkit-box-shadow:inset 0 0 0 1px var(--bth-app-blue);box-shadow:inset 0 0 0 1px var(--bth-app-blue)}.selecao-contexto__body ul li a:hover{background-color:var(--bth-app-gray-light-10)}.selecao-contexto__body ul li span{padding:0 12px;font-size:16px}.selecao-contexto ::-webkit-scrollbar{width:12px !important;background-color:transparent !important}.selecao-contexto ::-webkit-scrollbar-track,.selecao-contexto ::-webkit-scrollbar-thumb{background-clip:content-box !important}.selecao-contexto ::-webkit-scrollbar-track{background:unset !important;border-right:6px solid var(--bth-app-gray-light-30) !important}.selecao-contexto ::-webkit-scrollbar-thumb{border-left:6px solid rgba(255, 255, 255, 0) !important;border-radius:0 !important}@media (min-width: 576px){.selecao-contexto{width:100%}}@media (min-width: 768px){.selecao-contexto{width:80%}}@media (min-width: 992px){.selecao-contexto{width:55%}}@media (min-width: 1200px){.selecao-contexto{width:45%}}";

const SelecaoContexto = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("section", { class: "selecao-contexto" }, !this.isBuscandoItens && (h("slot", { name: "cabecalho" })), !this.isBuscandoItens && (h("div", { class: "selecao-contexto__search" }, h("input", { type: "text", class: "form-control", placeholder: (_a = this.placeholderPesquisa) !== null && _a !== void 0 ? _a : 'Digite os termos para pesquisar', tabindex: "1", value: this.termoPesquisa, onInput: this.onInputSearch, disabled: this.isBuscandoItens, "aria-label": "Digite os termos para pesquisar" }))), h("bth-empty-state", Object.assign({}, this.getTipoEmptyState(), { show: !this.isBuscandoItens && this.itensFiltrados.length <= 0 }), this.possuiSlotSemResultadoDeclarado && (h("slot", { name: "sem_resultado" }))), h("div", { class: "selecao-contexto__body" }, this.isBuscandoItens && (h("div", { class: "selecao-contexto__body--loader" }, h("bth-loader", null))), !this.isBuscandoItens && (h("ul", { id: "lista-contexto" }, this.itensFiltrados.map((item, index) => (h("li", { key: item.id, onClick: event => this.onSelecionar(event, item) }, h("a", { href: "", tabindex: index + 1 }, this.possuiImagemAvatar(item) && (h("bth-avatar", { src: item.imagemAvatar, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })), this.possuiIcone(item) && (h("bth-avatar", { icone: item.icone, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })), !this.possuiImagemAvatar(item) && !this.possuiIcone(item) && (h("bth-avatar", { iniciais: item.descricao, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })), h("section", null, h("h4", { title: item.descricao }, item.descricao), h("p", { title: item.complemento }, item.complemento))))))))), !this.isBuscandoItens && (h("footer", null, h("slot", { name: "rodape" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "buscar": ["watchBuscar"]
    }; }
};
SelecaoContexto.style = selecaoContextoCss;

export { SelecaoContexto as bth_selecao_contexto };
