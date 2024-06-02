import PostCanhotoDataService from "./PostCanhotoDataService";

// Função para calcular a quantidade de canhotos do dia atual
export function getCanhotosHoje(canhotos) {
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    return canhotos.filter(canhoto => {
        const dataInclusao = new Date(canhoto.dataInclusao);
        const diaDoCanhoto = dataInclusao.getDate();
        return diaDoCanhoto === diaAtual;
    }).length;
}

// Função para calcular a quantidade de canhotos do mês atual
export function getQuantidadeCanhotosDoMes(canhotos) {
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();
    return canhotos.filter(canhoto => {
        const dataInclusao = new Date(canhoto.dataInclusao);
        const mesDoCanhoto = dataInclusao.getMonth() + 1;
        const anoDoCanhoto = dataInclusao.getFullYear();
        return mesDoCanhoto === mesAtual && anoDoCanhoto === anoAtual;
    }).length;
}

// Função para formatar a data
export function formatarData(data) {

    const date = new Date(data);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

// Função para formatar o valor em reais
export function formatarValorBrasil(valor) {

    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

}