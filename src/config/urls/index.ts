const { BASE_URL } = process.env;

// LOGIN
export const LOGIN = `/auth/login`;

// PRODUTOS
export const GET_PRODUCT_INFO = (productId: string) =>
  `${BASE_URL}/product/${productId}`;
