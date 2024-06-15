class Question {
  constructor(qData) {
    this.text = qData.text;
    this.options = qData.options;
  }

  getOption(scope, effort) {
    return this.options.find(
      (option) => option.scope === scope && option.effort === effort
    );
  }
}
module.exports = Question;
