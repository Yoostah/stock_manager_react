import axios from 'axios';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const apiPost = async (url: string, options: any) => {
  try {
    const response = await api.post(`${url}`, {
      ...options,
    });

    return response.data;
  } catch (error) {
    if (IS_DEVELOPMENT) {
      const response = fetch(`${url}`, {
        method: 'POST',
      });
      return (await response).json();
    }
    throw error;
  }
};

export const apiGet = async (url: string, ...rest: any[]) => {
  try {
    const response = await api.get(`${url}`);

    return response;
  } catch (error) {
    if (IS_DEVELOPMENT) {
      const response = fetch(`/${url}`, {
        method: 'GET',
      });
      return (await response).json();
    }
    throw error;
  }
};

export const apiPut = async (url: string, ...rest: any[]) => {
  try {
    const response = await api.put(`${url}`);

    return response;
  } catch (error) {
    if (IS_DEVELOPMENT) {
      const response = fetch(`/${url}`, {
        method: 'PUT',
      });
      return (await response).json();
    }
    throw error;
  }
};

export default api;
