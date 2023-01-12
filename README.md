# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

#### O projeto é uma API para integrar o front end da aplicação Front-End em react MotorShop, a api no momento dispões de rotas para criar um anuncio, listar todos os anuncios de ambos os tipos, listar anuncios com base no id de usuario, atualizar e deletar os mesmos, no futuro a aplicação tera a criação de usuarios e manipulação de dados dos mesmos, e sera implementa um sistema de mensagens para os anuncios.

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)

---



## 2. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---


## 3. Endpoints

### https://www.notion.so/Documenta-o-Motors-Shop-API-fe032ca2d5914a2cb7da1ef6506e09aa



## [ Voltar para o topo ](#tabela-de-conteúdos)

