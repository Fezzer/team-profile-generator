import Employee from "../lib/Employee";
import Engineer from "../lib/Engineer";

describe("Constructor", () => {
  it("returns an object that inherits from Employee", () => {
    // Act
    const result = new Engineer();

    // Assert
    expect(result).toBeInstanceOf(Employee);
  });

  it("initialises the base class", () => {
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
  it('returns "Engineer"', () => {
    // Arrange
    const engineer = new Engineer();

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
