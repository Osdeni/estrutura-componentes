import { isNill } from './functions';
/**
 * Retorna de forma textual a data e hora relativa ao tempo atual
 *
 * @param dateTime Data e hora no formato EPOCH (1588008762990) ou ISO string (Ex: 2020-04-22T17:03:28)
 */
export function getDataHoraDescrita(dateTime) {
    if (isNill(dateTime)) {
        throw Error('A data e hora deve ser informada');
    }
    const data = new Date(dateTime);
    const dataAgora = new Date();
    let tempoFormatado = '';
    if (isHoje(data, dataAgora)) {
        if (!isMesmaHora(data, dataAgora)) {
            const horas = getDiferencaEmHoras(data, dataAgora);
            tempoFormatado = 'há ' + horas + ' hora';
            if (horas > 1) {
                tempoFormatado += 's';
            }
            return tempoFormatado;
        }
        if (!isMesmoMinuto(data, dataAgora)) {
            const minutos = getDiferencaEmMinutos(data, dataAgora);
            if (minutos > 0) {
                tempoFormatado = 'há ' + minutos + ' minuto';
                if (minutos > 1) {
                    tempoFormatado += 's';
                }
                return tempoFormatado;
            }
        }
        return 'agora há pouco';
    }
    return formatarData(data) + ' às ' + data.toTimeString().substring(0, 5);
}
function formatarData(data) {
    return data.toLocaleString('pt-BR').substring(0, 10);
}
function isHoje(dataA, dataB) {
    return getDateISOString(dataA) === getDateISOString(dataB);
}
function getDateISOString(data) {
    return data.toISOString().substring(0, 10);
}
function isMesmaHora(dataA, dataB) {
    return getDiferencaEmMinutos(dataA, dataB) < 60;
}
function getDiferencaEmMinutos(dataA, dataB) {
    return Math.floor((dataB.valueOf() - dataA.valueOf()) / (60 * 1000));
}
function getDiferencaEmHoras(dataA, dataB) {
    return dataB.getHours() - dataA.getHours();
}
function isMesmoMinuto(dataA, dataB) {
    return dataB.getMinutes() === dataA.getMinutes();
}
