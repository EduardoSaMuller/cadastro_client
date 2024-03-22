import React from 'react';
import { styled } from '@mui/material/styles';

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
  console.log(open,'open aqui')
  return (
    <Main open={open}>
      
        <h1>Main Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus lorem
          nec nisi venenatis, vel lacinia justo commodo. Integer semper, urna nec
          egestas ultrices, libero nisi scelerisque eros, eu fermentum nisl magna
          ac nisi. Vivamus sed quam id tellus fermentum tincidunt. Donec sodales
          faucibus tellus eget tempor. Curabitur sodales risus sit amet erat
          condimentum bibendum. Donec nec odio non dolor fermentum tristique vel eu
          ipsum. Quisque ut aliquet ex, vitae interdum justo. Integer in volutpat
          ex. Proin aliquet elit ut neque vulputate tristique. Cras porttitor a
          eros sit amet posuere.
        </p>
        <p>
          Morbi sed magna vel metus scelerisque varius sed nec velit. Curabitur
          pharetra arcu ac varius pellentesque. Fusce iaculis metus ac eros
          tincidunt sollicitudin. Vestibulum nec volutpat tellus. Nulla eget
          eleifend libero. Phasellus sit amet purus malesuada, condimentum ligula
          eget, efficitur neque. Phasellus at leo magna. Duis dapibus massa at
          ante pellentesque, ac malesuada eros pellentesque. Fusce eget erat et
          nulla posuere laoreet. Nullam in purus at lectus viverra commodo non
          quis tortor. Vestibulum mollis ultrices eros ut consectetur. Donec
          pellentesque sit amet lorem sit amet interdum.
        </p>
    </Main>
  );
}

