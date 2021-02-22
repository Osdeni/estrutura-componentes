import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
import { NovidadeLeituraEvent } from '../novidades.interfaces';
export declare class NovidadeItem implements ComponentInterface {
    /**
     * Identificador
     */
    readonly identificador: string;
    /**
     * Título
     */
    readonly titulo: string;
    /**
     * Mensagem
     */
    readonly mensagem: string;
    /**
     * Define se já está lida
     */
    readonly isLida: boolean;
    /**
     * URL para obter mais informações
     */
    readonly url: string;
    /**
     * Data e hora
     */
    readonly dataHora: string;
    /**
     * É emitido quando uma novidade é marcada como lida
     */
    novidadeLida: EventEmitter<NovidadeLeituraEvent>;
    /**
     * É emitido quando uma novidade é marcada como não lida
     */
    novidadeNaoLida: EventEmitter<NovidadeLeituraEvent>;
    private onClickPainel;
    private onClick;
    render(): any;
}
