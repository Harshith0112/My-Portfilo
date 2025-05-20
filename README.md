# 💼 Personal Portfolio Website

A modern, responsive developer portfolio built with **React** and **Node.js**, featuring a sleek UI, animated elements, and a functional contact form.

---

## 🌟 Features

### 🎨 UI/UX Design

* Responsive layout (mobile & desktop)
* Smooth animations with Framer Motion
* Dark/Light mode toggle
* Interactive, modular components

### 📚 Sections

* Hero section with animated background
* About Me
* Skills with visual progress indicators
* Projects Showcase
* Education Timeline
* Certifications
* Contact Form with email functionality

### 🔧 Technical Highlights

* React.js frontend
* Node.js backend with Express
* Material-UI for design
* Framer Motion for animations
* Email integration via Nodemailer
* Fully responsive design

---

## 🚀 Tech Stack

### Frontend

* React.js
* Material-UI
* Framer Motion
* JavaScript (ES6+)
* CSS3

### Backend

* Node.js
* Express.js
* Nodemailer
* CORS

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Harshith0112/My-Portfilo.git
cd portfolio
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

### 4. Environment Variables

**Frontend** (`client/.env`)

```env
REACT_APP_API_URL=http://localhost:5000
```

**Backend** (`server/.env`)

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---

## 🏃‍♂️ Run the App Locally

### 1. Start Backend Server

```bash
cd server
node server
```

### 2. Start Frontend Dev Server

```bash
cd client
npm start
```

### 3. Open in Browser

* Frontend: `http://localhost:3000`
* Backend: `http://localhost:5000`

---

## 🚀 Deployment Guide

### 🌐 Frontend (Vercel)

1. Push your project to GitHub
2. Link repo on [Vercel](https://vercel.com/)
3. Configure build & deploy settings
4. Deploy and go live

### 💥 Backend (Render)

1. Sign up at [Render](https://render.com/)
2. Create a new Web Service
3. Connect your GitHub repo
4. Set environment variables
5. Deploy

---

## 📧 Contact Form Setup

### 1. Gmail Setup

* Enable 2-Step Verification on your Gmail
* Generate an App Password
* Use the app password in the backend `.env`

### 2. Backend `.env` Example

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

---

## 🗂 Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── assets/         # Images and icons
│       ├── components/     # Reusable React components
│       └── App.js          # Main React app file
│
└── server/                 # Backend Node.js application
    ├── controllers/        # Route logic and email handling
    ├── routes/             # API endpoints
    └── server.js           # Express server entry point
```

---

## 🤝 Contributing

1. Fork this repository
2. Create a new branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request



---

## 👤 Author

**DINDUKURTHI HARSHITH**

* GitHub: [@Harshith0112](https://github.com/Harshith0112)

---

## 🙏 Acknowledgments

* [Material-UI](https://mui.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [React.js](https://reactjs.org/)
* The awesome open-source community 💖
