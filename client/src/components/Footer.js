import React from 'react';
import { Box, Typography, Container, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f5f5f5' : '#333',
      }}
    >
      <Container maxWidth="md">
        {/* Icon Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <Tooltip title="GitHub">
            <IconButton
              href="https://github.com/Harshith0112"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              color="default"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <IconButton
              href="https://linkedin.com/in/dindukurthi-harshith/"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              color="default"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Email">
            <IconButton
              href="mailto:dindukurthiharshith@gmail.com"
              size="large"
              color="default"
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Call">
            <IconButton
              href="tel:+916303769245"
              size="large"
              color="default"
            >
              <PhoneIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} DINDUKURTHI HARSHITH. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
