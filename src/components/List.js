import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1996} />
        <Item marca="Fiar" ano_lancamento={1998} />
        <Item marca="Renault" />
        <Item marca="Chevrolet" ano_lancamento={1999} />
      </ul>
    </>
  );
}

export default List;
