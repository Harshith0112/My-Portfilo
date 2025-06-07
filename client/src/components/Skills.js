import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Button, useTheme, Card, CardContent, IconButton, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import CloudIcon from '@mui/icons-material/Cloud';
import GlobeIcon from '@mui/icons-material/Public';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TimerIcon from '@mui/icons-material/Timer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SkillsVisualization from './SkillsVisualization';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const theme = useTheme();

  const skillCategories = {
    languages: {
      title: 'Languages',
      icon: <CodeIcon sx={{ color: theme.palette.mode === 'dark' ? '#81c784' : '#2E7D32' }} />,
      color: theme.palette.mode === 'dark' ? '#81c784' : '#2E7D32',
      skills: ['C', 'Java', 'JavaScript', 'Python']
    },
    web: {
      title: 'Web',
      icon: <GlobeIcon sx={{ color: theme.palette.mode === 'dark' ? '#64b5f6' : '#1565C0' }} />,
      color: theme.palette.mode === 'dark' ? '#64b5f6' : '#1565C0',
      skills: ['CSS', 'HTML', 'React', 'Node.js']
    },
    frameworks: {
      title: 'Frameworks',
      icon: <LayersIcon sx={{ color: theme.palette.mode === 'dark' ? '#ffb74d' : '#E65100' }} />,
      color: theme.palette.mode === 'dark' ? '#ffb74d' : '#E65100',
      skills: ['Django', 'Spring Boot', 'ReactJS']
    },
    databases: {
      title: 'Databases',
      icon: <StorageIcon sx={{ color: theme.palette.mode === 'dark' ? '#ef9a9a' : '#C62828' }} />,
      color: theme.palette.mode === 'dark' ? '#ef9a9a' : '#C62828',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    cloud: {
      title: 'Cloud Computing',
      icon: <CloudIcon sx={{ color: theme.palette.mode === 'dark' ? '#4dd0e1' : '#006064' }} />,
      color: theme.palette.mode === 'dark' ? '#4dd0e1' : '#006064',
      skills: ['AWS', 'Google Cloud', 'Docker']
    }
  };

  const softSkillCategories = {
    productivity: {
      title: 'Productivity',
      icon: <TimerIcon sx={{ color: theme.palette.mode === 'dark' ? '#81c784' : '#2E7D32' }} />,
      color: theme.palette.mode === 'dark' ? '#81c784' : '#2E7D32',
      skills: ['Time Management', 'Organization', 'Multitasking', 'Prioritization']
    },
    interpersonal: {
      title: 'Interpersonal',
      icon: <PeopleIcon sx={{ color: theme.palette.mode === 'dark' ? '#64b5f6' : '#1565C0' }} />,
      color: theme.palette.mode === 'dark' ? '#64b5f6' : '#1565C0',
      skills: ['Teamwork', 'Collaboration', 'Emotional Intelligence']
    },
    communication: {
      title: 'Communication',
      icon: <LightbulbIcon sx={{ color: theme.palette.mode === 'dark' ? '#ce93d8' : '#6A1B9A' }} />,
      color: theme.palette.mode === 'dark' ? '#ce93d8' : '#6A1B9A',
      skills: ['Active Listening', 'Verbal Communication', 'Written Communication', 'Presentation']
    },
    leadership: {
      title: 'Leadership',
      icon: <GroupsIcon sx={{ color: theme.palette.mode === 'dark' ? '#ffb74d' : '#E65100' }} />,
      color: theme.palette.mode === 'dark' ? '#ffb74d' : '#E65100',
      skills: ['Team Management', 'Decision Making', 'Conflict Resolution', 'Mentoring']
    },
    cognitive: {
      title: 'Cognitive',
      icon: <PsychologyIcon sx={{ color: theme.palette.mode === 'dark' ? '#ef9a9a' : '#C62828' }} />,
      color: theme.palette.mode === 'dark' ? '#ef9a9a' : '#C62828',
      skills: ['Critical Thinking', 'Problem Solving', 'Analytical Skills', 'Creativity']
    },
    adaptability: {
      title: 'Adaptability',
      icon: <AutoAwesomeIcon sx={{ color: theme.palette.mode === 'dark' ? '#4dd0e1' : '#006064' }} />,
      color: theme.palette.mode === 'dark' ? '#4dd0e1' : '#006064',
      skills: ['Flexibility', 'Learning Agility', 'Resilience', 'Innovation']
    }
  };

  const SkillChip = ({ skill, color }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Chip
        label={skill}
        sx={{
          m: 0.5,
          px: 1,
          height: '28px',
          bgcolor: theme.palette.mode === 'dark' ? `${color}15` : `${color}10`,
          color: color,
          fontWeight: 500,
          fontSize: '0.875rem',
          '&:hover': {
            bgcolor: theme.palette.mode === 'dark' ? `${color}25` : `${color}15`,
          },
          transition: 'all 0.2s ease',
        }}
      />
    </motion.div>
  );

  const SkillBar = ({ name, level }) => (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>{name}</Typography>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>{level}%</Typography>
      </Box>
      <Box
        sx={{
          height: 8,
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: `${level}%`,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(to right, #7c4dff, #b388ff)'
              : 'linear-gradient(to right, #6366f1, #8b5cf6)',
            borderRadius: 4,
          }}
        />
      </Box>
    </Box>
  );

  const SkillCategory = ({ category }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Box
        sx={{
          mb: 3,
          p: 2.5,
          borderRadius: '12px',
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
          position: 'relative',
          '&:hover': {
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
          },
          transition: 'all 0.2s ease',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: theme.palette.mode === 'dark' ? `${category.color}15` : `${category.color}10`,
              mr: 2,
            }}
          >
            {React.cloneElement(category.icon, { sx: { color: category.color, fontSize: 24 } })}
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: category.color,
              fontWeight: 600,
            }}
          >
            {category.title}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {category.skills.map((skill) => (
            <SkillChip key={skill} skill={skill} color={category.color} />
          ))}
        </Box>
      </Box>
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
              My Skills
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              A showcase of my technical expertise and professional capabilities
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

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: '12px',
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'white',
                }}
              >
                {activeTab === 'technical' ? (
                  <>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        color: theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
                        fontWeight: 600,
                      }}
                    >
                      <LayersIcon sx={{ mr: 2, color: '#2196F3' }} />
                      Technical Expertise
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(120deg, #64b5f6, #81c784)'
                          : 'linear-gradient(120deg, #1565C0, #2E7D32)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 500,
                      }}
                    >
                      Experienced in front-end development with expertise in C, Java, JavaScript, and Python. Proficient in modern web technologies including React and Node.js, with strong database skills in MongoDB, MySQL, and PostgreSQL. Skilled in cloud platforms like AWS and Google Cloud, with practical experience in containerization using Docker.
                    </Typography>
                    {Object.values(skillCategories).map((category) => (
                      <SkillCategory key={category.title} category={category} />
                    ))}
                  </>
                ) : (
                  <>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        color: theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
                        fontWeight: 600,
                      }}
                    >
                      <PeopleIcon sx={{ mr: 2, color: '#9C27B0' }} />
                      Professional Skills
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(120deg, #ce93d8, #ffb74d)'
                          : 'linear-gradient(120deg, #6A1B9A, #E65100)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 500,
                      }}
                    >
                      Demonstrated excellence in time management and organization, with strong interpersonal skills in teamwork and collaboration. Effective communicator with proven leadership abilities in team management and decision-making. Possesses strong analytical thinking and problem-solving capabilities, coupled with adaptability and innovation in dynamic work environments.
                    </Typography>
                    {Object.values(softSkillCategories).map((category) => (
                      <SkillCategory key={category.title} category={category} />
                    ))}
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  display: { xs: 'none', md: 'block' },
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'white',
                }}
              >
                <SkillsVisualization
                  activeTab={activeTab}
                  skillCategories={activeTab === 'technical' ? skillCategories : softSkillCategories}
                />
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 