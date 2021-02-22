import { Component, State, h, Element, Prop, Watch, Event } from '@stencil/core';
import { isNill, getCssVariableValue } from '../../utils/functions';
import { DEFAULT_AVATAR_URL } from './conta-usuario.constants';
/**
 * Este componente exibe informações relacionadas ao usuário/conta logada
 *
 * Este componente foi elaborado para comportar o slot "menu_ferramentas"
 */
export class ContaUsuario {
    constructor() {
        this.erroCarregarFotoAvatar = false;
        this.onLogout = (event) => {
            event.preventDefault();
            this.logout.emit({ usuario: this.usuario, nome: this.nome });
        };
        this.onImageLoadError = () => {
            this.erroCarregarFotoAvatar = true;
        };
    }
    async watchFotoUrl() {
        this.erroCarregarFotoAvatar = false;
    }
    getCentralUsuarioHome() {
        if (!isNill(this.centralUsuarioHome)) {
            return this.centralUsuarioHome;
        }
        if ('___bth' in window) {
            return window['___bth'].envs.suite['central-usuarios'].v1.host;
        }
        return null;
    }
    getUrlImagemPerfil() {
        if (isNill(this.fotoUrl) || this.erroCarregarFotoAvatar) {
            return DEFAULT_AVATAR_URL;
        }
        return this.fotoUrl;
    }
    renderMenuItemMobile() {
        return (h("div", { slot: "menu_item_mobile" },
            h("bth-avatar", { class: "avatar-mobile", src: this.getUrlImagemPerfil(), title: `Foto de ${this.nome}`, dimensao: 54, borda: true, bordaTamanho: "2px", bordaCor: getCssVariableValue('--bth-app-blue'), bordaRaio: "50%", onImageLoadError: this.onImageLoadError }),
            h("div", { class: "avatar-mobile-badge" },
                h("bth-icone", { icone: "cog" }))));
    }
    renderMenuDescricaoMobile() {
        return (h("section", { slot: "menu_descricao_mobile", class: "perfil-usuario" },
            h("div", null,
                h("span", { class: "perfil-usuario__nome", title: this.nome }, this.nome),
                h("span", { class: "perfil-usuario__id", title: `@${this.usuario}` },
                    "@",
                    this.usuario))));
    }
    renderMenuItemDesktop() {
        return (h("section", { slot: "menu_item_desktop" },
            h("bth-avatar", { class: "avatar-desktop", src: this.getUrlImagemPerfil(), title: `Foto de ${this.nome}`, tamanho: "menor", borda: true, bordaTamanho: "2px", bordaCor: getCssVariableValue('--bth-app-gray-light-10'), bordaRaio: "50%", onImageLoadError: this.onImageLoadError })));
    }
    renderConteudoPainelLateral() {
        return (h("section", { slot: "conteudo_painel_lateral", class: "painel-usuario" },
            h("div", { class: "perfil-usuario" },
                h("bth-avatar", { src: this.getUrlImagemPerfil(), title: `Foto de ${this.nome}`, dimensao: 120, borda: true, bordaTamanho: "2px", bordaCor: getCssVariableValue('--bth-app-blue'), bordaRaio: "50%", onImageLoadError: this.onImageLoadError }),
                h("div", null,
                    h("span", { class: "perfil-usuario__nome", title: this.nome }, this.nome),
                    h("span", { class: "perfil-usuario__id", title: `@${this.usuario}` },
                        "@",
                        this.usuario))),
            h("ul", null,
                h("li", null,
                    h("a", { href: this.getCentralUsuarioHome(), target: "_blank", title: "Editar", rel: "noreferrer" },
                        h("bth-icone", { icone: "pencil" }),
                        " Editar")),
                h("li", null,
                    h("a", { href: "", title: "Sair", onClick: this.onLogout },
                        h("bth-icone", { icone: "login-variant" }),
                        " Sair")))));
    }
    render() {
        return (h("bth-menu-ferramenta", { descricao: "Conta do usu\u00E1rio" },
            this.renderMenuItemMobile(),
            this.renderMenuDescricaoMobile(),
            this.renderMenuItemDesktop(),
            this.renderConteudoPainelLateral()));
    }
    static get is() { return "bth-conta-usuario"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["conta-usuario.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["conta-usuario.css"]
    }; }
    static get properties() { return {
        "centralUsuarioHome": {
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
                "text": "URL para home da Central de Usu\u00E1rios. Por padr\u00E3o ir\u00E1 obter do env.js."
            },
            "attribute": "central-usuario-home",
            "reflect": false
        },
        "fotoUrl": {
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
                "text": "URL para foto de avatar do usu\u00E1rio"
            },
            "attribute": "foto-url",
            "reflect": false
        },
        "nome": {
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
                "text": "Nome do usu\u00E1rio"
            },
            "attribute": "nome",
            "reflect": false
        },
        "usuario": {
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
                "text": "Usu\u00E1rio (\"username\" ou \"email\")"
            },
            "attribute": "usuario",
            "reflect": false
        }
    }; }
    static get states() { return {
        "erroCarregarFotoAvatar": {}
    }; }
    static get events() { return [{
            "method": "logout",
            "name": "logout",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido ao clicar em Sair (\"logout\")"
            },
            "complexType": {
                "original": "LogoutEvent",
                "resolved": "LogoutEvent",
                "references": {
                    "LogoutEvent": {
                        "location": "import",
                        "path": "./conta-usuario.interfaces"
                    }
                }
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "fotoUrl",
            "methodName": "watchFotoUrl"
        }]; }
}
