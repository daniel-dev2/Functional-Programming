// programa que calcula o fatorial de um numero atraves da recursividade

const f = (n) => {
    if (n==0 || n==1) return 1 //caso base
    else return n*f(n-1) //passo indutivo
}

const n = 6
console.log(`O fatorial de ${n} é ${f(n)}`)//irá retornar o valor do fatorial do número usado como argumento