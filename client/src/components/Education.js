import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "K L University",
      duration: "2022 - Ongoing",
      location: "Vijayawada, Andhra Pradesh",
      details: [
        "CGPA: 8.84/10",
        "Relevant Coursework: Data Structures, Algorithms, Cloud Computing, Web Development",
        "Participated in various technical workshops and coding competitions"
      ]
    },
    {
      degree: "Intermediate Education (12th)",
      school: "Sri Chaitanya Junior College",
      duration: "2020 - 2022",
      location: "Tirupati, Andhra Pradesh",
      details: [
        "Percentage: 51%",
        "Specialized in Mathematics, Physics, and Chemistry",
      ]
    },
    {
      degree: "Secondary School Certificate (10th)",
      school: "Spring Dale Public School",
      duration: "2018 - 2020",
      location: "Vijayawada, Andhra Pradesh",
      details: [
        "CGPA: 9.9/10",
        "Active participant in science exhibitions and competitions",
        "Participated in various sports competitions"
      ]
    }
  ];

  return (
    <Box id="education" sx={{ py: 8, bgcolor: 'background.default' }}>
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
            Education
          </Typography>
          <Typography variant="h5" gutterBottom align="center" sx={{ 
            mb: 6, 
            color: theme => theme.palette.mode === 'dark' ? 'primary.main' : '#006064'
          }}>
            My Academic Journey
          </Typography>

          <Grid container spacing={4}>
            {educationData.map((edu, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <SchoolIcon sx={{ color: 'primary.main', fontSize: 40 }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" gutterBottom sx={{ 
                          color: theme => theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a'
                        }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ 
                          color: theme => theme.palette.mode === 'dark' ? 'primary.main' : '#006064'
                        }}>
                          {edu.school}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <TimelineIcon sx={{ color: theme => theme.palette.mode === 'dark' ? 'text.secondary' : '#666' }} />
                          <Typography variant="body1" sx={{ 
                            color: theme => theme.palette.mode === 'dark' ? 'text.secondary' : '#666'
                          }}>
                            {edu.duration} | {edu.location}
                          </Typography>
                        </Box>
                        <Box component="ul" sx={{ pl: 2 }}>
                          {edu.details.map((detail, idx) => (
                            <Typography
                              component="li"
                              variant="body1"
                              key={idx}
                              sx={{ 
                                mb: 1,
                                color: theme => theme.palette.mode === 'dark' ? 'text.secondary' : '#666'
                              }}
                            >
                              {detail}
                            </Typography>
                          ))}
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
    </Box>
  );
};

export default Education; 