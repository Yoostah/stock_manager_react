import styled from "styled-components";

export const Menu = styled.div`
  position: absolute;
  background: #293241ff;
  width: 100vw;
  left: 0px;
  top: 0px;
  div {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const NavOptions = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 35px 0;
  font-size: 16px;
  line-height: 24px;
`;
