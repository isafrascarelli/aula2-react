import "./TituloProps.css"

const TituloProps = ({descricao, cor, qtdAlunos, paragrafo}) => {
    return(
        <div>
            <h2 style={{color:cor}}>
                A disciplina de {descricao} você vai aprender o Framework React.
            </h2>
            { paragrafo ?
            <p className="paragrafo-props">
                Hoje a aula de {descricao} tem {qtdAlunos} alunos.
            </p>
            :""
            }
        </div>
    )
}

export default TituloProps