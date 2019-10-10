function buildMatchesTable(numberOfTeams) {

    const teams = new Array(numberOfTeams).fill(0).map((current,index) => index + 1);
    let roundNumber = 1;
    let round = [];
    let lastTeam = 0;
    let match = [];
    
    const pairRound = () => {
    for(let index = 0 ; round.length < teams.length/2; index++){
          team = [];
          if (index == 0 || teams[index] != lastTeam) {
            team.push(teams[index]);
            lastTeam = index + roundNumber + 1 ;
            if(lastTeam > teams.length ){
                lastTeam = (index+roundNumber+1) - index + (teams.length - (index+roundNumber+1));
            }
            team.push(lastTeam);
          } 
          if(team.length > 0) round.push(team);
        }
        return round;
      };
    for (let i = 1; i < teams.length; i++) {
        match.push(pairRound());
        roundNumber++;
        round =[];
    }
    return match;
    }

    1 2 3 4 5 6 7 8

    1 2     1 3   1 4   1 5
    3 4     2 4   2 5   2 6
    5 6     5 7   3 6   3 7
    7 8     6 8   7     4 8