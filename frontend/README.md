# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Task 36 - Authentication with JWT
Problem Statement

Implement JWT authentication in an Express.js application and create a React frontend for user registration, login, and accessing a protected route.

Features
Backend
User registration with name, email, and password
User login
JWT token generation
JWT authentication middleware
Protected route
MVC + Service structure
Frontend
Registration form
Login form
Store JWT in localStorage
Access protected route
Display protected response
Technologies
Backend
Node.js
Express.js
JWT
Nodemon
Frontend
React
Vite
JavaScript
CSS
Project Structure
Backend
backend/
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── models/
│   │   └── user.model.js
│   ├── services/
│   │   └── auth.service.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   └── routes/
│       └── auth.routes.js
├── .env
├── server.js
└── package.json
Frontend
frontend/
└── src/
    ├── Components/
    │   ├── App.css
    │   ├── Login.jsx
    │   └── Register.jsx
    ├── App.jsx
    └── main.jsx
User Schema
name
email
password
API Routes
POST /register
POST /login
GET  /protected

Login returns a JWT token, which is stored in localStorage and sent with the protected request.

Backend Setup
cd /Task36/backend
npm install
npm run dev

Backend:

http://localhost:4000
Frontend Setup

Open another terminal:

cd Task36/frontend
npm install
npm run dev

Frontend:

http://localhost:5173
Authentication Flow
Register
   ↓
Login
   ↓
JWT Token
   ↓
localStorage
   ↓
Protected Route
   ↓
JWT Middleware
   ↓
Success Response
Task Requirements

User registration

User login

Name, email, password

JWT generation

JWT middleware

Protected route

Store JWT in localStorage

React frontend