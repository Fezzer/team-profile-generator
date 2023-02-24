const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Is instance of the Employee class", () =>{
  // Arrange
  const intern = new Intern();

  // Assert
  expect(intern).toBeInstanceOf(Employee);
});

test("Base class is initialised", () => {
  // Arrange
  const name = "Bob";
  const id = 1;
  const email = "bob@somewhere.com"
  
  // Act
  const intern = new Intern(name, id, email, "");

  // Assert
  expect(intern.name).toBe(name);
  expect(intern.id).toBe(id);
  expect(intern.email).toBe(email);
});

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
