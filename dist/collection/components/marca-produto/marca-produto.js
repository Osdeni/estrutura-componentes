import { Component, Listen, State, h, Prop, Watch } from '@stencil/core';
import { Api, isValidAuthorizationConfig } from '../../global/api';
import { TIMEOUT_INTERACOES } from '../../global/constants';
import { isNill, isDispositivoMovel } from '../../utils/functions';
import { PromiseTracker } from '../../utils/promise-tracker';
/**
 * Este componente exibe o logo da Betha e o nome do produto
 *
 * Este componente foi elaborado para comportar o slot de "menu_marca_produto"
 */
export class MarcaProduto {
    constructor() {
        this.tracker = new PromiseTracker((active) => {
            this.isBuscandoProdutos = active;
        });
        this.produtos = [];
        this.isBuscandoProdutos = false;
        this.isApiIndisponivel = false;
        this.isDropdownProdutosAberto = false;
        this.isDispositivoMovel = false;
        /**
         * Define se o componente exibirá os produtos, condicionando a busca. Caso informado `false` não irá buscar por produtos.
         */
        this.exibirProdutos = false;
        this.onMouseOverMenuProduto = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarTimeoutAtivo();
            this.alterarEstadoAberto(true);
        };
        this.onMouseLeaveMenuProduto = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarTimeoutAtivo();
            this.alterarEstadoAberto(false);
        };
        this.onMouseOverToggleProduto = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarTimeoutAtivo();
        };
        this.onToggleAberto = () => {
            this.cancelarTimeoutAtivo();
            if (!this.exibirProdutos) {
                return;
            }
            if (this.isDispositivoMovel && this.isDropdownProdutosAberto) {
                return;
            }
            this.isDropdownProdutosAberto = !this.isDropdownProdutosAberto;
        };
        this.onClickFechar = (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.isDropdownProdutosAberto = false;
        };
        this.openLink = (event, url) => {
            event.preventDefault();
            window.open(url, '_blank');
        };
        this.getClassPorLinhaProduto = (product) => {
            var _a, _b;
            return (_b = (_a = product === null || product === void 0 ? void 0 : product.serviceLine) === null || _a === void 0 ? void 0 : _a.abbreviation) !== null && _b !== void 0 ? _b : '';
        };
    }
    connectedCallback() {
        this.configurarPropriedadesResponsivas();
        if (this.exibirProdutos) {
            this.buscarProdutos();
        }
    }
    onWindowResize() {
        this.configurarPropriedadesResponsivas();
    }
    async watchExibirProdutos(novoValor) {
        if (novoValor) {
            this.buscarProdutos();
        }
    }
    async buscarProdutos() {
        if (this.isConfiguracaoApiInconsistente()) {
            console.warn('[bth-marca-produto] O endereço do serviço de contas do usuário e credenciais de autenticação devem ser informados. Consulte a documentação do componente.');
            this.isApiIndisponivel = true;
            return;
        }
        this.isApiIndisponivel = false;
        const authorization = this.authorization.getAuthorization();
        const UserAccountsApi = new Api(authorization, this.authorization.handleUnauthorizedAccess, `${this.getUserAccountsApi()}/api`);
        const promise = UserAccountsApi.request('GET', `access/${authorization.accessId}/systems`)
            .then(produtos => {
            this.produtos = produtos.filter((produto) => produto.id !== authorization.systemId);
        })
            .catch(() => {
            this.isApiIndisponivel = true;
        });
        this.tracker.addPromise(promise);
    }
    getSuiteHome() {
        var _a, _b, _c, _d, _e;
        if (!isNill(this.suiteHome)) {
            return this.suiteHome;
        }
        if ('___bth' in window) {
            return (_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['suite-ui']) === null || _d === void 0 ? void 0 : _d.home) === null || _e === void 0 ? void 0 : _e.host;
        }
        return null;
    }
    getStoreHome() {
        var _a, _b, _c, _d, _e;
        if (!isNill(this.storeHome)) {
            return this.storeHome;
        }
        if ('___bth' in window) {
            return (_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['studio-ui']) === null || _d === void 0 ? void 0 : _d.v1) === null || _e === void 0 ? void 0 : _e.store;
        }
        return null;
    }
    getUserAccountsApi() {
        var _a, _b, _c, _d, _e;
        if (!isNill(this.userAccountsApi)) {
            return this.userAccountsApi;
        }
        if ('___bth' in window) {
            return (_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['user-accounts']) === null || _d === void 0 ? void 0 : _d.v1) === null || _e === void 0 ? void 0 : _e.host;
        }
        return null;
    }
    isConfiguracaoApiInconsistente() {
        if (isNill(this.getUserAccountsApi())) {
            return true;
        }
        if (!isValidAuthorizationConfig(this.authorization)) {
            return true;
        }
        return false;
    }
    configurarPropriedadesResponsivas() {
        this.isDispositivoMovel = isDispositivoMovel();
    }
    cancelarTimeoutAtivo() {
        if (this.activeTimeoutHandler !== undefined) {
            clearTimeout(this.activeTimeoutHandler);
            this.activeTimeoutHandler = undefined;
        }
    }
    alterarEstadoAberto(opened) {
        this.activeTimeoutHandler = window.setTimeout(() => {
            this.isDropdownProdutosAberto = opened;
            this.activeTimeoutHandler = undefined;
        }, TIMEOUT_INTERACOES);
    }
    render() {
        const contemProdutos = this.produtos && this.produtos.length > 0;
        return (h("section", { class: `marca-produto ${this.isDropdownProdutosAberto ? 'marca-produto--active' : ''}`, onClick: this.onToggleAberto, onMouseLeave: this.onMouseLeaveMenuProduto, onMouseOver: this.onMouseOverToggleProduto, "aria-expanded": `${this.isDropdownProdutosAberto}`, "aria-controls": "marca_produto_detalhes" },
            h("header", { id: "produto_description", title: this.produto }, this.produto),
            this.exibirProdutos && (h("div", { id: "marca_produto_detalhes", class: `marca-produto__detalhes ${this.isDropdownProdutosAberto ? 'marca-produto__detalhes--show' : ''}`, onMouseOver: this.onMouseOverMenuProduto, onMouseLeave: this.onMouseLeaveMenuProduto, "aria-hidden": `${!this.isDropdownProdutosAberto}`, "aria-labelledby": "produto_description", role: "region" },
                h("div", { class: "marca-produto__detalhes-solucoes" },
                    h("div", { class: "marca-produto__detalhes-solucoes__header" },
                        h("h4", null, "Mais produtos"),
                        contemProdutos && (h("a", { href: this.getSuiteHome(), target: "_blank", title: "Ver todos", rel: "noreferrer" }, "Ver todos")),
                        this.isDispositivoMovel && (h("button", { onClick: this.onClickFechar },
                            h("bth-icone", { icone: "close" })))),
                    h("div", { class: "marca-produto__detalhes-solucoes__body" },
                        h("div", { class: `loader-wrapper ${this.isBuscandoProdutos ? 'loader-wrapper--show' : ''}` },
                            h("bth-loader", null)),
                        !this.isBuscandoProdutos && !this.isApiIndisponivel && contemProdutos && (h("ul", { class: "marca-produto__detalhes-solucoes__list" }, this.produtos && this.produtos.map((produto, index) => {
                            return (h("li", { key: index, id: `marca_produto_item_${produto.id}` },
                                h("button", { class: "marca-produto__detalhes-card marca-produto__detalhes-card--bordered marca-produto__detalhes-card--clickable", onClick: event => this.openLink(event, produto.url) },
                                    h("div", { class: "marca-produto__detalhes-card__body" },
                                        h("div", { class: `marca-produto__detalhes__brand ${this.getClassPorLinhaProduto(produto)}` },
                                            h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 231.73 251.78" },
                                                h("defs", null),
                                                h("title", null, produto.name),
                                                h("g", { "data-name": "Camada 2" },
                                                    h("g", { "data-name": "Camada 1" },
                                                        h("path", { class: "cls-1", d: "M182.83,119.72c3.06,1.55,4.76,2.35,6.4,3.25,4.64,2.57,9.47,4.88,13.85,7.84,16.93,11.42,23.41,27.41,20.69,47.56-4,29.37-21.21,48.42-46.92,60.86-17.92,8.66-37.1,12.31-56.87,12.43-37.93.22-75.86.07-113.8.05-1.88,0-3.77-.27-6.18-.46,2.13-12.49,4.15-24.59,6.26-36.67Q18.32,145.39,30.42,76.2c3.29-18.77,6.72-37.53,9.82-56.33.6-3.67,2-5.29,5.63-6.24a388,388,0,0,1,60.5-11C121,1.23,135.74.29,150.44,0a106,106,0,0,1,39.06,6.7c9.61,3.57,18.4,8.49,25.75,15.74,20.84,20.56,22.11,55.65,2.68,76.07-7.27,7.64-16.21,12.89-25.83,17C189.47,116.71,186.93,117.9,182.83,119.72ZM62.14,210.82c2.25.24,3.66.52,5.07.52,19.32,0,38.65.23,58-.12a57.2,57.2,0,0,0,16.3-2.92c18.25-5.94,28.91-23.37,26.44-42.41-1.45-11.13-7.89-18.63-18.88-21.18A67,67,0,0,0,134.69,143c-17.87-.2-35.75-.1-53.62-.06-2.1,0-4.19.3-6.76.5ZM92.14,43C88.81,54.18,82,97.74,82.75,103.3a16.68,16.68,0,0,0,2.71.46c17.16,0,34.33.38,51.48-.08,11.23-.3,21-4.77,29.08-12.91,9-9.13,11.51-19.84,8-32-3.34-11.61-12.07-17-23.25-19.13-19.91-3.74-39.34.53-58.66,3.32Z" }))))),
                                        h("div", { class: "marca-produto__detalhes__name block-text--hidden", title: produto.name }, produto.name)))));
                        }))),
                        !this.isBuscandoProdutos && !contemProdutos && (h("div", { class: "empty-state-container" },
                            !this.isApiIndisponivel && ([
                                h("div", { class: "empty-list-store" }),
                                h("h3", null,
                                    "Conhe\u00E7a outros produtos dispon\u00EDveis. Acesse os ",
                                    h("a", { href: `${this.getStoreHome()}/#/pesquisa?identificador=TIPO&coluna=plataforma.chave&valor=web`, target: "_blank", rel: "noreferrer" }, " sistemas da entidade"),
                                    " ou",
                                    h("a", { href: `${this.getStoreHome()}/#/pesquisa?identificador=TIPO&coluna=plataforma.chave&valor=web`, target: "_blank", rel: "noreferrer" },
                                        " explore mais solu\u00E7\u00F5es na Betha Store ",
                                        h("bth-icone", { icone: "open-in-new" })))
                            ]),
                            this.isApiIndisponivel && ([
                                h("div", { class: "empty-inconsistency" }),
                                h("h3", null, "A sele\u00E7\u00E3o de produtos est\u00E1 temporariamente indispon\u00EDvel")
                            ])))))))));
    }
    static get is() { return "bth-marca-produto"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["marca-produto.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["marca-produto.css"]
    }; }
    static get properties() { return {
        "produto": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Nome do produto"
            },
            "attribute": "produto",
            "reflect": false
        },
        "authorization": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "AuthorizationConfig",
                "resolved": "AuthorizationConfig",
                "references": {
                    "AuthorizationConfig": {
                        "location": "import",
                        "path": "../../global/interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Configura\u00E7\u00E3o de autoriza\u00E7\u00E3o. \u00C9 necess\u00E1ria para o componente poder se autentizar com os servi\u00E7os."
            }
        },
        "exibirProdutos": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Define se o componente exibir\u00E1 os produtos, condicionando a busca. Caso informado `false` n\u00E3o ir\u00E1 buscar por produtos."
            },
            "attribute": "exibir-produtos",
            "reflect": false,
            "defaultValue": "false"
        },
        "userAccountsApi": {
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
                "text": "URL para a API de user accounts. Por padr\u00E3o ir\u00E1 obter do env.js"
            },
            "attribute": "user-accounts-api",
            "reflect": false
        },
        "suiteHome": {
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
                "text": "URL para home da suite de usu\u00E1rios. Por padr\u00E3o ir\u00E1 obter do env.js"
            },
            "attribute": "suite-home",
            "reflect": false
        },
        "storeHome": {
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
                "text": "URL para a home da betha store. Por padr\u00E3o ir\u00E1 obter do env.js"
            },
            "attribute": "store-home",
            "reflect": false
        }
    }; }
    static get states() { return {
        "produtos": {},
        "isBuscandoProdutos": {},
        "isApiIndisponivel": {},
        "isDropdownProdutosAberto": {},
        "isDispositivoMovel": {}
    }; }
    static get watchers() { return [{
            "propName": "exibirProdutos",
            "methodName": "watchExibirProdutos"
        }]; }
    static get listeners() { return [{
            "name": "resize",
            "method": "onWindowResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
