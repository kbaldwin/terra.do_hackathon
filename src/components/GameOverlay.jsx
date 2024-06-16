const GameOverlay = ({ gameState }) => {
  function additionalFeedback() {
    if (
      gameState.actionCounts.individual > gameState.actionCounts.community &&
      gameState.actionCounts.individual > gameState.actionCounts.global
    ) {
      return "You took lots of individual actions. That's great! But also consider joining others. That's how big changes are going to happen!";
    }

    if (
      gameState.actionCounts.global > gameState.actionCounts.individual &&
      gameState.actionCounts.global > gameState.actionCounts.community
    ) {
      return "You participated in lots of big actions. That's fantastic, but those actions can also be risky. Take some individual actions, too, to also feel concrete progress!";
    }

    if (
      gameState.actionCounts.low > gameState.actionCounts.medium &&
      gameState.actionCounts.low > gameState.actionCounts.high
    ) {
      return "You took lots of low effort actions. That's great! But also consider taking some high effort actions. They can be more impactful!";
    }

    if (
      gameState.actionCounts.high > gameState.actionCounts.low &&
      gameState.actionCounts.high > gameState.actionCounts.medium
    ) {
      return "You took lots of high effort actions. That's fantastic! But also consider taking some low effort actions. They can be more sustainable!";
    }
  }

  return (
    <div className="game-overlay">
      <h1>Thanks for playing.</h1>
      <br />
      <h2>{additionalFeedback()}</h2>
      <br />
      <h3>Your final score is {gameState.score}</h3>
    </div>
  );
};

export default GameOverlay;
