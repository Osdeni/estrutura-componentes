import { Component, h, Prop, Event } from '@stencil/core';
import { MSG_SEM_PERMISSAO_RECURSO } from '../../../global/constants';
import { PERMISSAO_PADRAO } from '../app.constants';
import BadgeContador from '../badge-contador';
/**
 * Item que representa uma opção do menu para navegação horizontal
 */
export class MenuHorizontalItem {
    constructor() {
        /**
         * Possui permissão?
         */
        this.possuiPermissao = PERMISSAO_PADRAO;
        this.onClick = (event) => {
            event.preventDefault();
            if (this.possuiPermissao === false) {
                return;
            }
            this.menuHorizontalSelecionado.emit({
                identificador: this.identificador
            });
        };
    }
    render() {
        return (h("div", { class: `menu-horizontal__item ${this.ativo ? 'menu-horizontal__item--active' : ''}` },
            h("a", { href: "", class: `${!this.possuiPermissao ? 'menu-horizontal__item--disabled' : ''}`, title: `${!this.possuiPermissao ? MSG_SEM_PERMISSAO_RECURSO : this.descricao}`, onClick: this.onClick, "aria-disabled": `${!this.possuiPermissao}`, "aria-label": `Navegar para ${this.descricao}`, tabindex: this.possuiPermissao ? 0 : -1 },
                h("span", null, this.descricao),
                h(BadgeContador, { valor: this.contador }))));
    }
    static get is() { return "bth-menu-horizontal-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-horizontal-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-horizontal-item.css"]
    }; }
    static get properties() { return {
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
            "reflect": false
        },
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
                "text": "Contador\n\nExibe o valor inforamdo em um badge pr\u00F3ximo ao menu"
            },
            "attribute": "contador",
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
        "identificador": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "IdentificadorOpcaoMenu",
                "resolved": "number | string",
                "references": {
                    "IdentificadorOpcaoMenu": {
                        "location": "import",
                        "path": "../app.interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Identificador"
            },
            "attribute": "identificador",
            "reflect": false
        },
        "possuiPermissao": {
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
                "text": "Possui permiss\u00E3o?"
            },
            "attribute": "possui-permissao",
            "reflect": false,
            "defaultValue": "PERMISSAO_PADRAO"
        }
    }; }
    static get events() { return [{
            "method": "menuHorizontalSelecionado",
            "name": "menuHorizontalSelecionado",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando o menu \u00E9 selecionado"
            },
            "complexType": {
                "original": "MenuHorizontalSelecionadoEvent",
                "resolved": "MenuHorizontalSelecionadoEvent",
                "references": {
                    "MenuHorizontalSelecionadoEvent": {
                        "location": "import",
                        "path": "./menu-horizontal-item.interfaces"
                    }
                }
            }
        }]; }
}
