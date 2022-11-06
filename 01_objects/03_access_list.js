// Objeto: Chave e Valor
const cliente = {
    nome: 'Jose',
    idade: '36',
    cpf: '787.734.528.97',
    email: 'email@gmail.com'
}
// Array         //0      //1      //2     //3
const chaves = ['nome', 'idade', 'cpf', 'email']

// #1 - Imprime o nome "Jose" pois o array chaves possui uma chave com o mesmo nome
console.log(cliente[chaves[0]])

// #2 - forEach é um metodo de array que funciona como callback
chaves.forEach(chavesDoArray => console.log(cliente[chavesDoArray]))

// #3 - Acessar uma chave que não existe -> undefined
console.log(cliente['inexistente'])