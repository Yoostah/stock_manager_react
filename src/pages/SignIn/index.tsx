import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, FormContent, Background } from './style';
import logo from '../../assets/logo_light.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background />
      <FormContent>
        <img src={logo} alt="Stock Manager" />
        <form>
          <h1>Faça seu Cadastro</h1>
          <input type="text" name="name" id="name" placeholder="Nome" />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <button type="submit">Cadastrar</button>
        </form>
        <a href="http://">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </FormContent>
    </Container>
  );
};

export default SignIn;
