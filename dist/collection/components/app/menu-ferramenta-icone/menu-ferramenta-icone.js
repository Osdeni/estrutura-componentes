import { Component, h, Prop } from '@stencil/core';
import Badge from './badge-menu-ferramenta-icone';
/**
 * Abstrai a estilização de um ícone para menu-ferramenta.
 * Também implementa a possibilidade de exibição de um `badge` ao lado do ícone, através da propriedade `contador`.
 */
export class MenuFerramentaIcone {
    constructor() {
        /**
         * Valor que será exibido em uma "badge" próximo ao ícone
         */
        this.contador = 0;
        /**
         * Ícone conforme biblioteca `"Material Design Icons"`
         */
        this.icone = 'cloud';
        /**
         * Define se a estilização é "mobile". Por padrão é "desktop".
         */
        this.mobile = false;
    }
    render() {
        return (h("div", { class: this.mobile ? 'mobile' : 'desktop' },
            h("bth-icone", { icone: this.icone }),
            h(Badge, { contador: this.contador })));
    }
    static get is() { return "bth-menu-ferramenta-icone"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-ferramenta-icone.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-ferramenta-icone.css"]
    }; }
    static get properties() { return {
        "contador": {
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
                "text": "Valor que ser\u00E1 exibido em uma \"badge\" pr\u00F3ximo ao \u00EDcone"
            },
            "attribute": "contador",
            "reflect": false,
            "defaultValue": "0"
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
            "defaultValue": "'cloud'"
        },
        "mobile": {
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
                "text": "Define se a estiliza\u00E7\u00E3o \u00E9 \"mobile\". Por padr\u00E3o \u00E9 \"desktop\"."
            },
            "attribute": "mobile",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
