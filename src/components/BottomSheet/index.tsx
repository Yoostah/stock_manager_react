import React, { useState } from 'react';

import { Container, BackgroundContainer, List, BT } from './style';

const BottomSheet: React.FC = () => {
  const [opacity, setOpacity] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(100);
  const [visibility, setVisibility] = useState('hidden');

  const animate = () => {
    if (opacity !== 0) {
      setOpacity(0);
      setTranslate(100);
      setTimeout(() => {
        setVisibility('hidden');
      }, 200);
    } else {
      setOpacity(0.5);
      setTranslate(0);
      setTimeout(() => {
        setVisibility('visible');
      }, 200);
    }
  };

  function handleActive() {
    animate();
  }

  return (
    <div>
      <button type="button" onClick={handleActive}>
        Clique
      </button>
      <BT opacityValue={opacity} translateValue={translate}>
        <Container visibility={visibility} onClick={animate}>
          <BackgroundContainer opacityValue={opacity} />
          <List transform={translate}>
            <li>
              <button type="button" onClick={animate}>
                <span>Botao</span>
              </button>
            </li>
          </List>
        </Container>
      </BT>
    </div>
  );
};

export default BottomSheet;
