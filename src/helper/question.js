class Question {
  constructor(qData) {
    this.text = qData.text;
    this.options = qData.options;
    this.answer = qData.answer;
  }

  displayQuestion() {
    console.log(this.question);
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }

  getOption(scope, effort) {
    return this.options.find(
      (option) => option.scope === scope && option.effort === effort
    );
  }

  checkAnswer(userAnswer) {
    return userAnswer === this.answer;
  }
}
module.exports = Question;
