import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import render from "./src/page-template.js";
import { writeDataToFileAsync } from "./src/fs-helpers.js";

const addEngineer = "Add a new engineer";
const addIntern = "Add a new intern";
const finish = "Finish building your team";

const nextQuestion = [{
  type: "list",
  name: "next",
  message: "What do you want to do next?",
  choices: [addEngineer, addIntern, finish]
}];

const employees = [];

async function init() {
  const managerQuestions = Manager.generateQuestions();
  const managerAnswers = await inquirer.prompt(managerQuestions);
  employees.push(Manager.fromAnswers(managerAnswers));

  let finished = false;

  while (true) {
    const nextAnswer = await inquirer.prompt(nextQuestion);
    let questions;
    let fromAnswers;

    switch (nextAnswer.next) {
      case addEngineer:
          questions = Engineer.generateQuestions();
          fromAnswers = Engineer.fromAnswers;
        break;
    
      case addIntern:
          questions = Intern.generateQuestions();
          fromAnswers = Intern.fromAnswers;
        break;
    
      default:
        finished = true;
        break;
    }

    if (finished)
      break;

    const answers = await inquirer.prompt(questions);
    employees.push(fromAnswers(answers));
  }

  const html = render(employees);
  await writeDataToFileAsync("./output", "team.html", html);
}

init();