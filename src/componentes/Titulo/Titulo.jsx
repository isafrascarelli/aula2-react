import "./Titulo.css"

const Titulo = () => {
    let nome = 'Isabele';

    return(
        <div className="container">
            <h1 className="titulo-principal">
                Aula 2 - Trabalhando com useState
            </h1>
            <h2 className="subtitulo">
                Olá, meu nome é {nome}, e hoje vamos
                aprender um pouco sobre o Hook useState.
            </h2>
            <p className="paragrafo">
                O useState é um Hook fundamental do
                React que permite criar variáveis de 
                estado em comppnentes funcionais.
            </p>
            <p className="paragrafo">
                Ele retorna um array com a variável
                de estado (valor atual) e uma função 
                para atualizá-la, forçando o componente 
                a rendenizar novamente quando o valor muda.
            </p>
            <img src="reactHook.png" alt="imagem da logo do React e do Hook" className="imagem-titulo"/>
            <br />
        </div>
    )
}

export default Titulo