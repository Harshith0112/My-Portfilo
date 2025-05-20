import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg'; // adjust the path if About.jsx is in a different folder

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 4, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={profilePic}
                alt="Harshith Dindukurthi"
                sx={{
                  width: '100%',
                  maxWidth: '400px',
                  borderRadius: '20px',
                  boxShadow: 3,
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                About Me
              </Typography>
              <Typography 
                variant="h5" 
                color="primary" 
                gutterBottom
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Computer Science Engineer & Tech Enthusiast
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                I'm a dedicated professional with a passion for technology and innovation. 
                My journey in computer science has equipped me with strong problem-solving 
                skills and a deep understanding of modern technologies.
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                I thrive in collaborative environments and am always eager to learn new 
                technologies and methodologies. My goal is to leverage my technical expertise 
                to create impactful solutions that make a difference.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      bgcolor: 'background.paper',
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    <Typography variant="subtitle1" color="primary">
                      Name
                    </Typography>
                    <Typography variant="body1">
                      Harshith Dindukurthi
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      bgcolor: 'background.paper',
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    <Typography variant="subtitle1" color="primary">
                      Location
                    </Typography>
                    <Typography variant="body1">
                      Vijayawada, India
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      bgcolor: 'background.paper',
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    <Typography variant="subtitle1" color="primary">
                      Email
                    </Typography>
                    <Typography variant="body1">
                      dindukurthiharshith@gmail.com
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      bgcolor: 'background.paper',
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    <Typography variant="subtitle1" color="primary">
                      Phone
                    </Typography>
                    <Typography variant="body1">
                      +91 6303769245
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
