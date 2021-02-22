import { EventEmitter, ComponentInterface } from '../../../stencil-public-runtime';
import { Tamanho } from './avatar.interfaces';
/**
 * Este componente exibe um avatar
 */
export declare class Avatar implements ComponentInterface {
    el: HTMLBthAvatarElement;
    /**
     * Define um avatar de ícone conforme biblioteca `"Material Design Icons"`
     */
    readonly icone?: string;
    /**
     * Define um sub-ícone conforme biblioteca `"Material Design Icons"`
     */
    readonly subIcone?: string;
    /**
      * Define o "title" do subícone
      */
    readonly subIconeTitle: string;
    /**
     * Define a fonte de um avatar de imagem. Aceita imagem e svg.
     */
    readonly src?: string;
    /**
     * Define avatar do tipo iniciais, aceitando até 3 iniciais ou computando as iniciais automaticamente conforme palavras passadas
     */
    readonly iniciais?: string;
    /**
     * Define o tamanho conforme dimensões pre-definidas para o avatar.
     *
     * Opções disponíveis: menor (24x24), pequeno (28x28), medio (48x48) e grande (94x94)
     */
    readonly tamanho?: Tamanho;
    /**
     * Permite definir a dimensão (largura, altura) em px para o avatar
     */
    readonly dimensao?: number;
    /**
     * Define se o avatar terá suas bordas no formato quadrado.
     *
     * Por padrão é redondo
     */
    readonly quadrado?: boolean;
    /**
     * Define se o avatar possui borda
     */
    readonly borda?: boolean;
    /**
     * Define o tamanho da borda
     */
    readonly bordaTamanho?: string;
    /**
     * Define o raio da borda do avatar. Caso informado, sobrescreve o atributo utilitario 'quadrado'.
     */
    readonly bordaRaio?: string;
    /**
     * Define a cor da borda
     */
    readonly bordaCor?: string;
    /**
    * É emitido quando houver erro ao carregar a imagem
    */
    imageLoadError: EventEmitter;
    private getSiglaIniciais;
    private getColorClass;
    private getSizeClass;
    private getRoundingClass;
    private getCorInicias;
    private onImageLoadError;
    private getContainerCustomStyles;
    private getImagemCustomStyles;
    render(): any;
}
