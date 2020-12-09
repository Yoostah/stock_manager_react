import React from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';

import { Container, ToastMessage } from './style';

const Toast: React.FC = () => {
  return (
    <Container>
      <ToastMessage>
        <FiAlertCircle size={15} />
        <div>
          <strong>Aconteceu um Erro</strong>
          <p>Não foi possível fazer uma ação</p>
        </div>
        <button type="button">
          <FiX size={18} />
        </button>
      </ToastMessage>
      <ToastMessage type="danger">
        <FiAlertCircle size={15} />
        <div>
          <strong>Aconteceu um Erro</strong>
          <p>Não foi possível fazer uma ação</p>
        </div>
        <button type="button">
          <FiX size={18} />
        </button>
      </ToastMessage>
      <ToastMessage type="success">
        <FiAlertCircle size={15} />
        <div>
          <strong>Aconteceu um Erro</strong>
          <p>Não foi possível fazer uma ação</p>
        </div>
        <button type="button">
          <FiX size={18} />
        </button>
      </ToastMessage>
    </Container>
  );
};

export default Toast;
