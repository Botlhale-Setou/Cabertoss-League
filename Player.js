class Player {
	constructor(name = 'N/A', surname = 'N/A', dob = 'N/A', isMale = true, clan = 'N/A', scores = [0, 0, 0]) {
		this.name = name;
		this.surname = surname;
		this.dob = dob;
		this.isMale = isMale;
		this.clan = clan;
		this.scores = scores;
	}
};

module.exports = Player;