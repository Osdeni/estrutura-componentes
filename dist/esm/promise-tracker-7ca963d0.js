const MSG_SEM_PERMISSAO_RECURSO = 'Você não tem permissão para acessar este recurso';
const TIMEOUT_INTERACOES = 300;
const DEVICE_BREAKPOINTS = {
    SMALL: 576,
    MEDIUM: 768,
    LARGE: 992,
    EXTRA_LARGE: 1200,
};

/**
 * @description Obtém valor de uma variável CSS que está no DOM
 * @param name Nome da variável CSS
 * @param element Elemento para obter o style
 * @returns Valor da variável CSS
 */
function getCssVariableValue(name, element = document.documentElement) {
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
function isNill(value) {
    return value === null || value === undefined;
}
/**
 * @description Verifica se o dispositivo corresponde a resolução de um dispotivo móvel (largura <= 991px)
 * @returns True se corresponder a resolução
 */
function isDispositivoMovel() {
    const mediaQuery = window.matchMedia(`(min-width: ${DEVICE_BREAKPOINTS.LARGE}px)`);
    return !mediaQuery.matches;
}

class PromiseTracker {
    constructor(activeCallback) {
        this.activeCallback = activeCallback;
        this.counter = 0;
        this.active = false;
    }
    addPromise(promise) {
        this.counter++;
        this.updateActive();
        promise.then(() => {
            this.counter--;
            this.updateActive();
        }).catch(() => {
            this.counter--;
            this.updateActive();
        });
    }
    updateActive() {
        const active = this.counter > 0;
        if (active !== this.active) {
            this.active = active;
            this.activeCallback(this.active);
        }
    }
}

export { MSG_SEM_PERMISSAO_RECURSO as M, PromiseTracker as P, TIMEOUT_INTERACOES as T, isDispositivoMovel as a, getCssVariableValue as g, isNill as i };
