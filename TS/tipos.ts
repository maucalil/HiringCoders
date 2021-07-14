// Boolean
const contaPaga: boolean = true;

// Number
const idade: number = 17;
const nota: number = 8.5;

// String
const nome: string = 'Maurício';

// Array
const idades: number[] = [17, 25, 23, 40, 52];
const idades2: Array<number> = [17, 25, 23, 40, 52];

// Tuple
let jogadores: [string, string, string]; // pode ter varios tipos
jogadores = ['Mau', 'rí', 'cio'];

// Enum
enum StatusAprovação {
    Aprovado, // 1
    Pendente, // 2
    Rejeitado,// 3
}
const statusDaAprovação: StatusAprovação = StatusAprovação.Aprovado

// Any
const retornoDaAPI: any[] = [17, 'Maurício', true];
const retornoDaAPI2: any = {
    // ...
};

// Void
function printarNaTela(msg: string): void { // não é necessário : void
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    // ...
}
criar({
    propriedade: 1,
})
// criar('Vitor') Dá erro

// Never
function loopInfinito(): never {
    while(true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() { // : never implicito
    return erro("Algo falhou!");
}

// Union Types
const nota2: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota(10)
exibirNota('10')

// Alias
type Funcionario = {
    nome: string,
    sobrenome: string,
    nascimento: Date,
}
const funcionarios: Array<Funcionario> = [{
    nome: 'Maurício',
    sobrenome: 'Calil',
    nascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Array<Funcionario>) {
    for(let funcionario of funcionarios) {
        console.log("Nome do funcionário: ", funcionario.nome)
    }
}

// Valores nulos ou opicionais
type Contato = {
    nome: string,
    telefone1: string,
    telefone2?: string // | null // ? operador de opção
}
const contato: Contato = {
    nome: "Maurício",
    telefone1: "1234567890"
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);