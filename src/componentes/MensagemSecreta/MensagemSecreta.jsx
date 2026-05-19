import "./MensagemSecreta.css"

const MensagemSecreta = ({ mostrar}) => {

    if(mostrar){
        return(
            <h2 className="mensagem">{mensagem ? "Mensagem super secreta" : ""}</h2>
        )
    }
    return null
}

export default MensagemSecreta