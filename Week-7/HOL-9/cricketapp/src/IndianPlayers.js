const T20players = ["Hardik", "Surya", "Rahul"];
const RanjiTrophyPlayers = ["Pujara", "Rahane"];

// Merge using ES6 spread
const allPlayers = [...T20players, ...RanjiTrophyPlayers];

// Destructure odd and even indexed players
const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);
const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

export default function IndianPlayers() {
  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>{evenPlayers.map(p => <li key={p}>{p}</li>)}</ul>

      <h2>Odd Team Players</h2>
      <ul>{oddPlayers.map(p => <li key={p}>{p}</li>)}</ul>
    </div>
  );
}