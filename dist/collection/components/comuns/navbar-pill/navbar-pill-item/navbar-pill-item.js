import { Component, h, Prop, Event } from '@stencil/core';
export class NavbarPillItem {
    constructor() {
        /**
         * Está ativo?
         */
        this.ativo = false;
        /**
         * Ícone conforme biblioteca `"Material Design Icons"`
         */
        this.icone = 'cloud-question';
        /**
         * Totalizador
         */
        this.totalizador = 0;
        /**
         * Exibir totalizador?
         */
        this.showTotalizador = true;
        this.onClick = (event) => {
            event.preventDefault();
            this.navbarPillItemClicked.emit({
                identificador: this.identificador
            });
        };
    }
    render() {
        return (h("div", { role: "menuitem", class: `navbar-pill-item ${this.ativo ? 'navbar-pill-item--active' : ''}` },
            h("a", { href: "", title: this.descricao, onClick: this.onClick },
                h("bth-icone", { icone: this.icone }),
                h("span", { class: `descricao ${this.ativo ? 'descricao--show' : ''}` }, this.descricao),
                this.showTotalizador && this.totalizador !== 0 && (h("span", { class: "totalizador" },
                    "(",
                    this.totalizador,
                    ")")))));
    }
    static get is() { return "bth-navbar-pill-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["navbar-pill-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["navbar-pill-item.css"]
    }; }
    static get properties() { return {
        "identificador": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Identificador.\n\u00C9 enviado no evento de click."
            },
            "attribute": "identificador",
            "reflect": false
        },
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
        },
        "ativo": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Est\u00E1 ativo?"
            },
            "attribute": "ativo",
            "reflect": true,
            "defaultValue": "false"
        },
        "icone": {
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
                "text": "\u00CDcone conforme biblioteca `\"Material Design Icons\"`"
            },
            "attribute": "icone",
            "reflect": false,
            "defaultValue": "'cloud-question'"
        },
        "totalizador": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Totalizador"
            },
            "attribute": "totalizador",
            "reflect": false,
            "defaultValue": "0"
        },
        "showTotalizador": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Exibir totalizador?"
            },
            "attribute": "show-totalizador",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "navbarPillItemClicked",
            "name": "navbarPillItemClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido ao clicar no filtro"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
