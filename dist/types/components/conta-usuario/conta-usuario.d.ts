import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { LogoutEvent } from './conta-usuario.interfaces';
/**
 * Este componente exibe informações relacionadas ao usuário/conta logada
 *
 * Este componente foi elaborado para comportar o slot "menu_ferramentas"
 */
export declare class ContaUsuario implements ComponentInterface {
    el: HTMLBthContaUsuarioElement;
    erroCarregarFotoAvatar: boolean;
    /**
     * URL para home da Central de Usuários. Por padrão irá obter do env.js.
     */
    readonly centralUsuarioHome?: string;
    /**
     * URL para foto de avatar do usuário
     */
    readonly fotoUrl: string;
    /**
     * Nome do usuário
     */
    readonly nome: string;
    /**
     * Usuário ("username" ou "email")
     */
    readonly usuario: string;
    /**
     * É emitido ao clicar em Sair ("logout")
     */
    readonly logout: EventEmitter<LogoutEvent>;
    watchFotoUrl(): Promise<void>;
    private getCentralUsuarioHome;
    private onLogout;
    private onImageLoadError;
    private getUrlImagemPerfil;
    private renderMenuItemMobile;
    private renderMenuDescricaoMobile;
    private renderMenuItemDesktop;
    private renderConteudoPainelLateral;
    render(): any;
}
