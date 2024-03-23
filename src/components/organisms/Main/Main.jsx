import React from 'react';
import { styled } from '@mui/material/styles';
import ClientForm from '../../molecules/Form/Form';
import ClientCard from '../../molecules/Card/Card';
import './Main.scss'
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
    marginTop: `100px`,
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

export default function MainContent({ open }) {
  return (
    <Main open={open}>
      <div className='main-header'>
        <button>Teste Inicio</button>
        <button>Novo Cadastro</button>
      </div>
      <div className='main-content'>
        <div className='main-content-info'> 
          <h2>Lista de Clientes</h2>
        </div>
        <div className='main-content-list'>
          <ClientCard/>
        </div>
      </div>
      <ClientForm/>
    </Main>
  );
}

