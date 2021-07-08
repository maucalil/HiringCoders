// objeto 
const pessoa = {
    nome: "Mauras",
    idade: 17,
    cidade: "Pontal"
}

// Notação de ponto

console.log(pessoa.nome)

// Notação de colchete

console.log(pessoa['idade'])

// Como desestruturar objetos

const {nome, idade, cidade} = pessoa

console.log(cidade)