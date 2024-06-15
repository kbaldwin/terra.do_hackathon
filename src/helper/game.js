import Question from "./question";

class Game {
  constructor() {
    this.questions = [];
    this.loadQuestions();
  }

  loadQuestions() {
    const sampleQuestion = {
      text: "What can you do to reduce the impact of transportation?",
      options: [
        {
          scope: "individual",
          effort: "low",
          text: "Take public transportation more often.",
          score: 10,
          chanceOfSuccess: 90,
          onSuccess:
            "You chose to take public transportation more often. Great job!",
          onFailure:
            "Taking public transportation more often could have helped reduce the impact of transportation. Try again next time!",
        },
        {
          scope: "individual",
          effort: "medium",
          text: "Offset air travel with certified carbon offsets.",
          score: 20,
          chanceOfSuccess: 80,
          onSuccess:
            "You chose to offset air travel with certified carbon offsets. Well done!",
          onFailure:
            "Your offsets were just green-washing scams! Better luck next time. Keep trying!",
        },
        {
          scope: "individual",
          effort: "high",
          text: "Buy an EV.",
          score: 30,
          chanceOfSuccess: 30,
          onSuccess: "You chose to buy an EV. Excellent choice!",
          onFailure:
            "You realize buying an EV isn't affordable right now. Don't give up!",
        },
        {
          scope: "community",
          effort: "low",
          text: "Talk to your local government about public transportation.",
          score: 15,
          chanceOfSuccess: 85,
          onSuccess:
            "You talk to your local government representatives about funding more public transportation. Keep up the good work!",
          onFailure:
            "Due to budget cuts, your local government is not responsive to expanding public transportation. Keep trying!",
        },
        {
          scope: "community",
          effort: "medium",
          text: "Start a carpooling program at work.",
          score: 25,
          chanceOfSuccess: 65,
          onSuccess:
            "You influence your employer to create a carpooling program at work. Fantastic!",
          onFailure:
            "Your company is too focused on the bottom line to care about its employees and the environment. Don't give up!",
        },
        {
          scope: "community",
          effort: "high",
          text: "Organize a protest against a new highway.",
          score: 35,
          chanceOfSuccess: 15,
          onSuccess:
            "You rally several community members to protest against a new highway. Way to go!",
          onFailure:
            "Your neighbors actually support the new highway so choose not to join you. Keep pushing!",
        },
        {
          scope: "global",
          effort: "low",
          text: "Vote!",
          score: 5,
          chanceOfSuccess: 95,
          onSuccess:
            "You vote for candidates that prioritize the environment! Your voice matters!",
          onFailure:
            "Despite voting for a pro-environment candidate, other political issues were more pressing and the other candidate won. Keep participating!",
        },
        {
          scope: "global",
          effort: "medium",
          text: "Write an op-ed about vehicle emissions.",
          score: 15,
          chanceOfSuccess: 55,
          onSuccess:
            "Your op-ed about vehicle emissions was published and well-received. Well done!",
          onFailure:
            "Writing an op-ed about vehicle emissions could have made a difference, but it was not picked up in the local paper. Keep raising awareness!",
        },
        {
          scope: "global",
          effort: "high",
          text: "Start a global movement to ban cars.",
          score: 25,
          chanceOfSuccess: 5,
          onSuccess:
            "You chose to start a global movement to ban cars. Amazing!",
          onFailure:
            "Too many people rely on their cars and reject your movement. Keep trying to inspire change!",
        },
      ],
    };
    this.questions = [new Question(sampleQuestion)];
  }
}

export default Game;
