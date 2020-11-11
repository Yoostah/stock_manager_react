import React from "react";
import GlobalStyle from "./style/global";

import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
};

export default App;
