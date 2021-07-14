// função que adiciona 2 números e verifica se a soma é par
function par(x1, x2) {

    // declara e inicializa a variável soma
    let soma = x1 + x2;

    // checa se a soma é divisivel por 2
    if (soma % 2 === 0) {
        return true; // se não houver resto da divisão da soma por 2, retorna que é par
    }
    else {
        return false; // se houver resto da divisão da soma por 2, retorna que não é par
    }
}