import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { Utilitario, OpcaoUtilitarioSelecionadaEvent } from './utilitarios.interfaces';
export declare class Utilitarios implements ComponentInterface {
    el: HTMLBthUtilitariosElement;
    /**
     * Utilitarios
     */
    readonly utilitarios: Array<Utilitario>;
    /**
     * É emitido quando algum utilitário for selecionado
     */
    opcaoUtilitarioSelecionada: EventEmitter<OpcaoUtilitarioSelecionadaEvent>;
    private onClick;
    render(): any;
}
