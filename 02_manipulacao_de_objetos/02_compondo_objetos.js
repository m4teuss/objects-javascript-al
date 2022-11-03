const cliente = {
    nome: 'Jose',
    idade: '36',
    cpf: '787.734.528.97',
    email: 'email@gmail.com',
    fones: [  // dadpos do tipo array
        '123456789',
        '32289874'
    ]
}

// inserindo um objeto dentro do objeto cliente
cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/05/2019'
}
console.log(cliente)

// alterar nome do dependente
cliente.dependentes.nome = "Sara Silva"
console.log(cliente)