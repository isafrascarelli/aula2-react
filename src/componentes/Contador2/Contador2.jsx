import { useState } from "react"
import "./Contador2.css"
import Botao from "../Botao/Botao"

const Contador2 = () => {

    let [contador, setContador] = useState(0)
    
    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    const limpar = () => {
        setContador(0)
    }

    return(
        <div>
            <h1>Contador: {contador}</h1>
                <div className="container-botao">
                <Botao nome = "incrementar" evento = {incrementar} cor = "blue"></Botao>
                <Botao nome = "decrementar" evento = {decrementar} cor = "green"></Botao>
                <Botao nome = "limpar" evento = {limpar} cor = "red"></Botao>
                </div>
        </div>
        
    )
}

export default Contador2