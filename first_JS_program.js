/*You'll build a program to manage a user's contacts in a JavaScriptfile called contacts.js.

To start, get and unzip basic program structure. It contains a directory called activity_2 which includes the contacts.js and contacts.html files, already linked to one another.

Each contact should have a first and last name. The program will handle an array of contacts and offer the user a choice of the two features:

View each contact
Quit
The program should run until the user chooses to exit. It must also use objects to manage contacts.

Two initial contacts to put in the program are:

John Smith
Jane Doe
To get maximum points, add the ability for the user to enter a new contact that will be inserted in the table!

Make sure you pay attention to proper naming and indentation conventions, as they are part of the grading criteria!
*/

let programStart = 'Welcome to your contacts manager!';
let commandsList =
	'Insert 1: List contacts \nInsert 2: Add a contact \nInsert 0: Quit';
let wrongInput =
	'This number is not associated with a command.' + '\n' + commandsList;
console.log(programStart);
console.log(commandsList);

let contacts = [
	{
		firstName: 'John',
		lastName: 'Smith'
	},
	{
		firstName: 'Jane',
		lastName: 'Doe'
	}
];

let userInput = prompt(
	'Please follow the instructions from the console and insert a number'
);

while (userInput != 0) {
	if (userInput == 1) {
		console.log('You inserted number: ' + userInput);
		console.log("Here's the list of all your contacts: ");
		for (let contact in contacts) {
			console.log(
				'Last Name: ' +
					contacts[contact].firstName +
					' First Name: ' +
					contacts[contact].lastName
			);
		}
		console.log(commandsList);
	} else if (userInput == 2) {
		console.log(
			'You inserted number: ' +
				userInput +
				"\nPlease insert contact's name in the first box\nand last name in the second."
		);
		let contact = { firstName: '', lastName: '' };
		contact.firstName = prompt('Your Name');
		contact.lastName = prompt('Last Name');
		if (contact.firstName && contact.lastName) {
			contacts.push(contact);
			console.log('Contact has been added!');
			console.log(commandsList);
		} else if (contact.firstName == null || contact.lastName == null) {
			console.log(
				'You have not entered all the necessary details! \nName and last name are mandatory!'
			);
			console.log(commandsList);
		}
	} else if (userInput == null) {
		console.log('If you wish to exit, please insert 0.');
		console.log(commandsList);
	} else {
		console.log(
			'You inserted number: ' +
				userInput +
				' Your account manager is sorry, but the character you entred does not correspond to any command'
		);
		console.log(commandsList);
	}
	userInput = prompt(
		'Please follow the instructions from the console and insert a number'
	);
}
