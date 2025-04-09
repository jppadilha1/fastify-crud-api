# Simple CRUD Project - Products API

This is a simple CRUD application for managing products. It supports the four basic HTTP operations: Create, Read, Update, and Delete, via a `/products` endpoint.

## Features

- **Create**: Add a new product to the database.  
- **Read**: Retrieve a list of products or a specific product by ID.  
- **Update**: Modify an existing product.  
- **Delete**: Remove a product from the database.

## Environment Variables

Before running the project, create a `.env` file in the root directory with the following content:

```env
POSTGRES_LOCALHOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=local_user
POSTGRES_DB=local_db
POSTGRES_PASSWORD=local_password
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_LOCALHOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"
```
## Getting Started

1. **Fork the repository** and clone it to your local machine.  
2. **Install dependencies**:  
   Run the following command in the project directory:
   ```bash
   npm install
3. **Start the server**:
   Run the following command in the project directory:
   ```bash
   npm run start
Your local server will be running at `http://localhost:3333`

Tip: Install "REST Client" extension in VSCODE and use `routes.http` file to test the endpoints easily.
