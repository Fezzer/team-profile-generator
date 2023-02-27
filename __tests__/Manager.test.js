import Employee from "../lib/Employee";
import Manager from "../lib/Manager";

describe("Constructor", () => {
  it("returns an object that inherits from Employee", () => {
    // Act
    const result = new Manager();

    // Assert
    expect(result).toBeInstanceOf(Employee);
  });

  it("initialises the super class", () => {
    // Arrange
    const name = "Bob";
    const id = 1;
    const email = "bob@somewhere.com";

    // Act
    const result = new Manager(name, id, email, "");

    // Assert
    expect(result.name).toBe(name);
    expect(result.id).toBe(id);
    expect(result.email).toBe(email);
  });

  it("can set office number via constructor argument", () => {
    // Arrange
    const officeNumber = 100;

    // Act
    const result = new Manager("", 1, "", officeNumber);

    expect(result.officeNumber).toBe(officeNumber);
  });
});

describe("getRole", () => {
  it('returns "Manager"', () => {
    // Arrange

    // Act
    const result = Manager.getRole();

    // Assert
    expect(result).toBe("Manager");
  });
});

describe("getOffice", () => {
  it("returns office number", () => {
    // Arrange
    const officeNumber = 100;
    const manager = new Manager("", 1, "", officeNumber);

    // Act
    const result = manager.getOfficeNumber();

    // Assert
    expect(result).toBe(officeNumber);
  });
});

describe("generateMessage", () => {
  it("returns the message using the class's role", () => {
    // Arrange
    const property = "name";
    // Act
    const result = Manager.generateMessage(property);

    // Assert
    expect(result).toBe("Please enter the manager's name");
  });
});

describe("generateQuestions", () => {
  it("returns an array of length 4", () => {
    // Arrange

    // Act
    const result = Manager.generateQuestions();

    // Assert
    expect(result).toHaveLength(4);
  });

  it("returns an array containing the questions from the super", () => {
    // Arrange
    const expected = Employee.generateQuestions().map(e => e.name);

    // Act
    const result = Manager.generateQuestions();

    // Assert
    expect(result.map(e => e.name)).toEqual(expect.arrayContaining(expected));
  });

  it.each`
  index | type       | name               | message
  ${3}  | ${"input"} | ${"officeNumber"}  | ${"Please enter the manager's office number"}
  `("returns questions with the specified properties", ({ index, type, name, message }) => {
    // Arrange

    // Act
    const result = Manager.generateQuestions()[index];

    // Assert
    expect(result.type).toBe(type);
    expect(result.name).toBe(name);
    expect(result.message).toBe(message);
  });
});

describe("fromAnswers", () => {
  it("returns a Manager object", () => {
    // Arrange
    const answers = {
      name: "",
      id: 0,
      email: "",
      officeNumber: ""
    };

    // Act
    const result = Manager.fromAnswers(answers);

    // Assert
    expect(result).toBeInstanceOf(Manager);
  });

  it("returns a object with the answer values set in the properties", () => {
    // Arrange
    const answers = {
      name: "Bob",
      id: 1,
      email: "bob@somewhere.com",
      officeNumber: "2a"
    };

    // Act
    const result = Manager.fromAnswers(answers);

    // Assert
    expect(result.name).toBe(answers.name);
    expect(result.id).toBe(answers.id);
    expect(result.email).toBe(answers.email);
    expect(result.officeNumber).toBe(answers.officeNumber);
  });
});