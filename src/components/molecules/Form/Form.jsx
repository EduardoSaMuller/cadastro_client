import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Form.scss";

export default function ClientForm({ onAddClient }) {
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
    if (!image || !data.name) {
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
                  value: /^[a-zA-Z]+$/,
                  message: "* Favor primeira letra em maiúsculo ex: João",
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <label className="form-floating-label">Nome</label>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
}
