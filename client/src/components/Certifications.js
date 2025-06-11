import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CertificateCard from './CertificateCard';

// Import certificate images
//import mongodbCert from '../assets/certificates/mongodb.png';
import oracleCert from '../assets/certificates/oraclegenai.png';
import redhatCert from '../assets/certificates/redhat.png';
import salesforceCert from '../assets/certificates/salesforce_AIAssociate.png';
import googleCert from '../assets/certificates/google_ace.png';

const certifications = [
  // {
  //   name: 'MongoDB Associate Database Administrator',
  //   issuer: 'MongoDB',
  //   date: '2025',
  //   image: mongodbCert,
  //   link: '#'
  // },
  {
    name: 'Oracle Cloud Infrastructure 2024 Generative Al Certified Professional',
    issuer: 'Oracle',
    date: '2024',
    image: oracleCert,
    link: '#',
    credlyUrl: ''
  },
  {
    name: 'Red Hat Certified Enterprise Application Developer',
    issuer: 'RedHat',
    date: '2025',
    image: redhatCert,
    link: '#',
    credlyUrl: 'https://www.credly.com/badges/0ad2bca6-0cd3-4724-8d36-6546c1f31003/public_url'
  },
  {
    name: 'Salesforce Al Associate',
    issuer: 'Salesforce',
    date: '2024',
    image: salesforceCert,
    link: '#',
    credlyUrl: 'https://www.salesforce.com/trailblazer/k9726mq9y8z15o2ocg'
  },
  {
    name: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google',
    date: '2025',
    image: googleCert,
    link: '#',
    credlyUrl: 'https://www.credly.com/badges/e2e2b1c4-ddec-4ced-8da2-b74150689dc3/public_url'
  }
];

const Certifications = () => {
  return (
    <Box
      id="certifications"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #00e5a0, #00b8d4)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            My Certifications
          </Typography>

          <Grid container spacing={3}>
            {certifications.map((certificate, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CertificateCard 
                  certificate={certificate} 
                  index={index} 
                />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certifications; 