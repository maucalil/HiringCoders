const mauras = ["The", "Biggest", "Mauras"]

console.log(mauras)

// operador spread(...)
const mauras2 = [...mauras, "Sim, ele"]

console.log(mauras2)

// Métodos de iteração (diferenciados)
    // Map
    mauras2.map(item => console.log(item))

    // Filters
    const numeros = [10, 15, 3, 20, 25, 30]

    const impares = numeros.filter(numero => numero%2 != 0)
    console.log(impares)

    const pares = numeros.filter(numero => numero%2 == 0)
    console.log(pares)

    const crescentes = numeros.sort((a,b) => a-b)
    console.log(crescentes)

    const decrescentes = numeros.sort((a,b) => b-a)
    console.log(decrescentes)

    // Reduce - reduz nosso array a um resultado de uma operação matemática
    const numbers = [1, 34, 35]

    const soma = numbers.reduce((anterior, atual) => {
        return anterior + atual
    },0)

    console.log(soma)