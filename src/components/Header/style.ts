import styled from 'styled-components';

export const Menu = styled.div`
  background: #293241ff;
  width: 100vw;
  height: 160px;

  div {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    padding: 30px 0;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavOptions = styled.nav`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  a {
    opacity: 0.8;
    transition: 0.2s;
    //padding-bottom: 5px;

    &.active-link {
      opacity: 1;
      font-weight: bold;
      font-size: 20px;
      border-bottom: 2px solid #ee6c4dff;
    }

    &:hover {
      opacity: 1;
      font-weight: bold;
      font-size: 20px;
    }
    & + a {
      margin-left: 20px;
    }
  }
`;
