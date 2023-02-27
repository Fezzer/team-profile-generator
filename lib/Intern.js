import Employee from "./Employee";

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  
  getSchool() {
    return this.school;
  }

  static getRole() {
    return "Intern";
  }

  static generateQuestions() {
    const internQuestions = [{
      type: "input",
      name: "school",
      message: this.generateMessage("school")
    }];

    return super.generateQuestions().concat(internQuestions);
  }

  static fromAnswers(answers) {
    return new Intern(answers.name, answers.id, answers.email, answers.school);
  }
}

export default Intern;