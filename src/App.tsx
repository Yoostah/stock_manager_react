import React from "react";
import GlobalStyle, { GContainer } from "./style/global";

import Header from "./components/Header";
import InfoCards from "./components/InfoCards";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GContainer>
        <InfoCards />
      </GContainer>
      <GlobalStyle />
    </>
  );
};

export default App;
