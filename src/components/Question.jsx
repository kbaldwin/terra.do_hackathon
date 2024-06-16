import React from "react";
import Scope from "./Scope";
import Effort from "./Effort";

const Question = ({ game, gameState, setGameState, question }) => {
  const chooseToActPushed = () => {
    // record action
    gameState.actionCounts[gameState.selectedScope] =
      gameState.actionCounts[gameState.selectedScope] + 1;
    gameState.actionCounts[gameState.selectedEffort] =
      gameState.actionCounts[gameState.selectedEffort] + 1;

    // update game state, including score
    let newGameState = gameState.clone();
    let selectedOption = question.getOption(
      gameState.selectedScope,
      gameState.selectedEffort
    );
    if (Math.random() * 100 < selectedOption.chanceOfSuccess) {
      newGameState.resultText = selectedOption.onSuccess;
      newGameState.score = newGameState.score + selectedOption.score;
    } else {
      newGameState.resultText = selectedOption.onFailure;
      newGameState.score =
        newGameState.score + Math.floor(selectedOption.score / 4);
    }

    newGameState.acted = true;
    setGameState(newGameState);
  };

  return (
    <div className="question">
      <h1 className="question-text">{question.text}</h1>
      <div className="questionRow">
        <Scope
          className="questionScope"
          gameState={gameState}
          setGameState={setGameState}
          question={question}
        />{" "}
        <Effort
          className="questionEffort"
          gameState={gameState}
          setGameState={setGameState}
          question={question}
        />
      </div>
      <p className="action-text">
        Action:{" "}
        {
          question.getOption(gameState.selectedScope, gameState.selectedEffort)
            .text
        }
      </p>
      <button
        className="act-button"
        onClick={chooseToActPushed}
        disabled={gameState.acted}
      >
        Choose to Act on a {gameState.selectedScope} level, at a{" "}
        {gameState.selectedEffort} level of effort.
      </button>
      {gameState.acted && (
        <p className="action-result"> {gameState.resultText} </p>
      )}
    </div>
  );
};
export default Question;
