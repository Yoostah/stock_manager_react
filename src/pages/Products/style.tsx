import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface ProductProps {
  status: string;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  max-height: 60vh;
  overflow: auto;
  padding: 20px;
`;
export const Product = styled.div<ProductProps>`
  color: #293241ff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    span {
      font-size: 13px;
      color: #3d5a80ff;
    }
  }
  div {
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  ${(props) => {
    const actualStock = props.status;
    if (actualStock === 'OK') {
      return css`
        background: ${lighten(0.5, '#00cc2c')};
      `;
    }
    if (actualStock === 'WARNING') {
      return css`
        background: ${lighten(0.2, '#ee6c4dff')};
        }
      `;
    }
    return css`
      background: ${lighten(0.4, '#ff0022')};
      div {
        p {
          color: red;
        }
      }
    `;
  }}
`;
