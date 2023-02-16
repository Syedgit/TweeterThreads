
const gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "axe",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};

// Retrieve the value of the weapon property
gimli.weapon;

Output
"axe"

We can also retrieve the same data with object bracket notation

