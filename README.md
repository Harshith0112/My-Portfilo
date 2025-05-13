# Modern Personal Portfolio

A modern, professional, and clean personal portfolio website built with the MERN stack. This portfolio is designed for individuals entering the industry or pivoting careers, focusing on skills, interests, personal branding, and certifications.

## Features

- Modern and responsive design
- Dark/Light mode toggle
- Smooth scrolling and animations
- Interactive sections for:
  - Hero section with personal introduction
  - About section
  - Skills showcase
  - Certifications display
  - Project portfolio
  - Contact form
- Social media integration
- Downloadable resume
- SEO optimized

## Tech Stack

- **Frontend:**
  - React.js
  - Material-UI
  - Framer Motion
  - React Router
  - React Scroll

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Nodemailer

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

## Running the Application

1. Start the backend server:
```bash
npm run server
```

2. In a new terminal, start the frontend development server:
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`.

## Building for Production

1. Build the frontend:
```bash
cd client
npm run build
```

2. Start the production server:
```bash
npm start
```

## Customization

1. Update personal information in the respective components
2. Replace placeholder images in the `public` directory
3. Update social media links and contact information
4. Add your own projects and certifications
5. Customize the color scheme in `client/src/theme.js`

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the component library
- Framer Motion for animations
- React community for the amazing ecosystem 