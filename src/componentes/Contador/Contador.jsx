import { useState } from "react";
import "./Contador.css"

const Contador = () => {

    let [count, setCount] = useState(0);
    const incrementar = () =>{
        setCount(count + 1);
    }

    return(
        <div>
            <h3 className="titulo-menor">Contador:{count}</h3>
            <button className="btn-incrementar" onClick={() => incrementar()}>Incremento</button>
        </div>
    )
}

export default Contador