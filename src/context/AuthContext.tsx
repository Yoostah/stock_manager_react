import React, { createContext, useCallback, useContext, useState } from 'react';
import { apiPost } from '../services';
import { useToast } from './ToastContext';
import * as ENDPOINTS from '../config/urls';

export interface ILoginCredentials {
  email: string;
  password: string;
}

interface IAuthData {
  user: {
    id: number;
    name: string;
    is_admin: number;
    avatar: string;
  };
  token: boolean;
}

interface IAuthContext {
  user: object;
  tryLogin: (credentials: ILoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const [userData, setUserData] = useState<IAuthData>(() => {
    const token = !!localStorage.getItem('@StockManager_token');
    const localData = localStorage.getItem('@StockManager_user');

    if (token && localData) {
      return { user: JSON.parse(localData), token };
    }
    return {} as IAuthData;
  });

  const tryLogin = useCallback(async ({ email, password }) => {
    try {
      const response = await apiPost(ENDPOINTS.LOGIN, {
        email,
        password,
      });
      // const users = await response.json();
      // console.log(response);

      const { data: user, token } = response;

      console.log(user);
      console.log(token);

      if (user && token) {
        localStorage.setItem('@StockManager_token', token);
        localStorage.setItem('@StockManager_user', JSON.stringify(user));

        setUserData({ user, token });
      }
    } catch (error) {
      // eslint-disable-next-line
      //addToast({title : 'Testes', message: 'Erro'});
      // console.error(error);
    }
  }, []);

  const logout = useCallback(() => {
    if (
      localStorage.getItem('@StockManager_token') &&
      localStorage.getItem('@StockManager_user')
    ) {
      localStorage.removeItem('@StockManager_token');
      localStorage.removeItem('@StockManager_user');
    }
    setUserData({} as IAuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: userData.user, tryLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
