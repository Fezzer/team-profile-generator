import Employee from "../lib/Employee";
import Engineer from "../lib/Engineer";

describe("Constructor", () => {
  it("returns an object that inherits from Employee", () => {
    // Act
    const result = new Engineer();

    // Assert
    expect(result).toBeInstanceOf(Employee);
  });

  it("initialises the super class", () => {
    // Arrange
    const name = "Bob";
    const id = 1;
    const email = "bob@somewhere.com";

    // Act
    const engineer = new Engineer(name, id, email, "");

    // Assert
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
  });

  it("can set GitHUb account via constructor", () => {
    // Arrange
    const github = "GitHubUser";
    const engineer = new Engineer("", 1, "", github);

    // Act
    const result = engineer.github;

    // Assert
    expect(result).toBe(github);
  });
});

describe("getRole", () => {
  it('static returns "Engineer"', () => {
    // Arrange

    // Act
    const result = Engineer.getRole();

    // Assert
    expect(result).toBe("Engineer");
  });

  it('instance returns "Engineer"', () => {
    // Arrange
    const engineer = new Engineer("", 1, "", "");

    // Act
    const result = engineer.getRole();

    // Assert
    expect(result).toBe("Engineer");
  });
});

describe("getGithub", () => {
  it("returns github username", () => {
    // Arrange
    const github = "GitHubUser";
    const engineer = new Engineer("", 1, "", github);

    // Act
    const result = engineer.getGithub();

    // Assert
    expect(result).toBe(github);
  });
});

describe("generateMessage", () => {
  it("returns the message using the class's role", () => {
    // Arrange
    const property = "name";

    // Act
    const result = Engineer.generateMessage(property);

    // Assert
    expect(result).toBe("Please enter the engineer's name");
  });
});

describe("generateQuestions", () => {
  it("returns an array of length 4", () => {
    // Arrange

    // Act
    const result = Engineer.generateQuestions();

    // Assert
    expect(result).toHaveLength(4);
  });

  it("returns an array containing the questions from the super", () => {
    // Arrange
    const expected = Employee.generateQuestions().map(e => e.name);

    // Act
    const result = Engineer.generateQuestions();

    // Assert
    expect(result.map(e => e.name)).toEqual(expect.arrayContaining(expected));
  });

  it.each`
  index | type       | name               | message
  ${3}  | ${"input"} | ${"github"}  | ${"Please enter the engineer's github username"}
  `("returns questions with the specified properties", ({ index, type, name, message }) => {
    // Arrange

    // Act
    const result = Engineer.generateQuestions()[index];

    // Assert
    expect(result.type).toBe(type);
    expect(result.name).toBe(name);
    expect(result.message).toBe(message);
  });
});

describe("fromAnswers", () => {
  it("returns an Engineer object", () => {
    // Arrange
    const answers = {
      name: "",
      id: 0,
      email: "",
      github: ""
    };

    // Act
    const result = Engineer.fromAnswers(answers);

    // Assert
    expect(result).toBeInstanceOf(Engineer);
  });

  it("returns a object with the answer values set in the properties", () => {
    // Arrange
    const answers = {
      name: "Bob",
      id: 1,
      email: "bob@somewhere.com",
      github: "bobthecoder"
    };

    // Act
    const result = Engineer.fromAnswers(answers);

    // Assert
    expect(result.name).toBe(answers.name);
    expect(result.id).toBe(answers.id);
    expect(result.email).toBe(answers.email);
    expect(result.github).toBe(answers.github);
  });
});