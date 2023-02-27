import Employee from "../lib/Employee";
import Manager from "../lib/Manager";

describe("Constructor", () => {
  it("returns an object that inherits from Employee", () => {
    // Act
    const result = new Manager();

    // Assert
    expect(result).toBeInstanceOf(Employee);
  });

  it("initialises the base class", () => {
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
    const manager = new Manager();

    // Act
    const result = manager.getRole();

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
