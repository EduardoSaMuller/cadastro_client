import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Form.scss";

export default function ClientForm({ onAddClient,onSubmit}) {
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const notifySuccess = () => toast.success("Cadastro realizado com sucesso!");
  const notifyError = () => toast.error("Erro ao cadastrar. Preencha todos os campos!");

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const submitForm = async (data) => {
    if (!image || !data.name || !data.surname || !data.email || !data.phone || !data.cpf  ) {
      notifyError();
      return;
    }

    if (image) {
      const imageData = await convertImageToBase64(image);
      data.foto = imageData;
      localStorage.setItem("clientImage", imageData);
    }

    notifySuccess();
    onAddClient(data);
    reset();
    onSubmit(); // Chamando a função onSubmit para fechar o modal após sucesso
    ;
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  useEffect(() => {
    const clientImage = localStorage.getItem("clientImage");
    if (clientImage) {
      // Faça o que for necessário com a imagem
    }
  }, []);

  return (
    <>
      <div className="form-content">
        <form onSubmit={handleSubmit(submitForm)} className="person-form">
          <div className="form-file">
            <label htmlFor="file-upload" className="custom-file-upload">
              {image ? (
                <img
                  alt="preview"
                  src={URL.createObjectURL(image)}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
              ) : (
                <>
                  <PersonIcon />
                  Envie sua foto
                </>
              )}
            </label>
            <input
              id="file-upload"
              type="file"
              {...register("foto")}
              onChange={onImageChange}
            />
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("name", {
                pattern: {
                  value: /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/,
                  message: "* Favor primeira letra em maiúsculo ex: João",
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <label className="form-floating-label">Nome</label>
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("surname", {
                pattern: {
                  value: /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/,
                  message: "* Favor primeira letra em maiúsculo ex: Sampaio Muller",
                },
              })}
            />
            {errors.surname && <span>{errors.surname.message}</span>}
            <label className="form-floating-label">Sobrenome</label>
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("cpf", {
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: "* Favor preencha como no exemplo: 111.111.111-11",
                },
              })}
            />
            {errors.cpf && <span>{errors.cpf.message}</span>}
            <label className="form-floating-label">CPF</label>
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              maxLength={9}
              {...register("cep", {
                pattern: {
                  value: /^\d{5}-\d{3}$/,
                  message: "* Favor preencha como no exemplo: 77777-771",
                },
              })}
            />
            {errors.cep && <span>{errors.cep.message}</span>}
            <label className="form-floating-label">CEP</label>
          </div>

          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("phone", {
                pattern: {
                  value: /^\(\d{2}\)\d{5}-\d{4}$/,
                  message: "* Favor preencha como no exemplo: (61)99999-9999",
                },
              })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
            <label className="form-floating-label">Telefone</label>
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("email", {
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "* Favor preencha como no exemplo: joao@outlook.com",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <label className="form-floating-label">Email</label>
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("street", {
                pattern: {
                  value: /.*/,
                  message: "* Favor preencha como no exemplo: Rua Jacarandá",
                },
              })}
            />
            {errors.street && <span>{errors.street.message}</span>}
            <label className="form-floating-label">Rua</label>
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("district", {
                pattern: {
                  value: /.*/,
                  message: "* Favor preencha como no exemplo: Bairro Jardins",
                },
              })}
            />
            {errors.district && <span>{errors.district.message}</span>}
            <label className="form-floating-label">Bairro</label>
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("number", {
                pattern: {
                  value: /.*/,
                  message: "* Favor preencha como no exemplo: Bairro Jardins",
                },
              })}
            />
            {errors.number && <span>{errors.number.message}</span>}
            <label className="form-floating-label">Número</label>
          </div>
          <div className="form-label-content">
            <input
              type="date"
              className="form-floating-input"
              placeholder=" "
              {...register("birthdate", {
                
              })}
            />
            {errors.birthdate && <span>{errors.birthdate.message}</span>}
            <label className="form-floating-label">Data de Nascimento</label>
          </div>
          <div className="form-label-content">
            <input
              type="text"
              className="form-floating-input"
              placeholder=" "
              {...register("city", {
                pattern: {
                  value: /.*/,
                  message: "* Favor preencha como no exemplo: São Paulo",
                },
              })}
            />
            {errors.city && <span>{errors.city.message}</span>}
            <label className="form-floating-label">Cidade</label>
          </div>
          <div className="form-label-content">
            <select
              className="form-floating-select"
              placeholder=" "
              {...register("gender", { required: true })}
            >
            <option value=" ">Escolha ...</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Outro">Outro</option>
              </select>
            {errors.gender && <span>{errors.gender.message}</span>}
            <label className="form-floating-label">Gênero</label>
          </div>
          <div className="form-label-content">
            <select
              className="form-floating-select"
              placeholder=" "
              {...register("state", { required: true })}
            >
            <option value=" ">Escolha ...</option>
            <option value="AC">Acre</option>
    <option value="AL">Alagoas</option>
    <option value="AP">Amapá</option>
    <option value="AM">Amazonas</option>
    <option value="BA">Bahia</option>
    <option value="CE">Ceará</option>
    <option value="DF">Distrito Federal</option>
    <option value="ES">Espírito Santo</option>
    <option value="GO">Goiás</option>
    <option value="MA">Maranhão</option>
    <option value="MT">Mato Grosso</option>
    <option value="MS">Mato Grosso do Sul</option>
    <option value="MG">Minas Gerais</option>
    <option value="PA">Pará</option>
    <option value="PB">Paraíba</option>
    <option value="PR">Paraná</option>
    <option value="PE">Pernambuco</option>
    <option value="PI">Piauí</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="RN">Rio Grande do Norte</option>
    <option value="RS">Rio Grande do Sul</option>
    <option value="RO">Rondônia</option>
    <option value="RR">Roraima</option>
    <option value="SC">Santa Catarina</option>
    <option value="SP">São Paulo</option>
    <option value="SE">Sergipe</option>
    <option value="TO">Tocantins</option>
              </select>
            {errors.state && <span>{errors.state.message}</span>}
            <label className="form-floating-label">Estado</label>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
}
