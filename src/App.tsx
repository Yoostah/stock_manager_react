import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle, { GContainer } from './style/global';

import Header from './components/Header';
import InfoCards from './components/InfoCards';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <GContainer>
        <InfoCards />
      </GContainer>
      <GlobalStyle />
    </Router>
  );
};

export default App;
