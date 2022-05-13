import "./App.css";
import Conversor from "./components/conversor";

function App() {
  return (
    <div className="App">
      <h1>Conversor da moeda</h1>
      <hr />
      <Conversor M1="Dolar" M2="Real" />
    </div>
  );
}

export default App;
