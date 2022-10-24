const readline = require('readline');
const fs = require('fs');

const addPlayer = () => {

	// Render header
	console.log(`
\n
======================================
            ADDING PLAYER
======================================
\n
	`);
	
	// Get input
	let name, surname, dob, isMale, clan;

	const reader = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

  reader.question('Enter player name: ', data => {
  	name = data;
  	reader.question('Enter player surname: ', data => {
			surname = data;
  		reader.question('Enter player DOB (YYYY/MM/DD): ', data => {
				let date = data.split('/');

				dob = new Date(date[0], date[1]-1, date[2]);
  			reader.question('Is player male? (true/false): ', data => {
					isMale = data;
  				reader.question('Enter player clan: ', data => {
						reader.close();
  					clan = data;
  					
  					// Write to file
  					const content = `${name},${surname},${dob},${isMale},${clan}\n`;
  					fs.appendFile('playerDB.txt', content, err => {
  						if (err) {
  							console.err;
  						};
  					});
  
						
						const entry = require('./index');
  					entry(`
============================================================================================
		✅ Added to database: 
		Name: ${name}
		Surname: ${surname}
		DOB: ${dob}
		isMale: ${isMale}
		clan: ${clan}
============================================================================================
  					`);
  				});
  			});
  		});
  	});
  });

};

module.exports = addPlayer;