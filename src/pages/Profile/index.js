import React from 'react';
import {Form, Input} from '@rocketseat/unform';
import {useDispatch, useSelector} from 'react-redux';

import {  signOut } from '~/store/modules/auth/actions';
import {  updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput/index';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data){
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut(){
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu Endereço de E-mail" />
        <hr/>

        <Input name="oldPassword" type="password" placeholder="Seu Senha Atual" />
        <Input name="password" type="password" placeholder="Seu Senha Secreta" />
        <Input name="confirmPassword" type="password" placeholder="Confirmação de Senha" />

        <button type="submit">Atualizar Perfil</button>

      </Form>
        <button type="button" onClick={handleSignOut}>Sair do Gobarber</button>
    </Container>
  );
}
