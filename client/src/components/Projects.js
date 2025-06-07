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
    title: 'Cloud Based E-Learning Platform',
    description: 'A scalable e-learning platform providing secure access to video lessons, interactive content, and progress tracking for students, educators, and administrators anytime.',
    image: 'https://ik.imagekit.io/dharshith/portfilo-img/cloud%20based%20e-learning%20platform.png?updatedAt=1747762237674',
    category: 'Cloud Computing',
    type: 'Solo Project',
    technologies: ['AWS', 'React.js', 'Node.js' , 'HTML/CSS', 'JavaScript'],
    github: '#',
    linkedin: 'https://www.linkedin.com/posts/dindukurthi-harshith_serverless-aws-edtech-activity-7317742378373496832-dp9Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZGJr0BFkcL_-IyQfQw6z1J1Ej4IuQ89Cs',
    demo: '#'
  },
 {
  title: 'Learning Management System',
  description: 'A comprehensive platform for managing student feedback and academic insights, built using Spring Boot, MySQL, and React.',
  image: 'https://ik.imagekit.io/dharshith/portfilo-img/learning%20management%20system.png?updatedAt=1747762237247',
  category: 'Java',
  type: 'Team Project',
  technologies: ['Java', 'SpringBoot', 'MySQL', 'React'],
  github: '#',
  linkedin: 'https://www.linkedin.com/posts/neerudu-pavan-kumar-64b201286_excited-to-share-our-latest-java-full-activity-7247185212269289472-GW2i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZGJr0BFkcL_-IyQfQw6z1J1Ej4IuQ89Cs',
  demo: '#'
},
{
  title: 'Document Approval System',
  description: 'An enterprise application to streamline electricity bill generation and approval workflows using EJB, JSP, and MySQL.',
  image: 'https://ik.imagekit.io/dharshith/portfilo-img/document%20approval%20system.png?updatedAt=1747762237481',
  category: 'Enterprise',
  type: 'Team Project',
  technologies: ['Java EE', 'EJB', 'MySQL', 'JSP', 'Code Ready Studio'],
  github: '#',
  linkedin: '#',
  demo: '#'
},
{
  title: 'Library Management System',
  description: 'A MERN-based web application for student counseling, academic tracking, and digital library resource management.',
  image: 'https://ik.imagekit.io/dharshith/portfilo-img/libray%20management%20system.png?updatedAt=1747762237678',
  category: 'MERN',
  type: 'Team Project',
  technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  github: '#',
  linkedin: 'https://www.linkedin.com/posts/dindukurthi-harshith_library-managment-system-activity-7102374256147087360-K1Ym?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZGJr0BFkcL_-IyQfQw6z1J1Ej4IuQ89Cs',
  demo: '#'
},
{
  title: 'Bus Booking System',
  description: 'A secure and scalable bus reservation platform with real-time seat tracking and booking management using Django and PostgreSQL.',
  image: 'https://ik.imagekit.io/dharshith/portfilo-img/bus%20booking%20system.png?updatedAt=1747762237211',
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
  { name: 'Python', icon: <CodeIcon /> },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
              mb: 5,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            My Projects
          </Typography>

          {/* Category Filters */}
          <Box
            sx={{
              maxWidth: '4xl',
              mx: 'auto',
              mb: 5,
              px: { xs: 1, sm: 2 },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
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
                    color: (theme) =>
                      activeCategory === category.name
                        ? 'white'
                        : theme.palette.mode === 'dark'
                        ? 'text.secondary'
                        : '#666',
                    bgcolor: (theme) =>
                      activeCategory === category.name
                        ? theme.palette.mode === 'dark'
                          ? 'black'
                          : '#006064'
                        : 'transparent',
                    '&:hover': {
                      bgcolor: (theme) =>
                        activeCategory === category.name
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
                    border: (theme) =>
                      theme.palette.mode === 'light' &&
                      activeCategory !== category.name
                        ? '1px solid rgba(0, 96, 100, 0.2)'
                        : 'none',
                    '& .MuiSvgIcon-root': {
                      fontSize: { xs: '1rem', sm: '1.25rem' },
                      color: (theme) =>
                        activeCategory === category.name
                          ? 'white'
                          : theme.palette.mode === 'dark'
                          ? 'text.secondary'
                          : '#666',
                    },
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </Paper>
          </Box>

          {/* Projects Grid */}
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            sx={{
              maxWidth: '6xl',
              mx: 'auto',
              mt: 2.5,
              px: { xs: 1, sm: 2 },
            }}
          >
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
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: 1536,
                        height: 'auto',
                        maxHeight: 1024,
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to bottom right, rgba(0, 229, 160, 0.2), transparent, rgba(0, 229, 160, 0.2))',
                          zIndex: 1,
                        }}
                      />
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          color: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'text.primary'
                              : '#1a1a1a',
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          color: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'primary.main'
                              : '#006064',
                          mb: 0.5,
                        }}
                      >
                        {project.category}
                        {project.category !== 'Cloud Computing' && ' Stack Web Development'}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'text.secondary'
                              : '#666',
                        }}
                      >
                        {project.type}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          my: 2,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          color: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'text.secondary'
                              : '#666',
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          mb: 2,
                        }}
                      >
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

                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          justifyContent: { xs: 'center', sm: 'space-between' },
                        }}
                      >
                        <Box sx={{ position: 'relative' }}>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<GitHubIcon />}
                            href={project.github !== '#' ? project.github : undefined}
                            target="_blank"
                            disabled={project.github === '#'}
                            sx={{
                              position: 'relative',
                              '&:disabled': {
                                opacity: 0.7,
                              },
                            }}
                          >
                            Code
                          </Button>
                          {project.github === '#' && (
                            <Box
                              sx={{
                                position: 'absolute',
                                top: '-30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                color: 'white',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                whiteSpace: 'nowrap',
                                opacity: 0,
                                transition: 'opacity 0.2s',
                                pointerEvents: 'none',
                                '&::after': {
                                  content: '""',
                                  position: 'absolute',
                                  bottom: '-5px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  borderWidth: '5px',
                                  borderStyle: 'solid',
                                  borderColor: 'rgba(0, 0, 0, 0.8) transparent transparent transparent',
                                },
                              }}
                              className="tooltip"
                            >
                              Not Available
                            </Box>
                          )}
                        </Box>

                        <Box sx={{ position: 'relative' }}>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<LinkedInIcon />}
                            href={project.linkedin !== '#' ? project.linkedin : undefined}
                            target="_blank"
                            disabled={project.linkedin === '#'}
                            sx={{
                              color: '#0077b5',
                              borderColor: 'rgba(0, 119, 181, 0.2)',
                              bgcolor: 'rgba(0, 119, 181, 0.05)',
                              '&:hover': {
                                bgcolor: 'rgba(0, 119, 181, 0.1)',
                                borderColor: 'rgba(0, 119, 181, 0.3)',
                              },
                              '&:disabled': {
                                opacity: 0.7,
                              },
                            }}
                          >
                            LinkedIn
                          </Button>
                          {project.linkedin === '#' && (
                            <Box
                              sx={{
                                position: 'absolute',
                                top: '-30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                color: 'white',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                whiteSpace: 'nowrap',
                                opacity: 0,
                                transition: 'opacity 0.2s',
                                pointerEvents: 'none',
                                '&::after': {
                                  content: '""',
                                  position: 'absolute',
                                  bottom: '-5px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  borderWidth: '5px',
                                  borderStyle: 'solid',
                                  borderColor: 'rgba(0, 0, 0, 0.8) transparent transparent transparent',
                                },
                              }}
                              className="tooltip"
                            >
                              Not Available
                            </Box>
                          )}
                        </Box>

                        <Box sx={{ position: 'relative' }}>
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<LaunchIcon />}
                            href={project.demo !== '#' ? project.demo : undefined}
                            target="_blank"
                            disabled={project.demo === '#'}
                            sx={{
                              background:
                                'linear-gradient(to right, #00e5a0, #00e5a0)',
                              '&:hover': {
                                background:
                                  'linear-gradient(to right, rgba(0, 229, 160, 0.9), rgba(0, 229, 160, 0.9))',
                              },
                              '&:disabled': {
                                opacity: 0.7,
                              },
                            }}
                          >
                            Demo
                          </Button>
                          {project.demo === '#' && (
                            <Box
                              sx={{
                                position: 'absolute',
                                top: '-30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                color: 'white',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                whiteSpace: 'nowrap',
                                opacity: 0,
                                transition: 'opacity 0.2s',
                                pointerEvents: 'none',
                                '&::after': {
                                  content: '""',
                                  position: 'absolute',
                                  bottom: '-5px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  borderWidth: '5px',
                                  borderStyle: 'solid',
                                  borderColor: 'rgba(0, 0, 0, 0.8) transparent transparent transparent',
                                },
                              }}
                              className="tooltip"
                            >
                              Not Available
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <style>
        {`
          .tooltip {
            opacity: 0;
          }
          button:disabled:hover + .tooltip {
            opacity: 1;
          }
        `}
      </style>
    </Box>
  );
};

export default Projects;
