import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AnimatedBackground from './AnimatedBackground';
import { useTheme } from '@mui/material/styles';

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
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();

  const handleDownloadClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleResumeDownload = (type) => {
    setOpenDialog(false);
    const resumeLinks = {
      software: 'https://drive.google.com/file/d/1ZcmIAQIEvqfgJmQOwwgbRE8lNUPESktY/view?usp=sharing',
      frontend: 'https://drive.google.com/file/d/1KceL4_dz37q3shZPGbErtFa7zgmu39qj/view?usp=sharing',
    };
    window.open(resumeLinks[type], '_blank');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
      }}
    >
      <AnimatedBackground />
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
        }}
      >
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
              color: theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
            }}
          >
            HARSHITH DINDUKURTHI
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: theme.palette.mode === 'dark' ? 'text.secondary' : '#4a4a4a',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            I am{' '}
            <ReactTypingEffect
              text={roles}
              speed={90}
              eraseDelay={2000}
              typingDelay={1000}
              eraseSpeed={30}
              displayTextRenderer={(text) => (
                <span>
                  {text.split('').map((char, i) => (
                    <span
                      key={i}
                      style={{
                        color: i % 2 === 0 ? 'rgb(25, 118, 210)' : 'rgb(156, 39, 176)',
                        fontWeight: 'bold',
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              )}
              cursorRenderer={(cursor) => (
                <span style={{ color: 'rgb(156, 39, 176)' }}>{cursor}</span>
              )}
            />
          </Typography>

          

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
            }}
          >
            {/* Download Resume Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadClick}
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
                maxWidth: { xs: '100%', sm: 'auto' },
              }}
            >
              Download Resume
            </Button>

            {/* LinkedIn Button */}
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
                maxWidth: { xs: '100%', sm: 'auto' },
              }}
            >
              LinkedIn
            </Button>

            {/* GitHub Button */}
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
                maxWidth: { xs: '100%', sm: 'auto' },
              }}
            >
              GitHub
            </Button>
          </Stack>
        </motion.div>
      </Container>

      {/* Scroll Down Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <Box
            sx={{
              width: '30px',
              height: '50px',
              border: `2px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}`,
              borderRadius: '15px',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '6px',
                height: '6px',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                borderRadius: '50%',
              },
            }}
          />
        </motion.div>
      </motion.div>

      {/* Modal Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            background: 'linear-gradient(45deg, #00e5a0, #00b8d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.5rem',
          }}
        >
          Choose Resume
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleResumeDownload('software')}
            sx={{ borderRadius: 3, textTransform: 'none' }}
          >
            Software Developer Resume
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleResumeDownload('frontend')}
            sx={{ borderRadius: 3, textTransform: 'none' }}
          >
            Frontend Developer Resume
          </Button>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button onClick={handleCloseDialog} color="inherit">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Hero;
