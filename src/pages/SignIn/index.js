import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';


const schema = Yup.object().shape({
  email: Yup.string().email('Insira um email valido!').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatório'),
});

export default function SignIn() {

  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
    <img src={logo} alt="gobarber" />

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="password" type="password" placeholder="Sua Senha Secreta" />

      <button type="submit">Acessar</button>
      <Link to="/register">Criar Conta Gratuita</Link>
    </Form>

    </>
  );
}
