import "./App.css"
import Contador from "./componentes/Contador/Contador";
import Titulo from "./componentes/Titulo/Titulo";
import TituloProps from "./componentes/TituloProps/TituloProps";
import TituloUseState from "./componentes/TituloUseStates/TituloUseState";

const App = () => {
  return(

    <fragment>
      <Titulo />
      <TituloProps 
        descricao = "FrontEnd" 
        cor = "darkblue"
      />

      <TituloProps 
        cor = "red"
        qtdAlunos={30}
        paragrafo={true}
      />

      <TituloUseState cor = "orange"/>
      <TituloUseState cor = "pink"/>
      <Contador />

    </fragment>
  );
}

export default App