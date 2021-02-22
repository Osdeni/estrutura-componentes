import { h } from '@stencil/core';
export default function BadgeContador({ valor, customClass }) {
    if (valor === undefined || valor <= 0) {
        return undefined;
    }
    const valorExibir = valor > 99 ? '99+' : valor;
    return (h("div", { class: `badge ${customClass !== undefined ? customClass : ''}`, title: valorExibir.toString() }, valorExibir));
}
