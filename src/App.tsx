import React from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";

const App: React.FC = () => {
  return (
    <>
      <Header title={"what"} />
      <Body text={"harry"} />
    </>
  );
};

export default App;
