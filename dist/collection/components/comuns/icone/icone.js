import { Component, h, Prop, Host, Watch } from '@stencil/core';
import { isNill } from '../../../utils/functions';
export class Icone {
    constructor() {
        /**
         * Tamanho em pixels, no mesmo formato do `"font-size"` em CSS.
         * Por padrão irá herdar do contexto inserido.
         */
        this.tamanho = 'inherit';
        /**
         * Cor de preenchimento, no mesmo formato do `"color"` em CSS.
         * Por padrão irá herdar do contexto inserido.
         */
        this.cor = 'inherit';
    }
    connectedCallback() {
        this.carregarIcone();
    }
    carregarIcone() {
        if (isNill(this.icone)) {
            return;
        }
        const label = this.icone.replace(/-/, ' ');
        this.ariaLabel = this.ariaLabel || label;
    }
    render() {
        return (h(Host, { role: "img" },
            h("i", { class: `mdi mdi-${this.icone}`, style: { 'font-size': this.tamanho, 'color': this.cor } })));
    }
    static get is() { return "bth-icone"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["icone.css"]
    }; }
    static get styleUrls() { return {
        "$": ["icone.css"]
    }; }
    static get properties() { return {
        "icone": {
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
                "text": "Identificador do \u00EDcone conforme biblioteca `\"Material Design Icons\"`"
            },
            "attribute": "icone",
            "reflect": true
        },
        "tamanho": {
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
                "text": "Tamanho em pixels, no mesmo formato do `\"font-size\"` em CSS.\nPor padr\u00E3o ir\u00E1 herdar do contexto inserido."
            },
            "attribute": "tamanho",
            "reflect": true,
            "defaultValue": "'inherit'"
        },
        "cor": {
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
                "text": "Cor de preenchimento, no mesmo formato do `\"color\"` em CSS.\nPor padr\u00E3o ir\u00E1 herdar do contexto inserido."
            },
            "attribute": "cor",
            "reflect": true,
            "defaultValue": "'inherit'"
        },
        "ariaLabel": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Especifica o label a ser utilizado para acessibilidade.\nPor padr\u00E3o ir\u00E1 assumir o nome do \u00EDcone."
            },
            "attribute": "aria-label",
            "reflect": true
        }
    }; }
    static get watchers() { return [{
            "propName": "icone",
            "methodName": "carregarIcone"
        }]; }
}
