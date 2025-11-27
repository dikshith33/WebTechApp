Quiz Application — React.js | Spring Boot | MySQL

An interactive full-stack Quiz Application built with a responsive frontend using React.js and Material-UI, and a robust backend powered by Spring Boot with MySQL as the data store.

🚀 Features

Responsive quiz UI built with React.js + Material-UI

Secure backend with Spring Boot REST APIs

Quiz creation, question management & scoring

Real-time UI updates during quiz attempts

MySQL-backed relational data models

Easy local setup for both frontend and backend

🛠️ Tech Stack

Frontend: React.js, Material-UI
Backend: Spring Boot
Database: MySQL
Build Tools: npm, Maven
IDE Support: VS Code, STS 4, IntelliJ, Eclipse

📦 Project Setup
1️⃣ Frontend Setup (React.js)
# Create and start React project
npx create-react-app ./

# Fix dependency issues
npm config set legacy-peer-deps true

# Install UI libraries
npm install @material-ui/core @material-ui/icons
npm install @mui/material @emotion/react @emotion/styled


Run the app

npm install
npm start


Frontend runs on:
👉 http://localhost:3000

2️⃣ Backend Setup (Spring Boot)

Import the backend folder into STS 4, IntelliJ, or your preferred IDE

Configure MySQL credentials in application.properties

Run the Spring Boot application

Backend default port:
👉 http://localhost:8080

🎯 How to Run the Full Application

Clone the repository

Open the frontend folder → run:

npm install
npm start


Open the backend folder → run the Spring Boot app

Access the app at:
👉 http://localhost:3000

You may change frontend/back­end ports as required.

👨‍💻 Developer Notes

Fully customizable quiz structure

Modular code for adding more question types

CORS enabled for frontend-backend communication

Clean folder structure for easy contribution
