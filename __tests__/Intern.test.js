import Employee from "../lib/Employee";
import Intern from "../lib/Intern";

describe("Constructor", () => {
  it("returns an object that inherits from Employee", () => {
    // Act
    const result = new Intern();

    // Assert
    expect(result).toBeInstanceOf(Employee);
  });

  it("initialises the super class", () => {
    // Arrange
    const name = "Bob";
    const id = 1;
    const email = "bob@somewhere.com";

    // Act
    const intern = new Intern(name, id, email, "");

    // Assert
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
  });

  it("can set school via constructor", () => {
    // Arrange
    const school = "UCLA";
    const intern = new Intern("", 1, "", school);

    // Act
    const result = intern.school;

    // Assert
    expect(result).toBe(school);
  });
});

describe("getRole", () => {
  it('returns "Intern"', () => {
    // Arrange

    // Act
    const result = Intern.getRole();

    // Assert
    expect(result).toBe("Intern");
  });
});

describe("getSchool", () => {
  it("returns school", () => {
    // Arrange
    const school = "UCLA";
    const intern = new Intern("", 1, "", school);

    // Act
    const result  =intern.getSchool();

    // Assert
    expect(result).toBe(school);
  });
});

describe("generateMessage", () => {
  it("returns the message using the class's role", () => {
    // Arrange
    const property = "name";

    // Act
    const result = Intern.generateMessage(property);

    // Assert
    expect(result).toBe("Please enter the intern's name");
  });
});

describe("generateQuestions", () => {
  it("returns an array of length 4", () => {
    // Arrange

    // Act
    const result = Intern.generateQuestions();

    // Assert
    expect(result).toHaveLength(4);
  });

  it("returns an array containing the questions from the super", () => {
    // Arrange
    const expected = Employee.generateQuestions().map(e => e.name);

    // Act
    const result = Intern.generateQuestions();

    // Assert
    expect(result.map(e => e.name)).toEqual(expect.arrayContaining(expected));
  });

  it.each`
  index | type       | name               | message
  ${3}  | ${"input"} | ${"school"}  | ${"Please enter the intern's school"}
  `("returns questions with the specified properties", ({ index, type, name, message }) => {
    // Arrange

    // Act
    const result = Intern.generateQuestions()[index];

    // Assert
    expect(result.type).toBe(type);
    expect(result.name).toBe(name);
    expect(result.message).toBe(message);
  });
});

describe("fromAnswers", () => {
  it("returns an Intern object", () => {
    // Arrange
    const answers = {
      name: "",
      id: 0,
      email: "",
      github: ""
    };

    // Act
    const result = Intern.fromAnswers(answers);

    // Assert
    expect(result).toBeInstanceOf(Intern);
  });

  it("returns a object with the answer values set in the properties", () => {
    // Arrange
    const answers = {
      name: "Bob",
      id: 1,
      email: "bob@somewhere.com",
      school: "School for the Gifted"
    };

    // Act
    const result = Intern.fromAnswers(answers);

    // Assert
    expect(result.name).toBe(answers.name);
    expect(result.id).toBe(answers.id);
    expect(result.email).toBe(answers.email);
    expect(result.school).toBe(answers.school);
  });
});