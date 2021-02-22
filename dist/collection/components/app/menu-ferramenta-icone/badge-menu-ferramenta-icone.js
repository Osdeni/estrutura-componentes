import { h } from '@stencil/core';
export default (props) => {
    if (props === undefined || props.contador === undefined || props.contador === 0) {
        return undefined;
    }
    return (h("span", { class: "badge" }, props.contador > 99 ? '99+' : props.contador));
};
