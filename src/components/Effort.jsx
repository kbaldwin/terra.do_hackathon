const Effort = ({ gameState, setGameState, question }) => {
  const handleSliderChange = (event) => {
    if (gameState.acted) {
      return;
    }

    const value = event.target.value;
    let effortLevel;

    if (value <= 33) {
      effortLevel = "low";
    } else if (value <= 66) {
      effortLevel = "medium";
    } else {
      effortLevel = "high";
    }

    let newGameState = gameState.clone();
    newGameState.selectedEffort = effortLevel;
    setGameState(newGameState);
  };

  const displayEffort = () => {
    const effort = gameState.selectedEffort;
    return effort.charAt(0).toUpperCase() + effort.slice(1);
  };

  const displayEffortRisk = () => {
    const effort = gameState.selectedEffort;
    switch (effort) {
      case "low":
        return "(low risk)";
      case "medium":
        return "(medium risk)";
      case "high":
        return "(high risk)";
      default:
        return null;
    }
  };

  return (
    <div>
      <h3>Select Your Effort:</h3>
      <input
        className="effort-slider"
        type="range"
        min="0"
        max="100"
        step="1"
        value={
          gameState.selectedEffort === "low"
            ? 0
            : gameState.selectedEffort === "medium"
            ? 50
            : 100
        }
        onChange={handleSliderChange}
      />
      <p
        className={`effort-label ${
          gameState.selectedEffort === "low"
            ? "effort-label-low"
            : gameState.selectedEffort === "medium"
            ? "effort-label-med"
            : gameState.selectedEffort === "high"
            ? "effort-label-high"
            : ""
        }`}
      >
        {displayEffort()}
      </p>
      <p className="effort-risk">{displayEffortRisk()}</p>
    </div>
  );
};

export default Effort;
