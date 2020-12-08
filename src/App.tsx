import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle, { GContainer } from './style/global';
import { AuthProvider } from './context/AuthContext';
// import Header from './components/Header';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          {/* <Header /> */}
          <GContainer className="fullWidth">
            <Routes />
          </GContainer>
        </Router>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
