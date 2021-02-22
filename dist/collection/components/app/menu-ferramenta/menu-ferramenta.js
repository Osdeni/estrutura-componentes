import { Component, Listen, Element, Host, Prop, h, State, Method } from '@stencil/core';
import { isDispositivoMovel } from '../../../utils/functions';
import { SLOT } from './menu-ferramenta.constants';
/**
 * Facilita a criação de Ferramentas para o menu. Abstrai comportamentos responsivos e controle do painel lateral.
 *
 * @slot menu_item_mobile - Item do menu para versão mobile
 * @slot menu_descricao_mobile - Descrição para versão mobile
 * @slot menu_item_desktop - Item do menu para versão desktop
 * @slot conteudo_painel_lateral - Conteúdo do painel lateral
 */
export class MenuFerramenta {
    constructor() {
        this.isDispositivoMovel = false;
        this.possuiConteudoPainelLateralDeclarado = false;
        this.possuiMenuItemDesktopDeclarado = false;
        this.possuiMenuItemMobileDeclarado = false;
        /**
         * Descrição
         */
        this.descricao = '';
        this.onToggleEstadoAberto = (event) => {
            event.preventDefault();
            this.alternarExibicaoPainelLateral();
        };
        this.onPainelLateralShow = (event) => {
            if (this.isDispositivoMovel) {
                return;
            }
            const desktopToggler = this.el.shadowRoot.querySelector('.ferramenta-menu__desktop-toggler');
            if (desktopToggler === null) {
                return;
            }
            if (event.detail.show) {
                desktopToggler.classList.add('ferramenta-menu__desktop-toggler--active');
            }
            else {
                desktopToggler.classList.remove('ferramenta-menu__desktop-toggler--active');
            }
        };
        this.onMouseOverToggle = () => {
            const painelLateral = this.el.shadowRoot.querySelector('bth-menu-painel-lateral');
            painelLateral.cancelarAberturaComAnimacao();
        };
        this.onMouseLeaveToggle = () => {
            const painelLateral = this.el.shadowRoot.querySelector('bth-menu-painel-lateral');
            painelLateral.setShowComAnimacao(false);
        };
    }
    connectedCallback() {
        this.configurarPropriedadesResponsivas();
    }
    onWindowResize() {
        this.configurarPropriedadesResponsivas();
    }
    /**
     * Fecha os paineis abertos
     */
    async fecharPaineisAbertos() {
        const painelLateral = this.el.shadowRoot.querySelector('bth-menu-painel-lateral');
        if (painelLateral === null) {
            return;
        }
        painelLateral.fecharPaineisAbertos();
    }
    configurarPropriedadesResponsivas() {
        this.isDispositivoMovel = isDispositivoMovel();
        this.possuiConteudoPainelLateralDeclarado = this.el.querySelector(`[slot="${SLOT.CONTEUDO_PAINEL_LATERAL}"]`) !== null;
        this.possuiMenuItemDesktopDeclarado = this.el.querySelector(`[slot="${SLOT.MENU_ITEM_DESKTOP}"]`) !== null;
        this.possuiMenuItemMobileDeclarado = this.el.querySelector(`[slot="${SLOT.MENU_ITEM_MOBILE}"]`) !== null;
    }
    alternarExibicaoPainelLateral() {
        const painelLateral = this.el.shadowRoot.querySelector('bth-menu-painel-lateral');
        if (painelLateral === null) {
            return;
        }
        painelLateral.show = !painelLateral.show;
    }
    render() {
        if (!this.possuiConteudoPainelLateralDeclarado) {
            return (h(Host, null,
                h("div", { class: "ferramenta-menu__desktop-toggler", title: this.descricao, "aria-haspopup": "false" },
                    h("slot", { name: SLOT.MENU_ITEM_DESKTOP }))));
        }
        return (h(Host, null,
            this.isDispositivoMovel && this.possuiMenuItemMobileDeclarado && (h("div", { class: "ferramenta-menu__mobile-toggler", title: this.descricao, "aria-haspopup": "true" },
                h("a", { href: "", onClick: this.onToggleEstadoAberto, "aria-label": `Acessar o painel da ferramenta de ${this.descricao}` },
                    h("slot", { name: SLOT.MENU_ITEM_MOBILE }),
                    h("slot", { name: SLOT.MENU_DESCRICAO_MOBILE })))),
            !this.isDispositivoMovel && this.possuiMenuItemDesktopDeclarado && (h("div", { class: "ferramenta-menu__desktop-toggler", title: this.descricao, "aria-haspopup": "true" },
                h("a", { href: "", onClick: this.onToggleEstadoAberto, onMouseLeave: this.onMouseLeaveToggle, onMouseOver: this.onMouseOverToggle, "aria-label": `Acessar o painel da ferramenta de ${this.descricao}` },
                    h("slot", { name: SLOT.MENU_ITEM_DESKTOP })))),
            h("bth-menu-painel-lateral", { onPainelLateralShow: this.onPainelLateralShow, titulo: this.tituloPainelLateral },
                h("slot", { name: SLOT.CONTEUDO_PAINEL_LATERAL }))));
    }
    static get is() { return "bth-menu-ferramenta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-ferramenta.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-ferramenta.css"]
    }; }
    static get properties() { return {
        "descricao": {
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
                "text": "Descri\u00E7\u00E3o"
            },
            "attribute": "descricao",
            "reflect": false,
            "defaultValue": "''"
        },
        "tituloPainelLateral": {
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
                "text": "T\u00EDtulo do Painel Lateral"
            },
            "attribute": "titulo-painel-lateral",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isDispositivoMovel": {},
        "possuiConteudoPainelLateralDeclarado": {},
        "possuiMenuItemDesktopDeclarado": {},
        "possuiMenuItemMobileDeclarado": {}
    }; }
    static get methods() { return {
        "fecharPaineisAbertos": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLBthMenuPainelLateralElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Fecha os paineis abertos",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "onWindowResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
