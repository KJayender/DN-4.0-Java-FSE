import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

const flag = true; // Change to false to see IndianPlayers component

function App() {
  return (
    <div>
      <h1>🏏 Cricket App 🏏</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;