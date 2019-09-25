import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';

export default function SignIn() {
  return (
    <>
    <img src={logo} alt="gobarber" />

    <form>
      <input type="email" placeholder="Seu e-mail" />
      <input type="password" placeholder="Sua Senha Secreta" />

      <button type="submit">Acessar</button>
      <Link to="/register">Criar Conta Gratuita</Link>
    </form>

    </>
  );
}
