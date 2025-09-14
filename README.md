# Brokkr

## Descrição do Projeto

**Brokkr** é um projeto fullstack que funciona como uma página de visualização de produtos para um e-commerce. A aplicação permite que os usuários naveguem, busquem e filtrem produtos, consumindo dados de uma API de backend. As informações dos produtos são armazenadas em um banco de dados SQL.

## Tecnologias Utilizadas

Este projeto foi construído usando as seguintes tecnologias:

* **Front-end**: Angular + TypeScript
* **Back-end**: Node.js com Express e Sequelize (ORM)
* **Banco de Dados**: MySQL
* **Conteinerização**: Docker
* **IaC**: Kubernetes

## Instruções de Setup e Execução Local

Siga os passos abaixo para colocar o projeto para rodar localmente:

1.  Clone o repositório:
    `git clone https://github.com/cesusieh/desafio_brokkr`

2.  Navegue até o diretório do projeto e execute o Docker Compose para construir as imagens e levantar os containers da aplicação:
    `docker-compose up --build`

## Endpoints da API

A API de backend disponibiliza os seguintes endpoints para gerenciamento de produtos:

| Método | Endpoint | Descrição | Parâmetros de Query | Body |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/api/products` | Retorna uma lista de todos os produtos. | `search`, `page`, `limit`, `sort` |  |
| **GET** | `/api/products/:id` | Retorna um produto específico pelo ID. | Id |  |
| **POST** | `/api/products` | Cria um novo produto. |  | `{ "nome": "...", "descricao": "...", "preco": "...", "url_imagem": "...", "quantidade_em_stock": "..." }` |
| **PUT** | `/api/products/:id` | Atualiza um produto existente. | Id | `{ "nome": "...", "descricao": "...", "preco": "...", "url_imagem": "...", "quantidade_em_stock": "..." }` |
| **DELETE** | `/api/products/:id` | Deleta um produto pelo ID. | Id  |  |
