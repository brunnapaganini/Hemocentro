# Sistema de Cadastro de Hemocentro

Este projeto é uma aplicação de linha de comando desenvolvida em **TypeScript** para gerenciar o cadastro de doadores de sangue. O sistema permite o registro de informações vitais, listagem de doadores e ferramentas de busca por critérios específicos.

## Funcionalidades

* **Cadastro de Doadores**: Registro de nome, idade, peso, tipo sanguíneo e data da última doação.
* **Validação de Tipo Sanguíneo**: O sistema verifica se o tipo sanguíneo inserido é válido (A+, A-, B+, B-, AB+, AB-, O+, O-).
* **Listagem Completa**: Exibição de todos os doadores cadastrados em formato de tabela.
* **Busca por Tipo Sanguíneo**: Filtra doadores que possuem um tipo específico de sangue.
* **Busca por Data**: Localiza doadores com base na data da última doação informada.

## Estrutura do Projeto

O código está organizado seguindo princípios de Orientação a Objetos:

* **`Pessoa.ts`**: Classe base (superclasse) contendo atributos genéricos como nome, idade e peso.
* **`Doador.ts`**: Classe que herda de `Pessoa` e adiciona informações específicas como tipo sanguíneo e data de doação.
* **`SistemaHemocentro.ts`**: Contém a lógica de negócio, gerenciando o array de doadores e os métodos de busca e cadastro.
* **`index.ts`**: Ponto de entrada da aplicação, contendo o menu interativo e o loop principal do sistema.

## Tecnologias Utilizadas

* **Linguagem**: TypeScript.
* **Entrada de Dados**: `readline-sync` para interação via terminal.
* **Ambiente**: Node.js.

## Como Executar

1.  **Instalação de Dependências**:
    Certifique-se de ter o Node.js instalado e execute o comando para instalar a biblioteca de leitura:
    ```bash
    npm install readline-sync
    ```

2.  **Compilação**:
    Como o projeto está em TypeScript, é necessário compilar para JavaScript:
    ```bash
    tsc index.ts
    ```

3.  **Execução**:
    Inicie o sistema com o comando:
    ```bash
    node index.js
    ```

## Menu de Opções

Ao iniciar o sistema, as seguintes opções estarão disponíveis:
1. Cadastrar doador.
2. Listar doadores.
3. Buscar doador por tipo sanguíneo.
4. Buscar doador por data.
5. Finalizar ficha (Sair).

---
**Desenvolvimento**: Brunna Paganini
