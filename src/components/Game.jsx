import React, { useState } from "react";
import Question from "./Question";
import Game from "../helper/game.js";
import GameState from "../helper/gameState.js";

const GameView = () => {
  const game = new Game();

  const [gameState, setGameState] = useState(new GameState());
  game.state = gameState;

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
        <Question
          game={game}
          gameState={gameState}
          setGameState={setGameState}
          question={game.questions[gameState.currentQuestion]}
        />
      </div>
      <div className="score-box">
        <div className="score-header">Points</div>
        <div>{gameState.score}</div>
      </div>
    </div>
  );
};

export default GameView;
