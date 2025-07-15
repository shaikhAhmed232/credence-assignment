# 📚 Movie CRUD API

A simple **CRUD API** built with **Node.js, Express, MongoDB, and Mongoose** to manage a collection of movies.

---

## 🚀 Features

- Create a new movie
- Retrieve paginated movies
- Retrieve a movies by ID
- Update a movie by ID
- Delete a movie by ID
- Input validations using `express-validator`
- Clean project structure with controllers, models, and routes

---

## 🛠️ Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose (ODM)
- express-validator (Validation)
- Faker (Optional for seeding dummy data)

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/shaikhAhmed232/credence-assignment.git
cd credence-assignment
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables (Optional)

Create a `.env` file if needed:

```base
MONGO_URI=mongodb://localhost:27017/credence-assignment
```

### 4️⃣ Run the Application

```bash
npm start
```

---

## 📬 API Endpoints

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| POST   | `/api/movies`     | Create a movie  |
| GET    | `/api/movies`     | Get all movies  |
| GET    | `/api/movies/:id` | Get movie by ID |
| PUT    | `/api/movies/:id` | Update movie    |
| DELETE | `/api/movies/:id` | Delete movie    |

---

## 🔍 Sample Request (POST /api/movies)

```
{
    "name": "Harry Potter and the Order of the Phoenix",
    "img": "https://bit.ly/2IcnSwz",
    "summary": "Harry Potter and Dumbledore's warning about the return of Lord Voldemort..."
}
```

## 🛑 Validation Rules

| Field     | Required | Rule                          |
| --------- | -------- | ----------------------------- |
| `name`    | Yes      | Max 255 characters            |
| `img`     | No       | Must be valid URL if provided |
| `summary` | Yes      | Max 1000 characters           |

## ✨ License

This project is open-source and free to use.

## 👨‍💻 Author

Ahmed Shaikh
