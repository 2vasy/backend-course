
# Node.js Server with MongoDB

This project demonstrates the creation of a basic REST API (GRUD) using Node.js, Express, and MongoDB. 
It includes functionalities for creating, reading, updating, and deleting blog posts, with proper error handling, environment variable configuration, and integration with MongoDB.

## ⚡ Getting Started

Follow these steps to get your project up and running:

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/project-name.git
```

### 2. **Navigate to the project directory and install dependencies**

```bash
cd project-name
npm install
```

### 3. **Configure environment variables**

Create a `.env` file in the root of your project directory and set up the necessary environment variables. For example:

```
DB_URL=mongodb://localhost:27017/yourdb
PORT=5000
```

If you're using **MongoDB Atlas**, use the connection string provided by the service.

### 4. **Start the development server**

To start the development server, use the following command:

```bash
npm run dev
```

Your server should now be running at (Server startet on Port 5000).

### 5. **Test the API Endpoints**

Use **Postman** or **curl** to test the available API endpoints:

- **POST /api/posts** — Create a new post
- **GET /api/posts** — Get all posts
- **GET /api/posts/:id** — Get a post by ID
- **PUT /api/posts/:id** — Update a post by ID
- **DELETE /api/posts/:id** — Delete a post by ID


### 📢 **Summary**

This project demonstrates the creation of a basic REST API using Node.js, Express, and MongoDB. It includes functionalities for creating, reading, updating, and deleting blog posts, with proper error handling, environment variable configuration, and integration with MongoDB. 

To get started, simply follow the setup instructions and enjoy building on this foundation!

