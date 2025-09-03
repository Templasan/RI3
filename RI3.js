class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get obterCpf(){return this.#cpf}

    get obterNomeCaixaAlta(){return this.nome.UpperCase()}
    
    get obterEnderecoCaixaAlta(){return this.endereco.UpperCase()}

    get obterNomeCaixaBaixa(){return this.nome.LowerCase()}

    get obterEnderecoCaixaBaixa(){return this.endereco.LowerCase()}

    adicionarTelefones(){
        this.telefones.add(telefones)
    }
}

class Telefone {
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    get obterEstadoCaixaAlta(){return this.estado.UpperCase()}

    get obterCidadeCaixaAlta(){return this.cidade.UpperCase()}

    get obterRuaCaixaAlta(){return this.rua.UpperCase()}

    get obterEstadoCaixaBaixa(){return this.estado.LowerCase()}

    get obterCidadeCaixaBaixa(){return this.cidade.LowerCase()}

    get obterRuaCaixaBaixa(){return this.rua.LowerCase()}
}

class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj){
        this.endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        // this.clientes = new Set()
        this.telefones = new Set()
    }

    get obterCnpj(){return this.#cnpj}

    get obterNomeFCaixaAlta(){return this.nomeFantasia.UpperCase()}

    get obterRazaoCaixaAlta(){return this.razaoSocial.UpperCase()}

    get obterNomeFCaixaBaixa(){return this.nomeFantasia.LowerCaseCase()}

    get obterRazaoCaixaBaixa(){return this.razaoSocial.LowerCase()}

    get clientes(){
        return this.clientes
    }

    adicionarTelefones(){
        this.telefones.add(telefones)
    }


    // detalhe(){

    // }

}

let empresa1 = new Empresa ("ABB", "About Brazilian Business", "0000000")

const cliente1 = new Cliente("João", "02321")
const cliente2 = new Cliente("Joana", "00661")
const cliente3 = new Cliente("Ana", "22111")
const cliente4 = new Cliente("Bob", "03331")

// empresa1.adicionarClientes(cliente1)
// empresa1.adicionarClientes(cliente2)
// empresa1.adicionarClientes(cliente3)
// empresa1.adicionarClientes(cliente4)

console.log(empresa1.clientes())
