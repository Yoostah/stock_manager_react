import React, { FormEvent, useCallback, useState } from 'react';
import { FiBox, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, FormContent, Background } from './style';

import logo from '../../assets/logo_light.svg';

import { useAuth } from '../../context/AuthContext';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const { tryLogin } = useAuth();

  const handleSubmit = useCallback((data: Object) => {
    console.log(data);

    // tryLogin({ email, password });
  }, []);

  return (
    <Container>
      <FormContent>
        <img src={logo} alt="Stock Manager" />
        <Form initialData={{}} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <a href="http://">
          <FiBox />
          Criar Conta
        </a>
      </FormContent>
      <Background />
    </Container>
  );
};

export default Login;
