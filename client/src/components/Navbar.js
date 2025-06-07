import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {sections.map((section) => (
          <ListItem key={section.id} sx={{ justifyContent: 'center' }}>
            <ScrollLink
              to={section.id}
              smooth={true}
              duration={500}
              offset={-70}
              style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
            >
              <ListItemText primary={section.name} />
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 'background.paper' : 'transparent',
        transition: 'all 0.3s ease',
        color: darkMode ? 'inherit' : '#000000',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <ScrollLink
          to="hero"
          smooth={true}
          duration={800}
          offset={-100}
          spy={true}
          style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            cursor: 'pointer',
          }}
        >
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              color: 'inherit',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: theme.palette.mode === 'dark' ? '#90caf9' : '#1976d2',
                transform: 'scale(1.05)',
              },
            }}
          >
            DINDUKURTHI HARSHITH
          </Typography>
        </ScrollLink>

        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center', 
          gap: 2,
          marginLeft: 'auto',
          marginRight: 4
        }}>
          {sections.map((section) => (
            <ScrollLink
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Button 
                color="inherit" 
                sx={{ 
                  mx: 1,
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                {section.name}
              </Button>
            </ScrollLink>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton 
            onClick={toggleTheme} 
            sx={{ 
              color: 'inherit',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
