const Scope = ({ gameState, setGameState, question }) => {
  const handleSetScopeChange = (scope) => {
    let newGameState = gameState.clone();
    newGameState.selectedScope = scope;
    setGameState(newGameState);
  };

  return (
    <div>
      <h3>Select a Scope:</h3>
      <div className="scopes-row">
        <div
          className={`scope-option ${
            gameState.selectedScope === "individual"
              ? "scope-selected"
              : "scope-not-selected"
          }`}
        >
          <img
            className="scope-image"
            src={require("../assets/individual.png")}
            alt="Individual"
            onClick={() => handleSetScopeChange("individual")}
          />
          <div className="scope-description">Individual</div>
        </div>
        <div
          className={`scope-option ${
            gameState.selectedScope === "community"
              ? "scope-selected"
              : "scope-not-selected"
          }`}
        >
          <img
            className="scope-image"
            src={require("../assets/community.jpg")}
            alt="Community"
            onClick={() => handleSetScopeChange("community")}
          />
          <div className="scope-description">Community</div>
        </div>
        <div
          className={`scope-option ${
            gameState.selectedScope === "global"
              ? "scope-selected"
              : "scope-not-selected"
          }`}
        >
          <img
            className="scope-image"
            src={require("../assets/global.jpg")}
            alt="Global"
            onClick={() => handleSetScopeChange("global")}
          />
          <div className="scope-description">Global</div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
