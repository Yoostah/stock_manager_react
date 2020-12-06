import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/signin_background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #293241ff;
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;
  img {
    width: 100%;
    max-width: 340px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-weight: normal;
    }

    input {
      background: #e0fbfcff;
      border-radius: 10px;
      border: 2px solid #e0fbfcff;
      padding: 16px;
      width: 100%;

      //Input precedido por outro
      & + input {
        margin-top: 8px;
      }
    }
    button {
      background: #ee6c4dff;
      color: #e0fbfcff;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      font-weight: bold;
      margin-top: 16px;
      transition: background-color 0.3s ease;

      &:hover {
        background: ${shade(0.2, '#ee6c4dff')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    color: #ee6c4dff;
    margin-top: 24px;
    transition: color 0.2s;

    svg {
      margin-right: 10px;
    }
    &:hover {
      color: #e0fbfcff;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
