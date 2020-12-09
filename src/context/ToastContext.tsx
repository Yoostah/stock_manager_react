import React, { createContext, useCallback } from 'react';

import Toast from '../components/Toast';

// import { Container } from './styles';
interface IToastContext {
  addToast: () => void;
  removeToast: () => void;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('Toast Add');
  }, []);
  const removeToast = useCallback(() => {
    console.log('Toast Removed');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
