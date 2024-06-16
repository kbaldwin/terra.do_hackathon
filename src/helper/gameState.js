class GameState {
  constructor() {
    this.playing = true;
    this.score = 0;
    this.currentQuestion = 0;
    this.selectedScope = "individual";
    this.selectedEffort = "low";
    this.acted = false;
    this.resultText = "";
    this.actionCounts = {
      individual: 0,
      community: 0,
      global: 0,
      low: 0,
      medium: 0,
      high: 0,
    };
  }

  clone() {
    let clone = new GameState();
    return Object.assign(clone, this);
  }
}

export default GameState;
