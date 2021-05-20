import React, { createContext, useCallback, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Toast from '../components/Toast';

interface IToastContext {
  addToast: (toast: IToast) => void;
  removeToast: () => void;
}

export interface IToast {
  id: string;
  type?: 'info' | 'success' | 'danger';
  title: string;
  message?: string;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

export function useToast(): IToastContext {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = useCallback((toastData: IToast) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: uuid(),
        type: toastData.type || 'info',
        title: toastData.title,
        message: toastData?.message,
      },
    ]);
  }, []);
  const removeToast = useCallback(() => {
    // console.log('Toast Removed');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {toasts && toasts.map((toast) => <Toast key={toast.id} />)}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
