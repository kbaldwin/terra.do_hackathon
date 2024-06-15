class GameState {
  constructor() {
    this.score = 0;
    this.currentQuestion = 0;
    this.activeScope = "individual";
    this.activeEffort = "low";
    this.selectedScope = "individual";
    this.selectedEffort = "low";
  }

  clone() {
    let clone = new GameState();
    return Object.assign(clone, this);
  }
}

export default GameState;
