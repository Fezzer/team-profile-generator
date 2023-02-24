const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Is an instance of the Employee class", () => {
  // Arrange
  const manager = new Manager();

  // Assert
  expect(manager).toBeInstanceOf(Employee);
});

test("Base class is initialised", () => {
  // Arrange
  const name = "Bob";
  const id = 1;
  const email = "bob@somewhere.com"
  
  // Act
  const manager = new Manager(name, id, email, "");

  // Assert
  expect(manager.name).toBe(name);
  expect(manager.id).toBe(id);
  expect(manager.email).toBe(email);
});

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
