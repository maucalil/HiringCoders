class Data {
    // dia: number; // public default
    // mes: number;
    // ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia)

const data2 = new Data(1,1);


// MODIFICADORES DE ACESSO
class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        public velocidadeMax: number = 220
    ) {}

    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMax : 0;
        }
    }

    acelerar(){
        const aceleração = 5;
        this.alterarVelocidade(aceleração)
    }

    frear(){
        const frenagem = -5;
        this.alterarVelocidade(frenagem)
    }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
// carro.velocidadeMax = x;  não funciona = privado
// carro.velocidadeAtual = 80; não funciona = privado
// caro.alterarVelocidade(x); não funciona = privado
carro.acelerar();
carro.frear();

// HERANÇA
class Camaro extends Carro {
    private turbo = false
    constructor() {
        super('Chevrolet', 'Camaro', 500);
    }

    ligarTurbo() {
        this.turbo = true; 
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();