import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, useTheme, Card, CardContent} from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import CloudIcon from '@mui/icons-material/Cloud';
import GlobeIcon from '@mui/icons-material/Public';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TimerIcon from '@mui/icons-material/Timer';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const theme = useTheme();

  const skillCategories = {
    languages: {
      title: 'Languages',
      icon: <CodeIcon />,
      color: '#2563eb',
      skills: [
        { name: 'C', icon: '⚡' },
        { name: 'Java', icon: '☕' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'Python', icon: '🐍' },
      ],
    },
    frontend: {
      title: 'Frontend',
      icon: <GlobeIcon />,
      color: '#7c3aed',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'Material-UI', icon: '🎯' },
      ],
    },
    backend: {
      title: 'Backend',
      icon: <StorageIcon />,
      color: '#db2777',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Django', icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-django-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-2-pack-logos-icons-2970205.png?f=webp&w=512" alt="Django" style={{ width: '1em', height: '1em', verticalAlign: 'middle', objectFit: 'contain' }} /> },
        { name: 'Express.js', icon: '🚂' },
      ],
    },
    databases: {
      title: 'Databases',
      icon: <StorageIcon sx={{ color: '#059669' }} />,
      color: '#059669',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'PostgreSQL', icon: '🐘' }
      ]
    },
    cloud: {
      title: 'Cloud & AI',
      icon: <CloudIcon sx={{ color: '#ea580c' }} />,
      color: '#ea580c',
      skills: [
        { name: 'AWS', icon: '☁️' },
        { name: 'Google Cloud', icon: '🌩️' },
        { name: 'Docker', icon: '🐳' }
      ]
    }
  };

  const softSkillCategories = {
    productivity: {
      title: 'Productivity',
      icon: <TimerIcon sx={{ color: '#2563eb' }} />,
      color: '#2563eb',
      skills: [
        { name: 'Time Management', icon: '⏰' },
        { name: 'Organization', icon: '📋' },
        { name: 'Multitasking', icon: '🔄' }
      ]
    },
    interpersonal: {
      title: 'Interpersonal',
      icon: <PeopleIcon sx={{ color: '#7c3aed' }} />,
      color: '#7c3aed',
      skills: [
        { name: 'Teamwork', icon: '👥' },
        { name: 'Collaboration', icon: '🤝' },
        { name: 'Emotional Intelligence', icon: '❤️' }
      ]
    },
    communication: {
      title: 'Communication',
      icon: <LightbulbIcon sx={{ color: '#db2777' }} />,
      color: '#db2777',
      skills: [
        { name: 'Active Listening', icon: '👂' },
        { name: 'Verbal Communication', icon: '🗣️' },
        { name: 'Written Communication', icon: '✍️' }
      ]
    },
    leadership: {
      title: 'Leadership',
      icon: <GroupsIcon sx={{ color: '#059669' }} />,
      color: '#059669',
      skills: [
        { name: 'Team Management', icon: '👨‍💼' },
        { name: 'Decision Making', icon: '🎯' },
        { name: 'Conflict Resolution', icon: '🤝' }
      ]
    },
    cognitive: {
      title: 'Cognitive',
      icon: <PsychologyIcon sx={{ color: '#ea580c' }} />,
      color: '#ea580c',
      skills: [
        { name: 'Critical Thinking', icon: '🧠' },
        { name: 'Problem Solving', icon: '🔍' },
        { name: 'Analytical Skills', icon: '📊' }
      ]
    }
  };

  const SkillCard = ({ category }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card
        sx={{
          height: '100%',
          borderRadius: '12px',
          borderLeft: `4px solid ${category.color}`,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
          },
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'white',
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: '8px',
                bgcolor: `${category.color}15`,
                mr: 2,
                boxShadow: `0 2px 8px ${category.color}20`,
              }}
            >
              {React.cloneElement(category.icon, { sx: { color: category.color, fontSize: 24 } })}
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: category.color,
                fontWeight: 600,
              }}
            >
              {category.title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 1.5,
                    borderRadius: '8px',
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <Typography sx={{ mr: 1, fontSize: '1.2rem' }}>{skill.icon}</Typography>
                  <Typography
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'text.primary' : '#2c2c2c',
                      fontWeight: 500,
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        bgcolor: theme.palette.mode === 'dark' ? 'background.default' : '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
              }}
            >
              Skills & Technologies
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.mode === 'dark' ? 'text.secondary' : '#4a4a4a',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Tools and technologies I work with
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                p: 0.5,
                borderRadius: '8px',
              }}
            >
              <Button
                variant={activeTab === 'technical' ? 'contained' : 'text'}
                startIcon={<CodeIcon />}
                onClick={() => setActiveTab('technical')}
                sx={{
                  borderRadius: '6px',
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                  ...(activeTab === 'technical' && {
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                    color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)',
                    },
                  }),
                }}
              >
                Technical Skills
              </Button>
              <Button
                variant={activeTab === 'soft' ? 'contained' : 'text'}
                startIcon={<PeopleIcon />}
                onClick={() => setActiveTab('soft')}
                sx={{
                  borderRadius: '6px',
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                  ...(activeTab === 'soft' && {
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                    color: theme.palette.mode === 'dark' ? 'white' : '#1a1a1a',
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)',
                    },
                  }),
                }}
              >
                Soft Skills
              </Button>
            </Box>
          </Box>

          {activeTab === 'technical' && (
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
                  fontWeight: 600,
                }}
              >
                Technical Expertise
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : '#4a4a4a',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Experienced in front-end development with expertise in C, Java, JavaScript, and Python. Proficient in modern web technologies including React and Node.js, with strong database skills in MongoDB, MySQL, and PostgreSQL. Skilled in cloud platforms like AWS and Google Cloud, with practical experience in containerization using Docker.
              </Typography>
            </Box>
          )}

          {activeTab === 'soft' && (
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
                  fontWeight: 600,
                }}
              >
                Professional Skills
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : '#4a4a4a',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Demonstrated excellence in time management and organization, with strong interpersonal skills in teamwork and collaboration. Effective communicator with proven leadership abilities in team management and decision-making. Possesses strong analytical thinking and problem-solving capabilities, coupled with adaptability and innovation in dynamic work environments.
              </Typography>
            </Box>
          )}

          <Grid container spacing={4}>
            {Object.values(activeTab === 'technical' ? skillCategories : softSkillCategories).map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category.title}>
                <SkillCard category={category} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 