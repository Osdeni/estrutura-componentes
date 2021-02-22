import { Component, h, Host, Prop, Event, Element } from '@stencil/core';
import { getCssVariableValue, isNill } from '../../../utils/functions';
const BG_COLORS = [
    'aqua',
    'blue',
    'green',
    'pink',
    'purple',
    'orange',
    'yellow'
];
/**
 * Este componente exibe um avatar
 */
export class Avatar {
    constructor() {
        /**
          * Define o "title" do subícone
          */
        this.subIconeTitle = '';
        /**
         * Define o tamanho conforme dimensões pre-definidas para o avatar.
         *
         * Opções disponíveis: menor (24x24), pequeno (28x28), medio (48x48) e grande (94x94)
         */
        this.tamanho = 'medio';
        /**
         * Define se o avatar terá suas bordas no formato quadrado.
         *
         * Por padrão é redondo
         */
        this.quadrado = false;
        /**
         * Define se o avatar possui borda
         */
        this.borda = false;
        /**
         * Define o tamanho da borda
         */
        this.bordaTamanho = '1px';
        /**
         * Define o raio da borda do avatar. Caso informado, sobrescreve o atributo utilitario 'quadrado'.
         */
        this.bordaRaio = '50%';
        /**
         * Define a cor da borda
         */
        this.bordaCor = 'white';
        this.onImageLoadError = (event) => {
            this.imageLoadError.emit(event);
        };
    }
    getSiglaIniciais(texto) {
        var _a;
        if (texto.length <= 2) {
            return texto.toUpperCase();
        }
        const palavras = texto.replace(/[^\w\s]/gi, '').split(' ');
        const iniciais = palavras.filter(palavra => Boolean(palavra))
            .map(palavra => palavra.substr(0, 1));
        return iniciais[0].concat((_a = iniciais[1]) !== null && _a !== void 0 ? _a : '').toUpperCase();
    }
    getColorClass() {
        if (this.icone !== undefined) {
            return 'avatar-icone bg-blue tx-blue';
        }
        if (this.iniciais !== undefined) {
            let color = this.getCorInicias();
            return `bg-${color} tx-${color}`;
        }
        return '';
    }
    getSizeClass() {
        if (isNill(this.tamanho) || !isNill(this.dimensao)) {
            return '';
        }
        if (this.tamanho === 'menor') {
            return 'avatar-extra-small';
        }
        if (this.tamanho === 'pequeno') {
            return 'avatar-small';
        }
        if (this.tamanho === 'medio') {
            return 'avatar-medium';
        }
        if (this.tamanho === 'grande') {
            return 'avatar-large';
        }
        return '';
    }
    getRoundingClass() {
        if (this.quadrado) {
            return 'avatar-square';
        }
        return '';
    }
    getCorInicias() {
        return BG_COLORS[this.iniciais.charCodeAt(0) % BG_COLORS.length];
    }
    getContainerCustomStyles() {
        const containerStyles = {};
        if (!isNill(this.dimensao)) {
            containerStyles.width = `${this.dimensao}px`;
            containerStyles.height = `${this.dimensao}px`;
            containerStyles.fontSize = `${this.dimensao / 2}px`;
        }
        return containerStyles;
    }
    getImagemCustomStyles() {
        const imagemStyles = {};
        if (!isNill(this.borda)) {
            imagemStyles.border = `${this.bordaTamanho} solid ${this.bordaCor}`;
        }
        imagemStyles['border-radius'] = this.bordaRaio;
        return imagemStyles;
    }
    render() {
        return (h(Host, null,
            h("div", { class: "avatar__container" },
                h("figure", { class: `avatar__body ${this.getRoundingClass()} ${this.getColorClass()} ${this.getSizeClass()}`, style: this.getContainerCustomStyles() },
                    this.icone && (h("bth-icone", { icone: this.icone, cor: getCssVariableValue('--bth-app-gray-light-40') })),
                    this.src && (h("img", { src: this.src, class: `avatar--imagem ${this.getRoundingClass()} ${this.getSizeClass()}`, style: this.getImagemCustomStyles(), alt: this.el.getAttribute('title') || 'Avatar', onError: this.onImageLoadError })),
                    this.iniciais && (h("span", null, this.getSiglaIniciais(this.iniciais)))),
                this.subIcone && (h("bth-icone", { class: "subicone", icone: this.subIcone, title: this.subIconeTitle })))));
    }
    static get is() { return "bth-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["avatar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["avatar.css"]
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
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Define um avatar de \u00EDcone conforme biblioteca `\"Material Design Icons\"`"
            },
            "attribute": "icone",
            "reflect": true
        },
        "subIcone": {
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
                "text": "Define um sub-\u00EDcone conforme biblioteca `\"Material Design Icons\"`"
            },
            "attribute": "sub-icone",
            "reflect": true
        },
        "subIconeTitle": {
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
                "text": "Define o \"title\" do sub\u00EDcone"
            },
            "attribute": "sub-icone-title",
            "reflect": true,
            "defaultValue": "''"
        },
        "src": {
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
                "text": "Define a fonte de um avatar de imagem. Aceita imagem e svg."
            },
            "attribute": "src",
            "reflect": true
        },
        "iniciais": {
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
                "text": "Define avatar do tipo iniciais, aceitando at\u00E9 3 iniciais ou computando as iniciais automaticamente conforme palavras passadas"
            },
            "attribute": "iniciais",
            "reflect": true
        },
        "tamanho": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Tamanho",
                "resolved": "\"grande\" | \"medio\" | \"menor\" | \"pequeno\"",
                "references": {
                    "Tamanho": {
                        "location": "import",
                        "path": "./avatar.interfaces"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Define o tamanho conforme dimens\u00F5es pre-definidas para o avatar.\n\nOp\u00E7\u00F5es dispon\u00EDveis: menor (24x24), pequeno (28x28), medio (48x48) e grande (94x94)"
            },
            "attribute": "tamanho",
            "reflect": true,
            "defaultValue": "'medio'"
        },
        "dimensao": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Permite definir a dimens\u00E3o (largura, altura) em px para o avatar"
            },
            "attribute": "dimensao",
            "reflect": true
        },
        "quadrado": {
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
                "text": "Define se o avatar ter\u00E1 suas bordas no formato quadrado.\n\nPor padr\u00E3o \u00E9 redondo"
            },
            "attribute": "quadrado",
            "reflect": true,
            "defaultValue": "false"
        },
        "borda": {
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
                "text": "Define se o avatar possui borda"
            },
            "attribute": "borda",
            "reflect": true,
            "defaultValue": "false"
        },
        "bordaTamanho": {
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
                "text": "Define o tamanho da borda"
            },
            "attribute": "borda-tamanho",
            "reflect": true,
            "defaultValue": "'1px'"
        },
        "bordaRaio": {
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
                "text": "Define o raio da borda do avatar. Caso informado, sobrescreve o atributo utilitario 'quadrado'."
            },
            "attribute": "borda-raio",
            "reflect": true,
            "defaultValue": "'50%'"
        },
        "bordaCor": {
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
                "text": "Define a cor da borda"
            },
            "attribute": "borda-cor",
            "reflect": true,
            "defaultValue": "'white'"
        }
    }; }
    static get events() { return [{
            "method": "imageLoadError",
            "name": "imageLoadError",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando houver erro ao carregar a imagem"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
