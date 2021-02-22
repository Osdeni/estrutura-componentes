import { Component, h, Prop } from '@stencil/core';
export class NavbarPillGroup {
    render() {
        var _a;
        return (h("nav", { "aria-label": `Navegação por filtros ${(_a = this.descricao) === null || _a === void 0 ? void 0 : _a.toLowerCase()}` },
            h("div", { class: "navbar-pill-group", role: "menubar" },
                h("slot", null))));
    }
    static get is() { return "bth-navbar-pill-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["navbar-pill-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["navbar-pill-group.css"]
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
            "reflect": false
        }
    }; }
}
