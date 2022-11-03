const cliente = {
    nome: 'Jose',
    idade: '36',
    cpf: '787.734.528.97',
    email: 'email@gmail.com',
    fones: [
        '123456789',
        '32289874'
    ]
}

// via forEach e console.log
cliente.fones.forEach(fone => console.log(fone))

// via console.log
console.log(`Primeiro fone: ${cliente.fones[0]}`)
console.log(`Segundo fone: ${cliente.fones[1]}`)