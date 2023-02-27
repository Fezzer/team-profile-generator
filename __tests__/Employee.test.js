import Employee from "../lib/Employee";

describe("Constructor", () => {
  it("can instantiate Employee instance", () => {
    // Act
    const result = new Employee();

    // Assert
    expect(typeof result).toBe("object");
  });

  it("can set name via constructor argument", () => {
    // Arrange
    const name = "Alice";

    // Act
    const result = new Employee(name);

    // Assert
    expect(result.name).toBe(name);
  });

  it("can set ID via constructor argument", () => {
    // Arrange
    const id = 100;

    // Act
    const result = new Employee("", id);

    // Assert
    expect(result.id).toBe(id);
  });

  it("can set email via constructor argument", () => {
    // Arrange
    const email = "test@test.com";

    // Act
    const result = new Employee("", 1, email);

    // Assert
    expect(result.email).toBe(email);
  });
});

describe("getName", () => {
  it("returns name", () => {
    // Arrange
    const name = "Alice";
    const employee = new Employee(name);

    // Act
    const result = employee.getName();

    // Assert
    expect(result).toBe(name);
  });
});

describe("getId", () => {
  it("returns id", () => {
    // Arrange
    const id = 100;
    const employee = new Employee("", id);

    // Act
    const result = employee.getId();

    // Assert
    expect(result).toBe(id);
  });
});

describe("getEmail", () => {
  it("returns email", () => {
    // Arrange
    const email = "test@test.com";
    const employee = new Employee("", 1, email);

    // Act
    const result = employee.getEmail();

    // Assert
    expect(result).toBe(email);
  });
});

describe("getRole", () => {
  it("returns \"Employee\"", () => {
    // Arrange
    
    // Act
    const result = Employee.getRole();
    
    // Assert
    expect(result).toBe("Employee");
  });
});

describe("generateMessage", () => {
  it.each`
  property  | message
  ${"name"} | ${"Please enter the employee's name"}
  ${"ID"}   | ${"Please enter the employee's ID"}
  `("returns the message using the specified property", ({ property, message }) => {
    // Arrange

    // Act
    const result = Employee.generateMessage(property);

    // Assert
    expect(result).toBe(message);
  });
});

describe("generateQuestions", () => {
  it("returns an array of questions 3 questions", () => {
    // Arrange

    // Act
    const result = Employee.generateQuestions();

    // Assert
    expect(result).toHaveLength(3);
  });

  it.each`
  index | type       | name       | message
  ${0}  | ${"input"} | ${"name"}  | ${"Please enter the employee's name"}
  ${1}  | ${"input"} | ${"id"}    | ${"Please enter the employee's ID"}
  ${2}  | ${"input"} | ${"email"} | ${"Please enter the employee's email"}
  `("returns questions with the specified properties", ({ index, type, name, message }) => {
    // Arrange

    // Act
    const result = Employee.generateQuestions()[index];

    // Assert
    expect(result.type).toBe(type);
    expect(result.name).toBe(name);
    expect(result.message).toBe(message);
  });
});