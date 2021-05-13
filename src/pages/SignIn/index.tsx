import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, FormContent, Background } from './style';
import logo from '../../assets/logo_light.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const handleSubmit = (data: Object) => {
    console.log(data);
  };
  return (
    <Container>
      <Background />
      <FormContent>
        <img src={logo} alt="Stock Manager" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input type="text" name="name" placeholder="Nome" icon={FiUser} />
          <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            type="text"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="http://">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </FormContent>
    </Container>
  );
};

export default SignIn;
