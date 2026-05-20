import "./Botao.css"

const Botao = ({nome, evento, cor}) => {
    return(
        <div>
            <button 
            className="btn-padrao"
            onClick={evento}
            style={{color: cor}}
            >
                {nome}
            </button>
        </div>
    )
}

export default Botao