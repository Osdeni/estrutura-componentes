import { Host, Component, Element, State, Listen, Method, Prop, h, Event, Watch, } from '@stencil/core';
import { TIMEOUT_INTERACOES, MSG_SEM_PERMISSAO_RECURSO, } from '../../global/constants';
import { isNill, isDispositivoMovel } from '../../utils/functions';
import { SLOT, LOCAL_STORAGE_KEY } from './app.constants';
/**
 * Permite configurar opções de navegação nos modelos de menu horizontal e vertical.
 * Possui áreas pré-definidas que permite compor as aplicações.
 *
 * @slot menu_marca_produto - Área da marca e produto, precede o menu horizontal e geralmente contém a logo e nome do produto
 * @slot menu_ferramentas - Área de ferramentas, fica na lateral direita do menu horizontal e geralmente comporta extensões da plataforma
 * @slot container_contexto - Área do contexto logo abaixo do menu horizontal, permite compor componentes como a barra de contexto, ja pré estiliza <ul>
 * @slot container_aplicacao - Área servindo como container para aplicação
 */
export class App {
    constructor() {
        this.ferramentasSinalizacaoPendente = {};
        this.isMenuVerticalFlutuando = false;
        this.isMenuVerticalAberto = true;
        this.isDispositivoMovel = false;
        this.isPainelFerramentasDispositivoMovelAberto = false;
        this.possuiSinalizacaoPendente = false;
        /**
         * Opções de navegação do menu
         */
        this.opcoes = [];
        /**
         * Define se as opções do menu serão exibidas no formato "vertical", caso contrário serão exibidas no formato "horizontal"
         */
        this.menuVertical = false;
        /**
         * Permite customizar a cor de fundo da barra do menu. Por padrão segue a cor da linha dos produtos.
         */
        this.menuBgColor = '#142c48';
        this.salvarEstadoLocalStorage = () => {
            try {
                const value = {
                    aberto: this.isMenuVerticalAberto,
                    flutuando: this.isMenuVerticalFlutuando
                };
                const valueStringfied = JSON.stringify(value);
                localStorage.setItem(LOCAL_STORAGE_KEY, valueStringfied);
            }
            catch (err) {
                console.error('Erro ao armazenar preferencia de menu do usuario', err);
            }
        };
        this.recuperarEstadoLocalStorage = () => {
            try {
                const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
                if (stored === null) {
                    return null;
                }
                return JSON.parse(stored);
            }
            catch (err) {
                console.error('Erro ao armazenar preferencia de menu do usuario', err);
            }
        };
        this.onMouseOverMenuVertical = () => {
            this.cancelarTimeoutRecolhimentoMenu();
            if (this.isDispositivoMovel) {
                return;
            }
            if (this.isMenuVerticalAberto) {
                return;
            }
            this.alterarEstadoRecolhimentoMenuVertical(false);
        };
        this.onMouseLeaveMenuVertical = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            if (this.isMenuVerticalAberto && !this.isMenuVerticalFlutuando) {
                return;
            }
            this.cancelarTimeoutRecolhimentoMenu();
            this.alterarEstadoRecolhimentoMenuVertical(true);
        };
        this.onMouseOverBotaoMenu = () => {
            this.cancelarTimeoutRecolhimentoMenu();
        };
        this.onMouseLeaveBotaoMenu = () => {
            if (this.isMenuVerticalRecolhido) {
                return;
            }
            if (this.isMenuVerticalAberto && !this.isMenuVerticalFlutuando) {
                return;
            }
            this.cancelarTimeoutRecolhimentoMenu();
            this.alterarEstadoRecolhimentoMenuVertical(true);
        };
        this.onTogglePainelFerramentas = (event) => {
            event.preventDefault();
            this.isPainelFerramentasDispositivoMovelAberto = !this.isPainelFerramentasDispositivoMovelAberto;
            if (this.isDispositivoMovel && this.isPainelFerramentasDispositivoMovelAberto) {
                this.isMenuVerticalAberto = false;
            }
            this.salvarEstadoLocalStorage();
        };
        this.onClickBotaoFixar = (event) => {
            event.preventDefault();
            this.isMenuVerticalFlutuando = !this.isMenuVerticalFlutuando;
            this.isMenuVerticalRecolhido = false;
            this.isMenuVerticalAberto = true;
            this.salvarEstadoLocalStorage();
        };
        this.onClickBotaoMenu = (event) => {
            event.preventDefault();
            if (this.isMenuVerticalFlutuando) {
                this.isMenuVerticalRecolhido = !this.isMenuVerticalRecolhido;
            }
            else {
                if (!this.isMenuVerticalRecolhido) {
                    this.isMenuVerticalAberto = false;
                }
                else {
                    this.isMenuVerticalAberto = !this.isMenuVerticalAberto;
                }
                this.isMenuVerticalRecolhido = !this.isMenuVerticalRecolhido;
            }
            // Caso o menu vertical for aberto no modo responsivo fecha o painel de ferramentas
            if (this.isDispositivoMovel && this.isMenuVerticalFlutuando) {
                this.isPainelFerramentasDispositivoMovelAberto = false;
            }
            this.salvarEstadoLocalStorage();
        };
    }
    connectedCallback() {
        this.setCorBackgroundCustomizado();
        this.setEstadoInicialMenu();
    }
    watchOpcoesChanged() {
        // Reseta estado inicial do menu toda vez que opções for alterado, evita reabertura de maneira inconsistente
        this.setEstadoInicialMenu();
    }
    onWindowResize() {
        this.setEstadoInicialMenu();
        if (!this.isDispositivoMovel) {
            this.isPainelFerramentasDispositivoMovelAberto = false;
        }
    }
    onConteudoSinalizado(event) {
        this.ferramentasSinalizacaoPendente[event.detail.origem] = event.detail.possui;
        this.possuiSinalizacaoPendente = this.possuiFerramentasSinalizadas();
    }
    onPainelLateralShow(event) {
        if (!this.isPainelFerramentasDispositivoMovelAberto) {
            return;
        }
        if (event.detail.fecharSobrepostos) {
            this.isPainelFerramentasDispositivoMovelAberto = false;
        }
    }
    onMenuHorizontalSelecionado(event) {
        const opcao = this.findOpcaoMenuById(event.detail.identificador);
        this.dispararEventoOpcaoSelecionada(opcao);
    }
    onMenuVerticalSelecionado(event) {
        const opcao = this.findOpcaoMenuById(event.detail.identificador, event.detail.identificadorPai);
        if (this.possuiSubmenus(opcao)) {
            this.opcoesMenu = this.opcoesMenu.map(opcaoMenu => {
                if (opcao.id === opcaoMenu.id) {
                    opcaoMenu.isRecolhido = !opcaoMenu.isRecolhido;
                }
                return opcaoMenu;
            });
        }
        else {
            if (this.isDispositivoMovel) {
                this.isMenuVerticalRecolhido = !this.isMenuVerticalRecolhido;
            }
            this.dispararEventoOpcaoSelecionada(opcao);
        }
    }
    dispararEventoOpcaoSelecionada(opcao) {
        const eventPayload = {
            id: opcao.id,
            descricao: opcao.descricao,
            rota: opcao.rota,
            contador: opcao.contador
        };
        this.opcaoMenuSelecionada.emit(eventPayload);
    }
    onChangeBanner() {
        let event = {
            possui: this.possuiBanner()
        };
        this.bannerAlterado.emit(event);
    }
    onChangemenuBgColor() {
        this.setCorBackgroundCustomizado();
    }
    /**
     * Define o estado de ativo para o menu do parâmetro
     *
     * @param identificador Identificador do menu
     */
    async setMenuAtivo(identificador) {
        if (this.possuiNavegacaoHorizontal()) {
            this.marcarAtivoMenuHorizontal(identificador);
        }
        if (this.possuiNavegacaoVertical()) {
            this.marcarAtivoMenuVertical(identificador);
        }
    }
    /**
     * Define o valor do contador de um item do menu
     *
     * @param identificador Identificador do item do menu
     * @param valor Valor do contador
     */
    async setContadorMenu(identificador, valor) {
        if (this.possuiNavegacaoVertical()) {
            this.opcoesMenu = this.opcoesMenu.map(opcao => {
                opcao.contador = opcao.id === identificador ? valor : opcao.contador;
                if (opcao.submenus !== undefined && opcao.submenus.length > 0) {
                    opcao.submenus = opcao.submenus.map(submenu => {
                        submenu.contador = submenu.id === identificador ? valor : submenu.contador;
                        return submenu;
                    });
                }
                return opcao;
            });
        }
        if (this.possuiNavegacaoHorizontal()) {
            this.opcoesMenu = this.opcoesMenu.map(opcao => {
                opcao.contador = opcao.id === identificador ? valor : opcao.contador;
                return opcao;
            });
        }
    }
    setCorBackgroundCustomizado() {
        if (this.menuBgColor === undefined) {
            return;
        }
        this.el.style.setProperty('--bth-app-menu-bg-color', this.menuBgColor.toString());
    }
    possuiSlotMarcaProduto() {
        return this.el.querySelector(`[slot="${SLOT.MARCA_PRODUTO}"]`) !== null;
    }
    possuiSlotFerramentas() {
        return this.el.querySelector(`[slot="${SLOT.FERRAMENTAS}"]`) !== null;
    }
    possuiSlotContexto() {
        return this.el.querySelector(`[slot="${SLOT.CONTEXTO}"]`) !== null;
    }
    possuiFerramentasSinalizadas() {
        const pending = Object.keys(this.ferramentasSinalizacaoPendente)
            .filter(key => this.ferramentasSinalizacaoPendente[key]);
        return pending.length > 0 || false;
    }
    possuiOpcoes() {
        return !isNill(this.opcoesMenu) && this.opcoesMenu.length > 0;
    }
    possuiBanner() {
        return !isNill(this.banner);
    }
    possuiNavegacaoVertical() {
        if (this.possuiOpcoes()) {
            return this.menuVertical || (!this.menuVertical && this.isDispositivoMovel);
        }
        return false;
    }
    possuiNavegacaoHorizontal() {
        return this.possuiOpcoes() && !this.menuVertical;
    }
    setEstadoInicialMenu() {
        this.opcoesMenu = [...this.opcoes];
        this.isDispositivoMovel = isDispositivoMovel();
        const estadoLocalStorage = this.recuperarEstadoLocalStorage();
        this.isPainelFerramentasDispositivoMovelAberto = false;
        this.isMenuVerticalFlutuando = estadoLocalStorage !== null ? estadoLocalStorage.flutuando : false;
        this.isMenuVerticalAberto = estadoLocalStorage !== null ? estadoLocalStorage.aberto : true;
        if (this.isMenuVerticalFlutuando) {
            this.isMenuVerticalRecolhido = true;
        }
        else {
            this.isMenuVerticalRecolhido = !this.isMenuVerticalAberto;
        }
        if (this.isDispositivoMovel) {
            this.isPainelFerramentasDispositivoMovelAberto = false;
            this.isMenuVerticalFlutuando = true;
            this.isMenuVerticalAberto = false;
            this.isMenuVerticalRecolhido = true;
        }
    }
    marcarAtivoMenuVertical(id) {
        this.opcoesMenu = this.opcoesMenu.map(opcao => {
            opcao.isAtivo = opcao.id === id;
            if (opcao.isAtivo) {
                this.validarPermissaoAcessarOpcaoMenu(opcao);
            }
            if (this.possuiSubmenus(opcao)) {
                opcao.submenus = opcao.submenus.map(submenu => {
                    submenu.isAtivo = submenu.id === id;
                    if (submenu.isAtivo) {
                        this.validarPermissaoAcessarOpcaoMenu(submenu);
                    }
                    if (submenu.isAtivo) {
                        opcao.isAtivo = true;
                    }
                    return submenu;
                });
                opcao.isRecolhido = opcao.submenus.filter(submenu => submenu.isAtivo).length <= 0;
            }
            return opcao;
        });
    }
    marcarAtivoMenuHorizontal(id) {
        this.opcoesMenu = this.opcoesMenu.map(opcao => {
            opcao.isAtivo = opcao.id === id;
            if (opcao.isAtivo) {
                this.validarPermissaoAcessarOpcaoMenu(opcao);
            }
            return opcao;
        });
    }
    findOpcaoMenuById(identificador, identificadorPai = null) {
        if (!isNill(identificadorPai)) {
            const menuPai = this.opcoesMenu.find(opcaoMenu => opcaoMenu.id === identificadorPai);
            if (!isNill(menuPai)) {
                return menuPai.submenus.find(submenu => submenu.id === identificador);
            }
        }
        return this.opcoesMenu.find(opcaoMenu => opcaoMenu.id === identificador);
    }
    possuiSubmenus(opcao) {
        return !isNill(opcao.submenus) && opcao.submenus.length > 0;
    }
    validarPermissaoAcessarOpcaoMenu(opcao) {
        if ('possuiPermissao' in opcao && !opcao.possuiPermissao) {
            throw new Error(MSG_SEM_PERMISSAO_RECURSO);
        }
    }
    cancelarTimeoutRecolhimentoMenu() {
        if (this.timeoutAtivoHandler !== undefined) {
            clearTimeout(this.timeoutAtivoHandler);
            this.timeoutAtivoHandler = undefined;
        }
    }
    alterarEstadoRecolhimentoMenuVertical(isMenuVerticalRecolhido) {
        this.timeoutAtivoHandler = window.setTimeout(() => {
            this.isMenuVerticalRecolhido = isMenuVerticalRecolhido;
            this.timeoutAtivoHandler = undefined;
        }, TIMEOUT_INTERACOES);
    }
    renderBannerSection() {
        return (h("header", { role: "banner", class: `banner ${this.possuiBanner() ? ` banner--show banner--${this.banner.tipo}` : ''}`, "aria-hidden": `${!this.possuiBanner()}`, "aria-expanded": `${this.possuiBanner()}` }, this.possuiBanner() && ([
            h("div", { class: "banner__icon" },
                h("bth-icone", { icone: this.banner.tipo === 'info' ? 'information' : 'alert' })),
            h("div", { class: "banner__content" },
                h("span", null, this.banner.texto),
                h("a", { href: this.banner.link, target: "_blank", title: "Mais informa\u00E7\u00F5es", rel: "noreferrer" }, "Mais informa\u00E7\u00F5es"))
        ])));
    }
    renderMenuHorizontal() {
        return (h("section", { class: "menu-horizontal" },
            h("div", { class: "menu-horizontal__body" },
                h("div", { class: "menu-horizontal__list" },
                    this.possuiNavegacaoVertical() && (h("div", { class: "menu-horizontal__item" },
                        h("a", { role: "button", href: "", class: `menu-vertical__toggle ${!this.isMenuVerticalRecolhido ? 'menu-vertical__toggle--opened' : ''}`, title: "Alternar exibi\u00E7\u00E3o do menu lateral", onClick: this.onClickBotaoMenu, onMouseLeave: this.onMouseLeaveBotaoMenu, onMouseOver: this.onMouseOverBotaoMenu, "aria-expanded": `${!this.isMenuVerticalRecolhido}`, "aria-pressed": `${!this.isMenuVerticalRecolhido}`, "aria-label": "Alternar exibi\u00E7\u00E3o do menu lateral" }))),
                    this.possuiSlotMarcaProduto() && (h("section", { class: "menu-horizontal__item" },
                        h("slot", { name: SLOT.MARCA_PRODUTO }))),
                    h("nav", { id: "menu_horizontal_list", class: "menu-horizontal__item menu-horizontal__item--has-list", "aria-label": "Navega\u00E7\u00E3o do menu horizontal", "aria-hidden": `${!this.possuiNavegacaoHorizontal()}` }, this.possuiNavegacaoHorizontal() && (h("ul", { role: "menubar", class: "menu-horizontal__list", "aria-label": "Navega\u00E7\u00E3o do menu horizontal" }, this.possuiNavegacaoHorizontal() && this.opcoesMenu.map((opcao, index) => (h("li", { role: "none" },
                        h("bth-menu-horizontal-item", { role: "menuitem", id: `menu_horizontal_item_${index}`, key: index, identificador: opcao.id, descricao: opcao.descricao, contador: opcao.contador, possuiPermissao: opcao.possuiPermissao, ativo: opcao.isAtivo }))))))),
                    h("section", { class: "menu-horizontal__item" },
                        h("nav", { class: "menu-ferramentas" },
                            !this.isDispositivoMovel && (h("slot", { name: SLOT.FERRAMENTAS })),
                            this.isDispositivoMovel && this.possuiSlotFerramentas() && (h("li", { role: "none" },
                                h("a", { role: "button", href: "", class: `menu-ferramentas__mobile-toggler ${this.isPainelFerramentasDispositivoMovelAberto ? 'menu-ferramentas__mobile-toggler--opened' : ''}`, onClick: this.onTogglePainelFerramentas, title: "Alternar exibi\u00E7\u00E3o painel de ferramentas", "aria-expanded": `${this.isPainelFerramentasDispositivoMovelAberto}`, "aria-pressed": `${this.isPainelFerramentasDispositivoMovelAberto}`, "aria-label": "Alternar exibi\u00E7\u00E3o painel de ferramentas" }, this.possuiSinalizacaoPendente && !this.isPainelFerramentasDispositivoMovelAberto && (h("span", { class: "badge badge-danger badge-danger--notificacao-small" })))))))),
                this.isDispositivoMovel && (h("nav", { class: `menu-ferramentas__mobile
                  ${this.isPainelFerramentasDispositivoMovelAberto ? 'menu-ferramentas__mobile--show' : ''}
                  ${this.possuiBanner() ? 'menu-ferramentas__mobile--banner' : ''}` },
                    h("slot", { name: SLOT.FERRAMENTAS }))))));
    }
    renderMenuVertical() {
        if (!this.possuiNavegacaoVertical()) {
            return;
        }
        return (h("aside", { class: `menu-vertical ${this.isMenuVerticalFlutuando ? ' menu-vertical--floating' : ''}
          ${this.isMenuVerticalRecolhido ? ' menu-vertical--collapsed' : ''}
          ${!this.isMenuVerticalFlutuando && !this.isMenuVerticalAberto && !this.isMenuVerticalRecolhido ? ' menu-vertical--collapsed menu-vertical--collapsed-hover' : ''}
        `, onMouseOver: this.onMouseOverMenuVertical, onMouseLeave: this.onMouseLeaveMenuVertical },
            h("nav", { class: "menu-vertical__body", "aria-label": "Op\u00E7\u00F5es de navega\u00E7\u00E3o do menu vertical" },
                h("ul", { role: "menubar", class: "menu-vertical__list" }, this.opcoesMenu.map((opcao, index) => (h("li", { role: "none" },
                    h("bth-menu-vertical-item", { role: "menuitem", id: `menu_vertical_item_${index}`, key: index, identificador: opcao.id, descricao: opcao.descricao, icone: opcao.icone, contador: opcao.contador, possuiPermissao: opcao.possuiPermissao, ativo: opcao.isAtivo, recolhido: opcao.isRecolhido, menuLateralRecolhido: this.isMenuVerticalRecolhido, submenus: opcao.submenus })))))),
            h("div", { class: `menu-vertical__footer ${this.isDispositivoMovel ? '' : 'menu-vertical__footer--show'}` },
                h("ul", { class: "menu-vertical__list" },
                    h("li", { class: "menu-vertical__item menu-vertical__item--floating" },
                        h("a", { href: "", onClick: this.onClickBotaoFixar },
                            h("bth-icone", { icone: "pin" }),
                            h("span", null, this.isMenuVerticalFlutuando ? 'Fixar' : 'Desafixar')))))));
    }
    renderAppContainer() {
        return (h("main", { class: "app-container" },
            this.possuiSlotContexto() && !this.isDispositivoMovel && (h("slot", { name: SLOT.CONTEXTO })),
            h("slot", { name: SLOT.APLICACAO })));
    }
    render() {
        return (h(Host, null,
            h("div", { class: "app" },
                this.renderBannerSection(),
                this.renderMenuHorizontal(),
                this.renderMenuVertical(),
                this.renderAppContainer())));
    }
    static get is() { return "bth-app"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["app.css"]
    }; }
    static get properties() { return {
        "opcoes": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Array<OpcaoMenu>",
                "resolved": "OpcaoMenu[]",
                "references": {
                    "Array": {
                        "location": "global"
                    },
                    "OpcaoMenu": {
                        "location": "import",
                        "path": "./app.interfaces"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Op\u00E7\u00F5es de navega\u00E7\u00E3o do menu"
            },
            "defaultValue": "[]"
        },
        "menuVertical": {
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
                "text": "Define se as op\u00E7\u00F5es do menu ser\u00E3o exibidas no formato \"vertical\", caso contr\u00E1rio ser\u00E3o exibidas no formato \"horizontal\""
            },
            "attribute": "menu-vertical",
            "reflect": false,
            "defaultValue": "false"
        },
        "menuBgColor": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Permite customizar a cor de fundo da barra do menu. Por padr\u00E3o segue a cor da linha dos produtos."
            },
            "attribute": "menu-bg-color",
            "reflect": false,
            "defaultValue": "'#142c48'"
        },
        "banner": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Banner",
                "resolved": "Banner",
                "references": {
                    "Banner": {
                        "location": "import",
                        "path": "./app.interfaces"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Permite definir um banner que \u00E9 exibido acima do menu"
            }
        }
    }; }
    static get states() { return {
        "isMenuVerticalRecolhido": {},
        "isMenuVerticalFlutuando": {},
        "isMenuVerticalAberto": {},
        "isDispositivoMovel": {},
        "isPainelFerramentasDispositivoMovelAberto": {},
        "opcoesMenu": {},
        "possuiSinalizacaoPendente": {}
    }; }
    static get events() { return [{
            "method": "bannerAlterado",
            "name": "bannerAlterado",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando o componente de menu possuir altera\u00E7\u00F5es na propriedade de banner"
            },
            "complexType": {
                "original": "MenuBannerAlteradoEvent",
                "resolved": "MenuBannerAlteradoEvent",
                "references": {
                    "MenuBannerAlteradoEvent": {
                        "location": "import",
                        "path": "./app.interfaces"
                    }
                }
            }
        }, {
            "method": "opcaoMenuSelecionada",
            "name": "opcaoMenuSelecionada",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando alguma op\u00E7\u00E3o do menu for selecionada"
            },
            "complexType": {
                "original": "OpcaoMenuSelecionadaEvent",
                "resolved": "OpcaoMenuSelecionadaEvent",
                "references": {
                    "OpcaoMenuSelecionadaEvent": {
                        "location": "import",
                        "path": "./app.interfaces"
                    }
                }
            }
        }]; }
    static get methods() { return {
        "setMenuAtivo": {
            "complexType": {
                "signature": "(identificador: IdentificadorOpcaoMenu) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "identificador Identificador do menu",
                                "name": "param"
                            }],
                        "text": "Identificador do menu"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "IdentificadorOpcaoMenu": {
                        "location": "import",
                        "path": "./app.interfaces"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Define o estado de ativo para o menu do par\u00E2metro",
                "tags": [{
                        "name": "param",
                        "text": "identificador Identificador do menu"
                    }]
            }
        },
        "setContadorMenu": {
            "complexType": {
                "signature": "(identificador: IdentificadorOpcaoMenu, valor: number) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "identificador Identificador do item do menu",
                                "name": "param"
                            }],
                        "text": "Identificador do item do menu"
                    }, {
                        "tags": [{
                                "text": "valor Valor do contador",
                                "name": "param"
                            }],
                        "text": "Valor do contador"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "IdentificadorOpcaoMenu": {
                        "location": "import",
                        "path": "./app.interfaces"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Define o valor do contador de um item do menu",
                "tags": [{
                        "name": "param",
                        "text": "identificador Identificador do item do menu"
                    }, {
                        "name": "param",
                        "text": "valor Valor do contador"
                    }]
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "opcoes",
            "methodName": "watchOpcoesChanged"
        }, {
            "propName": "banner",
            "methodName": "onChangeBanner"
        }, {
            "propName": "menuBgColor",
            "methodName": "onChangemenuBgColor"
        }]; }
    static get listeners() { return [{
            "name": "resize",
            "method": "onWindowResize",
            "target": "window",
            "capture": false,
            "passive": true
        }, {
            "name": "conteudoSinalizado",
            "method": "onConteudoSinalizado",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "painelLateralShow",
            "method": "onPainelLateralShow",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "menuHorizontalSelecionado",
            "method": "onMenuHorizontalSelecionado",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "menuVerticalSelecionado",
            "method": "onMenuVerticalSelecionado",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
