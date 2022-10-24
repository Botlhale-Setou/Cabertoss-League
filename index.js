// Cabertoss-League

const readline = require('readline');
const renderHome = require('./renderHome.js');
const addPlayer = require('./addPlayer.js');
const playGame = require('./playGame.js');

const entry = (opt_message) => {
	// Render intro page
	renderHome(opt_message);

	// Get user input
	const reader = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	
	reader.question('Enter option:	', data => {

		switch (data.toLowerCase()) {
			case 'a':
				reader.close();
				addPlayer();
				break;
	
			case 'p':
				reader.close();
				playGame();
				break;
			
			case 'x':
				process.exit();
	
			default:
				reader.close();
				entry(`
***************************************************************
    Invalid input - please try again
***************************************************************
				`);
				break;
		};

	});
	
};

entry(`
***************************************************************
Important information will be displayed here
***************************************************************
`);

module.exports = entry;