import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin: 15px 0;
  padding: 15px;
  border-radius: 10px;
`;

export const DeliveryContent = styled.div``;

export const Header = styled.div`
  font-size: 12px;
  line-height: 19px;
  color: #858585;
  font-weight: bold;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  text-transform: uppercase;
  padding: 10px 15px;
  margin-bottom: 20px;

  & > div:not(:first-child) {
    justify-self: center;
  }
`;
