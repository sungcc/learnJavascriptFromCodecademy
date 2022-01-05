const team = {
  _player: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11,
    },
    {
      firstName: 'Hannah',
      lastName: 'Chong',
      age: 2,
    },
    {
      firstName: 'Tobie',
      lastName: 'Cheung',
      age: 26,
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Winner',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Monopoly',
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],
  get games() {
    return this._games;
  },
  get player() {
    return this._player;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.player.push(player)
  },
  
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('WestStar', 99, 100);
team.addGame('FullHouse', 44, 50);
team.addGame('GodDamn', 99, 100);

console.log(team)

