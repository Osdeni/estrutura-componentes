import { ComponentInterface } from '../../stencil-public-runtime';
export declare class Ajuda implements ComponentInterface {
    /**
     * URL para a home da central de ajuda. Por padrão irá obter do env.js
     */
    readonly centralAjudaHome?: string;
    private getCentralAjudaHome;
    render(): any;
}
