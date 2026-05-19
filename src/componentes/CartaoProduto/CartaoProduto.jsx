import "./CartaoProduto.css"

const CartaoProduto = ({ nome, preco, imagem }) => {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />

      <h2>{nome}</h2>

      <p>{preco}</p>
    </div>
  );
}

export default CartaoProduto;