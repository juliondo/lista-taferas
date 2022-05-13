import { useEffect, useState } from "react";

export default function Conversor({ M1, M2 }) {
  const [input, setInput] = useState("");
  const [moedaConvertida, setMoedaConvertida] = useState(0);
  const [cotacao, setCotacao] = useState(0);

  useEffect(() => {
    let url = `https://economia.awesomeapi.com.br/json/last/${M1}-${M2}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCotacao(data[`${M1}${M2}`].ask);
      }, []);
  });

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function Converter() {
    setMoedaConvertida((cotacao * parseFloat(input)).toFixed(2));
  }

  return (
    <div className="valorMoeda">
      <h4>
        {M1} - {M2}
      </h4>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Digite o valor!"
      />
      <input
        className="butao"
        type="button"
        onClick={Converter}
        value="Converter"
      />
      <h1>{moedaConvertida === 0 ? null : `valor: ${moedaConvertida}`}</h1>
    </div>
  );
}
