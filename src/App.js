<<<<<<< HEAD
import "./App.css";
import Conversor from "./components/conversor";
=======
import './App.css';
import Conversor from './components/conversor';
>>>>>>> 6dc2723e281d5ceb20bc2d1da820ca875c39a287

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <h1>Conversor da moeda</h1>
      <hr />
      <Conversor M1="Dolar" M2="Real" />
=======
      <h1>Conversor de moedas</h1>
      <Conversor M1="USD" M2="BRL" />
      <Conversor M1="BRL" M2="USD" />
      <Conversor M1="BRL" M2="EUR" />
      <Conversor M1="EUR" M2="BRL" />
      <Conversor M1="PHP" M2="BRL" />
>>>>>>> 6dc2723e281d5ceb20bc2d1da820ca875c39a287
    </div>
  );
}
export default App;