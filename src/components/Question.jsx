import React from "react";
import Scope from "./Scope";
import Effort from "./Effort";

const Question = ({ game, question }) => {
  return (
    <div className="question">
      <h1>{question.text}</h1>
      <h3>Select a scope and level of effort. </h3>
      <div className="questionRow">
        <Scope className="questionScope" question={question} />{" "}
        <Effort className="questionEffort" question={question} />
      </div>
    </div>
  );
};
export default Question;
