import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
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
`;
