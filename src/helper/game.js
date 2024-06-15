import Question from "./question";

class Game {
  constructor() {
    this.score = 0;
    this.questions = [];
    this.won = false;
    this.loadQuestions();
  }

  loadQuestions() {
    const sampleQuestion = {
      text: "What can you do to reduce the impact of transportation?",
      options: {
        individual: {
          low: "Take public transportation more often.",
          medium: "Drive a car with better fuel efficiency.",
          high: "Ride a bike or walk.",
        },
        community: ["Drive a car", "Take a bus", "Ride a bike", "Fly a plane"],
        global: ["Drive a car", "Take a bus", "Ride a bike", "Fly a plane"],
      },
      answer: "Paris",
    };
    this.questions = [new Question(sampleQuestion)];
  }

  setPositions() {
    this.cells.forEach((row, rowIndex) => {
      row.forEach((tile, columnIndex) => {
        tile.oldRow = tile.row;
        tile.oldColumn = tile.column;
        tile.row = rowIndex;
        tile.column = columnIndex;
        tile.markForDeletion = false;
      });
    });
  }
}

export default Game;
