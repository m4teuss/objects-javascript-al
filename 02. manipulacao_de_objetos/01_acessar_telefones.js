/*   Desafio acessar uma lista de números de telefone, de cada pessoa cadastrada no sistema do banco,
     cada cliente e temos que imprimir essa lista, e verificar se há mais de um número no cadastro,
     ou seja, se o cliente tiver mais de um número temos que imprimir os dois números.
*/

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