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

A URL base da aplicação:
http://suaapi.com/v1

---

## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)


Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](DER_SP7_01.drawio.png)

---

## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---
## 4. Autenticação
[ Voltar para o topo ](#tabela-de-conteúdos)


Por enquanto, não foi implementada autenticação.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Adverts](#1-adverts)
    - [POST - /adverts](#11-criação-de-advert)
    - [GET - /adverts](#12-listando-adverts)
	- [GET - /adverts/:userId](#13-listar-anuncios-por-id-de-usuario)
  - [PATCH - /adverts/:id](#14-editar-um-advert)
  - [DELETE - /adverts/:id](#15-deletar-um-advert)
  
---

## 1. **Adverts**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Adverts é definido como:

| Campo      | Tipo   | Descrição                                                    |
| -----------|--------|--------------------------------------------------------------|
| id (uuid)     | string  | Identificador único do anuncio.                          |
| advertsType   | string  | O tipo do anuncio.                                       |
| title         | string  | O titulo do anuncio.                                     |
| year          | string  | Ano do carro sendo anunciado.                            |
| mileage       | string  | Milhagen do carro sendo anunciado.                       |
| price         | string  | Preço do carro sendo anunciado.                          |
| description   | string  | Descrição do carro que está sendo anunciado.             |
| vehicleType   | string  | Tipo de veiculo que está sendo anunciado.                |
| coveImage     | string  | url da imagem principal do carro sendo anunciado.        |
| galleryImages | string[]| array com outros url de imagens sobre o carro anunciado. |
| userId        | string  | Identificador único do usuário criador do anuncio.       |

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /adverts   | Criação de um anuncio.                  |
| GET      | /adverts   | Lista todos os anuncios                 |
| GET      | /adverts/:userId     | Lista um usuário usando seu ID como parâmetro |
| PATCH    | /adverts/:id | Atualização de um anuncio|
| DELETE   | /adverts/:id| Deletar um Anuncio do banco de dados|

---

### 1.1. **Criação de Advert**

[ Voltar para os Endpoints ](#5-endpoints)

### `/adverts`

### Exemplo de Request:
```
POST /adverts
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"advertsType":"common",
  "title":"Titulo de exemplo",
  "year":"1992","mileage":"3000",
	"price":"7000",
	"description":"carrinho de exemplo",
	"vehicleType":"car",
	"coverImage":"http://imagenfake.com.br",
	"galleryImages":["http://imagenfake1.com.br","http://imagenfake2.com.br","http://imagenfake3.com.br"],
	"userId":"1"
}
```

### Schema de Validação com Yup:
```javascript
 advertsType: yup.string().oneOf(AdvertsTypes).required(),
  title: yup.string().required(),
  year: yup.string().required(),
  mileage: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  vehicleType: yup.string().oneOf(VehicleTypes).required(),
  coverImage: yup.string().required(),
  galleryImages: yup.array().of(yup.string()).required(),
  userId: yup.string().required(),
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"advertsType": "common",
	"title": "Titulo de exemplo",
	"year": "1992",
	"mileage": "3000",
	"price": 7000,
	"description": "carrinho de exemplo",
	"vehicleType": "car",
	"coverImage": "http://imagenfake.com.br",
	"galleryImages": [
		"http://imagenfake1.com.br",
		"http://imagenfake2.com.br",
		"http://imagenfake3.com.br"
	],
	"userId": "1",
	"id": "b169c53f-7dfd-4798-a598-5544a17185dc",
	"isActive": true,
	"isPublished": true
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 BAD REQUEST   | advertsType is not Valid|

---

### 1.2. **Listando Adverts**

[ Voltar aos Endpoints ](#5-endpoints)

### `/adverts`

### Exemplo de Request:
```
GET /adverts
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"common": [
		{
			"id": "b169c53f-7dfd-4798-a598-5544a17185dc",
			"advertsType": "common",
			"title": "Titulo de teste yay",
			"year": "1992",
			"mileage": "3000",
			"price": "7000.00",
			"description": "carrinho de teste muito divertido yay",
			"vehicleType": "car",
			"coverImage": "http://imagenfake.com.br",
			"galleryImages": [
				"http://imagenfake.com.br",
				"http://imagenfake.com.br",
				"http://imagenfake.com.br",
				"http://imagenfake.com.br"
			],
			"isActive": true,
			"isPublished": true,
			"userId": "1"
		}
	],
	"auction": []
}
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **Listar Anuncios por ID de Usuario**

[ Voltar aos Endpoints ](#5-endpoints)

### `/adverts/:userId`

### Exemplo de Request:
```
GET /users/1
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| userId      | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "cc8773c4-f6d9-4055-89a3-c26c074f61a8",
		"advertsType": "common",
		"title": "Titulo de teste yay",
		"year": "1992",
		"mileage": "3000",
		"price": "7000.00",
		"description": "carrinho de teste muito divertido yay",
		"vehicleType": "car",
		"coverImage": "http://imagenfake.com.br",
		"galleryImages": [
			"http://imagenfake.com.br",
			"http://imagenfake.com.br",
			"http://imagenfake.com.br",
			"http://imagenfake.com.br"
		],
		"isActive": true,
		"isPublished": true,
		"userId": "1"
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |

### 1.4. **Editar um Advert**

[ Voltar para os Endpoints ](#5-endpoints)

### `/adverts/:id`

### Exemplo de Request:
```
PATCH /adverts/:id
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id      | string      | Identificador único do Anuncio (Advert) | 

### Corpo da Requisição:
```json
{
	"advertsType":"common",
  "title":"Titulo de exemplo",
  "year":"1992","mileage":"3000",
	"price":"7000",
	"description":"carrinho de exemplo",
	"vehicleType":"car",
	"coverImage":"http://imagenfake.com.br",
	"galleryImages":["http://imagenfake1.com.br","http://imagenfake2.com.br","http://imagenfake3.com.br"],
}
```

### Schema de Validação com Yup:
```javascript
 advertsType: yup.string().oneOf(AdvertsTypes),
  title: yup.string(),
  year: yup.string(),
  mileage: yup.string(),
  price: yup.number(),
  description: yup.string(),
  vehicleType: yup.string().oneOf(VehicleTypes),
  coverImage: yup.string(),
  galleryImages: yup.array().of(yup.string())
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
200 Created
```

```json
{
	"advertsType": "common",
	"title": "Titulo de exemplo",
	"year": "1992",
	"mileage": "3000",
	"price": 7000,
	"description": "carrinho de exemplo",
	"vehicleType": "car",
	"coverImage": "http://imagenfake.com.br",
	"galleryImages": [
		"http://imagenfake1.com.br",
		"http://imagenfake2.com.br",
		"http://imagenfake3.com.br"
	],
	"userId": "1",
	"id": "b169c53f-7dfd-4798-a598-5544a17185dc",
	"isActive": true,
	"isPublished": true
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 BAD REQUEST   | advertsType is not Valid|

---
### 1.5. **Deletar um Advert**

[ Voltar para os Endpoints ](#5-endpoints)

### `/adverts/:id`

### Exemplo de Request:
```
DELETE /adverts/:id
Host: http://localhost:3001/
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id      | string      | Identificador único do Anuncio (advert)     |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```

```json
{
	"message":"Advert has been deleted"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 BAD REQUEST   | advertsType is not Valid|

---

