# favs-api

# Assessment Backend

The objective of this assessment is to put into practice what you have learned in the program.\
The topics that will be covered are:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Testing](https://jestjs.io/)

You need **knowledge** of the topics mentioned above.

## **Installation**

```
npm install
```

## **Demo**

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
The main request url is [http://localhost:3030](http://localhost:3030)

### `npm test`

Runs the tests.

## **Endpoints**

| Route              | HTTP Verb | Route Middleware   | Description                              |
| ------------------ | --------- | ------------------ | ---------------------------------------- |
| /auth/local/signup | POST      | `authMiddleware()` | Register user by email/username/password |
| /auth/local/login  | POST      | `authMiddleware()` | Login user by email/password             |
| /api/favs          | GET       | `isAthenticated()` | Get all list of favorites                |
| /api/favs          | POST      | `isAthenticated()` | Creates a new list of favorites          |
| /api/favs/:id      | GET       | `isAthenticated()` | Get a single list of favorites           |
| /api/favs/:id      | POST      | `isAthenticated()` | Add new item to list of favorites        |
| /api/favs/:id      | DELETE    | `isAthenticated()` | Deletes a list of favorites              |
| /api/users         | GET       | `isAthenticated()` | Get all users                            |
| /api/users/:id     | GET       | `isAthenticated()` | Get a single user                        |

For **POST** requests, here some examples:

#### `/auth/local/register`

```
{
  "email": "codeka@mail.com,
  "name": "codeka",
  "password": "12345678"
}
```

#### `/auth/local/login`

```
{
  "email": "codeka@mail.com",
  "password": "123456"
}
```

Auth routes have a **token** as a response.

#### `/api/favs`

```
{
  "list_name": "Prueba lista",
  "favs": [
    {
      "title": "Favorite 1",
      "description": "Some Description 1",
      "link": "www.somelink1.com"
    },
    {
      "title": "Favorite 2",
      "description": "Some Description 2",
      "link": "www.somelink2.com"
    }
  ]
}
```

#### `/api/favs/:id`

```
{
  "title": "Favorite 3",
  "description": "Some Description 3",
  "link": "www.somelink3.com"
}
```

Dependencies:

- [express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [yup](https://www.npmjs.com/package/yup)
- [mongodb-memory-server-core](https://www.npmjs.com/package/mongodb-memory-server-core)

1. https:// PROTOCOLO
   backend.mega-app. DOMINIO
   com.co TLD
   :8080 PORT NUMBER
   /api/articles/search PATH
   ?docid=1020&hl=en PARAMETRO
   #dayone LOCACION ESPECIFICA DE LA PAGINA

2. Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-
   Web API is an Aplication Programming Interface for the Web.
   Restful receives HTTP Requests from clients and does whatever request needs.
   Status Code 200 is successful OK
   Status Code 400 is bad request
   Status Code 200 is internal server error

3. CRUD refers to the four functions (create, read, update and delete) that are considered necessary to implement a persistent storage application
