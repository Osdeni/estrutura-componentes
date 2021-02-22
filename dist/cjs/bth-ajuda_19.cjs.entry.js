'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3dadc262.js');
const promiseTracker = require('./promise-tracker-9b3bca78.js');

const ajudaCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.empty-ajuda{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;text-align:center}.empty-ajuda__img{background-image:url(\"https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/empty-help.svg\");background-repeat:no-repeat;background-position-x:center;background-size:130px;height:130px;width:130px}.empty-ajuda h4{font-size:20px;font-weight:var(--bth-app-font-weight-regular);margin:24px 0px}.empty-ajuda h4 a{text-decoration:none;color:var(--bth-app-blue)}.empty-ajuda h4 a:hover{color:var(--bth-app-blue-dark-10);text-decoration:underline}.descricao-mobile{text-decoration:none;padding:0 16px}";

const Ajuda = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getCentralAjudaHome() {
        if (!promiseTracker.isNill(this.centralAjudaHome)) {
            return this.centralAjudaHome;
        }
        if ('___bth' in window) {
            return window['___bth'].envs.suite['central-de-ajuda'].v1['host-redirecionamento'];
        }
        return null;
    }
    render() {
        return (index.h("bth-menu-ferramenta", { descricao: "Ajuda", tituloPainelLateral: "Ajuda" }, index.h("bth-menu-ferramenta-icone", { slot: "menu_item_desktop", icone: "help-circle" }), index.h("bth-menu-ferramenta-icone", { slot: "menu_item_mobile", icone: "help-circle", mobile: true }), index.h("span", { slot: "menu_descricao_mobile", class: "descricao-mobile" }, "Ajuda"), index.h("div", { slot: "conteudo_painel_lateral", class: "empty-ajuda" }, index.h("div", { class: "empty-ajuda__img" }), index.h("h4", null, "Est\u00E1 com d\u00FAvida? Acesse a ", index.h("a", { href: this.getCentralAjudaHome(), target: "_blank", rel: "noreferrer" }, "Central de Ajuda ", index.h("bth-icone", { icone: "open-in-new" }))))));
    }
};
Ajuda.style = ajudaCss;

const LOCAL_STORAGE_KEY = 'bth-menu:state';
const PERMISSAO_PADRAO = true;
const SLOT = {
    MARCA_PRODUTO: 'menu_marca_produto',
    FERRAMENTAS: 'menu_ferramentas',
    APLICACAO: 'container_aplicacao',
    CONTEXTO: 'container_contexto'
};

const appCss = "@charset \"UTF-8\";*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.app{display:grid;height:100vh;margin:0;overflow:hidden;padding:0 !important;background:transparent;font-size:14px;grid-template:\"banner banner\" \"menu-horizontal menu-horizontal\" -webkit-max-content \"menu container\" 1fr/minmax(0px, -webkit-max-content) 1fr;grid-template:\"banner banner\" \"menu-horizontal menu-horizontal\" max-content \"menu container\" 1fr/minmax(0px, max-content) 1fr}slot[name=container_contexto]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;border-bottom:1px solid var(--bth-app-gray-light-10);margin:0 16px}.banner{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;grid-area:banner;-ms-flex-pack:center;justify-content:center;overflow:hidden;padding:0 16px;position:relative;-webkit-transition:max-height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), padding var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), top var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:max-height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), padding var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), top var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);vertical-align:middle;width:100%;z-index:1060;height:40px;max-height:0px}.banner--show{max-height:40px}.banner__content{line-height:1.5;margin:9px 10px;max-width:95%}.banner__content>a{color:var(--bth-app-gray-dark-40);text-decoration:underline;vertical-align:top;margin-left:5px}.banner__content>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:inline-block;max-width:100%}.banner__content>span~a{max-width:85%}.banner__icon{font-size:18px;line-height:1.5;margin:7px 0px}.banner--warning{background-color:var(--bth-app-yellow-light-10)}.banner--info{background-color:var(--bth-app-aqua-light-20)}.app-container{grid-area:container;overflow:auto}.menu-ferramentas__mobile{position:fixed;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-pack:end;justify-content:flex-end;background-color:var(--bth-app-gray-light-40);z-index:1070;padding:0px 16px;top:50px;height:calc(100vh - 50px);width:100%;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-ferramentas__mobile--banner{top:125px;height:calc(100vh - 125px)}.menu-ferramentas__mobile--show{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}.menu-horizontal{background-color:var(--bth-app-menu-bg-color, #142c48);color:var(--bth-app-gray-light-40);height:40px;grid-area:menu-horizontal;width:100%}.menu-horizontal__link--disabled{opacity:0.5;pointer-events:none}.menu-horizontal__body{width:100%;height:100%}.menu-horizontal__list{display:-ms-flexbox;display:flex;list-style:none;width:100%;height:100%;padding:0px}.menu-horizontal__list .menu-horizontal__item--has-list{-ms-flex:1;flex:1}.menu-horizontal__list .menu-horizontal__item--has-list>.menu-horizontal__list{list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:left;justify-content:left;width:100%;padding:0 18px 0 0}.menu-horizontal__list .menu-horizontal__item .menu-vertical__toggle{text-decoration:none;padding:13px 15px 9px 15px}.menu-horizontal__list .menu-horizontal__item .menu-vertical__toggle:before{content:\"󰍜\";font-size:20px;color:var(--bth-app-gray-light-40);font-family:var(--bth-app-font-family-icons);line-height:40px}.menu-horizontal__list .menu-horizontal__item .menu-vertical__toggle:hover,.menu-horizontal__list .menu-horizontal__item .menu-vertical__toggle:focus{background-color:rgba(255, 255, 255, 0.15);text-decoration:none}.menu-horizontal__list .menu-horizontal__item .menu-vertical__toggle:focus{outline:1px dotted var(--bth-app-gray-light-10);outline-offset:-2px}.menu-horizontal__list .menu-horizontal__item .menu-ferramentas{list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-direction:row;flex-direction:row;width:100%;height:100%;padding:0}.menu-horizontal__list .menu-horizontal__item .menu-ferramentas>li{position:relative;padding:0px 6px}.menu-horizontal__list .menu-horizontal__item .menu-ferramentas>li>a{text-decoration:none}.menu-horizontal__list .menu-horizontal__item .menu-ferramentas>li>a>bth-icone{color:var(--bth-app-gray-light-40);font-size:16px;margin:11px 6px}.menu-horizontal__list .menu-horizontal__item .menu-ferramentas>li>a .badge-danger--notificacao{font-size:11px;font-weight:var(--bth-app-font-weight-semi-bold);padding:2px 5px;position:absolute;right:5px;top:5px}.menu-horizontal__list .menu-horizontal__item .menu-ferramentas>li:hover,.menu-horizontal__list .menu-horizontal__item .menu-ferramentas>li:focus{background-color:rgba(255, 255, 255, 0.15);text-decoration:none}.menu-horizontal__list .menu-horizontal__item .menu-ferramentas>li:focus{outline:1px dotted var(--bth-app-gray-dark-30);outline-offset:-1px}.badge{background-color:var(--bth-app-gray-light-10);border-radius:50px;color:var(--bth-app-gray-dark-30);font-size:12px;font-weight:var(--bth-app-font-weight-light);padding:3px 6px;text-align:center}.badge.badge-danger{background-color:var(--bth-app-red);color:var(--bth-app-gray-light-40)}.badge.badge-danger--notificacao-small{padding:0 2px;right:14px;top:10px;position:absolute;height:11px;width:11px}.menu-vertical{background-color:var(--bth-app-gray-light-30);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;grid-area:menu;-webkit-transition:width var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:width var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);width:230px;border-right:1px solid var(--bth-app-gray-light-10);height:calc(100vh - 40px);top:40px}.menu-vertical__body{-ms-flex:1;flex:1;overflow-x:hidden;overflow-y:overlay}.menu-vertical__footer{display:none}.menu-vertical__footer--show{display:block}.menu-vertical__list{list-style:none;margin:0;padding:0}.menu-vertical__item{position:relative}.menu-vertical__item>a{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;width:100%;color:var(--bth-app-gray-dark-20);font-weight:var(--bth-app-font-weight-regular);height:44px;text-decoration:none;overflow:hidden;padding:0px 9px 0px 0px}.menu-vertical__item>a:focus{outline:1px dotted var(--bth-app-gray-dark-30);outline-offset:-1px}.menu-vertical__item>a:hover,.menu-vertical__item>a:focus{background-color:#e1e3e6;text-decoration:none;color:var(--bth-app-gray-dark-30)}.menu-vertical__item>a>bth-icone:first-child,.menu-vertical__item>a>bth-icone:last-child{display:block;margin:auto 16px;min-width:18px;width:18px;font-size:18px}.menu-vertical__item>a>span{-ms-flex:1;flex:1;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:100%}.menu-vertical__item>.menu-vertical__list{border-top:0;max-height:100vh;overflow:hidden;-webkit-transition:max-height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:max-height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical__item--active{background-color:var(--bth-app-gray-light-10)}.menu-vertical__item--active>a bth-icone,.menu-vertical__item--active>a span{color:var(--bth-app-blue-dark-10)}.menu-vertical__item--active>a span{font-weight:var(--bth-app-font-weight-semi-bold)}.menu-vertical__item--active:before{content:\"\";position:absolute;border:2px var(--bth-app-blue) solid;top:0;bottom:0;z-index:1}.menu-vertical__item--collapsed bth-icone:last-child{-webkit-transform:rotate(0.5turn);transform:rotate(0.5turn)}.menu-vertical__item--collapsed>.menu-vertical__list{max-height:0}.menu-vertical__item--floating{background-color:var(--bth-app-gray-light-20);border-top:0}.menu-vertical__item--floating>a>span{opacity:0}.menu-vertical__item--floating>a:hover>bth-icone:last-of-type{-webkit-transform:rotate(0.1turn);transform:rotate(0.1turn);-webkit-transition:-webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:-webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical__item--floating>a:hover>span{opacity:1;-webkit-transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical--collapsed{width:50px;position:absolute;z-index:1049}.menu-vertical--collapsed:not(:hover){-webkit-transition:width var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:width var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical--collapsed-hover{width:230px;-webkit-transition:width var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:width var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical--collapsed:not(.menu-vertical--floating)~.app-container{margin-left:50px}.menu-vertical--collapsed.menu-vertical--floating{width:0;visibility:hidden;-webkit-transition:width var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), visibility var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:width var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), visibility var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical--collapsed.menu-vertical--floating .menu-vertical__item--floating bth-icone:last-child{display:none}.menu-vertical--floating{position:absolute;z-index:1069}.menu-vertical--floating .menu-vertical__item--floating>a>bth-icone:last-of-type{-webkit-transform:rotate(0.1turn);transform:rotate(0.1turn);-webkit-transition:-webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:-webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical--floating .menu-vertical__item--floating>a>span{opacity:0;-webkit-transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical--floating .menu-vertical__item--floating>a:hover>bth-icone:last-of-type{-webkit-transform:rotate(0turn);transform:rotate(0turn);-webkit-transition:-webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:-webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical--floating .menu-vertical__item--floating>a:hover>span{opacity:1;-webkit-transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.banner--show~.menu-vertical{height:calc(100vh - 80px);top:80px}@media (max-width: 991px){.menu-vertical{height:calc(100vh - 40px);top:40px;width:310px}.menu-vertical--banner{height:calc(100vh - 115px);top:115px !important}.menu-vertical--floating{position:absolute;z-index:1069}.menu-vertical__item .menu-vertical__list .menu-vertical__item>a{height:48px;font-size:16px}.menu-vertical__item>a{height:54px;font-size:18px}.menu-vertical__item>a>bth-icone:first-child,.menu-vertical__item>a>bth-icone:last-child{font-size:20px}.menu-vertical__item>a>bth-icone>span{max-width:100%}.menu-vertical__item>a--floating{display:none}.menu-vertical__item>a--has-children>a{font-weight:var(--bth-app-font-weight-regular)}.menu-vertical .banner~.menu-vertical{height:calc(100vh - 125px) !important;top:125px !important}.banner{height:75px}.banner--show{max-height:75px}.banner__content{margin:9px 16px;max-width:95%}.banner__content>span{display:block;display:-webkit-box;max-width:100%;min-height:15.4px;margin:0 auto;font-size:14px;line-height:1.1;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:unset}.banner__content>a{vertical-align:top}}@media (max-width: 991px){.menu-vertical{width:100%;height:calc(100vh - 50px);top:50px}.menu-horizontal{height:50px}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-vertical__toggle{padding:0 13px !important;width:47px;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-vertical__toggle:before{font-size:22px !important;line-height:50px !important}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-vertical__toggle:after{content:\"󰅖\";font-size:22px;color:var(--bth-app-gray-light-40);font-family:var(--bth-app-font-family-icons);line-height:50px;display:none}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-vertical__toggle--opened{background-color:rgba(255, 255, 255, 0.2)}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-vertical__toggle--opened:before{display:none;margin-right:5px}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-vertical__toggle--opened:after{display:unset}.menu-horizontal .menu-horizontal__body .menu-horizontal__item--has-list{display:none}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li{width:47px;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li>a>bth-icone{color:var(--bth-app-gray-light-40);font-size:18px;margin:6px 8px}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler{padding:0px 13px}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler:before{content:\"󰇙\";font-size:22px;font-weight:500;color:var(--bth-app-gray-light-40);font-family:var(--bth-app-font-family-icons);line-height:50px;display:unset}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler:after{content:\"󰅖\";font-size:22px;font-weight:500;color:var(--bth-app-gray-light-40);font-family:var(--bth-app-font-family-icons);line-height:50px;display:none}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler--opened{background-color:rgba(255, 255, 255, 0.2)}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler--opened:before{display:none}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler--opened:after{display:unset}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler--opened .badge-danger--notificacao-small:empty{display:none}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler .badge-danger--notificacao-small{padding:0px 4px;right:14px;top:10px;position:absolute;font-size:11px}.menu-horizontal .menu-horizontal__body .menu-horizontal__item .menu-ferramentas>li:last-child .menu-ferramentas__mobile-toggler .badge-danger--notificacao-small:empty{display:inherit}.menu-horizontal .menu-horizontal__body .menu-horizontal__item:last-child{-ms-flex:1;flex:1}.banner--show~.menu-vertical{height:calc(100vh - 125px);top:125px}}@media print{.banner{display:none}.menu-horizontal{display:none}.menu-vertical{display:none}}";

const App = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bannerAlterado = index.createEvent(this, "bannerAlterado", 7);
        this.opcaoMenuSelecionada = index.createEvent(this, "opcaoMenuSelecionada", 7);
        this.ferramentasSinalizacaoPendente = {};
        this.isMenuVerticalFlutuando = false;
        this.isMenuVerticalAberto = true;
        this.isDispositivoMovel = false;
        this.isPainelFerramentasDispositivoMovelAberto = false;
        this.possuiSinalizacaoPendente = false;
        /**
         * Opções de navegação do menu
         */
        this.opcoes = [];
        /**
         * Define se as opções do menu serão exibidas no formato "vertical", caso contrário serão exibidas no formato "horizontal"
         */
        this.menuVertical = false;
        /**
         * Permite customizar a cor de fundo da barra do menu. Por padrão segue a cor da linha dos produtos.
         */
        this.menuBgColor = '#142c48';
        this.salvarEstadoLocalStorage = () => {
            try {
                const value = {
                    aberto: this.isMenuVerticalAberto,
                    flutuando: this.isMenuVerticalFlutuando
                };
                const valueStringfied = JSON.stringify(value);
                localStorage.setItem(LOCAL_STORAGE_KEY, valueStringfied);
            }
            catch (err) {
                console.error('Erro ao armazenar preferencia de menu do usuario', err);
            }
        };
        this.recuperarEstadoLocalStorage = () => {
            try {
                const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
                if (stored === null) {
                    return null;
                }
                return JSON.parse(stored);
            }
            catch (err) {
                console.error('Erro ao armazenar preferencia de menu do usuario', err);
            }
        };
        this.onMouseOverMenuVertical = () => {
            this.cancelarTimeoutRecolhimentoMenu();
            if (this.isDispositivoMovel) {
                return;
            }
            if (this.isMenuVerticalAberto) {
                return;
            }
            this.alterarEstadoRecolhimentoMenuVertical(false);
        };
        this.onMouseLeaveMenuVertical = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            if (this.isMenuVerticalAberto && !this.isMenuVerticalFlutuando) {
                return;
            }
            this.cancelarTimeoutRecolhimentoMenu();
            this.alterarEstadoRecolhimentoMenuVertical(true);
        };
        this.onMouseOverBotaoMenu = () => {
            this.cancelarTimeoutRecolhimentoMenu();
        };
        this.onMouseLeaveBotaoMenu = () => {
            if (this.isMenuVerticalRecolhido) {
                return;
            }
            if (this.isMenuVerticalAberto && !this.isMenuVerticalFlutuando) {
                return;
            }
            this.cancelarTimeoutRecolhimentoMenu();
            this.alterarEstadoRecolhimentoMenuVertical(true);
        };
        this.onTogglePainelFerramentas = (event) => {
            event.preventDefault();
            this.isPainelFerramentasDispositivoMovelAberto = !this.isPainelFerramentasDispositivoMovelAberto;
            if (this.isDispositivoMovel && this.isPainelFerramentasDispositivoMovelAberto) {
                this.isMenuVerticalAberto = false;
            }
            this.salvarEstadoLocalStorage();
        };
        this.onClickBotaoFixar = (event) => {
            event.preventDefault();
            this.isMenuVerticalFlutuando = !this.isMenuVerticalFlutuando;
            this.isMenuVerticalRecolhido = false;
            this.isMenuVerticalAberto = true;
            this.salvarEstadoLocalStorage();
        };
        this.onClickBotaoMenu = (event) => {
            event.preventDefault();
            if (this.isMenuVerticalFlutuando) {
                this.isMenuVerticalRecolhido = !this.isMenuVerticalRecolhido;
            }
            else {
                if (!this.isMenuVerticalRecolhido) {
                    this.isMenuVerticalAberto = false;
                }
                else {
                    this.isMenuVerticalAberto = !this.isMenuVerticalAberto;
                }
                this.isMenuVerticalRecolhido = !this.isMenuVerticalRecolhido;
            }
            // Caso o menu vertical for aberto no modo responsivo fecha o painel de ferramentas
            if (this.isDispositivoMovel && this.isMenuVerticalFlutuando) {
                this.isPainelFerramentasDispositivoMovelAberto = false;
            }
            this.salvarEstadoLocalStorage();
        };
    }
    connectedCallback() {
        this.setCorBackgroundCustomizado();
        this.setEstadoInicialMenu();
    }
    watchOpcoesChanged() {
        // Reseta estado inicial do menu toda vez que opções for alterado, evita reabertura de maneira inconsistente
        this.setEstadoInicialMenu();
    }
    onWindowResize() {
        this.setEstadoInicialMenu();
        if (!this.isDispositivoMovel) {
            this.isPainelFerramentasDispositivoMovelAberto = false;
        }
    }
    onConteudoSinalizado(event) {
        this.ferramentasSinalizacaoPendente[event.detail.origem] = event.detail.possui;
        this.possuiSinalizacaoPendente = this.possuiFerramentasSinalizadas();
    }
    onPainelLateralShow(event) {
        if (!this.isPainelFerramentasDispositivoMovelAberto) {
            return;
        }
        if (event.detail.fecharSobrepostos) {
            this.isPainelFerramentasDispositivoMovelAberto = false;
        }
    }
    onMenuHorizontalSelecionado(event) {
        const opcao = this.findOpcaoMenuById(event.detail.identificador);
        this.dispararEventoOpcaoSelecionada(opcao);
    }
    onMenuVerticalSelecionado(event) {
        const opcao = this.findOpcaoMenuById(event.detail.identificador, event.detail.identificadorPai);
        if (this.possuiSubmenus(opcao)) {
            this.opcoesMenu = this.opcoesMenu.map(opcaoMenu => {
                if (opcao.id === opcaoMenu.id) {
                    opcaoMenu.isRecolhido = !opcaoMenu.isRecolhido;
                }
                return opcaoMenu;
            });
        }
        else {
            if (this.isDispositivoMovel) {
                this.isMenuVerticalRecolhido = !this.isMenuVerticalRecolhido;
            }
            this.dispararEventoOpcaoSelecionada(opcao);
        }
    }
    dispararEventoOpcaoSelecionada(opcao) {
        const eventPayload = {
            id: opcao.id,
            descricao: opcao.descricao,
            rota: opcao.rota,
            contador: opcao.contador
        };
        this.opcaoMenuSelecionada.emit(eventPayload);
    }
    onChangeBanner() {
        let event = {
            possui: this.possuiBanner()
        };
        this.bannerAlterado.emit(event);
    }
    onChangemenuBgColor() {
        this.setCorBackgroundCustomizado();
    }
    /**
     * Define o estado de ativo para o menu do parâmetro
     *
     * @param identificador Identificador do menu
     */
    async setMenuAtivo(identificador) {
        if (this.possuiNavegacaoHorizontal()) {
            this.marcarAtivoMenuHorizontal(identificador);
        }
        if (this.possuiNavegacaoVertical()) {
            this.marcarAtivoMenuVertical(identificador);
        }
    }
    /**
     * Define o valor do contador de um item do menu
     *
     * @param identificador Identificador do item do menu
     * @param valor Valor do contador
     */
    async setContadorMenu(identificador, valor) {
        if (this.possuiNavegacaoVertical()) {
            this.opcoesMenu = this.opcoesMenu.map(opcao => {
                opcao.contador = opcao.id === identificador ? valor : opcao.contador;
                if (opcao.submenus !== undefined && opcao.submenus.length > 0) {
                    opcao.submenus = opcao.submenus.map(submenu => {
                        submenu.contador = submenu.id === identificador ? valor : submenu.contador;
                        return submenu;
                    });
                }
                return opcao;
            });
        }
        if (this.possuiNavegacaoHorizontal()) {
            this.opcoesMenu = this.opcoesMenu.map(opcao => {
                opcao.contador = opcao.id === identificador ? valor : opcao.contador;
                return opcao;
            });
        }
    }
    setCorBackgroundCustomizado() {
        if (this.menuBgColor === undefined) {
            return;
        }
        this.el.style.setProperty('--bth-app-menu-bg-color', this.menuBgColor.toString());
    }
    possuiSlotMarcaProduto() {
        return this.el.querySelector(`[slot="${SLOT.MARCA_PRODUTO}"]`) !== null;
    }
    possuiSlotFerramentas() {
        return this.el.querySelector(`[slot="${SLOT.FERRAMENTAS}"]`) !== null;
    }
    possuiSlotContexto() {
        return this.el.querySelector(`[slot="${SLOT.CONTEXTO}"]`) !== null;
    }
    possuiFerramentasSinalizadas() {
        const pending = Object.keys(this.ferramentasSinalizacaoPendente)
            .filter(key => this.ferramentasSinalizacaoPendente[key]);
        return pending.length > 0 || false;
    }
    possuiOpcoes() {
        return !promiseTracker.isNill(this.opcoesMenu) && this.opcoesMenu.length > 0;
    }
    possuiBanner() {
        return !promiseTracker.isNill(this.banner);
    }
    possuiNavegacaoVertical() {
        if (this.possuiOpcoes()) {
            return this.menuVertical || (!this.menuVertical && this.isDispositivoMovel);
        }
        return false;
    }
    possuiNavegacaoHorizontal() {
        return this.possuiOpcoes() && !this.menuVertical;
    }
    setEstadoInicialMenu() {
        this.opcoesMenu = [...this.opcoes];
        this.isDispositivoMovel = promiseTracker.isDispositivoMovel();
        const estadoLocalStorage = this.recuperarEstadoLocalStorage();
        this.isPainelFerramentasDispositivoMovelAberto = false;
        this.isMenuVerticalFlutuando = estadoLocalStorage !== null ? estadoLocalStorage.flutuando : false;
        this.isMenuVerticalAberto = estadoLocalStorage !== null ? estadoLocalStorage.aberto : true;
        if (this.isMenuVerticalFlutuando) {
            this.isMenuVerticalRecolhido = true;
        }
        else {
            this.isMenuVerticalRecolhido = !this.isMenuVerticalAberto;
        }
        if (this.isDispositivoMovel) {
            this.isPainelFerramentasDispositivoMovelAberto = false;
            this.isMenuVerticalFlutuando = true;
            this.isMenuVerticalAberto = false;
            this.isMenuVerticalRecolhido = true;
        }
    }
    marcarAtivoMenuVertical(id) {
        this.opcoesMenu = this.opcoesMenu.map(opcao => {
            opcao.isAtivo = opcao.id === id;
            if (opcao.isAtivo) {
                this.validarPermissaoAcessarOpcaoMenu(opcao);
            }
            if (this.possuiSubmenus(opcao)) {
                opcao.submenus = opcao.submenus.map(submenu => {
                    submenu.isAtivo = submenu.id === id;
                    if (submenu.isAtivo) {
                        this.validarPermissaoAcessarOpcaoMenu(submenu);
                    }
                    if (submenu.isAtivo) {
                        opcao.isAtivo = true;
                    }
                    return submenu;
                });
                opcao.isRecolhido = opcao.submenus.filter(submenu => submenu.isAtivo).length <= 0;
            }
            return opcao;
        });
    }
    marcarAtivoMenuHorizontal(id) {
        this.opcoesMenu = this.opcoesMenu.map(opcao => {
            opcao.isAtivo = opcao.id === id;
            if (opcao.isAtivo) {
                this.validarPermissaoAcessarOpcaoMenu(opcao);
            }
            return opcao;
        });
    }
    findOpcaoMenuById(identificador, identificadorPai = null) {
        if (!promiseTracker.isNill(identificadorPai)) {
            const menuPai = this.opcoesMenu.find(opcaoMenu => opcaoMenu.id === identificadorPai);
            if (!promiseTracker.isNill(menuPai)) {
                return menuPai.submenus.find(submenu => submenu.id === identificador);
            }
        }
        return this.opcoesMenu.find(opcaoMenu => opcaoMenu.id === identificador);
    }
    possuiSubmenus(opcao) {
        return !promiseTracker.isNill(opcao.submenus) && opcao.submenus.length > 0;
    }
    validarPermissaoAcessarOpcaoMenu(opcao) {
        if ('possuiPermissao' in opcao && !opcao.possuiPermissao) {
            throw new Error(promiseTracker.MSG_SEM_PERMISSAO_RECURSO);
        }
    }
    cancelarTimeoutRecolhimentoMenu() {
        if (this.timeoutAtivoHandler !== undefined) {
            clearTimeout(this.timeoutAtivoHandler);
            this.timeoutAtivoHandler = undefined;
        }
    }
    alterarEstadoRecolhimentoMenuVertical(isMenuVerticalRecolhido) {
        this.timeoutAtivoHandler = window.setTimeout(() => {
            this.isMenuVerticalRecolhido = isMenuVerticalRecolhido;
            this.timeoutAtivoHandler = undefined;
        }, promiseTracker.TIMEOUT_INTERACOES);
    }
    renderBannerSection() {
        return (index.h("header", { role: "banner", class: `banner ${this.possuiBanner() ? ` banner--show banner--${this.banner.tipo}` : ''}`, "aria-hidden": `${!this.possuiBanner()}`, "aria-expanded": `${this.possuiBanner()}` }, this.possuiBanner() && ([
            index.h("div", { class: "banner__icon" }, index.h("bth-icone", { icone: this.banner.tipo === 'info' ? 'information' : 'alert' })),
            index.h("div", { class: "banner__content" }, index.h("span", null, this.banner.texto), index.h("a", { href: this.banner.link, target: "_blank", title: "Mais informa\u00E7\u00F5es", rel: "noreferrer" }, "Mais informa\u00E7\u00F5es"))
        ])));
    }
    renderMenuHorizontal() {
        return (index.h("section", { class: "menu-horizontal" }, index.h("div", { class: "menu-horizontal__body" }, index.h("div", { class: "menu-horizontal__list" }, this.possuiNavegacaoVertical() && (index.h("div", { class: "menu-horizontal__item" }, index.h("a", { role: "button", href: "", class: `menu-vertical__toggle ${!this.isMenuVerticalRecolhido ? 'menu-vertical__toggle--opened' : ''}`, title: "Alternar exibi\u00E7\u00E3o do menu lateral", onClick: this.onClickBotaoMenu, onMouseLeave: this.onMouseLeaveBotaoMenu, onMouseOver: this.onMouseOverBotaoMenu, "aria-expanded": `${!this.isMenuVerticalRecolhido}`, "aria-pressed": `${!this.isMenuVerticalRecolhido}`, "aria-label": "Alternar exibi\u00E7\u00E3o do menu lateral" }))), this.possuiSlotMarcaProduto() && (index.h("section", { class: "menu-horizontal__item" }, index.h("slot", { name: SLOT.MARCA_PRODUTO }))), index.h("nav", { id: "menu_horizontal_list", class: "menu-horizontal__item menu-horizontal__item--has-list", "aria-label": "Navega\u00E7\u00E3o do menu horizontal", "aria-hidden": `${!this.possuiNavegacaoHorizontal()}` }, this.possuiNavegacaoHorizontal() && (index.h("ul", { role: "menubar", class: "menu-horizontal__list", "aria-label": "Navega\u00E7\u00E3o do menu horizontal" }, this.possuiNavegacaoHorizontal() && this.opcoesMenu.map((opcao, index$1) => (index.h("li", { role: "none" }, index.h("bth-menu-horizontal-item", { role: "menuitem", id: `menu_horizontal_item_${index$1}`, key: index$1, identificador: opcao.id, descricao: opcao.descricao, contador: opcao.contador, possuiPermissao: opcao.possuiPermissao, ativo: opcao.isAtivo }))))))), index.h("section", { class: "menu-horizontal__item" }, index.h("nav", { class: "menu-ferramentas" }, !this.isDispositivoMovel && (index.h("slot", { name: SLOT.FERRAMENTAS })), this.isDispositivoMovel && this.possuiSlotFerramentas() && (index.h("li", { role: "none" }, index.h("a", { role: "button", href: "", class: `menu-ferramentas__mobile-toggler ${this.isPainelFerramentasDispositivoMovelAberto ? 'menu-ferramentas__mobile-toggler--opened' : ''}`, onClick: this.onTogglePainelFerramentas, title: "Alternar exibi\u00E7\u00E3o painel de ferramentas", "aria-expanded": `${this.isPainelFerramentasDispositivoMovelAberto}`, "aria-pressed": `${this.isPainelFerramentasDispositivoMovelAberto}`, "aria-label": "Alternar exibi\u00E7\u00E3o painel de ferramentas" }, this.possuiSinalizacaoPendente && !this.isPainelFerramentasDispositivoMovelAberto && (index.h("span", { class: "badge badge-danger badge-danger--notificacao-small" })))))))), this.isDispositivoMovel && (index.h("nav", { class: `menu-ferramentas__mobile
                  ${this.isPainelFerramentasDispositivoMovelAberto ? 'menu-ferramentas__mobile--show' : ''}
                  ${this.possuiBanner() ? 'menu-ferramentas__mobile--banner' : ''}` }, index.h("slot", { name: SLOT.FERRAMENTAS }))))));
    }
    renderMenuVertical() {
        if (!this.possuiNavegacaoVertical()) {
            return;
        }
        return (index.h("aside", { class: `menu-vertical ${this.isMenuVerticalFlutuando ? ' menu-vertical--floating' : ''}
          ${this.isMenuVerticalRecolhido ? ' menu-vertical--collapsed' : ''}
          ${!this.isMenuVerticalFlutuando && !this.isMenuVerticalAberto && !this.isMenuVerticalRecolhido ? ' menu-vertical--collapsed menu-vertical--collapsed-hover' : ''}
        `, onMouseOver: this.onMouseOverMenuVertical, onMouseLeave: this.onMouseLeaveMenuVertical }, index.h("nav", { class: "menu-vertical__body", "aria-label": "Op\u00E7\u00F5es de navega\u00E7\u00E3o do menu vertical" }, index.h("ul", { role: "menubar", class: "menu-vertical__list" }, this.opcoesMenu.map((opcao, index$1) => (index.h("li", { role: "none" }, index.h("bth-menu-vertical-item", { role: "menuitem", id: `menu_vertical_item_${index$1}`, key: index$1, identificador: opcao.id, descricao: opcao.descricao, icone: opcao.icone, contador: opcao.contador, possuiPermissao: opcao.possuiPermissao, ativo: opcao.isAtivo, recolhido: opcao.isRecolhido, menuLateralRecolhido: this.isMenuVerticalRecolhido, submenus: opcao.submenus })))))), index.h("div", { class: `menu-vertical__footer ${this.isDispositivoMovel ? '' : 'menu-vertical__footer--show'}` }, index.h("ul", { class: "menu-vertical__list" }, index.h("li", { class: "menu-vertical__item menu-vertical__item--floating" }, index.h("a", { href: "", onClick: this.onClickBotaoFixar }, index.h("bth-icone", { icone: "pin" }), index.h("span", null, this.isMenuVerticalFlutuando ? 'Fixar' : 'Desafixar')))))));
    }
    renderAppContainer() {
        return (index.h("main", { class: "app-container" }, this.possuiSlotContexto() && !this.isDispositivoMovel && (index.h("slot", { name: SLOT.CONTEXTO })), index.h("slot", { name: SLOT.APLICACAO })));
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "app" }, this.renderBannerSection(), this.renderMenuHorizontal(), this.renderMenuVertical(), this.renderAppContainer())));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "opcoes": ["watchOpcoesChanged"],
        "banner": ["onChangeBanner"],
        "menuBgColor": ["onChangemenuBgColor"]
    }; }
};
App.style = appCss;

const avatarCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.avatar__container{position:relative}.avatar__container .subicone{position:absolute;bottom:-2px;right:-2px;width:20px;height:20px;padding:0px 2px;color:var(--bth-app-gray);background:var(--bth-app-gray-light-40);border-radius:50%;font-size:16px;text-align:center;line-height:1.3 !important}.avatar__body{display:-ms-flexbox;display:flex;position:relative;overflow:hidden;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;border-radius:50%;-ms-flex-pack:center;justify-content:center;height:66px;width:66px;font-size:30px;line-height:60px;text-align:center}.avatar--imagem{background-color:transparent;vertical-align:middle;border:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar-square{border-radius:15%}.avatar-large{height:94px;width:94px;font-size:40px}.avatar-medium{height:48px;width:48px;font-size:22px}.avatar-small{height:28px;width:28px;font-size:14px}.avatar-extra-small{height:24px;width:24px;font-size:14px}.bg-pink{background-color:var(--bth-app-pink-light-20)}.bg-purple{background-color:var(--bth-app-purple-light-20)}.bg-green{background-color:var(--bth-app-green-light-20)}.bg-blue{background-color:var(--bth-app-blue-light-20)}.bg-aqua{background-color:var(--bth-app-aqua-light-20)}.bg-orange{background-color:var(--bth-app-orange-light-20)}.bg-yellow{background-color:var(--bth-app-yellow-light-20)}.tx-pink{color:var(--bth-app-pink-dark-30)}.tx-purple{color:var(--bth-app-purple-dark-30)}.tx-green{color:var(--bth-app-green-dark-30)}.tx-blue{color:var(--bth-app-blue-dark-30)}.tx-aqua{color:var(--bth-app-aqua-dark-30)}.tx-orange{color:var(--bth-app-orange-dark-30)}.tx-yellow{color:var(--bth-app-yellow-dark-30)}";

const BG_COLORS = [
    'aqua',
    'blue',
    'green',
    'pink',
    'purple',
    'orange',
    'yellow'
];
const Avatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imageLoadError = index.createEvent(this, "imageLoadError", 7);
        /**
          * Define o "title" do subícone
          */
        this.subIconeTitle = '';
        /**
         * Define o tamanho conforme dimensões pre-definidas para o avatar.
         *
         * Opções disponíveis: menor (24x24), pequeno (28x28), medio (48x48) e grande (94x94)
         */
        this.tamanho = 'medio';
        /**
         * Define se o avatar terá suas bordas no formato quadrado.
         *
         * Por padrão é redondo
         */
        this.quadrado = false;
        /**
         * Define se o avatar possui borda
         */
        this.borda = false;
        /**
         * Define o tamanho da borda
         */
        this.bordaTamanho = '1px';
        /**
         * Define o raio da borda do avatar. Caso informado, sobrescreve o atributo utilitario 'quadrado'.
         */
        this.bordaRaio = '50%';
        /**
         * Define a cor da borda
         */
        this.bordaCor = 'white';
        this.onImageLoadError = (event) => {
            this.imageLoadError.emit(event);
        };
    }
    getSiglaIniciais(texto) {
        var _a;
        if (texto.length <= 2) {
            return texto.toUpperCase();
        }
        const palavras = texto.replace(/[^\w\s]/gi, '').split(' ');
        const iniciais = palavras.filter(palavra => Boolean(palavra))
            .map(palavra => palavra.substr(0, 1));
        return iniciais[0].concat((_a = iniciais[1]) !== null && _a !== void 0 ? _a : '').toUpperCase();
    }
    getColorClass() {
        if (this.icone !== undefined) {
            return 'avatar-icone bg-blue tx-blue';
        }
        if (this.iniciais !== undefined) {
            let color = this.getCorInicias();
            return `bg-${color} tx-${color}`;
        }
        return '';
    }
    getSizeClass() {
        if (promiseTracker.isNill(this.tamanho) || !promiseTracker.isNill(this.dimensao)) {
            return '';
        }
        if (this.tamanho === 'menor') {
            return 'avatar-extra-small';
        }
        if (this.tamanho === 'pequeno') {
            return 'avatar-small';
        }
        if (this.tamanho === 'medio') {
            return 'avatar-medium';
        }
        if (this.tamanho === 'grande') {
            return 'avatar-large';
        }
        return '';
    }
    getRoundingClass() {
        if (this.quadrado) {
            return 'avatar-square';
        }
        return '';
    }
    getCorInicias() {
        return BG_COLORS[this.iniciais.charCodeAt(0) % BG_COLORS.length];
    }
    getContainerCustomStyles() {
        const containerStyles = {};
        if (!promiseTracker.isNill(this.dimensao)) {
            containerStyles.width = `${this.dimensao}px`;
            containerStyles.height = `${this.dimensao}px`;
            containerStyles.fontSize = `${this.dimensao / 2}px`;
        }
        return containerStyles;
    }
    getImagemCustomStyles() {
        const imagemStyles = {};
        if (!promiseTracker.isNill(this.borda)) {
            imagemStyles.border = `${this.bordaTamanho} solid ${this.bordaCor}`;
        }
        imagemStyles['border-radius'] = this.bordaRaio;
        return imagemStyles;
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "avatar__container" }, index.h("figure", { class: `avatar__body ${this.getRoundingClass()} ${this.getColorClass()} ${this.getSizeClass()}`, style: this.getContainerCustomStyles() }, this.icone && (index.h("bth-icone", { icone: this.icone, cor: promiseTracker.getCssVariableValue('--bth-app-gray-light-40') })), this.src && (index.h("img", { src: this.src, class: `avatar--imagem ${this.getRoundingClass()} ${this.getSizeClass()}`, style: this.getImagemCustomStyles(), alt: this.el.getAttribute('title') || 'Avatar', onError: this.onImageLoadError })), this.iniciais && (index.h("span", null, this.getSiglaIniciais(this.iniciais)))), this.subIcone && (index.h("bth-icone", { class: "subicone", icone: this.subIcone, title: this.subIconeTitle })))));
    }
    get el() { return index.getElement(this); }
};
Avatar.style = avatarCss;

const DEFAULT_AVATAR_URL = 'https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/avatar.png';

const contaUsuarioCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.perfil-usuario div{display:inline-grid}.perfil-usuario div .perfil-usuario__nome{color:var(--bth-app-gray-dark-30);font-size:20px;font-weight:var(--bth-app-font-weight-regular);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.perfil-usuario div .perfil-usuario__id{margin:0;color:var(--bth-app-gray-dark-20);font-size:14px;font-weight:var(--bth-app-font-weight-regular);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[slot=menu_item_desktop]{margin:2px 0px 1px 0px}.avatar-mobile{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 12px 0 0;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;overflow:hidden;float:left}.avatar-mobile-badge{color:var(--bth-app-gray-dark-20);background-color:var(--bth-app-gray-light-40);width:20px;height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;position:absolute;left:66px;top:48px;font-size:15px}.painel-usuario .perfil-usuario{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:250px;border-bottom:1px solid var(--bth-app-gray-light-10)}.painel-usuario .perfil-usuario img{width:120px;height:120px;border-radius:50%;border:3px solid var(--bth-app-blue);vertical-align:middle}.painel-usuario .perfil-usuario div{text-align:center;width:100%}.painel-usuario .perfil-usuario div .perfil-usuario__nome{color:var(--bth-app-gray-dark-30);font-size:20px;margin-top:20px;margin-bottom:4px;font-weight:500;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.painel-usuario .perfil-usuario div .perfil-usuario__id{margin:0;color:var(--bth-app-gray-dark-20);font-size:14px;font-weight:500;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.painel-usuario ul{list-style-type:none;-webkit-padding-start:0;padding-inline-start:0;margin:0}.painel-usuario ul li{list-style-type:none;border-bottom:1px solid var(--bth-app-gray-light-10)}.painel-usuario ul li:hover{background:var(--bth-app-gray-light-30)}.painel-usuario ul li a{color:var(--bth-app-gray-dark-30);padding:14px 12px;display:block;text-decoration:none}.painel-usuario ul li a bth-icone{position:relative;margin:0 10px 0 0;color:var(--bth-app-gray-dark-20);font-size:18px}@media screen and (min-width: 1500px){.painel-usuario{height:280px}.painel-usuario .perfil-usuario img{width:130px;height:130px}}@media screen and (max-width: 991px){.painel-usuario .perfil-usuario img{width:120px}.painel-usuario ul li{font-size:16px}.painel-usuario ul li a bth-icone{font-size:20px}}";

const ContaUsuario = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.logout = index.createEvent(this, "logout", 7);
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
        if (!promiseTracker.isNill(this.centralUsuarioHome)) {
            return this.centralUsuarioHome;
        }
        if ('___bth' in window) {
            return window['___bth'].envs.suite['central-usuarios'].v1.host;
        }
        return null;
    }
    getUrlImagemPerfil() {
        if (promiseTracker.isNill(this.fotoUrl) || this.erroCarregarFotoAvatar) {
            return DEFAULT_AVATAR_URL;
        }
        return this.fotoUrl;
    }
    renderMenuItemMobile() {
        return (index.h("div", { slot: "menu_item_mobile" }, index.h("bth-avatar", { class: "avatar-mobile", src: this.getUrlImagemPerfil(), title: `Foto de ${this.nome}`, dimensao: 54, borda: true, bordaTamanho: "2px", bordaCor: promiseTracker.getCssVariableValue('--bth-app-blue'), bordaRaio: "50%", onImageLoadError: this.onImageLoadError }), index.h("div", { class: "avatar-mobile-badge" }, index.h("bth-icone", { icone: "cog" }))));
    }
    renderMenuDescricaoMobile() {
        return (index.h("section", { slot: "menu_descricao_mobile", class: "perfil-usuario" }, index.h("div", null, index.h("span", { class: "perfil-usuario__nome", title: this.nome }, this.nome), index.h("span", { class: "perfil-usuario__id", title: `@${this.usuario}` }, "@", this.usuario))));
    }
    renderMenuItemDesktop() {
        return (index.h("section", { slot: "menu_item_desktop" }, index.h("bth-avatar", { class: "avatar-desktop", src: this.getUrlImagemPerfil(), title: `Foto de ${this.nome}`, tamanho: "menor", borda: true, bordaTamanho: "2px", bordaCor: promiseTracker.getCssVariableValue('--bth-app-gray-light-10'), bordaRaio: "50%", onImageLoadError: this.onImageLoadError })));
    }
    renderConteudoPainelLateral() {
        return (index.h("section", { slot: "conteudo_painel_lateral", class: "painel-usuario" }, index.h("div", { class: "perfil-usuario" }, index.h("bth-avatar", { src: this.getUrlImagemPerfil(), title: `Foto de ${this.nome}`, dimensao: 120, borda: true, bordaTamanho: "2px", bordaCor: promiseTracker.getCssVariableValue('--bth-app-blue'), bordaRaio: "50%", onImageLoadError: this.onImageLoadError }), index.h("div", null, index.h("span", { class: "perfil-usuario__nome", title: this.nome }, this.nome), index.h("span", { class: "perfil-usuario__id", title: `@${this.usuario}` }, "@", this.usuario))), index.h("ul", null, index.h("li", null, index.h("a", { href: this.getCentralUsuarioHome(), target: "_blank", title: "Editar", rel: "noreferrer" }, index.h("bth-icone", { icone: "pencil" }), " Editar")), index.h("li", null, index.h("a", { href: "", title: "Sair", onClick: this.onLogout }, index.h("bth-icone", { icone: "login-variant" }), " Sair")))));
    }
    render() {
        return (index.h("bth-menu-ferramenta", { descricao: "Conta do usu\u00E1rio" }, this.renderMenuItemMobile(), this.renderMenuDescricaoMobile(), this.renderMenuItemDesktop(), this.renderConteudoPainelLateral()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "fotoUrl": ["watchFotoUrl"]
    }; }
};
ContaUsuario.style = contaUsuarioCss;

const iconeCss = "@font-face{font-family:\"Material Design Icons\";src:url(\"../fonts/materialdesignicons-webfont.eot?v=5.0.45\");src:url(\"../fonts/materialdesignicons-webfont.eot?#iefix&v=5.0.45\") format(\"embedded-opentype\"),url(\"../fonts/materialdesignicons-webfont.woff2?v=5.0.45\") format(\"woff2\"),url(\"../fonts/materialdesignicons-webfont.woff?v=5.0.45\") format(\"woff\"),url(\"../fonts/materialdesignicons-webfont.ttf?v=5.0.45\") format(\"truetype\");font-weight:normal;font-style:normal}.mdi:before,.mdi-set{display:inline-block;font:normal normal normal 24px/1 \"Material Design Icons\";font-size:inherit;text-rendering:auto;line-height:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mdi-ab-testing::before{content:\"\\F01C9\"}.mdi-abjad-arabic::before{content:\"\\F1328\"}.mdi-abjad-hebrew::before{content:\"\\F1329\"}.mdi-abugida-devanagari::before{content:\"\\F132A\"}.mdi-abugida-thai::before{content:\"\\F132B\"}.mdi-access-point::before{content:\"\\F0003\"}.mdi-access-point-network::before{content:\"\\F0002\"}.mdi-access-point-network-off::before{content:\"\\F0BE1\"}.mdi-account::before{content:\"\\F0004\"}.mdi-account-alert::before{content:\"\\F0005\"}.mdi-account-alert-outline::before{content:\"\\F0B50\"}.mdi-account-arrow-left::before{content:\"\\F0B51\"}.mdi-account-arrow-left-outline::before{content:\"\\F0B52\"}.mdi-account-arrow-right::before{content:\"\\F0B53\"}.mdi-account-arrow-right-outline::before{content:\"\\F0B54\"}.mdi-account-box::before{content:\"\\F0006\"}.mdi-account-box-multiple::before{content:\"\\F0934\"}.mdi-account-box-multiple-outline::before{content:\"\\F100A\"}.mdi-account-box-outline::before{content:\"\\F0007\"}.mdi-account-cancel::before{content:\"\\F12DF\"}.mdi-account-cancel-outline::before{content:\"\\F12E0\"}.mdi-account-cash::before{content:\"\\F1097\"}.mdi-account-cash-outline::before{content:\"\\F1098\"}.mdi-account-check::before{content:\"\\F0008\"}.mdi-account-check-outline::before{content:\"\\F0BE2\"}.mdi-account-child::before{content:\"\\F0A89\"}.mdi-account-child-circle::before{content:\"\\F0A8A\"}.mdi-account-child-outline::before{content:\"\\F10C8\"}.mdi-account-circle::before{content:\"\\F0009\"}.mdi-account-circle-outline::before{content:\"\\F0B55\"}.mdi-account-clock::before{content:\"\\F0B56\"}.mdi-account-clock-outline::before{content:\"\\F0B57\"}.mdi-account-cog::before{content:\"\\F1370\"}.mdi-account-cog-outline::before{content:\"\\F1371\"}.mdi-account-convert::before{content:\"\\F000A\"}.mdi-account-convert-outline::before{content:\"\\F1301\"}.mdi-account-cowboy-hat::before{content:\"\\F0E9B\"}.mdi-account-details::before{content:\"\\F0631\"}.mdi-account-details-outline::before{content:\"\\F1372\"}.mdi-account-edit::before{content:\"\\F06BC\"}.mdi-account-edit-outline::before{content:\"\\F0FFB\"}.mdi-account-group::before{content:\"\\F0849\"}.mdi-account-group-outline::before{content:\"\\F0B58\"}.mdi-account-hard-hat::before{content:\"\\F05B5\"}.mdi-account-heart::before{content:\"\\F0899\"}.mdi-account-heart-outline::before{content:\"\\F0BE3\"}.mdi-account-key::before{content:\"\\F000B\"}.mdi-account-key-outline::before{content:\"\\F0BE4\"}.mdi-account-lock::before{content:\"\\F115E\"}.mdi-account-lock-outline::before{content:\"\\F115F\"}.mdi-account-minus::before{content:\"\\F000D\"}.mdi-account-minus-outline::before{content:\"\\F0AEC\"}.mdi-account-multiple::before{content:\"\\F000E\"}.mdi-account-multiple-check::before{content:\"\\F08C5\"}.mdi-account-multiple-check-outline::before{content:\"\\F11FE\"}.mdi-account-multiple-minus::before{content:\"\\F05D3\"}.mdi-account-multiple-minus-outline::before{content:\"\\F0BE5\"}.mdi-account-multiple-outline::before{content:\"\\F000F\"}.mdi-account-multiple-plus::before{content:\"\\F0010\"}.mdi-account-multiple-plus-outline::before{content:\"\\F0800\"}.mdi-account-multiple-remove::before{content:\"\\F120A\"}.mdi-account-multiple-remove-outline::before{content:\"\\F120B\"}.mdi-account-music::before{content:\"\\F0803\"}.mdi-account-music-outline::before{content:\"\\F0CE9\"}.mdi-account-network::before{content:\"\\F0011\"}.mdi-account-network-outline::before{content:\"\\F0BE6\"}.mdi-account-off::before{content:\"\\F0012\"}.mdi-account-off-outline::before{content:\"\\F0BE7\"}.mdi-account-outline::before{content:\"\\F0013\"}.mdi-account-plus::before{content:\"\\F0014\"}.mdi-account-plus-outline::before{content:\"\\F0801\"}.mdi-account-question::before{content:\"\\F0B59\"}.mdi-account-question-outline::before{content:\"\\F0B5A\"}.mdi-account-remove::before{content:\"\\F0015\"}.mdi-account-remove-outline::before{content:\"\\F0AED\"}.mdi-account-search::before{content:\"\\F0016\"}.mdi-account-search-outline::before{content:\"\\F0935\"}.mdi-account-settings::before{content:\"\\F0630\"}.mdi-account-settings-outline::before{content:\"\\F10C9\"}.mdi-account-star::before{content:\"\\F0017\"}.mdi-account-star-outline::before{content:\"\\F0BE8\"}.mdi-account-supervisor::before{content:\"\\F0A8B\"}.mdi-account-supervisor-circle::before{content:\"\\F0A8C\"}.mdi-account-supervisor-outline::before{content:\"\\F112D\"}.mdi-account-switch::before{content:\"\\F0019\"}.mdi-account-switch-outline::before{content:\"\\F04CB\"}.mdi-account-tie::before{content:\"\\F0CE3\"}.mdi-account-tie-outline::before{content:\"\\F10CA\"}.mdi-account-tie-voice::before{content:\"\\F1308\"}.mdi-account-tie-voice-off::before{content:\"\\F130A\"}.mdi-account-tie-voice-off-outline::before{content:\"\\F130B\"}.mdi-account-tie-voice-outline::before{content:\"\\F1309\"}.mdi-account-voice::before{content:\"\\F05CB\"}.mdi-adjust::before{content:\"\\F001A\"}.mdi-adobe::before{content:\"\\F0936\"}.mdi-adobe-acrobat::before{content:\"\\F0F9D\"}.mdi-air-conditioner::before{content:\"\\F001B\"}.mdi-air-filter::before{content:\"\\F0D43\"}.mdi-air-horn::before{content:\"\\F0DAC\"}.mdi-air-humidifier::before{content:\"\\F1099\"}.mdi-air-purifier::before{content:\"\\F0D44\"}.mdi-airbag::before{content:\"\\F0BE9\"}.mdi-airballoon::before{content:\"\\F001C\"}.mdi-airballoon-outline::before{content:\"\\F100B\"}.mdi-airplane::before{content:\"\\F001D\"}.mdi-airplane-landing::before{content:\"\\F05D4\"}.mdi-airplane-off::before{content:\"\\F001E\"}.mdi-airplane-takeoff::before{content:\"\\F05D5\"}.mdi-airport::before{content:\"\\F084B\"}.mdi-alarm::before{content:\"\\F0020\"}.mdi-alarm-bell::before{content:\"\\F078E\"}.mdi-alarm-check::before{content:\"\\F0021\"}.mdi-alarm-light::before{content:\"\\F078F\"}.mdi-alarm-light-outline::before{content:\"\\F0BEA\"}.mdi-alarm-multiple::before{content:\"\\F0022\"}.mdi-alarm-note::before{content:\"\\F0E71\"}.mdi-alarm-note-off::before{content:\"\\F0E72\"}.mdi-alarm-off::before{content:\"\\F0023\"}.mdi-alarm-plus::before{content:\"\\F0024\"}.mdi-alarm-snooze::before{content:\"\\F068E\"}.mdi-album::before{content:\"\\F0025\"}.mdi-alert::before{content:\"\\F0026\"}.mdi-alert-box::before{content:\"\\F0027\"}.mdi-alert-box-outline::before{content:\"\\F0CE4\"}.mdi-alert-circle::before{content:\"\\F0028\"}.mdi-alert-circle-check::before{content:\"\\F11ED\"}.mdi-alert-circle-check-outline::before{content:\"\\F11EE\"}.mdi-alert-circle-outline::before{content:\"\\F05D6\"}.mdi-alert-decagram::before{content:\"\\F06BD\"}.mdi-alert-decagram-outline::before{content:\"\\F0CE5\"}.mdi-alert-octagon::before{content:\"\\F0029\"}.mdi-alert-octagon-outline::before{content:\"\\F0CE6\"}.mdi-alert-octagram::before{content:\"\\F0767\"}.mdi-alert-octagram-outline::before{content:\"\\F0CE7\"}.mdi-alert-outline::before{content:\"\\F002A\"}.mdi-alert-rhombus::before{content:\"\\F11CE\"}.mdi-alert-rhombus-outline::before{content:\"\\F11CF\"}.mdi-alien::before{content:\"\\F089A\"}.mdi-alien-outline::before{content:\"\\F10CB\"}.mdi-align-horizontal-center::before{content:\"\\F11C3\"}.mdi-align-horizontal-left::before{content:\"\\F11C2\"}.mdi-align-horizontal-right::before{content:\"\\F11C4\"}.mdi-align-vertical-bottom::before{content:\"\\F11C5\"}.mdi-align-vertical-center::before{content:\"\\F11C6\"}.mdi-align-vertical-top::before{content:\"\\F11C7\"}.mdi-all-inclusive::before{content:\"\\F06BE\"}.mdi-allergy::before{content:\"\\F1258\"}.mdi-alpha::before{content:\"\\F002B\"}.mdi-alpha-a::before{content:\"\\F0AEE\"}.mdi-alpha-a-box::before{content:\"\\F0B08\"}.mdi-alpha-a-box-outline::before{content:\"\\F0BEB\"}.mdi-alpha-a-circle::before{content:\"\\F0BEC\"}.mdi-alpha-a-circle-outline::before{content:\"\\F0BED\"}.mdi-alpha-b::before{content:\"\\F0AEF\"}.mdi-alpha-b-box::before{content:\"\\F0B09\"}.mdi-alpha-b-box-outline::before{content:\"\\F0BEE\"}.mdi-alpha-b-circle::before{content:\"\\F0BEF\"}.mdi-alpha-b-circle-outline::before{content:\"\\F0BF0\"}.mdi-alpha-c::before{content:\"\\F0AF0\"}.mdi-alpha-c-box::before{content:\"\\F0B0A\"}.mdi-alpha-c-box-outline::before{content:\"\\F0BF1\"}.mdi-alpha-c-circle::before{content:\"\\F0BF2\"}.mdi-alpha-c-circle-outline::before{content:\"\\F0BF3\"}.mdi-alpha-d::before{content:\"\\F0AF1\"}.mdi-alpha-d-box::before{content:\"\\F0B0B\"}.mdi-alpha-d-box-outline::before{content:\"\\F0BF4\"}.mdi-alpha-d-circle::before{content:\"\\F0BF5\"}.mdi-alpha-d-circle-outline::before{content:\"\\F0BF6\"}.mdi-alpha-e::before{content:\"\\F0AF2\"}.mdi-alpha-e-box::before{content:\"\\F0B0C\"}.mdi-alpha-e-box-outline::before{content:\"\\F0BF7\"}.mdi-alpha-e-circle::before{content:\"\\F0BF8\"}.mdi-alpha-e-circle-outline::before{content:\"\\F0BF9\"}.mdi-alpha-f::before{content:\"\\F0AF3\"}.mdi-alpha-f-box::before{content:\"\\F0B0D\"}.mdi-alpha-f-box-outline::before{content:\"\\F0BFA\"}.mdi-alpha-f-circle::before{content:\"\\F0BFB\"}.mdi-alpha-f-circle-outline::before{content:\"\\F0BFC\"}.mdi-alpha-g::before{content:\"\\F0AF4\"}.mdi-alpha-g-box::before{content:\"\\F0B0E\"}.mdi-alpha-g-box-outline::before{content:\"\\F0BFD\"}.mdi-alpha-g-circle::before{content:\"\\F0BFE\"}.mdi-alpha-g-circle-outline::before{content:\"\\F0BFF\"}.mdi-alpha-h::before{content:\"\\F0AF5\"}.mdi-alpha-h-box::before{content:\"\\F0B0F\"}.mdi-alpha-h-box-outline::before{content:\"\\F0C00\"}.mdi-alpha-h-circle::before{content:\"\\F0C01\"}.mdi-alpha-h-circle-outline::before{content:\"\\F0C02\"}.mdi-alpha-i::before{content:\"\\F0AF6\"}.mdi-alpha-i-box::before{content:\"\\F0B10\"}.mdi-alpha-i-box-outline::before{content:\"\\F0C03\"}.mdi-alpha-i-circle::before{content:\"\\F0C04\"}.mdi-alpha-i-circle-outline::before{content:\"\\F0C05\"}.mdi-alpha-j::before{content:\"\\F0AF7\"}.mdi-alpha-j-box::before{content:\"\\F0B11\"}.mdi-alpha-j-box-outline::before{content:\"\\F0C06\"}.mdi-alpha-j-circle::before{content:\"\\F0C07\"}.mdi-alpha-j-circle-outline::before{content:\"\\F0C08\"}.mdi-alpha-k::before{content:\"\\F0AF8\"}.mdi-alpha-k-box::before{content:\"\\F0B12\"}.mdi-alpha-k-box-outline::before{content:\"\\F0C09\"}.mdi-alpha-k-circle::before{content:\"\\F0C0A\"}.mdi-alpha-k-circle-outline::before{content:\"\\F0C0B\"}.mdi-alpha-l::before{content:\"\\F0AF9\"}.mdi-alpha-l-box::before{content:\"\\F0B13\"}.mdi-alpha-l-box-outline::before{content:\"\\F0C0C\"}.mdi-alpha-l-circle::before{content:\"\\F0C0D\"}.mdi-alpha-l-circle-outline::before{content:\"\\F0C0E\"}.mdi-alpha-m::before{content:\"\\F0AFA\"}.mdi-alpha-m-box::before{content:\"\\F0B14\"}.mdi-alpha-m-box-outline::before{content:\"\\F0C0F\"}.mdi-alpha-m-circle::before{content:\"\\F0C10\"}.mdi-alpha-m-circle-outline::before{content:\"\\F0C11\"}.mdi-alpha-n::before{content:\"\\F0AFB\"}.mdi-alpha-n-box::before{content:\"\\F0B15\"}.mdi-alpha-n-box-outline::before{content:\"\\F0C12\"}.mdi-alpha-n-circle::before{content:\"\\F0C13\"}.mdi-alpha-n-circle-outline::before{content:\"\\F0C14\"}.mdi-alpha-o::before{content:\"\\F0AFC\"}.mdi-alpha-o-box::before{content:\"\\F0B16\"}.mdi-alpha-o-box-outline::before{content:\"\\F0C15\"}.mdi-alpha-o-circle::before{content:\"\\F0C16\"}.mdi-alpha-o-circle-outline::before{content:\"\\F0C17\"}.mdi-alpha-p::before{content:\"\\F0AFD\"}.mdi-alpha-p-box::before{content:\"\\F0B17\"}.mdi-alpha-p-box-outline::before{content:\"\\F0C18\"}.mdi-alpha-p-circle::before{content:\"\\F0C19\"}.mdi-alpha-p-circle-outline::before{content:\"\\F0C1A\"}.mdi-alpha-q::before{content:\"\\F0AFE\"}.mdi-alpha-q-box::before{content:\"\\F0B18\"}.mdi-alpha-q-box-outline::before{content:\"\\F0C1B\"}.mdi-alpha-q-circle::before{content:\"\\F0C1C\"}.mdi-alpha-q-circle-outline::before{content:\"\\F0C1D\"}.mdi-alpha-r::before{content:\"\\F0AFF\"}.mdi-alpha-r-box::before{content:\"\\F0B19\"}.mdi-alpha-r-box-outline::before{content:\"\\F0C1E\"}.mdi-alpha-r-circle::before{content:\"\\F0C1F\"}.mdi-alpha-r-circle-outline::before{content:\"\\F0C20\"}.mdi-alpha-s::before{content:\"\\F0B00\"}.mdi-alpha-s-box::before{content:\"\\F0B1A\"}.mdi-alpha-s-box-outline::before{content:\"\\F0C21\"}.mdi-alpha-s-circle::before{content:\"\\F0C22\"}.mdi-alpha-s-circle-outline::before{content:\"\\F0C23\"}.mdi-alpha-t::before{content:\"\\F0B01\"}.mdi-alpha-t-box::before{content:\"\\F0B1B\"}.mdi-alpha-t-box-outline::before{content:\"\\F0C24\"}.mdi-alpha-t-circle::before{content:\"\\F0C25\"}.mdi-alpha-t-circle-outline::before{content:\"\\F0C26\"}.mdi-alpha-u::before{content:\"\\F0B02\"}.mdi-alpha-u-box::before{content:\"\\F0B1C\"}.mdi-alpha-u-box-outline::before{content:\"\\F0C27\"}.mdi-alpha-u-circle::before{content:\"\\F0C28\"}.mdi-alpha-u-circle-outline::before{content:\"\\F0C29\"}.mdi-alpha-v::before{content:\"\\F0B03\"}.mdi-alpha-v-box::before{content:\"\\F0B1D\"}.mdi-alpha-v-box-outline::before{content:\"\\F0C2A\"}.mdi-alpha-v-circle::before{content:\"\\F0C2B\"}.mdi-alpha-v-circle-outline::before{content:\"\\F0C2C\"}.mdi-alpha-w::before{content:\"\\F0B04\"}.mdi-alpha-w-box::before{content:\"\\F0B1E\"}.mdi-alpha-w-box-outline::before{content:\"\\F0C2D\"}.mdi-alpha-w-circle::before{content:\"\\F0C2E\"}.mdi-alpha-w-circle-outline::before{content:\"\\F0C2F\"}.mdi-alpha-x::before{content:\"\\F0B05\"}.mdi-alpha-x-box::before{content:\"\\F0B1F\"}.mdi-alpha-x-box-outline::before{content:\"\\F0C30\"}.mdi-alpha-x-circle::before{content:\"\\F0C31\"}.mdi-alpha-x-circle-outline::before{content:\"\\F0C32\"}.mdi-alpha-y::before{content:\"\\F0B06\"}.mdi-alpha-y-box::before{content:\"\\F0B20\"}.mdi-alpha-y-box-outline::before{content:\"\\F0C33\"}.mdi-alpha-y-circle::before{content:\"\\F0C34\"}.mdi-alpha-y-circle-outline::before{content:\"\\F0C35\"}.mdi-alpha-z::before{content:\"\\F0B07\"}.mdi-alpha-z-box::before{content:\"\\F0B21\"}.mdi-alpha-z-box-outline::before{content:\"\\F0C36\"}.mdi-alpha-z-circle::before{content:\"\\F0C37\"}.mdi-alpha-z-circle-outline::before{content:\"\\F0C38\"}.mdi-alphabet-aurebesh::before{content:\"\\F132C\"}.mdi-alphabet-cyrillic::before{content:\"\\F132D\"}.mdi-alphabet-greek::before{content:\"\\F132E\"}.mdi-alphabet-latin::before{content:\"\\F132F\"}.mdi-alphabet-piqad::before{content:\"\\F1330\"}.mdi-alphabet-tengwar::before{content:\"\\F1337\"}.mdi-alphabetical::before{content:\"\\F002C\"}.mdi-alphabetical-off::before{content:\"\\F100C\"}.mdi-alphabetical-variant::before{content:\"\\F100D\"}.mdi-alphabetical-variant-off::before{content:\"\\F100E\"}.mdi-altimeter::before{content:\"\\F05D7\"}.mdi-amazon::before{content:\"\\F002D\"}.mdi-amazon-alexa::before{content:\"\\F08C6\"}.mdi-ambulance::before{content:\"\\F002F\"}.mdi-ammunition::before{content:\"\\F0CE8\"}.mdi-ampersand::before{content:\"\\F0A8D\"}.mdi-amplifier::before{content:\"\\F0030\"}.mdi-amplifier-off::before{content:\"\\F11B5\"}.mdi-anchor::before{content:\"\\F0031\"}.mdi-android::before{content:\"\\F0032\"}.mdi-android-auto::before{content:\"\\F0A8E\"}.mdi-android-debug-bridge::before{content:\"\\F0033\"}.mdi-android-messages::before{content:\"\\F0D45\"}.mdi-android-studio::before{content:\"\\F0034\"}.mdi-angle-acute::before{content:\"\\F0937\"}.mdi-angle-obtuse::before{content:\"\\F0938\"}.mdi-angle-right::before{content:\"\\F0939\"}.mdi-angular::before{content:\"\\F06B2\"}.mdi-angularjs::before{content:\"\\F06BF\"}.mdi-animation::before{content:\"\\F05D8\"}.mdi-animation-outline::before{content:\"\\F0A8F\"}.mdi-animation-play::before{content:\"\\F093A\"}.mdi-animation-play-outline::before{content:\"\\F0A90\"}.mdi-ansible::before{content:\"\\F109A\"}.mdi-antenna::before{content:\"\\F1119\"}.mdi-anvil::before{content:\"\\F089B\"}.mdi-apache-kafka::before{content:\"\\F100F\"}.mdi-api::before{content:\"\\F109B\"}.mdi-api-off::before{content:\"\\F1257\"}.mdi-apple::before{content:\"\\F0035\"}.mdi-apple-airplay::before{content:\"\\F001F\"}.mdi-apple-finder::before{content:\"\\F0036\"}.mdi-apple-icloud::before{content:\"\\F0038\"}.mdi-apple-ios::before{content:\"\\F0037\"}.mdi-apple-keyboard-caps::before{content:\"\\F0632\"}.mdi-apple-keyboard-command::before{content:\"\\F0633\"}.mdi-apple-keyboard-control::before{content:\"\\F0634\"}.mdi-apple-keyboard-option::before{content:\"\\F0635\"}.mdi-apple-keyboard-shift::before{content:\"\\F0636\"}.mdi-apple-safari::before{content:\"\\F0039\"}.mdi-application::before{content:\"\\F0614\"}.mdi-application-export::before{content:\"\\F0DAD\"}.mdi-application-import::before{content:\"\\F0DAE\"}.mdi-approximately-equal::before{content:\"\\F0F9E\"}.mdi-approximately-equal-box::before{content:\"\\F0F9F\"}.mdi-apps::before{content:\"\\F003B\"}.mdi-apps-box::before{content:\"\\F0D46\"}.mdi-arch::before{content:\"\\F08C7\"}.mdi-archive::before{content:\"\\F003C\"}.mdi-archive-arrow-down::before{content:\"\\F1259\"}.mdi-archive-arrow-down-outline::before{content:\"\\F125A\"}.mdi-archive-arrow-up::before{content:\"\\F125B\"}.mdi-archive-arrow-up-outline::before{content:\"\\F125C\"}.mdi-archive-outline::before{content:\"\\F120E\"}.mdi-arm-flex::before{content:\"\\F0FD7\"}.mdi-arm-flex-outline::before{content:\"\\F0FD6\"}.mdi-arrange-bring-forward::before{content:\"\\F003D\"}.mdi-arrange-bring-to-front::before{content:\"\\F003E\"}.mdi-arrange-send-backward::before{content:\"\\F003F\"}.mdi-arrange-send-to-back::before{content:\"\\F0040\"}.mdi-arrow-all::before{content:\"\\F0041\"}.mdi-arrow-bottom-left::before{content:\"\\F0042\"}.mdi-arrow-bottom-left-bold-outline::before{content:\"\\F09B7\"}.mdi-arrow-bottom-left-thick::before{content:\"\\F09B8\"}.mdi-arrow-bottom-right::before{content:\"\\F0043\"}.mdi-arrow-bottom-right-bold-outline::before{content:\"\\F09B9\"}.mdi-arrow-bottom-right-thick::before{content:\"\\F09BA\"}.mdi-arrow-collapse::before{content:\"\\F0615\"}.mdi-arrow-collapse-all::before{content:\"\\F0044\"}.mdi-arrow-collapse-down::before{content:\"\\F0792\"}.mdi-arrow-collapse-horizontal::before{content:\"\\F084C\"}.mdi-arrow-collapse-left::before{content:\"\\F0793\"}.mdi-arrow-collapse-right::before{content:\"\\F0794\"}.mdi-arrow-collapse-up::before{content:\"\\F0795\"}.mdi-arrow-collapse-vertical::before{content:\"\\F084D\"}.mdi-arrow-decision::before{content:\"\\F09BB\"}.mdi-arrow-decision-auto::before{content:\"\\F09BC\"}.mdi-arrow-decision-auto-outline::before{content:\"\\F09BD\"}.mdi-arrow-decision-outline::before{content:\"\\F09BE\"}.mdi-arrow-down::before{content:\"\\F0045\"}.mdi-arrow-down-bold::before{content:\"\\F072E\"}.mdi-arrow-down-bold-box::before{content:\"\\F072F\"}.mdi-arrow-down-bold-box-outline::before{content:\"\\F0730\"}.mdi-arrow-down-bold-circle::before{content:\"\\F0047\"}.mdi-arrow-down-bold-circle-outline::before{content:\"\\F0048\"}.mdi-arrow-down-bold-hexagon-outline::before{content:\"\\F0049\"}.mdi-arrow-down-bold-outline::before{content:\"\\F09BF\"}.mdi-arrow-down-box::before{content:\"\\F06C0\"}.mdi-arrow-down-circle::before{content:\"\\F0CDB\"}.mdi-arrow-down-circle-outline::before{content:\"\\F0CDC\"}.mdi-arrow-down-drop-circle::before{content:\"\\F004A\"}.mdi-arrow-down-drop-circle-outline::before{content:\"\\F004B\"}.mdi-arrow-down-thick::before{content:\"\\F0046\"}.mdi-arrow-expand::before{content:\"\\F0616\"}.mdi-arrow-expand-all::before{content:\"\\F004C\"}.mdi-arrow-expand-down::before{content:\"\\F0796\"}.mdi-arrow-expand-horizontal::before{content:\"\\F084E\"}.mdi-arrow-expand-left::before{content:\"\\F0797\"}.mdi-arrow-expand-right::before{content:\"\\F0798\"}.mdi-arrow-expand-up::before{content:\"\\F0799\"}.mdi-arrow-expand-vertical::before{content:\"\\F084F\"}.mdi-arrow-horizontal-lock::before{content:\"\\F115B\"}.mdi-arrow-left::before{content:\"\\F004D\"}.mdi-arrow-left-bold::before{content:\"\\F0731\"}.mdi-arrow-left-bold-box::before{content:\"\\F0732\"}.mdi-arrow-left-bold-box-outline::before{content:\"\\F0733\"}.mdi-arrow-left-bold-circle::before{content:\"\\F004F\"}.mdi-arrow-left-bold-circle-outline::before{content:\"\\F0050\"}.mdi-arrow-left-bold-hexagon-outline::before{content:\"\\F0051\"}.mdi-arrow-left-bold-outline::before{content:\"\\F09C0\"}.mdi-arrow-left-box::before{content:\"\\F06C1\"}.mdi-arrow-left-circle::before{content:\"\\F0CDD\"}.mdi-arrow-left-circle-outline::before{content:\"\\F0CDE\"}.mdi-arrow-left-drop-circle::before{content:\"\\F0052\"}.mdi-arrow-left-drop-circle-outline::before{content:\"\\F0053\"}.mdi-arrow-left-right::before{content:\"\\F0E73\"}.mdi-arrow-left-right-bold::before{content:\"\\F0E74\"}.mdi-arrow-left-right-bold-outline::before{content:\"\\F09C1\"}.mdi-arrow-left-thick::before{content:\"\\F004E\"}.mdi-arrow-right::before{content:\"\\F0054\"}.mdi-arrow-right-bold::before{content:\"\\F0734\"}.mdi-arrow-right-bold-box::before{content:\"\\F0735\"}.mdi-arrow-right-bold-box-outline::before{content:\"\\F0736\"}.mdi-arrow-right-bold-circle::before{content:\"\\F0056\"}.mdi-arrow-right-bold-circle-outline::before{content:\"\\F0057\"}.mdi-arrow-right-bold-hexagon-outline::before{content:\"\\F0058\"}.mdi-arrow-right-bold-outline::before{content:\"\\F09C2\"}.mdi-arrow-right-box::before{content:\"\\F06C2\"}.mdi-arrow-right-circle::before{content:\"\\F0CDF\"}.mdi-arrow-right-circle-outline::before{content:\"\\F0CE0\"}.mdi-arrow-right-drop-circle::before{content:\"\\F0059\"}.mdi-arrow-right-drop-circle-outline::before{content:\"\\F005A\"}.mdi-arrow-right-thick::before{content:\"\\F0055\"}.mdi-arrow-split-horizontal::before{content:\"\\F093B\"}.mdi-arrow-split-vertical::before{content:\"\\F093C\"}.mdi-arrow-top-left::before{content:\"\\F005B\"}.mdi-arrow-top-left-bold-outline::before{content:\"\\F09C3\"}.mdi-arrow-top-left-bottom-right::before{content:\"\\F0E75\"}.mdi-arrow-top-left-bottom-right-bold::before{content:\"\\F0E76\"}.mdi-arrow-top-left-thick::before{content:\"\\F09C4\"}.mdi-arrow-top-right::before{content:\"\\F005C\"}.mdi-arrow-top-right-bold-outline::before{content:\"\\F09C5\"}.mdi-arrow-top-right-bottom-left::before{content:\"\\F0E77\"}.mdi-arrow-top-right-bottom-left-bold::before{content:\"\\F0E78\"}.mdi-arrow-top-right-thick::before{content:\"\\F09C6\"}.mdi-arrow-up::before{content:\"\\F005D\"}.mdi-arrow-up-bold::before{content:\"\\F0737\"}.mdi-arrow-up-bold-box::before{content:\"\\F0738\"}.mdi-arrow-up-bold-box-outline::before{content:\"\\F0739\"}.mdi-arrow-up-bold-circle::before{content:\"\\F005F\"}.mdi-arrow-up-bold-circle-outline::before{content:\"\\F0060\"}.mdi-arrow-up-bold-hexagon-outline::before{content:\"\\F0061\"}.mdi-arrow-up-bold-outline::before{content:\"\\F09C7\"}.mdi-arrow-up-box::before{content:\"\\F06C3\"}.mdi-arrow-up-circle::before{content:\"\\F0CE1\"}.mdi-arrow-up-circle-outline::before{content:\"\\F0CE2\"}.mdi-arrow-up-down::before{content:\"\\F0E79\"}.mdi-arrow-up-down-bold::before{content:\"\\F0E7A\"}.mdi-arrow-up-down-bold-outline::before{content:\"\\F09C8\"}.mdi-arrow-up-drop-circle::before{content:\"\\F0062\"}.mdi-arrow-up-drop-circle-outline::before{content:\"\\F0063\"}.mdi-arrow-up-thick::before{content:\"\\F005E\"}.mdi-arrow-vertical-lock::before{content:\"\\F115C\"}.mdi-artstation::before{content:\"\\F0B5B\"}.mdi-aspect-ratio::before{content:\"\\F0A24\"}.mdi-assistant::before{content:\"\\F0064\"}.mdi-asterisk::before{content:\"\\F06C4\"}.mdi-at::before{content:\"\\F0065\"}.mdi-atlassian::before{content:\"\\F0804\"}.mdi-atm::before{content:\"\\F0D47\"}.mdi-atom::before{content:\"\\F0768\"}.mdi-atom-variant::before{content:\"\\F0E7B\"}.mdi-attachment::before{content:\"\\F0066\"}.mdi-audio-video::before{content:\"\\F093D\"}.mdi-audio-video-off::before{content:\"\\F11B6\"}.mdi-augmented-reality::before{content:\"\\F0850\"}.mdi-auto-download::before{content:\"\\F137E\"}.mdi-auto-fix::before{content:\"\\F0068\"}.mdi-auto-upload::before{content:\"\\F0069\"}.mdi-autorenew::before{content:\"\\F006A\"}.mdi-av-timer::before{content:\"\\F006B\"}.mdi-aws::before{content:\"\\F0E0F\"}.mdi-axe::before{content:\"\\F08C8\"}.mdi-axis::before{content:\"\\F0D48\"}.mdi-axis-arrow::before{content:\"\\F0D49\"}.mdi-axis-arrow-lock::before{content:\"\\F0D4A\"}.mdi-axis-lock::before{content:\"\\F0D4B\"}.mdi-axis-x-arrow::before{content:\"\\F0D4C\"}.mdi-axis-x-arrow-lock::before{content:\"\\F0D4D\"}.mdi-axis-x-rotate-clockwise::before{content:\"\\F0D4E\"}.mdi-axis-x-rotate-counterclockwise::before{content:\"\\F0D4F\"}.mdi-axis-x-y-arrow-lock::before{content:\"\\F0D50\"}.mdi-axis-y-arrow::before{content:\"\\F0D51\"}.mdi-axis-y-arrow-lock::before{content:\"\\F0D52\"}.mdi-axis-y-rotate-clockwise::before{content:\"\\F0D53\"}.mdi-axis-y-rotate-counterclockwise::before{content:\"\\F0D54\"}.mdi-axis-z-arrow::before{content:\"\\F0D55\"}.mdi-axis-z-arrow-lock::before{content:\"\\F0D56\"}.mdi-axis-z-rotate-clockwise::before{content:\"\\F0D57\"}.mdi-axis-z-rotate-counterclockwise::before{content:\"\\F0D58\"}.mdi-babel::before{content:\"\\F0A25\"}.mdi-baby::before{content:\"\\F006C\"}.mdi-baby-bottle::before{content:\"\\F0F39\"}.mdi-baby-bottle-outline::before{content:\"\\F0F3A\"}.mdi-baby-carriage::before{content:\"\\F068F\"}.mdi-baby-carriage-off::before{content:\"\\F0FA0\"}.mdi-baby-face::before{content:\"\\F0E7C\"}.mdi-baby-face-outline::before{content:\"\\F0E7D\"}.mdi-backburger::before{content:\"\\F006D\"}.mdi-backspace::before{content:\"\\F006E\"}.mdi-backspace-outline::before{content:\"\\F0B5C\"}.mdi-backspace-reverse::before{content:\"\\F0E7E\"}.mdi-backspace-reverse-outline::before{content:\"\\F0E7F\"}.mdi-backup-restore::before{content:\"\\F006F\"}.mdi-bacteria::before{content:\"\\F0ED5\"}.mdi-bacteria-outline::before{content:\"\\F0ED6\"}.mdi-badge-account::before{content:\"\\F0DA7\"}.mdi-badge-account-alert::before{content:\"\\F0DA8\"}.mdi-badge-account-alert-outline::before{content:\"\\F0DA9\"}.mdi-badge-account-horizontal::before{content:\"\\F0E0D\"}.mdi-badge-account-horizontal-outline::before{content:\"\\F0E0E\"}.mdi-badge-account-outline::before{content:\"\\F0DAA\"}.mdi-badminton::before{content:\"\\F0851\"}.mdi-bag-carry-on::before{content:\"\\F0F3B\"}.mdi-bag-carry-on-check::before{content:\"\\F0D65\"}.mdi-bag-carry-on-off::before{content:\"\\F0F3C\"}.mdi-bag-checked::before{content:\"\\F0F3D\"}.mdi-bag-personal::before{content:\"\\F0E10\"}.mdi-bag-personal-off::before{content:\"\\F0E11\"}.mdi-bag-personal-off-outline::before{content:\"\\F0E12\"}.mdi-bag-personal-outline::before{content:\"\\F0E13\"}.mdi-baguette::before{content:\"\\F0F3E\"}.mdi-balloon::before{content:\"\\F0A26\"}.mdi-ballot::before{content:\"\\F09C9\"}.mdi-ballot-outline::before{content:\"\\F09CA\"}.mdi-ballot-recount::before{content:\"\\F0C39\"}.mdi-ballot-recount-outline::before{content:\"\\F0C3A\"}.mdi-bandage::before{content:\"\\F0DAF\"}.mdi-bandcamp::before{content:\"\\F0675\"}.mdi-bank::before{content:\"\\F0070\"}.mdi-bank-minus::before{content:\"\\F0DB0\"}.mdi-bank-outline::before{content:\"\\F0E80\"}.mdi-bank-plus::before{content:\"\\F0DB1\"}.mdi-bank-remove::before{content:\"\\F0DB2\"}.mdi-bank-transfer::before{content:\"\\F0A27\"}.mdi-bank-transfer-in::before{content:\"\\F0A28\"}.mdi-bank-transfer-out::before{content:\"\\F0A29\"}.mdi-barcode::before{content:\"\\F0071\"}.mdi-barcode-off::before{content:\"\\F1236\"}.mdi-barcode-scan::before{content:\"\\F0072\"}.mdi-barley::before{content:\"\\F0073\"}.mdi-barley-off::before{content:\"\\F0B5D\"}.mdi-barn::before{content:\"\\F0B5E\"}.mdi-barrel::before{content:\"\\F0074\"}.mdi-baseball::before{content:\"\\F0852\"}.mdi-baseball-bat::before{content:\"\\F0853\"}.mdi-bash::before{content:\"\\F1183\"}.mdi-basket::before{content:\"\\F0076\"}.mdi-basket-fill::before{content:\"\\F0077\"}.mdi-basket-outline::before{content:\"\\F1181\"}.mdi-basket-unfill::before{content:\"\\F0078\"}.mdi-basketball::before{content:\"\\F0806\"}.mdi-basketball-hoop::before{content:\"\\F0C3B\"}.mdi-basketball-hoop-outline::before{content:\"\\F0C3C\"}.mdi-bat::before{content:\"\\F0B5F\"}.mdi-battery::before{content:\"\\F0079\"}.mdi-battery-10::before{content:\"\\F007A\"}.mdi-battery-10-bluetooth::before{content:\"\\F093E\"}.mdi-battery-20::before{content:\"\\F007B\"}.mdi-battery-20-bluetooth::before{content:\"\\F093F\"}.mdi-battery-30::before{content:\"\\F007C\"}.mdi-battery-30-bluetooth::before{content:\"\\F0940\"}.mdi-battery-40::before{content:\"\\F007D\"}.mdi-battery-40-bluetooth::before{content:\"\\F0941\"}.mdi-battery-50::before{content:\"\\F007E\"}.mdi-battery-50-bluetooth::before{content:\"\\F0942\"}.mdi-battery-60::before{content:\"\\F007F\"}.mdi-battery-60-bluetooth::before{content:\"\\F0943\"}.mdi-battery-70::before{content:\"\\F0080\"}.mdi-battery-70-bluetooth::before{content:\"\\F0944\"}.mdi-battery-80::before{content:\"\\F0081\"}.mdi-battery-80-bluetooth::before{content:\"\\F0945\"}.mdi-battery-90::before{content:\"\\F0082\"}.mdi-battery-90-bluetooth::before{content:\"\\F0946\"}.mdi-battery-alert::before{content:\"\\F0083\"}.mdi-battery-alert-bluetooth::before{content:\"\\F0947\"}.mdi-battery-alert-variant::before{content:\"\\F10CC\"}.mdi-battery-alert-variant-outline::before{content:\"\\F10CD\"}.mdi-battery-bluetooth::before{content:\"\\F0948\"}.mdi-battery-bluetooth-variant::before{content:\"\\F0949\"}.mdi-battery-charging::before{content:\"\\F0084\"}.mdi-battery-charging-10::before{content:\"\\F089C\"}.mdi-battery-charging-100::before{content:\"\\F0085\"}.mdi-battery-charging-20::before{content:\"\\F0086\"}.mdi-battery-charging-30::before{content:\"\\F0087\"}.mdi-battery-charging-40::before{content:\"\\F0088\"}.mdi-battery-charging-50::before{content:\"\\F089D\"}.mdi-battery-charging-60::before{content:\"\\F0089\"}.mdi-battery-charging-70::before{content:\"\\F089E\"}.mdi-battery-charging-80::before{content:\"\\F008A\"}.mdi-battery-charging-90::before{content:\"\\F008B\"}.mdi-battery-charging-high::before{content:\"\\F12A6\"}.mdi-battery-charging-low::before{content:\"\\F12A4\"}.mdi-battery-charging-medium::before{content:\"\\F12A5\"}.mdi-battery-charging-outline::before{content:\"\\F089F\"}.mdi-battery-charging-wireless::before{content:\"\\F0807\"}.mdi-battery-charging-wireless-10::before{content:\"\\F0808\"}.mdi-battery-charging-wireless-20::before{content:\"\\F0809\"}.mdi-battery-charging-wireless-30::before{content:\"\\F080A\"}.mdi-battery-charging-wireless-40::before{content:\"\\F080B\"}.mdi-battery-charging-wireless-50::before{content:\"\\F080C\"}.mdi-battery-charging-wireless-60::before{content:\"\\F080D\"}.mdi-battery-charging-wireless-70::before{content:\"\\F080E\"}.mdi-battery-charging-wireless-80::before{content:\"\\F080F\"}.mdi-battery-charging-wireless-90::before{content:\"\\F0810\"}.mdi-battery-charging-wireless-alert::before{content:\"\\F0811\"}.mdi-battery-charging-wireless-outline::before{content:\"\\F0812\"}.mdi-battery-heart::before{content:\"\\F120F\"}.mdi-battery-heart-outline::before{content:\"\\F1210\"}.mdi-battery-heart-variant::before{content:\"\\F1211\"}.mdi-battery-high::before{content:\"\\F12A3\"}.mdi-battery-low::before{content:\"\\F12A1\"}.mdi-battery-medium::before{content:\"\\F12A2\"}.mdi-battery-minus::before{content:\"\\F008C\"}.mdi-battery-negative::before{content:\"\\F008D\"}.mdi-battery-off::before{content:\"\\F125D\"}.mdi-battery-off-outline::before{content:\"\\F125E\"}.mdi-battery-outline::before{content:\"\\F008E\"}.mdi-battery-plus::before{content:\"\\F008F\"}.mdi-battery-positive::before{content:\"\\F0090\"}.mdi-battery-unknown::before{content:\"\\F0091\"}.mdi-battery-unknown-bluetooth::before{content:\"\\F094A\"}.mdi-battlenet::before{content:\"\\F0B60\"}.mdi-beach::before{content:\"\\F0092\"}.mdi-beaker::before{content:\"\\F0CEA\"}.mdi-beaker-alert::before{content:\"\\F1229\"}.mdi-beaker-alert-outline::before{content:\"\\F122A\"}.mdi-beaker-check::before{content:\"\\F122B\"}.mdi-beaker-check-outline::before{content:\"\\F122C\"}.mdi-beaker-minus::before{content:\"\\F122D\"}.mdi-beaker-minus-outline::before{content:\"\\F122E\"}.mdi-beaker-outline::before{content:\"\\F0690\"}.mdi-beaker-plus::before{content:\"\\F122F\"}.mdi-beaker-plus-outline::before{content:\"\\F1230\"}.mdi-beaker-question::before{content:\"\\F1231\"}.mdi-beaker-question-outline::before{content:\"\\F1232\"}.mdi-beaker-remove::before{content:\"\\F1233\"}.mdi-beaker-remove-outline::before{content:\"\\F1234\"}.mdi-bed::before{content:\"\\F02E3\"}.mdi-bed-double::before{content:\"\\F0FD4\"}.mdi-bed-double-outline::before{content:\"\\F0FD3\"}.mdi-bed-empty::before{content:\"\\F08A0\"}.mdi-bed-king::before{content:\"\\F0FD2\"}.mdi-bed-king-outline::before{content:\"\\F0FD1\"}.mdi-bed-outline::before{content:\"\\F0099\"}.mdi-bed-queen::before{content:\"\\F0FD0\"}.mdi-bed-queen-outline::before{content:\"\\F0FDB\"}.mdi-bed-single::before{content:\"\\F106D\"}.mdi-bed-single-outline::before{content:\"\\F106E\"}.mdi-bee::before{content:\"\\F0FA1\"}.mdi-bee-flower::before{content:\"\\F0FA2\"}.mdi-beehive-outline::before{content:\"\\F10CE\"}.mdi-beer::before{content:\"\\F0098\"}.mdi-beer-outline::before{content:\"\\F130C\"}.mdi-bell::before{content:\"\\F009A\"}.mdi-bell-alert::before{content:\"\\F0D59\"}.mdi-bell-alert-outline::before{content:\"\\F0E81\"}.mdi-bell-check::before{content:\"\\F11E5\"}.mdi-bell-check-outline::before{content:\"\\F11E6\"}.mdi-bell-circle::before{content:\"\\F0D5A\"}.mdi-bell-circle-outline::before{content:\"\\F0D5B\"}.mdi-bell-off::before{content:\"\\F009B\"}.mdi-bell-off-outline::before{content:\"\\F0A91\"}.mdi-bell-outline::before{content:\"\\F009C\"}.mdi-bell-plus::before{content:\"\\F009D\"}.mdi-bell-plus-outline::before{content:\"\\F0A92\"}.mdi-bell-ring::before{content:\"\\F009E\"}.mdi-bell-ring-outline::before{content:\"\\F009F\"}.mdi-bell-sleep::before{content:\"\\F00A0\"}.mdi-bell-sleep-outline::before{content:\"\\F0A93\"}.mdi-beta::before{content:\"\\F00A1\"}.mdi-betamax::before{content:\"\\F09CB\"}.mdi-biathlon::before{content:\"\\F0E14\"}.mdi-bicycle::before{content:\"\\F109C\"}.mdi-bicycle-basket::before{content:\"\\F1235\"}.mdi-bike::before{content:\"\\F00A3\"}.mdi-bike-fast::before{content:\"\\F111F\"}.mdi-billboard::before{content:\"\\F1010\"}.mdi-billiards::before{content:\"\\F0B61\"}.mdi-billiards-rack::before{content:\"\\F0B62\"}.mdi-binoculars::before{content:\"\\F00A5\"}.mdi-bio::before{content:\"\\F00A6\"}.mdi-biohazard::before{content:\"\\F00A7\"}.mdi-bitbucket::before{content:\"\\F00A8\"}.mdi-bitcoin::before{content:\"\\F0813\"}.mdi-black-mesa::before{content:\"\\F00A9\"}.mdi-blender::before{content:\"\\F0CEB\"}.mdi-blender-software::before{content:\"\\F00AB\"}.mdi-blinds::before{content:\"\\F00AC\"}.mdi-blinds-open::before{content:\"\\F1011\"}.mdi-block-helper::before{content:\"\\F00AD\"}.mdi-blogger::before{content:\"\\F00AE\"}.mdi-blood-bag::before{content:\"\\F0CEC\"}.mdi-bluetooth::before{content:\"\\F00AF\"}.mdi-bluetooth-audio::before{content:\"\\F00B0\"}.mdi-bluetooth-connect::before{content:\"\\F00B1\"}.mdi-bluetooth-off::before{content:\"\\F00B2\"}.mdi-bluetooth-settings::before{content:\"\\F00B3\"}.mdi-bluetooth-transfer::before{content:\"\\F00B4\"}.mdi-blur::before{content:\"\\F00B5\"}.mdi-blur-linear::before{content:\"\\F00B6\"}.mdi-blur-off::before{content:\"\\F00B7\"}.mdi-blur-radial::before{content:\"\\F00B8\"}.mdi-bolnisi-cross::before{content:\"\\F0CED\"}.mdi-bolt::before{content:\"\\F0DB3\"}.mdi-bomb::before{content:\"\\F0691\"}.mdi-bomb-off::before{content:\"\\F06C5\"}.mdi-bone::before{content:\"\\F00B9\"}.mdi-book::before{content:\"\\F00BA\"}.mdi-book-account::before{content:\"\\F13AD\"}.mdi-book-account-outline::before{content:\"\\F13AE\"}.mdi-book-alphabet::before{content:\"\\F061D\"}.mdi-book-cross::before{content:\"\\F00A2\"}.mdi-book-information-variant::before{content:\"\\F106F\"}.mdi-book-lock::before{content:\"\\F079A\"}.mdi-book-lock-open::before{content:\"\\F079B\"}.mdi-book-minus::before{content:\"\\F05D9\"}.mdi-book-minus-multiple::before{content:\"\\F0A94\"}.mdi-book-minus-multiple-outline::before{content:\"\\F090B\"}.mdi-book-multiple::before{content:\"\\F00BB\"}.mdi-book-multiple-outline::before{content:\"\\F0436\"}.mdi-book-music::before{content:\"\\F0067\"}.mdi-book-open::before{content:\"\\F00BD\"}.mdi-book-open-outline::before{content:\"\\F0B63\"}.mdi-book-open-page-variant::before{content:\"\\F05DA\"}.mdi-book-open-variant::before{content:\"\\F00BE\"}.mdi-book-outline::before{content:\"\\F0B64\"}.mdi-book-play::before{content:\"\\F0E82\"}.mdi-book-play-outline::before{content:\"\\F0E83\"}.mdi-book-plus::before{content:\"\\F05DB\"}.mdi-book-plus-multiple::before{content:\"\\F0A95\"}.mdi-book-plus-multiple-outline::before{content:\"\\F0ADE\"}.mdi-book-remove::before{content:\"\\F0A97\"}.mdi-book-remove-multiple::before{content:\"\\F0A96\"}.mdi-book-remove-multiple-outline::before{content:\"\\F04CA\"}.mdi-book-search::before{content:\"\\F0E84\"}.mdi-book-search-outline::before{content:\"\\F0E85\"}.mdi-book-variant::before{content:\"\\F00BF\"}.mdi-book-variant-multiple::before{content:\"\\F00BC\"}.mdi-bookmark::before{content:\"\\F00C0\"}.mdi-bookmark-check::before{content:\"\\F00C1\"}.mdi-bookmark-check-outline::before{content:\"\\F137B\"}.mdi-bookmark-minus::before{content:\"\\F09CC\"}.mdi-bookmark-minus-outline::before{content:\"\\F09CD\"}.mdi-bookmark-multiple::before{content:\"\\F0E15\"}.mdi-bookmark-multiple-outline::before{content:\"\\F0E16\"}.mdi-bookmark-music::before{content:\"\\F00C2\"}.mdi-bookmark-music-outline::before{content:\"\\F1379\"}.mdi-bookmark-off::before{content:\"\\F09CE\"}.mdi-bookmark-off-outline::before{content:\"\\F09CF\"}.mdi-bookmark-outline::before{content:\"\\F00C3\"}.mdi-bookmark-plus::before{content:\"\\F00C5\"}.mdi-bookmark-plus-outline::before{content:\"\\F00C4\"}.mdi-bookmark-remove::before{content:\"\\F00C6\"}.mdi-bookmark-remove-outline::before{content:\"\\F137A\"}.mdi-bookshelf::before{content:\"\\F125F\"}.mdi-boom-gate::before{content:\"\\F0E86\"}.mdi-boom-gate-alert::before{content:\"\\F0E87\"}.mdi-boom-gate-alert-outline::before{content:\"\\F0E88\"}.mdi-boom-gate-down::before{content:\"\\F0E89\"}.mdi-boom-gate-down-outline::before{content:\"\\F0E8A\"}.mdi-boom-gate-outline::before{content:\"\\F0E8B\"}.mdi-boom-gate-up::before{content:\"\\F0E8C\"}.mdi-boom-gate-up-outline::before{content:\"\\F0E8D\"}.mdi-boombox::before{content:\"\\F05DC\"}.mdi-boomerang::before{content:\"\\F10CF\"}.mdi-bootstrap::before{content:\"\\F06C6\"}.mdi-border-all::before{content:\"\\F00C7\"}.mdi-border-all-variant::before{content:\"\\F08A1\"}.mdi-border-bottom::before{content:\"\\F00C8\"}.mdi-border-bottom-variant::before{content:\"\\F08A2\"}.mdi-border-color::before{content:\"\\F00C9\"}.mdi-border-horizontal::before{content:\"\\F00CA\"}.mdi-border-inside::before{content:\"\\F00CB\"}.mdi-border-left::before{content:\"\\F00CC\"}.mdi-border-left-variant::before{content:\"\\F08A3\"}.mdi-border-none::before{content:\"\\F00CD\"}.mdi-border-none-variant::before{content:\"\\F08A4\"}.mdi-border-outside::before{content:\"\\F00CE\"}.mdi-border-right::before{content:\"\\F00CF\"}.mdi-border-right-variant::before{content:\"\\F08A5\"}.mdi-border-style::before{content:\"\\F00D0\"}.mdi-border-top::before{content:\"\\F00D1\"}.mdi-border-top-variant::before{content:\"\\F08A6\"}.mdi-border-vertical::before{content:\"\\F00D2\"}.mdi-bottle-soda::before{content:\"\\F1070\"}.mdi-bottle-soda-classic::before{content:\"\\F1071\"}.mdi-bottle-soda-classic-outline::before{content:\"\\F1363\"}.mdi-bottle-soda-outline::before{content:\"\\F1072\"}.mdi-bottle-tonic::before{content:\"\\F112E\"}.mdi-bottle-tonic-outline::before{content:\"\\F112F\"}.mdi-bottle-tonic-plus::before{content:\"\\F1130\"}.mdi-bottle-tonic-plus-outline::before{content:\"\\F1131\"}.mdi-bottle-tonic-skull::before{content:\"\\F1132\"}.mdi-bottle-tonic-skull-outline::before{content:\"\\F1133\"}.mdi-bottle-wine::before{content:\"\\F0854\"}.mdi-bottle-wine-outline::before{content:\"\\F1310\"}.mdi-bow-tie::before{content:\"\\F0678\"}.mdi-bowl::before{content:\"\\F028E\"}.mdi-bowl-mix::before{content:\"\\F0617\"}.mdi-bowl-mix-outline::before{content:\"\\F02E4\"}.mdi-bowl-outline::before{content:\"\\F02A9\"}.mdi-bowling::before{content:\"\\F00D3\"}.mdi-box::before{content:\"\\F00D4\"}.mdi-box-cutter::before{content:\"\\F00D5\"}.mdi-box-cutter-off::before{content:\"\\F0B4A\"}.mdi-box-shadow::before{content:\"\\F0637\"}.mdi-boxing-glove::before{content:\"\\F0B65\"}.mdi-braille::before{content:\"\\F09D0\"}.mdi-brain::before{content:\"\\F09D1\"}.mdi-bread-slice::before{content:\"\\F0CEE\"}.mdi-bread-slice-outline::before{content:\"\\F0CEF\"}.mdi-bridge::before{content:\"\\F0618\"}.mdi-briefcase::before{content:\"\\F00D6\"}.mdi-briefcase-account::before{content:\"\\F0CF0\"}.mdi-briefcase-account-outline::before{content:\"\\F0CF1\"}.mdi-briefcase-check::before{content:\"\\F00D7\"}.mdi-briefcase-check-outline::before{content:\"\\F131E\"}.mdi-briefcase-clock::before{content:\"\\F10D0\"}.mdi-briefcase-clock-outline::before{content:\"\\F10D1\"}.mdi-briefcase-download::before{content:\"\\F00D8\"}.mdi-briefcase-download-outline::before{content:\"\\F0C3D\"}.mdi-briefcase-edit::before{content:\"\\F0A98\"}.mdi-briefcase-edit-outline::before{content:\"\\F0C3E\"}.mdi-briefcase-minus::before{content:\"\\F0A2A\"}.mdi-briefcase-minus-outline::before{content:\"\\F0C3F\"}.mdi-briefcase-outline::before{content:\"\\F0814\"}.mdi-briefcase-plus::before{content:\"\\F0A2B\"}.mdi-briefcase-plus-outline::before{content:\"\\F0C40\"}.mdi-briefcase-remove::before{content:\"\\F0A2C\"}.mdi-briefcase-remove-outline::before{content:\"\\F0C41\"}.mdi-briefcase-search::before{content:\"\\F0A2D\"}.mdi-briefcase-search-outline::before{content:\"\\F0C42\"}.mdi-briefcase-upload::before{content:\"\\F00D9\"}.mdi-briefcase-upload-outline::before{content:\"\\F0C43\"}.mdi-brightness-1::before{content:\"\\F00DA\"}.mdi-brightness-2::before{content:\"\\F00DB\"}.mdi-brightness-3::before{content:\"\\F00DC\"}.mdi-brightness-4::before{content:\"\\F00DD\"}.mdi-brightness-5::before{content:\"\\F00DE\"}.mdi-brightness-6::before{content:\"\\F00DF\"}.mdi-brightness-7::before{content:\"\\F00E0\"}.mdi-brightness-auto::before{content:\"\\F00E1\"}.mdi-brightness-percent::before{content:\"\\F0CF2\"}.mdi-broom::before{content:\"\\F00E2\"}.mdi-brush::before{content:\"\\F00E3\"}.mdi-buddhism::before{content:\"\\F094B\"}.mdi-buffer::before{content:\"\\F0619\"}.mdi-buffet::before{content:\"\\F0578\"}.mdi-bug::before{content:\"\\F00E4\"}.mdi-bug-check::before{content:\"\\F0A2E\"}.mdi-bug-check-outline::before{content:\"\\F0A2F\"}.mdi-bug-outline::before{content:\"\\F0A30\"}.mdi-bugle::before{content:\"\\F0DB4\"}.mdi-bulldozer::before{content:\"\\F0B22\"}.mdi-bullet::before{content:\"\\F0CF3\"}.mdi-bulletin-board::before{content:\"\\F00E5\"}.mdi-bullhorn::before{content:\"\\F00E6\"}.mdi-bullhorn-outline::before{content:\"\\F0B23\"}.mdi-bullseye::before{content:\"\\F05DD\"}.mdi-bullseye-arrow::before{content:\"\\F08C9\"}.mdi-bulma::before{content:\"\\F12E7\"}.mdi-bunk-bed::before{content:\"\\F1302\"}.mdi-bunk-bed-outline::before{content:\"\\F0097\"}.mdi-bus::before{content:\"\\F00E7\"}.mdi-bus-alert::before{content:\"\\F0A99\"}.mdi-bus-articulated-end::before{content:\"\\F079C\"}.mdi-bus-articulated-front::before{content:\"\\F079D\"}.mdi-bus-clock::before{content:\"\\F08CA\"}.mdi-bus-double-decker::before{content:\"\\F079E\"}.mdi-bus-marker::before{content:\"\\F1212\"}.mdi-bus-multiple::before{content:\"\\F0F3F\"}.mdi-bus-school::before{content:\"\\F079F\"}.mdi-bus-side::before{content:\"\\F07A0\"}.mdi-bus-stop::before{content:\"\\F1012\"}.mdi-bus-stop-covered::before{content:\"\\F1013\"}.mdi-bus-stop-uncovered::before{content:\"\\F1014\"}.mdi-cable-data::before{content:\"\\F1394\"}.mdi-cached::before{content:\"\\F00E8\"}.mdi-cactus::before{content:\"\\F0DB5\"}.mdi-cake::before{content:\"\\F00E9\"}.mdi-cake-layered::before{content:\"\\F00EA\"}.mdi-cake-variant::before{content:\"\\F00EB\"}.mdi-calculator::before{content:\"\\F00EC\"}.mdi-calculator-variant::before{content:\"\\F0A9A\"}.mdi-calendar::before{content:\"\\F00ED\"}.mdi-calendar-account::before{content:\"\\F0ED7\"}.mdi-calendar-account-outline::before{content:\"\\F0ED8\"}.mdi-calendar-alert::before{content:\"\\F0A31\"}.mdi-calendar-arrow-left::before{content:\"\\F1134\"}.mdi-calendar-arrow-right::before{content:\"\\F1135\"}.mdi-calendar-blank::before{content:\"\\F00EE\"}.mdi-calendar-blank-multiple::before{content:\"\\F1073\"}.mdi-calendar-blank-outline::before{content:\"\\F0B66\"}.mdi-calendar-check::before{content:\"\\F00EF\"}.mdi-calendar-check-outline::before{content:\"\\F0C44\"}.mdi-calendar-clock::before{content:\"\\F00F0\"}.mdi-calendar-edit::before{content:\"\\F08A7\"}.mdi-calendar-export::before{content:\"\\F0B24\"}.mdi-calendar-heart::before{content:\"\\F09D2\"}.mdi-calendar-import::before{content:\"\\F0B25\"}.mdi-calendar-minus::before{content:\"\\F0D5C\"}.mdi-calendar-month::before{content:\"\\F0E17\"}.mdi-calendar-month-outline::before{content:\"\\F0E18\"}.mdi-calendar-multiple::before{content:\"\\F00F1\"}.mdi-calendar-multiple-check::before{content:\"\\F00F2\"}.mdi-calendar-multiselect::before{content:\"\\F0A32\"}.mdi-calendar-outline::before{content:\"\\F0B67\"}.mdi-calendar-plus::before{content:\"\\F00F3\"}.mdi-calendar-question::before{content:\"\\F0692\"}.mdi-calendar-range::before{content:\"\\F0679\"}.mdi-calendar-range-outline::before{content:\"\\F0B68\"}.mdi-calendar-refresh::before{content:\"\\F01E1\"}.mdi-calendar-refresh-outline::before{content:\"\\F0203\"}.mdi-calendar-remove::before{content:\"\\F00F4\"}.mdi-calendar-remove-outline::before{content:\"\\F0C45\"}.mdi-calendar-search::before{content:\"\\F094C\"}.mdi-calendar-star::before{content:\"\\F09D3\"}.mdi-calendar-sync::before{content:\"\\F0E8E\"}.mdi-calendar-sync-outline::before{content:\"\\F0E8F\"}.mdi-calendar-text::before{content:\"\\F00F5\"}.mdi-calendar-text-outline::before{content:\"\\F0C46\"}.mdi-calendar-today::before{content:\"\\F00F6\"}.mdi-calendar-week::before{content:\"\\F0A33\"}.mdi-calendar-week-begin::before{content:\"\\F0A34\"}.mdi-calendar-weekend::before{content:\"\\F0ED9\"}.mdi-calendar-weekend-outline::before{content:\"\\F0EDA\"}.mdi-call-made::before{content:\"\\F00F7\"}.mdi-call-merge::before{content:\"\\F00F8\"}.mdi-call-missed::before{content:\"\\F00F9\"}.mdi-call-received::before{content:\"\\F00FA\"}.mdi-call-split::before{content:\"\\F00FB\"}.mdi-camcorder::before{content:\"\\F00FC\"}.mdi-camcorder-off::before{content:\"\\F00FF\"}.mdi-camera::before{content:\"\\F0100\"}.mdi-camera-account::before{content:\"\\F08CB\"}.mdi-camera-burst::before{content:\"\\F0693\"}.mdi-camera-control::before{content:\"\\F0B69\"}.mdi-camera-enhance::before{content:\"\\F0101\"}.mdi-camera-enhance-outline::before{content:\"\\F0B6A\"}.mdi-camera-front::before{content:\"\\F0102\"}.mdi-camera-front-variant::before{content:\"\\F0103\"}.mdi-camera-gopro::before{content:\"\\F07A1\"}.mdi-camera-image::before{content:\"\\F08CC\"}.mdi-camera-iris::before{content:\"\\F0104\"}.mdi-camera-metering-center::before{content:\"\\F07A2\"}.mdi-camera-metering-matrix::before{content:\"\\F07A3\"}.mdi-camera-metering-partial::before{content:\"\\F07A4\"}.mdi-camera-metering-spot::before{content:\"\\F07A5\"}.mdi-camera-off::before{content:\"\\F05DF\"}.mdi-camera-outline::before{content:\"\\F0D5D\"}.mdi-camera-party-mode::before{content:\"\\F0105\"}.mdi-camera-plus::before{content:\"\\F0EDB\"}.mdi-camera-plus-outline::before{content:\"\\F0EDC\"}.mdi-camera-rear::before{content:\"\\F0106\"}.mdi-camera-rear-variant::before{content:\"\\F0107\"}.mdi-camera-retake::before{content:\"\\F0E19\"}.mdi-camera-retake-outline::before{content:\"\\F0E1A\"}.mdi-camera-switch::before{content:\"\\F0108\"}.mdi-camera-switch-outline::before{content:\"\\F084A\"}.mdi-camera-timer::before{content:\"\\F0109\"}.mdi-camera-wireless::before{content:\"\\F0DB6\"}.mdi-camera-wireless-outline::before{content:\"\\F0DB7\"}.mdi-campfire::before{content:\"\\F0EDD\"}.mdi-cancel::before{content:\"\\F073A\"}.mdi-candle::before{content:\"\\F05E2\"}.mdi-candycane::before{content:\"\\F010A\"}.mdi-cannabis::before{content:\"\\F07A6\"}.mdi-caps-lock::before{content:\"\\F0A9B\"}.mdi-car::before{content:\"\\F010B\"}.mdi-car-2-plus::before{content:\"\\F1015\"}.mdi-car-3-plus::before{content:\"\\F1016\"}.mdi-car-arrow-left::before{content:\"\\F13B2\"}.mdi-car-arrow-right::before{content:\"\\F13B3\"}.mdi-car-back::before{content:\"\\F0E1B\"}.mdi-car-battery::before{content:\"\\F010C\"}.mdi-car-brake-abs::before{content:\"\\F0C47\"}.mdi-car-brake-alert::before{content:\"\\F0C48\"}.mdi-car-brake-hold::before{content:\"\\F0D5E\"}.mdi-car-brake-parking::before{content:\"\\F0D5F\"}.mdi-car-brake-retarder::before{content:\"\\F1017\"}.mdi-car-child-seat::before{content:\"\\F0FA3\"}.mdi-car-clutch::before{content:\"\\F1018\"}.mdi-car-connected::before{content:\"\\F010D\"}.mdi-car-convertible::before{content:\"\\F07A7\"}.mdi-car-coolant-level::before{content:\"\\F1019\"}.mdi-car-cruise-control::before{content:\"\\F0D60\"}.mdi-car-defrost-front::before{content:\"\\F0D61\"}.mdi-car-defrost-rear::before{content:\"\\F0D62\"}.mdi-car-door::before{content:\"\\F0B6B\"}.mdi-car-door-lock::before{content:\"\\F109D\"}.mdi-car-electric::before{content:\"\\F0B6C\"}.mdi-car-esp::before{content:\"\\F0C49\"}.mdi-car-estate::before{content:\"\\F07A8\"}.mdi-car-hatchback::before{content:\"\\F07A9\"}.mdi-car-info::before{content:\"\\F11BE\"}.mdi-car-key::before{content:\"\\F0B6D\"}.mdi-car-light-dimmed::before{content:\"\\F0C4A\"}.mdi-car-light-fog::before{content:\"\\F0C4B\"}.mdi-car-light-high::before{content:\"\\F0C4C\"}.mdi-car-limousine::before{content:\"\\F08CD\"}.mdi-car-multiple::before{content:\"\\F0B6E\"}.mdi-car-off::before{content:\"\\F0E1C\"}.mdi-car-parking-lights::before{content:\"\\F0D63\"}.mdi-car-pickup::before{content:\"\\F07AA\"}.mdi-car-seat::before{content:\"\\F0FA4\"}.mdi-car-seat-cooler::before{content:\"\\F0FA5\"}.mdi-car-seat-heater::before{content:\"\\F0FA6\"}.mdi-car-shift-pattern::before{content:\"\\F0F40\"}.mdi-car-side::before{content:\"\\F07AB\"}.mdi-car-sports::before{content:\"\\F07AC\"}.mdi-car-tire-alert::before{content:\"\\F0C4D\"}.mdi-car-traction-control::before{content:\"\\F0D64\"}.mdi-car-turbocharger::before{content:\"\\F101A\"}.mdi-car-wash::before{content:\"\\F010E\"}.mdi-car-windshield::before{content:\"\\F101B\"}.mdi-car-windshield-outline::before{content:\"\\F101C\"}.mdi-caravan::before{content:\"\\F07AD\"}.mdi-card::before{content:\"\\F0B6F\"}.mdi-card-account-details::before{content:\"\\F05D2\"}.mdi-card-account-details-outline::before{content:\"\\F0DAB\"}.mdi-card-account-details-star::before{content:\"\\F02A3\"}.mdi-card-account-details-star-outline::before{content:\"\\F06DB\"}.mdi-card-account-mail::before{content:\"\\F018E\"}.mdi-card-account-mail-outline::before{content:\"\\F0E98\"}.mdi-card-account-phone::before{content:\"\\F0E99\"}.mdi-card-account-phone-outline::before{content:\"\\F0E9A\"}.mdi-card-bulleted::before{content:\"\\F0B70\"}.mdi-card-bulleted-off::before{content:\"\\F0B71\"}.mdi-card-bulleted-off-outline::before{content:\"\\F0B72\"}.mdi-card-bulleted-outline::before{content:\"\\F0B73\"}.mdi-card-bulleted-settings::before{content:\"\\F0B74\"}.mdi-card-bulleted-settings-outline::before{content:\"\\F0B75\"}.mdi-card-outline::before{content:\"\\F0B76\"}.mdi-card-plus::before{content:\"\\F11FF\"}.mdi-card-plus-outline::before{content:\"\\F1200\"}.mdi-card-search::before{content:\"\\F1074\"}.mdi-card-search-outline::before{content:\"\\F1075\"}.mdi-card-text::before{content:\"\\F0B77\"}.mdi-card-text-outline::before{content:\"\\F0B78\"}.mdi-cards::before{content:\"\\F0638\"}.mdi-cards-club::before{content:\"\\F08CE\"}.mdi-cards-diamond::before{content:\"\\F08CF\"}.mdi-cards-diamond-outline::before{content:\"\\F101D\"}.mdi-cards-heart::before{content:\"\\F08D0\"}.mdi-cards-outline::before{content:\"\\F0639\"}.mdi-cards-playing-outline::before{content:\"\\F063A\"}.mdi-cards-spade::before{content:\"\\F08D1\"}.mdi-cards-variant::before{content:\"\\F06C7\"}.mdi-carrot::before{content:\"\\F010F\"}.mdi-cart::before{content:\"\\F0110\"}.mdi-cart-arrow-down::before{content:\"\\F0D66\"}.mdi-cart-arrow-right::before{content:\"\\F0C4E\"}.mdi-cart-arrow-up::before{content:\"\\F0D67\"}.mdi-cart-minus::before{content:\"\\F0D68\"}.mdi-cart-off::before{content:\"\\F066B\"}.mdi-cart-outline::before{content:\"\\F0111\"}.mdi-cart-plus::before{content:\"\\F0112\"}.mdi-cart-remove::before{content:\"\\F0D69\"}.mdi-case-sensitive-alt::before{content:\"\\F0113\"}.mdi-cash::before{content:\"\\F0114\"}.mdi-cash-100::before{content:\"\\F0115\"}.mdi-cash-marker::before{content:\"\\F0DB8\"}.mdi-cash-minus::before{content:\"\\F1260\"}.mdi-cash-multiple::before{content:\"\\F0116\"}.mdi-cash-plus::before{content:\"\\F1261\"}.mdi-cash-refund::before{content:\"\\F0A9C\"}.mdi-cash-register::before{content:\"\\F0CF4\"}.mdi-cash-remove::before{content:\"\\F1262\"}.mdi-cash-usd::before{content:\"\\F1176\"}.mdi-cash-usd-outline::before{content:\"\\F0117\"}.mdi-cassette::before{content:\"\\F09D4\"}.mdi-cast::before{content:\"\\F0118\"}.mdi-cast-audio::before{content:\"\\F101E\"}.mdi-cast-connected::before{content:\"\\F0119\"}.mdi-cast-education::before{content:\"\\F0E1D\"}.mdi-cast-off::before{content:\"\\F078A\"}.mdi-castle::before{content:\"\\F011A\"}.mdi-cat::before{content:\"\\F011B\"}.mdi-cctv::before{content:\"\\F07AE\"}.mdi-ceiling-light::before{content:\"\\F0769\"}.mdi-cellphone::before{content:\"\\F011C\"}.mdi-cellphone-android::before{content:\"\\F011D\"}.mdi-cellphone-arrow-down::before{content:\"\\F09D5\"}.mdi-cellphone-basic::before{content:\"\\F011E\"}.mdi-cellphone-charging::before{content:\"\\F1397\"}.mdi-cellphone-cog::before{content:\"\\F0951\"}.mdi-cellphone-dock::before{content:\"\\F011F\"}.mdi-cellphone-erase::before{content:\"\\F094D\"}.mdi-cellphone-information::before{content:\"\\F0F41\"}.mdi-cellphone-iphone::before{content:\"\\F0120\"}.mdi-cellphone-key::before{content:\"\\F094E\"}.mdi-cellphone-link::before{content:\"\\F0121\"}.mdi-cellphone-link-off::before{content:\"\\F0122\"}.mdi-cellphone-lock::before{content:\"\\F094F\"}.mdi-cellphone-message::before{content:\"\\F08D3\"}.mdi-cellphone-message-off::before{content:\"\\F10D2\"}.mdi-cellphone-nfc::before{content:\"\\F0E90\"}.mdi-cellphone-nfc-off::before{content:\"\\F12D8\"}.mdi-cellphone-off::before{content:\"\\F0950\"}.mdi-cellphone-play::before{content:\"\\F101F\"}.mdi-cellphone-screenshot::before{content:\"\\F0A35\"}.mdi-cellphone-settings::before{content:\"\\F0123\"}.mdi-cellphone-sound::before{content:\"\\F0952\"}.mdi-cellphone-text::before{content:\"\\F08D2\"}.mdi-cellphone-wireless::before{content:\"\\F0815\"}.mdi-celtic-cross::before{content:\"\\F0CF5\"}.mdi-centos::before{content:\"\\F111A\"}.mdi-certificate::before{content:\"\\F0124\"}.mdi-certificate-outline::before{content:\"\\F1188\"}.mdi-chair-rolling::before{content:\"\\F0F48\"}.mdi-chair-school::before{content:\"\\F0125\"}.mdi-charity::before{content:\"\\F0C4F\"}.mdi-chart-arc::before{content:\"\\F0126\"}.mdi-chart-areaspline::before{content:\"\\F0127\"}.mdi-chart-areaspline-variant::before{content:\"\\F0E91\"}.mdi-chart-bar::before{content:\"\\F0128\"}.mdi-chart-bar-stacked::before{content:\"\\F076A\"}.mdi-chart-bell-curve::before{content:\"\\F0C50\"}.mdi-chart-bell-curve-cumulative::before{content:\"\\F0FA7\"}.mdi-chart-bubble::before{content:\"\\F05E3\"}.mdi-chart-donut::before{content:\"\\F07AF\"}.mdi-chart-donut-variant::before{content:\"\\F07B0\"}.mdi-chart-gantt::before{content:\"\\F066C\"}.mdi-chart-histogram::before{content:\"\\F0129\"}.mdi-chart-line::before{content:\"\\F012A\"}.mdi-chart-line-stacked::before{content:\"\\F076B\"}.mdi-chart-line-variant::before{content:\"\\F07B1\"}.mdi-chart-multiline::before{content:\"\\F08D4\"}.mdi-chart-multiple::before{content:\"\\F1213\"}.mdi-chart-pie::before{content:\"\\F012B\"}.mdi-chart-ppf::before{content:\"\\F1380\"}.mdi-chart-sankey::before{content:\"\\F11DF\"}.mdi-chart-sankey-variant::before{content:\"\\F11E0\"}.mdi-chart-scatter-plot::before{content:\"\\F0E92\"}.mdi-chart-scatter-plot-hexbin::before{content:\"\\F066D\"}.mdi-chart-timeline::before{content:\"\\F066E\"}.mdi-chart-timeline-variant::before{content:\"\\F0E93\"}.mdi-chart-tree::before{content:\"\\F0E94\"}.mdi-chat::before{content:\"\\F0B79\"}.mdi-chat-alert::before{content:\"\\F0B7A\"}.mdi-chat-alert-outline::before{content:\"\\F12C9\"}.mdi-chat-outline::before{content:\"\\F0EDE\"}.mdi-chat-processing::before{content:\"\\F0B7B\"}.mdi-chat-processing-outline::before{content:\"\\F12CA\"}.mdi-chat-sleep::before{content:\"\\F12D1\"}.mdi-chat-sleep-outline::before{content:\"\\F12D2\"}.mdi-check::before{content:\"\\F012C\"}.mdi-check-all::before{content:\"\\F012D\"}.mdi-check-bold::before{content:\"\\F0E1E\"}.mdi-check-box-multiple-outline::before{content:\"\\F0C51\"}.mdi-check-box-outline::before{content:\"\\F0C52\"}.mdi-check-circle::before{content:\"\\F05E0\"}.mdi-check-circle-outline::before{content:\"\\F05E1\"}.mdi-check-decagram::before{content:\"\\F0791\"}.mdi-check-network::before{content:\"\\F0C53\"}.mdi-check-network-outline::before{content:\"\\F0C54\"}.mdi-check-outline::before{content:\"\\F0855\"}.mdi-check-underline::before{content:\"\\F0E1F\"}.mdi-check-underline-circle::before{content:\"\\F0E20\"}.mdi-check-underline-circle-outline::before{content:\"\\F0E21\"}.mdi-checkbook::before{content:\"\\F0A9D\"}.mdi-checkbox-blank::before{content:\"\\F012E\"}.mdi-checkbox-blank-circle::before{content:\"\\F012F\"}.mdi-checkbox-blank-circle-outline::before{content:\"\\F0130\"}.mdi-checkbox-blank-off::before{content:\"\\F12EC\"}.mdi-checkbox-blank-off-outline::before{content:\"\\F12ED\"}.mdi-checkbox-blank-outline::before{content:\"\\F0131\"}.mdi-checkbox-intermediate::before{content:\"\\F0856\"}.mdi-checkbox-marked::before{content:\"\\F0132\"}.mdi-checkbox-marked-circle::before{content:\"\\F0133\"}.mdi-checkbox-marked-circle-outline::before{content:\"\\F0134\"}.mdi-checkbox-marked-outline::before{content:\"\\F0135\"}.mdi-checkbox-multiple-blank::before{content:\"\\F0136\"}.mdi-checkbox-multiple-blank-circle::before{content:\"\\F063B\"}.mdi-checkbox-multiple-blank-circle-outline::before{content:\"\\F063C\"}.mdi-checkbox-multiple-blank-outline::before{content:\"\\F0137\"}.mdi-checkbox-multiple-marked::before{content:\"\\F0138\"}.mdi-checkbox-multiple-marked-circle::before{content:\"\\F063D\"}.mdi-checkbox-multiple-marked-circle-outline::before{content:\"\\F063E\"}.mdi-checkbox-multiple-marked-outline::before{content:\"\\F0139\"}.mdi-checkerboard::before{content:\"\\F013A\"}.mdi-checkerboard-minus::before{content:\"\\F1202\"}.mdi-checkerboard-plus::before{content:\"\\F1201\"}.mdi-checkerboard-remove::before{content:\"\\F1203\"}.mdi-cheese::before{content:\"\\F12B9\"}.mdi-chef-hat::before{content:\"\\F0B7C\"}.mdi-chemical-weapon::before{content:\"\\F013B\"}.mdi-chess-bishop::before{content:\"\\F085C\"}.mdi-chess-king::before{content:\"\\F0857\"}.mdi-chess-knight::before{content:\"\\F0858\"}.mdi-chess-pawn::before{content:\"\\F0859\"}.mdi-chess-queen::before{content:\"\\F085A\"}.mdi-chess-rook::before{content:\"\\F085B\"}.mdi-chevron-double-down::before{content:\"\\F013C\"}.mdi-chevron-double-left::before{content:\"\\F013D\"}.mdi-chevron-double-right::before{content:\"\\F013E\"}.mdi-chevron-double-up::before{content:\"\\F013F\"}.mdi-chevron-down::before{content:\"\\F0140\"}.mdi-chevron-down-box::before{content:\"\\F09D6\"}.mdi-chevron-down-box-outline::before{content:\"\\F09D7\"}.mdi-chevron-down-circle::before{content:\"\\F0B26\"}.mdi-chevron-down-circle-outline::before{content:\"\\F0B27\"}.mdi-chevron-left::before{content:\"\\F0141\"}.mdi-chevron-left-box::before{content:\"\\F09D8\"}.mdi-chevron-left-box-outline::before{content:\"\\F09D9\"}.mdi-chevron-left-circle::before{content:\"\\F0B28\"}.mdi-chevron-left-circle-outline::before{content:\"\\F0B29\"}.mdi-chevron-right::before{content:\"\\F0142\"}.mdi-chevron-right-box::before{content:\"\\F09DA\"}.mdi-chevron-right-box-outline::before{content:\"\\F09DB\"}.mdi-chevron-right-circle::before{content:\"\\F0B2A\"}.mdi-chevron-right-circle-outline::before{content:\"\\F0B2B\"}.mdi-chevron-triple-down::before{content:\"\\F0DB9\"}.mdi-chevron-triple-left::before{content:\"\\F0DBA\"}.mdi-chevron-triple-right::before{content:\"\\F0DBB\"}.mdi-chevron-triple-up::before{content:\"\\F0DBC\"}.mdi-chevron-up::before{content:\"\\F0143\"}.mdi-chevron-up-box::before{content:\"\\F09DC\"}.mdi-chevron-up-box-outline::before{content:\"\\F09DD\"}.mdi-chevron-up-circle::before{content:\"\\F0B2C\"}.mdi-chevron-up-circle-outline::before{content:\"\\F0B2D\"}.mdi-chili-hot::before{content:\"\\F07B2\"}.mdi-chili-medium::before{content:\"\\F07B3\"}.mdi-chili-mild::before{content:\"\\F07B4\"}.mdi-chip::before{content:\"\\F061A\"}.mdi-christianity::before{content:\"\\F0953\"}.mdi-christianity-outline::before{content:\"\\F0CF6\"}.mdi-church::before{content:\"\\F0144\"}.mdi-cigar::before{content:\"\\F1189\"}.mdi-circle::before{content:\"\\F0765\"}.mdi-circle-double::before{content:\"\\F0E95\"}.mdi-circle-edit-outline::before{content:\"\\F08D5\"}.mdi-circle-expand::before{content:\"\\F0E96\"}.mdi-circle-half::before{content:\"\\F1395\"}.mdi-circle-half-full::before{content:\"\\F1396\"}.mdi-circle-medium::before{content:\"\\F09DE\"}.mdi-circle-multiple::before{content:\"\\F0B38\"}.mdi-circle-multiple-outline::before{content:\"\\F0695\"}.mdi-circle-off-outline::before{content:\"\\F10D3\"}.mdi-circle-outline::before{content:\"\\F0766\"}.mdi-circle-slice-1::before{content:\"\\F0A9E\"}.mdi-circle-slice-2::before{content:\"\\F0A9F\"}.mdi-circle-slice-3::before{content:\"\\F0AA0\"}.mdi-circle-slice-4::before{content:\"\\F0AA1\"}.mdi-circle-slice-5::before{content:\"\\F0AA2\"}.mdi-circle-slice-6::before{content:\"\\F0AA3\"}.mdi-circle-slice-7::before{content:\"\\F0AA4\"}.mdi-circle-slice-8::before{content:\"\\F0AA5\"}.mdi-circle-small::before{content:\"\\F09DF\"}.mdi-circular-saw::before{content:\"\\F0E22\"}.mdi-city::before{content:\"\\F0146\"}.mdi-city-variant::before{content:\"\\F0A36\"}.mdi-city-variant-outline::before{content:\"\\F0A37\"}.mdi-clipboard::before{content:\"\\F0147\"}.mdi-clipboard-account::before{content:\"\\F0148\"}.mdi-clipboard-account-outline::before{content:\"\\F0C55\"}.mdi-clipboard-alert::before{content:\"\\F0149\"}.mdi-clipboard-alert-outline::before{content:\"\\F0CF7\"}.mdi-clipboard-arrow-down::before{content:\"\\F014A\"}.mdi-clipboard-arrow-down-outline::before{content:\"\\F0C56\"}.mdi-clipboard-arrow-left::before{content:\"\\F014B\"}.mdi-clipboard-arrow-left-outline::before{content:\"\\F0CF8\"}.mdi-clipboard-arrow-right::before{content:\"\\F0CF9\"}.mdi-clipboard-arrow-right-outline::before{content:\"\\F0CFA\"}.mdi-clipboard-arrow-up::before{content:\"\\F0C57\"}.mdi-clipboard-arrow-up-outline::before{content:\"\\F0C58\"}.mdi-clipboard-check::before{content:\"\\F014E\"}.mdi-clipboard-check-multiple::before{content:\"\\F1263\"}.mdi-clipboard-check-multiple-outline::before{content:\"\\F1264\"}.mdi-clipboard-check-outline::before{content:\"\\F08A8\"}.mdi-clipboard-file::before{content:\"\\F1265\"}.mdi-clipboard-file-outline::before{content:\"\\F1266\"}.mdi-clipboard-flow::before{content:\"\\F06C8\"}.mdi-clipboard-flow-outline::before{content:\"\\F1117\"}.mdi-clipboard-list::before{content:\"\\F10D4\"}.mdi-clipboard-list-outline::before{content:\"\\F10D5\"}.mdi-clipboard-multiple::before{content:\"\\F1267\"}.mdi-clipboard-multiple-outline::before{content:\"\\F1268\"}.mdi-clipboard-outline::before{content:\"\\F014C\"}.mdi-clipboard-play::before{content:\"\\F0C59\"}.mdi-clipboard-play-multiple::before{content:\"\\F1269\"}.mdi-clipboard-play-multiple-outline::before{content:\"\\F126A\"}.mdi-clipboard-play-outline::before{content:\"\\F0C5A\"}.mdi-clipboard-plus::before{content:\"\\F0751\"}.mdi-clipboard-plus-outline::before{content:\"\\F131F\"}.mdi-clipboard-pulse::before{content:\"\\F085D\"}.mdi-clipboard-pulse-outline::before{content:\"\\F085E\"}.mdi-clipboard-text::before{content:\"\\F014D\"}.mdi-clipboard-text-multiple::before{content:\"\\F126B\"}.mdi-clipboard-text-multiple-outline::before{content:\"\\F126C\"}.mdi-clipboard-text-outline::before{content:\"\\F0A38\"}.mdi-clipboard-text-play::before{content:\"\\F0C5B\"}.mdi-clipboard-text-play-outline::before{content:\"\\F0C5C\"}.mdi-clippy::before{content:\"\\F014F\"}.mdi-clock::before{content:\"\\F0954\"}.mdi-clock-alert::before{content:\"\\F0955\"}.mdi-clock-alert-outline::before{content:\"\\F05CE\"}.mdi-clock-check::before{content:\"\\F0FA8\"}.mdi-clock-check-outline::before{content:\"\\F0FA9\"}.mdi-clock-digital::before{content:\"\\F0E97\"}.mdi-clock-end::before{content:\"\\F0151\"}.mdi-clock-fast::before{content:\"\\F0152\"}.mdi-clock-in::before{content:\"\\F0153\"}.mdi-clock-out::before{content:\"\\F0154\"}.mdi-clock-outline::before{content:\"\\F0150\"}.mdi-clock-start::before{content:\"\\F0155\"}.mdi-close::before{content:\"\\F0156\"}.mdi-close-box::before{content:\"\\F0157\"}.mdi-close-box-multiple::before{content:\"\\F0C5D\"}.mdi-close-box-multiple-outline::before{content:\"\\F0C5E\"}.mdi-close-box-outline::before{content:\"\\F0158\"}.mdi-close-circle::before{content:\"\\F0159\"}.mdi-close-circle-multiple::before{content:\"\\F062A\"}.mdi-close-circle-multiple-outline::before{content:\"\\F0883\"}.mdi-close-circle-outline::before{content:\"\\F015A\"}.mdi-close-network::before{content:\"\\F015B\"}.mdi-close-network-outline::before{content:\"\\F0C5F\"}.mdi-close-octagon::before{content:\"\\F015C\"}.mdi-close-octagon-outline::before{content:\"\\F015D\"}.mdi-close-outline::before{content:\"\\F06C9\"}.mdi-close-thick::before{content:\"\\F1398\"}.mdi-closed-caption::before{content:\"\\F015E\"}.mdi-closed-caption-outline::before{content:\"\\F0DBD\"}.mdi-cloud::before{content:\"\\F015F\"}.mdi-cloud-alert::before{content:\"\\F09E0\"}.mdi-cloud-braces::before{content:\"\\F07B5\"}.mdi-cloud-check::before{content:\"\\F0160\"}.mdi-cloud-check-outline::before{content:\"\\F12CC\"}.mdi-cloud-circle::before{content:\"\\F0161\"}.mdi-cloud-download::before{content:\"\\F0162\"}.mdi-cloud-download-outline::before{content:\"\\F0B7D\"}.mdi-cloud-lock::before{content:\"\\F11F1\"}.mdi-cloud-lock-outline::before{content:\"\\F11F2\"}.mdi-cloud-off-outline::before{content:\"\\F0164\"}.mdi-cloud-outline::before{content:\"\\F0163\"}.mdi-cloud-print::before{content:\"\\F0165\"}.mdi-cloud-print-outline::before{content:\"\\F0166\"}.mdi-cloud-question::before{content:\"\\F0A39\"}.mdi-cloud-refresh::before{content:\"\\F052A\"}.mdi-cloud-search::before{content:\"\\F0956\"}.mdi-cloud-search-outline::before{content:\"\\F0957\"}.mdi-cloud-sync::before{content:\"\\F063F\"}.mdi-cloud-sync-outline::before{content:\"\\F12D6\"}.mdi-cloud-tags::before{content:\"\\F07B6\"}.mdi-cloud-upload::before{content:\"\\F0167\"}.mdi-cloud-upload-outline::before{content:\"\\F0B7E\"}.mdi-clover::before{content:\"\\F0816\"}.mdi-coach-lamp::before{content:\"\\F1020\"}.mdi-coat-rack::before{content:\"\\F109E\"}.mdi-code-array::before{content:\"\\F0168\"}.mdi-code-braces::before{content:\"\\F0169\"}.mdi-code-braces-box::before{content:\"\\F10D6\"}.mdi-code-brackets::before{content:\"\\F016A\"}.mdi-code-equal::before{content:\"\\F016B\"}.mdi-code-greater-than::before{content:\"\\F016C\"}.mdi-code-greater-than-or-equal::before{content:\"\\F016D\"}.mdi-code-json::before{content:\"\\F0626\"}.mdi-code-less-than::before{content:\"\\F016E\"}.mdi-code-less-than-or-equal::before{content:\"\\F016F\"}.mdi-code-not-equal::before{content:\"\\F0170\"}.mdi-code-not-equal-variant::before{content:\"\\F0171\"}.mdi-code-parentheses::before{content:\"\\F0172\"}.mdi-code-parentheses-box::before{content:\"\\F10D7\"}.mdi-code-string::before{content:\"\\F0173\"}.mdi-code-tags::before{content:\"\\F0174\"}.mdi-code-tags-check::before{content:\"\\F0694\"}.mdi-codepen::before{content:\"\\F0175\"}.mdi-coffee::before{content:\"\\F0176\"}.mdi-coffee-maker::before{content:\"\\F109F\"}.mdi-coffee-off::before{content:\"\\F0FAA\"}.mdi-coffee-off-outline::before{content:\"\\F0FAB\"}.mdi-coffee-outline::before{content:\"\\F06CA\"}.mdi-coffee-to-go::before{content:\"\\F0177\"}.mdi-coffee-to-go-outline::before{content:\"\\F130E\"}.mdi-coffin::before{content:\"\\F0B7F\"}.mdi-cog::before{content:\"\\F0493\"}.mdi-cog-box::before{content:\"\\F0494\"}.mdi-cog-clockwise::before{content:\"\\F11DD\"}.mdi-cog-counterclockwise::before{content:\"\\F11DE\"}.mdi-cog-outline::before{content:\"\\F08BB\"}.mdi-cog-transfer::before{content:\"\\F105B\"}.mdi-cog-transfer-outline::before{content:\"\\F105C\"}.mdi-cogs::before{content:\"\\F08D6\"}.mdi-collage::before{content:\"\\F0640\"}.mdi-collapse-all::before{content:\"\\F0AA6\"}.mdi-collapse-all-outline::before{content:\"\\F0AA7\"}.mdi-color-helper::before{content:\"\\F0179\"}.mdi-comma::before{content:\"\\F0E23\"}.mdi-comma-box::before{content:\"\\F0E2B\"}.mdi-comma-box-outline::before{content:\"\\F0E24\"}.mdi-comma-circle::before{content:\"\\F0E25\"}.mdi-comma-circle-outline::before{content:\"\\F0E26\"}.mdi-comment::before{content:\"\\F017A\"}.mdi-comment-account::before{content:\"\\F017B\"}.mdi-comment-account-outline::before{content:\"\\F017C\"}.mdi-comment-alert::before{content:\"\\F017D\"}.mdi-comment-alert-outline::before{content:\"\\F017E\"}.mdi-comment-arrow-left::before{content:\"\\F09E1\"}.mdi-comment-arrow-left-outline::before{content:\"\\F09E2\"}.mdi-comment-arrow-right::before{content:\"\\F09E3\"}.mdi-comment-arrow-right-outline::before{content:\"\\F09E4\"}.mdi-comment-check::before{content:\"\\F017F\"}.mdi-comment-check-outline::before{content:\"\\F0180\"}.mdi-comment-edit::before{content:\"\\F11BF\"}.mdi-comment-edit-outline::before{content:\"\\F12C4\"}.mdi-comment-eye::before{content:\"\\F0A3A\"}.mdi-comment-eye-outline::before{content:\"\\F0A3B\"}.mdi-comment-multiple::before{content:\"\\F085F\"}.mdi-comment-multiple-outline::before{content:\"\\F0181\"}.mdi-comment-outline::before{content:\"\\F0182\"}.mdi-comment-plus::before{content:\"\\F09E5\"}.mdi-comment-plus-outline::before{content:\"\\F0183\"}.mdi-comment-processing::before{content:\"\\F0184\"}.mdi-comment-processing-outline::before{content:\"\\F0185\"}.mdi-comment-question::before{content:\"\\F0817\"}.mdi-comment-question-outline::before{content:\"\\F0186\"}.mdi-comment-quote::before{content:\"\\F1021\"}.mdi-comment-quote-outline::before{content:\"\\F1022\"}.mdi-comment-remove::before{content:\"\\F05DE\"}.mdi-comment-remove-outline::before{content:\"\\F0187\"}.mdi-comment-search::before{content:\"\\F0A3C\"}.mdi-comment-search-outline::before{content:\"\\F0A3D\"}.mdi-comment-text::before{content:\"\\F0188\"}.mdi-comment-text-multiple::before{content:\"\\F0860\"}.mdi-comment-text-multiple-outline::before{content:\"\\F0861\"}.mdi-comment-text-outline::before{content:\"\\F0189\"}.mdi-compare::before{content:\"\\F018A\"}.mdi-compass::before{content:\"\\F018B\"}.mdi-compass-off::before{content:\"\\F0B80\"}.mdi-compass-off-outline::before{content:\"\\F0B81\"}.mdi-compass-outline::before{content:\"\\F018C\"}.mdi-compass-rose::before{content:\"\\F1382\"}.mdi-concourse-ci::before{content:\"\\F10A0\"}.mdi-console::before{content:\"\\F018D\"}.mdi-console-line::before{content:\"\\F07B7\"}.mdi-console-network::before{content:\"\\F08A9\"}.mdi-console-network-outline::before{content:\"\\F0C60\"}.mdi-consolidate::before{content:\"\\F10D8\"}.mdi-contactless-payment::before{content:\"\\F0D6A\"}.mdi-contactless-payment-circle::before{content:\"\\F0321\"}.mdi-contactless-payment-circle-outline::before{content:\"\\F0408\"}.mdi-contacts::before{content:\"\\F06CB\"}.mdi-contacts-outline::before{content:\"\\F05B8\"}.mdi-contain::before{content:\"\\F0A3E\"}.mdi-contain-end::before{content:\"\\F0A3F\"}.mdi-contain-start::before{content:\"\\F0A40\"}.mdi-content-copy::before{content:\"\\F018F\"}.mdi-content-cut::before{content:\"\\F0190\"}.mdi-content-duplicate::before{content:\"\\F0191\"}.mdi-content-paste::before{content:\"\\F0192\"}.mdi-content-save::before{content:\"\\F0193\"}.mdi-content-save-alert::before{content:\"\\F0F42\"}.mdi-content-save-alert-outline::before{content:\"\\F0F43\"}.mdi-content-save-all::before{content:\"\\F0194\"}.mdi-content-save-all-outline::before{content:\"\\F0F44\"}.mdi-content-save-edit::before{content:\"\\F0CFB\"}.mdi-content-save-edit-outline::before{content:\"\\F0CFC\"}.mdi-content-save-move::before{content:\"\\F0E27\"}.mdi-content-save-move-outline::before{content:\"\\F0E28\"}.mdi-content-save-outline::before{content:\"\\F0818\"}.mdi-content-save-settings::before{content:\"\\F061B\"}.mdi-content-save-settings-outline::before{content:\"\\F0B2E\"}.mdi-contrast::before{content:\"\\F0195\"}.mdi-contrast-box::before{content:\"\\F0196\"}.mdi-contrast-circle::before{content:\"\\F0197\"}.mdi-controller-classic::before{content:\"\\F0B82\"}.mdi-controller-classic-outline::before{content:\"\\F0B83\"}.mdi-cookie::before{content:\"\\F0198\"}.mdi-coolant-temperature::before{content:\"\\F03C8\"}.mdi-copyright::before{content:\"\\F05E6\"}.mdi-cordova::before{content:\"\\F0958\"}.mdi-corn::before{content:\"\\F07B8\"}.mdi-counter::before{content:\"\\F0199\"}.mdi-cow::before{content:\"\\F019A\"}.mdi-cpu-32-bit::before{content:\"\\F0EDF\"}.mdi-cpu-64-bit::before{content:\"\\F0EE0\"}.mdi-crane::before{content:\"\\F0862\"}.mdi-creation::before{content:\"\\F0674\"}.mdi-creative-commons::before{content:\"\\F0D6B\"}.mdi-credit-card::before{content:\"\\F0FEF\"}.mdi-credit-card-clock::before{content:\"\\F0EE1\"}.mdi-credit-card-clock-outline::before{content:\"\\F0EE2\"}.mdi-credit-card-marker::before{content:\"\\F06A8\"}.mdi-credit-card-marker-outline::before{content:\"\\F0DBE\"}.mdi-credit-card-minus::before{content:\"\\F0FAC\"}.mdi-credit-card-minus-outline::before{content:\"\\F0FAD\"}.mdi-credit-card-multiple::before{content:\"\\F0FF0\"}.mdi-credit-card-multiple-outline::before{content:\"\\F019C\"}.mdi-credit-card-off::before{content:\"\\F0FF1\"}.mdi-credit-card-off-outline::before{content:\"\\F05E4\"}.mdi-credit-card-outline::before{content:\"\\F019B\"}.mdi-credit-card-plus::before{content:\"\\F0FF2\"}.mdi-credit-card-plus-outline::before{content:\"\\F0676\"}.mdi-credit-card-refund::before{content:\"\\F0FF3\"}.mdi-credit-card-refund-outline::before{content:\"\\F0AA8\"}.mdi-credit-card-remove::before{content:\"\\F0FAE\"}.mdi-credit-card-remove-outline::before{content:\"\\F0FAF\"}.mdi-credit-card-scan::before{content:\"\\F0FF4\"}.mdi-credit-card-scan-outline::before{content:\"\\F019D\"}.mdi-credit-card-settings::before{content:\"\\F0FF5\"}.mdi-credit-card-settings-outline::before{content:\"\\F08D7\"}.mdi-credit-card-wireless::before{content:\"\\F0802\"}.mdi-credit-card-wireless-off::before{content:\"\\F057A\"}.mdi-credit-card-wireless-off-outline::before{content:\"\\F057B\"}.mdi-credit-card-wireless-outline::before{content:\"\\F0D6C\"}.mdi-cricket::before{content:\"\\F0D6D\"}.mdi-crop::before{content:\"\\F019E\"}.mdi-crop-free::before{content:\"\\F019F\"}.mdi-crop-landscape::before{content:\"\\F01A0\"}.mdi-crop-portrait::before{content:\"\\F01A1\"}.mdi-crop-rotate::before{content:\"\\F0696\"}.mdi-crop-square::before{content:\"\\F01A2\"}.mdi-crosshairs::before{content:\"\\F01A3\"}.mdi-crosshairs-gps::before{content:\"\\F01A4\"}.mdi-crosshairs-off::before{content:\"\\F0F45\"}.mdi-crosshairs-question::before{content:\"\\F1136\"}.mdi-crown::before{content:\"\\F01A5\"}.mdi-crown-outline::before{content:\"\\F11D0\"}.mdi-cryengine::before{content:\"\\F0959\"}.mdi-crystal-ball::before{content:\"\\F0B2F\"}.mdi-cube::before{content:\"\\F01A6\"}.mdi-cube-outline::before{content:\"\\F01A7\"}.mdi-cube-scan::before{content:\"\\F0B84\"}.mdi-cube-send::before{content:\"\\F01A8\"}.mdi-cube-unfolded::before{content:\"\\F01A9\"}.mdi-cup::before{content:\"\\F01AA\"}.mdi-cup-off::before{content:\"\\F05E5\"}.mdi-cup-off-outline::before{content:\"\\F137D\"}.mdi-cup-outline::before{content:\"\\F130F\"}.mdi-cup-water::before{content:\"\\F01AB\"}.mdi-cupboard::before{content:\"\\F0F46\"}.mdi-cupboard-outline::before{content:\"\\F0F47\"}.mdi-cupcake::before{content:\"\\F095A\"}.mdi-curling::before{content:\"\\F0863\"}.mdi-currency-bdt::before{content:\"\\F0864\"}.mdi-currency-brl::before{content:\"\\F0B85\"}.mdi-currency-btc::before{content:\"\\F01AC\"}.mdi-currency-cny::before{content:\"\\F07BA\"}.mdi-currency-eth::before{content:\"\\F07BB\"}.mdi-currency-eur::before{content:\"\\F01AD\"}.mdi-currency-eur-off::before{content:\"\\F1315\"}.mdi-currency-gbp::before{content:\"\\F01AE\"}.mdi-currency-ils::before{content:\"\\F0C61\"}.mdi-currency-inr::before{content:\"\\F01AF\"}.mdi-currency-jpy::before{content:\"\\F07BC\"}.mdi-currency-krw::before{content:\"\\F07BD\"}.mdi-currency-kzt::before{content:\"\\F0865\"}.mdi-currency-ngn::before{content:\"\\F01B0\"}.mdi-currency-php::before{content:\"\\F09E6\"}.mdi-currency-rial::before{content:\"\\F0E9C\"}.mdi-currency-rub::before{content:\"\\F01B1\"}.mdi-currency-sign::before{content:\"\\F07BE\"}.mdi-currency-try::before{content:\"\\F01B2\"}.mdi-currency-twd::before{content:\"\\F07BF\"}.mdi-currency-usd::before{content:\"\\F01C1\"}.mdi-currency-usd-circle::before{content:\"\\F116B\"}.mdi-currency-usd-circle-outline::before{content:\"\\F0178\"}.mdi-currency-usd-off::before{content:\"\\F067A\"}.mdi-current-ac::before{content:\"\\F095B\"}.mdi-current-dc::before{content:\"\\F095C\"}.mdi-cursor-default::before{content:\"\\F01C0\"}.mdi-cursor-default-click::before{content:\"\\F0CFD\"}.mdi-cursor-default-click-outline::before{content:\"\\F0CFE\"}.mdi-cursor-default-gesture::before{content:\"\\F1127\"}.mdi-cursor-default-gesture-outline::before{content:\"\\F1128\"}.mdi-cursor-default-outline::before{content:\"\\F01BF\"}.mdi-cursor-move::before{content:\"\\F01BE\"}.mdi-cursor-pointer::before{content:\"\\F01BD\"}.mdi-cursor-text::before{content:\"\\F05E7\"}.mdi-database::before{content:\"\\F01BC\"}.mdi-database-check::before{content:\"\\F0AA9\"}.mdi-database-edit::before{content:\"\\F0B86\"}.mdi-database-export::before{content:\"\\F095E\"}.mdi-database-import::before{content:\"\\F095D\"}.mdi-database-lock::before{content:\"\\F0AAA\"}.mdi-database-marker::before{content:\"\\F12F6\"}.mdi-database-minus::before{content:\"\\F01BB\"}.mdi-database-plus::before{content:\"\\F01BA\"}.mdi-database-refresh::before{content:\"\\F05C2\"}.mdi-database-remove::before{content:\"\\F0D00\"}.mdi-database-search::before{content:\"\\F0866\"}.mdi-database-settings::before{content:\"\\F0D01\"}.mdi-database-sync::before{content:\"\\F0CFF\"}.mdi-death-star::before{content:\"\\F08D8\"}.mdi-death-star-variant::before{content:\"\\F08D9\"}.mdi-deathly-hallows::before{content:\"\\F0B87\"}.mdi-debian::before{content:\"\\F08DA\"}.mdi-debug-step-into::before{content:\"\\F01B9\"}.mdi-debug-step-out::before{content:\"\\F01B8\"}.mdi-debug-step-over::before{content:\"\\F01B7\"}.mdi-decagram::before{content:\"\\F076C\"}.mdi-decagram-outline::before{content:\"\\F076D\"}.mdi-decimal::before{content:\"\\F10A1\"}.mdi-decimal-comma::before{content:\"\\F10A2\"}.mdi-decimal-comma-decrease::before{content:\"\\F10A3\"}.mdi-decimal-comma-increase::before{content:\"\\F10A4\"}.mdi-decimal-decrease::before{content:\"\\F01B6\"}.mdi-decimal-increase::before{content:\"\\F01B5\"}.mdi-delete::before{content:\"\\F01B4\"}.mdi-delete-alert::before{content:\"\\F10A5\"}.mdi-delete-alert-outline::before{content:\"\\F10A6\"}.mdi-delete-circle::before{content:\"\\F0683\"}.mdi-delete-circle-outline::before{content:\"\\F0B88\"}.mdi-delete-empty::before{content:\"\\F06CC\"}.mdi-delete-empty-outline::before{content:\"\\F0E9D\"}.mdi-delete-forever::before{content:\"\\F05E8\"}.mdi-delete-forever-outline::before{content:\"\\F0B89\"}.mdi-delete-off::before{content:\"\\F10A7\"}.mdi-delete-off-outline::before{content:\"\\F10A8\"}.mdi-delete-outline::before{content:\"\\F09E7\"}.mdi-delete-restore::before{content:\"\\F0819\"}.mdi-delete-sweep::before{content:\"\\F05E9\"}.mdi-delete-sweep-outline::before{content:\"\\F0C62\"}.mdi-delete-variant::before{content:\"\\F01B3\"}.mdi-delta::before{content:\"\\F01C2\"}.mdi-desk::before{content:\"\\F1239\"}.mdi-desk-lamp::before{content:\"\\F095F\"}.mdi-deskphone::before{content:\"\\F01C3\"}.mdi-desktop-classic::before{content:\"\\F07C0\"}.mdi-desktop-mac::before{content:\"\\F01C4\"}.mdi-desktop-mac-dashboard::before{content:\"\\F09E8\"}.mdi-desktop-tower::before{content:\"\\F01C5\"}.mdi-desktop-tower-monitor::before{content:\"\\F0AAB\"}.mdi-details::before{content:\"\\F01C6\"}.mdi-dev-to::before{content:\"\\F0D6E\"}.mdi-developer-board::before{content:\"\\F0697\"}.mdi-deviantart::before{content:\"\\F01C7\"}.mdi-devices::before{content:\"\\F0FB0\"}.mdi-diabetes::before{content:\"\\F1126\"}.mdi-dialpad::before{content:\"\\F061C\"}.mdi-diameter::before{content:\"\\F0C63\"}.mdi-diameter-outline::before{content:\"\\F0C64\"}.mdi-diameter-variant::before{content:\"\\F0C65\"}.mdi-diamond::before{content:\"\\F0B8A\"}.mdi-diamond-outline::before{content:\"\\F0B8B\"}.mdi-diamond-stone::before{content:\"\\F01C8\"}.mdi-dice-1::before{content:\"\\F01CA\"}.mdi-dice-1-outline::before{content:\"\\F114A\"}.mdi-dice-2::before{content:\"\\F01CB\"}.mdi-dice-2-outline::before{content:\"\\F114B\"}.mdi-dice-3::before{content:\"\\F01CC\"}.mdi-dice-3-outline::before{content:\"\\F114C\"}.mdi-dice-4::before{content:\"\\F01CD\"}.mdi-dice-4-outline::before{content:\"\\F114D\"}.mdi-dice-5::before{content:\"\\F01CE\"}.mdi-dice-5-outline::before{content:\"\\F114E\"}.mdi-dice-6::before{content:\"\\F01CF\"}.mdi-dice-6-outline::before{content:\"\\F114F\"}.mdi-dice-d10::before{content:\"\\F1153\"}.mdi-dice-d10-outline::before{content:\"\\F076F\"}.mdi-dice-d12::before{content:\"\\F1154\"}.mdi-dice-d12-outline::before{content:\"\\F0867\"}.mdi-dice-d20::before{content:\"\\F1155\"}.mdi-dice-d20-outline::before{content:\"\\F05EA\"}.mdi-dice-d4::before{content:\"\\F1150\"}.mdi-dice-d4-outline::before{content:\"\\F05EB\"}.mdi-dice-d6::before{content:\"\\F1151\"}.mdi-dice-d6-outline::before{content:\"\\F05ED\"}.mdi-dice-d8::before{content:\"\\F1152\"}.mdi-dice-d8-outline::before{content:\"\\F05EC\"}.mdi-dice-multiple::before{content:\"\\F076E\"}.mdi-dice-multiple-outline::before{content:\"\\F1156\"}.mdi-digital-ocean::before{content:\"\\F1237\"}.mdi-dip-switch::before{content:\"\\F07C1\"}.mdi-directions::before{content:\"\\F01D0\"}.mdi-directions-fork::before{content:\"\\F0641\"}.mdi-disc::before{content:\"\\F05EE\"}.mdi-disc-alert::before{content:\"\\F01D1\"}.mdi-disc-player::before{content:\"\\F0960\"}.mdi-discord::before{content:\"\\F066F\"}.mdi-dishwasher::before{content:\"\\F0AAC\"}.mdi-dishwasher-alert::before{content:\"\\F11B8\"}.mdi-dishwasher-off::before{content:\"\\F11B9\"}.mdi-disqus::before{content:\"\\F01D2\"}.mdi-distribute-horizontal-center::before{content:\"\\F11C9\"}.mdi-distribute-horizontal-left::before{content:\"\\F11C8\"}.mdi-distribute-horizontal-right::before{content:\"\\F11CA\"}.mdi-distribute-vertical-bottom::before{content:\"\\F11CB\"}.mdi-distribute-vertical-center::before{content:\"\\F11CC\"}.mdi-distribute-vertical-top::before{content:\"\\F11CD\"}.mdi-diving-flippers::before{content:\"\\F0DBF\"}.mdi-diving-helmet::before{content:\"\\F0DC0\"}.mdi-diving-scuba::before{content:\"\\F0DC1\"}.mdi-diving-scuba-flag::before{content:\"\\F0DC2\"}.mdi-diving-scuba-tank::before{content:\"\\F0DC3\"}.mdi-diving-scuba-tank-multiple::before{content:\"\\F0DC4\"}.mdi-diving-snorkel::before{content:\"\\F0DC5\"}.mdi-division::before{content:\"\\F01D4\"}.mdi-division-box::before{content:\"\\F01D5\"}.mdi-dlna::before{content:\"\\F0A41\"}.mdi-dna::before{content:\"\\F0684\"}.mdi-dns::before{content:\"\\F01D6\"}.mdi-dns-outline::before{content:\"\\F0B8C\"}.mdi-do-not-disturb::before{content:\"\\F0698\"}.mdi-do-not-disturb-off::before{content:\"\\F0699\"}.mdi-dock-bottom::before{content:\"\\F10A9\"}.mdi-dock-left::before{content:\"\\F10AA\"}.mdi-dock-right::before{content:\"\\F10AB\"}.mdi-dock-window::before{content:\"\\F10AC\"}.mdi-docker::before{content:\"\\F0868\"}.mdi-doctor::before{content:\"\\F0A42\"}.mdi-dog::before{content:\"\\F0A43\"}.mdi-dog-service::before{content:\"\\F0AAD\"}.mdi-dog-side::before{content:\"\\F0A44\"}.mdi-dolby::before{content:\"\\F06B3\"}.mdi-dolly::before{content:\"\\F0E9E\"}.mdi-domain::before{content:\"\\F01D7\"}.mdi-domain-off::before{content:\"\\F0D6F\"}.mdi-domain-plus::before{content:\"\\F10AD\"}.mdi-domain-remove::before{content:\"\\F10AE\"}.mdi-domino-mask::before{content:\"\\F1023\"}.mdi-donkey::before{content:\"\\F07C2\"}.mdi-door::before{content:\"\\F081A\"}.mdi-door-closed::before{content:\"\\F081B\"}.mdi-door-closed-lock::before{content:\"\\F10AF\"}.mdi-door-open::before{content:\"\\F081C\"}.mdi-doorbell::before{content:\"\\F12E6\"}.mdi-doorbell-video::before{content:\"\\F0869\"}.mdi-dot-net::before{content:\"\\F0AAE\"}.mdi-dots-horizontal::before{content:\"\\F01D8\"}.mdi-dots-horizontal-circle::before{content:\"\\F07C3\"}.mdi-dots-horizontal-circle-outline::before{content:\"\\F0B8D\"}.mdi-dots-vertical::before{content:\"\\F01D9\"}.mdi-dots-vertical-circle::before{content:\"\\F07C4\"}.mdi-dots-vertical-circle-outline::before{content:\"\\F0B8E\"}.mdi-douban::before{content:\"\\F069A\"}.mdi-download::before{content:\"\\F01DA\"}.mdi-download-lock::before{content:\"\\F1320\"}.mdi-download-lock-outline::before{content:\"\\F1321\"}.mdi-download-multiple::before{content:\"\\F09E9\"}.mdi-download-network::before{content:\"\\F06F4\"}.mdi-download-network-outline::before{content:\"\\F0C66\"}.mdi-download-off::before{content:\"\\F10B0\"}.mdi-download-off-outline::before{content:\"\\F10B1\"}.mdi-download-outline::before{content:\"\\F0B8F\"}.mdi-drag::before{content:\"\\F01DB\"}.mdi-drag-horizontal::before{content:\"\\F01DC\"}.mdi-drag-horizontal-variant::before{content:\"\\F12F0\"}.mdi-drag-variant::before{content:\"\\F0B90\"}.mdi-drag-vertical::before{content:\"\\F01DD\"}.mdi-drag-vertical-variant::before{content:\"\\F12F1\"}.mdi-drama-masks::before{content:\"\\F0D02\"}.mdi-draw::before{content:\"\\F0F49\"}.mdi-drawing::before{content:\"\\F01DE\"}.mdi-drawing-box::before{content:\"\\F01DF\"}.mdi-dresser::before{content:\"\\F0F4A\"}.mdi-dresser-outline::before{content:\"\\F0F4B\"}.mdi-drone::before{content:\"\\F01E2\"}.mdi-dropbox::before{content:\"\\F01E3\"}.mdi-drupal::before{content:\"\\F01E4\"}.mdi-duck::before{content:\"\\F01E5\"}.mdi-dumbbell::before{content:\"\\F01E6\"}.mdi-dump-truck::before{content:\"\\F0C67\"}.mdi-ear-hearing::before{content:\"\\F07C5\"}.mdi-ear-hearing-off::before{content:\"\\F0A45\"}.mdi-earth::before{content:\"\\F01E7\"}.mdi-earth-arrow-right::before{content:\"\\F1311\"}.mdi-earth-box::before{content:\"\\F06CD\"}.mdi-earth-box-off::before{content:\"\\F06CE\"}.mdi-earth-off::before{content:\"\\F01E8\"}.mdi-egg::before{content:\"\\F0AAF\"}.mdi-egg-easter::before{content:\"\\F0AB0\"}.mdi-eight-track::before{content:\"\\F09EA\"}.mdi-eject::before{content:\"\\F01EA\"}.mdi-eject-outline::before{content:\"\\F0B91\"}.mdi-electric-switch::before{content:\"\\F0E9F\"}.mdi-electric-switch-closed::before{content:\"\\F10D9\"}.mdi-electron-framework::before{content:\"\\F1024\"}.mdi-elephant::before{content:\"\\F07C6\"}.mdi-elevation-decline::before{content:\"\\F01EB\"}.mdi-elevation-rise::before{content:\"\\F01EC\"}.mdi-elevator::before{content:\"\\F01ED\"}.mdi-elevator-down::before{content:\"\\F12C2\"}.mdi-elevator-passenger::before{content:\"\\F1381\"}.mdi-elevator-up::before{content:\"\\F12C1\"}.mdi-ellipse::before{content:\"\\F0EA0\"}.mdi-ellipse-outline::before{content:\"\\F0EA1\"}.mdi-email::before{content:\"\\F01EE\"}.mdi-email-alert::before{content:\"\\F06CF\"}.mdi-email-alert-outline::before{content:\"\\F0D42\"}.mdi-email-box::before{content:\"\\F0D03\"}.mdi-email-check::before{content:\"\\F0AB1\"}.mdi-email-check-outline::before{content:\"\\F0AB2\"}.mdi-email-edit::before{content:\"\\F0EE3\"}.mdi-email-edit-outline::before{content:\"\\F0EE4\"}.mdi-email-lock::before{content:\"\\F01F1\"}.mdi-email-mark-as-unread::before{content:\"\\F0B92\"}.mdi-email-minus::before{content:\"\\F0EE5\"}.mdi-email-minus-outline::before{content:\"\\F0EE6\"}.mdi-email-multiple::before{content:\"\\F0EE7\"}.mdi-email-multiple-outline::before{content:\"\\F0EE8\"}.mdi-email-newsletter::before{content:\"\\F0FB1\"}.mdi-email-open::before{content:\"\\F01EF\"}.mdi-email-open-multiple::before{content:\"\\F0EE9\"}.mdi-email-open-multiple-outline::before{content:\"\\F0EEA\"}.mdi-email-open-outline::before{content:\"\\F05EF\"}.mdi-email-outline::before{content:\"\\F01F0\"}.mdi-email-plus::before{content:\"\\F09EB\"}.mdi-email-plus-outline::before{content:\"\\F09EC\"}.mdi-email-receive::before{content:\"\\F10DA\"}.mdi-email-receive-outline::before{content:\"\\F10DB\"}.mdi-email-search::before{content:\"\\F0961\"}.mdi-email-search-outline::before{content:\"\\F0962\"}.mdi-email-send::before{content:\"\\F10DC\"}.mdi-email-send-outline::before{content:\"\\F10DD\"}.mdi-email-sync::before{content:\"\\F12C7\"}.mdi-email-sync-outline::before{content:\"\\F12C8\"}.mdi-email-variant::before{content:\"\\F05F0\"}.mdi-ember::before{content:\"\\F0B30\"}.mdi-emby::before{content:\"\\F06B4\"}.mdi-emoticon::before{content:\"\\F0C68\"}.mdi-emoticon-angry::before{content:\"\\F0C69\"}.mdi-emoticon-angry-outline::before{content:\"\\F0C6A\"}.mdi-emoticon-confused::before{content:\"\\F10DE\"}.mdi-emoticon-confused-outline::before{content:\"\\F10DF\"}.mdi-emoticon-cool::before{content:\"\\F0C6B\"}.mdi-emoticon-cool-outline::before{content:\"\\F01F3\"}.mdi-emoticon-cry::before{content:\"\\F0C6C\"}.mdi-emoticon-cry-outline::before{content:\"\\F0C6D\"}.mdi-emoticon-dead::before{content:\"\\F0C6E\"}.mdi-emoticon-dead-outline::before{content:\"\\F069B\"}.mdi-emoticon-devil::before{content:\"\\F0C6F\"}.mdi-emoticon-devil-outline::before{content:\"\\F01F4\"}.mdi-emoticon-excited::before{content:\"\\F0C70\"}.mdi-emoticon-excited-outline::before{content:\"\\F069C\"}.mdi-emoticon-frown::before{content:\"\\F0F4C\"}.mdi-emoticon-frown-outline::before{content:\"\\F0F4D\"}.mdi-emoticon-happy::before{content:\"\\F0C71\"}.mdi-emoticon-happy-outline::before{content:\"\\F01F5\"}.mdi-emoticon-kiss::before{content:\"\\F0C72\"}.mdi-emoticon-kiss-outline::before{content:\"\\F0C73\"}.mdi-emoticon-lol::before{content:\"\\F1214\"}.mdi-emoticon-lol-outline::before{content:\"\\F1215\"}.mdi-emoticon-neutral::before{content:\"\\F0C74\"}.mdi-emoticon-neutral-outline::before{content:\"\\F01F6\"}.mdi-emoticon-outline::before{content:\"\\F01F2\"}.mdi-emoticon-poop::before{content:\"\\F01F7\"}.mdi-emoticon-poop-outline::before{content:\"\\F0C75\"}.mdi-emoticon-sad::before{content:\"\\F0C76\"}.mdi-emoticon-sad-outline::before{content:\"\\F01F8\"}.mdi-emoticon-tongue::before{content:\"\\F01F9\"}.mdi-emoticon-tongue-outline::before{content:\"\\F0C77\"}.mdi-emoticon-wink::before{content:\"\\F0C78\"}.mdi-emoticon-wink-outline::before{content:\"\\F0C79\"}.mdi-engine::before{content:\"\\F01FA\"}.mdi-engine-off::before{content:\"\\F0A46\"}.mdi-engine-off-outline::before{content:\"\\F0A47\"}.mdi-engine-outline::before{content:\"\\F01FB\"}.mdi-epsilon::before{content:\"\\F10E0\"}.mdi-equal::before{content:\"\\F01FC\"}.mdi-equal-box::before{content:\"\\F01FD\"}.mdi-equalizer::before{content:\"\\F0EA2\"}.mdi-equalizer-outline::before{content:\"\\F0EA3\"}.mdi-eraser::before{content:\"\\F01FE\"}.mdi-eraser-variant::before{content:\"\\F0642\"}.mdi-escalator::before{content:\"\\F01FF\"}.mdi-escalator-box::before{content:\"\\F1399\"}.mdi-escalator-down::before{content:\"\\F12C0\"}.mdi-escalator-up::before{content:\"\\F12BF\"}.mdi-eslint::before{content:\"\\F0C7A\"}.mdi-et::before{content:\"\\F0AB3\"}.mdi-ethereum::before{content:\"\\F086A\"}.mdi-ethernet::before{content:\"\\F0200\"}.mdi-ethernet-cable::before{content:\"\\F0201\"}.mdi-ethernet-cable-off::before{content:\"\\F0202\"}.mdi-ev-station::before{content:\"\\F05F1\"}.mdi-evernote::before{content:\"\\F0204\"}.mdi-excavator::before{content:\"\\F1025\"}.mdi-exclamation::before{content:\"\\F0205\"}.mdi-exclamation-thick::before{content:\"\\F1238\"}.mdi-exit-run::before{content:\"\\F0A48\"}.mdi-exit-to-app::before{content:\"\\F0206\"}.mdi-expand-all::before{content:\"\\F0AB4\"}.mdi-expand-all-outline::before{content:\"\\F0AB5\"}.mdi-expansion-card::before{content:\"\\F08AE\"}.mdi-expansion-card-variant::before{content:\"\\F0FB2\"}.mdi-exponent::before{content:\"\\F0963\"}.mdi-exponent-box::before{content:\"\\F0964\"}.mdi-export::before{content:\"\\F0207\"}.mdi-export-variant::before{content:\"\\F0B93\"}.mdi-eye::before{content:\"\\F0208\"}.mdi-eye-check::before{content:\"\\F0D04\"}.mdi-eye-check-outline::before{content:\"\\F0D05\"}.mdi-eye-circle::before{content:\"\\F0B94\"}.mdi-eye-circle-outline::before{content:\"\\F0B95\"}.mdi-eye-minus::before{content:\"\\F1026\"}.mdi-eye-minus-outline::before{content:\"\\F1027\"}.mdi-eye-off::before{content:\"\\F0209\"}.mdi-eye-off-outline::before{content:\"\\F06D1\"}.mdi-eye-outline::before{content:\"\\F06D0\"}.mdi-eye-plus::before{content:\"\\F086B\"}.mdi-eye-plus-outline::before{content:\"\\F086C\"}.mdi-eye-settings::before{content:\"\\F086D\"}.mdi-eye-settings-outline::before{content:\"\\F086E\"}.mdi-eyedropper::before{content:\"\\F020A\"}.mdi-eyedropper-variant::before{content:\"\\F020B\"}.mdi-face::before{content:\"\\F0643\"}.mdi-face-agent::before{content:\"\\F0D70\"}.mdi-face-outline::before{content:\"\\F0B96\"}.mdi-face-profile::before{content:\"\\F0644\"}.mdi-face-profile-woman::before{content:\"\\F1076\"}.mdi-face-recognition::before{content:\"\\F0C7B\"}.mdi-face-woman::before{content:\"\\F1077\"}.mdi-face-woman-outline::before{content:\"\\F1078\"}.mdi-facebook::before{content:\"\\F020C\"}.mdi-facebook-messenger::before{content:\"\\F020E\"}.mdi-facebook-workplace::before{content:\"\\F0B31\"}.mdi-factory::before{content:\"\\F020F\"}.mdi-fan::before{content:\"\\F0210\"}.mdi-fan-off::before{content:\"\\F081D\"}.mdi-fast-forward::before{content:\"\\F0211\"}.mdi-fast-forward-10::before{content:\"\\F0D71\"}.mdi-fast-forward-30::before{content:\"\\F0D06\"}.mdi-fast-forward-5::before{content:\"\\F11F8\"}.mdi-fast-forward-outline::before{content:\"\\F06D2\"}.mdi-fax::before{content:\"\\F0212\"}.mdi-feather::before{content:\"\\F06D3\"}.mdi-feature-search::before{content:\"\\F0A49\"}.mdi-feature-search-outline::before{content:\"\\F0A4A\"}.mdi-fedora::before{content:\"\\F08DB\"}.mdi-ferris-wheel::before{content:\"\\F0EA4\"}.mdi-ferry::before{content:\"\\F0213\"}.mdi-file::before{content:\"\\F0214\"}.mdi-file-account::before{content:\"\\F073B\"}.mdi-file-account-outline::before{content:\"\\F1028\"}.mdi-file-alert::before{content:\"\\F0A4B\"}.mdi-file-alert-outline::before{content:\"\\F0A4C\"}.mdi-file-cabinet::before{content:\"\\F0AB6\"}.mdi-file-cad::before{content:\"\\F0EEB\"}.mdi-file-cad-box::before{content:\"\\F0EEC\"}.mdi-file-cancel::before{content:\"\\F0DC6\"}.mdi-file-cancel-outline::before{content:\"\\F0DC7\"}.mdi-file-certificate::before{content:\"\\F1186\"}.mdi-file-certificate-outline::before{content:\"\\F1187\"}.mdi-file-chart::before{content:\"\\F0215\"}.mdi-file-chart-outline::before{content:\"\\F1029\"}.mdi-file-check::before{content:\"\\F0216\"}.mdi-file-check-outline::before{content:\"\\F0E29\"}.mdi-file-clock::before{content:\"\\F12E1\"}.mdi-file-clock-outline::before{content:\"\\F12E2\"}.mdi-file-cloud::before{content:\"\\F0217\"}.mdi-file-cloud-outline::before{content:\"\\F102A\"}.mdi-file-code::before{content:\"\\F022E\"}.mdi-file-code-outline::before{content:\"\\F102B\"}.mdi-file-cog::before{content:\"\\F107B\"}.mdi-file-cog-outline::before{content:\"\\F107C\"}.mdi-file-compare::before{content:\"\\F08AA\"}.mdi-file-delimited::before{content:\"\\F0218\"}.mdi-file-delimited-outline::before{content:\"\\F0EA5\"}.mdi-file-document::before{content:\"\\F0219\"}.mdi-file-document-edit::before{content:\"\\F0DC8\"}.mdi-file-document-edit-outline::before{content:\"\\F0DC9\"}.mdi-file-document-outline::before{content:\"\\F09EE\"}.mdi-file-download::before{content:\"\\F0965\"}.mdi-file-download-outline::before{content:\"\\F0966\"}.mdi-file-edit::before{content:\"\\F11E7\"}.mdi-file-edit-outline::before{content:\"\\F11E8\"}.mdi-file-excel::before{content:\"\\F021B\"}.mdi-file-excel-box::before{content:\"\\F021C\"}.mdi-file-excel-box-outline::before{content:\"\\F102C\"}.mdi-file-excel-outline::before{content:\"\\F102D\"}.mdi-file-export::before{content:\"\\F021D\"}.mdi-file-export-outline::before{content:\"\\F102E\"}.mdi-file-eye::before{content:\"\\F0DCA\"}.mdi-file-eye-outline::before{content:\"\\F0DCB\"}.mdi-file-find::before{content:\"\\F021E\"}.mdi-file-find-outline::before{content:\"\\F0B97\"}.mdi-file-hidden::before{content:\"\\F0613\"}.mdi-file-image::before{content:\"\\F021F\"}.mdi-file-image-outline::before{content:\"\\F0EB0\"}.mdi-file-import::before{content:\"\\F0220\"}.mdi-file-import-outline::before{content:\"\\F102F\"}.mdi-file-key::before{content:\"\\F1184\"}.mdi-file-key-outline::before{content:\"\\F1185\"}.mdi-file-link::before{content:\"\\F1177\"}.mdi-file-link-outline::before{content:\"\\F1178\"}.mdi-file-lock::before{content:\"\\F0221\"}.mdi-file-lock-outline::before{content:\"\\F1030\"}.mdi-file-move::before{content:\"\\F0AB9\"}.mdi-file-move-outline::before{content:\"\\F1031\"}.mdi-file-multiple::before{content:\"\\F0222\"}.mdi-file-multiple-outline::before{content:\"\\F1032\"}.mdi-file-music::before{content:\"\\F0223\"}.mdi-file-music-outline::before{content:\"\\F0E2A\"}.mdi-file-outline::before{content:\"\\F0224\"}.mdi-file-pdf::before{content:\"\\F0225\"}.mdi-file-pdf-box::before{content:\"\\F0226\"}.mdi-file-pdf-box-outline::before{content:\"\\F0FB3\"}.mdi-file-pdf-outline::before{content:\"\\F0E2D\"}.mdi-file-percent::before{content:\"\\F081E\"}.mdi-file-percent-outline::before{content:\"\\F1033\"}.mdi-file-phone::before{content:\"\\F1179\"}.mdi-file-phone-outline::before{content:\"\\F117A\"}.mdi-file-plus::before{content:\"\\F0752\"}.mdi-file-plus-outline::before{content:\"\\F0EED\"}.mdi-file-powerpoint::before{content:\"\\F0227\"}.mdi-file-powerpoint-box::before{content:\"\\F0228\"}.mdi-file-powerpoint-box-outline::before{content:\"\\F1034\"}.mdi-file-powerpoint-outline::before{content:\"\\F1035\"}.mdi-file-presentation-box::before{content:\"\\F0229\"}.mdi-file-question::before{content:\"\\F086F\"}.mdi-file-question-outline::before{content:\"\\F1036\"}.mdi-file-refresh::before{content:\"\\F0918\"}.mdi-file-refresh-outline::before{content:\"\\F0541\"}.mdi-file-remove::before{content:\"\\F0B98\"}.mdi-file-remove-outline::before{content:\"\\F1037\"}.mdi-file-replace::before{content:\"\\F0B32\"}.mdi-file-replace-outline::before{content:\"\\F0B33\"}.mdi-file-restore::before{content:\"\\F0670\"}.mdi-file-restore-outline::before{content:\"\\F1038\"}.mdi-file-search::before{content:\"\\F0C7C\"}.mdi-file-search-outline::before{content:\"\\F0C7D\"}.mdi-file-send::before{content:\"\\F022A\"}.mdi-file-send-outline::before{content:\"\\F1039\"}.mdi-file-settings::before{content:\"\\F1079\"}.mdi-file-settings-outline::before{content:\"\\F107A\"}.mdi-file-star::before{content:\"\\F103A\"}.mdi-file-star-outline::before{content:\"\\F103B\"}.mdi-file-swap::before{content:\"\\F0FB4\"}.mdi-file-swap-outline::before{content:\"\\F0FB5\"}.mdi-file-sync::before{content:\"\\F1216\"}.mdi-file-sync-outline::before{content:\"\\F1217\"}.mdi-file-table::before{content:\"\\F0C7E\"}.mdi-file-table-box::before{content:\"\\F10E1\"}.mdi-file-table-box-multiple::before{content:\"\\F10E2\"}.mdi-file-table-box-multiple-outline::before{content:\"\\F10E3\"}.mdi-file-table-box-outline::before{content:\"\\F10E4\"}.mdi-file-table-outline::before{content:\"\\F0C7F\"}.mdi-file-tree::before{content:\"\\F0645\"}.mdi-file-undo::before{content:\"\\F08DC\"}.mdi-file-undo-outline::before{content:\"\\F103C\"}.mdi-file-upload::before{content:\"\\F0A4D\"}.mdi-file-upload-outline::before{content:\"\\F0A4E\"}.mdi-file-video::before{content:\"\\F022B\"}.mdi-file-video-outline::before{content:\"\\F0E2C\"}.mdi-file-word::before{content:\"\\F022C\"}.mdi-file-word-box::before{content:\"\\F022D\"}.mdi-file-word-box-outline::before{content:\"\\F103D\"}.mdi-file-word-outline::before{content:\"\\F103E\"}.mdi-film::before{content:\"\\F022F\"}.mdi-filmstrip::before{content:\"\\F0230\"}.mdi-filmstrip-box::before{content:\"\\F0332\"}.mdi-filmstrip-box-multiple::before{content:\"\\F0D18\"}.mdi-filmstrip-off::before{content:\"\\F0231\"}.mdi-filter::before{content:\"\\F0232\"}.mdi-filter-menu::before{content:\"\\F10E5\"}.mdi-filter-menu-outline::before{content:\"\\F10E6\"}.mdi-filter-minus::before{content:\"\\F0EEE\"}.mdi-filter-minus-outline::before{content:\"\\F0EEF\"}.mdi-filter-outline::before{content:\"\\F0233\"}.mdi-filter-plus::before{content:\"\\F0EF0\"}.mdi-filter-plus-outline::before{content:\"\\F0EF1\"}.mdi-filter-remove::before{content:\"\\F0234\"}.mdi-filter-remove-outline::before{content:\"\\F0235\"}.mdi-filter-variant::before{content:\"\\F0236\"}.mdi-filter-variant-minus::before{content:\"\\F1112\"}.mdi-filter-variant-plus::before{content:\"\\F1113\"}.mdi-filter-variant-remove::before{content:\"\\F103F\"}.mdi-finance::before{content:\"\\F081F\"}.mdi-find-replace::before{content:\"\\F06D4\"}.mdi-fingerprint::before{content:\"\\F0237\"}.mdi-fingerprint-off::before{content:\"\\F0EB1\"}.mdi-fire::before{content:\"\\F0238\"}.mdi-fire-extinguisher::before{content:\"\\F0EF2\"}.mdi-fire-hydrant::before{content:\"\\F1137\"}.mdi-fire-hydrant-alert::before{content:\"\\F1138\"}.mdi-fire-hydrant-off::before{content:\"\\F1139\"}.mdi-fire-truck::before{content:\"\\F08AB\"}.mdi-firebase::before{content:\"\\F0967\"}.mdi-firefox::before{content:\"\\F0239\"}.mdi-fireplace::before{content:\"\\F0E2E\"}.mdi-fireplace-off::before{content:\"\\F0E2F\"}.mdi-firework::before{content:\"\\F0E30\"}.mdi-fish::before{content:\"\\F023A\"}.mdi-fishbowl::before{content:\"\\F0EF3\"}.mdi-fishbowl-outline::before{content:\"\\F0EF4\"}.mdi-fit-to-page::before{content:\"\\F0EF5\"}.mdi-fit-to-page-outline::before{content:\"\\F0EF6\"}.mdi-flag::before{content:\"\\F023B\"}.mdi-flag-checkered::before{content:\"\\F023C\"}.mdi-flag-minus::before{content:\"\\F0B99\"}.mdi-flag-minus-outline::before{content:\"\\F10B2\"}.mdi-flag-outline::before{content:\"\\F023D\"}.mdi-flag-plus::before{content:\"\\F0B9A\"}.mdi-flag-plus-outline::before{content:\"\\F10B3\"}.mdi-flag-remove::before{content:\"\\F0B9B\"}.mdi-flag-remove-outline::before{content:\"\\F10B4\"}.mdi-flag-triangle::before{content:\"\\F023F\"}.mdi-flag-variant::before{content:\"\\F0240\"}.mdi-flag-variant-outline::before{content:\"\\F023E\"}.mdi-flare::before{content:\"\\F0D72\"}.mdi-flash::before{content:\"\\F0241\"}.mdi-flash-alert::before{content:\"\\F0EF7\"}.mdi-flash-alert-outline::before{content:\"\\F0EF8\"}.mdi-flash-auto::before{content:\"\\F0242\"}.mdi-flash-circle::before{content:\"\\F0820\"}.mdi-flash-off::before{content:\"\\F0243\"}.mdi-flash-outline::before{content:\"\\F06D5\"}.mdi-flash-red-eye::before{content:\"\\F067B\"}.mdi-flashlight::before{content:\"\\F0244\"}.mdi-flashlight-off::before{content:\"\\F0245\"}.mdi-flask::before{content:\"\\F0093\"}.mdi-flask-empty::before{content:\"\\F0094\"}.mdi-flask-empty-minus::before{content:\"\\F123A\"}.mdi-flask-empty-minus-outline::before{content:\"\\F123B\"}.mdi-flask-empty-outline::before{content:\"\\F0095\"}.mdi-flask-empty-plus::before{content:\"\\F123C\"}.mdi-flask-empty-plus-outline::before{content:\"\\F123D\"}.mdi-flask-empty-remove::before{content:\"\\F123E\"}.mdi-flask-empty-remove-outline::before{content:\"\\F123F\"}.mdi-flask-minus::before{content:\"\\F1240\"}.mdi-flask-minus-outline::before{content:\"\\F1241\"}.mdi-flask-outline::before{content:\"\\F0096\"}.mdi-flask-plus::before{content:\"\\F1242\"}.mdi-flask-plus-outline::before{content:\"\\F1243\"}.mdi-flask-remove::before{content:\"\\F1244\"}.mdi-flask-remove-outline::before{content:\"\\F1245\"}.mdi-flask-round-bottom::before{content:\"\\F124B\"}.mdi-flask-round-bottom-empty::before{content:\"\\F124C\"}.mdi-flask-round-bottom-empty-outline::before{content:\"\\F124D\"}.mdi-flask-round-bottom-outline::before{content:\"\\F124E\"}.mdi-fleur-de-lis::before{content:\"\\F1303\"}.mdi-flip-horizontal::before{content:\"\\F10E7\"}.mdi-flip-to-back::before{content:\"\\F0247\"}.mdi-flip-to-front::before{content:\"\\F0248\"}.mdi-flip-vertical::before{content:\"\\F10E8\"}.mdi-floor-lamp::before{content:\"\\F08DD\"}.mdi-floor-lamp-dual::before{content:\"\\F1040\"}.mdi-floor-lamp-variant::before{content:\"\\F1041\"}.mdi-floor-plan::before{content:\"\\F0821\"}.mdi-floppy::before{content:\"\\F0249\"}.mdi-floppy-variant::before{content:\"\\F09EF\"}.mdi-flower::before{content:\"\\F024A\"}.mdi-flower-outline::before{content:\"\\F09F0\"}.mdi-flower-poppy::before{content:\"\\F0D08\"}.mdi-flower-tulip::before{content:\"\\F09F1\"}.mdi-flower-tulip-outline::before{content:\"\\F09F2\"}.mdi-focus-auto::before{content:\"\\F0F4E\"}.mdi-focus-field::before{content:\"\\F0F4F\"}.mdi-focus-field-horizontal::before{content:\"\\F0F50\"}.mdi-focus-field-vertical::before{content:\"\\F0F51\"}.mdi-folder::before{content:\"\\F024B\"}.mdi-folder-account::before{content:\"\\F024C\"}.mdi-folder-account-outline::before{content:\"\\F0B9C\"}.mdi-folder-alert::before{content:\"\\F0DCC\"}.mdi-folder-alert-outline::before{content:\"\\F0DCD\"}.mdi-folder-clock::before{content:\"\\F0ABA\"}.mdi-folder-clock-outline::before{content:\"\\F0ABB\"}.mdi-folder-cog::before{content:\"\\F107F\"}.mdi-folder-cog-outline::before{content:\"\\F1080\"}.mdi-folder-download::before{content:\"\\F024D\"}.mdi-folder-download-outline::before{content:\"\\F10E9\"}.mdi-folder-edit::before{content:\"\\F08DE\"}.mdi-folder-edit-outline::before{content:\"\\F0DCE\"}.mdi-folder-google-drive::before{content:\"\\F024E\"}.mdi-folder-heart::before{content:\"\\F10EA\"}.mdi-folder-heart-outline::before{content:\"\\F10EB\"}.mdi-folder-home::before{content:\"\\F10B5\"}.mdi-folder-home-outline::before{content:\"\\F10B6\"}.mdi-folder-image::before{content:\"\\F024F\"}.mdi-folder-information::before{content:\"\\F10B7\"}.mdi-folder-information-outline::before{content:\"\\F10B8\"}.mdi-folder-key::before{content:\"\\F08AC\"}.mdi-folder-key-network::before{content:\"\\F08AD\"}.mdi-folder-key-network-outline::before{content:\"\\F0C80\"}.mdi-folder-key-outline::before{content:\"\\F10EC\"}.mdi-folder-lock::before{content:\"\\F0250\"}.mdi-folder-lock-open::before{content:\"\\F0251\"}.mdi-folder-marker::before{content:\"\\F126D\"}.mdi-folder-marker-outline::before{content:\"\\F126E\"}.mdi-folder-move::before{content:\"\\F0252\"}.mdi-folder-move-outline::before{content:\"\\F1246\"}.mdi-folder-multiple::before{content:\"\\F0253\"}.mdi-folder-multiple-image::before{content:\"\\F0254\"}.mdi-folder-multiple-outline::before{content:\"\\F0255\"}.mdi-folder-music::before{content:\"\\F1359\"}.mdi-folder-music-outline::before{content:\"\\F135A\"}.mdi-folder-network::before{content:\"\\F0870\"}.mdi-folder-network-outline::before{content:\"\\F0C81\"}.mdi-folder-open::before{content:\"\\F0770\"}.mdi-folder-open-outline::before{content:\"\\F0DCF\"}.mdi-folder-outline::before{content:\"\\F0256\"}.mdi-folder-plus::before{content:\"\\F0257\"}.mdi-folder-plus-outline::before{content:\"\\F0B9D\"}.mdi-folder-pound::before{content:\"\\F0D09\"}.mdi-folder-pound-outline::before{content:\"\\F0D0A\"}.mdi-folder-refresh::before{content:\"\\F0749\"}.mdi-folder-refresh-outline::before{content:\"\\F0542\"}.mdi-folder-remove::before{content:\"\\F0258\"}.mdi-folder-remove-outline::before{content:\"\\F0B9E\"}.mdi-folder-search::before{content:\"\\F0968\"}.mdi-folder-search-outline::before{content:\"\\F0969\"}.mdi-folder-settings::before{content:\"\\F107D\"}.mdi-folder-settings-outline::before{content:\"\\F107E\"}.mdi-folder-star::before{content:\"\\F069D\"}.mdi-folder-star-outline::before{content:\"\\F0B9F\"}.mdi-folder-swap::before{content:\"\\F0FB6\"}.mdi-folder-swap-outline::before{content:\"\\F0FB7\"}.mdi-folder-sync::before{content:\"\\F0D0B\"}.mdi-folder-sync-outline::before{content:\"\\F0D0C\"}.mdi-folder-table::before{content:\"\\F12E3\"}.mdi-folder-table-outline::before{content:\"\\F12E4\"}.mdi-folder-text::before{content:\"\\F0C82\"}.mdi-folder-text-outline::before{content:\"\\F0C83\"}.mdi-folder-upload::before{content:\"\\F0259\"}.mdi-folder-upload-outline::before{content:\"\\F10ED\"}.mdi-folder-zip::before{content:\"\\F06EB\"}.mdi-folder-zip-outline::before{content:\"\\F07B9\"}.mdi-font-awesome::before{content:\"\\F003A\"}.mdi-food::before{content:\"\\F025A\"}.mdi-food-apple::before{content:\"\\F025B\"}.mdi-food-apple-outline::before{content:\"\\F0C84\"}.mdi-food-croissant::before{content:\"\\F07C8\"}.mdi-food-fork-drink::before{content:\"\\F05F2\"}.mdi-food-off::before{content:\"\\F05F3\"}.mdi-food-variant::before{content:\"\\F025C\"}.mdi-foot-print::before{content:\"\\F0F52\"}.mdi-football::before{content:\"\\F025D\"}.mdi-football-australian::before{content:\"\\F025E\"}.mdi-football-helmet::before{content:\"\\F025F\"}.mdi-forklift::before{content:\"\\F07C9\"}.mdi-format-align-bottom::before{content:\"\\F0753\"}.mdi-format-align-center::before{content:\"\\F0260\"}.mdi-format-align-justify::before{content:\"\\F0261\"}.mdi-format-align-left::before{content:\"\\F0262\"}.mdi-format-align-middle::before{content:\"\\F0754\"}.mdi-format-align-right::before{content:\"\\F0263\"}.mdi-format-align-top::before{content:\"\\F0755\"}.mdi-format-annotation-minus::before{content:\"\\F0ABC\"}.mdi-format-annotation-plus::before{content:\"\\F0646\"}.mdi-format-bold::before{content:\"\\F0264\"}.mdi-format-clear::before{content:\"\\F0265\"}.mdi-format-color-fill::before{content:\"\\F0266\"}.mdi-format-color-highlight::before{content:\"\\F0E31\"}.mdi-format-color-marker-cancel::before{content:\"\\F1313\"}.mdi-format-color-text::before{content:\"\\F069E\"}.mdi-format-columns::before{content:\"\\F08DF\"}.mdi-format-float-center::before{content:\"\\F0267\"}.mdi-format-float-left::before{content:\"\\F0268\"}.mdi-format-float-none::before{content:\"\\F0269\"}.mdi-format-float-right::before{content:\"\\F026A\"}.mdi-format-font::before{content:\"\\F06D6\"}.mdi-format-font-size-decrease::before{content:\"\\F09F3\"}.mdi-format-font-size-increase::before{content:\"\\F09F4\"}.mdi-format-header-1::before{content:\"\\F026B\"}.mdi-format-header-2::before{content:\"\\F026C\"}.mdi-format-header-3::before{content:\"\\F026D\"}.mdi-format-header-4::before{content:\"\\F026E\"}.mdi-format-header-5::before{content:\"\\F026F\"}.mdi-format-header-6::before{content:\"\\F0270\"}.mdi-format-header-decrease::before{content:\"\\F0271\"}.mdi-format-header-equal::before{content:\"\\F0272\"}.mdi-format-header-increase::before{content:\"\\F0273\"}.mdi-format-header-pound::before{content:\"\\F0274\"}.mdi-format-horizontal-align-center::before{content:\"\\F061E\"}.mdi-format-horizontal-align-left::before{content:\"\\F061F\"}.mdi-format-horizontal-align-right::before{content:\"\\F0620\"}.mdi-format-indent-decrease::before{content:\"\\F0275\"}.mdi-format-indent-increase::before{content:\"\\F0276\"}.mdi-format-italic::before{content:\"\\F0277\"}.mdi-format-letter-case::before{content:\"\\F0B34\"}.mdi-format-letter-case-lower::before{content:\"\\F0B35\"}.mdi-format-letter-case-upper::before{content:\"\\F0B36\"}.mdi-format-letter-ends-with::before{content:\"\\F0FB8\"}.mdi-format-letter-matches::before{content:\"\\F0FB9\"}.mdi-format-letter-starts-with::before{content:\"\\F0FBA\"}.mdi-format-line-spacing::before{content:\"\\F0278\"}.mdi-format-line-style::before{content:\"\\F05C8\"}.mdi-format-line-weight::before{content:\"\\F05C9\"}.mdi-format-list-bulleted::before{content:\"\\F0279\"}.mdi-format-list-bulleted-square::before{content:\"\\F0DD0\"}.mdi-format-list-bulleted-triangle::before{content:\"\\F0EB2\"}.mdi-format-list-bulleted-type::before{content:\"\\F027A\"}.mdi-format-list-checkbox::before{content:\"\\F096A\"}.mdi-format-list-checks::before{content:\"\\F0756\"}.mdi-format-list-numbered::before{content:\"\\F027B\"}.mdi-format-list-numbered-rtl::before{content:\"\\F0D0D\"}.mdi-format-list-text::before{content:\"\\F126F\"}.mdi-format-overline::before{content:\"\\F0EB3\"}.mdi-format-page-break::before{content:\"\\F06D7\"}.mdi-format-paint::before{content:\"\\F027C\"}.mdi-format-paragraph::before{content:\"\\F027D\"}.mdi-format-pilcrow::before{content:\"\\F06D8\"}.mdi-format-quote-close::before{content:\"\\F027E\"}.mdi-format-quote-close-outline::before{content:\"\\F11A8\"}.mdi-format-quote-open::before{content:\"\\F0757\"}.mdi-format-quote-open-outline::before{content:\"\\F11A7\"}.mdi-format-rotate-90::before{content:\"\\F06AA\"}.mdi-format-section::before{content:\"\\F069F\"}.mdi-format-size::before{content:\"\\F027F\"}.mdi-format-strikethrough::before{content:\"\\F0280\"}.mdi-format-strikethrough-variant::before{content:\"\\F0281\"}.mdi-format-subscript::before{content:\"\\F0282\"}.mdi-format-superscript::before{content:\"\\F0283\"}.mdi-format-text::before{content:\"\\F0284\"}.mdi-format-text-rotation-angle-down::before{content:\"\\F0FBB\"}.mdi-format-text-rotation-angle-up::before{content:\"\\F0FBC\"}.mdi-format-text-rotation-down::before{content:\"\\F0D73\"}.mdi-format-text-rotation-down-vertical::before{content:\"\\F0FBD\"}.mdi-format-text-rotation-none::before{content:\"\\F0D74\"}.mdi-format-text-rotation-up::before{content:\"\\F0FBE\"}.mdi-format-text-rotation-vertical::before{content:\"\\F0FBF\"}.mdi-format-text-variant::before{content:\"\\F0E32\"}.mdi-format-text-wrapping-clip::before{content:\"\\F0D0E\"}.mdi-format-text-wrapping-overflow::before{content:\"\\F0D0F\"}.mdi-format-text-wrapping-wrap::before{content:\"\\F0D10\"}.mdi-format-textbox::before{content:\"\\F0D11\"}.mdi-format-textdirection-l-to-r::before{content:\"\\F0285\"}.mdi-format-textdirection-r-to-l::before{content:\"\\F0286\"}.mdi-format-title::before{content:\"\\F05F4\"}.mdi-format-underline::before{content:\"\\F0287\"}.mdi-format-vertical-align-bottom::before{content:\"\\F0621\"}.mdi-format-vertical-align-center::before{content:\"\\F0622\"}.mdi-format-vertical-align-top::before{content:\"\\F0623\"}.mdi-format-wrap-inline::before{content:\"\\F0288\"}.mdi-format-wrap-square::before{content:\"\\F0289\"}.mdi-format-wrap-tight::before{content:\"\\F028A\"}.mdi-format-wrap-top-bottom::before{content:\"\\F028B\"}.mdi-forum::before{content:\"\\F028C\"}.mdi-forum-outline::before{content:\"\\F0822\"}.mdi-forward::before{content:\"\\F028D\"}.mdi-forwardburger::before{content:\"\\F0D75\"}.mdi-fountain::before{content:\"\\F096B\"}.mdi-fountain-pen::before{content:\"\\F0D12\"}.mdi-fountain-pen-tip::before{content:\"\\F0D13\"}.mdi-freebsd::before{content:\"\\F08E0\"}.mdi-frequently-asked-questions::before{content:\"\\F0EB4\"}.mdi-fridge::before{content:\"\\F0290\"}.mdi-fridge-alert::before{content:\"\\F11B1\"}.mdi-fridge-alert-outline::before{content:\"\\F11B2\"}.mdi-fridge-bottom::before{content:\"\\F0292\"}.mdi-fridge-off::before{content:\"\\F11AF\"}.mdi-fridge-off-outline::before{content:\"\\F11B0\"}.mdi-fridge-outline::before{content:\"\\F028F\"}.mdi-fridge-top::before{content:\"\\F0291\"}.mdi-fruit-cherries::before{content:\"\\F1042\"}.mdi-fruit-citrus::before{content:\"\\F1043\"}.mdi-fruit-grapes::before{content:\"\\F1044\"}.mdi-fruit-grapes-outline::before{content:\"\\F1045\"}.mdi-fruit-pineapple::before{content:\"\\F1046\"}.mdi-fruit-watermelon::before{content:\"\\F1047\"}.mdi-fuel::before{content:\"\\F07CA\"}.mdi-fullscreen::before{content:\"\\F0293\"}.mdi-fullscreen-exit::before{content:\"\\F0294\"}.mdi-function::before{content:\"\\F0295\"}.mdi-function-variant::before{content:\"\\F0871\"}.mdi-furigana-horizontal::before{content:\"\\F1081\"}.mdi-furigana-vertical::before{content:\"\\F1082\"}.mdi-fuse::before{content:\"\\F0C85\"}.mdi-fuse-blade::before{content:\"\\F0C86\"}.mdi-gamepad::before{content:\"\\F0296\"}.mdi-gamepad-circle::before{content:\"\\F0E33\"}.mdi-gamepad-circle-down::before{content:\"\\F0E34\"}.mdi-gamepad-circle-left::before{content:\"\\F0E35\"}.mdi-gamepad-circle-outline::before{content:\"\\F0E36\"}.mdi-gamepad-circle-right::before{content:\"\\F0E37\"}.mdi-gamepad-circle-up::before{content:\"\\F0E38\"}.mdi-gamepad-down::before{content:\"\\F0E39\"}.mdi-gamepad-left::before{content:\"\\F0E3A\"}.mdi-gamepad-right::before{content:\"\\F0E3B\"}.mdi-gamepad-round::before{content:\"\\F0E3C\"}.mdi-gamepad-round-down::before{content:\"\\F0E3D\"}.mdi-gamepad-round-left::before{content:\"\\F0E3E\"}.mdi-gamepad-round-outline::before{content:\"\\F0E3F\"}.mdi-gamepad-round-right::before{content:\"\\F0E40\"}.mdi-gamepad-round-up::before{content:\"\\F0E41\"}.mdi-gamepad-square::before{content:\"\\F0EB5\"}.mdi-gamepad-square-outline::before{content:\"\\F0EB6\"}.mdi-gamepad-up::before{content:\"\\F0E42\"}.mdi-gamepad-variant::before{content:\"\\F0297\"}.mdi-gamepad-variant-outline::before{content:\"\\F0EB7\"}.mdi-gamma::before{content:\"\\F10EE\"}.mdi-gantry-crane::before{content:\"\\F0DD1\"}.mdi-garage::before{content:\"\\F06D9\"}.mdi-garage-alert::before{content:\"\\F0872\"}.mdi-garage-alert-variant::before{content:\"\\F12D5\"}.mdi-garage-open::before{content:\"\\F06DA\"}.mdi-garage-open-variant::before{content:\"\\F12D4\"}.mdi-garage-variant::before{content:\"\\F12D3\"}.mdi-gas-cylinder::before{content:\"\\F0647\"}.mdi-gas-station::before{content:\"\\F0298\"}.mdi-gas-station-outline::before{content:\"\\F0EB8\"}.mdi-gate::before{content:\"\\F0299\"}.mdi-gate-and::before{content:\"\\F08E1\"}.mdi-gate-arrow-right::before{content:\"\\F1169\"}.mdi-gate-nand::before{content:\"\\F08E2\"}.mdi-gate-nor::before{content:\"\\F08E3\"}.mdi-gate-not::before{content:\"\\F08E4\"}.mdi-gate-open::before{content:\"\\F116A\"}.mdi-gate-or::before{content:\"\\F08E5\"}.mdi-gate-xnor::before{content:\"\\F08E6\"}.mdi-gate-xor::before{content:\"\\F08E7\"}.mdi-gatsby::before{content:\"\\F0E43\"}.mdi-gauge::before{content:\"\\F029A\"}.mdi-gauge-empty::before{content:\"\\F0873\"}.mdi-gauge-full::before{content:\"\\F0874\"}.mdi-gauge-low::before{content:\"\\F0875\"}.mdi-gavel::before{content:\"\\F029B\"}.mdi-gender-female::before{content:\"\\F029C\"}.mdi-gender-male::before{content:\"\\F029D\"}.mdi-gender-male-female::before{content:\"\\F029E\"}.mdi-gender-male-female-variant::before{content:\"\\F113F\"}.mdi-gender-non-binary::before{content:\"\\F1140\"}.mdi-gender-transgender::before{content:\"\\F029F\"}.mdi-gentoo::before{content:\"\\F08E8\"}.mdi-gesture::before{content:\"\\F07CB\"}.mdi-gesture-double-tap::before{content:\"\\F073C\"}.mdi-gesture-pinch::before{content:\"\\F0ABD\"}.mdi-gesture-spread::before{content:\"\\F0ABE\"}.mdi-gesture-swipe::before{content:\"\\F0D76\"}.mdi-gesture-swipe-down::before{content:\"\\F073D\"}.mdi-gesture-swipe-horizontal::before{content:\"\\F0ABF\"}.mdi-gesture-swipe-left::before{content:\"\\F073E\"}.mdi-gesture-swipe-right::before{content:\"\\F073F\"}.mdi-gesture-swipe-up::before{content:\"\\F0740\"}.mdi-gesture-swipe-vertical::before{content:\"\\F0AC0\"}.mdi-gesture-tap::before{content:\"\\F0741\"}.mdi-gesture-tap-box::before{content:\"\\F12A9\"}.mdi-gesture-tap-button::before{content:\"\\F12A8\"}.mdi-gesture-tap-hold::before{content:\"\\F0D77\"}.mdi-gesture-two-double-tap::before{content:\"\\F0742\"}.mdi-gesture-two-tap::before{content:\"\\F0743\"}.mdi-ghost::before{content:\"\\F02A0\"}.mdi-ghost-off::before{content:\"\\F09F5\"}.mdi-gif::before{content:\"\\F0D78\"}.mdi-gift::before{content:\"\\F0E44\"}.mdi-gift-outline::before{content:\"\\F02A1\"}.mdi-git::before{content:\"\\F02A2\"}.mdi-github::before{content:\"\\F02A4\"}.mdi-gitlab::before{content:\"\\F0BA0\"}.mdi-glass-cocktail::before{content:\"\\F0356\"}.mdi-glass-flute::before{content:\"\\F02A5\"}.mdi-glass-mug::before{content:\"\\F02A6\"}.mdi-glass-mug-variant::before{content:\"\\F1116\"}.mdi-glass-pint-outline::before{content:\"\\F130D\"}.mdi-glass-stange::before{content:\"\\F02A7\"}.mdi-glass-tulip::before{content:\"\\F02A8\"}.mdi-glass-wine::before{content:\"\\F0876\"}.mdi-glasses::before{content:\"\\F02AA\"}.mdi-globe-light::before{content:\"\\F12D7\"}.mdi-globe-model::before{content:\"\\F08E9\"}.mdi-gmail::before{content:\"\\F02AB\"}.mdi-gnome::before{content:\"\\F02AC\"}.mdi-go-kart::before{content:\"\\F0D79\"}.mdi-go-kart-track::before{content:\"\\F0D7A\"}.mdi-gog::before{content:\"\\F0BA1\"}.mdi-gold::before{content:\"\\F124F\"}.mdi-golf::before{content:\"\\F0823\"}.mdi-golf-cart::before{content:\"\\F11A4\"}.mdi-golf-tee::before{content:\"\\F1083\"}.mdi-gondola::before{content:\"\\F0686\"}.mdi-goodreads::before{content:\"\\F0D7B\"}.mdi-google::before{content:\"\\F02AD\"}.mdi-google-ads::before{content:\"\\F0C87\"}.mdi-google-analytics::before{content:\"\\F07CC\"}.mdi-google-assistant::before{content:\"\\F07CD\"}.mdi-google-cardboard::before{content:\"\\F02AE\"}.mdi-google-chrome::before{content:\"\\F02AF\"}.mdi-google-circles::before{content:\"\\F02B0\"}.mdi-google-circles-communities::before{content:\"\\F02B1\"}.mdi-google-circles-extended::before{content:\"\\F02B2\"}.mdi-google-circles-group::before{content:\"\\F02B3\"}.mdi-google-classroom::before{content:\"\\F02C0\"}.mdi-google-cloud::before{content:\"\\F11F6\"}.mdi-google-controller::before{content:\"\\F02B4\"}.mdi-google-controller-off::before{content:\"\\F02B5\"}.mdi-google-downasaur::before{content:\"\\F1362\"}.mdi-google-drive::before{content:\"\\F02B6\"}.mdi-google-earth::before{content:\"\\F02B7\"}.mdi-google-fit::before{content:\"\\F096C\"}.mdi-google-glass::before{content:\"\\F02B8\"}.mdi-google-hangouts::before{content:\"\\F02C9\"}.mdi-google-home::before{content:\"\\F0824\"}.mdi-google-keep::before{content:\"\\F06DC\"}.mdi-google-lens::before{content:\"\\F09F6\"}.mdi-google-maps::before{content:\"\\F05F5\"}.mdi-google-my-business::before{content:\"\\F1048\"}.mdi-google-nearby::before{content:\"\\F02B9\"}.mdi-google-photos::before{content:\"\\F06DD\"}.mdi-google-play::before{content:\"\\F02BC\"}.mdi-google-plus::before{content:\"\\F02BD\"}.mdi-google-podcast::before{content:\"\\F0EB9\"}.mdi-google-spreadsheet::before{content:\"\\F09F7\"}.mdi-google-street-view::before{content:\"\\F0C88\"}.mdi-google-translate::before{content:\"\\F02BF\"}.mdi-gradient::before{content:\"\\F06A0\"}.mdi-grain::before{content:\"\\F0D7C\"}.mdi-graph::before{content:\"\\F1049\"}.mdi-graph-outline::before{content:\"\\F104A\"}.mdi-graphql::before{content:\"\\F0877\"}.mdi-grave-stone::before{content:\"\\F0BA2\"}.mdi-grease-pencil::before{content:\"\\F0648\"}.mdi-greater-than::before{content:\"\\F096D\"}.mdi-greater-than-or-equal::before{content:\"\\F096E\"}.mdi-grid::before{content:\"\\F02C1\"}.mdi-grid-large::before{content:\"\\F0758\"}.mdi-grid-off::before{content:\"\\F02C2\"}.mdi-grill::before{content:\"\\F0E45\"}.mdi-grill-outline::before{content:\"\\F118A\"}.mdi-group::before{content:\"\\F02C3\"}.mdi-guitar-acoustic::before{content:\"\\F0771\"}.mdi-guitar-electric::before{content:\"\\F02C4\"}.mdi-guitar-pick::before{content:\"\\F02C5\"}.mdi-guitar-pick-outline::before{content:\"\\F02C6\"}.mdi-guy-fawkes-mask::before{content:\"\\F0825\"}.mdi-hail::before{content:\"\\F0AC1\"}.mdi-hair-dryer::before{content:\"\\F10EF\"}.mdi-hair-dryer-outline::before{content:\"\\F10F0\"}.mdi-halloween::before{content:\"\\F0BA3\"}.mdi-hamburger::before{content:\"\\F0685\"}.mdi-hammer::before{content:\"\\F08EA\"}.mdi-hammer-screwdriver::before{content:\"\\F1322\"}.mdi-hammer-wrench::before{content:\"\\F1323\"}.mdi-hand::before{content:\"\\F0A4F\"}.mdi-hand-heart::before{content:\"\\F10F1\"}.mdi-hand-left::before{content:\"\\F0E46\"}.mdi-hand-okay::before{content:\"\\F0A50\"}.mdi-hand-peace::before{content:\"\\F0A51\"}.mdi-hand-peace-variant::before{content:\"\\F0A52\"}.mdi-hand-pointing-down::before{content:\"\\F0A53\"}.mdi-hand-pointing-left::before{content:\"\\F0A54\"}.mdi-hand-pointing-right::before{content:\"\\F02C7\"}.mdi-hand-pointing-up::before{content:\"\\F0A55\"}.mdi-hand-right::before{content:\"\\F0E47\"}.mdi-hand-saw::before{content:\"\\F0E48\"}.mdi-hand-water::before{content:\"\\F139F\"}.mdi-handball::before{content:\"\\F0F53\"}.mdi-handcuffs::before{content:\"\\F113E\"}.mdi-handshake::before{content:\"\\F1218\"}.mdi-hanger::before{content:\"\\F02C8\"}.mdi-hard-hat::before{content:\"\\F096F\"}.mdi-harddisk::before{content:\"\\F02CA\"}.mdi-harddisk-plus::before{content:\"\\F104B\"}.mdi-harddisk-remove::before{content:\"\\F104C\"}.mdi-hat-fedora::before{content:\"\\F0BA4\"}.mdi-hazard-lights::before{content:\"\\F0C89\"}.mdi-hdr::before{content:\"\\F0D7D\"}.mdi-hdr-off::before{content:\"\\F0D7E\"}.mdi-head::before{content:\"\\F135E\"}.mdi-head-alert::before{content:\"\\F1338\"}.mdi-head-alert-outline::before{content:\"\\F1339\"}.mdi-head-check::before{content:\"\\F133A\"}.mdi-head-check-outline::before{content:\"\\F133B\"}.mdi-head-cog::before{content:\"\\F133C\"}.mdi-head-cog-outline::before{content:\"\\F133D\"}.mdi-head-dots-horizontal::before{content:\"\\F133E\"}.mdi-head-dots-horizontal-outline::before{content:\"\\F133F\"}.mdi-head-flash::before{content:\"\\F1340\"}.mdi-head-flash-outline::before{content:\"\\F1341\"}.mdi-head-heart::before{content:\"\\F1342\"}.mdi-head-heart-outline::before{content:\"\\F1343\"}.mdi-head-lightbulb::before{content:\"\\F1344\"}.mdi-head-lightbulb-outline::before{content:\"\\F1345\"}.mdi-head-minus::before{content:\"\\F1346\"}.mdi-head-minus-outline::before{content:\"\\F1347\"}.mdi-head-outline::before{content:\"\\F135F\"}.mdi-head-plus::before{content:\"\\F1348\"}.mdi-head-plus-outline::before{content:\"\\F1349\"}.mdi-head-question::before{content:\"\\F134A\"}.mdi-head-question-outline::before{content:\"\\F134B\"}.mdi-head-remove::before{content:\"\\F134C\"}.mdi-head-remove-outline::before{content:\"\\F134D\"}.mdi-head-snowflake::before{content:\"\\F134E\"}.mdi-head-snowflake-outline::before{content:\"\\F134F\"}.mdi-head-sync::before{content:\"\\F1350\"}.mdi-head-sync-outline::before{content:\"\\F1351\"}.mdi-headphones::before{content:\"\\F02CB\"}.mdi-headphones-bluetooth::before{content:\"\\F0970\"}.mdi-headphones-box::before{content:\"\\F02CC\"}.mdi-headphones-off::before{content:\"\\F07CE\"}.mdi-headphones-settings::before{content:\"\\F02CD\"}.mdi-headset::before{content:\"\\F02CE\"}.mdi-headset-dock::before{content:\"\\F02CF\"}.mdi-headset-off::before{content:\"\\F02D0\"}.mdi-heart::before{content:\"\\F02D1\"}.mdi-heart-box::before{content:\"\\F02D2\"}.mdi-heart-box-outline::before{content:\"\\F02D3\"}.mdi-heart-broken::before{content:\"\\F02D4\"}.mdi-heart-broken-outline::before{content:\"\\F0D14\"}.mdi-heart-circle::before{content:\"\\F0971\"}.mdi-heart-circle-outline::before{content:\"\\F0972\"}.mdi-heart-flash::before{content:\"\\F0EF9\"}.mdi-heart-half::before{content:\"\\F06DF\"}.mdi-heart-half-full::before{content:\"\\F06DE\"}.mdi-heart-half-outline::before{content:\"\\F06E0\"}.mdi-heart-multiple::before{content:\"\\F0A56\"}.mdi-heart-multiple-outline::before{content:\"\\F0A57\"}.mdi-heart-off::before{content:\"\\F0759\"}.mdi-heart-outline::before{content:\"\\F02D5\"}.mdi-heart-pulse::before{content:\"\\F05F6\"}.mdi-helicopter::before{content:\"\\F0AC2\"}.mdi-help::before{content:\"\\F02D6\"}.mdi-help-box::before{content:\"\\F078B\"}.mdi-help-circle::before{content:\"\\F02D7\"}.mdi-help-circle-outline::before{content:\"\\F0625\"}.mdi-help-network::before{content:\"\\F06F5\"}.mdi-help-network-outline::before{content:\"\\F0C8A\"}.mdi-help-rhombus::before{content:\"\\F0BA5\"}.mdi-help-rhombus-outline::before{content:\"\\F0BA6\"}.mdi-hexadecimal::before{content:\"\\F12A7\"}.mdi-hexagon::before{content:\"\\F02D8\"}.mdi-hexagon-multiple::before{content:\"\\F06E1\"}.mdi-hexagon-multiple-outline::before{content:\"\\F10F2\"}.mdi-hexagon-outline::before{content:\"\\F02D9\"}.mdi-hexagon-slice-1::before{content:\"\\F0AC3\"}.mdi-hexagon-slice-2::before{content:\"\\F0AC4\"}.mdi-hexagon-slice-3::before{content:\"\\F0AC5\"}.mdi-hexagon-slice-4::before{content:\"\\F0AC6\"}.mdi-hexagon-slice-5::before{content:\"\\F0AC7\"}.mdi-hexagon-slice-6::before{content:\"\\F0AC8\"}.mdi-hexagram::before{content:\"\\F0AC9\"}.mdi-hexagram-outline::before{content:\"\\F0ACA\"}.mdi-high-definition::before{content:\"\\F07CF\"}.mdi-high-definition-box::before{content:\"\\F0878\"}.mdi-highway::before{content:\"\\F05F7\"}.mdi-hiking::before{content:\"\\F0D7F\"}.mdi-hinduism::before{content:\"\\F0973\"}.mdi-history::before{content:\"\\F02DA\"}.mdi-hockey-puck::before{content:\"\\F0879\"}.mdi-hockey-sticks::before{content:\"\\F087A\"}.mdi-hololens::before{content:\"\\F02DB\"}.mdi-home::before{content:\"\\F02DC\"}.mdi-home-account::before{content:\"\\F0826\"}.mdi-home-alert::before{content:\"\\F087B\"}.mdi-home-analytics::before{content:\"\\F0EBA\"}.mdi-home-assistant::before{content:\"\\F07D0\"}.mdi-home-automation::before{content:\"\\F07D1\"}.mdi-home-circle::before{content:\"\\F07D2\"}.mdi-home-circle-outline::before{content:\"\\F104D\"}.mdi-home-city::before{content:\"\\F0D15\"}.mdi-home-city-outline::before{content:\"\\F0D16\"}.mdi-home-currency-usd::before{content:\"\\F08AF\"}.mdi-home-edit::before{content:\"\\F1159\"}.mdi-home-edit-outline::before{content:\"\\F115A\"}.mdi-home-export-outline::before{content:\"\\F0F9B\"}.mdi-home-flood::before{content:\"\\F0EFA\"}.mdi-home-floor-0::before{content:\"\\F0DD2\"}.mdi-home-floor-1::before{content:\"\\F0D80\"}.mdi-home-floor-2::before{content:\"\\F0D81\"}.mdi-home-floor-3::before{content:\"\\F0D82\"}.mdi-home-floor-a::before{content:\"\\F0D83\"}.mdi-home-floor-b::before{content:\"\\F0D84\"}.mdi-home-floor-g::before{content:\"\\F0D85\"}.mdi-home-floor-l::before{content:\"\\F0D86\"}.mdi-home-floor-negative-1::before{content:\"\\F0DD3\"}.mdi-home-group::before{content:\"\\F0DD4\"}.mdi-home-heart::before{content:\"\\F0827\"}.mdi-home-import-outline::before{content:\"\\F0F9C\"}.mdi-home-lightbulb::before{content:\"\\F1251\"}.mdi-home-lightbulb-outline::before{content:\"\\F1252\"}.mdi-home-lock::before{content:\"\\F08EB\"}.mdi-home-lock-open::before{content:\"\\F08EC\"}.mdi-home-map-marker::before{content:\"\\F05F8\"}.mdi-home-minus::before{content:\"\\F0974\"}.mdi-home-modern::before{content:\"\\F02DD\"}.mdi-home-outline::before{content:\"\\F06A1\"}.mdi-home-plus::before{content:\"\\F0975\"}.mdi-home-remove::before{content:\"\\F1247\"}.mdi-home-roof::before{content:\"\\F112B\"}.mdi-home-search::before{content:\"\\F13B0\"}.mdi-home-search-outline::before{content:\"\\F13B1\"}.mdi-home-thermometer::before{content:\"\\F0F54\"}.mdi-home-thermometer-outline::before{content:\"\\F0F55\"}.mdi-home-variant::before{content:\"\\F02DE\"}.mdi-home-variant-outline::before{content:\"\\F0BA7\"}.mdi-hook::before{content:\"\\F06E2\"}.mdi-hook-off::before{content:\"\\F06E3\"}.mdi-hops::before{content:\"\\F02DF\"}.mdi-horizontal-rotate-clockwise::before{content:\"\\F10F3\"}.mdi-horizontal-rotate-counterclockwise::before{content:\"\\F10F4\"}.mdi-horseshoe::before{content:\"\\F0A58\"}.mdi-hospital::before{content:\"\\F0FF6\"}.mdi-hospital-box::before{content:\"\\F02E0\"}.mdi-hospital-box-outline::before{content:\"\\F0FF7\"}.mdi-hospital-building::before{content:\"\\F02E1\"}.mdi-hospital-marker::before{content:\"\\F02E2\"}.mdi-hot-tub::before{content:\"\\F0828\"}.mdi-hubspot::before{content:\"\\F0D17\"}.mdi-hulu::before{content:\"\\F0829\"}.mdi-human::before{content:\"\\F02E6\"}.mdi-human-baby-changing-table::before{content:\"\\F138B\"}.mdi-human-child::before{content:\"\\F02E7\"}.mdi-human-female::before{content:\"\\F0649\"}.mdi-human-female-boy::before{content:\"\\F0A59\"}.mdi-human-female-female::before{content:\"\\F0A5A\"}.mdi-human-female-girl::before{content:\"\\F0A5B\"}.mdi-human-greeting::before{content:\"\\F064A\"}.mdi-human-handsdown::before{content:\"\\F064B\"}.mdi-human-handsup::before{content:\"\\F064C\"}.mdi-human-male::before{content:\"\\F064D\"}.mdi-human-male-boy::before{content:\"\\F0A5C\"}.mdi-human-male-child::before{content:\"\\F138C\"}.mdi-human-male-female::before{content:\"\\F02E8\"}.mdi-human-male-girl::before{content:\"\\F0A5D\"}.mdi-human-male-height::before{content:\"\\F0EFB\"}.mdi-human-male-height-variant::before{content:\"\\F0EFC\"}.mdi-human-male-male::before{content:\"\\F0A5E\"}.mdi-human-pregnant::before{content:\"\\F05CF\"}.mdi-human-wheelchair::before{content:\"\\F138D\"}.mdi-humble-bundle::before{content:\"\\F0744\"}.mdi-hvac::before{content:\"\\F1352\"}.mdi-hydraulic-oil-level::before{content:\"\\F1324\"}.mdi-hydraulic-oil-temperature::before{content:\"\\F1325\"}.mdi-hydro-power::before{content:\"\\F12E5\"}.mdi-ice-cream::before{content:\"\\F082A\"}.mdi-ice-cream-off::before{content:\"\\F0E52\"}.mdi-ice-pop::before{content:\"\\F0EFD\"}.mdi-id-card::before{content:\"\\F0FC0\"}.mdi-identifier::before{content:\"\\F0EFE\"}.mdi-ideogram-cjk::before{content:\"\\F1331\"}.mdi-ideogram-cjk-variant::before{content:\"\\F1332\"}.mdi-iframe::before{content:\"\\F0C8B\"}.mdi-iframe-array::before{content:\"\\F10F5\"}.mdi-iframe-array-outline::before{content:\"\\F10F6\"}.mdi-iframe-braces::before{content:\"\\F10F7\"}.mdi-iframe-braces-outline::before{content:\"\\F10F8\"}.mdi-iframe-outline::before{content:\"\\F0C8C\"}.mdi-iframe-parentheses::before{content:\"\\F10F9\"}.mdi-iframe-parentheses-outline::before{content:\"\\F10FA\"}.mdi-iframe-variable::before{content:\"\\F10FB\"}.mdi-iframe-variable-outline::before{content:\"\\F10FC\"}.mdi-image::before{content:\"\\F02E9\"}.mdi-image-album::before{content:\"\\F02EA\"}.mdi-image-area::before{content:\"\\F02EB\"}.mdi-image-area-close::before{content:\"\\F02EC\"}.mdi-image-auto-adjust::before{content:\"\\F0FC1\"}.mdi-image-broken::before{content:\"\\F02ED\"}.mdi-image-broken-variant::before{content:\"\\F02EE\"}.mdi-image-edit::before{content:\"\\F11E3\"}.mdi-image-edit-outline::before{content:\"\\F11E4\"}.mdi-image-filter-black-white::before{content:\"\\F02F0\"}.mdi-image-filter-center-focus::before{content:\"\\F02F1\"}.mdi-image-filter-center-focus-strong::before{content:\"\\F0EFF\"}.mdi-image-filter-center-focus-strong-outline::before{content:\"\\F0F00\"}.mdi-image-filter-center-focus-weak::before{content:\"\\F02F2\"}.mdi-image-filter-drama::before{content:\"\\F02F3\"}.mdi-image-filter-frames::before{content:\"\\F02F4\"}.mdi-image-filter-hdr::before{content:\"\\F02F5\"}.mdi-image-filter-none::before{content:\"\\F02F6\"}.mdi-image-filter-tilt-shift::before{content:\"\\F02F7\"}.mdi-image-filter-vintage::before{content:\"\\F02F8\"}.mdi-image-frame::before{content:\"\\F0E49\"}.mdi-image-move::before{content:\"\\F09F8\"}.mdi-image-multiple::before{content:\"\\F02F9\"}.mdi-image-multiple-outline::before{content:\"\\F02EF\"}.mdi-image-off::before{content:\"\\F082B\"}.mdi-image-off-outline::before{content:\"\\F11D1\"}.mdi-image-outline::before{content:\"\\F0976\"}.mdi-image-plus::before{content:\"\\F087C\"}.mdi-image-search::before{content:\"\\F0977\"}.mdi-image-search-outline::before{content:\"\\F0978\"}.mdi-image-size-select-actual::before{content:\"\\F0C8D\"}.mdi-image-size-select-large::before{content:\"\\F0C8E\"}.mdi-image-size-select-small::before{content:\"\\F0C8F\"}.mdi-import::before{content:\"\\F02FA\"}.mdi-inbox::before{content:\"\\F0687\"}.mdi-inbox-arrow-down::before{content:\"\\F02FB\"}.mdi-inbox-arrow-down-outline::before{content:\"\\F1270\"}.mdi-inbox-arrow-up::before{content:\"\\F03D1\"}.mdi-inbox-arrow-up-outline::before{content:\"\\F1271\"}.mdi-inbox-full::before{content:\"\\F1272\"}.mdi-inbox-full-outline::before{content:\"\\F1273\"}.mdi-inbox-multiple::before{content:\"\\F08B0\"}.mdi-inbox-multiple-outline::before{content:\"\\F0BA8\"}.mdi-inbox-outline::before{content:\"\\F1274\"}.mdi-incognito::before{content:\"\\F05F9\"}.mdi-incognito-off::before{content:\"\\F0075\"}.mdi-infinity::before{content:\"\\F06E4\"}.mdi-information::before{content:\"\\F02FC\"}.mdi-information-outline::before{content:\"\\F02FD\"}.mdi-information-variant::before{content:\"\\F064E\"}.mdi-instagram::before{content:\"\\F02FE\"}.mdi-instrument-triangle::before{content:\"\\F104E\"}.mdi-invert-colors::before{content:\"\\F0301\"}.mdi-invert-colors-off::before{content:\"\\F0E4A\"}.mdi-iobroker::before{content:\"\\F12E8\"}.mdi-ip::before{content:\"\\F0A5F\"}.mdi-ip-network::before{content:\"\\F0A60\"}.mdi-ip-network-outline::before{content:\"\\F0C90\"}.mdi-ipod::before{content:\"\\F0C91\"}.mdi-islam::before{content:\"\\F0979\"}.mdi-island::before{content:\"\\F104F\"}.mdi-iv-bag::before{content:\"\\F10B9\"}.mdi-jabber::before{content:\"\\F0DD5\"}.mdi-jeepney::before{content:\"\\F0302\"}.mdi-jellyfish::before{content:\"\\F0F01\"}.mdi-jellyfish-outline::before{content:\"\\F0F02\"}.mdi-jira::before{content:\"\\F0303\"}.mdi-jquery::before{content:\"\\F087D\"}.mdi-jsfiddle::before{content:\"\\F0304\"}.mdi-judaism::before{content:\"\\F097A\"}.mdi-jump-rope::before{content:\"\\F12FF\"}.mdi-kabaddi::before{content:\"\\F0D87\"}.mdi-karate::before{content:\"\\F082C\"}.mdi-keg::before{content:\"\\F0305\"}.mdi-kettle::before{content:\"\\F05FA\"}.mdi-kettle-alert::before{content:\"\\F1317\"}.mdi-kettle-alert-outline::before{content:\"\\F1318\"}.mdi-kettle-off::before{content:\"\\F131B\"}.mdi-kettle-off-outline::before{content:\"\\F131C\"}.mdi-kettle-outline::before{content:\"\\F0F56\"}.mdi-kettle-steam::before{content:\"\\F1319\"}.mdi-kettle-steam-outline::before{content:\"\\F131A\"}.mdi-kettlebell::before{content:\"\\F1300\"}.mdi-key::before{content:\"\\F0306\"}.mdi-key-arrow-right::before{content:\"\\F1312\"}.mdi-key-change::before{content:\"\\F0307\"}.mdi-key-link::before{content:\"\\F119F\"}.mdi-key-minus::before{content:\"\\F0308\"}.mdi-key-outline::before{content:\"\\F0DD6\"}.mdi-key-plus::before{content:\"\\F0309\"}.mdi-key-remove::before{content:\"\\F030A\"}.mdi-key-star::before{content:\"\\F119E\"}.mdi-key-variant::before{content:\"\\F030B\"}.mdi-key-wireless::before{content:\"\\F0FC2\"}.mdi-keyboard::before{content:\"\\F030C\"}.mdi-keyboard-backspace::before{content:\"\\F030D\"}.mdi-keyboard-caps::before{content:\"\\F030E\"}.mdi-keyboard-close::before{content:\"\\F030F\"}.mdi-keyboard-esc::before{content:\"\\F12B7\"}.mdi-keyboard-f1::before{content:\"\\F12AB\"}.mdi-keyboard-f10::before{content:\"\\F12B4\"}.mdi-keyboard-f11::before{content:\"\\F12B5\"}.mdi-keyboard-f12::before{content:\"\\F12B6\"}.mdi-keyboard-f2::before{content:\"\\F12AC\"}.mdi-keyboard-f3::before{content:\"\\F12AD\"}.mdi-keyboard-f4::before{content:\"\\F12AE\"}.mdi-keyboard-f5::before{content:\"\\F12AF\"}.mdi-keyboard-f6::before{content:\"\\F12B0\"}.mdi-keyboard-f7::before{content:\"\\F12B1\"}.mdi-keyboard-f8::before{content:\"\\F12B2\"}.mdi-keyboard-f9::before{content:\"\\F12B3\"}.mdi-keyboard-off::before{content:\"\\F0310\"}.mdi-keyboard-off-outline::before{content:\"\\F0E4B\"}.mdi-keyboard-outline::before{content:\"\\F097B\"}.mdi-keyboard-return::before{content:\"\\F0311\"}.mdi-keyboard-settings::before{content:\"\\F09F9\"}.mdi-keyboard-settings-outline::before{content:\"\\F09FA\"}.mdi-keyboard-space::before{content:\"\\F1050\"}.mdi-keyboard-tab::before{content:\"\\F0312\"}.mdi-keyboard-variant::before{content:\"\\F0313\"}.mdi-khanda::before{content:\"\\F10FD\"}.mdi-kickstarter::before{content:\"\\F0745\"}.mdi-klingon::before{content:\"\\F135B\"}.mdi-knife::before{content:\"\\F09FB\"}.mdi-knife-military::before{content:\"\\F09FC\"}.mdi-kodi::before{content:\"\\F0314\"}.mdi-kubernetes::before{content:\"\\F10FE\"}.mdi-label::before{content:\"\\F0315\"}.mdi-label-multiple::before{content:\"\\F1375\"}.mdi-label-multiple-outline::before{content:\"\\F1376\"}.mdi-label-off::before{content:\"\\F0ACB\"}.mdi-label-off-outline::before{content:\"\\F0ACC\"}.mdi-label-outline::before{content:\"\\F0316\"}.mdi-label-percent::before{content:\"\\F12EA\"}.mdi-label-percent-outline::before{content:\"\\F12EB\"}.mdi-label-variant::before{content:\"\\F0ACD\"}.mdi-label-variant-outline::before{content:\"\\F0ACE\"}.mdi-ladybug::before{content:\"\\F082D\"}.mdi-lambda::before{content:\"\\F0627\"}.mdi-lamp::before{content:\"\\F06B5\"}.mdi-lan::before{content:\"\\F0317\"}.mdi-lan-check::before{content:\"\\F12AA\"}.mdi-lan-connect::before{content:\"\\F0318\"}.mdi-lan-disconnect::before{content:\"\\F0319\"}.mdi-lan-pending::before{content:\"\\F031A\"}.mdi-language-c::before{content:\"\\F0671\"}.mdi-language-cpp::before{content:\"\\F0672\"}.mdi-language-csharp::before{content:\"\\F031B\"}.mdi-language-css3::before{content:\"\\F031C\"}.mdi-language-fortran::before{content:\"\\F121A\"}.mdi-language-go::before{content:\"\\F07D3\"}.mdi-language-haskell::before{content:\"\\F0C92\"}.mdi-language-html5::before{content:\"\\F031D\"}.mdi-language-java::before{content:\"\\F0B37\"}.mdi-language-javascript::before{content:\"\\F031E\"}.mdi-language-kotlin::before{content:\"\\F1219\"}.mdi-language-lua::before{content:\"\\F08B1\"}.mdi-language-markdown::before{content:\"\\F0354\"}.mdi-language-markdown-outline::before{content:\"\\F0F5B\"}.mdi-language-php::before{content:\"\\F031F\"}.mdi-language-python::before{content:\"\\F0320\"}.mdi-language-r::before{content:\"\\F07D4\"}.mdi-language-ruby::before{content:\"\\F0D2D\"}.mdi-language-ruby-on-rails::before{content:\"\\F0ACF\"}.mdi-language-swift::before{content:\"\\F06E5\"}.mdi-language-typescript::before{content:\"\\F06E6\"}.mdi-language-xaml::before{content:\"\\F0673\"}.mdi-laptop::before{content:\"\\F0322\"}.mdi-laptop-chromebook::before{content:\"\\F0323\"}.mdi-laptop-mac::before{content:\"\\F0324\"}.mdi-laptop-off::before{content:\"\\F06E7\"}.mdi-laptop-windows::before{content:\"\\F0325\"}.mdi-laravel::before{content:\"\\F0AD0\"}.mdi-lasso::before{content:\"\\F0F03\"}.mdi-lastpass::before{content:\"\\F0446\"}.mdi-latitude::before{content:\"\\F0F57\"}.mdi-launch::before{content:\"\\F0327\"}.mdi-lava-lamp::before{content:\"\\F07D5\"}.mdi-layers::before{content:\"\\F0328\"}.mdi-layers-minus::before{content:\"\\F0E4C\"}.mdi-layers-off::before{content:\"\\F0329\"}.mdi-layers-off-outline::before{content:\"\\F09FD\"}.mdi-layers-outline::before{content:\"\\F09FE\"}.mdi-layers-plus::before{content:\"\\F0E4D\"}.mdi-layers-remove::before{content:\"\\F0E4E\"}.mdi-layers-search::before{content:\"\\F1206\"}.mdi-layers-search-outline::before{content:\"\\F1207\"}.mdi-layers-triple::before{content:\"\\F0F58\"}.mdi-layers-triple-outline::before{content:\"\\F0F59\"}.mdi-lead-pencil::before{content:\"\\F064F\"}.mdi-leaf::before{content:\"\\F032A\"}.mdi-leaf-maple::before{content:\"\\F0C93\"}.mdi-leaf-maple-off::before{content:\"\\F12DA\"}.mdi-leaf-off::before{content:\"\\F12D9\"}.mdi-leak::before{content:\"\\F0DD7\"}.mdi-leak-off::before{content:\"\\F0DD8\"}.mdi-led-off::before{content:\"\\F032B\"}.mdi-led-on::before{content:\"\\F032C\"}.mdi-led-outline::before{content:\"\\F032D\"}.mdi-led-strip::before{content:\"\\F07D6\"}.mdi-led-strip-variant::before{content:\"\\F1051\"}.mdi-led-variant-off::before{content:\"\\F032E\"}.mdi-led-variant-on::before{content:\"\\F032F\"}.mdi-led-variant-outline::before{content:\"\\F0330\"}.mdi-leek::before{content:\"\\F117D\"}.mdi-less-than::before{content:\"\\F097C\"}.mdi-less-than-or-equal::before{content:\"\\F097D\"}.mdi-library::before{content:\"\\F0331\"}.mdi-library-shelves::before{content:\"\\F0BA9\"}.mdi-license::before{content:\"\\F0FC3\"}.mdi-lifebuoy::before{content:\"\\F087E\"}.mdi-light-switch::before{content:\"\\F097E\"}.mdi-lightbulb::before{content:\"\\F0335\"}.mdi-lightbulb-cfl::before{content:\"\\F1208\"}.mdi-lightbulb-cfl-off::before{content:\"\\F1209\"}.mdi-lightbulb-cfl-spiral::before{content:\"\\F1275\"}.mdi-lightbulb-cfl-spiral-off::before{content:\"\\F12C3\"}.mdi-lightbulb-group::before{content:\"\\F1253\"}.mdi-lightbulb-group-off::before{content:\"\\F12CD\"}.mdi-lightbulb-group-off-outline::before{content:\"\\F12CE\"}.mdi-lightbulb-group-outline::before{content:\"\\F1254\"}.mdi-lightbulb-multiple::before{content:\"\\F1255\"}.mdi-lightbulb-multiple-off::before{content:\"\\F12CF\"}.mdi-lightbulb-multiple-off-outline::before{content:\"\\F12D0\"}.mdi-lightbulb-multiple-outline::before{content:\"\\F1256\"}.mdi-lightbulb-off::before{content:\"\\F0E4F\"}.mdi-lightbulb-off-outline::before{content:\"\\F0E50\"}.mdi-lightbulb-on::before{content:\"\\F06E8\"}.mdi-lightbulb-on-outline::before{content:\"\\F06E9\"}.mdi-lightbulb-outline::before{content:\"\\F0336\"}.mdi-lighthouse::before{content:\"\\F09FF\"}.mdi-lighthouse-on::before{content:\"\\F0A00\"}.mdi-link::before{content:\"\\F0337\"}.mdi-link-box::before{content:\"\\F0D1A\"}.mdi-link-box-outline::before{content:\"\\F0D1B\"}.mdi-link-box-variant::before{content:\"\\F0D1C\"}.mdi-link-box-variant-outline::before{content:\"\\F0D1D\"}.mdi-link-lock::before{content:\"\\F10BA\"}.mdi-link-off::before{content:\"\\F0338\"}.mdi-link-plus::before{content:\"\\F0C94\"}.mdi-link-variant::before{content:\"\\F0339\"}.mdi-link-variant-minus::before{content:\"\\F10FF\"}.mdi-link-variant-off::before{content:\"\\F033A\"}.mdi-link-variant-plus::before{content:\"\\F1100\"}.mdi-link-variant-remove::before{content:\"\\F1101\"}.mdi-linkedin::before{content:\"\\F033B\"}.mdi-linux::before{content:\"\\F033D\"}.mdi-linux-mint::before{content:\"\\F08ED\"}.mdi-lipstick::before{content:\"\\F13B5\"}.mdi-litecoin::before{content:\"\\F0A61\"}.mdi-loading::before{content:\"\\F0772\"}.mdi-location-enter::before{content:\"\\F0FC4\"}.mdi-location-exit::before{content:\"\\F0FC5\"}.mdi-lock::before{content:\"\\F033E\"}.mdi-lock-alert::before{content:\"\\F08EE\"}.mdi-lock-check::before{content:\"\\F139A\"}.mdi-lock-clock::before{content:\"\\F097F\"}.mdi-lock-open::before{content:\"\\F033F\"}.mdi-lock-open-alert::before{content:\"\\F139B\"}.mdi-lock-open-check::before{content:\"\\F139C\"}.mdi-lock-open-outline::before{content:\"\\F0340\"}.mdi-lock-open-variant::before{content:\"\\F0FC6\"}.mdi-lock-open-variant-outline::before{content:\"\\F0FC7\"}.mdi-lock-outline::before{content:\"\\F0341\"}.mdi-lock-pattern::before{content:\"\\F06EA\"}.mdi-lock-plus::before{content:\"\\F05FB\"}.mdi-lock-question::before{content:\"\\F08EF\"}.mdi-lock-reset::before{content:\"\\F0773\"}.mdi-lock-smart::before{content:\"\\F08B2\"}.mdi-locker::before{content:\"\\F07D7\"}.mdi-locker-multiple::before{content:\"\\F07D8\"}.mdi-login::before{content:\"\\F0342\"}.mdi-login-variant::before{content:\"\\F05FC\"}.mdi-logout::before{content:\"\\F0343\"}.mdi-logout-variant::before{content:\"\\F05FD\"}.mdi-longitude::before{content:\"\\F0F5A\"}.mdi-looks::before{content:\"\\F0344\"}.mdi-loupe::before{content:\"\\F0345\"}.mdi-lumx::before{content:\"\\F0346\"}.mdi-lungs::before{content:\"\\F1084\"}.mdi-magnet::before{content:\"\\F0347\"}.mdi-magnet-on::before{content:\"\\F0348\"}.mdi-magnify::before{content:\"\\F0349\"}.mdi-magnify-close::before{content:\"\\F0980\"}.mdi-magnify-minus::before{content:\"\\F034A\"}.mdi-magnify-minus-cursor::before{content:\"\\F0A62\"}.mdi-magnify-minus-outline::before{content:\"\\F06EC\"}.mdi-magnify-plus::before{content:\"\\F034B\"}.mdi-magnify-plus-cursor::before{content:\"\\F0A63\"}.mdi-magnify-plus-outline::before{content:\"\\F06ED\"}.mdi-magnify-remove-cursor::before{content:\"\\F120C\"}.mdi-magnify-remove-outline::before{content:\"\\F120D\"}.mdi-magnify-scan::before{content:\"\\F1276\"}.mdi-mail::before{content:\"\\F0EBB\"}.mdi-mailbox::before{content:\"\\F06EE\"}.mdi-mailbox-open::before{content:\"\\F0D88\"}.mdi-mailbox-open-outline::before{content:\"\\F0D89\"}.mdi-mailbox-open-up::before{content:\"\\F0D8A\"}.mdi-mailbox-open-up-outline::before{content:\"\\F0D8B\"}.mdi-mailbox-outline::before{content:\"\\F0D8C\"}.mdi-mailbox-up::before{content:\"\\F0D8D\"}.mdi-mailbox-up-outline::before{content:\"\\F0D8E\"}.mdi-map::before{content:\"\\F034D\"}.mdi-map-check::before{content:\"\\F0EBC\"}.mdi-map-check-outline::before{content:\"\\F0EBD\"}.mdi-map-clock::before{content:\"\\F0D1E\"}.mdi-map-clock-outline::before{content:\"\\F0D1F\"}.mdi-map-legend::before{content:\"\\F0A01\"}.mdi-map-marker::before{content:\"\\F034E\"}.mdi-map-marker-alert::before{content:\"\\F0F05\"}.mdi-map-marker-alert-outline::before{content:\"\\F0F06\"}.mdi-map-marker-check::before{content:\"\\F0C95\"}.mdi-map-marker-check-outline::before{content:\"\\F12FB\"}.mdi-map-marker-circle::before{content:\"\\F034F\"}.mdi-map-marker-distance::before{content:\"\\F08F0\"}.mdi-map-marker-down::before{content:\"\\F1102\"}.mdi-map-marker-left::before{content:\"\\F12DB\"}.mdi-map-marker-left-outline::before{content:\"\\F12DD\"}.mdi-map-marker-minus::before{content:\"\\F0650\"}.mdi-map-marker-minus-outline::before{content:\"\\F12F9\"}.mdi-map-marker-multiple::before{content:\"\\F0350\"}.mdi-map-marker-multiple-outline::before{content:\"\\F1277\"}.mdi-map-marker-off::before{content:\"\\F0351\"}.mdi-map-marker-off-outline::before{content:\"\\F12FD\"}.mdi-map-marker-outline::before{content:\"\\F07D9\"}.mdi-map-marker-path::before{content:\"\\F0D20\"}.mdi-map-marker-plus::before{content:\"\\F0651\"}.mdi-map-marker-plus-outline::before{content:\"\\F12F8\"}.mdi-map-marker-question::before{content:\"\\F0F07\"}.mdi-map-marker-question-outline::before{content:\"\\F0F08\"}.mdi-map-marker-radius::before{content:\"\\F0352\"}.mdi-map-marker-radius-outline::before{content:\"\\F12FC\"}.mdi-map-marker-remove::before{content:\"\\F0F09\"}.mdi-map-marker-remove-outline::before{content:\"\\F12FA\"}.mdi-map-marker-remove-variant::before{content:\"\\F0F0A\"}.mdi-map-marker-right::before{content:\"\\F12DC\"}.mdi-map-marker-right-outline::before{content:\"\\F12DE\"}.mdi-map-marker-up::before{content:\"\\F1103\"}.mdi-map-minus::before{content:\"\\F0981\"}.mdi-map-outline::before{content:\"\\F0982\"}.mdi-map-plus::before{content:\"\\F0983\"}.mdi-map-search::before{content:\"\\F0984\"}.mdi-map-search-outline::before{content:\"\\F0985\"}.mdi-mapbox::before{content:\"\\F0BAA\"}.mdi-margin::before{content:\"\\F0353\"}.mdi-marker::before{content:\"\\F0652\"}.mdi-marker-cancel::before{content:\"\\F0DD9\"}.mdi-marker-check::before{content:\"\\F0355\"}.mdi-mastodon::before{content:\"\\F0AD1\"}.mdi-material-design::before{content:\"\\F0986\"}.mdi-material-ui::before{content:\"\\F0357\"}.mdi-math-compass::before{content:\"\\F0358\"}.mdi-math-cos::before{content:\"\\F0C96\"}.mdi-math-integral::before{content:\"\\F0FC8\"}.mdi-math-integral-box::before{content:\"\\F0FC9\"}.mdi-math-log::before{content:\"\\F1085\"}.mdi-math-norm::before{content:\"\\F0FCA\"}.mdi-math-norm-box::before{content:\"\\F0FCB\"}.mdi-math-sin::before{content:\"\\F0C97\"}.mdi-math-tan::before{content:\"\\F0C98\"}.mdi-matrix::before{content:\"\\F0628\"}.mdi-medal::before{content:\"\\F0987\"}.mdi-medal-outline::before{content:\"\\F1326\"}.mdi-medical-bag::before{content:\"\\F06EF\"}.mdi-meditation::before{content:\"\\F117B\"}.mdi-memory::before{content:\"\\F035B\"}.mdi-menu::before{content:\"\\F035C\"}.mdi-menu-down::before{content:\"\\F035D\"}.mdi-menu-down-outline::before{content:\"\\F06B6\"}.mdi-menu-left::before{content:\"\\F035E\"}.mdi-menu-left-outline::before{content:\"\\F0A02\"}.mdi-menu-open::before{content:\"\\F0BAB\"}.mdi-menu-right::before{content:\"\\F035F\"}.mdi-menu-right-outline::before{content:\"\\F0A03\"}.mdi-menu-swap::before{content:\"\\F0A64\"}.mdi-menu-swap-outline::before{content:\"\\F0A65\"}.mdi-menu-up::before{content:\"\\F0360\"}.mdi-menu-up-outline::before{content:\"\\F06B7\"}.mdi-merge::before{content:\"\\F0F5C\"}.mdi-message::before{content:\"\\F0361\"}.mdi-message-alert::before{content:\"\\F0362\"}.mdi-message-alert-outline::before{content:\"\\F0A04\"}.mdi-message-arrow-left::before{content:\"\\F12F2\"}.mdi-message-arrow-left-outline::before{content:\"\\F12F3\"}.mdi-message-arrow-right::before{content:\"\\F12F4\"}.mdi-message-arrow-right-outline::before{content:\"\\F12F5\"}.mdi-message-bulleted::before{content:\"\\F06A2\"}.mdi-message-bulleted-off::before{content:\"\\F06A3\"}.mdi-message-cog::before{content:\"\\F06F1\"}.mdi-message-cog-outline::before{content:\"\\F1172\"}.mdi-message-draw::before{content:\"\\F0363\"}.mdi-message-image::before{content:\"\\F0364\"}.mdi-message-image-outline::before{content:\"\\F116C\"}.mdi-message-lock::before{content:\"\\F0FCC\"}.mdi-message-lock-outline::before{content:\"\\F116D\"}.mdi-message-minus::before{content:\"\\F116E\"}.mdi-message-minus-outline::before{content:\"\\F116F\"}.mdi-message-outline::before{content:\"\\F0365\"}.mdi-message-plus::before{content:\"\\F0653\"}.mdi-message-plus-outline::before{content:\"\\F10BB\"}.mdi-message-processing::before{content:\"\\F0366\"}.mdi-message-processing-outline::before{content:\"\\F1170\"}.mdi-message-reply::before{content:\"\\F0367\"}.mdi-message-reply-text::before{content:\"\\F0368\"}.mdi-message-settings::before{content:\"\\F06F0\"}.mdi-message-settings-outline::before{content:\"\\F1171\"}.mdi-message-text::before{content:\"\\F0369\"}.mdi-message-text-clock::before{content:\"\\F1173\"}.mdi-message-text-clock-outline::before{content:\"\\F1174\"}.mdi-message-text-lock::before{content:\"\\F0FCD\"}.mdi-message-text-lock-outline::before{content:\"\\F1175\"}.mdi-message-text-outline::before{content:\"\\F036A\"}.mdi-message-video::before{content:\"\\F036B\"}.mdi-meteor::before{content:\"\\F0629\"}.mdi-metronome::before{content:\"\\F07DA\"}.mdi-metronome-tick::before{content:\"\\F07DB\"}.mdi-micro-sd::before{content:\"\\F07DC\"}.mdi-microphone::before{content:\"\\F036C\"}.mdi-microphone-minus::before{content:\"\\F08B3\"}.mdi-microphone-off::before{content:\"\\F036D\"}.mdi-microphone-outline::before{content:\"\\F036E\"}.mdi-microphone-plus::before{content:\"\\F08B4\"}.mdi-microphone-settings::before{content:\"\\F036F\"}.mdi-microphone-variant::before{content:\"\\F0370\"}.mdi-microphone-variant-off::before{content:\"\\F0371\"}.mdi-microscope::before{content:\"\\F0654\"}.mdi-microsoft::before{content:\"\\F0372\"}.mdi-microsoft-access::before{content:\"\\F138E\"}.mdi-microsoft-azure::before{content:\"\\F0805\"}.mdi-microsoft-azure-devops::before{content:\"\\F0FD5\"}.mdi-microsoft-bing::before{content:\"\\F00A4\"}.mdi-microsoft-dynamics-365::before{content:\"\\F0988\"}.mdi-microsoft-edge::before{content:\"\\F01E9\"}.mdi-microsoft-edge-legacy::before{content:\"\\F1250\"}.mdi-microsoft-excel::before{content:\"\\F138F\"}.mdi-microsoft-internet-explorer::before{content:\"\\F0300\"}.mdi-microsoft-office::before{content:\"\\F03C6\"}.mdi-microsoft-onedrive::before{content:\"\\F03CA\"}.mdi-microsoft-onenote::before{content:\"\\F0747\"}.mdi-microsoft-outlook::before{content:\"\\F0D22\"}.mdi-microsoft-powerpoint::before{content:\"\\F1390\"}.mdi-microsoft-sharepoint::before{content:\"\\F1391\"}.mdi-microsoft-teams::before{content:\"\\F02BB\"}.mdi-microsoft-visual-studio::before{content:\"\\F0610\"}.mdi-microsoft-visual-studio-code::before{content:\"\\F0A1E\"}.mdi-microsoft-windows::before{content:\"\\F05B3\"}.mdi-microsoft-windows-classic::before{content:\"\\F0A21\"}.mdi-microsoft-word::before{content:\"\\F1392\"}.mdi-microsoft-xbox::before{content:\"\\F05B9\"}.mdi-microsoft-xbox-controller::before{content:\"\\F05BA\"}.mdi-microsoft-xbox-controller-battery-alert::before{content:\"\\F074B\"}.mdi-microsoft-xbox-controller-battery-charging::before{content:\"\\F0A22\"}.mdi-microsoft-xbox-controller-battery-empty::before{content:\"\\F074C\"}.mdi-microsoft-xbox-controller-battery-full::before{content:\"\\F074D\"}.mdi-microsoft-xbox-controller-battery-low::before{content:\"\\F074E\"}.mdi-microsoft-xbox-controller-battery-medium::before{content:\"\\F074F\"}.mdi-microsoft-xbox-controller-battery-unknown::before{content:\"\\F0750\"}.mdi-microsoft-xbox-controller-menu::before{content:\"\\F0E6F\"}.mdi-microsoft-xbox-controller-off::before{content:\"\\F05BB\"}.mdi-microsoft-xbox-controller-view::before{content:\"\\F0E70\"}.mdi-microsoft-yammer::before{content:\"\\F0789\"}.mdi-microwave::before{content:\"\\F0C99\"}.mdi-middleware::before{content:\"\\F0F5D\"}.mdi-middleware-outline::before{content:\"\\F0F5E\"}.mdi-midi::before{content:\"\\F08F1\"}.mdi-midi-port::before{content:\"\\F08F2\"}.mdi-mine::before{content:\"\\F0DDA\"}.mdi-minecraft::before{content:\"\\F0373\"}.mdi-mini-sd::before{content:\"\\F0A05\"}.mdi-minidisc::before{content:\"\\F0A06\"}.mdi-minus::before{content:\"\\F0374\"}.mdi-minus-box::before{content:\"\\F0375\"}.mdi-minus-box-multiple::before{content:\"\\F1141\"}.mdi-minus-box-multiple-outline::before{content:\"\\F1142\"}.mdi-minus-box-outline::before{content:\"\\F06F2\"}.mdi-minus-circle::before{content:\"\\F0376\"}.mdi-minus-circle-multiple::before{content:\"\\F035A\"}.mdi-minus-circle-multiple-outline::before{content:\"\\F0AD3\"}.mdi-minus-circle-outline::before{content:\"\\F0377\"}.mdi-minus-network::before{content:\"\\F0378\"}.mdi-minus-network-outline::before{content:\"\\F0C9A\"}.mdi-mirror::before{content:\"\\F11FD\"}.mdi-mixed-martial-arts::before{content:\"\\F0D8F\"}.mdi-mixed-reality::before{content:\"\\F087F\"}.mdi-mixer::before{content:\"\\F07DD\"}.mdi-molecule::before{content:\"\\F0BAC\"}.mdi-molecule-co::before{content:\"\\F12FE\"}.mdi-molecule-co2::before{content:\"\\F07E4\"}.mdi-monitor::before{content:\"\\F0379\"}.mdi-monitor-cellphone::before{content:\"\\F0989\"}.mdi-monitor-cellphone-star::before{content:\"\\F098A\"}.mdi-monitor-clean::before{content:\"\\F1104\"}.mdi-monitor-dashboard::before{content:\"\\F0A07\"}.mdi-monitor-edit::before{content:\"\\F12C6\"}.mdi-monitor-eye::before{content:\"\\F13B4\"}.mdi-monitor-lock::before{content:\"\\F0DDB\"}.mdi-monitor-multiple::before{content:\"\\F037A\"}.mdi-monitor-off::before{content:\"\\F0D90\"}.mdi-monitor-screenshot::before{content:\"\\F0E51\"}.mdi-monitor-speaker::before{content:\"\\F0F5F\"}.mdi-monitor-speaker-off::before{content:\"\\F0F60\"}.mdi-monitor-star::before{content:\"\\F0DDC\"}.mdi-moon-first-quarter::before{content:\"\\F0F61\"}.mdi-moon-full::before{content:\"\\F0F62\"}.mdi-moon-last-quarter::before{content:\"\\F0F63\"}.mdi-moon-new::before{content:\"\\F0F64\"}.mdi-moon-waning-crescent::before{content:\"\\F0F65\"}.mdi-moon-waning-gibbous::before{content:\"\\F0F66\"}.mdi-moon-waxing-crescent::before{content:\"\\F0F67\"}.mdi-moon-waxing-gibbous::before{content:\"\\F0F68\"}.mdi-moped::before{content:\"\\F1086\"}.mdi-more::before{content:\"\\F037B\"}.mdi-mother-heart::before{content:\"\\F1314\"}.mdi-mother-nurse::before{content:\"\\F0D21\"}.mdi-motion-sensor::before{content:\"\\F0D91\"}.mdi-motorbike::before{content:\"\\F037C\"}.mdi-mouse::before{content:\"\\F037D\"}.mdi-mouse-bluetooth::before{content:\"\\F098B\"}.mdi-mouse-off::before{content:\"\\F037E\"}.mdi-mouse-variant::before{content:\"\\F037F\"}.mdi-mouse-variant-off::before{content:\"\\F0380\"}.mdi-move-resize::before{content:\"\\F0655\"}.mdi-move-resize-variant::before{content:\"\\F0656\"}.mdi-movie::before{content:\"\\F0381\"}.mdi-movie-edit::before{content:\"\\F1122\"}.mdi-movie-edit-outline::before{content:\"\\F1123\"}.mdi-movie-filter::before{content:\"\\F1124\"}.mdi-movie-filter-outline::before{content:\"\\F1125\"}.mdi-movie-open::before{content:\"\\F0FCE\"}.mdi-movie-open-outline::before{content:\"\\F0FCF\"}.mdi-movie-outline::before{content:\"\\F0DDD\"}.mdi-movie-roll::before{content:\"\\F07DE\"}.mdi-movie-search::before{content:\"\\F11D2\"}.mdi-movie-search-outline::before{content:\"\\F11D3\"}.mdi-muffin::before{content:\"\\F098C\"}.mdi-multiplication::before{content:\"\\F0382\"}.mdi-multiplication-box::before{content:\"\\F0383\"}.mdi-mushroom::before{content:\"\\F07DF\"}.mdi-mushroom-outline::before{content:\"\\F07E0\"}.mdi-music::before{content:\"\\F075A\"}.mdi-music-accidental-double-flat::before{content:\"\\F0F69\"}.mdi-music-accidental-double-sharp::before{content:\"\\F0F6A\"}.mdi-music-accidental-flat::before{content:\"\\F0F6B\"}.mdi-music-accidental-natural::before{content:\"\\F0F6C\"}.mdi-music-accidental-sharp::before{content:\"\\F0F6D\"}.mdi-music-box::before{content:\"\\F0384\"}.mdi-music-box-multiple::before{content:\"\\F0333\"}.mdi-music-box-multiple-outline::before{content:\"\\F0F04\"}.mdi-music-box-outline::before{content:\"\\F0385\"}.mdi-music-circle::before{content:\"\\F0386\"}.mdi-music-circle-outline::before{content:\"\\F0AD4\"}.mdi-music-clef-alto::before{content:\"\\F0F6E\"}.mdi-music-clef-bass::before{content:\"\\F0F6F\"}.mdi-music-clef-treble::before{content:\"\\F0F70\"}.mdi-music-note::before{content:\"\\F0387\"}.mdi-music-note-bluetooth::before{content:\"\\F05FE\"}.mdi-music-note-bluetooth-off::before{content:\"\\F05FF\"}.mdi-music-note-eighth::before{content:\"\\F0388\"}.mdi-music-note-eighth-dotted::before{content:\"\\F0F71\"}.mdi-music-note-half::before{content:\"\\F0389\"}.mdi-music-note-half-dotted::before{content:\"\\F0F72\"}.mdi-music-note-off::before{content:\"\\F038A\"}.mdi-music-note-off-outline::before{content:\"\\F0F73\"}.mdi-music-note-outline::before{content:\"\\F0F74\"}.mdi-music-note-plus::before{content:\"\\F0DDE\"}.mdi-music-note-quarter::before{content:\"\\F038B\"}.mdi-music-note-quarter-dotted::before{content:\"\\F0F75\"}.mdi-music-note-sixteenth::before{content:\"\\F038C\"}.mdi-music-note-sixteenth-dotted::before{content:\"\\F0F76\"}.mdi-music-note-whole::before{content:\"\\F038D\"}.mdi-music-note-whole-dotted::before{content:\"\\F0F77\"}.mdi-music-off::before{content:\"\\F075B\"}.mdi-music-rest-eighth::before{content:\"\\F0F78\"}.mdi-music-rest-half::before{content:\"\\F0F79\"}.mdi-music-rest-quarter::before{content:\"\\F0F7A\"}.mdi-music-rest-sixteenth::before{content:\"\\F0F7B\"}.mdi-music-rest-whole::before{content:\"\\F0F7C\"}.mdi-nail::before{content:\"\\F0DDF\"}.mdi-nas::before{content:\"\\F08F3\"}.mdi-nativescript::before{content:\"\\F0880\"}.mdi-nature::before{content:\"\\F038E\"}.mdi-nature-people::before{content:\"\\F038F\"}.mdi-navigation::before{content:\"\\F0390\"}.mdi-near-me::before{content:\"\\F05CD\"}.mdi-necklace::before{content:\"\\F0F0B\"}.mdi-needle::before{content:\"\\F0391\"}.mdi-netflix::before{content:\"\\F0746\"}.mdi-network::before{content:\"\\F06F3\"}.mdi-network-off::before{content:\"\\F0C9B\"}.mdi-network-off-outline::before{content:\"\\F0C9C\"}.mdi-network-outline::before{content:\"\\F0C9D\"}.mdi-network-strength-1::before{content:\"\\F08F4\"}.mdi-network-strength-1-alert::before{content:\"\\F08F5\"}.mdi-network-strength-2::before{content:\"\\F08F6\"}.mdi-network-strength-2-alert::before{content:\"\\F08F7\"}.mdi-network-strength-3::before{content:\"\\F08F8\"}.mdi-network-strength-3-alert::before{content:\"\\F08F9\"}.mdi-network-strength-4::before{content:\"\\F08FA\"}.mdi-network-strength-4-alert::before{content:\"\\F08FB\"}.mdi-network-strength-off::before{content:\"\\F08FC\"}.mdi-network-strength-off-outline::before{content:\"\\F08FD\"}.mdi-network-strength-outline::before{content:\"\\F08FE\"}.mdi-new-box::before{content:\"\\F0394\"}.mdi-newspaper::before{content:\"\\F0395\"}.mdi-newspaper-minus::before{content:\"\\F0F0C\"}.mdi-newspaper-plus::before{content:\"\\F0F0D\"}.mdi-newspaper-variant::before{content:\"\\F1001\"}.mdi-newspaper-variant-multiple::before{content:\"\\F1002\"}.mdi-newspaper-variant-multiple-outline::before{content:\"\\F1003\"}.mdi-newspaper-variant-outline::before{content:\"\\F1004\"}.mdi-nfc::before{content:\"\\F0396\"}.mdi-nfc-search-variant::before{content:\"\\F0E53\"}.mdi-nfc-tap::before{content:\"\\F0397\"}.mdi-nfc-variant::before{content:\"\\F0398\"}.mdi-nfc-variant-off::before{content:\"\\F0E54\"}.mdi-ninja::before{content:\"\\F0774\"}.mdi-nintendo-game-boy::before{content:\"\\F1393\"}.mdi-nintendo-switch::before{content:\"\\F07E1\"}.mdi-nintendo-wii::before{content:\"\\F05AB\"}.mdi-nintendo-wiiu::before{content:\"\\F072D\"}.mdi-nix::before{content:\"\\F1105\"}.mdi-nodejs::before{content:\"\\F0399\"}.mdi-noodles::before{content:\"\\F117E\"}.mdi-not-equal::before{content:\"\\F098D\"}.mdi-not-equal-variant::before{content:\"\\F098E\"}.mdi-note::before{content:\"\\F039A\"}.mdi-note-multiple::before{content:\"\\F06B8\"}.mdi-note-multiple-outline::before{content:\"\\F06B9\"}.mdi-note-outline::before{content:\"\\F039B\"}.mdi-note-plus::before{content:\"\\F039C\"}.mdi-note-plus-outline::before{content:\"\\F039D\"}.mdi-note-text::before{content:\"\\F039E\"}.mdi-note-text-outline::before{content:\"\\F11D7\"}.mdi-notebook::before{content:\"\\F082E\"}.mdi-notebook-multiple::before{content:\"\\F0E55\"}.mdi-notebook-outline::before{content:\"\\F0EBF\"}.mdi-notification-clear-all::before{content:\"\\F039F\"}.mdi-npm::before{content:\"\\F06F7\"}.mdi-nuke::before{content:\"\\F06A4\"}.mdi-null::before{content:\"\\F07E2\"}.mdi-numeric::before{content:\"\\F03A0\"}.mdi-numeric-0::before{content:\"\\F0B39\"}.mdi-numeric-0-box::before{content:\"\\F03A1\"}.mdi-numeric-0-box-multiple::before{content:\"\\F0F0E\"}.mdi-numeric-0-box-multiple-outline::before{content:\"\\F03A2\"}.mdi-numeric-0-box-outline::before{content:\"\\F03A3\"}.mdi-numeric-0-circle::before{content:\"\\F0C9E\"}.mdi-numeric-0-circle-outline::before{content:\"\\F0C9F\"}.mdi-numeric-1::before{content:\"\\F0B3A\"}.mdi-numeric-1-box::before{content:\"\\F03A4\"}.mdi-numeric-1-box-multiple::before{content:\"\\F0F0F\"}.mdi-numeric-1-box-multiple-outline::before{content:\"\\F03A5\"}.mdi-numeric-1-box-outline::before{content:\"\\F03A6\"}.mdi-numeric-1-circle::before{content:\"\\F0CA0\"}.mdi-numeric-1-circle-outline::before{content:\"\\F0CA1\"}.mdi-numeric-10::before{content:\"\\F0FE9\"}.mdi-numeric-10-box::before{content:\"\\F0F7D\"}.mdi-numeric-10-box-multiple::before{content:\"\\F0FEA\"}.mdi-numeric-10-box-multiple-outline::before{content:\"\\F0FEB\"}.mdi-numeric-10-box-outline::before{content:\"\\F0F7E\"}.mdi-numeric-10-circle::before{content:\"\\F0FEC\"}.mdi-numeric-10-circle-outline::before{content:\"\\F0FED\"}.mdi-numeric-2::before{content:\"\\F0B3B\"}.mdi-numeric-2-box::before{content:\"\\F03A7\"}.mdi-numeric-2-box-multiple::before{content:\"\\F0F10\"}.mdi-numeric-2-box-multiple-outline::before{content:\"\\F03A8\"}.mdi-numeric-2-box-outline::before{content:\"\\F03A9\"}.mdi-numeric-2-circle::before{content:\"\\F0CA2\"}.mdi-numeric-2-circle-outline::before{content:\"\\F0CA3\"}.mdi-numeric-3::before{content:\"\\F0B3C\"}.mdi-numeric-3-box::before{content:\"\\F03AA\"}.mdi-numeric-3-box-multiple::before{content:\"\\F0F11\"}.mdi-numeric-3-box-multiple-outline::before{content:\"\\F03AB\"}.mdi-numeric-3-box-outline::before{content:\"\\F03AC\"}.mdi-numeric-3-circle::before{content:\"\\F0CA4\"}.mdi-numeric-3-circle-outline::before{content:\"\\F0CA5\"}.mdi-numeric-4::before{content:\"\\F0B3D\"}.mdi-numeric-4-box::before{content:\"\\F03AD\"}.mdi-numeric-4-box-multiple::before{content:\"\\F0F12\"}.mdi-numeric-4-box-multiple-outline::before{content:\"\\F03B2\"}.mdi-numeric-4-box-outline::before{content:\"\\F03AE\"}.mdi-numeric-4-circle::before{content:\"\\F0CA6\"}.mdi-numeric-4-circle-outline::before{content:\"\\F0CA7\"}.mdi-numeric-5::before{content:\"\\F0B3E\"}.mdi-numeric-5-box::before{content:\"\\F03B1\"}.mdi-numeric-5-box-multiple::before{content:\"\\F0F13\"}.mdi-numeric-5-box-multiple-outline::before{content:\"\\F03AF\"}.mdi-numeric-5-box-outline::before{content:\"\\F03B0\"}.mdi-numeric-5-circle::before{content:\"\\F0CA8\"}.mdi-numeric-5-circle-outline::before{content:\"\\F0CA9\"}.mdi-numeric-6::before{content:\"\\F0B3F\"}.mdi-numeric-6-box::before{content:\"\\F03B3\"}.mdi-numeric-6-box-multiple::before{content:\"\\F0F14\"}.mdi-numeric-6-box-multiple-outline::before{content:\"\\F03B4\"}.mdi-numeric-6-box-outline::before{content:\"\\F03B5\"}.mdi-numeric-6-circle::before{content:\"\\F0CAA\"}.mdi-numeric-6-circle-outline::before{content:\"\\F0CAB\"}.mdi-numeric-7::before{content:\"\\F0B40\"}.mdi-numeric-7-box::before{content:\"\\F03B6\"}.mdi-numeric-7-box-multiple::before{content:\"\\F0F15\"}.mdi-numeric-7-box-multiple-outline::before{content:\"\\F03B7\"}.mdi-numeric-7-box-outline::before{content:\"\\F03B8\"}.mdi-numeric-7-circle::before{content:\"\\F0CAC\"}.mdi-numeric-7-circle-outline::before{content:\"\\F0CAD\"}.mdi-numeric-8::before{content:\"\\F0B41\"}.mdi-numeric-8-box::before{content:\"\\F03B9\"}.mdi-numeric-8-box-multiple::before{content:\"\\F0F16\"}.mdi-numeric-8-box-multiple-outline::before{content:\"\\F03BA\"}.mdi-numeric-8-box-outline::before{content:\"\\F03BB\"}.mdi-numeric-8-circle::before{content:\"\\F0CAE\"}.mdi-numeric-8-circle-outline::before{content:\"\\F0CAF\"}.mdi-numeric-9::before{content:\"\\F0B42\"}.mdi-numeric-9-box::before{content:\"\\F03BC\"}.mdi-numeric-9-box-multiple::before{content:\"\\F0F17\"}.mdi-numeric-9-box-multiple-outline::before{content:\"\\F03BD\"}.mdi-numeric-9-box-outline::before{content:\"\\F03BE\"}.mdi-numeric-9-circle::before{content:\"\\F0CB0\"}.mdi-numeric-9-circle-outline::before{content:\"\\F0CB1\"}.mdi-numeric-9-plus::before{content:\"\\F0FEE\"}.mdi-numeric-9-plus-box::before{content:\"\\F03BF\"}.mdi-numeric-9-plus-box-multiple::before{content:\"\\F0F18\"}.mdi-numeric-9-plus-box-multiple-outline::before{content:\"\\F03C0\"}.mdi-numeric-9-plus-box-outline::before{content:\"\\F03C1\"}.mdi-numeric-9-plus-circle::before{content:\"\\F0CB2\"}.mdi-numeric-9-plus-circle-outline::before{content:\"\\F0CB3\"}.mdi-numeric-negative-1::before{content:\"\\F1052\"}.mdi-nut::before{content:\"\\F06F8\"}.mdi-nutrition::before{content:\"\\F03C2\"}.mdi-nuxt::before{content:\"\\F1106\"}.mdi-oar::before{content:\"\\F067C\"}.mdi-ocarina::before{content:\"\\F0DE0\"}.mdi-oci::before{content:\"\\F12E9\"}.mdi-ocr::before{content:\"\\F113A\"}.mdi-octagon::before{content:\"\\F03C3\"}.mdi-octagon-outline::before{content:\"\\F03C4\"}.mdi-octagram::before{content:\"\\F06F9\"}.mdi-octagram-outline::before{content:\"\\F0775\"}.mdi-odnoklassniki::before{content:\"\\F03C5\"}.mdi-offer::before{content:\"\\F121B\"}.mdi-office-building::before{content:\"\\F0991\"}.mdi-oil::before{content:\"\\F03C7\"}.mdi-oil-lamp::before{content:\"\\F0F19\"}.mdi-oil-level::before{content:\"\\F1053\"}.mdi-oil-temperature::before{content:\"\\F0FF8\"}.mdi-omega::before{content:\"\\F03C9\"}.mdi-one-up::before{content:\"\\F0BAD\"}.mdi-onepassword::before{content:\"\\F0881\"}.mdi-opacity::before{content:\"\\F05CC\"}.mdi-open-in-app::before{content:\"\\F03CB\"}.mdi-open-in-new::before{content:\"\\F03CC\"}.mdi-open-source-initiative::before{content:\"\\F0BAE\"}.mdi-openid::before{content:\"\\F03CD\"}.mdi-opera::before{content:\"\\F03CE\"}.mdi-orbit::before{content:\"\\F0018\"}.mdi-order-alphabetical-ascending::before{content:\"\\F020D\"}.mdi-order-alphabetical-descending::before{content:\"\\F0D07\"}.mdi-order-bool-ascending::before{content:\"\\F02BE\"}.mdi-order-bool-ascending-variant::before{content:\"\\F098F\"}.mdi-order-bool-descending::before{content:\"\\F1384\"}.mdi-order-bool-descending-variant::before{content:\"\\F0990\"}.mdi-order-numeric-ascending::before{content:\"\\F0545\"}.mdi-order-numeric-descending::before{content:\"\\F0546\"}.mdi-origin::before{content:\"\\F0B43\"}.mdi-ornament::before{content:\"\\F03CF\"}.mdi-ornament-variant::before{content:\"\\F03D0\"}.mdi-outdoor-lamp::before{content:\"\\F1054\"}.mdi-overscan::before{content:\"\\F1005\"}.mdi-owl::before{content:\"\\F03D2\"}.mdi-pac-man::before{content:\"\\F0BAF\"}.mdi-package::before{content:\"\\F03D3\"}.mdi-package-down::before{content:\"\\F03D4\"}.mdi-package-up::before{content:\"\\F03D5\"}.mdi-package-variant::before{content:\"\\F03D6\"}.mdi-package-variant-closed::before{content:\"\\F03D7\"}.mdi-page-first::before{content:\"\\F0600\"}.mdi-page-last::before{content:\"\\F0601\"}.mdi-page-layout-body::before{content:\"\\F06FA\"}.mdi-page-layout-footer::before{content:\"\\F06FB\"}.mdi-page-layout-header::before{content:\"\\F06FC\"}.mdi-page-layout-header-footer::before{content:\"\\F0F7F\"}.mdi-page-layout-sidebar-left::before{content:\"\\F06FD\"}.mdi-page-layout-sidebar-right::before{content:\"\\F06FE\"}.mdi-page-next::before{content:\"\\F0BB0\"}.mdi-page-next-outline::before{content:\"\\F0BB1\"}.mdi-page-previous::before{content:\"\\F0BB2\"}.mdi-page-previous-outline::before{content:\"\\F0BB3\"}.mdi-palette::before{content:\"\\F03D8\"}.mdi-palette-advanced::before{content:\"\\F03D9\"}.mdi-palette-outline::before{content:\"\\F0E0C\"}.mdi-palette-swatch::before{content:\"\\F08B5\"}.mdi-palette-swatch-outline::before{content:\"\\F135C\"}.mdi-palm-tree::before{content:\"\\F1055\"}.mdi-pan::before{content:\"\\F0BB4\"}.mdi-pan-bottom-left::before{content:\"\\F0BB5\"}.mdi-pan-bottom-right::before{content:\"\\F0BB6\"}.mdi-pan-down::before{content:\"\\F0BB7\"}.mdi-pan-horizontal::before{content:\"\\F0BB8\"}.mdi-pan-left::before{content:\"\\F0BB9\"}.mdi-pan-right::before{content:\"\\F0BBA\"}.mdi-pan-top-left::before{content:\"\\F0BBB\"}.mdi-pan-top-right::before{content:\"\\F0BBC\"}.mdi-pan-up::before{content:\"\\F0BBD\"}.mdi-pan-vertical::before{content:\"\\F0BBE\"}.mdi-panda::before{content:\"\\F03DA\"}.mdi-pandora::before{content:\"\\F03DB\"}.mdi-panorama::before{content:\"\\F03DC\"}.mdi-panorama-fisheye::before{content:\"\\F03DD\"}.mdi-panorama-horizontal::before{content:\"\\F03DE\"}.mdi-panorama-vertical::before{content:\"\\F03DF\"}.mdi-panorama-wide-angle::before{content:\"\\F03E0\"}.mdi-paper-cut-vertical::before{content:\"\\F03E1\"}.mdi-paper-roll::before{content:\"\\F1157\"}.mdi-paper-roll-outline::before{content:\"\\F1158\"}.mdi-paperclip::before{content:\"\\F03E2\"}.mdi-parachute::before{content:\"\\F0CB4\"}.mdi-parachute-outline::before{content:\"\\F0CB5\"}.mdi-parking::before{content:\"\\F03E3\"}.mdi-party-popper::before{content:\"\\F1056\"}.mdi-passport::before{content:\"\\F07E3\"}.mdi-passport-biometric::before{content:\"\\F0DE1\"}.mdi-pasta::before{content:\"\\F1160\"}.mdi-patio-heater::before{content:\"\\F0F80\"}.mdi-patreon::before{content:\"\\F0882\"}.mdi-pause::before{content:\"\\F03E4\"}.mdi-pause-circle::before{content:\"\\F03E5\"}.mdi-pause-circle-outline::before{content:\"\\F03E6\"}.mdi-pause-octagon::before{content:\"\\F03E7\"}.mdi-pause-octagon-outline::before{content:\"\\F03E8\"}.mdi-paw::before{content:\"\\F03E9\"}.mdi-paw-off::before{content:\"\\F0657\"}.mdi-pdf-box::before{content:\"\\F0E56\"}.mdi-peace::before{content:\"\\F0884\"}.mdi-peanut::before{content:\"\\F0FFC\"}.mdi-peanut-off::before{content:\"\\F0FFD\"}.mdi-peanut-off-outline::before{content:\"\\F0FFF\"}.mdi-peanut-outline::before{content:\"\\F0FFE\"}.mdi-pen::before{content:\"\\F03EA\"}.mdi-pen-lock::before{content:\"\\F0DE2\"}.mdi-pen-minus::before{content:\"\\F0DE3\"}.mdi-pen-off::before{content:\"\\F0DE4\"}.mdi-pen-plus::before{content:\"\\F0DE5\"}.mdi-pen-remove::before{content:\"\\F0DE6\"}.mdi-pencil::before{content:\"\\F03EB\"}.mdi-pencil-box::before{content:\"\\F03EC\"}.mdi-pencil-box-multiple::before{content:\"\\F1144\"}.mdi-pencil-box-multiple-outline::before{content:\"\\F1145\"}.mdi-pencil-box-outline::before{content:\"\\F03ED\"}.mdi-pencil-circle::before{content:\"\\F06FF\"}.mdi-pencil-circle-outline::before{content:\"\\F0776\"}.mdi-pencil-lock::before{content:\"\\F03EE\"}.mdi-pencil-lock-outline::before{content:\"\\F0DE7\"}.mdi-pencil-minus::before{content:\"\\F0DE8\"}.mdi-pencil-minus-outline::before{content:\"\\F0DE9\"}.mdi-pencil-off::before{content:\"\\F03EF\"}.mdi-pencil-off-outline::before{content:\"\\F0DEA\"}.mdi-pencil-outline::before{content:\"\\F0CB6\"}.mdi-pencil-plus::before{content:\"\\F0DEB\"}.mdi-pencil-plus-outline::before{content:\"\\F0DEC\"}.mdi-pencil-remove::before{content:\"\\F0DED\"}.mdi-pencil-remove-outline::before{content:\"\\F0DEE\"}.mdi-pencil-ruler::before{content:\"\\F1353\"}.mdi-penguin::before{content:\"\\F0EC0\"}.mdi-pentagon::before{content:\"\\F0701\"}.mdi-pentagon-outline::before{content:\"\\F0700\"}.mdi-percent::before{content:\"\\F03F0\"}.mdi-percent-outline::before{content:\"\\F1278\"}.mdi-periodic-table::before{content:\"\\F08B6\"}.mdi-perspective-less::before{content:\"\\F0D23\"}.mdi-perspective-more::before{content:\"\\F0D24\"}.mdi-pharmacy::before{content:\"\\F03F1\"}.mdi-phone::before{content:\"\\F03F2\"}.mdi-phone-alert::before{content:\"\\F0F1A\"}.mdi-phone-alert-outline::before{content:\"\\F118E\"}.mdi-phone-bluetooth::before{content:\"\\F03F3\"}.mdi-phone-bluetooth-outline::before{content:\"\\F118F\"}.mdi-phone-cancel::before{content:\"\\F10BC\"}.mdi-phone-cancel-outline::before{content:\"\\F1190\"}.mdi-phone-check::before{content:\"\\F11A9\"}.mdi-phone-check-outline::before{content:\"\\F11AA\"}.mdi-phone-classic::before{content:\"\\F0602\"}.mdi-phone-classic-off::before{content:\"\\F1279\"}.mdi-phone-forward::before{content:\"\\F03F4\"}.mdi-phone-forward-outline::before{content:\"\\F1191\"}.mdi-phone-hangup::before{content:\"\\F03F5\"}.mdi-phone-hangup-outline::before{content:\"\\F1192\"}.mdi-phone-in-talk::before{content:\"\\F03F6\"}.mdi-phone-in-talk-outline::before{content:\"\\F1182\"}.mdi-phone-incoming::before{content:\"\\F03F7\"}.mdi-phone-incoming-outline::before{content:\"\\F1193\"}.mdi-phone-lock::before{content:\"\\F03F8\"}.mdi-phone-lock-outline::before{content:\"\\F1194\"}.mdi-phone-log::before{content:\"\\F03F9\"}.mdi-phone-log-outline::before{content:\"\\F1195\"}.mdi-phone-message::before{content:\"\\F1196\"}.mdi-phone-message-outline::before{content:\"\\F1197\"}.mdi-phone-minus::before{content:\"\\F0658\"}.mdi-phone-minus-outline::before{content:\"\\F1198\"}.mdi-phone-missed::before{content:\"\\F03FA\"}.mdi-phone-missed-outline::before{content:\"\\F11A5\"}.mdi-phone-off::before{content:\"\\F0DEF\"}.mdi-phone-off-outline::before{content:\"\\F11A6\"}.mdi-phone-outgoing::before{content:\"\\F03FB\"}.mdi-phone-outgoing-outline::before{content:\"\\F1199\"}.mdi-phone-outline::before{content:\"\\F0DF0\"}.mdi-phone-paused::before{content:\"\\F03FC\"}.mdi-phone-paused-outline::before{content:\"\\F119A\"}.mdi-phone-plus::before{content:\"\\F0659\"}.mdi-phone-plus-outline::before{content:\"\\F119B\"}.mdi-phone-return::before{content:\"\\F082F\"}.mdi-phone-return-outline::before{content:\"\\F119C\"}.mdi-phone-ring::before{content:\"\\F11AB\"}.mdi-phone-ring-outline::before{content:\"\\F11AC\"}.mdi-phone-rotate-landscape::before{content:\"\\F0885\"}.mdi-phone-rotate-portrait::before{content:\"\\F0886\"}.mdi-phone-settings::before{content:\"\\F03FD\"}.mdi-phone-settings-outline::before{content:\"\\F119D\"}.mdi-phone-voip::before{content:\"\\F03FE\"}.mdi-pi::before{content:\"\\F03FF\"}.mdi-pi-box::before{content:\"\\F0400\"}.mdi-pi-hole::before{content:\"\\F0DF1\"}.mdi-piano::before{content:\"\\F067D\"}.mdi-pickaxe::before{content:\"\\F08B7\"}.mdi-picture-in-picture-bottom-right::before{content:\"\\F0E57\"}.mdi-picture-in-picture-bottom-right-outline::before{content:\"\\F0E58\"}.mdi-picture-in-picture-top-right::before{content:\"\\F0E59\"}.mdi-picture-in-picture-top-right-outline::before{content:\"\\F0E5A\"}.mdi-pier::before{content:\"\\F0887\"}.mdi-pier-crane::before{content:\"\\F0888\"}.mdi-pig::before{content:\"\\F0401\"}.mdi-pig-variant::before{content:\"\\F1006\"}.mdi-piggy-bank::before{content:\"\\F1007\"}.mdi-pill::before{content:\"\\F0402\"}.mdi-pillar::before{content:\"\\F0702\"}.mdi-pin::before{content:\"\\F0403\"}.mdi-pin-off::before{content:\"\\F0404\"}.mdi-pin-off-outline::before{content:\"\\F0930\"}.mdi-pin-outline::before{content:\"\\F0931\"}.mdi-pine-tree::before{content:\"\\F0405\"}.mdi-pine-tree-box::before{content:\"\\F0406\"}.mdi-pinterest::before{content:\"\\F0407\"}.mdi-pinwheel::before{content:\"\\F0AD5\"}.mdi-pinwheel-outline::before{content:\"\\F0AD6\"}.mdi-pipe::before{content:\"\\F07E5\"}.mdi-pipe-disconnected::before{content:\"\\F07E6\"}.mdi-pipe-leak::before{content:\"\\F0889\"}.mdi-pipe-wrench::before{content:\"\\F1354\"}.mdi-pirate::before{content:\"\\F0A08\"}.mdi-pistol::before{content:\"\\F0703\"}.mdi-piston::before{content:\"\\F088A\"}.mdi-pizza::before{content:\"\\F0409\"}.mdi-play::before{content:\"\\F040A\"}.mdi-play-box::before{content:\"\\F127A\"}.mdi-play-box-multiple::before{content:\"\\F0D19\"}.mdi-play-box-outline::before{content:\"\\F040B\"}.mdi-play-circle::before{content:\"\\F040C\"}.mdi-play-circle-outline::before{content:\"\\F040D\"}.mdi-play-network::before{content:\"\\F088B\"}.mdi-play-network-outline::before{content:\"\\F0CB7\"}.mdi-play-outline::before{content:\"\\F0F1B\"}.mdi-play-pause::before{content:\"\\F040E\"}.mdi-play-protected-content::before{content:\"\\F040F\"}.mdi-play-speed::before{content:\"\\F08FF\"}.mdi-playlist-check::before{content:\"\\F05C7\"}.mdi-playlist-edit::before{content:\"\\F0900\"}.mdi-playlist-minus::before{content:\"\\F0410\"}.mdi-playlist-music::before{content:\"\\F0CB8\"}.mdi-playlist-music-outline::before{content:\"\\F0CB9\"}.mdi-playlist-play::before{content:\"\\F0411\"}.mdi-playlist-plus::before{content:\"\\F0412\"}.mdi-playlist-remove::before{content:\"\\F0413\"}.mdi-playlist-star::before{content:\"\\F0DF2\"}.mdi-plex::before{content:\"\\F06BA\"}.mdi-plus::before{content:\"\\F0415\"}.mdi-plus-box::before{content:\"\\F0416\"}.mdi-plus-box-multiple::before{content:\"\\F0334\"}.mdi-plus-box-multiple-outline::before{content:\"\\F1143\"}.mdi-plus-box-outline::before{content:\"\\F0704\"}.mdi-plus-circle::before{content:\"\\F0417\"}.mdi-plus-circle-multiple::before{content:\"\\F034C\"}.mdi-plus-circle-multiple-outline::before{content:\"\\F0418\"}.mdi-plus-circle-outline::before{content:\"\\F0419\"}.mdi-plus-minus::before{content:\"\\F0992\"}.mdi-plus-minus-box::before{content:\"\\F0993\"}.mdi-plus-network::before{content:\"\\F041A\"}.mdi-plus-network-outline::before{content:\"\\F0CBA\"}.mdi-plus-one::before{content:\"\\F041B\"}.mdi-plus-outline::before{content:\"\\F0705\"}.mdi-plus-thick::before{content:\"\\F11EC\"}.mdi-podcast::before{content:\"\\F0994\"}.mdi-podium::before{content:\"\\F0D25\"}.mdi-podium-bronze::before{content:\"\\F0D26\"}.mdi-podium-gold::before{content:\"\\F0D27\"}.mdi-podium-silver::before{content:\"\\F0D28\"}.mdi-point-of-sale::before{content:\"\\F0D92\"}.mdi-pokeball::before{content:\"\\F041D\"}.mdi-pokemon-go::before{content:\"\\F0A09\"}.mdi-poker-chip::before{content:\"\\F0830\"}.mdi-polaroid::before{content:\"\\F041E\"}.mdi-police-badge::before{content:\"\\F1167\"}.mdi-police-badge-outline::before{content:\"\\F1168\"}.mdi-poll::before{content:\"\\F041F\"}.mdi-poll-box::before{content:\"\\F0420\"}.mdi-poll-box-outline::before{content:\"\\F127B\"}.mdi-polymer::before{content:\"\\F0421\"}.mdi-pool::before{content:\"\\F0606\"}.mdi-popcorn::before{content:\"\\F0422\"}.mdi-post::before{content:\"\\F1008\"}.mdi-post-outline::before{content:\"\\F1009\"}.mdi-postage-stamp::before{content:\"\\F0CBB\"}.mdi-pot::before{content:\"\\F02E5\"}.mdi-pot-mix::before{content:\"\\F065B\"}.mdi-pot-mix-outline::before{content:\"\\F0677\"}.mdi-pot-outline::before{content:\"\\F02FF\"}.mdi-pot-steam::before{content:\"\\F065A\"}.mdi-pot-steam-outline::before{content:\"\\F0326\"}.mdi-pound::before{content:\"\\F0423\"}.mdi-pound-box::before{content:\"\\F0424\"}.mdi-pound-box-outline::before{content:\"\\F117F\"}.mdi-power::before{content:\"\\F0425\"}.mdi-power-cycle::before{content:\"\\F0901\"}.mdi-power-off::before{content:\"\\F0902\"}.mdi-power-on::before{content:\"\\F0903\"}.mdi-power-plug::before{content:\"\\F06A5\"}.mdi-power-plug-off::before{content:\"\\F06A6\"}.mdi-power-settings::before{content:\"\\F0426\"}.mdi-power-sleep::before{content:\"\\F0904\"}.mdi-power-socket::before{content:\"\\F0427\"}.mdi-power-socket-au::before{content:\"\\F0905\"}.mdi-power-socket-de::before{content:\"\\F1107\"}.mdi-power-socket-eu::before{content:\"\\F07E7\"}.mdi-power-socket-fr::before{content:\"\\F1108\"}.mdi-power-socket-jp::before{content:\"\\F1109\"}.mdi-power-socket-uk::before{content:\"\\F07E8\"}.mdi-power-socket-us::before{content:\"\\F07E9\"}.mdi-power-standby::before{content:\"\\F0906\"}.mdi-powershell::before{content:\"\\F0A0A\"}.mdi-prescription::before{content:\"\\F0706\"}.mdi-presentation::before{content:\"\\F0428\"}.mdi-presentation-play::before{content:\"\\F0429\"}.mdi-printer::before{content:\"\\F042A\"}.mdi-printer-3d::before{content:\"\\F042B\"}.mdi-printer-3d-nozzle::before{content:\"\\F0E5B\"}.mdi-printer-3d-nozzle-alert::before{content:\"\\F11C0\"}.mdi-printer-3d-nozzle-alert-outline::before{content:\"\\F11C1\"}.mdi-printer-3d-nozzle-outline::before{content:\"\\F0E5C\"}.mdi-printer-alert::before{content:\"\\F042C\"}.mdi-printer-check::before{content:\"\\F1146\"}.mdi-printer-off::before{content:\"\\F0E5D\"}.mdi-printer-pos::before{content:\"\\F1057\"}.mdi-printer-settings::before{content:\"\\F0707\"}.mdi-printer-wireless::before{content:\"\\F0A0B\"}.mdi-priority-high::before{content:\"\\F0603\"}.mdi-priority-low::before{content:\"\\F0604\"}.mdi-professional-hexagon::before{content:\"\\F042D\"}.mdi-progress-alert::before{content:\"\\F0CBC\"}.mdi-progress-check::before{content:\"\\F0995\"}.mdi-progress-clock::before{content:\"\\F0996\"}.mdi-progress-close::before{content:\"\\F110A\"}.mdi-progress-download::before{content:\"\\F0997\"}.mdi-progress-upload::before{content:\"\\F0998\"}.mdi-progress-wrench::before{content:\"\\F0CBD\"}.mdi-projector::before{content:\"\\F042E\"}.mdi-projector-screen::before{content:\"\\F042F\"}.mdi-propane-tank::before{content:\"\\F1357\"}.mdi-propane-tank-outline::before{content:\"\\F1358\"}.mdi-protocol::before{content:\"\\F0FD8\"}.mdi-publish::before{content:\"\\F06A7\"}.mdi-pulse::before{content:\"\\F0430\"}.mdi-pumpkin::before{content:\"\\F0BBF\"}.mdi-purse::before{content:\"\\F0F1C\"}.mdi-purse-outline::before{content:\"\\F0F1D\"}.mdi-puzzle::before{content:\"\\F0431\"}.mdi-puzzle-outline::before{content:\"\\F0A66\"}.mdi-qi::before{content:\"\\F0999\"}.mdi-qqchat::before{content:\"\\F0605\"}.mdi-qrcode::before{content:\"\\F0432\"}.mdi-qrcode-edit::before{content:\"\\F08B8\"}.mdi-qrcode-minus::before{content:\"\\F118C\"}.mdi-qrcode-plus::before{content:\"\\F118B\"}.mdi-qrcode-remove::before{content:\"\\F118D\"}.mdi-qrcode-scan::before{content:\"\\F0433\"}.mdi-quadcopter::before{content:\"\\F0434\"}.mdi-quality-high::before{content:\"\\F0435\"}.mdi-quality-low::before{content:\"\\F0A0C\"}.mdi-quality-medium::before{content:\"\\F0A0D\"}.mdi-quora::before{content:\"\\F0D29\"}.mdi-rabbit::before{content:\"\\F0907\"}.mdi-racing-helmet::before{content:\"\\F0D93\"}.mdi-racquetball::before{content:\"\\F0D94\"}.mdi-radar::before{content:\"\\F0437\"}.mdi-radiator::before{content:\"\\F0438\"}.mdi-radiator-disabled::before{content:\"\\F0AD7\"}.mdi-radiator-off::before{content:\"\\F0AD8\"}.mdi-radio::before{content:\"\\F0439\"}.mdi-radio-am::before{content:\"\\F0CBE\"}.mdi-radio-fm::before{content:\"\\F0CBF\"}.mdi-radio-handheld::before{content:\"\\F043A\"}.mdi-radio-off::before{content:\"\\F121C\"}.mdi-radio-tower::before{content:\"\\F043B\"}.mdi-radioactive::before{content:\"\\F043C\"}.mdi-radioactive-off::before{content:\"\\F0EC1\"}.mdi-radiobox-blank::before{content:\"\\F043D\"}.mdi-radiobox-marked::before{content:\"\\F043E\"}.mdi-radius::before{content:\"\\F0CC0\"}.mdi-radius-outline::before{content:\"\\F0CC1\"}.mdi-railroad-light::before{content:\"\\F0F1E\"}.mdi-raspberry-pi::before{content:\"\\F043F\"}.mdi-ray-end::before{content:\"\\F0440\"}.mdi-ray-end-arrow::before{content:\"\\F0441\"}.mdi-ray-start::before{content:\"\\F0442\"}.mdi-ray-start-arrow::before{content:\"\\F0443\"}.mdi-ray-start-end::before{content:\"\\F0444\"}.mdi-ray-vertex::before{content:\"\\F0445\"}.mdi-react::before{content:\"\\F0708\"}.mdi-read::before{content:\"\\F0447\"}.mdi-receipt::before{content:\"\\F0449\"}.mdi-record::before{content:\"\\F044A\"}.mdi-record-circle::before{content:\"\\F0EC2\"}.mdi-record-circle-outline::before{content:\"\\F0EC3\"}.mdi-record-player::before{content:\"\\F099A\"}.mdi-record-rec::before{content:\"\\F044B\"}.mdi-rectangle::before{content:\"\\F0E5E\"}.mdi-rectangle-outline::before{content:\"\\F0E5F\"}.mdi-recycle::before{content:\"\\F044C\"}.mdi-recycle-variant::before{content:\"\\F139D\"}.mdi-reddit::before{content:\"\\F044D\"}.mdi-redhat::before{content:\"\\F111B\"}.mdi-redo::before{content:\"\\F044E\"}.mdi-redo-variant::before{content:\"\\F044F\"}.mdi-reflect-horizontal::before{content:\"\\F0A0E\"}.mdi-reflect-vertical::before{content:\"\\F0A0F\"}.mdi-refresh::before{content:\"\\F0450\"}.mdi-refresh-circle::before{content:\"\\F1377\"}.mdi-regex::before{content:\"\\F0451\"}.mdi-registered-trademark::before{content:\"\\F0A67\"}.mdi-relative-scale::before{content:\"\\F0452\"}.mdi-reload::before{content:\"\\F0453\"}.mdi-reload-alert::before{content:\"\\F110B\"}.mdi-reminder::before{content:\"\\F088C\"}.mdi-remote::before{content:\"\\F0454\"}.mdi-remote-desktop::before{content:\"\\F08B9\"}.mdi-remote-off::before{content:\"\\F0EC4\"}.mdi-remote-tv::before{content:\"\\F0EC5\"}.mdi-remote-tv-off::before{content:\"\\F0EC6\"}.mdi-rename-box::before{content:\"\\F0455\"}.mdi-reorder-horizontal::before{content:\"\\F0688\"}.mdi-reorder-vertical::before{content:\"\\F0689\"}.mdi-repeat::before{content:\"\\F0456\"}.mdi-repeat-off::before{content:\"\\F0457\"}.mdi-repeat-once::before{content:\"\\F0458\"}.mdi-replay::before{content:\"\\F0459\"}.mdi-reply::before{content:\"\\F045A\"}.mdi-reply-all::before{content:\"\\F045B\"}.mdi-reply-all-outline::before{content:\"\\F0F1F\"}.mdi-reply-circle::before{content:\"\\F11AE\"}.mdi-reply-outline::before{content:\"\\F0F20\"}.mdi-reproduction::before{content:\"\\F045C\"}.mdi-resistor::before{content:\"\\F0B44\"}.mdi-resistor-nodes::before{content:\"\\F0B45\"}.mdi-resize::before{content:\"\\F0A68\"}.mdi-resize-bottom-right::before{content:\"\\F045D\"}.mdi-responsive::before{content:\"\\F045E\"}.mdi-restart::before{content:\"\\F0709\"}.mdi-restart-alert::before{content:\"\\F110C\"}.mdi-restart-off::before{content:\"\\F0D95\"}.mdi-restore::before{content:\"\\F099B\"}.mdi-restore-alert::before{content:\"\\F110D\"}.mdi-rewind::before{content:\"\\F045F\"}.mdi-rewind-10::before{content:\"\\F0D2A\"}.mdi-rewind-30::before{content:\"\\F0D96\"}.mdi-rewind-5::before{content:\"\\F11F9\"}.mdi-rewind-outline::before{content:\"\\F070A\"}.mdi-rhombus::before{content:\"\\F070B\"}.mdi-rhombus-medium::before{content:\"\\F0A10\"}.mdi-rhombus-outline::before{content:\"\\F070C\"}.mdi-rhombus-split::before{content:\"\\F0A11\"}.mdi-ribbon::before{content:\"\\F0460\"}.mdi-rice::before{content:\"\\F07EA\"}.mdi-ring::before{content:\"\\F07EB\"}.mdi-rivet::before{content:\"\\F0E60\"}.mdi-road::before{content:\"\\F0461\"}.mdi-road-variant::before{content:\"\\F0462\"}.mdi-robber::before{content:\"\\F1058\"}.mdi-robot::before{content:\"\\F06A9\"}.mdi-robot-industrial::before{content:\"\\F0B46\"}.mdi-robot-mower::before{content:\"\\F11F7\"}.mdi-robot-mower-outline::before{content:\"\\F11F3\"}.mdi-robot-vacuum::before{content:\"\\F070D\"}.mdi-robot-vacuum-variant::before{content:\"\\F0908\"}.mdi-rocket::before{content:\"\\F0463\"}.mdi-rocket-outline::before{content:\"\\F13AF\"}.mdi-rodent::before{content:\"\\F1327\"}.mdi-roller-skate::before{content:\"\\F0D2B\"}.mdi-roller-skate-off::before{content:\"\\F0145\"}.mdi-rollerblade::before{content:\"\\F0D2C\"}.mdi-rollerblade-off::before{content:\"\\F002E\"}.mdi-rollupjs::before{content:\"\\F0BC0\"}.mdi-roman-numeral-1::before{content:\"\\F1088\"}.mdi-roman-numeral-10::before{content:\"\\F1091\"}.mdi-roman-numeral-2::before{content:\"\\F1089\"}.mdi-roman-numeral-3::before{content:\"\\F108A\"}.mdi-roman-numeral-4::before{content:\"\\F108B\"}.mdi-roman-numeral-5::before{content:\"\\F108C\"}.mdi-roman-numeral-6::before{content:\"\\F108D\"}.mdi-roman-numeral-7::before{content:\"\\F108E\"}.mdi-roman-numeral-8::before{content:\"\\F108F\"}.mdi-roman-numeral-9::before{content:\"\\F1090\"}.mdi-room-service::before{content:\"\\F088D\"}.mdi-room-service-outline::before{content:\"\\F0D97\"}.mdi-rotate-3d::before{content:\"\\F0EC7\"}.mdi-rotate-3d-variant::before{content:\"\\F0464\"}.mdi-rotate-left::before{content:\"\\F0465\"}.mdi-rotate-left-variant::before{content:\"\\F0466\"}.mdi-rotate-orbit::before{content:\"\\F0D98\"}.mdi-rotate-right::before{content:\"\\F0467\"}.mdi-rotate-right-variant::before{content:\"\\F0468\"}.mdi-rounded-corner::before{content:\"\\F0607\"}.mdi-router::before{content:\"\\F11E2\"}.mdi-router-network::before{content:\"\\F1087\"}.mdi-router-wireless::before{content:\"\\F0469\"}.mdi-router-wireless-settings::before{content:\"\\F0A69\"}.mdi-routes::before{content:\"\\F046A\"}.mdi-routes-clock::before{content:\"\\F1059\"}.mdi-rowing::before{content:\"\\F0608\"}.mdi-rss::before{content:\"\\F046B\"}.mdi-rss-box::before{content:\"\\F046C\"}.mdi-rss-off::before{content:\"\\F0F21\"}.mdi-rugby::before{content:\"\\F0D99\"}.mdi-ruler::before{content:\"\\F046D\"}.mdi-ruler-square::before{content:\"\\F0CC2\"}.mdi-ruler-square-compass::before{content:\"\\F0EBE\"}.mdi-run::before{content:\"\\F070E\"}.mdi-run-fast::before{content:\"\\F046E\"}.mdi-rv-truck::before{content:\"\\F11D4\"}.mdi-sack::before{content:\"\\F0D2E\"}.mdi-sack-percent::before{content:\"\\F0D2F\"}.mdi-safe::before{content:\"\\F0A6A\"}.mdi-safe-square::before{content:\"\\F127C\"}.mdi-safe-square-outline::before{content:\"\\F127D\"}.mdi-safety-goggles::before{content:\"\\F0D30\"}.mdi-sail-boat::before{content:\"\\F0EC8\"}.mdi-sale::before{content:\"\\F046F\"}.mdi-salesforce::before{content:\"\\F088E\"}.mdi-sass::before{content:\"\\F07EC\"}.mdi-satellite::before{content:\"\\F0470\"}.mdi-satellite-uplink::before{content:\"\\F0909\"}.mdi-satellite-variant::before{content:\"\\F0471\"}.mdi-sausage::before{content:\"\\F08BA\"}.mdi-saw-blade::before{content:\"\\F0E61\"}.mdi-saxophone::before{content:\"\\F0609\"}.mdi-scale::before{content:\"\\F0472\"}.mdi-scale-balance::before{content:\"\\F05D1\"}.mdi-scale-bathroom::before{content:\"\\F0473\"}.mdi-scale-off::before{content:\"\\F105A\"}.mdi-scanner::before{content:\"\\F06AB\"}.mdi-scanner-off::before{content:\"\\F090A\"}.mdi-scatter-plot::before{content:\"\\F0EC9\"}.mdi-scatter-plot-outline::before{content:\"\\F0ECA\"}.mdi-school::before{content:\"\\F0474\"}.mdi-school-outline::before{content:\"\\F1180\"}.mdi-scissors-cutting::before{content:\"\\F0A6B\"}.mdi-scooter::before{content:\"\\F11E9\"}.mdi-scoreboard::before{content:\"\\F127E\"}.mdi-scoreboard-outline::before{content:\"\\F127F\"}.mdi-screen-rotation::before{content:\"\\F0475\"}.mdi-screen-rotation-lock::before{content:\"\\F0478\"}.mdi-screw-flat-top::before{content:\"\\F0DF3\"}.mdi-screw-lag::before{content:\"\\F0DF4\"}.mdi-screw-machine-flat-top::before{content:\"\\F0DF5\"}.mdi-screw-machine-round-top::before{content:\"\\F0DF6\"}.mdi-screw-round-top::before{content:\"\\F0DF7\"}.mdi-screwdriver::before{content:\"\\F0476\"}.mdi-script::before{content:\"\\F0BC1\"}.mdi-script-outline::before{content:\"\\F0477\"}.mdi-script-text::before{content:\"\\F0BC2\"}.mdi-script-text-outline::before{content:\"\\F0BC3\"}.mdi-sd::before{content:\"\\F0479\"}.mdi-seal::before{content:\"\\F047A\"}.mdi-seal-variant::before{content:\"\\F0FD9\"}.mdi-search-web::before{content:\"\\F070F\"}.mdi-seat::before{content:\"\\F0CC3\"}.mdi-seat-flat::before{content:\"\\F047B\"}.mdi-seat-flat-angled::before{content:\"\\F047C\"}.mdi-seat-individual-suite::before{content:\"\\F047D\"}.mdi-seat-legroom-extra::before{content:\"\\F047E\"}.mdi-seat-legroom-normal::before{content:\"\\F047F\"}.mdi-seat-legroom-reduced::before{content:\"\\F0480\"}.mdi-seat-outline::before{content:\"\\F0CC4\"}.mdi-seat-passenger::before{content:\"\\F1249\"}.mdi-seat-recline-extra::before{content:\"\\F0481\"}.mdi-seat-recline-normal::before{content:\"\\F0482\"}.mdi-seatbelt::before{content:\"\\F0CC5\"}.mdi-security::before{content:\"\\F0483\"}.mdi-security-network::before{content:\"\\F0484\"}.mdi-seed::before{content:\"\\F0E62\"}.mdi-seed-outline::before{content:\"\\F0E63\"}.mdi-segment::before{content:\"\\F0ECB\"}.mdi-select::before{content:\"\\F0485\"}.mdi-select-all::before{content:\"\\F0486\"}.mdi-select-color::before{content:\"\\F0D31\"}.mdi-select-compare::before{content:\"\\F0AD9\"}.mdi-select-drag::before{content:\"\\F0A6C\"}.mdi-select-group::before{content:\"\\F0F82\"}.mdi-select-inverse::before{content:\"\\F0487\"}.mdi-select-marker::before{content:\"\\F1280\"}.mdi-select-multiple::before{content:\"\\F1281\"}.mdi-select-multiple-marker::before{content:\"\\F1282\"}.mdi-select-off::before{content:\"\\F0488\"}.mdi-select-place::before{content:\"\\F0FDA\"}.mdi-select-search::before{content:\"\\F1204\"}.mdi-selection::before{content:\"\\F0489\"}.mdi-selection-drag::before{content:\"\\F0A6D\"}.mdi-selection-ellipse::before{content:\"\\F0D32\"}.mdi-selection-ellipse-arrow-inside::before{content:\"\\F0F22\"}.mdi-selection-marker::before{content:\"\\F1283\"}.mdi-selection-multiple-marker::before{content:\"\\F1284\"}.mdi-selection-mutliple::before{content:\"\\F1285\"}.mdi-selection-off::before{content:\"\\F0777\"}.mdi-selection-search::before{content:\"\\F1205\"}.mdi-semantic-web::before{content:\"\\F1316\"}.mdi-send::before{content:\"\\F048A\"}.mdi-send-check::before{content:\"\\F1161\"}.mdi-send-check-outline::before{content:\"\\F1162\"}.mdi-send-circle::before{content:\"\\F0DF8\"}.mdi-send-circle-outline::before{content:\"\\F0DF9\"}.mdi-send-clock::before{content:\"\\F1163\"}.mdi-send-clock-outline::before{content:\"\\F1164\"}.mdi-send-lock::before{content:\"\\F07ED\"}.mdi-send-lock-outline::before{content:\"\\F1166\"}.mdi-send-outline::before{content:\"\\F1165\"}.mdi-serial-port::before{content:\"\\F065C\"}.mdi-server::before{content:\"\\F048B\"}.mdi-server-minus::before{content:\"\\F048C\"}.mdi-server-network::before{content:\"\\F048D\"}.mdi-server-network-off::before{content:\"\\F048E\"}.mdi-server-off::before{content:\"\\F048F\"}.mdi-server-plus::before{content:\"\\F0490\"}.mdi-server-remove::before{content:\"\\F0491\"}.mdi-server-security::before{content:\"\\F0492\"}.mdi-set-all::before{content:\"\\F0778\"}.mdi-set-center::before{content:\"\\F0779\"}.mdi-set-center-right::before{content:\"\\F077A\"}.mdi-set-left::before{content:\"\\F077B\"}.mdi-set-left-center::before{content:\"\\F077C\"}.mdi-set-left-right::before{content:\"\\F077D\"}.mdi-set-none::before{content:\"\\F077E\"}.mdi-set-right::before{content:\"\\F077F\"}.mdi-set-top-box::before{content:\"\\F099F\"}.mdi-settings-helper::before{content:\"\\F0A6E\"}.mdi-shaker::before{content:\"\\F110E\"}.mdi-shaker-outline::before{content:\"\\F110F\"}.mdi-shape::before{content:\"\\F0831\"}.mdi-shape-circle-plus::before{content:\"\\F065D\"}.mdi-shape-outline::before{content:\"\\F0832\"}.mdi-shape-oval-plus::before{content:\"\\F11FA\"}.mdi-shape-plus::before{content:\"\\F0495\"}.mdi-shape-polygon-plus::before{content:\"\\F065E\"}.mdi-shape-rectangle-plus::before{content:\"\\F065F\"}.mdi-shape-square-plus::before{content:\"\\F0660\"}.mdi-share::before{content:\"\\F0496\"}.mdi-share-all::before{content:\"\\F11F4\"}.mdi-share-all-outline::before{content:\"\\F11F5\"}.mdi-share-circle::before{content:\"\\F11AD\"}.mdi-share-off::before{content:\"\\F0F23\"}.mdi-share-off-outline::before{content:\"\\F0F24\"}.mdi-share-outline::before{content:\"\\F0932\"}.mdi-share-variant::before{content:\"\\F0497\"}.mdi-sheep::before{content:\"\\F0CC6\"}.mdi-shield::before{content:\"\\F0498\"}.mdi-shield-account::before{content:\"\\F088F\"}.mdi-shield-account-outline::before{content:\"\\F0A12\"}.mdi-shield-airplane::before{content:\"\\F06BB\"}.mdi-shield-airplane-outline::before{content:\"\\F0CC7\"}.mdi-shield-alert::before{content:\"\\F0ECC\"}.mdi-shield-alert-outline::before{content:\"\\F0ECD\"}.mdi-shield-car::before{content:\"\\F0F83\"}.mdi-shield-check::before{content:\"\\F0565\"}.mdi-shield-check-outline::before{content:\"\\F0CC8\"}.mdi-shield-cross::before{content:\"\\F0CC9\"}.mdi-shield-cross-outline::before{content:\"\\F0CCA\"}.mdi-shield-edit::before{content:\"\\F11A0\"}.mdi-shield-edit-outline::before{content:\"\\F11A1\"}.mdi-shield-half::before{content:\"\\F1360\"}.mdi-shield-half-full::before{content:\"\\F0780\"}.mdi-shield-home::before{content:\"\\F068A\"}.mdi-shield-home-outline::before{content:\"\\F0CCB\"}.mdi-shield-key::before{content:\"\\F0BC4\"}.mdi-shield-key-outline::before{content:\"\\F0BC5\"}.mdi-shield-link-variant::before{content:\"\\F0D33\"}.mdi-shield-link-variant-outline::before{content:\"\\F0D34\"}.mdi-shield-lock::before{content:\"\\F099D\"}.mdi-shield-lock-outline::before{content:\"\\F0CCC\"}.mdi-shield-off::before{content:\"\\F099E\"}.mdi-shield-off-outline::before{content:\"\\F099C\"}.mdi-shield-outline::before{content:\"\\F0499\"}.mdi-shield-plus::before{content:\"\\F0ADA\"}.mdi-shield-plus-outline::before{content:\"\\F0ADB\"}.mdi-shield-refresh::before{content:\"\\F00AA\"}.mdi-shield-refresh-outline::before{content:\"\\F01E0\"}.mdi-shield-remove::before{content:\"\\F0ADC\"}.mdi-shield-remove-outline::before{content:\"\\F0ADD\"}.mdi-shield-search::before{content:\"\\F0D9A\"}.mdi-shield-star::before{content:\"\\F113B\"}.mdi-shield-star-outline::before{content:\"\\F113C\"}.mdi-shield-sun::before{content:\"\\F105D\"}.mdi-shield-sun-outline::before{content:\"\\F105E\"}.mdi-shield-sync::before{content:\"\\F11A2\"}.mdi-shield-sync-outline::before{content:\"\\F11A3\"}.mdi-ship-wheel::before{content:\"\\F0833\"}.mdi-shoe-formal::before{content:\"\\F0B47\"}.mdi-shoe-heel::before{content:\"\\F0B48\"}.mdi-shoe-print::before{content:\"\\F0DFA\"}.mdi-shopping::before{content:\"\\F049A\"}.mdi-shopping-music::before{content:\"\\F049B\"}.mdi-shopping-outline::before{content:\"\\F11D5\"}.mdi-shopping-search::before{content:\"\\F0F84\"}.mdi-shovel::before{content:\"\\F0710\"}.mdi-shovel-off::before{content:\"\\F0711\"}.mdi-shower::before{content:\"\\F09A0\"}.mdi-shower-head::before{content:\"\\F09A1\"}.mdi-shredder::before{content:\"\\F049C\"}.mdi-shuffle::before{content:\"\\F049D\"}.mdi-shuffle-disabled::before{content:\"\\F049E\"}.mdi-shuffle-variant::before{content:\"\\F049F\"}.mdi-shuriken::before{content:\"\\F137F\"}.mdi-sigma::before{content:\"\\F04A0\"}.mdi-sigma-lower::before{content:\"\\F062B\"}.mdi-sign-caution::before{content:\"\\F04A1\"}.mdi-sign-direction::before{content:\"\\F0781\"}.mdi-sign-direction-minus::before{content:\"\\F1000\"}.mdi-sign-direction-plus::before{content:\"\\F0FDC\"}.mdi-sign-direction-remove::before{content:\"\\F0FDD\"}.mdi-sign-real-estate::before{content:\"\\F1118\"}.mdi-sign-text::before{content:\"\\F0782\"}.mdi-signal::before{content:\"\\F04A2\"}.mdi-signal-2g::before{content:\"\\F0712\"}.mdi-signal-3g::before{content:\"\\F0713\"}.mdi-signal-4g::before{content:\"\\F0714\"}.mdi-signal-5g::before{content:\"\\F0A6F\"}.mdi-signal-cellular-1::before{content:\"\\F08BC\"}.mdi-signal-cellular-2::before{content:\"\\F08BD\"}.mdi-signal-cellular-3::before{content:\"\\F08BE\"}.mdi-signal-cellular-outline::before{content:\"\\F08BF\"}.mdi-signal-distance-variant::before{content:\"\\F0E64\"}.mdi-signal-hspa::before{content:\"\\F0715\"}.mdi-signal-hspa-plus::before{content:\"\\F0716\"}.mdi-signal-off::before{content:\"\\F0783\"}.mdi-signal-variant::before{content:\"\\F060A\"}.mdi-signature::before{content:\"\\F0DFB\"}.mdi-signature-freehand::before{content:\"\\F0DFC\"}.mdi-signature-image::before{content:\"\\F0DFD\"}.mdi-signature-text::before{content:\"\\F0DFE\"}.mdi-silo::before{content:\"\\F0B49\"}.mdi-silverware::before{content:\"\\F04A3\"}.mdi-silverware-clean::before{content:\"\\F0FDE\"}.mdi-silverware-fork::before{content:\"\\F04A4\"}.mdi-silverware-fork-knife::before{content:\"\\F0A70\"}.mdi-silverware-spoon::before{content:\"\\F04A5\"}.mdi-silverware-variant::before{content:\"\\F04A6\"}.mdi-sim::before{content:\"\\F04A7\"}.mdi-sim-alert::before{content:\"\\F04A8\"}.mdi-sim-off::before{content:\"\\F04A9\"}.mdi-simple-icons::before{content:\"\\F131D\"}.mdi-sina-weibo::before{content:\"\\F0ADF\"}.mdi-sitemap::before{content:\"\\F04AA\"}.mdi-size-l::before{content:\"\\F13A6\"}.mdi-size-m::before{content:\"\\F13A5\"}.mdi-size-s::before{content:\"\\F13A4\"}.mdi-size-xl::before{content:\"\\F13A7\"}.mdi-size-xs::before{content:\"\\F13A3\"}.mdi-size-xxl::before{content:\"\\F13A8\"}.mdi-size-xxs::before{content:\"\\F13A2\"}.mdi-size-xxxl::before{content:\"\\F13A9\"}.mdi-skate::before{content:\"\\F0D35\"}.mdi-skew-less::before{content:\"\\F0D36\"}.mdi-skew-more::before{content:\"\\F0D37\"}.mdi-ski::before{content:\"\\F1304\"}.mdi-ski-cross-country::before{content:\"\\F1305\"}.mdi-ski-water::before{content:\"\\F1306\"}.mdi-skip-backward::before{content:\"\\F04AB\"}.mdi-skip-backward-outline::before{content:\"\\F0F25\"}.mdi-skip-forward::before{content:\"\\F04AC\"}.mdi-skip-forward-outline::before{content:\"\\F0F26\"}.mdi-skip-next::before{content:\"\\F04AD\"}.mdi-skip-next-circle::before{content:\"\\F0661\"}.mdi-skip-next-circle-outline::before{content:\"\\F0662\"}.mdi-skip-next-outline::before{content:\"\\F0F27\"}.mdi-skip-previous::before{content:\"\\F04AE\"}.mdi-skip-previous-circle::before{content:\"\\F0663\"}.mdi-skip-previous-circle-outline::before{content:\"\\F0664\"}.mdi-skip-previous-outline::before{content:\"\\F0F28\"}.mdi-skull::before{content:\"\\F068C\"}.mdi-skull-crossbones::before{content:\"\\F0BC6\"}.mdi-skull-crossbones-outline::before{content:\"\\F0BC7\"}.mdi-skull-outline::before{content:\"\\F0BC8\"}.mdi-skype::before{content:\"\\F04AF\"}.mdi-skype-business::before{content:\"\\F04B0\"}.mdi-slack::before{content:\"\\F04B1\"}.mdi-slash-forward::before{content:\"\\F0FDF\"}.mdi-slash-forward-box::before{content:\"\\F0FE0\"}.mdi-sleep::before{content:\"\\F04B2\"}.mdi-sleep-off::before{content:\"\\F04B3\"}.mdi-slope-downhill::before{content:\"\\F0DFF\"}.mdi-slope-uphill::before{content:\"\\F0E00\"}.mdi-slot-machine::before{content:\"\\F1114\"}.mdi-slot-machine-outline::before{content:\"\\F1115\"}.mdi-smart-card::before{content:\"\\F10BD\"}.mdi-smart-card-outline::before{content:\"\\F10BE\"}.mdi-smart-card-reader::before{content:\"\\F10BF\"}.mdi-smart-card-reader-outline::before{content:\"\\F10C0\"}.mdi-smog::before{content:\"\\F0A71\"}.mdi-smoke-detector::before{content:\"\\F0392\"}.mdi-smoking::before{content:\"\\F04B4\"}.mdi-smoking-off::before{content:\"\\F04B5\"}.mdi-snapchat::before{content:\"\\F04B6\"}.mdi-snowboard::before{content:\"\\F1307\"}.mdi-snowflake::before{content:\"\\F0717\"}.mdi-snowflake-alert::before{content:\"\\F0F29\"}.mdi-snowflake-melt::before{content:\"\\F12CB\"}.mdi-snowflake-variant::before{content:\"\\F0F2A\"}.mdi-snowman::before{content:\"\\F04B7\"}.mdi-soccer::before{content:\"\\F04B8\"}.mdi-soccer-field::before{content:\"\\F0834\"}.mdi-sofa::before{content:\"\\F04B9\"}.mdi-solar-panel::before{content:\"\\F0D9B\"}.mdi-solar-panel-large::before{content:\"\\F0D9C\"}.mdi-solar-power::before{content:\"\\F0A72\"}.mdi-soldering-iron::before{content:\"\\F1092\"}.mdi-solid::before{content:\"\\F068D\"}.mdi-sony-playstation::before{content:\"\\F0414\"}.mdi-sort::before{content:\"\\F04BA\"}.mdi-sort-alphabetical-ascending::before{content:\"\\F05BD\"}.mdi-sort-alphabetical-ascending-variant::before{content:\"\\F1148\"}.mdi-sort-alphabetical-descending::before{content:\"\\F05BF\"}.mdi-sort-alphabetical-descending-variant::before{content:\"\\F1149\"}.mdi-sort-alphabetical-variant::before{content:\"\\F04BB\"}.mdi-sort-ascending::before{content:\"\\F04BC\"}.mdi-sort-bool-ascending::before{content:\"\\F1385\"}.mdi-sort-bool-ascending-variant::before{content:\"\\F1386\"}.mdi-sort-bool-descending::before{content:\"\\F1387\"}.mdi-sort-bool-descending-variant::before{content:\"\\F1388\"}.mdi-sort-descending::before{content:\"\\F04BD\"}.mdi-sort-numeric-ascending::before{content:\"\\F1389\"}.mdi-sort-numeric-ascending-variant::before{content:\"\\F090D\"}.mdi-sort-numeric-descending::before{content:\"\\F138A\"}.mdi-sort-numeric-descending-variant::before{content:\"\\F0AD2\"}.mdi-sort-numeric-variant::before{content:\"\\F04BE\"}.mdi-sort-reverse-variant::before{content:\"\\F033C\"}.mdi-sort-variant::before{content:\"\\F04BF\"}.mdi-sort-variant-lock::before{content:\"\\F0CCD\"}.mdi-sort-variant-lock-open::before{content:\"\\F0CCE\"}.mdi-sort-variant-remove::before{content:\"\\F1147\"}.mdi-soundcloud::before{content:\"\\F04C0\"}.mdi-source-branch::before{content:\"\\F062C\"}.mdi-source-commit::before{content:\"\\F0718\"}.mdi-source-commit-end::before{content:\"\\F0719\"}.mdi-source-commit-end-local::before{content:\"\\F071A\"}.mdi-source-commit-local::before{content:\"\\F071B\"}.mdi-source-commit-next-local::before{content:\"\\F071C\"}.mdi-source-commit-start::before{content:\"\\F071D\"}.mdi-source-commit-start-next-local::before{content:\"\\F071E\"}.mdi-source-fork::before{content:\"\\F04C1\"}.mdi-source-merge::before{content:\"\\F062D\"}.mdi-source-pull::before{content:\"\\F04C2\"}.mdi-source-repository::before{content:\"\\F0CCF\"}.mdi-source-repository-multiple::before{content:\"\\F0CD0\"}.mdi-soy-sauce::before{content:\"\\F07EE\"}.mdi-spa::before{content:\"\\F0CD1\"}.mdi-spa-outline::before{content:\"\\F0CD2\"}.mdi-space-invaders::before{content:\"\\F0BC9\"}.mdi-space-station::before{content:\"\\F1383\"}.mdi-spade::before{content:\"\\F0E65\"}.mdi-speaker::before{content:\"\\F04C3\"}.mdi-speaker-bluetooth::before{content:\"\\F09A2\"}.mdi-speaker-multiple::before{content:\"\\F0D38\"}.mdi-speaker-off::before{content:\"\\F04C4\"}.mdi-speaker-wireless::before{content:\"\\F071F\"}.mdi-speedometer::before{content:\"\\F04C5\"}.mdi-speedometer-medium::before{content:\"\\F0F85\"}.mdi-speedometer-slow::before{content:\"\\F0F86\"}.mdi-spellcheck::before{content:\"\\F04C6\"}.mdi-spider::before{content:\"\\F11EA\"}.mdi-spider-thread::before{content:\"\\F11EB\"}.mdi-spider-web::before{content:\"\\F0BCA\"}.mdi-spotify::before{content:\"\\F04C7\"}.mdi-spotlight::before{content:\"\\F04C8\"}.mdi-spotlight-beam::before{content:\"\\F04C9\"}.mdi-spray::before{content:\"\\F0665\"}.mdi-spray-bottle::before{content:\"\\F0AE0\"}.mdi-sprinkler::before{content:\"\\F105F\"}.mdi-sprinkler-variant::before{content:\"\\F1060\"}.mdi-sprout::before{content:\"\\F0E66\"}.mdi-sprout-outline::before{content:\"\\F0E67\"}.mdi-square::before{content:\"\\F0764\"}.mdi-square-edit-outline::before{content:\"\\F090C\"}.mdi-square-medium::before{content:\"\\F0A13\"}.mdi-square-medium-outline::before{content:\"\\F0A14\"}.mdi-square-off::before{content:\"\\F12EE\"}.mdi-square-off-outline::before{content:\"\\F12EF\"}.mdi-square-outline::before{content:\"\\F0763\"}.mdi-square-root::before{content:\"\\F0784\"}.mdi-square-root-box::before{content:\"\\F09A3\"}.mdi-square-small::before{content:\"\\F0A15\"}.mdi-squeegee::before{content:\"\\F0AE1\"}.mdi-ssh::before{content:\"\\F08C0\"}.mdi-stack-exchange::before{content:\"\\F060B\"}.mdi-stack-overflow::before{content:\"\\F04CC\"}.mdi-stackpath::before{content:\"\\F0359\"}.mdi-stadium::before{content:\"\\F0FF9\"}.mdi-stadium-variant::before{content:\"\\F0720\"}.mdi-stairs::before{content:\"\\F04CD\"}.mdi-stairs-box::before{content:\"\\F139E\"}.mdi-stairs-down::before{content:\"\\F12BE\"}.mdi-stairs-up::before{content:\"\\F12BD\"}.mdi-stamper::before{content:\"\\F0D39\"}.mdi-standard-definition::before{content:\"\\F07EF\"}.mdi-star::before{content:\"\\F04CE\"}.mdi-star-box::before{content:\"\\F0A73\"}.mdi-star-box-multiple::before{content:\"\\F1286\"}.mdi-star-box-multiple-outline::before{content:\"\\F1287\"}.mdi-star-box-outline::before{content:\"\\F0A74\"}.mdi-star-circle::before{content:\"\\F04CF\"}.mdi-star-circle-outline::before{content:\"\\F09A4\"}.mdi-star-face::before{content:\"\\F09A5\"}.mdi-star-four-points::before{content:\"\\F0AE2\"}.mdi-star-four-points-outline::before{content:\"\\F0AE3\"}.mdi-star-half::before{content:\"\\F0246\"}.mdi-star-half-full::before{content:\"\\F04D0\"}.mdi-star-off::before{content:\"\\F04D1\"}.mdi-star-outline::before{content:\"\\F04D2\"}.mdi-star-three-points::before{content:\"\\F0AE4\"}.mdi-star-three-points-outline::before{content:\"\\F0AE5\"}.mdi-state-machine::before{content:\"\\F11EF\"}.mdi-steam::before{content:\"\\F04D3\"}.mdi-steering::before{content:\"\\F04D4\"}.mdi-steering-off::before{content:\"\\F090E\"}.mdi-step-backward::before{content:\"\\F04D5\"}.mdi-step-backward-2::before{content:\"\\F04D6\"}.mdi-step-forward::before{content:\"\\F04D7\"}.mdi-step-forward-2::before{content:\"\\F04D8\"}.mdi-stethoscope::before{content:\"\\F04D9\"}.mdi-sticker::before{content:\"\\F1364\"}.mdi-sticker-alert::before{content:\"\\F1365\"}.mdi-sticker-alert-outline::before{content:\"\\F1366\"}.mdi-sticker-check::before{content:\"\\F1367\"}.mdi-sticker-check-outline::before{content:\"\\F1368\"}.mdi-sticker-circle-outline::before{content:\"\\F05D0\"}.mdi-sticker-emoji::before{content:\"\\F0785\"}.mdi-sticker-minus::before{content:\"\\F1369\"}.mdi-sticker-minus-outline::before{content:\"\\F136A\"}.mdi-sticker-outline::before{content:\"\\F136B\"}.mdi-sticker-plus::before{content:\"\\F136C\"}.mdi-sticker-plus-outline::before{content:\"\\F136D\"}.mdi-sticker-remove::before{content:\"\\F136E\"}.mdi-sticker-remove-outline::before{content:\"\\F136F\"}.mdi-stocking::before{content:\"\\F04DA\"}.mdi-stomach::before{content:\"\\F1093\"}.mdi-stop::before{content:\"\\F04DB\"}.mdi-stop-circle::before{content:\"\\F0666\"}.mdi-stop-circle-outline::before{content:\"\\F0667\"}.mdi-store::before{content:\"\\F04DC\"}.mdi-store-24-hour::before{content:\"\\F04DD\"}.mdi-store-outline::before{content:\"\\F1361\"}.mdi-storefront::before{content:\"\\F07C7\"}.mdi-storefront-outline::before{content:\"\\F10C1\"}.mdi-stove::before{content:\"\\F04DE\"}.mdi-strategy::before{content:\"\\F11D6\"}.mdi-stretch-to-page::before{content:\"\\F0F2B\"}.mdi-stretch-to-page-outline::before{content:\"\\F0F2C\"}.mdi-string-lights::before{content:\"\\F12BA\"}.mdi-string-lights-off::before{content:\"\\F12BB\"}.mdi-subdirectory-arrow-left::before{content:\"\\F060C\"}.mdi-subdirectory-arrow-right::before{content:\"\\F060D\"}.mdi-subtitles::before{content:\"\\F0A16\"}.mdi-subtitles-outline::before{content:\"\\F0A17\"}.mdi-subway::before{content:\"\\F06AC\"}.mdi-subway-alert-variant::before{content:\"\\F0D9D\"}.mdi-subway-variant::before{content:\"\\F04DF\"}.mdi-summit::before{content:\"\\F0786\"}.mdi-sunglasses::before{content:\"\\F04E0\"}.mdi-surround-sound::before{content:\"\\F05C5\"}.mdi-surround-sound-2-0::before{content:\"\\F07F0\"}.mdi-surround-sound-3-1::before{content:\"\\F07F1\"}.mdi-surround-sound-5-1::before{content:\"\\F07F2\"}.mdi-surround-sound-7-1::before{content:\"\\F07F3\"}.mdi-svg::before{content:\"\\F0721\"}.mdi-swap-horizontal::before{content:\"\\F04E1\"}.mdi-swap-horizontal-bold::before{content:\"\\F0BCD\"}.mdi-swap-horizontal-circle::before{content:\"\\F0FE1\"}.mdi-swap-horizontal-circle-outline::before{content:\"\\F0FE2\"}.mdi-swap-horizontal-variant::before{content:\"\\F08C1\"}.mdi-swap-vertical::before{content:\"\\F04E2\"}.mdi-swap-vertical-bold::before{content:\"\\F0BCE\"}.mdi-swap-vertical-circle::before{content:\"\\F0FE3\"}.mdi-swap-vertical-circle-outline::before{content:\"\\F0FE4\"}.mdi-swap-vertical-variant::before{content:\"\\F08C2\"}.mdi-swim::before{content:\"\\F04E3\"}.mdi-switch::before{content:\"\\F04E4\"}.mdi-sword::before{content:\"\\F04E5\"}.mdi-sword-cross::before{content:\"\\F0787\"}.mdi-syllabary-hangul::before{content:\"\\F1333\"}.mdi-syllabary-hiragana::before{content:\"\\F1334\"}.mdi-syllabary-katakana::before{content:\"\\F1335\"}.mdi-syllabary-katakana-half-width::before{content:\"\\F1336\"}.mdi-symfony::before{content:\"\\F0AE6\"}.mdi-sync::before{content:\"\\F04E6\"}.mdi-sync-alert::before{content:\"\\F04E7\"}.mdi-sync-circle::before{content:\"\\F1378\"}.mdi-sync-off::before{content:\"\\F04E8\"}.mdi-tab::before{content:\"\\F04E9\"}.mdi-tab-minus::before{content:\"\\F0B4B\"}.mdi-tab-plus::before{content:\"\\F075C\"}.mdi-tab-remove::before{content:\"\\F0B4C\"}.mdi-tab-unselected::before{content:\"\\F04EA\"}.mdi-table::before{content:\"\\F04EB\"}.mdi-table-border::before{content:\"\\F0A18\"}.mdi-table-chair::before{content:\"\\F1061\"}.mdi-table-column::before{content:\"\\F0835\"}.mdi-table-column-plus-after::before{content:\"\\F04EC\"}.mdi-table-column-plus-before::before{content:\"\\F04ED\"}.mdi-table-column-remove::before{content:\"\\F04EE\"}.mdi-table-column-width::before{content:\"\\F04EF\"}.mdi-table-edit::before{content:\"\\F04F0\"}.mdi-table-eye::before{content:\"\\F1094\"}.mdi-table-furniture::before{content:\"\\F05BC\"}.mdi-table-headers-eye::before{content:\"\\F121D\"}.mdi-table-headers-eye-off::before{content:\"\\F121E\"}.mdi-table-large::before{content:\"\\F04F1\"}.mdi-table-large-plus::before{content:\"\\F0F87\"}.mdi-table-large-remove::before{content:\"\\F0F88\"}.mdi-table-merge-cells::before{content:\"\\F09A6\"}.mdi-table-of-contents::before{content:\"\\F0836\"}.mdi-table-plus::before{content:\"\\F0A75\"}.mdi-table-refresh::before{content:\"\\F13A0\"}.mdi-table-remove::before{content:\"\\F0A76\"}.mdi-table-row::before{content:\"\\F0837\"}.mdi-table-row-height::before{content:\"\\F04F2\"}.mdi-table-row-plus-after::before{content:\"\\F04F3\"}.mdi-table-row-plus-before::before{content:\"\\F04F4\"}.mdi-table-row-remove::before{content:\"\\F04F5\"}.mdi-table-search::before{content:\"\\F090F\"}.mdi-table-settings::before{content:\"\\F0838\"}.mdi-table-sync::before{content:\"\\F13A1\"}.mdi-table-tennis::before{content:\"\\F0E68\"}.mdi-tablet::before{content:\"\\F04F6\"}.mdi-tablet-android::before{content:\"\\F04F7\"}.mdi-tablet-cellphone::before{content:\"\\F09A7\"}.mdi-tablet-dashboard::before{content:\"\\F0ECE\"}.mdi-tablet-ipad::before{content:\"\\F04F8\"}.mdi-taco::before{content:\"\\F0762\"}.mdi-tag::before{content:\"\\F04F9\"}.mdi-tag-faces::before{content:\"\\F04FA\"}.mdi-tag-heart::before{content:\"\\F068B\"}.mdi-tag-heart-outline::before{content:\"\\F0BCF\"}.mdi-tag-minus::before{content:\"\\F0910\"}.mdi-tag-minus-outline::before{content:\"\\F121F\"}.mdi-tag-multiple::before{content:\"\\F04FB\"}.mdi-tag-multiple-outline::before{content:\"\\F12F7\"}.mdi-tag-off::before{content:\"\\F1220\"}.mdi-tag-off-outline::before{content:\"\\F1221\"}.mdi-tag-outline::before{content:\"\\F04FC\"}.mdi-tag-plus::before{content:\"\\F0722\"}.mdi-tag-plus-outline::before{content:\"\\F1222\"}.mdi-tag-remove::before{content:\"\\F0723\"}.mdi-tag-remove-outline::before{content:\"\\F1223\"}.mdi-tag-text::before{content:\"\\F1224\"}.mdi-tag-text-outline::before{content:\"\\F04FD\"}.mdi-tank::before{content:\"\\F0D3A\"}.mdi-tanker-truck::before{content:\"\\F0FE5\"}.mdi-tape-measure::before{content:\"\\F0B4D\"}.mdi-target::before{content:\"\\F04FE\"}.mdi-target-account::before{content:\"\\F0BD0\"}.mdi-target-variant::before{content:\"\\F0A77\"}.mdi-taxi::before{content:\"\\F04FF\"}.mdi-tea::before{content:\"\\F0D9E\"}.mdi-tea-outline::before{content:\"\\F0D9F\"}.mdi-teach::before{content:\"\\F0890\"}.mdi-teamviewer::before{content:\"\\F0500\"}.mdi-telegram::before{content:\"\\F0501\"}.mdi-telescope::before{content:\"\\F0B4E\"}.mdi-television::before{content:\"\\F0502\"}.mdi-television-ambient-light::before{content:\"\\F1356\"}.mdi-television-box::before{content:\"\\F0839\"}.mdi-television-classic::before{content:\"\\F07F4\"}.mdi-television-classic-off::before{content:\"\\F083A\"}.mdi-television-clean::before{content:\"\\F1110\"}.mdi-television-guide::before{content:\"\\F0503\"}.mdi-television-off::before{content:\"\\F083B\"}.mdi-television-pause::before{content:\"\\F0F89\"}.mdi-television-play::before{content:\"\\F0ECF\"}.mdi-television-stop::before{content:\"\\F0F8A\"}.mdi-temperature-celsius::before{content:\"\\F0504\"}.mdi-temperature-fahrenheit::before{content:\"\\F0505\"}.mdi-temperature-kelvin::before{content:\"\\F0506\"}.mdi-tennis::before{content:\"\\F0DA0\"}.mdi-tennis-ball::before{content:\"\\F0507\"}.mdi-tent::before{content:\"\\F0508\"}.mdi-terraform::before{content:\"\\F1062\"}.mdi-terrain::before{content:\"\\F0509\"}.mdi-test-tube::before{content:\"\\F0668\"}.mdi-test-tube-empty::before{content:\"\\F0911\"}.mdi-test-tube-off::before{content:\"\\F0912\"}.mdi-text::before{content:\"\\F09A8\"}.mdi-text-box::before{content:\"\\F021A\"}.mdi-text-box-check::before{content:\"\\F0EA6\"}.mdi-text-box-check-outline::before{content:\"\\F0EA7\"}.mdi-text-box-minus::before{content:\"\\F0EA8\"}.mdi-text-box-minus-outline::before{content:\"\\F0EA9\"}.mdi-text-box-multiple::before{content:\"\\F0AB7\"}.mdi-text-box-multiple-outline::before{content:\"\\F0AB8\"}.mdi-text-box-outline::before{content:\"\\F09ED\"}.mdi-text-box-plus::before{content:\"\\F0EAA\"}.mdi-text-box-plus-outline::before{content:\"\\F0EAB\"}.mdi-text-box-remove::before{content:\"\\F0EAC\"}.mdi-text-box-remove-outline::before{content:\"\\F0EAD\"}.mdi-text-box-search::before{content:\"\\F0EAE\"}.mdi-text-box-search-outline::before{content:\"\\F0EAF\"}.mdi-text-recognition::before{content:\"\\F113D\"}.mdi-text-shadow::before{content:\"\\F0669\"}.mdi-text-short::before{content:\"\\F09A9\"}.mdi-text-subject::before{content:\"\\F09AA\"}.mdi-text-to-speech::before{content:\"\\F050A\"}.mdi-text-to-speech-off::before{content:\"\\F050B\"}.mdi-textarea::before{content:\"\\F1095\"}.mdi-textbox::before{content:\"\\F060E\"}.mdi-textbox-lock::before{content:\"\\F135D\"}.mdi-textbox-password::before{content:\"\\F07F5\"}.mdi-texture::before{content:\"\\F050C\"}.mdi-texture-box::before{content:\"\\F0FE6\"}.mdi-theater::before{content:\"\\F050D\"}.mdi-theme-light-dark::before{content:\"\\F050E\"}.mdi-thermometer::before{content:\"\\F050F\"}.mdi-thermometer-alert::before{content:\"\\F0E01\"}.mdi-thermometer-chevron-down::before{content:\"\\F0E02\"}.mdi-thermometer-chevron-up::before{content:\"\\F0E03\"}.mdi-thermometer-high::before{content:\"\\F10C2\"}.mdi-thermometer-lines::before{content:\"\\F0510\"}.mdi-thermometer-low::before{content:\"\\F10C3\"}.mdi-thermometer-minus::before{content:\"\\F0E04\"}.mdi-thermometer-plus::before{content:\"\\F0E05\"}.mdi-thermostat::before{content:\"\\F0393\"}.mdi-thermostat-box::before{content:\"\\F0891\"}.mdi-thought-bubble::before{content:\"\\F07F6\"}.mdi-thought-bubble-outline::before{content:\"\\F07F7\"}.mdi-thumb-down::before{content:\"\\F0511\"}.mdi-thumb-down-outline::before{content:\"\\F0512\"}.mdi-thumb-up::before{content:\"\\F0513\"}.mdi-thumb-up-outline::before{content:\"\\F0514\"}.mdi-thumbs-up-down::before{content:\"\\F0515\"}.mdi-ticket::before{content:\"\\F0516\"}.mdi-ticket-account::before{content:\"\\F0517\"}.mdi-ticket-confirmation::before{content:\"\\F0518\"}.mdi-ticket-confirmation-outline::before{content:\"\\F13AA\"}.mdi-ticket-outline::before{content:\"\\F0913\"}.mdi-ticket-percent::before{content:\"\\F0724\"}.mdi-tie::before{content:\"\\F0519\"}.mdi-tilde::before{content:\"\\F0725\"}.mdi-timelapse::before{content:\"\\F051A\"}.mdi-timeline::before{content:\"\\F0BD1\"}.mdi-timeline-alert::before{content:\"\\F0F95\"}.mdi-timeline-alert-outline::before{content:\"\\F0F98\"}.mdi-timeline-clock::before{content:\"\\F11FB\"}.mdi-timeline-clock-outline::before{content:\"\\F11FC\"}.mdi-timeline-help::before{content:\"\\F0F99\"}.mdi-timeline-help-outline::before{content:\"\\F0F9A\"}.mdi-timeline-outline::before{content:\"\\F0BD2\"}.mdi-timeline-plus::before{content:\"\\F0F96\"}.mdi-timeline-plus-outline::before{content:\"\\F0F97\"}.mdi-timeline-text::before{content:\"\\F0BD3\"}.mdi-timeline-text-outline::before{content:\"\\F0BD4\"}.mdi-timer::before{content:\"\\F13AB\"}.mdi-timer-10::before{content:\"\\F051C\"}.mdi-timer-3::before{content:\"\\F051D\"}.mdi-timer-off::before{content:\"\\F13AC\"}.mdi-timer-off-outline::before{content:\"\\F051E\"}.mdi-timer-outline::before{content:\"\\F051B\"}.mdi-timer-sand::before{content:\"\\F051F\"}.mdi-timer-sand-empty::before{content:\"\\F06AD\"}.mdi-timer-sand-full::before{content:\"\\F078C\"}.mdi-timetable::before{content:\"\\F0520\"}.mdi-toaster::before{content:\"\\F1063\"}.mdi-toaster-off::before{content:\"\\F11B7\"}.mdi-toaster-oven::before{content:\"\\F0CD3\"}.mdi-toggle-switch::before{content:\"\\F0521\"}.mdi-toggle-switch-off::before{content:\"\\F0522\"}.mdi-toggle-switch-off-outline::before{content:\"\\F0A19\"}.mdi-toggle-switch-outline::before{content:\"\\F0A1A\"}.mdi-toilet::before{content:\"\\F09AB\"}.mdi-toolbox::before{content:\"\\F09AC\"}.mdi-toolbox-outline::before{content:\"\\F09AD\"}.mdi-tools::before{content:\"\\F1064\"}.mdi-tooltip::before{content:\"\\F0523\"}.mdi-tooltip-account::before{content:\"\\F000C\"}.mdi-tooltip-edit::before{content:\"\\F0524\"}.mdi-tooltip-edit-outline::before{content:\"\\F12C5\"}.mdi-tooltip-image::before{content:\"\\F0525\"}.mdi-tooltip-image-outline::before{content:\"\\F0BD5\"}.mdi-tooltip-outline::before{content:\"\\F0526\"}.mdi-tooltip-plus::before{content:\"\\F0BD6\"}.mdi-tooltip-plus-outline::before{content:\"\\F0527\"}.mdi-tooltip-text::before{content:\"\\F0528\"}.mdi-tooltip-text-outline::before{content:\"\\F0BD7\"}.mdi-tooth::before{content:\"\\F08C3\"}.mdi-tooth-outline::before{content:\"\\F0529\"}.mdi-toothbrush::before{content:\"\\F1129\"}.mdi-toothbrush-electric::before{content:\"\\F112C\"}.mdi-toothbrush-paste::before{content:\"\\F112A\"}.mdi-tortoise::before{content:\"\\F0D3B\"}.mdi-toslink::before{content:\"\\F12B8\"}.mdi-tournament::before{content:\"\\F09AE\"}.mdi-tow-truck::before{content:\"\\F083C\"}.mdi-tower-beach::before{content:\"\\F0681\"}.mdi-tower-fire::before{content:\"\\F0682\"}.mdi-toy-brick::before{content:\"\\F1288\"}.mdi-toy-brick-marker::before{content:\"\\F1289\"}.mdi-toy-brick-marker-outline::before{content:\"\\F128A\"}.mdi-toy-brick-minus::before{content:\"\\F128B\"}.mdi-toy-brick-minus-outline::before{content:\"\\F128C\"}.mdi-toy-brick-outline::before{content:\"\\F128D\"}.mdi-toy-brick-plus::before{content:\"\\F128E\"}.mdi-toy-brick-plus-outline::before{content:\"\\F128F\"}.mdi-toy-brick-remove::before{content:\"\\F1290\"}.mdi-toy-brick-remove-outline::before{content:\"\\F1291\"}.mdi-toy-brick-search::before{content:\"\\F1292\"}.mdi-toy-brick-search-outline::before{content:\"\\F1293\"}.mdi-track-light::before{content:\"\\F0914\"}.mdi-trackpad::before{content:\"\\F07F8\"}.mdi-trackpad-lock::before{content:\"\\F0933\"}.mdi-tractor::before{content:\"\\F0892\"}.mdi-trademark::before{content:\"\\F0A78\"}.mdi-traffic-cone::before{content:\"\\F137C\"}.mdi-traffic-light::before{content:\"\\F052B\"}.mdi-train::before{content:\"\\F052C\"}.mdi-train-car::before{content:\"\\F0BD8\"}.mdi-train-variant::before{content:\"\\F08C4\"}.mdi-tram::before{content:\"\\F052D\"}.mdi-tram-side::before{content:\"\\F0FE7\"}.mdi-transcribe::before{content:\"\\F052E\"}.mdi-transcribe-close::before{content:\"\\F052F\"}.mdi-transfer::before{content:\"\\F1065\"}.mdi-transfer-down::before{content:\"\\F0DA1\"}.mdi-transfer-left::before{content:\"\\F0DA2\"}.mdi-transfer-right::before{content:\"\\F0530\"}.mdi-transfer-up::before{content:\"\\F0DA3\"}.mdi-transit-connection::before{content:\"\\F0D3C\"}.mdi-transit-connection-variant::before{content:\"\\F0D3D\"}.mdi-transit-detour::before{content:\"\\F0F8B\"}.mdi-transit-transfer::before{content:\"\\F06AE\"}.mdi-transition::before{content:\"\\F0915\"}.mdi-transition-masked::before{content:\"\\F0916\"}.mdi-translate::before{content:\"\\F05CA\"}.mdi-translate-off::before{content:\"\\F0E06\"}.mdi-transmission-tower::before{content:\"\\F0D3E\"}.mdi-trash-can::before{content:\"\\F0A79\"}.mdi-trash-can-outline::before{content:\"\\F0A7A\"}.mdi-tray::before{content:\"\\F1294\"}.mdi-tray-alert::before{content:\"\\F1295\"}.mdi-tray-full::before{content:\"\\F1296\"}.mdi-tray-minus::before{content:\"\\F1297\"}.mdi-tray-plus::before{content:\"\\F1298\"}.mdi-tray-remove::before{content:\"\\F1299\"}.mdi-treasure-chest::before{content:\"\\F0726\"}.mdi-tree::before{content:\"\\F0531\"}.mdi-tree-outline::before{content:\"\\F0E69\"}.mdi-trello::before{content:\"\\F0532\"}.mdi-trending-down::before{content:\"\\F0533\"}.mdi-trending-neutral::before{content:\"\\F0534\"}.mdi-trending-up::before{content:\"\\F0535\"}.mdi-triangle::before{content:\"\\F0536\"}.mdi-triangle-outline::before{content:\"\\F0537\"}.mdi-triforce::before{content:\"\\F0BD9\"}.mdi-trophy::before{content:\"\\F0538\"}.mdi-trophy-award::before{content:\"\\F0539\"}.mdi-trophy-broken::before{content:\"\\F0DA4\"}.mdi-trophy-outline::before{content:\"\\F053A\"}.mdi-trophy-variant::before{content:\"\\F053B\"}.mdi-trophy-variant-outline::before{content:\"\\F053C\"}.mdi-truck::before{content:\"\\F053D\"}.mdi-truck-check::before{content:\"\\F0CD4\"}.mdi-truck-check-outline::before{content:\"\\F129A\"}.mdi-truck-delivery::before{content:\"\\F053E\"}.mdi-truck-delivery-outline::before{content:\"\\F129B\"}.mdi-truck-fast::before{content:\"\\F0788\"}.mdi-truck-fast-outline::before{content:\"\\F129C\"}.mdi-truck-outline::before{content:\"\\F129D\"}.mdi-truck-trailer::before{content:\"\\F0727\"}.mdi-trumpet::before{content:\"\\F1096\"}.mdi-tshirt-crew::before{content:\"\\F0A7B\"}.mdi-tshirt-crew-outline::before{content:\"\\F053F\"}.mdi-tshirt-v::before{content:\"\\F0A7C\"}.mdi-tshirt-v-outline::before{content:\"\\F0540\"}.mdi-tumble-dryer::before{content:\"\\F0917\"}.mdi-tumble-dryer-alert::before{content:\"\\F11BA\"}.mdi-tumble-dryer-off::before{content:\"\\F11BB\"}.mdi-tune::before{content:\"\\F062E\"}.mdi-tune-vertical::before{content:\"\\F066A\"}.mdi-turnstile::before{content:\"\\F0CD5\"}.mdi-turnstile-outline::before{content:\"\\F0CD6\"}.mdi-turtle::before{content:\"\\F0CD7\"}.mdi-twitch::before{content:\"\\F0543\"}.mdi-twitter::before{content:\"\\F0544\"}.mdi-twitter-retweet::before{content:\"\\F0547\"}.mdi-two-factor-authentication::before{content:\"\\F09AF\"}.mdi-typewriter::before{content:\"\\F0F2D\"}.mdi-ubisoft::before{content:\"\\F0BDA\"}.mdi-ubuntu::before{content:\"\\F0548\"}.mdi-ufo::before{content:\"\\F10C4\"}.mdi-ufo-outline::before{content:\"\\F10C5\"}.mdi-ultra-high-definition::before{content:\"\\F07F9\"}.mdi-umbraco::before{content:\"\\F0549\"}.mdi-umbrella::before{content:\"\\F054A\"}.mdi-umbrella-closed::before{content:\"\\F09B0\"}.mdi-umbrella-outline::before{content:\"\\F054B\"}.mdi-undo::before{content:\"\\F054C\"}.mdi-undo-variant::before{content:\"\\F054D\"}.mdi-unfold-less-horizontal::before{content:\"\\F054E\"}.mdi-unfold-less-vertical::before{content:\"\\F0760\"}.mdi-unfold-more-horizontal::before{content:\"\\F054F\"}.mdi-unfold-more-vertical::before{content:\"\\F0761\"}.mdi-ungroup::before{content:\"\\F0550\"}.mdi-unicode::before{content:\"\\F0ED0\"}.mdi-unity::before{content:\"\\F06AF\"}.mdi-unreal::before{content:\"\\F09B1\"}.mdi-untappd::before{content:\"\\F0551\"}.mdi-update::before{content:\"\\F06B0\"}.mdi-upload::before{content:\"\\F0552\"}.mdi-upload-lock::before{content:\"\\F1373\"}.mdi-upload-lock-outline::before{content:\"\\F1374\"}.mdi-upload-multiple::before{content:\"\\F083D\"}.mdi-upload-network::before{content:\"\\F06F6\"}.mdi-upload-network-outline::before{content:\"\\F0CD8\"}.mdi-upload-off::before{content:\"\\F10C6\"}.mdi-upload-off-outline::before{content:\"\\F10C7\"}.mdi-upload-outline::before{content:\"\\F0E07\"}.mdi-usb::before{content:\"\\F0553\"}.mdi-usb-flash-drive::before{content:\"\\F129E\"}.mdi-usb-flash-drive-outline::before{content:\"\\F129F\"}.mdi-usb-port::before{content:\"\\F11F0\"}.mdi-valve::before{content:\"\\F1066\"}.mdi-valve-closed::before{content:\"\\F1067\"}.mdi-valve-open::before{content:\"\\F1068\"}.mdi-van-passenger::before{content:\"\\F07FA\"}.mdi-van-utility::before{content:\"\\F07FB\"}.mdi-vanish::before{content:\"\\F07FC\"}.mdi-vanity-light::before{content:\"\\F11E1\"}.mdi-variable::before{content:\"\\F0AE7\"}.mdi-variable-box::before{content:\"\\F1111\"}.mdi-vector-arrange-above::before{content:\"\\F0554\"}.mdi-vector-arrange-below::before{content:\"\\F0555\"}.mdi-vector-bezier::before{content:\"\\F0AE8\"}.mdi-vector-circle::before{content:\"\\F0556\"}.mdi-vector-circle-variant::before{content:\"\\F0557\"}.mdi-vector-combine::before{content:\"\\F0558\"}.mdi-vector-curve::before{content:\"\\F0559\"}.mdi-vector-difference::before{content:\"\\F055A\"}.mdi-vector-difference-ab::before{content:\"\\F055B\"}.mdi-vector-difference-ba::before{content:\"\\F055C\"}.mdi-vector-ellipse::before{content:\"\\F0893\"}.mdi-vector-intersection::before{content:\"\\F055D\"}.mdi-vector-line::before{content:\"\\F055E\"}.mdi-vector-link::before{content:\"\\F0FE8\"}.mdi-vector-point::before{content:\"\\F055F\"}.mdi-vector-polygon::before{content:\"\\F0560\"}.mdi-vector-polyline::before{content:\"\\F0561\"}.mdi-vector-polyline-edit::before{content:\"\\F1225\"}.mdi-vector-polyline-minus::before{content:\"\\F1226\"}.mdi-vector-polyline-plus::before{content:\"\\F1227\"}.mdi-vector-polyline-remove::before{content:\"\\F1228\"}.mdi-vector-radius::before{content:\"\\F074A\"}.mdi-vector-rectangle::before{content:\"\\F05C6\"}.mdi-vector-selection::before{content:\"\\F0562\"}.mdi-vector-square::before{content:\"\\F0001\"}.mdi-vector-triangle::before{content:\"\\F0563\"}.mdi-vector-union::before{content:\"\\F0564\"}.mdi-vhs::before{content:\"\\F0A1B\"}.mdi-vibrate::before{content:\"\\F0566\"}.mdi-vibrate-off::before{content:\"\\F0CD9\"}.mdi-video::before{content:\"\\F0567\"}.mdi-video-3d::before{content:\"\\F07FD\"}.mdi-video-3d-variant::before{content:\"\\F0ED1\"}.mdi-video-4k-box::before{content:\"\\F083E\"}.mdi-video-account::before{content:\"\\F0919\"}.mdi-video-box::before{content:\"\\F00FD\"}.mdi-video-box-off::before{content:\"\\F00FE\"}.mdi-video-check::before{content:\"\\F1069\"}.mdi-video-check-outline::before{content:\"\\F106A\"}.mdi-video-image::before{content:\"\\F091A\"}.mdi-video-input-antenna::before{content:\"\\F083F\"}.mdi-video-input-component::before{content:\"\\F0840\"}.mdi-video-input-hdmi::before{content:\"\\F0841\"}.mdi-video-input-scart::before{content:\"\\F0F8C\"}.mdi-video-input-svideo::before{content:\"\\F0842\"}.mdi-video-minus::before{content:\"\\F09B2\"}.mdi-video-minus-outline::before{content:\"\\F02BA\"}.mdi-video-off::before{content:\"\\F0568\"}.mdi-video-off-outline::before{content:\"\\F0BDB\"}.mdi-video-outline::before{content:\"\\F0BDC\"}.mdi-video-plus::before{content:\"\\F09B3\"}.mdi-video-plus-outline::before{content:\"\\F01D3\"}.mdi-video-stabilization::before{content:\"\\F091B\"}.mdi-video-switch::before{content:\"\\F0569\"}.mdi-video-switch-outline::before{content:\"\\F0790\"}.mdi-video-vintage::before{content:\"\\F0A1C\"}.mdi-video-wireless::before{content:\"\\F0ED2\"}.mdi-video-wireless-outline::before{content:\"\\F0ED3\"}.mdi-view-agenda::before{content:\"\\F056A\"}.mdi-view-agenda-outline::before{content:\"\\F11D8\"}.mdi-view-array::before{content:\"\\F056B\"}.mdi-view-carousel::before{content:\"\\F056C\"}.mdi-view-column::before{content:\"\\F056D\"}.mdi-view-comfy::before{content:\"\\F0E6A\"}.mdi-view-compact::before{content:\"\\F0E6B\"}.mdi-view-compact-outline::before{content:\"\\F0E6C\"}.mdi-view-dashboard::before{content:\"\\F056E\"}.mdi-view-dashboard-outline::before{content:\"\\F0A1D\"}.mdi-view-dashboard-variant::before{content:\"\\F0843\"}.mdi-view-day::before{content:\"\\F056F\"}.mdi-view-grid::before{content:\"\\F0570\"}.mdi-view-grid-outline::before{content:\"\\F11D9\"}.mdi-view-grid-plus::before{content:\"\\F0F8D\"}.mdi-view-grid-plus-outline::before{content:\"\\F11DA\"}.mdi-view-headline::before{content:\"\\F0571\"}.mdi-view-list::before{content:\"\\F0572\"}.mdi-view-module::before{content:\"\\F0573\"}.mdi-view-parallel::before{content:\"\\F0728\"}.mdi-view-quilt::before{content:\"\\F0574\"}.mdi-view-sequential::before{content:\"\\F0729\"}.mdi-view-split-horizontal::before{content:\"\\F0BCB\"}.mdi-view-split-vertical::before{content:\"\\F0BCC\"}.mdi-view-stream::before{content:\"\\F0575\"}.mdi-view-week::before{content:\"\\F0576\"}.mdi-vimeo::before{content:\"\\F0577\"}.mdi-violin::before{content:\"\\F060F\"}.mdi-virtual-reality::before{content:\"\\F0894\"}.mdi-vk::before{content:\"\\F0579\"}.mdi-vlc::before{content:\"\\F057C\"}.mdi-voice-off::before{content:\"\\F0ED4\"}.mdi-voicemail::before{content:\"\\F057D\"}.mdi-volleyball::before{content:\"\\F09B4\"}.mdi-volume-high::before{content:\"\\F057E\"}.mdi-volume-low::before{content:\"\\F057F\"}.mdi-volume-medium::before{content:\"\\F0580\"}.mdi-volume-minus::before{content:\"\\F075E\"}.mdi-volume-mute::before{content:\"\\F075F\"}.mdi-volume-off::before{content:\"\\F0581\"}.mdi-volume-plus::before{content:\"\\F075D\"}.mdi-volume-source::before{content:\"\\F1120\"}.mdi-volume-variant-off::before{content:\"\\F0E08\"}.mdi-volume-vibrate::before{content:\"\\F1121\"}.mdi-vote::before{content:\"\\F0A1F\"}.mdi-vote-outline::before{content:\"\\F0A20\"}.mdi-vpn::before{content:\"\\F0582\"}.mdi-vuejs::before{content:\"\\F0844\"}.mdi-vuetify::before{content:\"\\F0E6D\"}.mdi-walk::before{content:\"\\F0583\"}.mdi-wall::before{content:\"\\F07FE\"}.mdi-wall-sconce::before{content:\"\\F091C\"}.mdi-wall-sconce-flat::before{content:\"\\F091D\"}.mdi-wall-sconce-flat-variant::before{content:\"\\F041C\"}.mdi-wall-sconce-round::before{content:\"\\F0748\"}.mdi-wall-sconce-round-variant::before{content:\"\\F091E\"}.mdi-wallet::before{content:\"\\F0584\"}.mdi-wallet-giftcard::before{content:\"\\F0585\"}.mdi-wallet-membership::before{content:\"\\F0586\"}.mdi-wallet-outline::before{content:\"\\F0BDD\"}.mdi-wallet-plus::before{content:\"\\F0F8E\"}.mdi-wallet-plus-outline::before{content:\"\\F0F8F\"}.mdi-wallet-travel::before{content:\"\\F0587\"}.mdi-wallpaper::before{content:\"\\F0E09\"}.mdi-wan::before{content:\"\\F0588\"}.mdi-wardrobe::before{content:\"\\F0F90\"}.mdi-wardrobe-outline::before{content:\"\\F0F91\"}.mdi-warehouse::before{content:\"\\F0F81\"}.mdi-washing-machine::before{content:\"\\F072A\"}.mdi-washing-machine-alert::before{content:\"\\F11BC\"}.mdi-washing-machine-off::before{content:\"\\F11BD\"}.mdi-watch::before{content:\"\\F0589\"}.mdi-watch-export::before{content:\"\\F058A\"}.mdi-watch-export-variant::before{content:\"\\F0895\"}.mdi-watch-import::before{content:\"\\F058B\"}.mdi-watch-import-variant::before{content:\"\\F0896\"}.mdi-watch-variant::before{content:\"\\F0897\"}.mdi-watch-vibrate::before{content:\"\\F06B1\"}.mdi-watch-vibrate-off::before{content:\"\\F0CDA\"}.mdi-water::before{content:\"\\F058C\"}.mdi-water-boiler::before{content:\"\\F0F92\"}.mdi-water-boiler-alert::before{content:\"\\F11B3\"}.mdi-water-boiler-off::before{content:\"\\F11B4\"}.mdi-water-off::before{content:\"\\F058D\"}.mdi-water-outline::before{content:\"\\F0E0A\"}.mdi-water-percent::before{content:\"\\F058E\"}.mdi-water-polo::before{content:\"\\F12A0\"}.mdi-water-pump::before{content:\"\\F058F\"}.mdi-water-pump-off::before{content:\"\\F0F93\"}.mdi-water-well::before{content:\"\\F106B\"}.mdi-water-well-outline::before{content:\"\\F106C\"}.mdi-watermark::before{content:\"\\F0612\"}.mdi-wave::before{content:\"\\F0F2E\"}.mdi-waves::before{content:\"\\F078D\"}.mdi-waze::before{content:\"\\F0BDE\"}.mdi-weather-cloudy::before{content:\"\\F0590\"}.mdi-weather-cloudy-alert::before{content:\"\\F0F2F\"}.mdi-weather-cloudy-arrow-right::before{content:\"\\F0E6E\"}.mdi-weather-fog::before{content:\"\\F0591\"}.mdi-weather-hail::before{content:\"\\F0592\"}.mdi-weather-hazy::before{content:\"\\F0F30\"}.mdi-weather-hurricane::before{content:\"\\F0898\"}.mdi-weather-lightning::before{content:\"\\F0593\"}.mdi-weather-lightning-rainy::before{content:\"\\F067E\"}.mdi-weather-night::before{content:\"\\F0594\"}.mdi-weather-night-partly-cloudy::before{content:\"\\F0F31\"}.mdi-weather-partly-cloudy::before{content:\"\\F0595\"}.mdi-weather-partly-lightning::before{content:\"\\F0F32\"}.mdi-weather-partly-rainy::before{content:\"\\F0F33\"}.mdi-weather-partly-snowy::before{content:\"\\F0F34\"}.mdi-weather-partly-snowy-rainy::before{content:\"\\F0F35\"}.mdi-weather-pouring::before{content:\"\\F0596\"}.mdi-weather-rainy::before{content:\"\\F0597\"}.mdi-weather-snowy::before{content:\"\\F0598\"}.mdi-weather-snowy-heavy::before{content:\"\\F0F36\"}.mdi-weather-snowy-rainy::before{content:\"\\F067F\"}.mdi-weather-sunny::before{content:\"\\F0599\"}.mdi-weather-sunny-alert::before{content:\"\\F0F37\"}.mdi-weather-sunset::before{content:\"\\F059A\"}.mdi-weather-sunset-down::before{content:\"\\F059B\"}.mdi-weather-sunset-up::before{content:\"\\F059C\"}.mdi-weather-tornado::before{content:\"\\F0F38\"}.mdi-weather-windy::before{content:\"\\F059D\"}.mdi-weather-windy-variant::before{content:\"\\F059E\"}.mdi-web::before{content:\"\\F059F\"}.mdi-web-box::before{content:\"\\F0F94\"}.mdi-web-clock::before{content:\"\\F124A\"}.mdi-webcam::before{content:\"\\F05A0\"}.mdi-webhook::before{content:\"\\F062F\"}.mdi-webpack::before{content:\"\\F072B\"}.mdi-webrtc::before{content:\"\\F1248\"}.mdi-wechat::before{content:\"\\F0611\"}.mdi-weight::before{content:\"\\F05A1\"}.mdi-weight-gram::before{content:\"\\F0D3F\"}.mdi-weight-kilogram::before{content:\"\\F05A2\"}.mdi-weight-lifter::before{content:\"\\F115D\"}.mdi-weight-pound::before{content:\"\\F09B5\"}.mdi-whatsapp::before{content:\"\\F05A3\"}.mdi-wheelchair-accessibility::before{content:\"\\F05A4\"}.mdi-whistle::before{content:\"\\F09B6\"}.mdi-whistle-outline::before{content:\"\\F12BC\"}.mdi-white-balance-auto::before{content:\"\\F05A5\"}.mdi-white-balance-incandescent::before{content:\"\\F05A6\"}.mdi-white-balance-iridescent::before{content:\"\\F05A7\"}.mdi-white-balance-sunny::before{content:\"\\F05A8\"}.mdi-widgets::before{content:\"\\F072C\"}.mdi-widgets-outline::before{content:\"\\F1355\"}.mdi-wifi::before{content:\"\\F05A9\"}.mdi-wifi-off::before{content:\"\\F05AA\"}.mdi-wifi-star::before{content:\"\\F0E0B\"}.mdi-wifi-strength-1::before{content:\"\\F091F\"}.mdi-wifi-strength-1-alert::before{content:\"\\F0920\"}.mdi-wifi-strength-1-lock::before{content:\"\\F0921\"}.mdi-wifi-strength-2::before{content:\"\\F0922\"}.mdi-wifi-strength-2-alert::before{content:\"\\F0923\"}.mdi-wifi-strength-2-lock::before{content:\"\\F0924\"}.mdi-wifi-strength-3::before{content:\"\\F0925\"}.mdi-wifi-strength-3-alert::before{content:\"\\F0926\"}.mdi-wifi-strength-3-lock::before{content:\"\\F0927\"}.mdi-wifi-strength-4::before{content:\"\\F0928\"}.mdi-wifi-strength-4-alert::before{content:\"\\F0929\"}.mdi-wifi-strength-4-lock::before{content:\"\\F092A\"}.mdi-wifi-strength-alert-outline::before{content:\"\\F092B\"}.mdi-wifi-strength-lock-outline::before{content:\"\\F092C\"}.mdi-wifi-strength-off::before{content:\"\\F092D\"}.mdi-wifi-strength-off-outline::before{content:\"\\F092E\"}.mdi-wifi-strength-outline::before{content:\"\\F092F\"}.mdi-wikipedia::before{content:\"\\F05AC\"}.mdi-wind-turbine::before{content:\"\\F0DA5\"}.mdi-window-close::before{content:\"\\F05AD\"}.mdi-window-closed::before{content:\"\\F05AE\"}.mdi-window-closed-variant::before{content:\"\\F11DB\"}.mdi-window-maximize::before{content:\"\\F05AF\"}.mdi-window-minimize::before{content:\"\\F05B0\"}.mdi-window-open::before{content:\"\\F05B1\"}.mdi-window-open-variant::before{content:\"\\F11DC\"}.mdi-window-restore::before{content:\"\\F05B2\"}.mdi-window-shutter::before{content:\"\\F111C\"}.mdi-window-shutter-alert::before{content:\"\\F111D\"}.mdi-window-shutter-open::before{content:\"\\F111E\"}.mdi-wiper::before{content:\"\\F0AE9\"}.mdi-wiper-wash::before{content:\"\\F0DA6\"}.mdi-wordpress::before{content:\"\\F05B4\"}.mdi-wrap::before{content:\"\\F05B6\"}.mdi-wrap-disabled::before{content:\"\\F0BDF\"}.mdi-wrench::before{content:\"\\F05B7\"}.mdi-wrench-outline::before{content:\"\\F0BE0\"}.mdi-xamarin::before{content:\"\\F0845\"}.mdi-xamarin-outline::before{content:\"\\F0846\"}.mdi-xing::before{content:\"\\F05BE\"}.mdi-xml::before{content:\"\\F05C0\"}.mdi-xmpp::before{content:\"\\F07FF\"}.mdi-y-combinator::before{content:\"\\F0624\"}.mdi-yahoo::before{content:\"\\F0B4F\"}.mdi-yeast::before{content:\"\\F05C1\"}.mdi-yin-yang::before{content:\"\\F0680\"}.mdi-yoga::before{content:\"\\F117C\"}.mdi-youtube::before{content:\"\\F05C3\"}.mdi-youtube-gaming::before{content:\"\\F0848\"}.mdi-youtube-studio::before{content:\"\\F0847\"}.mdi-youtube-subscription::before{content:\"\\F0D40\"}.mdi-youtube-tv::before{content:\"\\F0448\"}.mdi-z-wave::before{content:\"\\F0AEA\"}.mdi-zend::before{content:\"\\F0AEB\"}.mdi-zigbee::before{content:\"\\F0D41\"}.mdi-zip-box::before{content:\"\\F05C4\"}.mdi-zip-box-outline::before{content:\"\\F0FFA\"}.mdi-zip-disk::before{content:\"\\F0A23\"}.mdi-zodiac-aquarius::before{content:\"\\F0A7D\"}.mdi-zodiac-aries::before{content:\"\\F0A7E\"}.mdi-zodiac-cancer::before{content:\"\\F0A7F\"}.mdi-zodiac-capricorn::before{content:\"\\F0A80\"}.mdi-zodiac-gemini::before{content:\"\\F0A81\"}.mdi-zodiac-leo::before{content:\"\\F0A82\"}.mdi-zodiac-libra::before{content:\"\\F0A83\"}.mdi-zodiac-pisces::before{content:\"\\F0A84\"}.mdi-zodiac-sagittarius::before{content:\"\\F0A85\"}.mdi-zodiac-scorpio::before{content:\"\\F0A86\"}.mdi-zodiac-taurus::before{content:\"\\F0A87\"}.mdi-zodiac-virgo::before{content:\"\\F0A88\"}.mdi-blank::before{content:\"\\F68C\";visibility:hidden}.mdi-18px.mdi-set,.mdi-18px.mdi:before{font-size:18px}.mdi-24px.mdi-set,.mdi-24px.mdi:before{font-size:24px}.mdi-36px.mdi-set,.mdi-36px.mdi:before{font-size:36px}.mdi-48px.mdi-set,.mdi-48px.mdi:before{font-size:48px}.mdi-dark:before{color:rgba(0,0,0,0.54)}.mdi-dark.mdi-inactive:before{color:rgba(0,0,0,0.26)}.mdi-light:before{color:#fff}.mdi-light.mdi-inactive:before{color:rgba(255,255,255,0.3)}.mdi-rotate-45:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.mdi-rotate-90:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.mdi-rotate-135:before{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg)}.mdi-rotate-180:before{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.mdi-rotate-225:before{-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg)}.mdi-rotate-270:before{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.mdi-rotate-315:before{-webkit-transform:rotate(315deg);-ms-transform:rotate(315deg);transform:rotate(315deg)}.mdi-flip-h:before{-webkit-transform:scaleX(-1);transform:scaleX(-1);-webkit-filter:FlipH;filter:FlipH;-ms-filter:\"FlipH\"}.mdi-flip-v:before{-webkit-transform:scaleY(-1);transform:scaleY(-1);-webkit-filter:FlipV;filter:FlipV;-ms-filter:\"FlipV\"}.mdi-spin:before{-webkit-animation:mdi-spin 2s infinite linear;animation:mdi-spin 2s infinite linear}@-webkit-keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}:host{display:inline-block}";

const Icone = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Tamanho em pixels, no mesmo formato do `"font-size"` em CSS.
         * Por padrão irá herdar do contexto inserido.
         */
        this.tamanho = 'inherit';
        /**
         * Cor de preenchimento, no mesmo formato do `"color"` em CSS.
         * Por padrão irá herdar do contexto inserido.
         */
        this.cor = 'inherit';
    }
    connectedCallback() {
        this.carregarIcone();
    }
    carregarIcone() {
        if (promiseTracker.isNill(this.icone)) {
            return;
        }
        const label = this.icone.replace(/-/, ' ');
        this.ariaLabel = this.ariaLabel || label;
    }
    render() {
        return (index.h(index.Host, { role: "img" }, index.h("i", { class: `mdi mdi-${this.icone}`, style: { 'font-size': this.tamanho, 'color': this.cor } })));
    }
    static get watchers() { return {
        "icone": ["carregarIcone"]
    }; }
};
Icone.style = iconeCss;

const loaderCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.loader{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:8px}.loader--inline{display:inline;margin:0;padding:0}.dot{display:inline-block;width:18px;height:18px;border-radius:50%;background-color:var(--bth-app-blue);-webkit-transform:scale(0, 0);transform:scale(0, 0);-webkit-animation:loader-animation 1.8s linear infinite;animation:loader-animation 1.8s linear infinite}.dot:nth-child(1){-webkit-animation-delay:0;animation-delay:0}.dot:nth-child(2){-webkit-animation-delay:0.1s;animation-delay:0.1s}.dot:nth-child(3){-webkit-animation-delay:0.2s;animation-delay:0.2s}@-webkit-keyframes loader-animation{0%,100%{-webkit-transform:scale(0, 0);background-color:var(--bth-app-blue)}50%{-webkit-transform:scale(1, 1);background-color:var(--bth-app-blue)}}@keyframes loader-animation{0%,100%{-webkit-transform:scale(0, 0);transform:scale(0, 0);background-color:var(--bth-app-blue)}50%{-webkit-transform:scale(1, 1);transform:scale(1, 1);background-color:var(--bth-app-blue)}}";

const Loader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Define se o loader é inline
         */
        this.inline = false;
    }
    render() {
        return (index.h("div", { class: `loader ${this.inline ? 'loader--inline' : ''}` }, index.h("div", { class: "dot" }), index.h("div", { class: "dot" }), index.h("div", { class: "dot" })));
    }
};
Loader.style = loaderCss;

const UNAUTHORIZED_STATUS_CODE = 401;
const OK_STATUS_CODE = 200;
const isValidAuthorizationConfig = (authorization) => {
    if (promiseTracker.isNill(authorization)) {
        return false;
    }
    return !promiseTracker.isNill(authorization.getAuthorization) && !promiseTracker.isNill(authorization.handleUnauthorizedAccess);
};
class Api {
    constructor(authorization, handleUnauthorizedAccess, baseUrl) {
        this.authorization = authorization;
        this.handleUnauthorizedAccess = handleUnauthorizedAccess;
        this.baseUrl = baseUrl;
    }
    async request(method, path, retryUnauthorizedAccess = true) {
        const response = await fetch(`${this.baseUrl}/${path}`, { method, headers: this.getHeaders() });
        if (response.status === UNAUTHORIZED_STATUS_CODE && retryUnauthorizedAccess && this.handleUnauthorizedAccess !== undefined) {
            await this.handleUnauthorizedAccess();
            return await this.request(method, path, false);
        }
        if (response.status !== OK_STATUS_CODE) {
            throw new Error(response.statusText);
        }
        return await response.json().catch(() => null);
    }
    getHeaders() {
        const headers = new Headers();
        headers.append('Authorization', 'bearer ' + this.authorization.accessToken);
        return headers;
    }
}

const marcaProdutoCss = "@charset \"UTF-8\";*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}a{color:var(--bth-app-blue);text-decoration:none;background-color:transparent}a:focus,a:hover{color:var(--bth-app-blue-dark-10);text-decoration:underline}.marca-produto{-ms-flex-align:center;align-items:center;border:0;color:var(--bth-app-gray-light-40);display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:start;justify-content:start;position:relative;font-size:18px;font-family:inherit;text-transform:uppercase;padding:0px 14px;cursor:pointer}.marca-produto--active{background-color:rgba(255, 255, 255, 0.15)}.marca-produto:before{content:\"\";height:22px;width:26px;background-image:url(\"https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/betha.svg\");background-repeat:no-repeat;margin-right:6px}.marca-produto .marca-produto span{padding-top:1px}.marca-produto:hover{background-color:rgba(255, 255, 255, 0.15);text-decoration:none}.marca-produto__detalhes{cursor:default !important;visibility:hidden;position:absolute;background-color:var(--bth-app-gray-light-40);min-width:462px;max-width:462px;-webkit-box-shadow:0px 3px 6px rgba(0, 0, 0, 0.2);box-shadow:0px 3px 6px rgba(0, 0, 0, 0.2);padding:16px;z-index:1080;top:40px;text-transform:none;color:var(--bth-app-gray-dark-30);left:0;overflow-y:auto;overflow-x:hidden;max-height:400px}.marca-produto__detalhes--show{visibility:visible}.marca-produto__detalhes-solucoes__header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.marca-produto__detalhes-solucoes__header h4{-ms-flex:1;flex:1;text-align:left;font-weight:500;line-height:1.1;color:inherit}.marca-produto__detalhes-solucoes__header a{font-size:14px;text-align:right}.marca-produto__detalhes-solucoes__header button{color:var(--bth-app-gray) !important;border-radius:2px;border:none;padding:10px 16px;font-size:22px;background-color:transparent;margin-right:-15px}.marca-produto__detalhes-solucoes__body{text-align:center}.marca-produto__detalhes-solucoes__body .empty-state-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1.3em 1em;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.marca-produto__detalhes-solucoes__body .empty-state-container .empty-list-store{background-image:url(\"https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/empty-store.svg\");background-repeat:no-repeat;background-position-x:center;background-size:220px;height:180px;width:220px}.marca-produto__detalhes-solucoes__body .empty-state-container .empty-inconsistency{background-image:url(\"https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/empty-inconsistencia-marca-produto-alerta.svg\");background-repeat:no-repeat;background-position-x:center;background-size:96px;height:96px;width:96px}.marca-produto__detalhes-solucoes__body .empty-state-container h3{padding-top:20px;font-weight:var(--bth-app-font-weight-regular);font-size:16px}.marca-produto__detalhes-solucoes__body .empty-state-container a{font-size:16px}.marca-produto__detalhes-solucoes__body .marca-produto__detalhes-solucoes__list{display:grid;grid-template-columns:repeat(auto-fill, minmax(120px, 1fr));grid-gap:0.5em;padding:16px 0px 0px 0px;list-style:none}.marca-produto__detalhes-solucoes__body .marca-produto__detalhes-solucoes__list li .marca-produto__detalhes-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:left;cursor:pointer;width:100%;height:100px}.marca-produto__detalhes-solucoes__body .marca-produto__detalhes-solucoes__list li .marca-produto__detalhes-card .marca-produto__detalhes__brand{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-variant:normal;font-weight:normal;line-height:1;text-transform:none;text-align:center}.marca-produto__detalhes-solucoes__body .marca-produto__detalhes-solucoes__list li .marca-produto__detalhes-card .marca-produto__detalhes__brand svg{width:30px;height:30px}.marca-produto__detalhes-solucoes__body .marca-produto__detalhes-solucoes__list li .marca-produto__detalhes-card .marca-produto__detalhes__name{font-size:12px;margin-top:10px;line-height:1.3;text-align:center;color:var(--bth-app-gray-dark-30)}.marca-produto__detalhes-card{background-color:var(--bth-app-gray-light-40);border-radius:2px;position:relative}.marca-produto__detalhes-card__body{margin:12px 4px 6px 4px;padding:0 10px}.marca-produto__detalhes-card--bordered{border:1px solid var(--bth-app-gray-light-10)}.marca-produto__detalhes-card--clickable:hover{border:1px solid var(--bth-app-blue);cursor:pointer}.block-text--hidden{display:block;max-width:100%;height:30px;overflow:hidden;text-overflow:ellipsis}.bth,.BTH{background:var(--bth-app-brand-color-default) !important;fill:var(--bth-app-brand-color-default)}.MUN,.mun{fill:var(--bth-app-brand-brown);border-color:var(--bth-app-brand-brown)}.PLA,.pla{fill:var(--bth-app-brand-lilac);border-color:var(--bth-app-brand-lilac)}.ARR,.arr{fill:var(--bth-app-brand-lime);border-color:var(--bth-app-brand-lime)}.ATE,.ate{fill:var(--bth-app-brand-gray);border-color:var(--bth-app-brand-gray)}.COM,.com{fill:var(--bth-app-brand-red);border-color:var(--bth-app-brand-red)}.PES,.pes{fill:var(--bth-app-brand-blue);border-color:var(--bth-app-brand-blue)}.SAU,.sau{fill:var(--bth-app-brand-green);border-color:var(--bth-app-brand-green)}.EDU,.edu{fill:var(--bth-app-brand-yellow);border-color:var(--bth-app-brand-yellow)}.LEI,.lei{fill:var(--bth-app-brand-orange);border-color:var(--bth-app-brand-orange)}.GEN,.gen,.PEC,.pec{fill:#06a;border-color:#06a}.SUP,.sup{fill:#23313f;border-color:#23313f}.loader-wrapper{display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:349px}.loader-wrapper--show{display:-ms-flexbox;display:flex}@media (max-width: 991px){.marca-produto__detalhes{position:fixed;background-color:var(--bth-app-gray-light-40);-webkit-box-shadow:inset;box-shadow:inset;top:0;max-height:100vh;min-height:100vh;height:100vh;width:100%;min-width:100%;max-width:100%}.marca-produto__detalhes--show{display:block}.marca-produto__detalhes-solucoes__header h4{font-size:20px}.marca-produto__detalhes-solucoes__body .empty-state-container{height:80vh}.marca-produto__detalhes-solucoes__body .empty-state-container .empty-list-store{width:60%}.marca-produto__detalhes-solucoes__body .empty-state-container h3{font-size:24px}.marca-produto__detalhes-solucoes__body .empty-state-container a{font-size:24px}.marca-produto__detalhes-solucoes__body .marca-produto__detalhes-solucoes__list{grid-template-columns:repeat(auto-fill, minmax(155px, 1fr))}.loader-wrapper{height:80vh}}@media (max-width: 576px){.marca-produto__detalhes-solucoes__body .empty-state-container .empty-list-store{width:85%}.marca-produto__detalhes-solucoes__body .empty-state-container .empty-inconsistency{width:85%}.marca-produto__detalhes-solucoes__body .empty-state-container h3{font-size:20px}.marca-produto__detalhes-solucoes__body .empty-state-container a{font-size:20px}}";

const MarcaProduto = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tracker = new promiseTracker.PromiseTracker((active) => {
            this.isBuscandoProdutos = active;
        });
        this.produtos = [];
        this.isBuscandoProdutos = false;
        this.isApiIndisponivel = false;
        this.isDropdownProdutosAberto = false;
        this.isDispositivoMovel = false;
        /**
         * Define se o componente exibirá os produtos, condicionando a busca. Caso informado `false` não irá buscar por produtos.
         */
        this.exibirProdutos = false;
        this.onMouseOverMenuProduto = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarTimeoutAtivo();
            this.alterarEstadoAberto(true);
        };
        this.onMouseLeaveMenuProduto = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarTimeoutAtivo();
            this.alterarEstadoAberto(false);
        };
        this.onMouseOverToggleProduto = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarTimeoutAtivo();
        };
        this.onToggleAberto = () => {
            this.cancelarTimeoutAtivo();
            if (!this.exibirProdutos) {
                return;
            }
            if (this.isDispositivoMovel && this.isDropdownProdutosAberto) {
                return;
            }
            this.isDropdownProdutosAberto = !this.isDropdownProdutosAberto;
        };
        this.onClickFechar = (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.isDropdownProdutosAberto = false;
        };
        this.openLink = (event, url) => {
            event.preventDefault();
            window.open(url, '_blank');
        };
        this.getClassPorLinhaProduto = (product) => {
            var _a, _b;
            return (_b = (_a = product === null || product === void 0 ? void 0 : product.serviceLine) === null || _a === void 0 ? void 0 : _a.abbreviation) !== null && _b !== void 0 ? _b : '';
        };
    }
    connectedCallback() {
        this.configurarPropriedadesResponsivas();
        if (this.exibirProdutos) {
            this.buscarProdutos();
        }
    }
    onWindowResize() {
        this.configurarPropriedadesResponsivas();
    }
    async watchExibirProdutos(novoValor) {
        if (novoValor) {
            this.buscarProdutos();
        }
    }
    async buscarProdutos() {
        if (this.isConfiguracaoApiInconsistente()) {
            console.warn('[bth-marca-produto] O endereço do serviço de contas do usuário e credenciais de autenticação devem ser informados. Consulte a documentação do componente.');
            this.isApiIndisponivel = true;
            return;
        }
        this.isApiIndisponivel = false;
        const authorization = this.authorization.getAuthorization();
        const UserAccountsApi = new Api(authorization, this.authorization.handleUnauthorizedAccess, `${this.getUserAccountsApi()}/api`);
        const promise = UserAccountsApi.request('GET', `access/${authorization.accessId}/systems`)
            .then(produtos => {
            this.produtos = produtos.filter((produto) => produto.id !== authorization.systemId);
        })
            .catch(() => {
            this.isApiIndisponivel = true;
        });
        this.tracker.addPromise(promise);
    }
    getSuiteHome() {
        var _a, _b, _c, _d, _e;
        if (!promiseTracker.isNill(this.suiteHome)) {
            return this.suiteHome;
        }
        if ('___bth' in window) {
            return (_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['suite-ui']) === null || _d === void 0 ? void 0 : _d.home) === null || _e === void 0 ? void 0 : _e.host;
        }
        return null;
    }
    getStoreHome() {
        var _a, _b, _c, _d, _e;
        if (!promiseTracker.isNill(this.storeHome)) {
            return this.storeHome;
        }
        if ('___bth' in window) {
            return (_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['studio-ui']) === null || _d === void 0 ? void 0 : _d.v1) === null || _e === void 0 ? void 0 : _e.store;
        }
        return null;
    }
    getUserAccountsApi() {
        var _a, _b, _c, _d, _e;
        if (!promiseTracker.isNill(this.userAccountsApi)) {
            return this.userAccountsApi;
        }
        if ('___bth' in window) {
            return (_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['user-accounts']) === null || _d === void 0 ? void 0 : _d.v1) === null || _e === void 0 ? void 0 : _e.host;
        }
        return null;
    }
    isConfiguracaoApiInconsistente() {
        if (promiseTracker.isNill(this.getUserAccountsApi())) {
            return true;
        }
        if (!isValidAuthorizationConfig(this.authorization)) {
            return true;
        }
        return false;
    }
    configurarPropriedadesResponsivas() {
        this.isDispositivoMovel = promiseTracker.isDispositivoMovel();
    }
    cancelarTimeoutAtivo() {
        if (this.activeTimeoutHandler !== undefined) {
            clearTimeout(this.activeTimeoutHandler);
            this.activeTimeoutHandler = undefined;
        }
    }
    alterarEstadoAberto(opened) {
        this.activeTimeoutHandler = window.setTimeout(() => {
            this.isDropdownProdutosAberto = opened;
            this.activeTimeoutHandler = undefined;
        }, promiseTracker.TIMEOUT_INTERACOES);
    }
    render() {
        const contemProdutos = this.produtos && this.produtos.length > 0;
        return (index.h("section", { class: `marca-produto ${this.isDropdownProdutosAberto ? 'marca-produto--active' : ''}`, onClick: this.onToggleAberto, onMouseLeave: this.onMouseLeaveMenuProduto, onMouseOver: this.onMouseOverToggleProduto, "aria-expanded": `${this.isDropdownProdutosAberto}`, "aria-controls": "marca_produto_detalhes" }, index.h("header", { id: "produto_description", title: this.produto }, this.produto), this.exibirProdutos && (index.h("div", { id: "marca_produto_detalhes", class: `marca-produto__detalhes ${this.isDropdownProdutosAberto ? 'marca-produto__detalhes--show' : ''}`, onMouseOver: this.onMouseOverMenuProduto, onMouseLeave: this.onMouseLeaveMenuProduto, "aria-hidden": `${!this.isDropdownProdutosAberto}`, "aria-labelledby": "produto_description", role: "region" }, index.h("div", { class: "marca-produto__detalhes-solucoes" }, index.h("div", { class: "marca-produto__detalhes-solucoes__header" }, index.h("h4", null, "Mais produtos"), contemProdutos && (index.h("a", { href: this.getSuiteHome(), target: "_blank", title: "Ver todos", rel: "noreferrer" }, "Ver todos")), this.isDispositivoMovel && (index.h("button", { onClick: this.onClickFechar }, index.h("bth-icone", { icone: "close" })))), index.h("div", { class: "marca-produto__detalhes-solucoes__body" }, index.h("div", { class: `loader-wrapper ${this.isBuscandoProdutos ? 'loader-wrapper--show' : ''}` }, index.h("bth-loader", null)), !this.isBuscandoProdutos && !this.isApiIndisponivel && contemProdutos && (index.h("ul", { class: "marca-produto__detalhes-solucoes__list" }, this.produtos && this.produtos.map((produto, index$1) => {
            return (index.h("li", { key: index$1, id: `marca_produto_item_${produto.id}` }, index.h("button", { class: "marca-produto__detalhes-card marca-produto__detalhes-card--bordered marca-produto__detalhes-card--clickable", onClick: event => this.openLink(event, produto.url) }, index.h("div", { class: "marca-produto__detalhes-card__body" }, index.h("div", { class: `marca-produto__detalhes__brand ${this.getClassPorLinhaProduto(produto)}` }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 231.73 251.78" }, index.h("defs", null), index.h("title", null, produto.name), index.h("g", { "data-name": "Camada 2" }, index.h("g", { "data-name": "Camada 1" }, index.h("path", { class: "cls-1", d: "M182.83,119.72c3.06,1.55,4.76,2.35,6.4,3.25,4.64,2.57,9.47,4.88,13.85,7.84,16.93,11.42,23.41,27.41,20.69,47.56-4,29.37-21.21,48.42-46.92,60.86-17.92,8.66-37.1,12.31-56.87,12.43-37.93.22-75.86.07-113.8.05-1.88,0-3.77-.27-6.18-.46,2.13-12.49,4.15-24.59,6.26-36.67Q18.32,145.39,30.42,76.2c3.29-18.77,6.72-37.53,9.82-56.33.6-3.67,2-5.29,5.63-6.24a388,388,0,0,1,60.5-11C121,1.23,135.74.29,150.44,0a106,106,0,0,1,39.06,6.7c9.61,3.57,18.4,8.49,25.75,15.74,20.84,20.56,22.11,55.65,2.68,76.07-7.27,7.64-16.21,12.89-25.83,17C189.47,116.71,186.93,117.9,182.83,119.72ZM62.14,210.82c2.25.24,3.66.52,5.07.52,19.32,0,38.65.23,58-.12a57.2,57.2,0,0,0,16.3-2.92c18.25-5.94,28.91-23.37,26.44-42.41-1.45-11.13-7.89-18.63-18.88-21.18A67,67,0,0,0,134.69,143c-17.87-.2-35.75-.1-53.62-.06-2.1,0-4.19.3-6.76.5ZM92.14,43C88.81,54.18,82,97.74,82.75,103.3a16.68,16.68,0,0,0,2.71.46c17.16,0,34.33.38,51.48-.08,11.23-.3,21-4.77,29.08-12.91,9-9.13,11.51-19.84,8-32-3.34-11.61-12.07-17-23.25-19.13-19.91-3.74-39.34.53-58.66,3.32Z" }))))), index.h("div", { class: "marca-produto__detalhes__name block-text--hidden", title: produto.name }, produto.name)))));
        }))), !this.isBuscandoProdutos && !contemProdutos && (index.h("div", { class: "empty-state-container" }, !this.isApiIndisponivel && ([
            index.h("div", { class: "empty-list-store" }),
            index.h("h3", null, "Conhe\u00E7a outros produtos dispon\u00EDveis. Acesse os ", index.h("a", { href: `${this.getStoreHome()}/#/pesquisa?identificador=TIPO&coluna=plataforma.chave&valor=web`, target: "_blank", rel: "noreferrer" }, " sistemas da entidade"), " ou", index.h("a", { href: `${this.getStoreHome()}/#/pesquisa?identificador=TIPO&coluna=plataforma.chave&valor=web`, target: "_blank", rel: "noreferrer" }, " explore mais solu\u00E7\u00F5es na Betha Store ", index.h("bth-icone", { icone: "open-in-new" })))
        ]), this.isApiIndisponivel && ([
            index.h("div", { class: "empty-inconsistency" }),
            index.h("h3", null, "A sele\u00E7\u00E3o de produtos est\u00E1 temporariamente indispon\u00EDvel")
        ])))))))));
    }
    static get watchers() { return {
        "exibirProdutos": ["watchExibirProdutos"]
    }; }
};
MarcaProduto.style = marcaProdutoCss;

const SLOT$1 = {
    MENU_ITEM_MOBILE: 'menu_item_mobile',
    MENU_DESCRICAO_MOBILE: 'menu_descricao_mobile',
    MENU_ITEM_DESKTOP: 'menu_item_desktop',
    CONTEUDO_PAINEL_LATERAL: 'conteudo_painel_lateral'
};

const menuFerramentaCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.ferramenta-menu__desktop-toggler{display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.ferramenta-menu__desktop-toggler--active{background-color:rgba(255, 255, 255, 0.2)}.ferramenta-menu__desktop-toggler ::slotted(i),.ferramenta-menu__desktop-toggler ::slotted(bth-icone){font-size:18px}.ferramenta-menu__desktop-toggler ::slotted(img),.ferramenta-menu__desktop-toggler ::slotted(svg){vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;margin:7px 14px;display:unset;border-radius:100%;width:24px;height:24px}.ferramenta-menu__desktop-toggler ::slotted(bth-avatar){vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;margin:8px 14px;display:unset;border-radius:100%;width:24px;height:24px}.ferramenta-menu__desktop-toggler a{color:var(--bth-app-gray-light-40);text-decoration:none;padding:7px 11px 8px 11px}.ferramenta-menu__desktop-toggler a:hover{background-color:rgba(255, 255, 255, 0.15)}.ferramenta-menu__desktop-toggler a:focus{outline:1px dotted var(--bth-app-gray-light-10);outline-offset:-2px}.ferramenta-menu__mobile-toggler{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;border-bottom:1px solid var(--bth-app-gray-light-10)}.ferramenta-menu__mobile-toggler a{width:100%;padding:14px 12px;text-decoration:none;color:var(--bth-app-gray-dark-30);font-size:16px}.ferramenta-menu__mobile-toggler a:hover{background-color:var(--bth-app-gray-light-30)}.ferramenta-menu__mobile-toggler a ::slotted(i),.ferramenta-menu__mobile-toggler a ::slotted(bth-icone){color:var(--bth-app-gray-dark-20);font-size:20px}.ferramenta-menu__mobile-toggler a ::slotted(span){text-decoration:none;padding:0 16px}";

const MenuFerramenta = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isDispositivoMovel = false;
        this.possuiConteudoPainelLateralDeclarado = false;
        this.possuiMenuItemDesktopDeclarado = false;
        this.possuiMenuItemMobileDeclarado = false;
        /**
         * Descrição
         */
        this.descricao = '';
        this.onToggleEstadoAberto = (event) => {
            event.preventDefault();
            this.alternarExibicaoPainelLateral();
        };
        this.onPainelLateralShow = (event) => {
            if (this.isDispositivoMovel) {
                return;
            }
            const desktopToggler = this.el.shadowRoot.querySelector('.ferramenta-menu__desktop-toggler');
            if (desktopToggler === null) {
                return;
            }
            if (event.detail.show) {
                desktopToggler.classList.add('ferramenta-menu__desktop-toggler--active');
            }
            else {
                desktopToggler.classList.remove('ferramenta-menu__desktop-toggler--active');
            }
        };
        this.onMouseOverToggle = () => {
            const painelLateral = this.el.shadowRoot.querySelector('bth-menu-painel-lateral');
            painelLateral.cancelarAberturaComAnimacao();
        };
        this.onMouseLeaveToggle = () => {
            const painelLateral = this.el.shadowRoot.querySelector('bth-menu-painel-lateral');
            painelLateral.setShowComAnimacao(false);
        };
    }
    connectedCallback() {
        this.configurarPropriedadesResponsivas();
    }
    onWindowResize() {
        this.configurarPropriedadesResponsivas();
    }
    /**
     * Fecha os paineis abertos
     */
    async fecharPaineisAbertos() {
        const painelLateral = this.el.shadowRoot.querySelector('bth-menu-painel-lateral');
        if (painelLateral === null) {
            return;
        }
        painelLateral.fecharPaineisAbertos();
    }
    configurarPropriedadesResponsivas() {
        this.isDispositivoMovel = promiseTracker.isDispositivoMovel();
        this.possuiConteudoPainelLateralDeclarado = this.el.querySelector(`[slot="${SLOT$1.CONTEUDO_PAINEL_LATERAL}"]`) !== null;
        this.possuiMenuItemDesktopDeclarado = this.el.querySelector(`[slot="${SLOT$1.MENU_ITEM_DESKTOP}"]`) !== null;
        this.possuiMenuItemMobileDeclarado = this.el.querySelector(`[slot="${SLOT$1.MENU_ITEM_MOBILE}"]`) !== null;
    }
    alternarExibicaoPainelLateral() {
        const painelLateral = this.el.shadowRoot.querySelector('bth-menu-painel-lateral');
        if (painelLateral === null) {
            return;
        }
        painelLateral.show = !painelLateral.show;
    }
    render() {
        if (!this.possuiConteudoPainelLateralDeclarado) {
            return (index.h(index.Host, null, index.h("div", { class: "ferramenta-menu__desktop-toggler", title: this.descricao, "aria-haspopup": "false" }, index.h("slot", { name: SLOT$1.MENU_ITEM_DESKTOP }))));
        }
        return (index.h(index.Host, null, this.isDispositivoMovel && this.possuiMenuItemMobileDeclarado && (index.h("div", { class: "ferramenta-menu__mobile-toggler", title: this.descricao, "aria-haspopup": "true" }, index.h("a", { href: "", onClick: this.onToggleEstadoAberto, "aria-label": `Acessar o painel da ferramenta de ${this.descricao}` }, index.h("slot", { name: SLOT$1.MENU_ITEM_MOBILE }), index.h("slot", { name: SLOT$1.MENU_DESCRICAO_MOBILE })))), !this.isDispositivoMovel && this.possuiMenuItemDesktopDeclarado && (index.h("div", { class: "ferramenta-menu__desktop-toggler", title: this.descricao, "aria-haspopup": "true" }, index.h("a", { href: "", onClick: this.onToggleEstadoAberto, onMouseLeave: this.onMouseLeaveToggle, onMouseOver: this.onMouseOverToggle, "aria-label": `Acessar o painel da ferramenta de ${this.descricao}` }, index.h("slot", { name: SLOT$1.MENU_ITEM_DESKTOP })))), index.h("bth-menu-painel-lateral", { onPainelLateralShow: this.onPainelLateralShow, titulo: this.tituloPainelLateral }, index.h("slot", { name: SLOT$1.CONTEUDO_PAINEL_LATERAL }))));
    }
    get el() { return index.getElement(this); }
};
MenuFerramenta.style = menuFerramentaCss;

const Badge = (props) => {
    if (props === undefined || props.contador === undefined || props.contador === 0) {
        return undefined;
    }
    return (index.h("span", { class: "badge" }, props.contador > 99 ? '99+' : props.contador));
};

const menuFerramentaIconeCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.desktop{display:block;position:relative}.desktop bth-icone{font-size:18px}.desktop .badge{line-height:1;vertical-align:middle;white-space:nowrap;display:inline-block;position:absolute;min-width:10px;text-align:center;border-radius:50px;font-size:11px;font-weight:var(--bth-app-font-weight-semi-bold);padding:2px 5px;background-color:var(--bth-app-red);color:var(--bth-app-gray-light-40);right:-5px}.mobile{display:inline-block;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.mobile .badge{white-space:nowrap;display:inline-block;min-width:10px;border-radius:50px;font-size:11px;font-weight:var(--bth-app-font-weight-semi-bold);position:absolute;margin:-2px -12px;padding:1px 5px;background-color:var(--bth-app-red);color:var(--bth-app-gray-light-40)}.mobile bth-icone{color:var(--bth-app-gray-dark-20);font-size:20px}";

const MenuFerramentaIcone = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Valor que será exibido em uma "badge" próximo ao ícone
         */
        this.contador = 0;
        /**
         * Ícone conforme biblioteca `"Material Design Icons"`
         */
        this.icone = 'cloud';
        /**
         * Define se a estilização é "mobile". Por padrão é "desktop".
         */
        this.mobile = false;
    }
    render() {
        return (index.h("div", { class: this.mobile ? 'mobile' : 'desktop' }, index.h("bth-icone", { icone: this.icone }), index.h(Badge, { contador: this.contador })));
    }
};
MenuFerramentaIcone.style = menuFerramentaIconeCss;

function BadgeContador({ valor, customClass }) {
    if (valor === undefined || valor <= 0) {
        return undefined;
    }
    const valorExibir = valor > 99 ? '99+' : valor;
    return (index.h("div", { class: `badge ${customClass !== undefined ? customClass : ''}`, title: valorExibir.toString() }, valorExibir));
}

const menuHorizontalItemCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.menu-horizontal__item{height:40px}.menu-horizontal__item--disabled{opacity:0.6;cursor:not-allowed}.menu-horizontal__item a{-ms-flex-align:center;align-items:center;color:var(--bth-app-gray-light-40);display:-ms-flexbox;display:flex;padding:10px 14px 10px 14px;width:100%;font-weight:var(--bth-app-font-weight-regular);text-decoration:none}.menu-horizontal__item a bth-icone:first-child,.menu-horizontal__item a bth-icone:last-child{display:block;margin:12px 16px;width:14px}.menu-horizontal__item a span{-ms-flex:1;flex:1;opacity:1;white-space:nowrap}.menu-horizontal__item--active{background-color:rgba(255, 255, 255, 0.2)}.menu-horizontal__item--active>a{color:var(--bth-app-gray-light-40);font-weight:var(--bth-app-font-weight-regular)}.menu-horizontal__item:hover,.menu-horizontal__item:focus{background-color:rgba(255, 255, 255, 0.15);text-decoration:none}.badge{background-color:var(--bth-app-gray-light-40);color:var(--bth-app-gray-dark-30);border-radius:50px;font-size:11px;padding:2px 5px;margin-left:5px;line-height:1}";

const MenuHorizontalItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.menuHorizontalSelecionado = index.createEvent(this, "menuHorizontalSelecionado", 7);
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
        return (index.h("div", { class: `menu-horizontal__item ${this.ativo ? 'menu-horizontal__item--active' : ''}` }, index.h("a", { href: "", class: `${!this.possuiPermissao ? 'menu-horizontal__item--disabled' : ''}`, title: `${!this.possuiPermissao ? promiseTracker.MSG_SEM_PERMISSAO_RECURSO : this.descricao}`, onClick: this.onClick, "aria-disabled": `${!this.possuiPermissao}`, "aria-label": `Navegar para ${this.descricao}`, tabindex: this.possuiPermissao ? 0 : -1 }, index.h("span", null, this.descricao), index.h(BadgeContador, { valor: this.contador }))));
    }
};
MenuHorizontalItem.style = menuHorizontalItemCss;

const menuPainelLateralCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.painel-lateral{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--bth-app-gray-dark-30);background-color:var(--bth-app-gray-light-40);-webkit-box-shadow:0 3px 6px rgba(0, 0, 0, 0.16);box-shadow:0 3px 6px rgba(0, 0, 0, 0.16);position:fixed;opacity:0;height:calc(100vh - 40px);top:40px;right:0;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), top var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), top var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), top var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), top var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);width:375px;z-index:1070;padding:16px}.painel-lateral--show{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}.painel-lateral--banner{height:calc(100vh - 80px);top:80px}.painel-lateral header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:12px}.painel-lateral header h3{font-size:20px;font-weight:var(--bth-app-font-weight-regular)}.painel-lateral .btn-back{display:none;color:var(--bth-app-gray-dark-20);border-radius:2px;border:none;padding:0px 8px;font-size:22px;background-color:transparent;margin:0 0 0 -10px;cursor:pointer}.painel-lateral .btn-close{display:none;color:#767676;cursor:pointer;color:silver !important;border-radius:2px;border:none;padding:0px 8px;font-size:22px;background-color:transparent;margin-right:-10px}@media (max-width: 991px){.painel-lateral{top:-50px;height:100vh;width:100%}.painel-lateral .btn-back{display:block}.painel-lateral .btn-close{display:block}}";

let idHandler = 0;
const MenuPainelLateral = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.painelLateralShow = index.createEvent(this, "painelLateralShow", 7);
        this.isDispositivoMovel = false;
        this.menuPossuiBanner = false;
        // É utilizado para manter o <slot /> no DOM enquanto a animação do painel estiver ativa
        this.renderSlot = false;
        /**
         * Estado de visibilidade
         */
        this.show = false;
        this.onToggleShow = (event) => {
            event.stopPropagation();
            this.show = !this.show;
        };
        this.onCloseAll = (event) => {
            event.stopPropagation();
            this.dispatchFecharTodosEvent();
            this.show = !this.show;
        };
        this.onMouseOver = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarAberturaComAnimacao();
            this.setShowComAnimacao(true);
        };
        this.onMouseLeave = () => {
            if (this.isDispositivoMovel) {
                return;
            }
            this.cancelarAberturaComAnimacao();
            this.setShowComAnimacao(false);
        };
    }
    showHandler() {
        this.painelLateralShow.emit({ show: this.show, origemId: this.uniqueId });
    }
    connectedCallback() {
        this.uniqueId = `painel_lateral_${idHandler++}`;
        this.configurarPropriedadesResponsivas();
        this.watchShow(this.show);
    }
    onWindowResize() {
        this.configurarPropriedadesResponsivas();
        this.setShowComAnimacao(false);
    }
    onBannerAlterado(event) {
        this.menuPossuiBanner = event.detail.possui;
    }
    onPainelLateralShow(event) {
        // Fecha o painel atual caso receba evento de outro painel lateral abrindo
        if (event.detail.show && this.uniqueId !== event.detail.origemId) {
            this.show = false;
        }
    }
    /**
     * Alterna o estado em aberto do painel para o valor do parâmetro após um timeout padrão de interações
     */
    async setShowComAnimacao(show) {
        this.timeoutAtivoHandler = window.setTimeout(() => {
            this.show = show;
            this.timeoutAtivoHandler = undefined;
        }, promiseTracker.TIMEOUT_INTERACOES);
    }
    /**
     * Cancela o timeout de interação ativo caso exista
     */
    async cancelarAberturaComAnimacao() {
        if (this.timeoutAtivoHandler === undefined) {
            return;
        }
        clearTimeout(this.timeoutAtivoHandler);
        this.timeoutAtivoHandler = undefined;
    }
    /**
     * Fecha o painel lateral e emite evento para que outros sobrepostos sejam fechados.
     */
    async fecharPaineisAbertos() {
        this.dispatchFecharTodosEvent();
        this.show = false;
    }
    watchShow(novoValor) {
        if (novoValor) {
            this.renderSlot = this.show;
        }
        else {
            setTimeout(() => this.renderSlot = this.show, promiseTracker.TIMEOUT_INTERACOES);
        }
    }
    dispatchFecharTodosEvent() {
        this.painelLateralShow.emit({
            show: false,
            fecharSobrepostos: true,
            origemId: this.uniqueId,
        });
    }
    configurarPropriedadesResponsivas() {
        this.isDispositivoMovel = promiseTracker.isDispositivoMovel();
    }
    render() {
        var _a;
        return (index.h(index.Host, { "aria-hidden": `${!this.show}`, "aria-expanded": `${this.show}`, "aria-label": `${(_a = this.titulo) !== null && _a !== void 0 ? _a : 'Painel lateral'}` }, index.h("div", { class: `painel-lateral ${this.menuPossuiBanner ? 'painel-lateral--banner' : ''} ${this.show ? 'painel-lateral--show' : ''}`, onMouseLeave: this.onMouseLeave, onMouseOver: this.onMouseOver, "aria-hidden": `${!this.show}`, "aria-expanded": `${this.show}` }, index.h("header", null, index.h("button", { class: "btn-back", onClick: this.onToggleShow, title: "Voltar" }, index.h("bth-icone", { icone: "arrow-left" })), this.titulo && (index.h("h3", null, this.titulo)), index.h("button", { class: "btn-close", onClick: this.onCloseAll, title: "Fechar todos" }, index.h("bth-icone", { icone: "close" }))), this.renderSlot && (index.h("slot", null, "Conte\u00FAdo painel lateral")))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "show": ["showHandler", "watchShow"]
    }; }
};
MenuPainelLateral.style = menuPainelLateralCss;

const menuVerticalItemCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.menu-vertical__item{position:relative}.menu-vertical__item--sem-icone{padding:0px 15px}.menu-vertical__item--disabled{opacity:0.6;cursor:not-allowed}.menu-vertical__item--active{background-color:var(--bth-app-gray-light-10)}.menu-vertical__item--active>a bth-icone,.menu-vertical__item--active>a span{color:var(--bth-app-blue-dark-10)}.menu-vertical__item--active>a span{font-weight:var(--bth-app-font-weight-semi-bold)}.menu-vertical__item--active:before{content:\"\";position:absolute;border:2px var(--bth-app-blue) solid;top:0;bottom:0;z-index:1}.menu-vertical__item--has-children:not(.menu-vertical__item--collapsed){background-color:var(--bth-app-gray-light-20)}.menu-vertical__item--collapsed bth-icone:last-child{-webkit-transform:rotate(0.5turn);transform:rotate(0.5turn)}.menu-vertical__item--collapsed>.menu-vertical__list{max-height:0 !important}.menu-vertical__item--floating{background-color:var(--bth-app-gray-light-20);border-top:0}.menu-vertical__item--floating>a>span{opacity:0}.menu-vertical__item--floating>a:hover>bth-icone:last-of-type{-webkit-transform:rotate(0.1turn);transform:rotate(0.1turn);-webkit-transition:-webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:-webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical__item--floating>a:hover>span{opacity:1;-webkit-transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:opacity var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical__item--floating>a:focus{outline:1px dotted var(--bth-app-gray-dark-30);outline-offset:-1px}.menu-vertical__item a{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;width:100%;color:var(--bth-app-gray-dark-20);font-weight:var(--bth-app-font-weight-regular);height:44px;text-decoration:none;overflow:hidden;padding:0px 9px 0px 0px}.menu-vertical__item a:hover,.menu-vertical__item a:focus{background-color:#e1e3e6;text-decoration:none;color:var(--bth-app-gray-dark-30)}.menu-vertical__item a:focus{outline:1px dotted var(--bth-app-gray-dark-30);outline-offset:-1px}.menu-vertical__item a bth-icone:first-child,.menu-vertical__item a bth-icone:last-child{display:block;margin:auto 16px;min-width:18px;width:18px;font-size:18px}.menu-vertical__item a span{-ms-flex:1;flex:1;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:100%}.menu-vertical__item .menu-vertical__list{border-top:0;max-height:100vh;overflow:hidden;-webkit-transition:max-height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1);transition:max-height var(--bth-app-transition-delay) cubic-bezier(0.5, 0, 0.1, 1)}.menu-vertical__item .menu-vertical__list li{display:inline-block;width:100%}.menu-vertical__submenu a{height:36px;padding:12px 10px 12px 53px;cursor:pointer}.menu-vertical__submenu a:focus{outline:1px dotted var(--bth-app-gray-dark-30);outline-offset:-1px}.badge{background-color:var(--bth-app-gray-light-40);color:var(--bth-app-gray-dark-30);border-radius:50px;font-size:11px;padding:2px 5px;margin-left:5px;line-height:1}.badge-vertical-floating{position:absolute;background-color:var(--bth-app-red);color:var(--bth-app-gray-light-40);font-size:10px;right:5px;top:11px}@media (max-width: 991px){.menu-vertical__item a{height:54px;font-size:18px}.menu-vertical__item a bth-icone:first-child,.menu-vertical__item a bth-icone:last-child{font-size:20px}}";

const MenuVerticalItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.menuVerticalSelecionado = index.createEvent(this, "menuVerticalSelecionado", 7);
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
        const possuiSubmenus = !promiseTracker.isNill(this.submenus) && this.submenus.length > 0;
        return (index.h("div", { class: `
          menu-vertical__item
          ${this.ativo ? ' menu-vertical__item--active' : ''}
          ${possuiSubmenus ? ' menu-vertical__item--has-children' : ''}
          ${(this.recolhido || this.menuLateralRecolhido) ? ' menu-vertical__item--collapsed' : ''}
          ${this.submenu ? 'menu-vertical__submenu' : ''}
        ` }, index.h("a", { href: "", onClick: this.onClick, class: `${!possuiSubmenus && !this.possuiPermissao ? 'menu-vertical__item--disabled' : ''}`, title: `${!this.possuiPermissao ? promiseTracker.MSG_SEM_PERMISSAO_RECURSO : this.descricao}`, "aria-haspopup": `${possuiSubmenus}`, "aria-expanded": `${possuiSubmenus && !(this.recolhido || this.menuLateralRecolhido)}`, "aria-disabled": `${!this.possuiPermissao}`, "aria-label": possuiSubmenus ? `Expandir ${this.descricao}` : `Navegar para ${this.descricao}`, tabindex: this.possuiPermissao ? 0 : -1 }, this.icone && (index.h("bth-icone", { icone: this.icone })), index.h("span", { class: `${promiseTracker.isNill(this.icone) && !this.submenu ? 'menu-vertical__item--sem-icone' : ''}`, title: `${!this.possuiPermissao ? promiseTracker.MSG_SEM_PERMISSAO_RECURSO : this.descricao}` }, this.descricao), index.h(BadgeContador, { valor: this.contador, customClass: this.menuLateralRecolhido ? 'badge-vertical-floating' : '' }), possuiSubmenus && (index.h("bth-icone", { icone: "chevron-up" }))), possuiSubmenus && (index.h("ul", { class: "menu-vertical__list" }, this.submenus.map((submenu, index$1) => {
            var _a;
            return (index.h("li", null, index.h("bth-menu-vertical-item", { id: `menu_vertical_subitem_${index$1}`, key: index$1, identificador: submenu.id, "identificador-pai": this.identificador, descricao: submenu.descricao, icone: submenu.icone, onMenuVerticalSelecionado: this.onClick, contador: submenu.contador, possuiPermissao: (_a = submenu.possuiPermissao) !== null && _a !== void 0 ? _a : PERMISSAO_PADRAO, ativo: submenu.isAtivo, recolhido: submenu.isRecolhido, menuLateralRecolhido: this.menuLateralRecolhido, submenus: submenu.submenus, submenu: true })));
        })))));
    }
};
MenuVerticalItem.style = menuVerticalItemCss;

const navbarPillGroupCss = ":host{display:block}.navbar-pill-group{display:-ms-flexbox;display:flex;padding-left:0;margin-bottom:12px;text-align:center;list-style-type:none}::slotted(bth-navbar-pill-item){-ms-flex:1;flex:1;border:0.5px solid var(--bth-app-gray-light-10);font-size:14px}::slotted(bth-navbar-pill-item[ativo]){-ms-flex:2;flex:2}";

const NavbarPillGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a;
        return (index.h("nav", { "aria-label": `Navegação por filtros ${(_a = this.descricao) === null || _a === void 0 ? void 0 : _a.toLowerCase()}` }, index.h("div", { class: "navbar-pill-group", role: "menubar" }, index.h("slot", null))));
    }
};
NavbarPillGroup.style = navbarPillGroupCss;

const navbarPillItemCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.navbar-pill-item{white-space:nowrap}.navbar-pill-item--active a{background-color:var(--bth-app-gray-light-10)}.navbar-pill-item:first-child{border-radius:2px 0px 0px 2px;border-right:none}.navbar-pill-item:last-child{border-radius:0px 2px 2px 0px;border-left:none}.navbar-pill-item a{display:block;text-decoration:none;color:var(--bth-app-gray-dark-30);padding:4px 0px}.navbar-pill-item a i{font-size:16px}.navbar-pill-item a:hover{background-color:var(--bth-app-gray-light-20)}.navbar-pill-item a>span{margin:0px 0px 0px 6px}.navbar-pill-item a .descricao{display:none;opacity:0}.navbar-pill-item a .descricao--show{opacity:1;display:inline-block}.navbar-pill-item a .totalizador{color:var(--bth-app-gray-dark-20);font-size:13px;margin:0px 0px 0px 4px}";

const NavbarPillItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.navbarPillItemClicked = index.createEvent(this, "navbarPillItemClicked", 7);
        /**
         * Está ativo?
         */
        this.ativo = false;
        /**
         * Ícone conforme biblioteca `"Material Design Icons"`
         */
        this.icone = 'cloud-question';
        /**
         * Totalizador
         */
        this.totalizador = 0;
        /**
         * Exibir totalizador?
         */
        this.showTotalizador = true;
        this.onClick = (event) => {
            event.preventDefault();
            this.navbarPillItemClicked.emit({
                identificador: this.identificador
            });
        };
    }
    render() {
        return (index.h("div", { role: "menuitem", class: `navbar-pill-item ${this.ativo ? 'navbar-pill-item--active' : ''}` }, index.h("a", { href: "", title: this.descricao, onClick: this.onClick }, index.h("bth-icone", { icone: this.icone }), index.h("span", { class: `descricao ${this.ativo ? 'descricao--show' : ''}` }, this.descricao), this.showTotalizador && this.totalizador !== 0 && (index.h("span", { class: "totalizador" }, "(", this.totalizador, ")")))));
    }
};
NavbarPillItem.style = navbarPillItemCss;

/**
 * Retorna de forma textual a data e hora relativa ao tempo atual
 *
 * @param dateTime Data e hora no formato EPOCH (1588008762990) ou ISO string (Ex: 2020-04-22T17:03:28)
 */
function getDataHoraDescrita(dateTime) {
    if (promiseTracker.isNill(dateTime)) {
        throw Error('A data e hora deve ser informada');
    }
    const data = new Date(dateTime);
    const dataAgora = new Date();
    let tempoFormatado = '';
    if (isHoje(data, dataAgora)) {
        if (!isMesmaHora(data, dataAgora)) {
            const horas = getDiferencaEmHoras(data, dataAgora);
            tempoFormatado = 'há ' + horas + ' hora';
            if (horas > 1) {
                tempoFormatado += 's';
            }
            return tempoFormatado;
        }
        if (!isMesmoMinuto(data, dataAgora)) {
            const minutos = getDiferencaEmMinutos(data, dataAgora);
            if (minutos > 0) {
                tempoFormatado = 'há ' + minutos + ' minuto';
                if (minutos > 1) {
                    tempoFormatado += 's';
                }
                return tempoFormatado;
            }
        }
        return 'agora há pouco';
    }
    return formatarData(data) + ' às ' + data.toTimeString().substring(0, 5);
}
function formatarData(data) {
    return data.toLocaleString('pt-BR').substring(0, 10);
}
function isHoje(dataA, dataB) {
    return getDateISOString(dataA) === getDateISOString(dataB);
}
function getDateISOString(data) {
    return data.toISOString().substring(0, 10);
}
function isMesmaHora(dataA, dataB) {
    return getDiferencaEmMinutos(dataA, dataB) < 60;
}
function getDiferencaEmMinutos(dataA, dataB) {
    return Math.floor((dataB.valueOf() - dataA.valueOf()) / (60 * 1000));
}
function getDiferencaEmHoras(dataA, dataB) {
    return dataB.getHours() - dataA.getHours();
}
function isMesmoMinuto(dataA, dataB) {
    return dataB.getMinutes() === dataA.getMinutes();
}

const CONFIG_SISTEMAS = {
    // Gestão Municipal
    mun: { title: 'Gestão Municipal', iconClass: 'bell' },
    custos: { title: 'Custos', iconClass: 'chart-bar' },
    // Planejamento e Contabilidade
    pla: { title: 'Planejamento e Contabilidade', iconClass: 'bell' },
    contabil: { title: 'Contabil', iconClass: 'calculator' },
    planejamento: { title: 'Planejamento', iconClass: 'calendar-check' },
    tesouraria: { title: 'Tesouraria', iconClass: 'cloud' },
    // Arrecadação e Fiscalização
    arr: { title: 'Arrecadação e Fiscalização', iconClass: 'bell' },
    livro: { title: 'Livro Eletrônico', iconClass: 'cloud' },
    tributos: { title: 'Tributos', iconClass: 'currency-usd' },
    procuradoria: { title: 'Procuradoria', iconClass: 'scale-balance' },
    // Atendimento
    ate: { title: 'Atendimento', iconClass: 'bell' },
    // Gestão de Compras e Contratos
    com: { title: 'Gestão de Compras e Contratos', iconClass: 'bell' },
    compras: { title: 'Compras', iconClass: 'cart' },
    estoque: { title: 'Estoque', iconClass: 'cube' },
    frotas: { title: 'Frotas', iconClass: 'truck' },
    // Pessoal e recursos Humanos
    pes: { title: 'Pessoal e Recursos Humanos', iconClass: 'bell' },
    folha: { title: 'Folha', iconClass: 'file-document-outline' },
    ponto: { title: 'Ponto', iconClass: 'fax' },
    // Saúde e Assistência Social
    sau: { title: 'Saúde e Assistência Social', iconClass: 'heart-pulse' },
    // Educação e Gestão Escolar
    edu: { title: 'Educação e Gestão Escolar', iconClass: 'bell' },
    educacao: { title: 'Educação', iconClass: 'school' },
    escola: { title: 'Escola', iconClass: 'human-handsup' },
    // Gestão de Leis Municipais
    lei: { title: 'Lei', iconClass: 'bell' },
    // Suporte
    sup: { title: 'Suporte', iconClass: 'bell' },
    // Performance Corporativa
    acionadores: { title: 'Acionadores', iconClass: 'shuffle-variant' },
    atendimento: { title: 'Atendimento', iconClass: 'lifebuoy' },
    crm: { title: 'CRM', iconClass: 'briefcase' },
    paineis: { title: 'Painéis', iconClass: 'chart-pie' },
    'planejamento-estrategico': { title: 'Planejamento Estratégico', iconClass: 'chart-bar' },
    rh: { title: 'RH', iconClass: 'account-group' },
    tarefas: { title: 'Tarefas', iconClass: 'checkbox-marked-outline' },
    // Componentes Genéricos
    gen: { title: 'Componentes Genéricos', iconClass: 'bell' },
    processo: { title: 'Processo', iconClass: 'cogs' },
    script: { title: 'Script', iconClass: 'code-tags' },
    relatorio: { title: 'Relatório', iconClass: 'file-multiple-outline' }
};
function getIcone(sistema) {
    return CONFIG_SISTEMAS[sistema] && CONFIG_SISTEMAS[sistema].iconClass ? CONFIG_SISTEMAS[sistema].iconClass : CONFIG_SISTEMAS.gen.iconClass;
}
function getIconeTitle(sistema) {
    return CONFIG_SISTEMAS[sistema] && CONFIG_SISTEMAS[sistema].title;
}

var TipoNotificacao;
(function (TipoNotificacao) {
    TipoNotificacao["Lida"] = "Lida";
    TipoNotificacao["NaoLida"] = "NaoLida";
    TipoNotificacao["Progresso"] = "Progresso";
})(TipoNotificacao || (TipoNotificacao = {}));

const notificacaoItemCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.notificacao{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid var(--bth-app-gray-light-10);padding:12px 8px}.notificacao:hover,.notificacao:focus{background-color:var(--bth-app-gray-light-30)}.notificacao--unread{cursor:pointer}.notificacao__body{display:-ms-flexbox;display:flex}.notificacao__body .icon{width:34px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-right:12px;margin-top:-5px;font-size:28px;color:var(--bth-app-blue)}.notificacao__body .mensagem{width:calc(100% - 15px);margin:2px 12px 8px 0px}.notificacao__body .marcar-leitura__toggler{font-size:16px;color:var(--bth-app-gray-dark-20);margin-top:4px}.notificacao__progress{overflow:hidden;position:relative;width:100%}.notificacao__progress__bar{height:4px;-webkit-transition:width var(--bth-app-transition-delay) linear;transition:width var(--bth-app-transition-delay) linear}.notificacao__progress__bar:before{background-color:var(--bth-app-blue);content:\"\";display:block;height:4px;position:relative;width:100%;z-index:2}.notificacao__progress__bar:after{background-color:var(--bth-app-gray-light-10);content:\"\";height:4px;left:0;position:absolute;-webkit-transform:translateY(-4px);transform:translateY(-4px);width:100%;z-index:1}.notificacao__progress__percent{color:var(--bth-app-gray-dark-30);font-size:12px;font-weight:var(--bth-app-font-weight-semi-bold);text-align:center;width:100%}.notificacao__progress__description{color:var(--bth-app-gray-dark-30);display:-ms-flexbox;display:flex;font-size:12px;font-weight:500;-ms-flex-pack:justify;justify-content:space-between;line-height:12px;margin-top:2px}.notificacao__progress--indeterminate .notificacao__progress__bar:after{-webkit-transform:translateY(0);transform:translateY(0)}.notificacao__progress--indeterminate .notificacao__progress__bar:before{-webkit-animation:indeterminate-animation 2s infinite ease-in-out;animation:indeterminate-animation 2s infinite ease-in-out;position:absolute}.notificacao__footer{margin-top:8px;display:inline-block;font-size:12px;color:var(--bth-app-gray-dark-10)}.notificacao__footer .float-right{float:right}.notificacao__footer a{color:var(--bth-app-blue);text-decoration:none}.notificacao__footer a:hover{color:var(--bth-app-blue-dark-10);text-decoration:underline}@-webkit-keyframes indeterminate-animation{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes indeterminate-animation{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}";

const NotificacaoItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.notificacaoLida = index.createEvent(this, "notificacaoLida", 7);
        this.notificacaoNaoLida = index.createEvent(this, "notificacaoNaoLida", 7);
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
            if (!promiseTracker.isNill(this.resultadoLink)) {
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
        if (!promiseTracker.isNill(this.icone)) {
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
        return (index.h("div", { onClick: this.onClickPainel, title: this.getTitleNotificacao(), class: `notificacao ${!this.isLida() && !this.isProgressoEmAndamento() ? 'notificacao--unread' : ''}` }, index.h("div", { class: "notificacao__body" }, index.h("div", { class: "icon" }, this.isOrigemUsuario() ?
            index.h("bth-icone", { icone: "account" }) :
            index.h("bth-icone", { icone: this.getClassIcone(), title: getIconeTitle(this.getSistema()) })), index.h("p", { class: "mensagem" }, this.texto), !this.isProgressoEmAndamento() && (index.h("a", { href: "", title: `Marcar como ${!this.isLida() ? 'lido' : 'não lido'}`, onClick: this.onClick }, index.h("bth-icone", { class: "marcar-leitura__toggler", icone: !this.isLida() ? 'email-open-outline' : 'email-outline' })))), this.isProgressoEmAndamento() && (index.h("div", { class: `notificacao__progress ${this.possuiProgresso ? 'notificacao__progress--success' : 'notificacao__progress--indeterminate'}` }, this.possuiProgresso && (index.h("div", { class: "notificacao__progress__percent" }, this.percentualProgresso === null ? 0 : this.percentualProgresso, "%")), index.h("div", { class: "notificacao__progress__bar", style: this.getPercentualProgressoStyle() }))), index.h("div", { class: "notificacao__footer" }, this.possuiLinkResultadoParaExibir() && (index.h("a", { href: this.resultadoLink.href, title: this.resultadoLink.title, target: this.getLinkTarget(this.resultadoLink), rel: "noreferrer" }, this.resultadoLink.label)), this.possuiLinkAcompanharParaExibir() && (index.h("a", { href: this.acompanharLink.href, title: this.acompanharLink.title, target: this.getLinkTarget(this.acompanharLink), rel: "noreferrer" }, "Acompanhar")), this.possuiLinkAcompanharParaExibir() && this.possuiLinkCancelarParaExibir() && (index.h("span", null, "\u00A0|\u00A0")), this.possuiLinkCancelarParaExibir() && (index.h("a", { href: this.cancelamentoLink.href, title: this.cancelamentoLink.title, target: this.getLinkTarget(this.cancelamentoLink), rel: "noreferrer" }, "Cancelar")), this.dataHora && (index.h("span", { class: "float-right", title: getDataHoraDescrita(this.dataHora) }, getDataHoraDescrita(this.dataHora))))));
    }
};
NotificacaoItem.style = notificacaoItemCss;

const LIMITE_PAGINACAO = 20;
var MessageType;
(function (MessageType) {
    MessageType["STARTED"] = "STARTED";
    MessageType["RESTARTED"] = "RESTARTED";
    MessageType["NEW_NOTIFICATIONS"] = "NEW_NOTIFICATIONS";
    MessageType["READ_ACTION"] = "READ_ACTION";
})(MessageType || (MessageType = {}));
var ReadAction;
(function (ReadAction) {
    ReadAction["READ_MESSAGE"] = "READ_MESSAGE";
    ReadAction["UNREAD_MESSAGE"] = "UNREAD_MESSAGE";
    ReadAction["READ_ALL_CLOSED"] = "READ_ALL_CLOSED";
    ReadAction["READ_ALL_IN_PROGRESS"] = "READ_ALL_IN_PROGRESS";
    ReadAction["READ_ALL"] = "READ_ALL";
})(ReadAction || (ReadAction = {}));

class NotificacoesService {
    constructor(authorization, notificacoesApi) {
        this.api = new Api(authorization.getAuthorization(), authorization.handleUnauthorizedAccess, notificacoesApi);
    }
    async buscar(params = { offset: 0, limit: 20 }) {
        return this.api.request('GET', `api/messages/?limit=${params.limit}&offset=${params.offset}`);
    }
    async buscarNaoLidas(params = { offset: 0, limit: 20 }) {
        return this.api.request('GET', `api/messages/unreads/all?limit=${params.limit}&offset=${params.offset}`);
    }
    async buscarLidas(params = { offset: 0, limit: 20 }) {
        return this.api.request('GET', `api/messages/reads?limit=${params.limit}&offset=${params.offset}`);
    }
    async buscarEmProgresso(params = { offset: 0, limit: 20 }) {
        return this.api.request('GET', `api/messages/in-progress?limit=${params.limit}&offset=${params.offset}`);
    }
    async clearInProgressUnread() {
        return this.api.request('DELETE', 'api/messages/in-progress/unread');
    }
    async clearUnreads() {
        return this.api.request('DELETE', 'api/messages/unread?keepInProgress=true');
    }
    async setRead(notificationId) {
        return this.api.request('PUT', `api/messages/${notificationId}/read`);
    }
    async setUnread(notificationId) {
        return this.api.request('PUT', `api/messages/${notificationId}/unread`);
    }
}

const sortByDateTime = (a, b) => {
    return a.dateTime < b.dateTime ? 1 : -1;
};

// https://developer.mozilla.org/pt-BR/docs/Web/API/CloseEvent
const CODES_TO_RECONNECT = [1001, 1006];
const RETRY_TIMEOUT_IN_MS = 5000;
class NotificationWebSocket {
    constructor(authorization, notificationsWs, refreshTime = 0, listeners = {}, closed = false) {
        this.authorization = authorization;
        this.notificationsWs = notificationsWs;
        this.refreshTime = refreshTime;
        this.listeners = listeners;
        this.closed = closed;
        this.sequence = 0;
        this.webSocket = new WebSocket(this.getUrl());
        this.addEventListener('open', () => {
            this.refreshTime = 0;
        });
        this.addEventListener('open', () => {
            if (this.hasStarted()) {
                this.send({ type: MessageType.RESTARTED, sequence: this.sequence });
            }
            else {
                this.send({ type: MessageType.STARTED });
            }
        });
        this.addEventListener('message', (event) => {
            if (/type/.test(event.data)) {
                const data = JSON.parse(event.data);
                this.sequence = data.sequence;
            }
        });
        this.addEventListener('close', async (event) => {
            if (CODES_TO_RECONNECT.includes(event.code) && !this.closed) {
                await this.authorization.handleUnauthorizedAccess();
                const retryTime = this.refreshTime;
                this.refreshTime += RETRY_TIMEOUT_IN_MS;
                setTimeout(() => this.refresh(), retryTime);
            }
        });
    }
    addEventListener(listener, callback) {
        if (promiseTracker.isNill(listener)) {
            return;
        }
        const callbackListener = function (event) {
            callback(event);
        };
        this.listeners[listener] = this.listeners[listener] || [];
        this.listeners[listener].push(callbackListener);
        this.webSocket.addEventListener(listener, callbackListener);
    }
    send(message) {
        this.webSocket.send(JSON.stringify(message));
    }
    hasStarted() {
        return this.sequence > 0;
    }
    refresh() {
        this.webSocket = new WebSocket(this.getUrl());
        for (const listener in this.listeners) {
            if (Object.prototype.hasOwnProperty.call(this.listeners, listener)) {
                const listenerCallbacks = this.listeners[listener];
                listenerCallbacks.forEach(callback => {
                    this.webSocket.addEventListener(listener, callback);
                });
            }
        }
    }
    getUrl() {
        return shouldInsertAccessToken(this.notificationsWs)
            ? concatAccessToken(this.notificationsWs, this.authorization.getAuthorization().accessToken)
            : this.notificationsWs;
        function shouldInsertAccessToken(url) {
            return url.indexOf('access_token=') < 0;
        }
        function concatAccessToken(url, authorization) {
            return (/[?&].*=/.test(url) ? url + '&' : url + '?') + 'access_token=' + authorization;
        }
    }
    close() {
        this.listeners = {};
        this.closed = true;
        this.webSocket.close();
        this.webSocket = null;
    }
}

const notificacoesCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.descricao-mobile{text-decoration:none;padding:0 16px}.text-right{text-align:right}.link{text-decoration:none;color:var(--bth-app-blue)}.link:hover{text-decoration:underline;color:var(--bth-app-blue-dark-10)}.painel-notificacoes{margin:16px 0px 0px 0px;overflow-y:auto;overflow-x:hidden;height:calc(100vh - 200px)}.painel-notificacoes .loader{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.painel-notificacoes .loader--full-page{height:90%}.painel-notificacoes .loader--list-bottom{height:60px}.painel-notificacoes .notificacoes-lista{padding:0px;margin:2px;list-style-type:none}.painel-notificacoes .empty-notificacoes{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:95%;text-align:center}.painel-notificacoes .empty-notificacoes__img{background-image:url(\"https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/notification.svg\");background-repeat:no-repeat;background-position-x:center;background-size:130px;height:135px;width:130px}.painel-notificacoes .empty-notificacoes-inconsistency{background-image:url(\"https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/empty-inconsistencia-notificacoes-alerta.svg\");background-repeat:no-repeat;background-position-x:center;background-size:130px;height:135px;width:130px}.painel-notificacoes .empty-notificacoes h4{font-size:20px;font-weight:var(--bth-app-font-weight-regular);margin:24px 0px}";

const Notificacoes = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.conteudoSinalizado = index.createEvent(this, "conteudoSinalizado", 7);
        this.novaNotificacaoComLink = index.createEvent(this, "novaNotificacaoComLink", 7);
        this.carregouTodasEmProgresso = false;
        this.carregouTodasNaoLidas = false;
        this.carregouTodasLidas = false;
        this.carregouNaoLidas = false;
        this.carregouLidas = false;
        this.carregouEmProgresso = false;
        this.tracker = new promiseTracker.PromiseTracker((active) => {
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
        if (!promiseTracker.isNill(event.detail.url)) {
            window.open(event.detail.url, event.detail.target);
        }
        const notificacao = this.notificacoesNaoLidas.find(naoLida => naoLida.id === event.detail.id);
        if (promiseTracker.isNill(notificacao)) {
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
        if (promiseTracker.isNill(notificacao)) {
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
        if (!promiseTracker.isNill(this.websocket)) {
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
        if (!promiseTracker.isNill(this.websocket)) {
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
        if (promiseTracker.isNill(this.getNotificacoesApi())) {
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
        if (!promiseTracker.isNill(this.notificacoesApi)) {
            return this.notificacoesApi;
        }
        if ('___bth' in window) {
            return (_e = (_d = (_c = (_b = (_a = window['___bth']) === null || _a === void 0 ? void 0 : _a.envs) === null || _b === void 0 ? void 0 : _b.suite) === null || _c === void 0 ? void 0 : _c['notifications']) === null || _d === void 0 ? void 0 : _d.v1) === null || _e === void 0 ? void 0 : _e.host;
        }
        return null;
    }
    getNotificacoesWs() {
        var _a, _b, _c, _d, _e;
        if (!promiseTracker.isNill(this.notificacoesWs)) {
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
        if (!promiseTracker.isNill(message.link)) {
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
        return (index.h("div", { class: `loader ${isPageLoader ? 'loader--full-page' : 'loader--list-bottom'}` }, index.h("bth-loader", null)));
    }
    getHeightPainelNotificacoes() {
        const style = {};
        if (!promiseTracker.isNill(this.heightPainelNotificacoes)) {
            style.height = this.heightPainelNotificacoes;
        }
        return style;
    }
    render() {
        const notificacoesConteudo = () => [
            index.h("div", null, !this.isApiIndisponivel && (index.h("bth-navbar-pill-group", { descricao: "Notifica\u00E7\u00F5es" }, this.filtros.map(filtro => (index.h("bth-navbar-pill-item", { key: filtro.id.toString(), identificador: filtro.id.toString(), icone: filtro.icone, descricao: filtro.descricao, ativo: filtro.ativo, totalizador: filtro.id === TipoNotificacao.NaoLida ? this.quantidadeEmNaoLidas : (filtro.id === TipoNotificacao.Progresso ? this.quantidadeEmProgressoNaoLidas : 0), showTotalizador: !this.isBuscandoNotificacoes }))))), !this.isApiIndisponivel && this.hasNotificacoes() && this.isFiltroPorNaoLidas() && !this.isBuscandoNotificacoes && (index.h("div", { class: "text-right" }, index.h("a", { class: "link", href: "", title: "Marcar todas como lidas", onClick: this.onClickMarcarTodasComoLidas }, "Marcar todas como lidas"))), index.h("div", { style: this.getHeightPainelNotificacoes(), class: "painel-notificacoes", onScroll: this.onContentScroll }, !this.isApiIndisponivel && !this.hasNotificacoes() && !this.isBuscandoNotificacoes && (index.h("div", { class: "empty-notificacoes" }, index.h("div", { class: "empty-notificacoes__img" }), index.h("h4", null, "N\u00E3o h\u00E1 notifica\u00E7\u00F5es por aqui"))), this.isApiIndisponivel && !this.isBuscandoNotificacoes && (index.h("div", { class: "empty-notificacoes" }, index.h("div", { class: "empty-notificacoes-inconsistency" }), index.h("h4", null, "As notifica\u00E7\u00F5es est\u00E3o temporariamente indispon\u00EDveis"))), !this.isApiIndisponivel && (index.h("ul", { class: "notificacoes-lista" }, this
                .getNotificacoesPorFiltroAtivo()
                .map(notificacao => (index.h("li", { key: notificacao.id }, index.h("bth-notificacao-item", { identificador: notificacao.id, tipo: this.getOpcaoFiltroAtivo().id, texto: notificacao.text, dataHora: notificacao.dateTime, origem: notificacao.source, icone: notificacao.icon, resultadoLink: notificacao.link, cancelamentoLink: notificacao.cancellationLink, acompanharLink: notificacao.trackingLink, possuiProgresso: notificacao.progress, percentualProgresso: notificacao.percentage, status: notificacao.status, prioridade: notificacao.priority })))))), this.renderLoader()))
        ];
        if (this.onlyContent)
            return (index.h("div", null, notificacoesConteudo()));
        return (index.h("bth-menu-ferramenta", { descricao: "Notifica\u00E7\u00F5es", tituloPainelLateral: "Notifica\u00E7\u00F5es" }, index.h("bth-menu-ferramenta-icone", { slot: "menu_item_mobile", icone: "bell", contador: this.quantidadeTotalNaoLidas, mobile: true }), index.h("span", { slot: "menu_descricao_mobile", class: "descricao-mobile" }, "Notifica\u00E7\u00F5es"), index.h("bth-menu-ferramenta-icone", { slot: "menu_item_desktop", icone: "bell", contador: this.quantidadeTotalNaoLidas }), index.h("section", { slot: "conteudo_painel_lateral" }, notificacoesConteudo())));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "quantidadeTotalNaoLidas": ["onChangeQuantidadeTotalNaoLidas"],
        "authorization": ["onChangeApiRelatedProperties"],
        "notificacoesApi": ["onChangeApiRelatedProperties"],
        "notificacoesWs": ["onChangeApiRelatedProperties"]
    }; }
};
Notificacoes.style = notificacoesCss;

const novidadeItemCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.lista__item{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid var(--bth-app-gray-light-10);padding:12px 8px}.lista__item--unread{cursor:pointer}.lista__item:hover,.lista__item :focus{background-color:var(--bth-app-gray-light-30)}.lista__item--body{display:-ms-flexbox;display:flex}.lista__item--body .icone-gift{width:34px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-right:12px;margin-top:-5px;font-size:28px;color:var(--bth-app-purple)}.lista__item--body .marcar-leitura__toggler{width:auto;margin:0px;padding:0px}.lista__item--body .marcar-leitura__toggler bth-icone{font-size:16px;color:var(--bth-app-gray-dark-20);margin-top:4px}.lista__item--body section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:calc(100% - 15px);margin-right:12px}.lista__item--body section .title{font-size:14px;font-weight:400;margin-bottom:8px}.lista__item--body section .message{font-size:13px;color:var(--bth-app-gray-dark-20)}.lista__item--footer{margin-top:8px;display:inline-block;font-size:12px;color:var(--bth-app-gray-dark-10)}.lista__item--footer .float-right{float:right}.lista__item--footer a{color:var(--bth-app-blue);text-decoration:none}.lista__item--footer a:hover{color:var(--bth-app-blue-dark-10);text-decoration:underline}";

const NovidadeItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.novidadeLida = index.createEvent(this, "novidadeLida", 7);
        this.novidadeNaoLida = index.createEvent(this, "novidadeNaoLida", 7);
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
        return (index.h("div", { onClick: this.onClickPainel, title: this.isLida ? '' : 'Abrir mais detalhes e marcar como lida', class: `lista__item ${!this.isLida ? 'lista__item--unread' : ''}` }, index.h("div", { class: "lista__item--body" }, index.h("bth-icone", { class: "icone-gift", icone: "gift" }), index.h("section", null, index.h("h5", { class: "title", title: this.titulo }, this.titulo), index.h("p", { class: "message", title: this.mensagem }, this.mensagem)), index.h("a", { href: "", class: "marcar-leitura__toggler", onClick: this.onClick, title: this.isLida ? 'Marcar como não lida' : 'Marcar como lida' }, index.h("bth-icone", { icone: this.isLida ? 'email-open-outline' : 'email-outline' }))), index.h("div", { class: "lista__item--footer" }, index.h("a", { href: this.url, title: "Mais detalhes", target: "_blank", rel: "noreferrer" }, "Mais detalhes"), this.dataHora && (index.h("span", { class: "float-right", title: getDataHoraDescrita(this.dataHora) }, getDataHoraDescrita(this.dataHora))))));
    }
};
NovidadeItem.style = novidadeItemCss;

// 1 hora
const POLLING_INTERVAL = 3.6e6;

var FiltroNovidade;
(function (FiltroNovidade) {
    FiltroNovidade["Lida"] = "Lida";
    FiltroNovidade["NaoLida"] = "NaoLida";
})(FiltroNovidade || (FiltroNovidade = {}));

class NovidadesService {
    constructor(authorization, novidadesApi) {
        this.authorization = authorization;
        this.api = new Api(authorization.getAuthorization(), authorization.handleUnauthorizedAccess, novidadesApi);
    }
    async buscar() {
        return this.api.request('GET', 'api/novidades');
    }
    marcarComoLida(novidadeId) {
        localStorage.setItem(this.construirStorageKey(novidadeId), 'true');
    }
    marcarComoNaoLida(novidadeId) {
        localStorage.removeItem(this.construirStorageKey(novidadeId));
    }
    isLida(novidadeId) {
        return localStorage.getItem(this.construirStorageKey(novidadeId)) !== null;
    }
    construirStorageKey(novidadeId) {
        const { userId } = this.authorization.getAuthorization();
        return `novidades_${userId !== null && userId !== void 0 ? userId : 'anonimo'}_${novidadeId}`;
    }
}

const sortByDataInicial = (novidadeA, novidadeB) => {
    return novidadeA.dataInicial < novidadeB.dataInicial ? 1 : -1;
};

const novidadesCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.descricao-mobile{text-decoration:none;padding:0 16px}.marcar-todas{text-align:right}.marcar-todas a{text-decoration:none;color:var(--bth-app-blue)}.marcar-todas a:hover{text-decoration:underline;color:var(--bth-app-blue-dark-10)}.painel-novidades{margin:16px 0px 0px 0px;overflow-y:auto;overflow-x:hidden;height:calc(100vh - 200px)}.painel-novidades .loader{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.painel-novidades .loader--full-page{height:90%}.painel-novidades .loader--list-bottom{height:60px}.painel-novidades .lista{padding:0px;margin:2px;list-style-type:none}.painel-novidades .empty-state-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:95%;text-align:center}.painel-novidades .empty-state-container .sem-registros{background-image:url(\"https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/empty-novidades.svg\");background-repeat:no-repeat;background-position-x:center;background-size:130px;height:135px;width:130px}.painel-novidades .empty-state-container .indisponivel{background-image:url(\"https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/empty-inconsistencia-novidades-alerta.svg\");background-repeat:no-repeat;background-position-x:center;background-size:130px;height:135px;width:130px}.painel-novidades .empty-state-container h4{font-size:20px;font-weight:var(--bth-app-font-weight-regular);margin:24px 0px}";

const Novidades = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.conteudoSinalizado = index.createEvent(this, "conteudoSinalizado", 7);
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
            index.forceUpdate(this);
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
        index.forceUpdate(this);
        this.atualizarIndicadorConteudoSinalizado();
    }
    onNovidadeNaoLida(data) {
        const { id } = data.detail;
        this.novidadesService.marcarComoNaoLida(id);
        index.forceUpdate(this);
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
        if (promiseTracker.isNill(this.pollingHandler)) {
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
        if (promiseTracker.isNill(this.getNovidadesApi())) {
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
        if (!promiseTracker.isNill(this.novidadesApi)) {
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
        return (index.h("div", { class: `loader ${isPageLoader ? 'loader--full-page' : 'loader--list-bottom'}` }, index.h("bth-loader", null)));
    }
    render() {
        const totalNaoLida = this.getQtdNaoLidas();
        const totalLida = this.getQtdLidas();
        return (index.h("bth-menu-ferramenta", { descricao: "Novidades", tituloPainelLateral: "Novidades" }, index.h("bth-menu-ferramenta-icone", { slot: "menu_item_mobile", icone: "gift", contador: totalNaoLida, mobile: true }), index.h("span", { slot: "menu_descricao_mobile", class: "descricao-mobile" }, "Novidades"), index.h("bth-menu-ferramenta-icone", { slot: "menu_item_desktop", icone: "gift", contador: totalNaoLida }), index.h("section", { slot: "conteudo_painel_lateral" }, !this.isApiIndisponivel && (index.h("bth-navbar-pill-group", { descricao: "Novidades" }, this.filtros.map(filtro => (index.h("bth-navbar-pill-item", { key: filtro.id.toString(), identificador: filtro.id.toString(), icone: filtro.icone, descricao: filtro.descricao, ativo: filtro.ativo, totalizador: filtro.id === FiltroNovidade.NaoLida ? totalNaoLida : totalLida, showTotalizador: !this.isBuscandoNovidades }))))), totalNaoLida !== 0 && this.isFiltroPorNaoLidas() && (index.h("div", { class: "marcar-todas" }, index.h("a", { href: "", onClick: this.onClickMarcarTodasComoLidas }, "Marcar todas como lidas"))), index.h("div", { class: "painel-novidades" }, this.isEmptyStateVisible() && !this.isBuscandoNovidades && (index.h("section", { class: "empty-state-container" }, index.h("div", { class: "sem-registros" }), index.h("h4", null, "N\u00E3o h\u00E1 novidades por aqui"))), this.isApiIndisponivel && !this.isBuscandoNovidades && (index.h("section", { class: "empty-state-container" }, index.h("div", { class: "indisponivel" }), index.h("h4", null, "As novidades est\u00E3o temporariamente indispon\u00EDveis"))), !this.isApiIndisponivel && (index.h("ul", { class: "lista" }, this.isFiltroPorLidas() && (this.novidades.map(novidade => {
            if (this.novidadesService.isLida(novidade.id)) {
                return (index.h("li", { key: novidade.id }, index.h("bth-novidade-item", { identificador: novidade.id, titulo: novidade.titulo, mensagem: novidade.mensagem, url: novidade.url, dataHora: novidade.dataInicial, isLida: true })));
            }
        })), this.isFiltroPorNaoLidas() && (this.novidades.map(novidade => {
            if (!this.novidadesService.isLida(novidade.id)) {
                return (index.h("li", { key: novidade.id }, index.h("bth-novidade-item", { identificador: novidade.id, titulo: novidade.titulo, mensagem: novidade.mensagem, url: novidade.url, dataHora: novidade.dataInicial, isLida: false })));
            }
        })))), this.renderLoader()))));
    }
    static get watchers() { return {
        "authorization": ["watchAuthorization"],
        "novidadesApi": ["watchNovidadesApi"]
    }; }
};
Novidades.style = novidadesCss;

const utilitariosCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}.descricao-mobile{text-decoration:none;padding:0 16px}.painel-utilitarios ul{display:grid;grid-template-columns:repeat(auto-fill, minmax(150px, 1fr));grid-gap:0.6em;padding:0px;list-style:none}.painel-utilitarios ul li .painel-utilitarios__card{text-decoration:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;text-align:left;height:100px;padding:24px 12px 0px 12px;cursor:pointer;border-radius:2px;width:100%;background-color:var(--bth-app-gray-light-40)}.painel-utilitarios ul li .painel-utilitarios__card bth-icone{font-size:20px;color:var(--bth-app-blue)}.painel-utilitarios ul li .painel-utilitarios__card .descricao{font-size:14px;color:var(--bth-app-gray-dark-30);font-weight:var(--bth-app-font-weight-regular);margin:6px 0px 0px 0px}.painel-utilitarios ul li .painel-utilitarios__card--bordered{border:1px solid var(--bth-app-gray-light-10)}.painel-utilitarios ul li .painel-utilitarios__card--clickable:hover{border:1px solid var(--bth-app-blue);cursor:pointer}.painel-utilitarios ul li .painel-utilitarios__card--clickable:focus{outline:1px dotted var(--bth-app-gray-dark-30)}.painel-utilitarios ul li .painel-utilitarios__card--disabled{opacity:0.6;cursor:not-allowed}.block-ellipsis{display:-webkit-box;height:34px;line-height:1.2;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}@media (max-width: 991px){.painel-utilitarios ul{grid-template-columns:repeat(auto-fill, minmax(200px, 1fr))}}@media (max-width: 576px){.painel-utilitarios ul{grid-template-columns:repeat(auto-fill, minmax(150px, 1fr))}}";

const Utilitarios = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.opcaoUtilitarioSelecionada = index.createEvent(this, "opcaoUtilitarioSelecionada", 7);
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
        return (index.h("bth-menu-ferramenta", { descricao: "Utilit\u00E1rios", tituloPainelLateral: "Utilit\u00E1rios" }, index.h("bth-menu-ferramenta-icone", { slot: "menu_item_desktop", icone: "view-grid" }), index.h("bth-menu-ferramenta-icone", { slot: "menu_item_mobile", icone: "view-grid", mobile: true }), index.h("span", { slot: "menu_descricao_mobile", class: "descricao-mobile" }, "Utilit\u00E1rios"), index.h("div", { slot: "conteudo_painel_lateral", class: "painel-utilitarios" }, this.utilitarios && (index.h("ul", null, this.utilitarios.map((utilitario, index$1) => {
            return (index.h("li", { key: index$1, id: `utilitario_item_${index$1}` }, index.h("button", { onClick: (event) => this.onClick(event, utilitario), class: `
                          painel-utilitarios__card
                          painel-utilitarios__card--bordered block-ellipsis
                          ${utilitario.possuiPermissao ? 'painel-utilitarios__card--clickable' : 'painel-utilitarios__card--disabled'}
                        `, title: utilitario.possuiPermissao ? utilitario.nome : promiseTracker.MSG_SEM_PERMISSAO_RECURSO, "aria-label": `Acessar o utilitário ${utilitario.nome}`, "aria-disabled": `${!utilitario.possuiPermissao}`, disabled: !utilitario.possuiPermissao }, index.h("bth-icone", { icone: utilitario.icone, title: utilitario.nome }), index.h("span", { class: "descricao block-ellipsis" }, utilitario.nome))));
        }))))));
    }
    get el() { return index.getElement(this); }
};
Utilitarios.style = utilitariosCss;

exports.bth_ajuda = Ajuda;
exports.bth_app = App;
exports.bth_avatar = Avatar;
exports.bth_conta_usuario = ContaUsuario;
exports.bth_icone = Icone;
exports.bth_loader = Loader;
exports.bth_marca_produto = MarcaProduto;
exports.bth_menu_ferramenta = MenuFerramenta;
exports.bth_menu_ferramenta_icone = MenuFerramentaIcone;
exports.bth_menu_horizontal_item = MenuHorizontalItem;
exports.bth_menu_painel_lateral = MenuPainelLateral;
exports.bth_menu_vertical_item = MenuVerticalItem;
exports.bth_navbar_pill_group = NavbarPillGroup;
exports.bth_navbar_pill_item = NavbarPillItem;
exports.bth_notificacao_item = NotificacaoItem;
exports.bth_notificacoes = Notificacoes;
exports.bth_novidade_item = NovidadeItem;
exports.bth_novidades = Novidades;
exports.bth_utilitarios = Utilitarios;
