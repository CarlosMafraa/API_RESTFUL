# Projeto Node.js - API de Contatos

Este projeto consiste em uma API simples de contatos, desenvolvida em Node.js utilizando o framework Express. A aplicação oferece operações básicas para gerenciar uma lista de contatos, incluindo a criação, leitura, atualização e exclusão de registros.

## Visão Geral

O projeto está estruturado da seguinte forma:

1. **Servidor (`server.js`):**
    - Utiliza o Express para criar um servidor web.
    - Define endpoints para operações CRUD (Create, Read, Update, Delete) em uma lista de contatos.
    - Utiliza um array `contatos` para armazenar os registros e um contador `idAtual` para atribuir IDs únicos.

2. **Endpoints da API:**
     - **Criar Novo Contato:**
        - **Método:** `POST`
        - Cria um novo contato com base nos dados fornecidos no corpo da requisição.

   - **Listar Todos os Contatos:**
      - **Método:** `GET`
      - Retorna a lista completa de contatos.

    - **Obter Contato por ID:**
        - **Método:** `GET`
        - Retorna os detalhes de um contato com base no ID fornecido.

    - **Atualizar Contato por ID:**
        - **Método:** `PUT`
        - Atualiza os dados de um contato com base no ID fornecido e nos dados fornecidos no corpo da requisição.

    - **Excluir Contato por ID:**
        - **Método:** `DELETE`
        - Exclui um contato com base no ID fornecido.

## Executando o Projeto

Siga estas etapas para executar o projeto:

1. Certifique-se de ter o Node.js instalado na sua máquina.
2. Clone o repositório.
3. Instale as dependências usando o comando `npm install`.
4. Inicie o servidor com o comando `npm start`.
5. Acesse a API através de [http://localhost:3000](http://localhost:3000).
