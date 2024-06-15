import React from "react";
import { useState } from "react";
import Scope from "./Scope";
import Effort from "./Effort";

const Question = ({ game, question }) => {
  const [selectedScope, setSelectedScope] = useState("individual");
  const [selectedEffort, setSelectedEffort] = useState("low");

  const chooseToActPushed = () => {
    game.chooseToAct(question);
  };

  return (
    <div className="question">
      <h1>{question.text}</h1>
      <div className="questionRow">
        <Scope
          className="questionScope"
          question={question}
          selectedScope={selectedScope}
          setSelectedScope={setSelectedScope}
        />{" "}
        <Effort
          className="questionEffort"
          question={question}
          selectedEffort={selectedEffort}
          setSelectedEffort={setSelectedEffort}
        />
      </div>
      <p>{question.text}</p>
      <p>{selectedScope}</p>
      <p>{selectedEffort}</p>
      <button onClick={chooseToActPushed}>Choose to Act</button>
    </div>
  );
};
export default Question;
