import React, { useState } from "react";
import Question from "./Question";
import Game from "../helper/game.js";
import GameState from "../helper/gameState.js";
import GameOverlay from "./GameOverlay";

const GameView = () => {
  const game = new Game();

  const [gameState, setGameState] = useState(new GameState());
  game.state = gameState;

  function nextQuestion() {
    let newGameState = gameState.clone();
    if (newGameState.currentQuestion === game.questions.length - 1) {
      newGameState.playing = false;
    } else {
      newGameState.currentQuestion = gameState.currentQuestion + 1;
      newGameState.selectedScope = "individual";
      newGameState.selectedEffort = "low";
      newGameState.acted = false;
    }
    setGameState(newGameState);
  }

  return (
    <div>
      <div className="score-box">
        {/* <div className="score-header">Points</div> */}
        <div>{gameState.score} Points</div>
      </div>
      <div className="game">
        <Question
          game={game}
          gameState={gameState}
          setGameState={setGameState}
          question={game.questions[gameState.currentQuestion]}
        />
        {!gameState.playing && <GameOverlay gameState={gameState} />}
        {gameState.acted && (
          <button
            className="next-question-button"
            onClick={() => nextQuestion()}
          >
            {gameState.currentQuestion === game.questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
};

export default GameView;
