/**
 * @description Obtém valor de uma variável CSS que está no DOM
 * @param name Nome da variável CSS
 * @param element Elemento para obter o style
 * @returns Valor da variável CSS
 */
export declare function getCssVariableValue(name: string, element?: HTMLElement): string;
/**
 * @description Verifica se o valor do parâmetro é null ou undefined
 * @param value Valor
 * @returns True se for null ou undefined
 */
export declare function isNill(value: any): boolean;
/**
 * @description Verifica se o dispositivo corresponde a resolução de um dispotivo móvel (largura <= 991px)
 * @returns True se corresponder a resolução
 */
export declare function isDispositivoMovel(): boolean;
