import React, { useState } from 'react';

/**
 * Animations
 */
// import { Motion, spring } from 'react-motion';

/**
 * Material-ui
 */

/**
 * Local styles
 */
import { Container, BackgroundContainer, List, BT } from './style';

const BottomSheet: React.FC = () => {
  const [opacity, setOpacity] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(100);
  const [visibility, setVisibility] = useState('hidden');

  const animate = () => {
    if (opacity !== 0) {
      console.log(`diferente de 0: ${opacity}`);
      setOpacity(0);
      setTranslate(100);
      setTimeout(() => {
        setVisibility('hidden');
        console.log(opacity);
        console.log(translate);
        console.log(visibility);
      }, 200);
    } else {
      console.log(`Else: ${opacity}`);
      setOpacity(0.5);
      setTranslate(0);
      setTimeout(() => {
        setVisibility('visible');
        console.log(opacity);
        console.log(translate);
        console.log(visibility);
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
