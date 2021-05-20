import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle, { GContainer } from './style/global';

import Header from './components/Header';

import Routes from './routes';
import AppProvider from './context';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Router>
          {/* <Header /> */}
          <GContainer className="fullWidth">
            <Routes />
          </GContainer>
        </Router>
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
