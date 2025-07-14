# 📒 Personal Notes & Bookmark Manager – Backend

A RESTful backend application built with **Node.js**, **Express**, and **MongoDB** to manage personal notes and bookmarks. It includes user authentication, filtering, tagging, and a bonus feature to auto-fetch titles from bookmark URLs.

---

## 🚀 Features

- ✅ User registration and login with JWT authentication
- ✅ Create, read, update, delete (CRUD) notes and bookmarks
- ✅ Tagging and searching functionality
- ✅ Auto-fetch metadata (title) for bookmark URLs
- ✅ Secure routes for authenticated users only
- ✅ Proper error handling and status codes
- ✅ Clean code and modular structure

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Other:** Axios, Cheerio (for metadata), dotenv

---

## 📁 Folder Structure

```
backend/
├── config/             # DB connection config
├── controllers/        # Route logic
├── middleware/         # JWT auth and error handling
├── models/             # Mongoose schemas
├── routes/             # Express API routes
├── utils/              # Metadata scraper for URLs
├── app.js              # Express app setup
├── server.js           # Entry point
├── .env.example        # Sample environment variables
├── package.json
└── README.md
```

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/notes-bookmarks-backend.git
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```bash
touch .env
```

Paste the following into `.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/notesdb
JWT_SECRET=your_jwt_secret
```

> ✅ Never commit your `.env` file — keep it secret!

---

### 4. Run the Server

```bash
npm run dev     # uses nodemon
# OR
npm start       # runs with node
```

The server will run on: `http://localhost:5000`

---

## 🔐 Authentication Endpoints

| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| POST   | /api/auth/register   | Register a new user |
| POST   | /api/auth/login      | Login user and get JWT token |

---

## 📝 Notes API (Protected)

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| POST   | /api/notes         | Create a new note         |
| GET    | /api/notes         | Get all notes             |
| GET    | /api/notes/:id     | Get note by ID            |
| PUT    | /api/notes/:id     | Update a note             |
| DELETE | /api/notes/:id     | Delete a note             |

---

## 🔖 Bookmarks API (Protected)

| Method | Endpoint               | Description                       |
|--------|------------------------|-----------------------------------|
| POST   | /api/bookmarks         | Create a new bookmark             |
| GET    | /api/bookmarks         | Get all bookmarks                 |
| GET    | /api/bookmarks/:id     | Get bookmark by ID                |
| PUT    | /api/bookmarks/:id     | Update a bookmark                 |
| DELETE | /api/bookmarks/:id     | Delete a bookmark                 |

---

## 🔍 Filtering & Search

Both `GET /api/notes` and `GET /api/bookmarks` support:

- `q`: search by text (in title/content/description)
- `tags`: filter by tags (comma-separated)

**Example:**
```
GET /api/bookmarks?q=docs&tags=web,nodejs
```

---

## 🧪 Example cURL Commands

### Register

```bash
curl -X POST http://localhost:5000/api/auth/register   -H "Content-Type: application/json"   -d '{"name":"Alice","email":"alice@example.com","password":"123456"}'
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login   -H "Content-Type: application/json"   -d '{"email":"alice@example.com","password":"123456"}'
```

### Create Note (with token)

```bash
curl -X POST http://localhost:5000/api/notes   -H "Authorization: Bearer YOUR_TOKEN"   -H "Content-Type: application/json"   -d '{"title":"Learn Express","content":"REST API basics","tags":["api","nodejs"]}'
```

---

## 🧪 Postman Collection

You can import the provided Postman collection file:

- File: `postman_collection_notes_bookmarks.json`
- Auto-handles authentication and tests

---

## 🧠 Bonus Features

- 🟢 Auto-fetch title when bookmark title is empty
- 🔐 Only authenticated users can access their own notes/bookmarks

---

## ✅ To Do (Frontend Side)

This backend can be paired with:
- A frontend in **Next.js + Tailwind CSS**
- Pages: `/notes`, `/bookmarks`
- Connect to this API via Axios or Fetch

---

## 🧑‍💻 Author

Built by Avvari venkatesh 
For assignment: *Personal Notes & Bookmark Manager (Backend Developer Role)*

---

## 📄 License

This project is licensed under the MIT License.
