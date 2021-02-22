import { DEVICE_BREAKPOINTS } from '../global/constants';
/**
 * @description Obtém valor de uma variável CSS que está no DOM
 * @param name Nome da variável CSS
 * @param element Elemento para obter o style
 * @returns Valor da variável CSS
 */
export function getCssVariableValue(name, element = document.documentElement) {
    var _a;
    return (_a = window
        .getComputedStyle(element)
        .getPropertyValue(name)) === null || _a === void 0 ? void 0 : _a.trim();
}
/**
 * @description Verifica se o valor do parâmetro é null ou undefined
 * @param value Valor
 * @returns True se for null ou undefined
 */
export function isNill(value) {
    return value === null || value === undefined;
}
/**
 * @description Verifica se o dispositivo corresponde a resolução de um dispotivo móvel (largura <= 991px)
 * @returns True se corresponder a resolução
 */
export function isDispositivoMovel() {
    const mediaQuery = window.matchMedia(`(min-width: ${DEVICE_BREAKPOINTS.LARGE}px)`);
    return !mediaQuery.matches;
}
