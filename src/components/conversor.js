<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react"

export default function Conversor({ M1, M2 }) {

  const [input, setInput] = useState('')
  const [moedaConvertida, setMoedaConvertida] = useState(0)
  const [cotacao, setCotacao] = useState(0)


  useEffect(() => {
    let url = `https://economia.awesomeapi.com.br/json/last/${M1}-${M2}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCotacao(data[`${M1}${M2}`].ask)
      }, [])
  })

  function handleChange(event) {
    event.preventDefault()
    setInput(event.target.value)
    console.log(input)
  }

  function Converter() {
    setMoedaConvertida((cotacao * parseFloat(input)).toFixed(2))
    console.log(moedaConvertida)
  }

  return (
    <div>
      <h4>Converter de {M1} para {M2}</h4>
      <input type="text"
        onChange={handleChange}
        placeholder="Digite o valor" />
      <input type="button" onClick={Converter} value="Converter" />
      <h1>{moedaConvertida === 0 ? null : `Valor: ${moedaConvertida}`}</h1>
    </div>
  )
}
>>>>>>> 6dc2723e281d5ceb20bc2d1da820ca875c39a287
