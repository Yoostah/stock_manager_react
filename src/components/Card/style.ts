import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface CardProps {
  isSelected: Boolean;
}

export const CardContainer = styled.div<CardProps>`
  display: flex;
  flex: 1;
  background: #3d5a80ff;
  margin-top: -50px;
  justify-content: space-between;
  max-width: 300px;
  padding: 15px;
  border-radius: 5px;
  transition: 0.2s;

  ${(props) =>
    props.isSelected
      ? css`
          background: #e0fbfcff;
          color: #293241ff;
          transform: translateY(-5px);
          > svg {
            color: #ee6c4dff;
          }
          div {
            p {
              font-weight: bold;
            }
            strong {
              color: #ee6c4dff;
            }
          }
        `
      : css`
          &:hover {
            background: ${shade(0.3, '#3d5a80ff')};
            transform: translateY(-5px);
            color: #fff;
            > svg {
              color: #fff;
            }
            div {
              p {
                font-weight: normal;
              }
              strong {
                color: #fff;
              }
            }
          }
        `};
  div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 13px;
      line-height: 20px;
    }
    strong {
      font-size: 23px;
      margin-top: 10px;
    }
  }
`;
