import Employee from "./Employee.js";

class Engineer extends Employee {
  static #role = "Engineer";

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  
  getGithub() {
    return this.github;
  }

  getRole() {
    return Engineer.getRole();
  }

  static getRole() {
    return this.#role;
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