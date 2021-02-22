import { Component, Prop, h } from '@stencil/core';
/**
 * Loader padrão com efeitos de animações
 */
export class Loader {
    constructor() {
        /**
         * Define se o loader é inline
         */
        this.inline = false;
    }
    render() {
        return (h("div", { class: `loader ${this.inline ? 'loader--inline' : ''}` },
            h("div", { class: "dot" }),
            h("div", { class: "dot" }),
            h("div", { class: "dot" })));
    }
    static get is() { return "bth-loader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["loader.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["loader.css"]
    }; }
    static get properties() { return {
        "inline": {
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
                "text": "Define se o loader \u00E9 inline"
            },
            "attribute": "inline",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
