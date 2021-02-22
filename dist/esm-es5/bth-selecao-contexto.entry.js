var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, h, H as Host, g as getElement } from './index-97eb0dde.js';
import { P as PromiseTracker, i as isNill } from './promise-tracker-7ca963d0.js';
var selecaoContextoCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.selecao-contexto{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0 auto}.selecao-contexto ::slotted(h3){margin:10px 0;font-size:20px;font-weight:500}.selecao-contexto__search{display:-ms-inline-flexbox !important;display:inline-flex !important;position:relative;width:100%;margin-bottom:10px}.selecao-contexto__search input{border:1px solid silver;border-radius:2px;-webkit-box-shadow:none;box-shadow:none;color:var(--bth-app-gray-dark-30);font-size:13px;width:100%;height:34px;padding:6px 12px;background-color:var(--bth-app-gray-light-40);display:block;margin:0}.selecao-contexto__search input:focus{border-color:var(--bth-app-blue);-webkit-box-shadow:none;box-shadow:none;outline:none}.selecao-contexto__search input[disabled]{background-color:var(--bth-app-gray-light-20);border-color:var(--bth-app-gray);color:var(--bth-app-gray-dark-10);cursor:not-allowed}.selecao-contexto__body{max-height:480px;overflow-y:auto}.selecao-contexto__body--loader{height:200px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.selecao-contexto__body ul li{width:100%;outline:none;position:relative}.selecao-contexto__body ul li:not(:last-child){margin-bottom:8px}.selecao-contexto__body ul li bth-icone{position:absolute;top:42px;left:42px;width:20px;height:20px;padding:0px 2px;background:var(--bth-app-gray-light-40);border-radius:50%;font-size:16px;text-align:center;line-height:1.3 !important;z-index:1}.selecao-contexto__body ul li a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;cursor:pointer;border-radius:2px;background-color:var(--bth-app-gray-light-30);width:100%;padding:12px;text-decoration:none;color:var(--bth-app-gray-dark-30);outline:none}.selecao-contexto__body ul li a section{padding:0 12px}.selecao-contexto__body ul li a section h4{font-size:18px;font-weight:500;line-height:1.1}.selecao-contexto__body ul li a section p{margin-top:6px;color:var(--bth-app-gray-dark-20);font-size:12px;line-height:1.5}.selecao-contexto__body ul li a:focus{-webkit-box-shadow:inset 0 0 0 1px var(--bth-app-blue);box-shadow:inset 0 0 0 1px var(--bth-app-blue)}.selecao-contexto__body ul li a:hover{background-color:var(--bth-app-gray-light-10)}.selecao-contexto__body ul li span{padding:0 12px;font-size:16px}.selecao-contexto ::-webkit-scrollbar{width:12px !important;background-color:transparent !important}.selecao-contexto ::-webkit-scrollbar-track,.selecao-contexto ::-webkit-scrollbar-thumb{background-clip:content-box !important}.selecao-contexto ::-webkit-scrollbar-track{background:unset !important;border-right:6px solid var(--bth-app-gray-light-30) !important}.selecao-contexto ::-webkit-scrollbar-thumb{border-left:6px solid rgba(255, 255, 255, 0) !important;border-radius:0 !important}@media (min-width: 576px){.selecao-contexto{width:100%}}@media (min-width: 768px){.selecao-contexto{width:80%}}@media (min-width: 992px){.selecao-contexto{width:55%}}@media (min-width: 1200px){.selecao-contexto{width:45%}}";
var SelecaoContexto = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.tracker = new PromiseTracker(function (active) {
            _this.isBuscandoItens = active;
        });
        this.itens = [];
        this.itensFiltrados = [];
        this.possuiSlotSemResultadoDeclarado = false;
        this.buscarItens = function () { return __awaiter(_this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return __generator(this, function (_b) {
                if (isNill(this.buscar)) {
                    return [2 /*return*/];
                }
                promise = this.buscar()
                    .then(function (itens) {
                    _this.itens = __spreadArrays(itens);
                    _this.itensFiltrados = __spreadArrays(itens);
                });
                this.tracker.addPromise(promise);
                return [2 /*return*/];
            });
        }); };
        this.onSelecionar = function (event, item) {
            event.preventDefault();
            _this.selecionar(item);
        };
        this.onInputSearch = function (event) {
            _this.termoPesquisa = event.target.value;
            _this.itensFiltrados = _this.itens
                .filter(function (item) { return item.descricao && item.descricao.toUpperCase().includes(_this.termoPesquisa.toUpperCase()); });
        };
        this.possuiImagemAvatar = function (item) {
            return item.imagemAvatar !== undefined;
        };
        this.possuiIcone = function (item) {
            return item.icone !== undefined;
        };
        this.getTipoEmptyState = function () {
            if (_this.possuiSlotSemResultadoDeclarado) {
                return null;
            }
            if (_this.termoPesquisa !== undefined && _this.termoPesquisa.length > 0) {
                return { registrosPesquisa: true };
            }
            return { registros: true };
        };
        this.isElementLink = function (element) { return element.tagName === 'A'; };
        this.isElementInput = function (element) { return element.tagName === 'INPUT'; };
    }
    class_1.prototype.connectedCallback = function () {
        this.configurarPresencaSemResultado();
        this.buscarItens();
    };
    class_1.prototype.componentDidRender = function () {
        if (!this.isBuscandoItens) {
            this.setInputFocus();
        }
    };
    class_1.prototype.handleKeyDown = function (event) {
        if (event.key === 'ArrowUp') {
            this.handleArrowUp();
        }
        else if (event.key === 'ArrowDown') {
            this.handleArrowDown(event);
        }
    };
    /**
     * Define a configuração do componente
     *
     * @param configuracao Configuração do componente
     */
    class_1.prototype.watchBuscar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.buscarItens();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.setInputFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input;
            return __generator(this, function (_b) {
                input = this.el.shadowRoot.querySelector('input');
                if (isNill(input)) {
                    return [2 /*return*/];
                }
                input.focus();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.configurarPresencaSemResultado = function () {
        this.possuiSlotSemResultadoDeclarado = this.el.querySelector('[slot="sem_resultado"]') !== null;
    };
    class_1.prototype.handleArrowDown = function (event) {
        var activeElement = this.el.shadowRoot.activeElement;
        if (this.isElementInput(activeElement)) {
            // Evita que o primeiro scroll do container cubra o primeiro item selecionado
            event.preventDefault();
            var listElement = this.el.shadowRoot.querySelector('ul');
            if (!isNill(listElement.firstElementChild)) {
                this.setFocusListItem(listElement.firstElementChild);
            }
        }
        if (this.isElementLink(activeElement)) {
            if (isNill(activeElement.parentNode)) {
                return;
            }
            var nextSibling = activeElement.parentNode.nextSibling;
            this.setFocusListItem(nextSibling);
        }
    };
    class_1.prototype.handleArrowUp = function () {
        var activeElement = this.el.shadowRoot.activeElement;
        if (activeElement.getAttribute('tabindex') === '1') {
            this.el.shadowRoot.querySelector('input').focus();
        }
        if (this.isElementLink(activeElement)) {
            if (isNill(activeElement.parentNode)) {
                return;
            }
            var previousListItem = activeElement.parentNode.previousSibling;
            this.setFocusListItem(previousListItem);
        }
    };
    class_1.prototype.setFocusListItem = function (listItem) {
        if (isNill(listItem)) {
            return;
        }
        var listItemFocusableElement = listItem.querySelector('a');
        if (isNill(listItemFocusableElement)) {
            return;
        }
        listItemFocusableElement.focus();
    };
    class_1.prototype.render = function () {
        var _this = this;
        var _a;
        return (h(Host, null, h("section", { class: "selecao-contexto" }, !this.isBuscandoItens && (h("slot", { name: "cabecalho" })), !this.isBuscandoItens && (h("div", { class: "selecao-contexto__search" }, h("input", { type: "text", class: "form-control", placeholder: (_a = this.placeholderPesquisa) !== null && _a !== void 0 ? _a : 'Digite os termos para pesquisar', tabindex: "1", value: this.termoPesquisa, onInput: this.onInputSearch, disabled: this.isBuscandoItens, "aria-label": "Digite os termos para pesquisar" }))), h("bth-empty-state", Object.assign({}, this.getTipoEmptyState(), { show: !this.isBuscandoItens && this.itensFiltrados.length <= 0 }), this.possuiSlotSemResultadoDeclarado && (h("slot", { name: "sem_resultado" }))), h("div", { class: "selecao-contexto__body" }, this.isBuscandoItens && (h("div", { class: "selecao-contexto__body--loader" }, h("bth-loader", null))), !this.isBuscandoItens && (h("ul", { id: "lista-contexto" }, this.itensFiltrados.map(function (item, index) { return (h("li", { key: item.id, onClick: function (event) { return _this.onSelecionar(event, item); } }, h("a", { href: "", tabindex: index + 1 }, _this.possuiImagemAvatar(item) && (h("bth-avatar", { src: item.imagemAvatar, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })), _this.possuiIcone(item) && (h("bth-avatar", { icone: item.icone, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })), !_this.possuiImagemAvatar(item) && !_this.possuiIcone(item) && (h("bth-avatar", { iniciais: item.descricao, title: item.descricao, subIcone: item.iconeStatus, subIconeTitle: item.iconeStatusTitle })), h("section", null, h("h4", { title: item.descricao }, item.descricao), h("p", { title: item.complemento }, item.complemento))))); })))), !this.isBuscandoItens && (h("footer", null, h("slot", { name: "rodape" }))))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "buscar": ["watchBuscar"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
SelecaoContexto.style = selecaoContextoCss;
export { SelecaoContexto as bth_selecao_contexto };
