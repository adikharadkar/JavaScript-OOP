class TeamMember {
  name;
  role;
}

const member1 = new TeamMember();
member1.name = "Jethalal Gada";
member1.role = "Backend Developer";

const member2 = new TeamMember();
member2.name = "Tarak Mehta";
member2.role = "Frontend Developer";

const team = [];
team.push(member1);
team.push(member2);
console.log(team);
