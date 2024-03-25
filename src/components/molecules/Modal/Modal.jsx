import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClientForm from '../Form/Form';
import "./Modal.scss"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ClientModal({ openModal, handleClose, onAddClient }) {
  const handleSubmit = (data) => {
    console.log('Dados do formulário submetidos:', data);
    onAddClient(data);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClose}>Fechar Modal</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-content" sx={style}>
        <h2>Cadastro de usuário</h2>
          <ClientForm onSubmit={handleSubmit} onAddClient={onAddClient} />
        </Box>
      </Modal>
    </div>
  );
}
