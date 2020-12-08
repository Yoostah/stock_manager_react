import React, { FormEvent, useCallback, useState } from 'react';
import { FiBox } from 'react-icons/fi';
import { Container, FormContent, Background } from './style';
import logo from '../../assets/logo_light.svg';

import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, tryLogin } = useAuth();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      tryLogin({ email, password });
    },
    [email, password, tryLogin]
  );
  // eslint-disable-next-line
  console.log(user);
  return (
    <Container>
      <FormContent>
        <img src={logo} alt="Stock Manager" />
        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
        </form>
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
