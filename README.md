# Personal Portfolio Website

A modern, responsive portfolio website built with React and Node.js, featuring a beautiful UI and contact form functionality.

## 🌟 Features

- *Modern UI/UX Design*

  - Responsive layout
  - Smooth animations
  - Dark/Light theme support
  - Interactive components

- *Sections*

  - Hero section with animated background
  - About Me
  - Skills with visualizations
  - Projects showcase
  - Education timeline
  - Certifications
  - Contact form

- *Technical Features*
  - React.js frontend
  - Node.js backend
  - Material-UI components
  - Framer Motion animations
  - Email functionality
  - Responsive design
  - Modern styling with CSS

## 🚀 Tech Stack

### Frontend

- React.js
- Material-UI
- Framer Motion
- CSS3
- JavaScript (ES6+)

### Backend

- Node.js
- Express.js
- Nodemailer
- CORS

## 📦 Installation

1. *Clone the repository*

   bash
   git clone [<your-repository-url>](https://github.com/Harshith0112/My-Portfilo)
   cd portfolio
   

2. *Install frontend dependencies*

   bash
   cd client
   npm install
   

3. *Install backend dependencies*

   bash
   cd ../server
   npm install
   

4. *Environment Setup*

   Frontend (.env in client directory):

   
   REACT_APP_API_URL=http://localhost:5000
   

   Backend (.env in server directory):

   
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   

## 🏃‍♂ Running Locally

1. *Start the backend server*

   bash
   cd server
   node server
   

2. *Start the frontend development server*

   bash
   cd client
   npm start
   

3. *Access the application*
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 🚀 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy

### Backend (Render)

1. Create a Render account
2. Create a new Web Service
3. Connect your GitHub repository
4. Set environment variables
5. Deploy

## 📧 Contact Form Setup

1. *Gmail Setup*

   - Enable 2-Step Verification in your Google Account
   - Generate an App Password
   - Use the App Password in your backend environment variables

2. *Environment Variables*
   - Set EMAIL_USER to your Gmail address
   - Set EMAIL_PASS to your Gmail App Password

## 🛠 Project Structure


portfolio/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── assets/         # Images and other assets
│       └── App.js         # Main application component
│
└── server/                # Backend Node.js application
    ├── controllers/       # Route controllers
    ├── routes/           # API routes
    └── server.js         # Main server file


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

DINDUKURTHI HARSHITH

- GitHub: [@Harshith0112](https://github.com/Harshith0112)

## 🙏 Acknowledgments

- Material-UI for the component library
- Framer Motion for animations
- React.js community for the amazing framework
