import Employee from "./Employee.js";

class Manager extends Employee {
  static #role = "Manager";

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return Manager.getRole();
  }
  
  static getRole() {
    return this.#role;
  }

  static generateQuestions() {
    const managerQuestions = [{
      type: "input",
      name: "officeNumber",
      message: this.generateMessage("office number")
    }];

    return super.generateQuestions().concat(managerQuestions);
  }

  static fromAnswers(answers) {
    return new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  }
}

export default Manager;