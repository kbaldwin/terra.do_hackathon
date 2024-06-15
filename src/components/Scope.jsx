const Scope = ({ gameState, setGameState, question }) => {
  const handleHoverScopeChange = (scope) => {
    console.log("hover scope:", scope);
    let newGameState = gameState.clone();
    newGameState.activeScope = scope;
    setGameState(newGameState);
  };

  const handleSetScopeChange = (scope) => {
    console.log("selected scope:", scope);
    let newGameState = gameState.clone();
    newGameState.selectedScope = scope;
    setGameState(newGameState);
  };

  return (
    <div>
      <h3>Select a Scope:</h3>
      <div>
        <img
          className={`scope-image ${
            gameState.selectedScope === "individual" &&
            question === "individual"
              ? "highlighted"
              : ""
          }`}
          src={require("../assets/individual.png")}
          alt="Individual"
          onClick={() => handleSetScopeChange("individual")}
          onMouseOver={() => handleHoverScopeChange("individual")}
          onMouseOut={() => handleHoverScopeChange("none")}
        />
        <img
          classNameOrig={`scope-image ${
            gameState.selectedScope === "community" && question === "community"
              ? "highlighted"
              : ""
          }`}
          className={`scope-image scope-image-highlight ${
            gameState.selectedScope === "community" && question === "community"
              ? "highlighted"
              : ""
          }`}
          src={require("../assets/community.jpg")}
          alt="Community"
          onClick={() => handleSetScopeChange("community")}
          onMouseOver={() => handleHoverScopeChange("community")}
          onMouseOut={() => handleHoverScopeChange("none")}
        />
        <img
          className={`scope-image ${
            gameState.selectedScope === "global" && question === "global"
              ? "highlighted"
              : ""
          }`}
          src={require("../assets/global.jpg")}
          alt="Global"
          onClick={() => handleSetScopeChange("global")}
          onMouseOver={() => handleHoverScopeChange("global")}
          onMouseOut={() => handleHoverScopeChange("none")}
        />
      </div>
    </div>
  );
};

export default Scope;
