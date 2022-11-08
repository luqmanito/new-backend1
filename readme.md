# Haya-Coffee Backend Description

<<<<<<< HEAD
Haya-Coffee is a simple service website, for food and beverage, user can simply register, login
=======
Haya-Coffee is a simple service website, for food and beverage, user can simply register, login.

>>>>>>> 164572219d63d6b21647cfeb30dd337a9259a97d
[![dotenv](https://img.shields.io/badge/dotenv-16.0.3-blue)](https://www.npmjs.com/package/dotenv)
[![express](https://img.shields.io/badge/express-4.18.1-blue)](https://www.npmjs.com/package/express)
[![bcrypt](https://img.shields.io/badge/bcrypt-5.0.1-blue)](https://www.npmjs.com/package/bcrypt)
[![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-8.5.1-blue)](https://www.npmjs.com/package/jsonwebtoken)
[![multer](https://img.shields.io/badge/multer-1.4.4-blue)](https://www.npmjs.com/package/multer)
[![morgan](https://img.shields.io/badge/morgan-1.10.0-blue)](https://www.npmjs.com/package/morganr)
[![postgreSQL](https://img.shields.io/badge/pg-8.8.0-blue)](https://www.npmjs.com/package/morganr)

# How to Install ?

## 1. Clone this repository

Clone this repository by run the following code:

```
$ git clone https://github.com/luqmanito/Project-1-Restful-API-Mockup-Haya-Coffee.git
```

## 2. Go to directory

```
$ cd Haya-Coffee
```

## 3. Install dependency packages

Install dependency packages by run the following code inside project folder:

```
$ npm i
```
## 4. Set up .env
```
- local_port= "your local port"
- secret_key=  "your secret key"
- issuer= "your issuer"
```

<<<<<<< HEAD
## 5. Start
=======
## 4. Set up .env
>>>>>>> 164572219d63d6b21647cfeb30dd337a9259a97d
```
npm run dev
```


## Application Navigation

- `index.js` - The entry point to our application. This file defines our express server and connects it to posgreSQL
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `repo/` - This folder contains the schema definitions for our sql models.
- `controller/` - This folder contains the schema definitions for unctions that separate out the code to route requests from the code that actually processes requests.
- `middleware/` - This folder contains the schema definitions for middleware.
- `public/` - This folder contains uploaded data to our API

## Documentation Postman

[Documentation Postman](https://goo.by/CY4Dr)

## Features

- Auth
  - login
- Product
  - CRUD Product
- Users
  - CRUD User with Register
- Transactions
  - CRUD transaction
- Promos
  - CRUD Promos


## Authors

- [@luqmanito](https://github.com/luqmanito)
