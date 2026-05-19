//Componente de Boas-Vindas: crie um componente que receba uma prop chamada nome e exiba a mensagem "Olá,[nome]".

//Crie um componente MensagemSecreta que exiba uma mensagem apenas se uma prop booleana mostrar for true. Chamar o componente 2 vezes, uma atribuindo valor true e outra false.

//Cartão de produto: Crie um componente CartaoProduto, que receba props como: nome, preco,, imagem e exiba as informações de forma estruturada. Criar 3 cartões de produtos com informações diferentes.

import "./App.css"
import BoasVindas from "./componentes/Boas-Vindas/Boas-Vindas";
import MensagemSecreta from "./componentes/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./componentes/CartaoProduto/CartaoProduto";

const App = () => {
  return(
    <>
      <BoasVindas nome="Chico Chica" />

      <MensagemSecreta mensagem={true} />
      <MensagemSecreta />

      <div className="container-cards">
        <CartaoProduto
          nome="Notebook Gamer"
          preco="R$ 4.500"
          imagem="./pcgamer.webp"
        />
        <CartaoProduto
          nome="Mouse RGB"
          preco="R$ 150"
          imagem="./mouse.webp"
        />
        <CartaoProduto
          nome="Teclado Mecânico"
          preco="R$ 320"
          imagem= "./tecladomec.jpg"
        />
      </div>
    </>
  );
}

export default App;