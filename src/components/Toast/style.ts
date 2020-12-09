import styled, { css } from 'styled-components';

interface IToastProps {
  type?: 'info' | 'danger' | 'success';
}

const toastTypes = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  danger: css`
    background: #fddede;
    color: #c53030;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;
`;
export const ToastMessage = styled.div<IToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  ${(props) => toastTypes[props.type || 'info']}

  & + div {
    margin-top: 10px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
    strong {
      font-weight: 600;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
    }
  }

  button {
    background: transparent;
    position: absolute;
    top: 16px;
    right: 8px;
    border: 0;
    color: inherit;
  }
`;
