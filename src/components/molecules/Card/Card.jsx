import React, { useState } from "react";
import ImgClient from "../../../assets/images/user.png";
import { CSSTransition } from "react-transition-group";
import { format, differenceInYears } from "date-fns";

import "./Card.scss";

export default function ClientCard({
  name,
  foto,
  cpf,
  email,
  phone,
  gender,
  surname,
  birthdate,
  city,
  state,
  cep,
  street,
  number,
  district,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Verificando se birthdate é uma data válida antes de realizar o cálculo
  const birthDateObj = new Date(birthdate);
  const isValidDate = !isNaN(birthDateObj.getTime());

  // Calculando a idade a partir da data de nascimento, apenas se a data for válida
  const age = isValidDate ? differenceInYears(new Date(), birthDateObj) : null;

  // Formatando a data de nascimento apenas se for válida
  const formattedBirthDate = isValidDate
    ? format(birthDateObj, "dd - MM - yyyy")
    : "Data Inválida";

  return (
    <div className="card-content">
      <div className="card-info">
        <div className="card-info-left">
          <img src={foto || ImgClient} alt="imagem do cliente" />
          <h2>{name}</h2>
          <p>Nº: #123456SP</p>
        </div>
        <div className="card-info-right">
          <h2>Cliente</h2>
          <div className="card-info-right-content">
            <span>Nome </span>
            <p>
              {name} {surname}
            </p>
          </div>
          <div className="card-info-right-content">
            <span>Idade</span>
            <p>
              {age !== null ? `${age} anos` : "Data de Nascimento Inválida"}
            </p>
          </div>
          <div className="card-info-right-content">
            <span>CPF</span>
            <p>{cpf}</p>
          </div>
          <div className="card-info-right-content">
            <span>E-mail</span>
            <p>{email}</p>
          </div>
          <div className="card-info-right-content">
            <span>Telefone</span>
            <p>{phone}</p>
          </div>
          <CSSTransition
            in={showDetails}
            timeout={300}
            classNames="additional-details"
            unmountOnExit
          >
            <div className="additional-details">
              <div className="card-info-right-content adress-info">
                <h3>Endereço Completo</h3>
                <span>Rua</span>
                <p>{street}</p>
                <span>Número</span>
                <p>{number}</p>

                <span>Cidade</span>
                <p>{city}</p>
                <span>Estado</span>
                <p>{state}</p>
                <span>CEP</span>
                <p> {cep}</p>
              </div>
              <div className="card-info-right-content">
                <span>Data de Nascimento</span>
                <p>{formattedBirthDate}</p>
              </div>
              <div className="card-info-right-content">
                <span>Sexo: </span>
                <p>{gender}</p>
              </div>
              <div className="card-info-right-content">
                <span>Status</span>
                <p>Ativo</p>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
      <div className="card-complete-info">
        <button onClick={toggleDetails}>
          {showDetails ? "Esconder Detalhes" : "Ver Perfil"}
        </button>
      </div>
    </div>
  );
}
