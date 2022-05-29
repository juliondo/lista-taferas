import PropTypes from "prop-types";

function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

Item.prototypes = {
  marca: PropTypes.string,
  ano_lancamento: PropTypes.number,
};

Item.defaultProps = {
  narca: "Faltou marca",
  ano_lancamento: 0,
};

export default Item;
