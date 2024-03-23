import React from 'react';
import { useForm } from 'react-hook-form';

const ClientForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="person-form">
      {/* Foto */}
      <label>
        Foto:
        <input type="file" {...register('foto')} />
      </label>

      {/* Nome */}
      <label>
        Nome:
        <input type="text" {...register('nome', { required: 'Campo obrigatório' })} />
        {errors.nome && <span>{errors.nome.message}</span>}
      </label>

      {/* Endereço */}
      <label>
        Endereço:
        <input type="text" {...register('endereco')} />
      </label>

      {/* E-mail */}
      <label>
        E-mail:
        <input type="email" {...register('email', { required: 'Campo obrigatório' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>

      {/* Telefone */}
      <label>
        Telefone:
        <input type="text" {...register('telefone')} />
      </label>

      {/* Data de Nascimento */}
      <label>
        Data de Nascimento:
        <input type="date" {...register('dataNascimento')} />
      </label>

      {/* Gênero */}
      <label>
        Gênero:
        <select {...register('genero')}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </label>

      {/* Botão para salvar */}
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ClientForm;
