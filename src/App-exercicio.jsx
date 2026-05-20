// 1 - Componente de Boas-Vindas: crie um componente que receba uma prop chamada nome e exiba a mensagem "Olá,[nome]".

// 2 - Crie um componente MensagemSecreta que exiba uma mensagem apenas se uma prop booleana mostrar for true. Chamar o componente 2 vezes, uma atribuindo valor true e outra false.

// 3 - Cartão de produto: Crie um componente CartaoProduto, que receba props como: nome, preco,, imagem e exiba as informações de forma estruturada. Criar 3 cartões de produtos com informações diferentes.

// 4 - Criar um componente contador. Neste componente deve ter um botão de incrementar, decrementar e limpar. Quando os botões forem clicados deverão disparar a ação em h1, devará fazer funções que são escritas. O botão deverá ser um componente separado do componente contador, e deverá ser utilizado neste. Estilizar o botão de formas diferentes para cada ação.

// 5 - Formulário de cadastro simples: crie um formulário com campos para nome, email e telefone. Ao submeter o formulário, exiba os dados digitados em um alert ou abaixo do formulário. Use useState para cada campo e manipule o evento de submissão do formulário.

import "./App.css"
import BoasVindas from "./componentes/Boas-Vindas/Boas-Vindas";
import MensagemSecreta from "./componentes/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./componentes/CartaoProduto/CartaoProduto";
import Contador2 from "./componentes/Contador2/Contador2";
import Formulario from "./componentes/Formulario/Formulario";


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
          imagem="./tecladomec.jpg"
        />

        <Contador2 />

        <Formulario />

      </div>

      

    </>
  );
}

export default App;