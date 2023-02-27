import Employee from "./Employee";

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  
  getGithub() {
    return this.github;
  }

  static getRole() {
    return "Engineer";
  }

  static generateQuestions() {
    const engineerQuestions = [{
      type: "input",
      name: "github",
      message: this.generateMessage("github username")
    }];

    return super.generateQuestions().concat(engineerQuestions);
  }

  static fromAnswers(answers) {
    return new Engineer(answers.name, answers.id, answers.email, answers.github);
  }
}

export default Engineer;