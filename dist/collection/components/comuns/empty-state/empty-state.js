import { Component, Host, Prop, h } from '@stencil/core';
export class EmptyState {
    constructor() {
        /**
         * Define se o empty state está visível
         */
        this.show = false;
        /**
         * Define se o empty state é para registros
         */
        this.registros = false;
        /**
         * Define se o empty state é para registros com pesquisa
         */
        this.registrosPesquisa = false;
        /**
        * Define se o empty state é para conexão online
        */
        this.online = false;
        /**
        * Define se o empty state é para conexão offline
        */
        this.offline = false;
        /**
        * Define se o empty state é para página não encontrada
        */
        this.paginaNaoEncontrada = false;
        /**
        * Define se o empty state é de tamanho pequeno
        */
        this.pequeno = false;
    }
    render() {
        return (h(Host, null,
            h("section", { class: `empty-state ${this.pequeno ? 'empty-state--small' : ''} ${this.show ? 'empty-state--show' : ''}` },
                h("slot", null,
                    this.registros && ([
                        h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/records.svg", alt: "Ainda n\u00E3o h\u00E1 registros por aqui" }),
                        h("h4", null, "Ainda n\u00E3o h\u00E1 registros por aqui"),
                    ]),
                    this.registrosPesquisa && ([
                        h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/list.svg", alt: "Nenhum resultado encontrado. Os filtros ou a ortografia dos termos utilizados na pesquisa podem ser revisados." }),
                        h("h4", null, "Nenhum resultado encontrado para sua pesquisa"),
                        h("p", null,
                            "- Tente utilizar uma combina\u00E7\u00E3o diferente de filtros",
                            h("br", null),
                            "- Revise a ortografia dos termos digitados"),
                    ]),
                    this.online && ([
                        h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/online.svg", alt: "Conex\u00E3o com a Internet est\u00E1vel" }),
                        h("h4", null, "Sua conex\u00E3o est\u00E1 est\u00E1vel"),
                    ]),
                    this.offline && ([
                        h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/offline.svg", alt: "Desconectado da Internet" }),
                        h("h4", null, "Voc\u00EA est\u00E1 offline"),
                        h("p", null, "Isso pode prejudicar as suas atividades no sistema")
                    ]),
                    this.paginaNaoEncontrada && ([
                        h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/404.svg", alt: "P\u00E1gina n\u00E3o encontrada" }),
                        h("h4", null, "Ops! Ocorreu um erro"),
                        h("p", null, "A p\u00E1gina que voc\u00EA tentou acessar n\u00E3o foi encontrada")
                    ])))));
    }
    static get is() { return "bth-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["empty-state.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["empty-state.css"]
    }; }
    static get properties() { return {
        "show": {
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
                "text": "Define se o empty state est\u00E1 vis\u00EDvel"
            },
            "attribute": "show",
            "reflect": false,
            "defaultValue": "false"
        },
        "registros": {
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
                "text": "Define se o empty state \u00E9 para registros"
            },
            "attribute": "registros",
            "reflect": false,
            "defaultValue": "false"
        },
        "registrosPesquisa": {
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
                "text": "Define se o empty state \u00E9 para registros com pesquisa"
            },
            "attribute": "registros-pesquisa",
            "reflect": false,
            "defaultValue": "false"
        },
        "online": {
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
                "text": "Define se o empty state \u00E9 para conex\u00E3o online"
            },
            "attribute": "online",
            "reflect": false,
            "defaultValue": "false"
        },
        "offline": {
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
                "text": "Define se o empty state \u00E9 para conex\u00E3o offline"
            },
            "attribute": "offline",
            "reflect": false,
            "defaultValue": "false"
        },
        "paginaNaoEncontrada": {
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
                "text": "Define se o empty state \u00E9 para p\u00E1gina n\u00E3o encontrada"
            },
            "attribute": "pagina-nao-encontrada",
            "reflect": false,
            "defaultValue": "false"
        },
        "pequeno": {
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
                "text": "Define se o empty state \u00E9 de tamanho pequeno"
            },
            "attribute": "pequeno",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
