const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Is instance of the Employee class", () =>{
  // Arrange
  const engineer = new Engineer();

  // Assert
  expect(engineer).toBeInstanceOf(Employee);
});

test("Base class is initialised", () => {
  // Arrange
  const name = "Bob";
  const id = 1;
  const email = "bob@somewhere.com"
  
  // Act
  const engineer = new Engineer(name, id, email, "");

  // Assert
  expect(engineer.name).toBe(name);
  expect(engineer.id).toBe(id);
  expect(engineer.email).toBe(email);
});

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
