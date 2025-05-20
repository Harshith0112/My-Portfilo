import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Button, useTheme } from '@mui/material';
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
      icon: <CodeIcon sx={{ color: '#2E7D32' }} />,
      color: '#2E7D32',
      skills: ['C', 'Java', 'JavaScript', 'Python']
    },
    web: {
      title: 'Web',
      icon: <GlobeIcon sx={{ color: '#1565C0' }} />,
      color: '#1565C0',
      skills: ['CSS', 'HTML', 'React', 'Node.js']
    },
    data: {
      title: 'Data',
      icon: <BarChartIcon sx={{ color: '#6A1B9A' }} />,
      color: '#6A1B9A',
      skills: ['Data Analysis', 'Data Visualization']
    },
    frameworks: {
      title: 'Frameworks',
      icon: <LayersIcon sx={{ color: '#E65100' }} />,
      color: '#E65100',
      skills: ['Django', 'Spring Boot', 'ReactJS']
    },
    databases: {
      title: 'Databases',
      icon: <StorageIcon sx={{ color: '#C62828' }} />,
      color: '#C62828',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    cloud: {
      title: 'Cloud Computing',
      icon: <CloudIcon sx={{ color: '#006064' }} />,
      color: '#006064',
      skills: ['AWS', 'Google Cloud', 'Docker']
    }
  };

  const softSkillCategories = {
    productivity: {
      title: 'Productivity',
      icon: <TimerIcon sx={{ color: '#2E7D32' }} />,
      color: '#2E7D32',
      skills: ['Time Management', 'Organization', 'Multitasking', 'Prioritization']
    },
    interpersonal: {
      title: 'Interpersonal',
      icon: <PeopleIcon sx={{ color: '#1565C0' }} />,
      color: '#1565C0',
      skills: ['Teamwork', 'Collaboration', 'Emotional Intelligence', 'Networking']
    },
    communication: {
      title: 'Communication',
      icon: <LightbulbIcon sx={{ color: '#6A1B9A' }} />,
      color: '#6A1B9A',
      skills: ['Active Listening', 'Verbal Communication', 'Written Communication', 'Presentation']
    },
    leadership: {
      title: 'Leadership',
      icon: <GroupsIcon sx={{ color: '#E65100' }} />,
      color: '#E65100',
      skills: ['Team Management', 'Decision Making', 'Conflict Resolution', 'Mentoring']
    },
    cognitive: {
      title: 'Cognitive',
      icon: <PsychologyIcon sx={{ color: '#C62828' }} />,
      color: '#C62828',
      skills: ['Critical Thinking', 'Problem Solving', 'Analytical Skills', 'Creativity']
    },
    adaptability: {
      title: 'Adaptability',
      icon: <AutoAwesomeIcon sx={{ color: '#006064' }} />,
      color: '#006064',
      skills: ['Flexibility', 'Learning Agility', 'Resilience', 'Innovation']
    }
  };

  const SkillChip = ({ skill, color }) => (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 2.5,
        py: 0.5,
        borderRadius: '9999px',
        bgcolor: theme.palette.mode === 'dark' ? `${color}20` : `${color}10`,
        color: theme.palette.mode === 'dark' ? color : color,
        fontSize: '0.75rem',
        fontWeight: 600,
        border: `1px solid ${theme.palette.mode === 'dark' ? `${color}40` : `${color}30`}`,
        '&:hover': {
          bgcolor: theme.palette.mode === 'dark' ? `${color}30` : `${color}20`,
          borderColor: theme.palette.mode === 'dark' ? `${color}60` : `${color}40`,
        },
        transition: 'all 0.2s ease',
        boxShadow: theme.palette.mode === 'dark' ? 'none' : '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      {skill}
    </Box>
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
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: `${level}%`,
            background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
            borderRadius: 4,
          }}
        />
      </Box>
    </Box>
  );

  const SkillCategory = ({ category }) => (
    <Box sx={{ mb: 3 }}>
      <Typography 
        variant="subtitle2" 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 1,
          color: 'text.secondary',
          '& svg': { mr: 1 }
        }}
      >
        {category.icon}
        {category.title}
      </Typography>
      <Grid container spacing={1}>
        {category.skills.map((skill) => (
          <Grid item xs={6} key={skill}>
            <SkillChip skill={skill} color={category.color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom align="center" sx={{ 
            color: theme => theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a'
          }}>
            My Skills
          </Typography>

          {/* Tabs */}
          <Box sx={{ 
            display: 'flex', 
            mb: 4, 
            borderRadius: 2, 
            overflow: 'hidden',
            maxWidth: '500px',
            mx: 'auto'
          }}>
            <Button
              fullWidth
              startIcon={<CodeIcon />}
              onClick={() => setActiveTab('technical')}
              sx={{
                py: 2,
                bgcolor: activeTab === 'technical' ? 'black' : 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  bgcolor: activeTab === 'technical' ? 'black' : 'rgba(0, 0, 0, 0.7)',
                },
                borderRadius: 0,
              }}
            >
              Technical Skills
            </Button>
            <Button
              fullWidth
              startIcon={<PeopleIcon />}
              onClick={() => setActiveTab('soft')}
              sx={{
                py: 2,
                bgcolor: activeTab === 'soft' ? 'black' : 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                '&:hover': {
                  bgcolor: activeTab === 'soft' ? 'black' : 'rgba(0, 0, 0, 0.7)',
                },
                borderRadius: 0,
              }}
            >
              Soft Skills
            </Button>
          </Box>

          {/* Content */}
          <Grid container spacing={4}>
            {activeTab === 'technical' ? (
              <>
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: theme => theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a'
                    }}>
                      <LayersIcon sx={{ mr: 1 }} />
                      Technical Proficiency
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? 'text.secondary' : '#666'
                    }}>
                      Proficient in various programming languages, frameworks, databases, and advanced technologies 
                      with a focus on full-stack development and emerging technologies like blockchain and multi-agent systems.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {Object.values(skillCategories).flatMap(category => 
                        category.skills.map(skill => (
                          <SkillChip key={skill} skill={skill} color={category.color} />
                        ))
                      )}
                    </Box>
                    {Object.values(skillCategories).map((category) => (
                      <SkillCategory key={category.title} category={category} />
                    ))}
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      height: '100%',
                      display: { xs: 'none', md: 'block' },
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <SkillsVisualization 
                      activeTab={activeTab} 
                      skillCategories={skillCategories} 
                    />
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: theme => theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a'
                    }}>
                      <PeopleIcon sx={{ mr: 1 }} />
                      Professional Skills
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? 'text.secondary' : '#666'
                    }}>
                      Strong interpersonal and professional skills that enable effective collaboration, 
                      leadership, and problem-solving in diverse work environments.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {Object.values(softSkillCategories).flatMap(category => 
                        category.skills.map(skill => (
                          <SkillChip key={skill} skill={skill} color={category.color} />
                        ))
                      )}
                    </Box>
                    {Object.values(softSkillCategories).map((category) => (
                      <SkillCategory key={category.title} category={category} />
                    ))}
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      height: '100%',
                      display: { xs: 'none', md: 'block' },
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <SkillsVisualization 
                      activeTab={activeTab} 
                      skillCategories={softSkillCategories} 
                    />
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 