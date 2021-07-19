# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Run Server

yarn start


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seeders

Run the following command to run startup seeders.

```js
adonis seed --files='ProfessionalTypeSeeder.js, ProfessionalSeeder.js'
```

### Test (Functional)

Run the following command to run startup tests.

```js
adonis test functional
```
