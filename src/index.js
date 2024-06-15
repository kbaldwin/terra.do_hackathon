import React from "react";
import ReactDOM from "react-dom/client";
import GameView from "./components/Game";
import "./main.scss";

const App = () => {
  return <GameView />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <br />
    <h3>Keith's Terra.do Hackathon Game</h3>
  </>
);
