import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AnimatedBackground from './AnimatedBackground';

const roles = [
  'Computer Science Engineer',
  'Tech Enthusiast',
  'Full Stack Developer',
  'Software Engineer',
  'Web Developer',
  'Cloud Engineer',
  'Quick Learner',
];

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 }, // Add padding top for mobile to account for navbar
      }}
    >
      <AnimatedBackground />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
              background: 'linear-gradient(45deg, #00e5a0, #00b8d4)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            HARSHITH DINDUKURTHI
          </Typography>
          
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4, 
              color: '#aaa',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            I am{' '}
            <ReactTypingEffect
              text={roles}
              speed={100}
              eraseDelay={2000}
              typingDelay={500}
              eraseSpeed={50}
              cursorRenderer={cursor => (
                <span style={{ color: '#1976d2' }}>{cursor}</span>
              )}
              displayTextRenderer={(text, i) => {
                return (
                  <span>
                    {text.split('').map((char, i) => {
                      return (
                        <span
                          key={i}
                          style={{
                            color: i % 2 === 0 ? '#1976d2' : '#9c27b0',
                            fontWeight: 'bold',
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              }}
            />
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ 
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center'
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              href="/resume.pdf"
              download
              fullWidth
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)',
                },
                maxWidth: { xs: '100%', sm: 'auto' }
              }}
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LinkedInIcon />}
              href="https://linkedin.com/in/dindukurthi-harshith/"
              target="_blank"
              fullWidth
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
                maxWidth: { xs: '100%', sm: 'auto' }
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/harshith0112"
              target="_blank"
              fullWidth
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
                maxWidth: { xs: '100%', sm: 'auto' }
              }}
            >
              GitHub
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
