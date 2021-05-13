import styled, { css } from 'styled-components';
import { colors } from '../../style/colors';
import Tooltip from '../Tooltip';

interface InputContainerProps {
  isFocused: boolean;
  hasValue: boolean;
  hasError: boolean;
}

export const Container = styled.div<InputContainerProps>`
  background: ${colors.light};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid ${colors.light};
  color: ${colors.dark};

  ${(props) =>
    props.hasValue &&
    css`
      color: ${colors.orange};
    `}

  ${(props) =>
    props.hasError &&
    css`
      border: 2px solid ${colors.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${colors.orange};
      color: ${colors.orange};
    `}


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
      color: ${colors.dark};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;
