import React, { useState } from "react";

const Scope = ({ game, question, selectedScope, setSelectedScope }) => {
  const handleHoverScopeChange = (scope) => {
    console.log("hover scope:", scope);
    setSelectedScope(scope);
  };

  const handleSetScopeChange = (scope) => {
    console.log("selected scope:", scope);
    question.selectedScope = scope;
  };

  return (
    <div>
      <h2>Select a Scope:</h2>
      <div>
        <img
          className={`scope-image ${
            selectedScope === "individual" && question === "individual"
              ? "highlighted"
              : ""
          }`}
          src={require("../assets/individual.png")}
          alt="Individual"
          onClick={() => handleSetScopeChange("individual")}
          onMouseOver={() => handleHoverScopeChange("individual")}
          onMouseOut={() => handleHoverScopeChange("")}
        />
        <img
          classNameOrig={`scope-image ${
            selectedScope === "community" && question === "community"
              ? "highlighted"
              : ""
          }`}
          className={`scope-image scope-image-highlight ${
            selectedScope === "community" && question === "community"
              ? "highlighted"
              : ""
          }`}
          src={require("../assets/community.jpg")}
          alt="Community"
          onClick={() => handleSetScopeChange("community")}
          onMouseOver={() => handleHoverScopeChange("community")}
          onMouseOut={() => handleHoverScopeChange("")}
        />
        <img
          className={`scope-image ${
            selectedScope === "global" && question === "global"
              ? "highlighted"
              : ""
          }`}
          src={require("../assets/global.jpg")}
          alt="Global"
          onClick={() => handleSetScopeChange("global")}
          onMouseOver={() => handleHoverScopeChange("global")}
          onMouseOut={() => handleHoverScopeChange("")}
        />
      </div>
    </div>
  );
};

export default Scope;
