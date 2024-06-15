import React, { useState } from "react";
import Question from "./Question";
import Game from "../helper/game.js";

const GameView = () => {
  const [game, setGame] = useState(new Game());

  // const resetGame = () => {
  //   setGame(new Game());
  // };

  return (
    <div>
      <div className="details-box">
        {/* <div className="resetButton" onClick={resetGame}>
          New Game
        </div> */}
      </div>
      <div className="game">
        <Question game={game} question={game.questions[0]} />
      </div>
      <div className="score-box">
        <div className="score-header">Points</div>
        <div>{game.score}</div>
      </div>
    </div>
  );
};

export default GameView;
