import { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  function newTarefa(e) {
    setTarefa(e.target.value);
  }

  function add(e) {
    e.preventDefault();

    setLista([tarefa, ...lista]);

    setTarefa("");
  }

  function excluir(index) {
    const newList = [...lista];
    newList.splice(index, 1);
    setLista(newList);
  }

  return (
    <div className="container">
      <h1 className="title">Tudo list</h1>

      <form>
        <input
          className="taskBox"
          onChange={(e) => newTarefa(e)}
          type="text"
          placeholder="Tarefas..."
          value={tarefa}
        />
        <button className="btn-add" onClick={add}>
          Adicionar
        </button>
      </form>
      <>
        {lista.map((item, index) => (
          <ul className="barraTarefa" key={index}>
            {item}
            <button className="btn-delete" onClick={() => excluir(index)}>
              Deletar
            </button>
          </ul>
        ))}
      </>
    </div>
  );
}

export default App;
