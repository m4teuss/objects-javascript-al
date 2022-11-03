const cliente = {
    nome: 'Jose',
    idade: '36',
    cpf: '787.734.528.97',
    email: 'email@gmail.com',
    fones: [  // dadpos do tipo array
        '123456789',
        '32289874'
    ],
    dependentes:[{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

// adicionar mais um dado de parentesco (teremos 2 indices de objetos dentro do objeto pai cliente)
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: 'filha',
    dataNasc: '20/03/2010'
})
console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc === '20/03/2010')
console.log(filhaMaisNova)