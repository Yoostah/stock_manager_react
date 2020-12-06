import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, FormContent, Background } from './style';
import logo from '../../assets/logo_light.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <FormContent>
        <img src={logo} alt="Stock Manager" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" name="email" id="email" placeholder="E-mail" />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
        </form>
        <a href="http://">
          <FiLogIn />
          Criar Conta
        </a>
      </FormContent>
      <Background />
    </Container>
  );
};

export default Login;
