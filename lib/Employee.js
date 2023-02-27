class Employee {
	static #role = "Employee";
	
	constructor(name, id, email){
		this.name = name;
		this.id = id;
		this.email = email;
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return Employee.getRole();
	}

	static getRole() {
		return this.#role;
	}

	static generateMessage(property) {
		return `Please enter the ${this.getRole().toLowerCase()}'s ${property}`
	}

	static generateQuestions() {
		return [{
			type: "input",
			name: "name",
			message: this.generateMessage("name")
		},{
			type: "input",
			name: "id",
			message: this.generateMessage("ID")
		},{
			type: "input",
			name: "email",
			message: this.generateMessage("email")
		}];
	}
}

export default Employee;