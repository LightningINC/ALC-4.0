function buildMatchesTable(numberOfTeams) {
  const teams = new Array(numberOfTeams)
    .fill(0)
    .map((current, index) => index + 1);
  let roundNumber = 1;
  let round = [];
  let lastTeam = 0;
  let match = [];
  let roundSet = new Set();
  const pairRound = () => {
    for (let index = 0; round.length < teams.length / 2 ; index++) {
      team = [];
      let firstTeam = teams[index];
      let secondTeam;
      if (!roundSet.has(firstTeam)) {
        roundSet.add(teams[index]);
        team.push(teams[index]);
        teams[index + roundNumber] == undefined
          ? (secondTeam = teams[index + 1])
          : (secondTeam = teams[index + roundNumber]);
        team.push(secondTeam);
        roundSet.add(secondTeam);
      }
      if (team.length > 0) round.push(team);

    }
    roundSet.clear();
    return round;
  };
  for (let i = 1; i < teams.length; i++) {
    match.push(pairRound());
    roundNumber++;
    round = [];
  }
  return match;
}
