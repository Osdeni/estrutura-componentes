import { Component, h, forceUpdate, State, Prop, Watch, Event, Listen } from '@stencil/core';
import { isValidAuthorizationConfig } from '../../global/api';
import { isNill } from '../../utils/functions';
import { POLLING_INTERVAL } from './novidades.constants';
import { FiltroNovidade } from './novidades.interfaces';
import { NovidadesService } from './novidades.service';
import { sortByDataInicial } from './novidades.utils';
export class Novidades {
    constructor() {
        this.isBuscandoNovidades = false;
        this.isApiIndisponivel = false;
        this.filtros = [
            { id: FiltroNovidade.NaoLida, descricao: 'Não lidas', icone: 'email-outline', ativo: true },
            { id: FiltroNovidade.Lida, descricao: 'Lidas', icone: 'email-open-outline' },
        ];
        this.novidades = [];
        this.onClickMarcarTodasComoLidas = (event) => {
            event.preventDefault();
            this.novidades
                .filter(novidade => !this.novidadesService.isLida(novidade.id))
                .forEach(novidade => this.novidadesService.marcarComoLida(novidade.id));
            forceUpdate(this);
            this.atualizarIndicadorConteudoSinalizado();
        };
    }
    onPainelLateralShow(data) {
        if (data.detail.show === true) {
            this.setFiltroNovidadePadrao();
        }
    }
    onNovidadeLida(data) {
        const { id, url } = data.detail;
        this.novidadesService.marcarComoLida(id);
        window.open(url, '_blank');
        forceUpdate(this);
        this.atualizarIndicadorConteudoSinalizado();
    }
    onNovidadeNaoLida(data) {
        const { id } = data.detail;
        this.novidadesService.marcarComoNaoLida(id);
        forceUpdate(this);
        this.atualizarIndicadorConteudoSinalizado();
    }
    onNavbarPillItemClicked(data) {
        const { identificador } = data.detail;
        this.setFiltroNovidade(FiltroNovidade[identificador]);
    }
    watchAuthorization() {
        this.handleBuscar();
    }
    watchNovidadesApi() {
        return this.handleBuscar();
    }
    connectedCallback() {
        return this.handleBuscar();
    }
    disconnectedCallback() {
        window.clearInterval(this.pollingHandler);
    }
    async handleBuscar() {
        this.stopPollingListener();
        await this.buscar();
        this.startPollingListener();
    }
    stopPollingListener() {
        if (isNill(this.pollingHandler)) {
            return;
        }
        window.clearInterval(this.pollingHandler);
        this.pollingHandler = undefined;
    }
    startPollingListener() {
        this.pollingHandler = setInterval(() => this.buscar(), POLLING_INTERVAL);
    }
    async buscar() {
        if (this.isConfiguracaoApiInconsistente()) {
            console.warn('[bth-novidades] O endereço do serviço de novidades e as credenciais de autenticação devem ser informados. Consulte a documentação do componente.');
            this.isApiIndisponivel = true;
            return;
        }
        this.isApiIndisponivel = false;
        this.isBuscandoNovidades = true;
        try {
            this.novidadesService = new NovidadesService(this.authorization, this.getNovidadesApi());
            const novidades = await this.novidadesService.buscar();
            this.novidades = [...novidades.sort(sortByDataInicial)];
            this.setFiltroNovidade(FiltroNovidade.NaoLida);
            this.atualizarIndicadorConteudoSinalizado();
        }
        catch (_a) {
            this.isApiIndisponivel = true;
        }
        finally {
            this.isBuscandoNovidades = false;
        }
    }
    isConfiguracaoApiInconsistente() {
        if (isNill(this.getNovidadesApi())) {
            return true;
        }
        if (!isValidAuthorizationConfig(this.authorization)) {
            return true;
        }
        return false;
    }
    setFiltroNovidadePadrao() {
        this.setFiltroNovidade(FiltroNovidade.NaoLida);
    }
    atualizarIndicadorConteudoSinalizado() {
        const event = {
            possui: true,
            origem: 'novidades'
        };
        if (this.getQtdNaoLidas() <= 0) {
            event.possui = false;
        }
        this.conteudoSinalizado.emit(event);
    }
    getNovidadesApi() {
        if (!isNill(this.novidadesApi)) {
            return this.novidadesApi;
        }
        if ('___bth' in window) {
            return window['___bth'].envs.suite['avisos'].v1.host;
        }
        return null;
    }
    setFiltroNovidade(novoFiltro) {
        this.filtros = this.filtros.map(filtro => {
            filtro.ativo = filtro.id === novoFiltro;
            return filtro;
        });
    }
    getQtdNaoLidas() {
        return this.novidades.filter(novidade => !this.novidadesService.isLida(novidade.id)).length;
    }
    getQtdLidas() {
        return this.novidades.filter(novidade => this.novidadesService.isLida(novidade.id)).length;
    }
    getOpcaoFiltroAtivo() {
        return this.filtros.filter(filtro => filtro.ativo === true)[0];
    }
    isFiltroPorLidas() {
        return this.getOpcaoFiltroAtivo().id === FiltroNovidade.Lida;
    }
    isFiltroPorNaoLidas() {
        return this.getOpcaoFiltroAtivo().id === FiltroNovidade.NaoLida;
    }
    isEmptyStateVisible() {
        if (this.isApiIndisponivel) {
            return false;
        }
        if (this.isBuscandoNovidades) {
            return false;
        }
        if (this.isFiltroPorNaoLidas() && this.getQtdNaoLidas() === 0) {
            return true;
        }
        if (this.isFiltroPorLidas() && this.getQtdLidas() === 0) {
            return true;
        }
        return false;
    }
    renderLoader() {
        if (!this.isBuscandoNovidades) {
            return;
        }
        const isPageLoader = this.novidades.length <= 0;
        return (h("div", { class: `loader ${isPageLoader ? 'loader--full-page' : 'loader--list-bottom'}` },
            h("bth-loader", null)));
    }
    render() {
        const totalNaoLida = this.getQtdNaoLidas();
        const totalLida = this.getQtdLidas();
        return (h("bth-menu-ferramenta", { descricao: "Novidades", tituloPainelLateral: "Novidades" },
            h("bth-menu-ferramenta-icone", { slot: "menu_item_mobile", icone: "gift", contador: totalNaoLida, mobile: true }),
            h("span", { slot: "menu_descricao_mobile", class: "descricao-mobile" }, "Novidades"),
            h("bth-menu-ferramenta-icone", { slot: "menu_item_desktop", icone: "gift", contador: totalNaoLida }),
            h("section", { slot: "conteudo_painel_lateral" },
                !this.isApiIndisponivel && (h("bth-navbar-pill-group", { descricao: "Novidades" }, this.filtros.map(filtro => (h("bth-navbar-pill-item", { key: filtro.id.toString(), identificador: filtro.id.toString(), icone: filtro.icone, descricao: filtro.descricao, ativo: filtro.ativo, totalizador: filtro.id === FiltroNovidade.NaoLida ? totalNaoLida : totalLida, showTotalizador: !this.isBuscandoNovidades }))))),
                totalNaoLida !== 0 && this.isFiltroPorNaoLidas() && (h("div", { class: "marcar-todas" },
                    h("a", { href: "", onClick: this.onClickMarcarTodasComoLidas }, "Marcar todas como lidas"))),
                h("div", { class: "painel-novidades" },
                    this.isEmptyStateVisible() && !this.isBuscandoNovidades && (h("section", { class: "empty-state-container" },
                        h("div", { class: "sem-registros" }),
                        h("h4", null, "N\u00E3o h\u00E1 novidades por aqui"))),
                    this.isApiIndisponivel && !this.isBuscandoNovidades && (h("section", { class: "empty-state-container" },
                        h("div", { class: "indisponivel" }),
                        h("h4", null, "As novidades est\u00E3o temporariamente indispon\u00EDveis"))),
                    !this.isApiIndisponivel && (h("ul", { class: "lista" },
                        this.isFiltroPorLidas() && (this.novidades.map(novidade => {
                            if (this.novidadesService.isLida(novidade.id)) {
                                return (h("li", { key: novidade.id },
                                    h("bth-novidade-item", { identificador: novidade.id, titulo: novidade.titulo, mensagem: novidade.mensagem, url: novidade.url, dataHora: novidade.dataInicial, isLida: true })));
                            }
                        })),
                        this.isFiltroPorNaoLidas() && (this.novidades.map(novidade => {
                            if (!this.novidadesService.isLida(novidade.id)) {
                                return (h("li", { key: novidade.id },
                                    h("bth-novidade-item", { identificador: novidade.id, titulo: novidade.titulo, mensagem: novidade.mensagem, url: novidade.url, dataHora: novidade.dataInicial, isLida: false })));
                            }
                        })))),
                    this.renderLoader()))));
    }
    static get is() { return "bth-novidades"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["novidades.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["novidades.css"]
    }; }
    static get properties() { return {
        "authorization": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "AuthorizationConfig",
                "resolved": "AuthorizationConfig",
                "references": {
                    "AuthorizationConfig": {
                        "location": "import",
                        "path": "../../global/interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Configura\u00E7\u00E3o de autoriza\u00E7\u00E3o. \u00C9 necess\u00E1ria para o componente poder realizar autentizar com os servi\u00E7os."
            }
        },
        "novidadesApi": {
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
                "text": "URL para a api de novidades. Por padr\u00E3o ir\u00E1 obter do env.js."
            },
            "attribute": "novidades-api",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isBuscandoNovidades": {},
        "isApiIndisponivel": {},
        "filtros": {},
        "novidades": {}
    }; }
    static get events() { return [{
            "method": "conteudoSinalizado",
            "name": "conteudoSinalizado",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando houver novidades lidas ou n\u00E3o lidas a ser sinalizadas ao menu"
            },
            "complexType": {
                "original": "ConteudoSinalizadoEvent",
                "resolved": "ConteudoSinalizadoEvent",
                "references": {
                    "ConteudoSinalizadoEvent": {
                        "location": "import",
                        "path": "../app/app.interfaces"
                    }
                }
            }
        }]; }
    static get watchers() { return [{
            "propName": "authorization",
            "methodName": "watchAuthorization"
        }, {
            "propName": "novidadesApi",
            "methodName": "watchNovidadesApi"
        }]; }
    static get listeners() { return [{
            "name": "painelLateralShow",
            "method": "onPainelLateralShow",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "novidadeLida",
            "method": "onNovidadeLida",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "novidadeNaoLida",
            "method": "onNovidadeNaoLida",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "navbarPillItemClicked",
            "method": "onNavbarPillItemClicked",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
