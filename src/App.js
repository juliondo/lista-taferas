import './App.css';
import Conversor from './components/conversor';

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <Conversor M1="USD" M2="BRL" />
      <Conversor M1="BRL" M2="USD" />
      <Conversor M1="BRL" M2="EUR" />
      <Conversor M1="EUR" M2="BRL" />
      <Conversor M1="PHP" M2="BRL" />
    </div>
  );
}
export default App;