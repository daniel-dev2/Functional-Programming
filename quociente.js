// calcula o quociente de uma divisão
// utilizando recursividade

const f = (n,m) => {
    if (n<m) return n
    else return 1 + f(n-m,m)
}

console.log(f(20,5)) // não é otimizado para divisoes não exatas