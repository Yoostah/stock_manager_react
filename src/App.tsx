import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle, { GContainer } from './style/global';

import Header from './components/Header';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <GContainer>
        <Routes />
      </GContainer>
      <GlobalStyle />
    </Router>
  );
};

export default App;
