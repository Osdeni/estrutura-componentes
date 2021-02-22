import { Component, h, Element, State, Prop, Event, Listen, Watch, Method, Host } from '@stencil/core';
import { TIMEOUT_INTERACOES } from '../../../global/constants';
import { isDispositivoMovel } from '../../../utils/functions';
let idHandler = 0;
/**
 * Possibilita incluir conteúdo dinâmico em um painel lateral que sobrepõe o conteúdo da tela pela direita
 *
 * @slot - Conteúdo do painel lateral
 */
export class MenuPainelLateral {
    constructor() {
        this.isDispositivoMovel = false;
        this.menuPossuiBanner = false;
        // É utilizado para manter o <slot /> no DOM enquanto a animação do painel estiver ativa
        this.renderSlot = false;
        /**
         * Estado de visibilidade
         */
        this.show = false;
        this.onToggleShow = (event) => {
            event.stopPropagation();
            this.show = !this.show;
        };
        this.onCloseAll = (event) => {
            event.stopPropagation();
            this.dispatchFecharTodosEvent();
            this.show = !this.show;
        };
        this.onMouseOver = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarAberturaComAnimacao();
            this.setShowComAnimacao(true);
        };
        this.onMouseLeave = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarAberturaComAnimacao();
            this.setShowComAnimacao(false);
        };
    }
    showHandler() {
        this.painelLateralShow.emit({ show: this.show, origemId: this.uniqueId });
    }
    connectedCallback() {
        this.uniqueId = `painel_lateral_${idHandler++}`;
        this.configurarPropriedadesResponsivas();
        this.watchShow(this.show);
    }
    onWindowResize() {
        this.configurarPropriedadesResponsivas();
        this.setShowComAnimacao(false);
    }
    onBannerAlterado(event) {
        this.menuPossuiBanner = event.detail.possui;
    }
    onPainelLateralShow(event) {
        // Fecha o painel atual caso receba evento de outro painel lateral abrindo
        if (event.detail.show && this.uniqueId !== event.detail.origemId) {
            this.show = false;
        }
    }
    /**
     * Alterna o estado em aberto do painel para o valor do parâmetro após um timeout padrão de interações
     */
    async setShowComAnimacao(show) {
        this.timeoutAtivoHandler = window.setTimeout(() => {
            this.show = show;
            this.timeoutAtivoHandler = undefined;
        }, TIMEOUT_INTERACOES);
    }
    /**
     * Cancela o timeout de interação ativo caso exista
     */
    async cancelarAberturaComAnimacao() {
        if (this.timeoutAtivoHandler === undefined) {
            return;
        }
        clearTimeout(this.timeoutAtivoHandler);
        this.timeoutAtivoHandler = undefined;
    }
    /**
     * Fecha o painel lateral e emite evento para que outros sobrepostos sejam fechados.
     */
    async fecharPaineisAbertos() {
        this.dispatchFecharTodosEvent();
        this.show = false;
    }
    watchShow(novoValor) {
        if (novoValor) {
            this.renderSlot = this.show;
        }
        else {
            setTimeout(() => this.renderSlot = this.show, TIMEOUT_INTERACOES);
        }
    }
    dispatchFecharTodosEvent() {
        this.painelLateralShow.emit({
            show: false,
            fecharSobrepostos: true,
            origemId: this.uniqueId,
        });
    }
    configurarPropriedadesResponsivas() {
        this.isDispositivoMovel = isDispositivoMovel();
    }
    render() {
        var _a;
        return (h(Host, { "aria-hidden": `${!this.show}`, "aria-expanded": `${this.show}`, "aria-label": `${(_a = this.titulo) !== null && _a !== void 0 ? _a : 'Painel lateral'}` },
            h("div", { class: `painel-lateral ${this.menuPossuiBanner ? 'painel-lateral--banner' : ''} ${this.show ? 'painel-lateral--show' : ''}`, onMouseLeave: this.onMouseLeave, onMouseOver: this.onMouseOver, "aria-hidden": `${!this.show}`, "aria-expanded": `${this.show}` },
                h("header", null,
                    h("button", { class: "btn-back", onClick: this.onToggleShow, title: "Voltar" },
                        h("bth-icone", { icone: "arrow-left" })),
                    this.titulo && (h("h3", null, this.titulo)),
                    h("button", { class: "btn-close", onClick: this.onCloseAll, title: "Fechar todos" },
                        h("bth-icone", { icone: "close" }))),
                this.renderSlot && (h("slot", null, "Conte\u00FAdo painel lateral")))));
    }
    static get is() { return "bth-menu-painel-lateral"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-painel-lateral.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-painel-lateral.css"]
    }; }
    static get properties() { return {
        "show": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Estado de visibilidade"
            },
            "attribute": "show",
            "reflect": true,
            "defaultValue": "false"
        },
        "titulo": {
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
                "text": "T\u00EDtulo que ser\u00E1 exibido no cabe\u00E7alho"
            },
            "attribute": "titulo",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isDispositivoMovel": {},
        "menuPossuiBanner": {},
        "renderSlot": {},
        "uniqueId": {}
    }; }
    static get events() { return [{
            "method": "painelLateralShow",
            "name": "painelLateralShow",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 toda vez em que o estado de exibi\u00E7\u00E3o (\"show\") for alterado"
            },
            "complexType": {
                "original": "PainelLateralShowEvent",
                "resolved": "PainelLateralShowEvent",
                "references": {
                    "PainelLateralShowEvent": {
                        "location": "import",
                        "path": "./menu-painel-lateral.interfaces"
                    }
                }
            }
        }]; }
    static get methods() { return {
        "setShowComAnimacao": {
            "complexType": {
                "signature": "(show: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Alterna o estado em aberto do painel para o valor do par\u00E2metro ap\u00F3s um timeout padr\u00E3o de intera\u00E7\u00F5es",
                "tags": []
            }
        },
        "cancelarAberturaComAnimacao": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Cancela o timeout de intera\u00E7\u00E3o ativo caso exista",
                "tags": []
            }
        },
        "fecharPaineisAbertos": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Fecha o painel lateral e emite evento para que outros sobrepostos sejam fechados.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "show",
            "methodName": "showHandler"
        }, {
            "propName": "show",
            "methodName": "watchShow"
        }]; }
    static get listeners() { return [{
            "name": "resize",
            "method": "onWindowResize",
            "target": "window",
            "capture": false,
            "passive": true
        }, {
            "name": "bannerAlterado",
            "method": "onBannerAlterado",
            "target": "window",
            "capture": false,
            "passive": false
        }, {
            "name": "painelLateralShow",
            "method": "onPainelLateralShow",
            "target": "window",
            "capture": false,
            "passive": false
        }]; }
}
