import styled, { css } from 'styled-components';

interface DeliveryItemProps {
  isCollapsed: Boolean;
}

export const Container = styled.div<DeliveryItemProps>`
  border: 1px solid #f0f0f0;
  border-radius: 25px;
  padding: 0 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #e8e8e8;
    section {
      color: black;
    }

    > div {
      > div {
        background: #fff;
      }
    }
  }

  section {
    font-size: 12px;
    line-height: 19px;
    color: #858585;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;

    align-self: center;
    div {
      align-self: center;
    }

    div:not(:first-child) {
      justify-self: center;
    }
    button {
      background: transparent;
      border: 0;
      width: 50px;
      height: 50px;
      margin: 0 auto;
    }

    .deliveryStatus {
      padding: 0 10px;
      border-radius: 215px;
      color: #fff;
      font-weight: bold;
      width: 50%;
      text-align: center;
    }
    .status_entregue {
      background: #0fe133;
    }

    .status_estorno {
      background: #eb3232;
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    > div {
      background: #eee;
      padding: 10px;
      color: black;
    }
  }
`;
export const ItemsContainer = styled.div<DeliveryItemProps>`
  overflow: hidden;
  max-height: 200px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isCollapsed
      ? css`
          margin-bottom: 10px;
          max-height: 200px;
        `
      : css`
          max-height: 0;
        `}
`;

export const DeliveryItem = styled.div`
  font-size: 12px;
  line-height: 19px;
  color: #858585;
`;
