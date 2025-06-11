import React from 'react';
import { Modal, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';

const CertificateModal = ({ open, onClose, image, credlyUrl }) => {
  const handleVerify = () => {
    if (credlyUrl) {
      window.open(credlyUrl, '_blank');
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="certificate-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          maxWidth: '90vw',
          maxHeight: '90vh',
          borderRadius: 2,
          outline: 'none',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.7)',
            },
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={image}
            alt="Certificate"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '85vh',
              objectFit: 'contain',
            }}
          />
          
          {credlyUrl && (
            <Button
              variant="contained"
              startIcon={<VerifiedIcon />}
              onClick={handleVerify}
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                bgcolor: 'success.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'success.dark',
                },
                zIndex: 2,
              }}
            >
              Verify
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default CertificateModal; 