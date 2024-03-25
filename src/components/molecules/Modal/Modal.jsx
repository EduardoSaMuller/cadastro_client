import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ClientForm from "../Form/Form";
import "./Modal.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function RegisterModal({ openModal, handleClose, onAddClient }) {
  const handleSubmit = () => {
    // Função vazia, pois o ClientForm agora é responsável por submeter e fechar o modal
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-content" sx={style}>
          <h2>Cadastro de usuário</h2>
          <ClientForm
            onSubmit={handleSubmit} // Passando a função vazia como onSubmit
            onAddClient={onAddClient}
            handleClose={handleClose} // Passando a função handleClose para fechar o modal
          />
        </Box>
      </Modal>
    </div>
  );
}
