import { Component, Listen, State, Event, h, Watch, Element, Prop } from '@stencil/core';
import { isValidAuthorizationConfig } from '../../global/api';
import { isNill } from '../../utils/functions';
import { PromiseTracker } from '../../utils/promise-tracker';
import { LIMITE_PAGINACAO, MessageType, ReadAction } from './notificacoes.constants';
import { TipoNotificacao } from './notificacoes.interfaces';
import { NotificacoesService } from './notificacoes.service';
import { sortByDateTime } from './notificacoes.utils';
import { NotificationWebSocket } from './notificacoes.websocket';
export class Notificacoes {
    constructor() {
        this.carregouTodasEmProgresso = false;
        this.carregouTodasNaoLidas = false;
        this.carregouTodasLidas = false;
        this.carregouNaoLidas = false;
        this.carregouLidas = false;
        this.carregouEmProgresso = false;
        this.tracker = new PromiseTracker((active) => {
            this.isBuscandoNotificacoes = active;
        });
        this.isInicializado = false;
        this.filtros = [
            { id: TipoNotificacao.NaoLida, icone: 'email-outline', descricao: 'Não lidas', ativo: true },
            { id: TipoNotificacao.Lida, icone: 'email-open-outline', descricao: 'Lidas' },
            { id: TipoNotificacao.Progresso, icone: 'clock-check-outline', descricao: 'Em andamento' },
        ];
        this.notificacoesNaoLidas = [];
        this.notificacoesLidas = [];
        this.notificacoesEmProgresso = [];
        this.quantidadeTotalNaoLidas = 0;
        this.quantidadeEmProgressoNaoLidas = 0;
        this.quantidadeEmNaoLidas = 0;
        this.isBuscandoNotificacoes = false;
        this.isApiIndisponivel = false;
        this.onClickMarcarTodasComoLidas = (event) => {
            event.preventDefault();
            if (this.quantidadeEmNaoLidas > 0) {
                this.notificacoesService.clearUnreads();
                this.marcarTodasComoLida();
            }
        };
        this.onContentScroll = (ev) => {
            const target = ev.target;
            const isEnd = target.offsetHeight + target.scrollTop >= target.scrollHeight;
            if (isEnd) {
                this.carregarNotificacoes();
            }
        };
    }
    onPainelLateralShow(data) {
        if (data.detail.show === true) {
            this.setFiltroNotificacaoPadrao();
        }
    }
    onNotificacaoLida(event) {
        if (!isNill(event.detail.url)) {
            window.open(event.detail.url, event.detail.target);
        }
        const notificacao = this.notificacoesNaoLidas.find(naoLida => naoLida.id === event.detail.id);
        if (isNill(notificacao)) {
            return;
        }
        this.notificacoesService
            .setRead(event.detail.id)
            .catch(() => {
            this.marcarNotificacaoComoNaoLida(notificacao);
        });
        this.marcarNotificacaoComoLida(notificacao);
    }
    onNotificacaoNaoLida(event) {
        const notificacao = this.notificacoesLidas.find(naoLida => naoLida.id === event.detail.id);
        if (isNill(notificacao)) {
            return;
        }
        this.notificacoesService
            .setUnread(event.detail.id)
            .catch(() => {
            this.marcarNotificacaoComoLida(notificacao);
        });
        this.marcarNotificacaoComoNaoLida(notificacao);
    }
    onNavbarPillItemClicked(data) {
        const { identificador } = data.detail;
        this.setFiltroNotificacao(TipoNotificacao[identificador]);
    }
    connectedCallback() {
        this.inicializarServices();
    }
    disconnectedCallback() {
        if (!isNill(this.websocket)) {
            this.websocket.close();
        }
    }
    onChangeQuantidadeTotalNaoLidas(novoValor) {
        const event = {
            possui: true,
            origem: 'notificacoes',
            quantidadeTotalNaoLidas: novoValor
        };
        if (novoValor <= 0) {
            event.possui = false;
        }
        this.conteudoSinalizado.emit(event);
    }
    onChangeApiRelatedProperties() {
        if (!isNill(this.websocket)) {
            this.websocket.close();
        }
        this.inicializarServices();
    }
    inicializarServices() {
        if (this.isConfiguracaoApiInconsistente()) {
            console.warn('[bth-notificacoes] O endereço do serviço de notificações e as credenciais de autenticação devem ser informados. Consulte a documentação do componente.');
            this.isApiIndisponivel = true;
            return;
        }
        this.isApiIndisponivel = false;
        this.notificacoesService = new NotificacoesService(this.authorization, this.getNotificacoesApi());
        this.inicializarWebSocket();
        this.resetarListasNotificacoes();
        this.isInicializado = true;
    }
    isConfiguracaoApiInconsistente() {
        if (isNill(this.getNotificacoesApi())) {
            return true;
        }
        if (!isValidAuthorizationConfig(this.authorization)) {
            return true;
        }
        return false;
    }
    setFiltroNotificacaoPadrao() {
        if (this.quantidadeEmNaoLidas > 0) {
            this.setFiltroNotificacao(TipoNotificacao.NaoLida);
        }
        else if (this.quantidadeEmProgressoNaoLidas > 0) {
            this.setFiltroNotificacao(TipoNotificacao.Progresso);
        }
        else {
            this.setFiltroNotificacao(TipoNotificacao.Lida);
        }
    }
    getNotificacoesApi() {
        var _a, _b, _c, _d, _e;
        if (!isNill(this.notificacoesApi)) {
            return this.notificacoesApi;
        }
        if ('___bth' in window) {
            return (_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['notifications']) === null || _d === void 0 ? void 0 : _d.v1) === null || _e === void 0 ? void 0 : _e.host;
        }
        return null;
    }
    getNotificacoesWs() {
        var _a, _b, _c, _d, _e;
        if (!isNill(this.notificacoesWs)) {
            return this.notificacoesWs;
        }
        if ('___bth' in window) {
            return ((_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['notifications-ws']) === null || _d === void 0 ? void 0 : _d.v1) === null || _e === void 0 ? void 0 : _e.host) + '/v2/channel';
        }
        return null;
    }
    inicializarWebSocket() {
        this.websocket = new NotificationWebSocket(this.authorization, this.getNotificacoesWs());
        this.websocket.addEventListener('message', (event) => {
            this.isApiIndisponivel = false;
            if (/type/.test(event.data)) {
                const message = JSON.parse(event.data);
                switch (message.type) {
                    case MessageType.STARTED:
                        this.onWebsocketStarted(message);
                        break;
                    case MessageType.NEW_NOTIFICATIONS:
                        this.onWebsocketNewNotifications(message);
                        break;
                    case MessageType.READ_ACTION:
                        this.onWebsocketReadAction(message);
                        break;
                    default:
                        break;
                }
            }
        });
        this.websocket.addEventListener('error', () => {
            this.isApiIndisponivel = true;
        });
    }
    onWebsocketStarted(message) {
        this.quantidadeTotalNaoLidas = message.unread;
        this.quantidadeEmProgressoNaoLidas = message.unreadInProgress;
        this.quantidadeEmNaoLidas = this.quantidadeTotalNaoLidas - this.quantidadeEmProgressoNaoLidas;
        this.setFiltroNotificacaoPadrao();
    }
    onWebsocketNewNotifications(message) {
        message.notifications.forEach(notification => {
            this.addNovaMensagem(notification);
        });
    }
    addNovaMensagem(message) {
        if (message.priority === 1) {
            this.addMensagemAltaPrioridade(message);
        }
        else {
            this.addMensagemNaoLida(message);
        }
        if (!isNill(message.link)) {
            this.novaNotificacaoComLink.emit({ texto: message.text, link: message.link });
        }
    }
    addMensagemNaoLida(message) {
        this.quantidadeTotalNaoLidas++;
        this.quantidadeEmNaoLidas++;
        this.notificacoesNaoLidas.unshift(message);
        this.notificacoesNaoLidas.sort(sortByDateTime);
    }
    addMensagemAltaPrioridade(message) {
        this.removerDeTodasListas(message.id);
        if (message.status === 'OPEN') {
            this.quantidadeTotalNaoLidas++;
            this.quantidadeEmProgressoNaoLidas++;
            this.notificacoesEmProgresso.unshift(message);
            this.notificacoesEmProgresso.sort(sortByDateTime);
        }
        else {
            if (message.read) {
                this.notificacoesLidas.unshift(message);
                this.notificacoesLidas.sort(sortByDateTime);
            }
            else {
                this.addMensagemNaoLida(message);
            }
        }
    }
    removerDeTodasListas(id) {
        this.notificacoesEmProgresso = this.notificacoesEmProgresso.filter(emProgresso => emProgresso.id !== id);
        this.notificacoesLidas = this.notificacoesLidas.filter(lidas => lidas.id !== id);
        this.notificacoesNaoLidas = this.notificacoesNaoLidas.filter(naoLidas => naoLidas.id !== id);
    }
    onWebsocketReadAction(message) {
        switch (message.readAction.action) {
            case ReadAction.READ_MESSAGE:
                this.marcarNotificacaoComoLida(message.readAction.message);
                break;
            case ReadAction.UNREAD_MESSAGE:
                this.marcarNotificacaoComoNaoLida(message.readAction.message);
                break;
            case ReadAction.READ_ALL_CLOSED:
                this.marcarTodasComoLida();
                break;
            case ReadAction.READ_ALL_IN_PROGRESS:
                this.marcarTodasEmProgressoComoLida();
                break;
            case ReadAction.READ_ALL:
                this.quantidadeTotalNaoLidas = 0;
                this.quantidadeEmNaoLidas = 0;
                this.resetarListasNotificacoes();
                break;
            default:
                break;
        }
    }
    marcarTodasComoLida() {
        this.quantidadeTotalNaoLidas -= this.quantidadeEmNaoLidas;
        this.quantidadeEmNaoLidas = 0;
        this.resetarListasNotificacoes();
    }
    resetarListasNotificacoes() {
        this.notificacoesNaoLidas = [];
        this.notificacoesLidas = [];
        this.notificacoesEmProgresso = [];
        this.carregouTodasEmProgresso = false;
        this.carregouTodasNaoLidas = false;
        this.carregouTodasLidas = false;
        this.carregouNaoLidas = false;
        this.carregouLidas = false;
        this.carregouEmProgresso = false;
    }
    marcarTodasEmProgressoComoLida() {
        this.quantidadeTotalNaoLidas -= this.quantidadeEmProgressoNaoLidas;
        this.quantidadeEmProgressoNaoLidas = 0;
    }
    marcarNotificacaoComoLida(notificacao) {
        const novasNotificacoesNaoLidas = this.notificacoesNaoLidas.filter(item => {
            return notificacao.id !== item.id;
        });
        if (novasNotificacoesNaoLidas.length !== this.notificacoesNaoLidas.length) {
            notificacao.read = true;
            this.quantidadeTotalNaoLidas--;
            this.quantidadeEmNaoLidas--;
            this.notificacoesLidas.push(notificacao);
            this.notificacoesLidas.sort(sortByDateTime);
            this.notificacoesNaoLidas = novasNotificacoesNaoLidas;
        }
        if (this.notificacoesNaoLidas.length < LIMITE_PAGINACAO) {
            this.carregarNotificacoes();
        }
    }
    marcarNotificacaoComoNaoLida(notificacao) {
        const novasNotificacoesLidas = this.notificacoesLidas.filter(item => {
            return notificacao.id !== item.id;
        });
        if (novasNotificacoesLidas.length !== this.notificacoesLidas.length) {
            notificacao.read = false;
            this.quantidadeTotalNaoLidas++;
            this.quantidadeEmNaoLidas++;
            this.notificacoesNaoLidas.push(notificacao);
            this.notificacoesNaoLidas.sort(sortByDateTime);
            this.notificacoesLidas = novasNotificacoesLidas;
        }
        if (this.notificacoesLidas.length < LIMITE_PAGINACAO) {
            this.carregarNotificacoes();
        }
    }
    carregarNotificacoesNaoLidas() {
        if (this.isConfiguracaoApiInconsistente()) {
            return;
        }
        let promise = this.notificacoesService
            .buscarNaoLidas(this.getPaginationQueryParams(this.notificacoesNaoLidas.length))
            .then(notificacoesNaoLidas => {
            this.carregouNaoLidas = true;
            this.notificacoesNaoLidas = this.notificacoesNaoLidas.concat(notificacoesNaoLidas.content).sort(sortByDateTime);
            this.carregouTodasNaoLidas = !notificacoesNaoLidas.hasNext;
            this.quantidadeEmNaoLidas = this.notificacoesNaoLidas.length + this.quantidadeEmProgressoNaoLidas;
            this.quantidadeTotalNaoLidas = this.quantidadeEmNaoLidas + this.quantidadeEmProgressoNaoLidas;
        })
            .catch(() => {
            this.isApiIndisponivel = true;
        });
        this.tracker.addPromise(promise);
    }
    carregarNotificacoesLidas() {
        if (this.isConfiguracaoApiInconsistente()) {
            return;
        }
        let promise = this.notificacoesService
            .buscarLidas(this.getPaginationQueryParams(this.notificacoesLidas.length))
            .then(notificacoesLidas => {
            this.carregouLidas = true;
            this.notificacoesLidas = this.notificacoesLidas.concat(notificacoesLidas.content).sort(sortByDateTime);
            this.carregouTodasLidas = !notificacoesLidas.hasNext;
        })
            .catch(() => {
            this.isApiIndisponivel = true;
        });
        this.tracker.addPromise(promise);
    }
    carregarNotificacoesEmProgresso() {
        if (this.isConfiguracaoApiInconsistente()) {
            return;
        }
        let promise = this.notificacoesService
            .buscarEmProgresso(this.getPaginationQueryParams(this.notificacoesEmProgresso.length))
            .then(notificacoesEmProgresso => {
            this.carregouEmProgresso = true;
            this.notificacoesEmProgresso = this.notificacoesEmProgresso.concat(notificacoesEmProgresso.content).sort(sortByDateTime);
            this.carregouTodasEmProgresso = !notificacoesEmProgresso.hasNext;
        })
            .catch(() => {
            this.isApiIndisponivel = true;
        });
        this.tracker.addPromise(promise);
    }
    getPaginationQueryParams(offset) {
        return { offset: offset, limit: LIMITE_PAGINACAO };
    }
    getOpcaoFiltroAtivo() {
        return this.filtros.filter(filtro => filtro.ativo === true)[0];
    }
    setFiltroNotificacao(filtro) {
        this.filtros = this.filtros.map(_filtro => {
            _filtro.ativo = _filtro.id === filtro;
            return _filtro;
        });
        let filtroAtivo = this.getOpcaoFiltroAtivo();
        if (!this.carregouLidas && filtroAtivo.id === TipoNotificacao.Lida) {
            this.carregarNotificacoesLidas();
            return;
        }
        if (!this.carregouNaoLidas && filtroAtivo.id === TipoNotificacao.NaoLida) {
            this.carregarNotificacoesNaoLidas();
            return;
        }
        if (!this.carregouEmProgresso && filtroAtivo.id === TipoNotificacao.Progresso) {
            this.carregarNotificacoesEmProgresso();
            return;
        }
    }
    hasNotificacoes() {
        if (this.isFiltroPorLidas()) {
            return this.notificacoesLidas.length > 0;
        }
        if (this.isFiltroPorNaoLidas()) {
            return this.notificacoesNaoLidas.length > 0;
        }
        if (this.isFiltroPorProgresso()) {
            return this.notificacoesEmProgresso.length > 0;
        }
        return false;
    }
    getNotificacoesPorFiltroAtivo() {
        if (this.isFiltroPorLidas()) {
            return this.notificacoesLidas;
        }
        if (this.isFiltroPorNaoLidas()) {
            return this.notificacoesNaoLidas;
        }
        if (this.isFiltroPorProgresso()) {
            return this.notificacoesEmProgresso;
        }
    }
    isFiltroPorLidas() {
        return this.getOpcaoFiltroAtivo().id === TipoNotificacao.Lida;
    }
    isFiltroPorNaoLidas() {
        return this.getOpcaoFiltroAtivo().id === TipoNotificacao.NaoLida;
    }
    isFiltroPorProgresso() {
        return this.getOpcaoFiltroAtivo().id === TipoNotificacao.Progresso;
    }
    carregarNotificacoes() {
        if (this.isBuscandoNotificacoes || this.isApiIndisponivel) {
            return;
        }
        const filtroAtivo = this.getOpcaoFiltroAtivo();
        if (filtroAtivo.id === TipoNotificacao.Lida && !this.carregouTodasLidas) {
            this.carregarNotificacoesLidas();
            return;
        }
        if (filtroAtivo.id === TipoNotificacao.NaoLida && !this.carregouTodasNaoLidas) {
            this.carregarNotificacoesNaoLidas();
            return;
        }
        if (filtroAtivo.id === TipoNotificacao.Progresso && !this.carregouTodasEmProgresso) {
            this.carregarNotificacoesEmProgresso();
            return;
        }
    }
    renderLoader() {
        if (!this.isBuscandoNotificacoes) {
            return;
        }
        const isPageLoader = this.getNotificacoesPorFiltroAtivo().length <= 0;
        return (h("div", { class: `loader ${isPageLoader ? 'loader--full-page' : 'loader--list-bottom'}` },
            h("bth-loader", null)));
    }
    getHeightPainelNotificacoes() {
        const style = {};
        if (!isNill(this.heightPainelNotificacoes)) {
            style.height = this.heightPainelNotificacoes;
        }
        return style;
    }
    render() {
        const notificacoesConteudo = () => [
            h("div", null,
                !this.isApiIndisponivel && (h("bth-navbar-pill-group", { descricao: "Notifica\u00E7\u00F5es" }, this.filtros.map(filtro => (h("bth-navbar-pill-item", { key: filtro.id.toString(), identificador: filtro.id.toString(), icone: filtro.icone, descricao: filtro.descricao, ativo: filtro.ativo, totalizador: filtro.id === TipoNotificacao.NaoLida ? this.quantidadeEmNaoLidas : (filtro.id === TipoNotificacao.Progresso ? this.quantidadeEmProgressoNaoLidas : 0), showTotalizador: !this.isBuscandoNotificacoes }))))),
                !this.isApiIndisponivel && this.hasNotificacoes() && this.isFiltroPorNaoLidas() && !this.isBuscandoNotificacoes && (h("div", { class: "text-right" },
                    h("a", { class: "link", href: "", title: "Marcar todas como lidas", onClick: this.onClickMarcarTodasComoLidas }, "Marcar todas como lidas"))),
                h("div", { style: this.getHeightPainelNotificacoes(), class: "painel-notificacoes", onScroll: this.onContentScroll },
                    !this.isApiIndisponivel && !this.hasNotificacoes() && !this.isBuscandoNotificacoes && (h("div", { class: "empty-notificacoes" },
                        h("div", { class: "empty-notificacoes__img" }),
                        h("h4", null, "N\u00E3o h\u00E1 notifica\u00E7\u00F5es por aqui"))),
                    this.isApiIndisponivel && !this.isBuscandoNotificacoes && (h("div", { class: "empty-notificacoes" },
                        h("div", { class: "empty-notificacoes-inconsistency" }),
                        h("h4", null, "As notifica\u00E7\u00F5es est\u00E3o temporariamente indispon\u00EDveis"))),
                    !this.isApiIndisponivel && (h("ul", { class: "notificacoes-lista" }, this
                        .getNotificacoesPorFiltroAtivo()
                        .map(notificacao => (h("li", { key: notificacao.id },
                        h("bth-notificacao-item", { identificador: notificacao.id, tipo: this.getOpcaoFiltroAtivo().id, texto: notificacao.text, dataHora: notificacao.dateTime, origem: notificacao.source, icone: notificacao.icon, resultadoLink: notificacao.link, cancelamentoLink: notificacao.cancellationLink, acompanharLink: notificacao.trackingLink, possuiProgresso: notificacao.progress, percentualProgresso: notificacao.percentage, status: notificacao.status, prioridade: notificacao.priority })))))),
                    this.renderLoader()))
        ];
        if (this.onlyContent)
            return (h("div", null, notificacoesConteudo()));
        return (h("bth-menu-ferramenta", { descricao: "Notifica\u00E7\u00F5es", tituloPainelLateral: "Notifica\u00E7\u00F5es" },
            h("bth-menu-ferramenta-icone", { slot: "menu_item_mobile", icone: "bell", contador: this.quantidadeTotalNaoLidas, mobile: true }),
            h("span", { slot: "menu_descricao_mobile", class: "descricao-mobile" }, "Notifica\u00E7\u00F5es"),
            h("bth-menu-ferramenta-icone", { slot: "menu_item_desktop", icone: "bell", contador: this.quantidadeTotalNaoLidas }),
            h("section", { slot: "conteudo_painel_lateral" }, notificacoesConteudo())));
    }
    static get is() { return "bth-notificacoes"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["notificacoes.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["notificacoes.css"]
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
        "onlyContent": {
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
                "text": "True, exibe somente o box de notifica\u00E7\u00F5es, sem barra e badge"
            },
            "attribute": "only-content",
            "reflect": false
        },
        "heightPainelNotificacoes": {
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
                "text": "Altura do painel de notifica\u00E7\u00F5es"
            },
            "attribute": "height-painel-notificacoes",
            "reflect": false
        },
        "notificacoesApi": {
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
                "text": "URL para a api de notifica\u00E7\u00F5es. Por padr\u00E3o ir\u00E1 obter do env.js"
            },
            "attribute": "notificacoes-api",
            "reflect": false
        },
        "notificacoesWs": {
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
                "text": "URL para o channel websocket de notifica\u00E7\u00F5es. Por padr\u00E3o ir\u00E1 obter do env.js"
            },
            "attribute": "notificacoes-ws",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isInicializado": {},
        "filtros": {},
        "notificacoesNaoLidas": {},
        "notificacoesLidas": {},
        "notificacoesEmProgresso": {},
        "quantidadeTotalNaoLidas": {},
        "quantidadeEmProgressoNaoLidas": {},
        "quantidadeEmNaoLidas": {},
        "isBuscandoNotificacoes": {},
        "isApiIndisponivel": {}
    }; }
    static get events() { return [{
            "method": "conteudoSinalizado",
            "name": "conteudoSinalizado",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando houver notifica\u00E7\u00F5es lidas ou n\u00E3o lidas a ser sinalizadas ao menu"
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
        }, {
            "method": "novaNotificacaoComLink",
            "name": "novaNotificacaoComLink",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u00C9 emitido quando alguma notifica\u00E7\u00E3o do tipo mensagem for recebida"
            },
            "complexType": {
                "original": "NotificacaoComLinkEvent",
                "resolved": "NotificacaoComLinkEvent",
                "references": {
                    "NotificacaoComLinkEvent": {
                        "location": "import",
                        "path": "./notificacoes.interfaces"
                    }
                }
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "quantidadeTotalNaoLidas",
            "methodName": "onChangeQuantidadeTotalNaoLidas"
        }, {
            "propName": "authorization",
            "methodName": "onChangeApiRelatedProperties"
        }, {
            "propName": "notificacoesApi",
            "methodName": "onChangeApiRelatedProperties"
        }, {
            "propName": "notificacoesWs",
            "methodName": "onChangeApiRelatedProperties"
        }]; }
    static get listeners() { return [{
            "name": "painelLateralShow",
            "method": "onPainelLateralShow",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "notificacaoLida",
            "method": "onNotificacaoLida",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "notificacaoNaoLida",
            "method": "onNotificacaoNaoLida",
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
