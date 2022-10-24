const renderHome = (opt_message) => {
	// Render Header
	console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
	\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
 	The Highland Chapter of the Society of Traditional Scottish Games

			  	brings you...
\n\n
	   	  T H E   C A B E R T O S S   L E A G U E
\n\n
		     	  =======================
		       	     [a] - Add Player
		       	     [p] - Play Game
		       	     [x] - Exit
		     	  =======================

\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
${opt_message}
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
	`);
};

module.exports = renderHome;