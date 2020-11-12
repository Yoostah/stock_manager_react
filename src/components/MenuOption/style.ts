import styled, { css } from 'styled-components';

interface OptionProps {
  isActive: Boolean;
}

export const Option = styled.li<OptionProps>`
  opacity: 0.8;
  transition: 0.2s;
  padding-bottom: 5px;
  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
      font-weight: bold;
      font-size: 20px;
      border-bottom: 2px solid #ee6c4dff;
    `}

  &:hover {
    opacity: 1;
    font-weight: bold;
    font-size: 20px;
  }
  & + li {
    margin-left: 20px;
  }
`;
