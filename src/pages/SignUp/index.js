import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';

export default function SignUp() {
  return (
    <>
    <img src={logo} alt="gobarber" />

    <form>
      <input type="text" placeholder="Nome Completo" />
      <input type="email" placeholder="Seu e-mail" />
      <input type="password" placeholder="Sua Senha Secreta" />

      <button type="submit">Criar Conta</button>
      <Link to="/">Já Tenho Login</Link>
    </form>

    </>
  );
}
