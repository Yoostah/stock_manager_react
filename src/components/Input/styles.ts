import styled from 'styled-components';

export const Container = styled.div`
  background: #e0fbfcff;
  border-radius: 10px;
  border: 2px solid #e0fbfcff;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  //Div precedido por outro
  & + div {
    margin-top: 10px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
