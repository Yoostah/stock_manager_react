import styled from 'styled-components';

interface IBT {
  opacityValue: number;
  translateValue: number;
}

interface IContainer {
  visibility: string;
}

interface IBackgroundContainer {
  opacityValue: number;
}

interface IChildren {
  transform: number;
}

export const BT = styled.div<IBT>`
  transition: 0.5s;
  opacity: ${(props) => props.opacityValue || 0};
  //transform: translateY(${(props) => props.translateValue || 0}%);
`;

export const Container = styled.div<IContainer>`
  position: fixed;
  transition: 0.5s;
  visibility: ${(props) => props.visibility || 'hidden'};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 21;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

export const BackgroundContainer = styled.div<IBackgroundContainer>`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => props.opacityValue || 0};
`;

export const List = styled.ul<IChildren>`
  position: relative;
  z-index: 2;
  list-style: none;
  margin: 0;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 8px 0;
  transition: 0.5s;
  transform: translateY(${(props) => props.transform || 0}%);
`;
/* const styles = {
  container: {

  };
  backgroundContainer: {

  };
  list: {

  };
  button: {
    backgroundColor: '#fff';
    border: 0;
    margin: 0;
    width: '100%';
    display: 'flex';
    flex: '0 1 auto';
    flexWrap: 'wrap';
    flexDirection: 'row';
    justifyContent: 'flex-start';
    alignItems: 'center';
    textTransform: 'none';
    lineHeight: '48px';
    padding: '0 16px';
    borderRadius: 0;
    outline: 'none';
    cursor: 'pointer';
  };
  text: {
    fontSize: '16px';
  };
};

export default styles; */
