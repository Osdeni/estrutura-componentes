import { Component, h, Prop, Event } from '@stencil/core';
import { getDataHoraDescrita } from '../../../utils/date';
export class NovidadeItem {
    constructor() {
        /**
         * Define se já está lida
         */
        this.isLida = false;
        this.onClickPainel = (event) => {
            if (this.isLida) {
                return;
            }
            return this.onClick(event);
        };
        this.onClick = (event) => {
            event.preventDefault();
            if (this.isLida) {
                this.novidadeNaoLida.emit({ id: this.identificador });
            }
            else {
                this.novidadeLida.emit({ id: this.identificador, url: this.url });
            }
        };
    }
    render() {
        return (h("div", { onClick: this.onClickPainel, title: this.isLida ? '' : 'Abrir mais detalhes e marcar como lida', class: `lista__item ${!this.isLida ? 'lista__item--unread' : ''}` },
            h("div", { class: "lista__item--body" },
                h("bth-icone", { class: "icone-gift", icone: "gift" }),
                h("section", null,
                    h("h5", { class: "title", title: this.titulo }, this.titulo),
                    h("p", { class: "message", title: this.mensagem }, this.mensagem)),
                h("a", { href: "", class: "marcar-leitura__toggler", onClick: this.onClick, title: this.isLida ? 'Marcar como não lida' : 'Marcar como lida' },
                    h("bth-icone", { icone: this.isLida ? 'email-open-outline' : 'email-outline' }))),
            h("div", { class: "lista__item--footer" },
                h("a", { href: this.url, title: "Mais detalhes", target: "_blank", rel: "noreferrer" }, "Mais detalhes"),
                this.dataHora && (h("span", { class: "float-right", title: getDataHoraDescrita(this.dataHora) }, getDataHoraDescrita(this.dataHora))))));
    }
    static get is() { return "bth-novidade-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["novidade-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["novidade-item.css"]
    }; }
    static get properties() { return {
        "identificador": {
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
                "text": "Identificador"
            },
            "attribute": "identificador",
            "reflect": false
        },
        "titulo": {
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
                "text": "T\u00EDtulo"
            },
            "attribute": "titulo",
            "reflect": false
        },
        "mensagem": {
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
                "text": "Mensagem"
            },
            "attribute": "mensagem",
            "reflect": false
        },
        "isLida": {
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
                "text": "Define se j\u00E1 est\u00E1 lida"
            },
            "attribute": "is-lida",
            "reflect": false,
            "defaultValue": "false"
        },
        "url": {
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
                "text": "URL para obter mais informa\u00E7\u00F5es"
            },
            "attribute": "url",
            "reflect": false
        },
        "dataHora": {
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
                "text": "Data e hora"
            },
            "attribute": "data-hora",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "novidadeLida",
            "name": "novidadeLida",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando uma novidade \u00E9 marcada como lida"
            },
            "complexType": {
                "original": "NovidadeLeituraEvent",
                "resolved": "NovidadeLeituraEvent",
                "references": {
                    "NovidadeLeituraEvent": {
                        "location": "import",
                        "path": "../novidades.interfaces"
                    }
                }
            }
        }, {
            "method": "novidadeNaoLida",
            "name": "novidadeNaoLida",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando uma novidade \u00E9 marcada como n\u00E3o lida"
            },
            "complexType": {
                "original": "NovidadeLeituraEvent",
                "resolved": "NovidadeLeituraEvent",
                "references": {
                    "NovidadeLeituraEvent": {
                        "location": "import",
                        "path": "../novidades.interfaces"
                    }
                }
            }
        }]; }
}
