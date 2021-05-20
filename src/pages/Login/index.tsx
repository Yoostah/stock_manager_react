import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { FiBox, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, FormContent, Background } from './style';

import logo from '../../assets/logo_light.svg';

import { ILoginCredentials, useAuth } from '../../context/AuthContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { tryLogin } = useAuth();

  const handleSubmit = useCallback(
    async (data: ILoginCredentials) => {
      try {
        formRef.current?.setErrors({}); // Sempre remover os erros antes de realizar uma nova validaçáo

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false, // Retorna todos os erros em vez de parar no primeiro erro
        });

        tryLogin({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    },
    [tryLogin]
  );

  return (
    <Container>
      <FormContent>
        <img src={logo} alt="Stock Manager" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input type="text" name="email" placeholder="E-mail" icon={FiMail} />
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
