// FizzBuzz
let a = prompt("Digite um número")

let ans = fizzbuzz(a);
console.log(ans)

function fizzbuzz(num) {
    if (typeof num !== typeof 1 || typeof num !== typeof 1.0) {
        return "Não é um número"
    }
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz"
    }
    else if (num % 3 === 0) {
        return "Fizz"
    }
    else if (num % 5 === 0) {
        return "Buzz"
    } 
    else {
        return num
    }
}