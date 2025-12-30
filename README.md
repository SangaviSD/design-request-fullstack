# MCQ Full Stack Application

A full-stack web application built using **React (Vite)** for the frontend and **Django REST Framework** for the backend.

This project demonstrates a clean **client–server architecture**, REST APIs, and modern frontend practices.

---

## 🧱 Project Structure


---

## ⚙️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router DOM
- CSS (ERP-style responsive UI)

### Backend
- Django
- Django REST Framework
- SQLite (for development)

---

## 🚀 Features

- Create and view design/MCQ-related requests
- REST API integration
- Responsive ERP-style UI
- Clean separation of frontend and backend
- Ready for deployment (Netlify + Render)

---

## ▶️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/SangaviSD/design-request-fullstack.git
cd MCQ


-----Backend setup ----

cd server/backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

http://127.0.0.1:8000/


-----Frontend Setup (React Vite)-------

cd client/frontend
npm install
npm run dev

http://localhost:5173/


API Endpoints

GET:
/api/design-requests/
https://mcq-django-backend.onrender.com/api/design-requests/  for render...

POST:
/api/design-requests/
