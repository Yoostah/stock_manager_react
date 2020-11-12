import React from "react";
import GlobalStyle from "./style/global";

import Header from "./components/Header";
import InfoCards from "./components/InfoCards";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <InfoCards />
      <GlobalStyle />
    </>
  );
};

export default App;
