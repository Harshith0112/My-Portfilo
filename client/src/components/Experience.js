import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '2px',
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
    [theme.breakpoints.down('md')]: {
      left: '20px',
    },
  },
}));

const ExperienceCard = styled(Paper)(({ theme, isEven }) => ({
  padding: theme.spacing(3),
  borderRadius: '10px',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 4px 20px rgba(0, 0, 0, 0.3)'
    : '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  position: 'relative',
  width: 'calc(50% - 40px)',
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.mode === 'dark' 
    ? theme.palette.background.paper
    : theme.palette.background.default,
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 40px)',
    marginLeft: '40px',
  },
  ...(isEven ? {
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      marginLeft: '40px',
    },
  } : {
    marginRight: 'auto',
  }),
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: theme.palette.mode === 'dark' 
    ? theme.palette.primary.main 
    : theme.palette.primary.light,
  border: `3px solid ${theme.palette.background.paper}`,
  top: '50%',
  transform: 'translateY(-50%)',
  left: '50%',
  marginLeft: '-10px',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    left: '20px',
    marginLeft: '-10px',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    marginRight: theme.spacing(2),
    color: theme.palette.mode === 'dark' 
      ? theme.palette.primary.main 
      : theme.palette.primary.dark,
  },
}));

const Experience = () => {
  const experiences = [
    {
      title: 'React Intern',
      company: 'Slash Mark IT',
      period: 'July 31, 2024 - August 31, 2024',
      description: [
        'Built and maintained basic web pages using React.js, focusing on component-based architecture.',
'Created responsive UIs using CSS and integrated them with functional components.',
'Worked closely with team members to understand project workflows and contribute to feature development.',
'Learned and applied Git, code reviews, and best practices for clean and maintainable code.'
      ]
    }
    // {
    //   title: 'Junior Developer',
    //   company: 'Previous Company',
    //   period: '2020 - 2022',
    //   description: [
    //     'Assisted in developing front-end features using modern JavaScript frameworks',
    //     'Worked on bug fixes and implemented new features',
    //     'Participated in daily stand-ups and sprint planning meetings',
    //     'Contributed to documentation and technical specifications'
    //   ]
    // }
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: (theme) => theme.palette.mode === 'dark' 
              ? theme.palette.primary.main 
              : theme.palette.primary.dark,
          }}
        >
          Experience
        </Typography>

        <TimelineContainer>
          {experiences.map((experience, index) => (
            <Box key={index} sx={{ position: 'relative' }}>
              <TimelineDot />
              <ExperienceCard isEven={index % 2 === 0}>
                <IconWrapper>
                  <WorkIcon sx={{ fontSize: 32 }} />
                  <Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{
                        color: (theme) => theme.palette.mode === 'dark' 
                          ? theme.palette.primary.main 
                          : theme.palette.primary.dark,
                      }}
                    >
                      {experience.title}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{
                        color: (theme) => theme.palette.mode === 'dark' 
                          ? theme.palette.text.primary 
                          : theme.palette.text.secondary,
                      }}
                    >
                      {experience.company}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{
                        color: (theme) => theme.palette.mode === 'dark' 
                          ? theme.palette.text.secondary 
                          : theme.palette.text.secondary,
                      }}
                    >
                      {experience.period}
                    </Typography>
                  </Box>
                </IconWrapper>
                <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                  {experience.description.map((item, idx) => (
                    <Typography
                      component="li"
                      key={idx}
                      variant="body1"
                      sx={{ 
                        mb: 1,
                        color: (theme) => theme.palette.mode === 'dark' 
                          ? theme.palette.text.primary 
                          : theme.palette.text.primary,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </ExperienceCard>
            </Box>
          ))}
        </TimelineContainer>
      </Container>
    </Box>
  );
};

export default Experience; 