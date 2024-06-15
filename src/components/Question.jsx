import React from "react";
import Scope from "./Scope";
import Effort from "./Effort";

const Question = ({ game, gameState, setGameState, question }) => {
  const chooseToActPushed = () => {
    game.chooseToAct(question);
  };

  return (
    <div className="question">
      <h1>{question.text}</h1>
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
      <p>
        {
          question.getOption(gameState.selectedScope, gameState.selectedEffort)
            .text
        }
      </p>
      <button onClick={chooseToActPushed}>
        Choose to Act on a {gameState.selectedScope} level, at a{" "}
        {gameState.selectedEffort} level of effort.
      </button>
    </div>
  );
};
export default Question;
