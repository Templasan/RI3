Este código é um excelente projeto de **Programação Orientada a Objetos (POO)** em JavaScript, focado na **modelagem de um sistema de gestão de clientes e empresas**, utilizando recursos modernos da linguagem como **classes**, **encapsulamento** (campos privados `#`) e **coleções** (`Set`).

Aqui está o `README.md` detalhado para o seu sistema:

-----

# 🏢 Sistema de Gestão de Clientes e Empresas (POO Moderna em JS)

Este projeto implementa um pequeno **Sistema de Gestão de Clientes e Contatos** utilizando recursos avançados de **Programação Orientada a Objetos (POO)** em JavaScript (ES6+).

O código demonstra a modelagem de entidades complexas (`Empresa`, `Cliente`, `Endereco`, `Telefone`), o uso de **encapsulamento** e a gestão de coleções com a classe nativa `Set`.

-----

## 🎯 Sobre o Projeto

O sistema é baseado no princípio de **Composição de Objetos**, onde entidades maiores (como `Empresa` e `Cliente`) são construídas a partir de entidades menores (`Telefone` e `Endereco`).

### Destaques da Implementação

  * **Encapsulamento com Campos Privados:** As classes `Cliente` e `Empresa` utilizam a sintaxe de campo privado (`#cpf`, `#cnpj`) para proteger dados sensíveis, que são acessados apenas por meio de *getters* públicos.
  * **Composição Forte:** O `Cliente` é composto por um `Endereco` e possui uma coleção de `Telefone`.
  * **Coleções Não Duplicadas:** O uso da classe `Set` garante que números de telefone e clientes sejam armazenados de forma única, evitando redundância.
  * **Getters Computados:** Uso intensivo de métodos `get` (acessores) para retornar dados formatados ou transformados (ex: nome em maiúsculas, endereço completo, telefone formatado), mantendo a lógica de apresentação separada dos dados brutos.

-----

## ✨ Estrutura de Classes e Funcionalidades

O projeto é estruturado em quatro classes principais que modelam o domínio do negócio:

### 1\. `class Empresa`

  * **Responsabilidade:** Gerenciar a razão social, nome fantasia e manter coleções exclusivas de clientes e telefones.
  * **Funcionalidade Principal:** O método `descricao()` gera um relatório formatado de todos os clientes associados à empresa, exibindo seus dados e contatos.

### 2\. `class Cliente`

  * **Responsabilidade:** Modelar o cliente, encapsulando o CPF e compondo as entidades `Endereco` e `Telefone`.
  * **Funcionalidades Chave:** Uso do `Set` para gerenciar múltiplos telefones e diversos *getters* para transformação de strings (maiúsculas/minúsculas).

### 3\. `class Endereco`

  * **Responsabilidade:** Armazenar e formatar informações de localização.
  * **Funcionalidade Chave:** O *getter* `obterEnderecoCompleto` formata o endereço no padrão `Rua, Número - Cidade/UF`.

### 4\. `class Telefone`

  * **Responsabilidade:** Armazenar DDD e número de forma separada.
  * **Funcionalidade Chave:** O *getter* `obterTelefone` retorna o número formatado `(DDD) Número`.

-----

## 💻 Tecnologias Usadas

  * **[JavaScript (ES6+)](https://developer.mozilla.org/):** Linguagem principal, utilizando a sintaxe `class`, *getters* e `Set`.
  * **[Node.js](https://nodejs.org/):** Ambiente de execução do script.

-----

## 🔧 Pré-requisitos

  * **Node.js** (versão recomendada 18.x ou superior) instalado em sua máquina.

-----

## 🚀 Manual de Execução

Para rodar a demonstração do sistema no seu ambiente local:

1.  **Salve o Código:** Crie um arquivo chamado `sistema_gestao.js` e cole todo o código fornecido.

2.  **Execute o Script**

    ```bash
    node RI3.js
    ```

3.  **Resultado Esperado:** O terminal exibirá o relatório gerado pela função `empresa1.descricao()`, listando a Razão Social, Nome Fantasia e os dados completos (Nome em MAIÚSCULAS, Endereço e Telefones) de todos os clientes associados.
