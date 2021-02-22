import { Component, h, Prop, Event } from '@stencil/core';
import { getDataHoraDescrita } from '../../../utils/date';
import { isNill } from '../../../utils/functions';
import { getIcone, getIconeTitle } from '../notificacoes-sistemas.config';
import { TipoNotificacao } from '../notificacoes.interfaces';
export class NotificacaoItem {
    constructor() {
        this.onClickPainel = (event) => {
            if (this.isLida() || this.isProgressoEmAndamento()) {
                return;
            }
            return this.onClick(event);
        };
        this.onClick = (event) => {
            event.preventDefault();
            const payload = {
                id: this.identificador
            };
            if (this.isLida()) {
                this.notificacaoNaoLida.emit(payload);
                return;
            }
            if (!isNill(this.resultadoLink)) {
                payload.url = this.resultadoLink.href;
                payload.target = this.getLinkTarget(this.resultadoLink);
            }
            this.notificacaoLida.emit(payload);
        };
    }
    isLida() {
        return this.tipo === TipoNotificacao.Lida;
    }
    isOrigemUsuario() {
        return /^user/.test(this.origem);
    }
    isOrigemSistema() {
        return /^system/.test(this.origem);
    }
    getClassIcone() {
        if (!isNill(this.icone)) {
            return this.icone;
        }
        const sistema = this.getSistema();
        return getIcone(sistema);
    }
    getSistema() {
        if (this.isOrigemSistema()) {
            return this.origem.split('@')[1];
        }
    }
    isProgressoEmAndamento() {
        return this.isProgresso() && this.isProgressoVisualizado();
    }
    isProgresso() {
        return this.prioridade === 1;
    }
    isProgressoVisualizado() {
        return this.status === 'OPEN';
    }
    getPercentualProgressoStyle() {
        return {
            width: `${this.percentualProgresso === null ? 100 : this.percentualProgresso}%`
        };
    }
    getTitleNotificacao() {
        if (this.isLida()) {
            return;
        }
        return this.possuiLinkResultado() ? this.getTitleLinkResultado() : 'Marcar como lido';
    }
    possuiLinkResultado() {
        return Boolean(this.resultadoLink);
    }
    getTitleLinkResultado() {
        return this.resultadoLink.title;
    }
    possuiLinkResultadoParaExibir() {
        return this.possuiLinkResultado() && !this.isProgressoEmAndamento();
    }
    possuiLinkAcompanharParaExibir() {
        return this.isProgressoVisualizado() && this.possuiLinkProgresso();
    }
    possuiLinkProgresso() {
        return Boolean(this.acompanharLink);
    }
    possuiLinkCancelarParaExibir() {
        return this.possuiLinkCancelar() && this.isProgressoVisualizado();
    }
    possuiLinkCancelar() {
        return Boolean(this.cancelamentoLink);
    }
    getLinkTarget(link) {
        switch (link.target) {
            case 'SELF':
                return '_self';
            case 'BLANK':
                return '_blank';
            default:
                return '_self';
        }
    }
    render() {
        return (h("div", { onClick: this.onClickPainel, title: this.getTitleNotificacao(), class: `notificacao ${!this.isLida() && !this.isProgressoEmAndamento() ? 'notificacao--unread' : ''}` },
            h("div", { class: "notificacao__body" },
                h("div", { class: "icon" }, this.isOrigemUsuario() ?
                    h("bth-icone", { icone: "account" }) :
                    h("bth-icone", { icone: this.getClassIcone(), title: getIconeTitle(this.getSistema()) })),
                h("p", { class: "mensagem" }, this.texto),
                !this.isProgressoEmAndamento() && (h("a", { href: "", title: `Marcar como ${!this.isLida() ? 'lido' : 'não lido'}`, onClick: this.onClick },
                    h("bth-icone", { class: "marcar-leitura__toggler", icone: !this.isLida() ? 'email-open-outline' : 'email-outline' })))),
            this.isProgressoEmAndamento() && (h("div", { class: `notificacao__progress ${this.possuiProgresso ? 'notificacao__progress--success' : 'notificacao__progress--indeterminate'}` },
                this.possuiProgresso && (h("div", { class: "notificacao__progress__percent" },
                    this.percentualProgresso === null ? 0 : this.percentualProgresso,
                    "%")),
                h("div", { class: "notificacao__progress__bar", style: this.getPercentualProgressoStyle() }))),
            h("div", { class: "notificacao__footer" },
                this.possuiLinkResultadoParaExibir() && (h("a", { href: this.resultadoLink.href, title: this.resultadoLink.title, target: this.getLinkTarget(this.resultadoLink), rel: "noreferrer" }, this.resultadoLink.label)),
                this.possuiLinkAcompanharParaExibir() && (h("a", { href: this.acompanharLink.href, title: this.acompanharLink.title, target: this.getLinkTarget(this.acompanharLink), rel: "noreferrer" }, "Acompanhar")),
                this.possuiLinkAcompanharParaExibir() && this.possuiLinkCancelarParaExibir() && (h("span", null, "\u00A0|\u00A0")),
                this.possuiLinkCancelarParaExibir() && (h("a", { href: this.cancelamentoLink.href, title: this.cancelamentoLink.title, target: this.getLinkTarget(this.cancelamentoLink), rel: "noreferrer" }, "Cancelar")),
                this.dataHora && (h("span", { class: "float-right", title: getDataHoraDescrita(this.dataHora) }, getDataHoraDescrita(this.dataHora))))));
    }
    static get is() { return "bth-notificacao-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["notificacao-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["notificacao-item.css"]
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
        "tipo": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "TipoNotificacao",
                "resolved": "TipoNotificacao.Lida | TipoNotificacao.NaoLida | TipoNotificacao.Progresso",
                "references": {
                    "TipoNotificacao": {
                        "location": "import",
                        "path": "../notificacoes.interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Tipo de notifica\u00E7\u00E3o"
            },
            "attribute": "tipo",
            "reflect": false
        },
        "texto": {
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
                "text": "Texto"
            },
            "attribute": "texto",
            "reflect": false
        },
        "dataHora": {
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
                "text": "Data e hora"
            },
            "attribute": "data-hora",
            "reflect": false
        },
        "origem": {
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
                "text": "Origem"
            },
            "attribute": "origem",
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
                "text": "\u00CDcone"
            },
            "attribute": "icone",
            "reflect": false
        },
        "resultadoLink": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "NotificacaoLink",
                "resolved": "NotificacaoLink",
                "references": {
                    "NotificacaoLink": {
                        "location": "import",
                        "path": "../notificacoes.interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Link resultado"
            }
        },
        "cancelamentoLink": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "NotificacaoLink",
                "resolved": "NotificacaoLink",
                "references": {
                    "NotificacaoLink": {
                        "location": "import",
                        "path": "../notificacoes.interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Link cancelamento"
            }
        },
        "acompanharLink": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "NotificacaoLink",
                "resolved": "NotificacaoLink",
                "references": {
                    "NotificacaoLink": {
                        "location": "import",
                        "path": "../notificacoes.interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Link acompanhar"
            }
        },
        "possuiProgresso": {
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
                "text": "Possui progresso?"
            },
            "attribute": "possui-progresso",
            "reflect": false
        },
        "percentualProgresso": {
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
                "text": "Percentual do progresso"
            },
            "attribute": "percentual-progresso",
            "reflect": false
        },
        "status": {
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
                "text": "Status"
            },
            "attribute": "status",
            "reflect": false
        },
        "prioridade": {
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
                "text": "Prioridade"
            },
            "attribute": "prioridade",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "notificacaoLida",
            "name": "notificacaoLida",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando uma notifica\u00E7\u00E3o \u00E9 marcada como lida"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "notificacaoNaoLida",
            "name": "notificacaoNaoLida",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando uma notifica\u00E7\u00E3o \u00E9 marcada como n\u00E3o lida"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
