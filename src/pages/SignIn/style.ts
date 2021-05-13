import styled from 'styled-components';
import backgroundImg from '../../assets/signin_background.jpg';
import { colors } from '../../style/colors';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: ${colors.dark};
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
  }

  > a {
    display: flex;
    align-items: center;
    color: ${colors.orange};
    margin-top: 24px;
    transition: color 0.2s;

    svg {
      margin-right: 10px;
    }
    &:hover {
      color: ${colors.light};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
