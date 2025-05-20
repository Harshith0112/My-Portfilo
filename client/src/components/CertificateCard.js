import React, { useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import AwardIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CertificateModal from './CertificateModal';

const CertificateCard = ({ certificate, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease',
            borderTop: '4px solid',
            borderColor: 'primary.main',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            },
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ 
              p: 3, 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              borderBottom: '1px solid',
              borderColor: 'divider'
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'primary.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'primary.main'
              }}>
                <AwardIcon />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  lineHeight: 1.3
                }}
              >
                {certificate.name}
              </Typography>
            </Box>

            <Box sx={{ p: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon 
                    sx={{ 
                      color: 'success.main',
                      mr: 1,
                      fontSize: '1.2rem'
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontWeight: 500
                    }}
                  >
                    {certificate.issuer}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontWeight: 500
                  }}
                >
                  {certificate.date}
                </Typography>
              </Box>

              <Box 
                onClick={handleOpenModal}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'primary.main',
                  cursor: 'pointer',
                  mt: 2,
                  '&:hover': {
                    color: 'primary.dark',
                  },
                }}
              >
                <OpenInNewIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  View Certificate
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      <CertificateModal
        open={isModalOpen}
        onClose={handleCloseModal}
        image={certificate.image}
      />
    </>
  );
};

export default CertificateCard; 