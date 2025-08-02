const players = [
  { name: "Virat", score: 85 },
  { name: "Rohit", score: 65 },
  { name: "Gill", score: 72 },
  { name: "Shreyas", score: 68 },
  { name: "Jadeja", score: 90 },
  { name: "Ashwin", score: 50 },
  { name: "Kuldeep", score: 55 },
  { name: "Bumrah", score: 82 },
  { name: "Shami", score: 60 },
  { name: "Pant", score: 75 },
  { name: "Rahul", score: 69 },
];

// Use map to display all players
const playerList = players.map(player => (
  <li key={player.name}>{player.name} - {player.score}</li>
));

// Use arrow function to filter players below 70
const lowScorers = players.filter(player => player.score < 70);

export default function ListofPlayers() {
  return (
    <div>
      <h2>All Players</h2>
      <ul>{playerList}</ul>

      <h3>Low Scorers</h3>
      <ul>
        {lowScorers.map(player => (
          <li key={player.name}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}