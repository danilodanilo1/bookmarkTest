import React from "react";
import Content from "./components/content";
import Logo from "./components/logo";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Logo />
      <div className="sepatator">
        <Content />
      </div>
    </div>
  );
}

export default App;
