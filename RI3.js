class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get obterCpf() { return this.#cpf }
    get obterNomeMaiusculo() { return this.nome.toUpperCase() }
    get obterNomeMinusculo() { return this.nome.toLowerCase() }

    get obterEnderecoMaiusculo() { return this.endereco.obterEnderecoCompleto.toUpperCase() }
    get obterEnderecoMinusculo() { return this.endereco.obterEnderecoCompleto.toLowerCase() }

    get obterEndereco() { return this.endereco }
    get obterTelefones() { return Array.from(this.telefones) }

    adicionarTelefones(telefone) {
        this.telefones.add(telefone)
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    get obterTelefone() { return `(${this.ddd}) ${this.numero}` }

    toString() { return this.obterTelefone }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    get obterEstadoMaiusculo() { return this.estado.toUpperCase() }
    get obterCidadeMaiusculo() { return this.cidade.toUpperCase() }
    get obterRuaMaiusculo() { return this.rua.toUpperCase() }
    get obterNumeroMaiusculo() { return String(this.numero).toUpperCase() }

    
    get obterEnderecoCompleto() { return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}` }

    toString() { return this.obterEnderecoCompleto }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get obterCnpj() { return this.#cnpj }

    adicionarTelefones(telefone) {
        this.telefones.add(telefone)
    }

    adicionarClientes(cliente) {
        this.clientes.add(cliente)
    }

    descricao() {
        let output = `Razão Social: ${this.razaoSocial} \nNome fantasia: ${this.nomeFantasia}\n-----------------\n`

        for (const cliente of this.clientes) {
            const end = cliente.endereco
            const tels = Array.from(cliente.telefones)
                .map(t => `DDD: ${t.ddd} Número: ${t.numero}`)
                .join('\n')
            output += `Nome: ${cliente.obterNomeMaiusculo} \nEndereço: ${cliente.obterEnderecoMaiusculo} \n${tels}\n\n`
        }

        return output
    }
}


let empresa1 = new Empresa("ABB", "About Brazilian Business", "00.000.000/0001-00")
empresa1.adicionarTelefones(new Telefone("11", "4002-8922"))

const cliente1 = new Cliente("João", "02321", new Endereco("SP", "São Paulo", "Rua A", 101))
cliente1.adicionarTelefones(new Telefone("11", "91234-5678"))
cliente1.adicionarTelefones(new Telefone("11", "98765-4321"))

const cliente2 = new Cliente("Joana", "00661", new Endereco("SP", "São Paulo", "Rua B", 102))
cliente2.adicionarTelefones(new Telefone("11", "92345-6789"))
cliente2.adicionarTelefones(new Telefone("11", "97654-3210"))

const cliente3 = new Cliente("Ana", "22111", new Endereco("SP", "São Paulo", "Rua C", 103))
cliente3.adicionarTelefones(new Telefone("11", "93456-7890"))
cliente3.adicionarTelefones(new Telefone("11", "96543-2109"))

const cliente4 = new Cliente("Bob", "03331", new Endereco("SP", "São Paulo", "Rua D", 104))
cliente4.adicionarTelefones(new Telefone("11", "94567-8901"))
cliente4.adicionarTelefones(new Telefone("11", "95432-1098"))

const cliente5 = new Cliente("Maria", "04441", new Endereco("SP", "São Paulo", "Rua E", 105))
cliente5.adicionarTelefones(new Telefone("11", "95678-9012"))
cliente5.adicionarTelefones(new Telefone("11", "94321-0987"))

empresa1.adicionarClientes(cliente1)
empresa1.adicionarClientes(cliente2)
empresa1.adicionarClientes(cliente3)
empresa1.adicionarClientes(cliente4)
empresa1.adicionarClientes(cliente5)

console.log(empresa1.descricao())
