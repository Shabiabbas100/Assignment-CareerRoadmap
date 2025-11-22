# 🚀 Career Skill Gap Analyzer & Roadmap Generator

A full-stack application designed to analyze a user's current skills against a target job role, identify skill gaps, and generate a personalized learning roadmap. It also features a live tech news feed powered by the HackerNews API.

---

## 🔗 Live Demo
- **(Live App):** https://career-roadmap-nine.vercel.app/ 

---

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite):** For fast and optimized UI development.
- **Tailwind CSS:** For responsive and modern styling.
- **Axios:** For handling API requests.
- **Lucide React:** For icons.

### Backend
- **Node.js & Express.js:** RESTful API architecture.
- **MVC Pattern:** Clean code structure (Controllers, Services, Routes).
- **Cors & Helmet:** For security and cross-origin resource sharing.

---

## ✨ Features
1.  **Skill Gap Analysis:** Compares user skills with industry standards for roles like Frontend Developer, Backend Developer, and Data Analyst.
2.  **Career Roadmap:** Generates a phase-wise learning path (Mock AI Logic).
3.  **Tech News Feed:** Fetches top 5 real-time tech stories using the **HackerNews Public API**.
4.  **Clean UI:** Responsive design with a professional dashboard layout.

---

## 📂 Folder Structure (Professional MVC)
The project follows a scalable directory structure:

```bash
career-assignment/
├── backend/
│   ├── src/
│   │   ├── config/       # Environment variables
│   │   ├── controllers/  # Request handlers
│   │   ├── services/     # Business logic
│   │   ├── routes/       # API endpoints
│   │   └── utils/        # Helper functions & Mock Data
│   └── server.js         # Entry point
│
└── frontend/
    ├── src/
    │   ├── components/   # Reusable UI components
    │   ├── pages/        # Main application pages
    │   └── api.js        # Centralized API calls
```
## 🚀 How to Run This Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shabiabbas100/Assignment-CareerRoadmap
cd Assignment-CareerRoadmap
```
### 1️⃣ Backend Setup
```bash
cd backend
npm install
Start Server:
npm run start
# Server should run on http://localhost:5000
```
### 1️⃣ Frontend Setup
```bash
cd ../frontend
npm install          # Install dependencies
Configuration: Create a .env file in the frontend folder and add:
VITE_API_URL=http://localhost:5000/api
npm run dev          # Start the frontend (usually on http://localhost:5000)
```
