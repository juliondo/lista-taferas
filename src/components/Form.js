import { useState } from "react";

function Form() {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTask(e.target.value);
  }

  function handleChange(e) {
    e.preventDefault();
    setTask(e.target.vallue);
    setNewTask(...newTask, task);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  placeholder="Tarefas..." onChange={handleChange} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default Form;
