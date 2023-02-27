import Employee from "../lib/Employee";
import Intern from "../lib/Intern";

describe("Constructor", () => {
  it("returns an object that inherits from Employee", () => {
    // Act
    const result = new Intern();

    // Assert
    expect(result).toBeInstanceOf(Employee);
  });

  it("initialises the base class", () => {
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
    const intern = new Intern();

    // Act
    const result = intern.getRole();

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
