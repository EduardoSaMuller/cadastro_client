import React from 'react';
import ImgClient from "../../../assets/images/user.png"
import './Card.scss'
export default function ClientCard() {
  return (
    <div className='card-content'>
      <div className='card-info'>
        <div className='card-info-left'>
          <img src={ImgClient} alt="imagem do cliente" />
          <h2>Meu nome</h2>
          <p>Registro: #123456SP</p>
        </div>
        <div className='card-info-right'>
        <h2>Cliente</h2>
        <p>Nome: Eduardo Sampaio Muller</p>
        <p>Idade: 33 anos</p>
        <p>Cpf: 035.932.051-14</p>
        <p>E-mail: Eduardo_Muller0301@hotmail.com</p>
        <p>Telefone: (61) 98555-7717</p>
        </div>
      </div>
      <div className='card-complete-info'>
        <button>Ver Perfil</button>
      </div>
    </div>
  );
}

