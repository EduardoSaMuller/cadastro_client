import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ClientCard from '../../molecules/Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Main.scss'
import RegisterModal from '../../molecules/Modal/Modal';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => (
    {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginTop: `69px`,
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }
  ),
);

export default function MainContent({ open }) {
  const [openModal, setOpenModal] = useState(false);
  const [clientList, setClientList] = useState([]);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const onAddClient = (client) => {
    setClientList([...clientList, client]);
  };
  return (
    <Main open={open}>
      <div className='main-header'>
        <button>Teste Inicio</button>
        <button onClick={handleOpen}>Novo Cadastro</button>
      </div>
      <div className='main-content'>
        <div className='main-content-info'> 
          <h2>Lista de Clientes</h2>
        </div>
        <div className='main-content-list'>
          {clientList.map((client, index) => (
            <ClientCard
              key={index}
              name={client.name}
              foto={client.foto}
              cpf={client.cpf}
              phone={client.phone}
              email={client.email}
              surname={client.surname}
                birthdate={client.birthdate}
                city={client.city}
                number={client.number}
                district={client.district}
                state={client.state}
                cep={client.cep}
                gender={client.gender}
                street={client.street}
            />
          ))}
        </div>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Passando a função onAddClient para o RegisterModal */}
      <RegisterModal openModal={openModal} handleClose={handleClose} onAddClient={onAddClient} />

    </Main>
  );
}
