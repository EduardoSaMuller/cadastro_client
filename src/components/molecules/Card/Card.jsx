import React from "react";
import ImgClient from "../../../assets/images/user.png";
import "./Card.scss";

export default function ClientCard({ name, foto }) {
  return (
    <div className="card-content">
      <div className="card-info">
        <div className="card-info-left">
          <img src={foto || ImgClient} alt="imagem do cliente" />
          <h2>{name}</h2>
          <p>Nº:  #123456SP</p>
        </div>
        <div className="card-info-right">
          <h2>Cliente</h2>
          <div className="card-info-right-content">
            <span>Nome </span>
            <p>{name}</p>
          </div>
          <div className="card-info-right-content">
            <span>Idade</span>
            <p>33 anos</p>
          </div>
          <div className="card-info-right-content">
            <span>CPF</span>
            <p>035.932.051-14</p>
          </div>
          <div className="card-info-right-content">
            <span>E-mail</span>
            <p>Eduardo_Muller0301@hotmail.com</p>
          </div>
          <div className="card-info-right-content">
            <span>Telefone</span>
            <p>(61) 98555-7717</p>
          </div>
        </div>
      </div>
      <div className="card-complete-info">
        <button>Ver Perfil</button>
      </div>
    </div>
  );
}
