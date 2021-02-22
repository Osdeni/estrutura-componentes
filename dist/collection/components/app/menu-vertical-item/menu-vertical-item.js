import { Component, h, Prop, Event } from '@stencil/core';
import { MSG_SEM_PERMISSAO_RECURSO } from '../../../global/constants';
import { isNill } from '../../../utils/functions';
import { PERMISSAO_PADRAO } from '../app.constants';
import BadgeContador from '../badge-contador';
/**
 * Item que representa uma opção do menu para navegação vertical
 */
export class MenuVerticalItem {
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
            this.menuVerticalSelecionado.emit({
                identificador: this.identificador,
                identificadorPai: this.identificadorPai
            });
        };
    }
    render() {
        const possuiSubmenus = !isNill(this.submenus) && this.submenus.length > 0;
        return (h("div", { class: `
          menu-vertical__item
          ${this.ativo ? ' menu-vertical__item--active' : ''}
          ${possuiSubmenus ? ' menu-vertical__item--has-children' : ''}
          ${(this.recolhido || this.menuLateralRecolhido) ? ' menu-vertical__item--collapsed' : ''}
          ${this.submenu ? 'menu-vertical__submenu' : ''}
        ` },
            h("a", { href: "", onClick: this.onClick, class: `${!possuiSubmenus && !this.possuiPermissao ? 'menu-vertical__item--disabled' : ''}`, title: `${!this.possuiPermissao ? MSG_SEM_PERMISSAO_RECURSO : this.descricao}`, "aria-haspopup": `${possuiSubmenus}`, "aria-expanded": `${possuiSubmenus && !(this.recolhido || this.menuLateralRecolhido)}`, "aria-disabled": `${!this.possuiPermissao}`, "aria-label": possuiSubmenus ? `Expandir ${this.descricao}` : `Navegar para ${this.descricao}`, tabindex: this.possuiPermissao ? 0 : -1 },
                this.icone && (h("bth-icone", { icone: this.icone })),
                h("span", { class: `${isNill(this.icone) && !this.submenu ? 'menu-vertical__item--sem-icone' : ''}`, title: `${!this.possuiPermissao ? MSG_SEM_PERMISSAO_RECURSO : this.descricao}` }, this.descricao),
                h(BadgeContador, { valor: this.contador, customClass: this.menuLateralRecolhido ? 'badge-vertical-floating' : '' }),
                possuiSubmenus && (h("bth-icone", { icone: "chevron-up" }))),
            possuiSubmenus && (h("ul", { class: "menu-vertical__list" }, this.submenus.map((submenu, index) => {
                var _a;
                return (h("li", null,
                    h("bth-menu-vertical-item", { id: `menu_vertical_subitem_${index}`, key: index, identificador: submenu.id, "identificador-pai": this.identificador, descricao: submenu.descricao, icone: submenu.icone, onMenuVerticalSelecionado: this.onClick, contador: submenu.contador, possuiPermissao: (_a = submenu.possuiPermissao) !== null && _a !== void 0 ? _a : PERMISSAO_PADRAO, ativo: submenu.isAtivo, recolhido: submenu.isRecolhido, menuLateralRecolhido: this.menuLateralRecolhido, submenus: submenu.submenus, submenu: true })));
            })))));
    }
    static get is() { return "bth-menu-vertical-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-vertical-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-vertical-item.css"]
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
                "text": "Valor que ser\u00E1 exibido em uma \"badge\" pr\u00F3ximo ao menu"
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
        "identificadorPai": {
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
                "text": "Identificador do menu agrupador \"pai\""
            },
            "attribute": "identificador-pai",
            "reflect": false
        },
        "menuLateralRecolhido": {
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
                "text": "O menu principal est\u00E1 recolhido?\n\nEste par\u00E2metro influ\u00EAncia no formato como alguns elementos s\u00E3o exibidos, ex: badge do contador."
            },
            "attribute": "menu-lateral-recolhido",
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
        },
        "recolhido": {
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
                "text": "Est\u00E1 recolhido?"
            },
            "attribute": "recolhido",
            "reflect": false
        },
        "submenu": {
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
                "text": "\u00C9 um submenu?"
            },
            "attribute": "submenu",
            "reflect": false
        },
        "submenus": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Array<OpcaoMenu>",
                "resolved": "OpcaoMenu[]",
                "references": {
                    "Array": {
                        "location": "global"
                    },
                    "OpcaoMenu": {
                        "location": "import",
                        "path": "../app.interfaces"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Possui submenus?"
            }
        }
    }; }
    static get events() { return [{
            "method": "menuVerticalSelecionado",
            "name": "menuVerticalSelecionado",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando o menu \u00E9 selecionado"
            },
            "complexType": {
                "original": "MenuVerticalSelecionadoEvent",
                "resolved": "MenuVerticalSelecionadoEvent",
                "references": {
                    "MenuVerticalSelecionadoEvent": {
                        "location": "import",
                        "path": "./menu-vertical-item.interfaces"
                    }
                }
            }
        }]; }
}
