import { r as registerInstance, h, H as Host } from './index-97eb0dde.js';

const emptyStateCss = "*,*:after,*:before{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}*{font-family:var(--bth-app-font-family-primary)}a:focus{outline:1px dotted var(--bth-app-gray-dark-30)}::-webkit-scrollbar{-webkit-appearance:none;height:6px;width:6px}::-webkit-scrollbar-track{background:var(--bth-app-gray-light-30)}::-webkit-scrollbar-corner{background:var(--bth-app-gray-light-40)}::-webkit-scrollbar-thumb{background-color:var(--bth-app-gray);border-radius:1px}::-webkit-scrollbar-thumb:hover{background-color:rgba(255, 255, 255, 0.3)}:host{display:block}.empty-state{display:none;background-color:transparent;text-align:center;padding:20px 5px}.empty-state--show{display:block}.empty-state img,.empty-state ::slotted(img){width:230px;margin:20px 0}.empty-state h4,.empty-state ::slotted(h4){font-size:1.5rem;margin-bottom:0.5rem;font-weight:500;line-height:1.2}.empty-state--small img,.empty-state--small ::slotted(img){width:125px;margin:20px 0}.empty-state--small h4,.empty-state--small ::slotted(h4){font-size:1.15rem;margin-bottom:0.5rem;font-weight:500;line-height:1.2}@media (min-width: 576px){.empty-state img,.empty-state ::slotted(img){width:250px}.empty-state--small img,.empty-state--small ::slotted(img){width:140px}}@media (min-width: 992px){.empty-state img,.empty-state ::slotted(img){width:270px}.empty-state--small img,.empty-state--small ::slotted(img){width:150px}}@media (min-width: 1200px){.empty-state img,.empty-state ::slotted(img){width:280px}.empty-state--small img,.empty-state--small ::slotted(img){width:155px}}";

const EmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("section", { class: `empty-state ${this.pequeno ? 'empty-state--small' : ''} ${this.show ? 'empty-state--show' : ''}` }, h("slot", null, this.registros && ([
            h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/records.svg", alt: "Ainda n\u00E3o h\u00E1 registros por aqui" }),
            h("h4", null, "Ainda n\u00E3o h\u00E1 registros por aqui"),
        ]), this.registrosPesquisa && ([
            h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/list.svg", alt: "Nenhum resultado encontrado. Os filtros ou a ortografia dos termos utilizados na pesquisa podem ser revisados." }),
            h("h4", null, "Nenhum resultado encontrado para sua pesquisa"),
            h("p", null, "- Tente utilizar uma combina\u00E7\u00E3o diferente de filtros", h("br", null), "- Revise a ortografia dos termos digitados"),
        ]), this.online && ([
            h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/online.svg", alt: "Conex\u00E3o com a Internet est\u00E1vel" }),
            h("h4", null, "Sua conex\u00E3o est\u00E1 est\u00E1vel"),
        ]), this.offline && ([
            h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/offline.svg", alt: "Desconectado da Internet" }),
            h("h4", null, "Voc\u00EA est\u00E1 offline"),
            h("p", null, "Isso pode prejudicar as suas atividades no sistema")
        ]), this.paginaNaoEncontrada && ([
            h("img", { src: "https://cdn.betha.cloud/plataforma/design/kare/framework/0.1.6/assets/images/404.svg", alt: "P\u00E1gina n\u00E3o encontrada" }),
            h("h4", null, "Ops! Ocorreu um erro"),
            h("p", null, "A p\u00E1gina que voc\u00EA tentou acessar n\u00E3o foi encontrada")
        ])))));
    }
};
EmptyState.style = emptyStateCss;

export { EmptyState as bth_empty_state };
