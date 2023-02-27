import Employee from "./Employee";

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  
  static getRole() {
    return "Manager";
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