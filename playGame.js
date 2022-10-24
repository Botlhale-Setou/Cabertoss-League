const fs = require('fs');
const Player = require('./Player.js');
const capture = require('./recordThrows.js');

const playGame = () => {

	// Render header
	console.log(`
\n
======================================
   	Extracting from database...
======================================
\n
	`);

	// Read from file
	fs.readFile('playerDB.txt', 'utf8', (err, data) => {
		// Manage error case
		if (err) console.err;

		// Store file data into array of player objects (pDB1)
		pDB1 = [];
		const pDB3 = data.split('\n');

		let pDB2;
		for (let i = 0; i < pDB3.length-1; i++) {
			pDB2 = pDB3[i].split(',');

			const tempPlayer = new Player(pDB2[0], pDB2[1], pDB2[2], pDB2[3], pDB2[4], [-1, -1, -1]);
			pDB1.push(tempPlayer);		
		};

		console.log('Player database successfully imported as:');
		console.log(pDB1);

		// Sort pDB1
		pDB1.sort((a, b) => {
			return new Date(b.dob) - new Date(a.dob);
		});
		
		console.log('\n\n\nSorted player database:');
		console.log(pDB1);

		// Record throws
		capture(pDB1);
	});


};

module.exports = playGame;