import { useState } from "react";
import Botao from "../Botao/Botao";
import "./Formulario.css"

const Formulario = () => {

    const [inputNome, setInputNome]= useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputTelefone, setInputTelefone] = useState("");

    const [nome, setNome]= useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const submeterFormulario = (evento) => {
        evento.preventDefault();

        setNome(inputNome);
        setEmail(inputEmail);
        setTelefone(inputTelefone);
    }

    return(
        <div>
            <form>
                <div className="input-container">
                    <label htmlFor="nome">Nome:</label>
                    <input 
                    type="text" 
                    id="nome"
                    placeholder="Digite o seu nome aqui:"
                    value={inputNome}
                    onChange={(e) => setInputNome(e.target.value)} />
                </div>
                <div className="input-container">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="email" 
                    id="email"
                    placeholder="Digite o seu e-mail aqui:" 
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="telefone">Telefone:</label>
                    <input 
                    type="tel" 
                    id="telefone"
                    placeholder="Digite o seu telefone aqui:"
                    value={inputTelefone} 
                    onChange={(e) => setInputTelefone(e.target.value)}/>
                </div>

                <Botao 
                    nome = "Submeter" 
                    cor = "blue"
                    evento = {submeterFormulario}
                >
                </Botao>
            </form>

        <div>
            <p>Nome:{nome}</p>
            <p>E-mail:{email}</p>
            <p>Telefone:{telefone}</p>
        </div>

        </div>
    )
}

export default Formulario