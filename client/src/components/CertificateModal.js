import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CertificateModal = ({ open, onClose, image }) => {
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
          }}
        >
          <CloseIcon />
        </IconButton>
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
      </Box>
    </Modal>
  );
};

export default CertificateModal; 