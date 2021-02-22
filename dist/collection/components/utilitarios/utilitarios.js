import { Component, h, Element, Prop, Event } from '@stencil/core';
import { MSG_SEM_PERMISSAO_RECURSO } from '../../global/constants';
export class Utilitarios {
    constructor() {
        this.onClick = (event, utilitario) => {
            event.preventDefault();
            if (!utilitario.possuiPermissao) {
                return;
            }
            const eventPayload = {
                nome: utilitario.nome,
                icone: utilitario.icone,
                rota: utilitario.rota
            };
            this.opcaoUtilitarioSelecionada.emit(eventPayload);
        };
    }
    render() {
        return (h("bth-menu-ferramenta", { descricao: "Utilit\u00E1rios", tituloPainelLateral: "Utilit\u00E1rios" },
            h("bth-menu-ferramenta-icone", { slot: "menu_item_desktop", icone: "view-grid" }),
            h("bth-menu-ferramenta-icone", { slot: "menu_item_mobile", icone: "view-grid", mobile: true }),
            h("span", { slot: "menu_descricao_mobile", class: "descricao-mobile" }, "Utilit\u00E1rios"),
            h("div", { slot: "conteudo_painel_lateral", class: "painel-utilitarios" }, this.utilitarios && (h("ul", null, this.utilitarios.map((utilitario, index) => {
                return (h("li", { key: index, id: `utilitario_item_${index}` },
                    h("button", { onClick: (event) => this.onClick(event, utilitario), class: `
                          painel-utilitarios__card
                          painel-utilitarios__card--bordered block-ellipsis
                          ${utilitario.possuiPermissao ? 'painel-utilitarios__card--clickable' : 'painel-utilitarios__card--disabled'}
                        `, title: utilitario.possuiPermissao ? utilitario.nome : MSG_SEM_PERMISSAO_RECURSO, "aria-label": `Acessar o utilitário ${utilitario.nome}`, "aria-disabled": `${!utilitario.possuiPermissao}`, disabled: !utilitario.possuiPermissao },
                        h("bth-icone", { icone: utilitario.icone, title: utilitario.nome }),
                        h("span", { class: "descricao block-ellipsis" }, utilitario.nome))));
            }))))));
    }
    static get is() { return "bth-utilitarios"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["utilitarios.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["utilitarios.css"]
    }; }
    static get properties() { return {
        "utilitarios": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Array<Utilitario>",
                "resolved": "Utilitario[]",
                "references": {
                    "Array": {
                        "location": "global"
                    },
                    "Utilitario": {
                        "location": "import",
                        "path": "./utilitarios.interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Utilitarios"
            }
        }
    }; }
    static get events() { return [{
            "method": "opcaoUtilitarioSelecionada",
            "name": "opcaoUtilitarioSelecionada",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando algum utilit\u00E1rio for selecionado"
            },
            "complexType": {
                "original": "OpcaoUtilitarioSelecionadaEvent",
                "resolved": "OpcaoUtilitarioSelecionadaEvent",
                "references": {
                    "OpcaoUtilitarioSelecionadaEvent": {
                        "location": "import",
                        "path": "./utilitarios.interfaces"
                    }
                }
            }
        }]; }
    static get elementRef() { return "el"; }
}
