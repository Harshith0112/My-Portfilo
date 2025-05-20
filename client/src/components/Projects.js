import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import LayersIcon from '@mui/icons-material/Layers';
import CodeIcon from '@mui/icons-material/Code';

const projects = [
  {
    title: 'Portfolio Management System',
    description: 'A Portfolio Management System helps investors track, analyze, and optimize their investments across various asset classes. It offers real-time insights, performance metrics, and smart tools for informed financial decision-making.',
    image: 'https://ik.imagekit.io/nishchal/portfolio/Screenshot%202025-04-16%20214418.png?updatedAt=1744820122048',
    category: 'MERN',
    type: 'Solo Project',
    technologies: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
    github: '#',
    linkedin: '#',
    demo: '#'
  },
  {
    title: 'CheckIt',
    description: 'This Task Management System is built using the MERN stack and helps users manage their daily tasks efficiently with features like adding, updating, deleting, and categorizing tasks. It also includes an AI Voice Assistant that allows users to control the app using voice commands such as creating or completing tasks. The system offers a seamless and interactive user experience through real-time updates and a responsive interface.',
    image: 'https://ik.imagekit.io/nishchal/portfolio/images%20(2).jpeg?updatedAt=1744307194887',
    category: 'MERN',
    type: 'Solo Project',
    technologies: ['Next.js', 'React.js', 'Node.js', 'Redis', 'API'],
    github: '#',
    linkedin: '#',
    demo: '#'
  },
  {
    title: 'Cloud Based E-Learning Platform',
    description: 'Our cloud-based e-learning platform enables anytime, anywhere access to courses and learning materials through a secure and scalable system. It supports video lessons, interactive content, assessments, and real-time progress tracking. Designed for students, educators, and administrators, it ensures a seamless and engaging digital learning experience.',
    image: 'https://ik.imagekit.io/nishchal/portfolio/download%20(3).jpeg?updatedAt=1744028827929',
    category: 'Cloud Computing',
    type: 'Team Project',
    technologies: ['AWS', 'React.js', 'Node.js' , 'HTML/CSS', 'JavaScript'],
    github: '#',
    linkedin: '#',
    demo: '#'
  },
  {
    title: 'Student Feedback and Management System',
    description: 'A feedback management platform for educational institutions using Spring Boot, MySQL, and React.',
    image: 'https://ik.imagekit.io/nishchal/portfolio/WhatsApp%20Image%202025-04-07%20at%2014.32.18_d78963a1.jpg?updatedAt=1744016585504',
    category: 'Java',
    type: 'Team Project',
    technologies: ['Java', 'SpringBoot', 'MySQL', 'React'],
    github: '#',
    linkedin: '#',
    demo: '#'
  },
  {
    title: 'Electricity Bill Generation System',
    description: 'An enterprise-grade billing system to automate electricity bill generation using EJB, MySQL, JSP, and Code Ready Studio.',
    image: 'https://ik.imagekit.io/nishchal/portfolio/images%20(1).jpeg?updatedAt=1744016331302',
    category: 'Enterprise',
    type: 'Team Project',
    technologies: ['Java EE', 'EJB', 'MySQL', 'JSP', 'Code Ready Studio'],
    github: '#',
    linkedin: '#',
    demo: '#'
  },
  {
    title: 'Student Counseling and Management System',
    description: 'A web-based platform to facilitate student counseling and academic tracking using MongoDB, Node.js, React, and Express.',
    image: 'https://ik.imagekit.io/nishchal/portfolio/download%20(1).jpeg?updatedAt=1744015504968',
    category: 'MERN',
    type: 'Team Project',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: '#',
    linkedin: '#',
    demo: '#'
  },
  {
    title: 'Banking and Finance Management System',
    description: 'A secure and scalable web application for managing banking and financial transactions using Django and PostgreSQL.',
    image: 'https://ik.imagekit.io/nishchal/portfolio/1706887784053.jpeg?updatedAt=1744013300898',
    category: 'Python',
    type: 'Team Project',
    technologies: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
    github: '#',
    linkedin: '#',
    demo: '#'
  }
];

const categories = [
  { name: 'All Projects', icon: <LayersIcon /> },
  { name: 'Cloud Computing', icon: <CodeIcon /> },
  { name: 'Enterprise', icon: <CodeIcon /> },
  { name: 'Java', icon: <CodeIcon /> },
  { name: 'MERN', icon: <CodeIcon /> },
  { name: 'Python', icon: <CodeIcon /> }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            gutterBottom 
            align="center"
            sx={{ 
              color: theme => theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
              mb: 5,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            My Projects
          </Typography>

          <Box sx={{ 
            maxWidth: '4xl', 
            mx: 'auto',
            mb: 5,
            px: { xs: 1, sm: 2 }
          }}>
            <Paper 
              elevation={0}
              sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              {categories.map((category) => (
                <Button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  startIcon={category.icon}
                  sx={{
                    py: 1.5,
                    px: { xs: 1.5, sm: 3 },
                    borderRadius: 0,
                    color: theme => activeCategory === category.name 
                      ? 'white' 
                      : theme.palette.mode === 'dark' 
                        ? 'text.secondary' 
                        : '#666',
                    bgcolor: theme => activeCategory === category.name 
                      ? theme.palette.mode === 'dark' 
                        ? 'black' 
                        : '#006064'
                      : 'transparent',
                    '&:hover': {
                      bgcolor: theme => activeCategory === category.name 
                        ? theme.palette.mode === 'dark' 
                          ? 'black' 
                          : '#006064'
                        : theme.palette.mode === 'dark' 
                          ? 'action.hover' 
                          : 'rgba(0, 96, 100, 0.1)',
                    },
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    fontWeight: 500,
                    textTransform: 'none',
                    flex: { xs: '1 1 auto', sm: '0 1 auto' },
                    border: theme => theme.palette.mode === 'light' && activeCategory !== category.name 
                      ? '1px solid rgba(0, 96, 100, 0.2)' 
                      : 'none',
                    '& .MuiSvgIcon-root': {
                      fontSize: { xs: '1rem', sm: '1.25rem' },
                      color: theme => activeCategory === category.name 
                        ? 'white' 
                        : theme.palette.mode === 'dark' 
                          ? 'text.secondary' 
                          : '#666',
                    }
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </Paper>
          </Box>

          <Grid container spacing={{ xs: 2, md: 4 }} sx={{ maxWidth: '6xl', mx: 'auto', mt: 2.5, px: { xs: 1, sm: 2 } }}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: { xs: 160, sm: 192 } }}>
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to bottom right, rgba(0, 229, 160, 0.2), transparent, rgba(0, 229, 160, 0.2))',
                          zIndex: 1,
                        }}
                      />
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Box sx={{ mb: 1.5 }}>
                        <Typography variant="h5" sx={{ 
                          fontWeight: 600, 
                          mb: 1,
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          color: theme => theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a'
                        }}>
                          {project.title}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          <Typography variant="subtitle1" sx={{ 
                            fontWeight: 500,
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            color: theme => theme.palette.mode === 'dark' ? 'primary.main' : '#006064'
                          }}>
                            {project.category} Stack Web Development
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Typography variant="caption" sx={{ 
                              color: theme => theme.palette.mode === 'dark' ? 'text.secondary' : '#666'
                            }}>
                              {project.type}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Typography 
                        variant="body2" 
                        sx={{ 
                          mb: 2,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          whiteSpace: 'pre-line',
                          color: theme => theme.palette.mode === 'dark' ? 'text.secondary' : '#666'
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1,
                        mb: 3
                      }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              borderRadius: '9999px',
                              border: '1px solid',
                              borderColor: 'divider',
                              bgcolor: 'background.paper',
                              '& .MuiChip-label': {
                                px: 2,
                                py: 0.5,
                                fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                fontWeight: 600,
                              },
                            }}
                          />
                        ))}
                      </Box>

                      <Box sx={{ 
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: { xs: 'center', sm: 'space-between' },
                        alignItems: 'center'
                      }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          sx={{
                            flex: { xs: 1, sm: 'none' },
                            minWidth: { xs: '100%', sm: 80 },
                            height: 36,
                            borderRadius: 1,
                            textTransform: 'none',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            fontWeight: 500,
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<LinkedInIcon />}
                          href={project.linkedin}
                          target="_blank"
                          sx={{
                            flex: { xs: 1, sm: 'none' },
                            minWidth: { xs: '100%', sm: 80 },
                            height: 36,
                            borderRadius: 1,
                            textTransform: 'none',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            fontWeight: 500,
                            color: '#0077b5',
                            borderColor: 'rgba(0, 119, 181, 0.2)',
                            bgcolor: 'rgba(0, 119, 181, 0.05)',
                            '&:hover': {
                              bgcolor: 'rgba(0, 119, 181, 0.1)',
                              borderColor: 'rgba(0, 119, 181, 0.3)',
                            },
                          }}
                        >
                          LinkedIn
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.demo}
                          target="_blank"
                          sx={{
                            flex: { xs: 1, sm: 'none' },
                            minWidth: { xs: '100%', sm: 80 },
                            height: 36,
                            borderRadius: 1,
                            textTransform: 'none',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            fontWeight: 500,
                            background: 'linear-gradient(to right, #00e5a0, #00e5a0)',
                            '&:hover': {
                              background: 'linear-gradient(to right, rgba(0, 229, 160, 0.9), rgba(0, 229, 160, 0.9))',
                            },
                          }}
                        >
                          Demo
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 