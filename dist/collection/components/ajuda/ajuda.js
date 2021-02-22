import { Component, h, Prop } from '@stencil/core';
import { isNill } from '../../utils/functions';
export class Ajuda {
    getCentralAjudaHome() {
        if (!isNill(this.centralAjudaHome)) {
            return this.centralAjudaHome;
        }
        if ('___bth' in window) {
            return window['___bth'].envs.suite['central-de-ajuda'].v1['host-redirecionamento'];
        }
        return null;
    }
    render() {
        return (h("bth-menu-ferramenta", { descricao: "Ajuda", tituloPainelLateral: "Ajuda" },
            h("bth-menu-ferramenta-icone", { slot: "menu_item_desktop", icone: "help-circle" }),
            h("bth-menu-ferramenta-icone", { slot: "menu_item_mobile", icone: "help-circle", mobile: true }),
            h("span", { slot: "menu_descricao_mobile", class: "descricao-mobile" }, "Ajuda"),
            h("div", { slot: "conteudo_painel_lateral", class: "empty-ajuda" },
                h("div", { class: "empty-ajuda__img" }),
                h("h4", null,
                    "Est\u00E1 com d\u00FAvida? Acesse a ",
                    h("a", { href: this.getCentralAjudaHome(), target: "_blank", rel: "noreferrer" },
                        "Central de Ajuda ",
                        h("bth-icone", { icone: "open-in-new" }))))));
    }
    static get is() { return "bth-ajuda"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["ajuda.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ajuda.css"]
    }; }
    static get properties() { return {
        "centralAjudaHome": {
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
                "text": "URL para a home da central de ajuda. Por padr\u00E3o ir\u00E1 obter do env.js"
            },
            "attribute": "central-ajuda-home",
            "reflect": false
        }
    }; }
}
