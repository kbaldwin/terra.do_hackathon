class GameState {
  constructor() {
    this.playing = true;
    this.score = 0;
    this.currentQuestion = 0;
    this.selectedScope = "individual";
    this.selectedEffort = "low";
    this.acted = false;
    this.resultText = "";
  }

  clone() {
    let clone = new GameState();
    return Object.assign(clone, this);
  }
}

export default GameState;
