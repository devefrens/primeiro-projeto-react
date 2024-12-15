import { useState } from "react";
import './userCard.css';

function UserCard() {

    const [inputName, setInputName] = useState("");
    const [inputIdade, setInputIdade] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [resultado, setResultado] = useState("");

    function mostrarDados() {
        const dados = `Nome: ${inputName}\nIdade: ${inputIdade}\nE-mail: ${inputEmail}`;
        console.log(dados);
        setResultado(`Nome: ${inputName}<br>Idade: ${inputIdade}<br>E-mail: ${inputEmail}`);
        setInputName("");
        setInputIdade("");
        setInputEmail(""); 
    }

    return (
        <div>
            <div className="container-cards">
                <h1>Prática REACT + TypeScript</h1>
                <label htmlFor="#">Nome:</label>
                <input placeholder="Nome" value={inputName} onChange={(e) => setInputName(e.target.value)}/>

                <label htmlFor="#">Idade:</label>
                <input placeholder="Idade"  value={inputIdade} onChange={(e) => setInputIdade(e.target.value)} />

                <label htmlFor="#">E-mail:</label>
                <input placeholder="E-mail"  value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
                
                <button className="btn-enviar" onClick={mostrarDados}>Enviar</button>
            </div>

            <div className="resultado" dangerouslySetInnerHTML={{ __html: resultado }}> 
                
            </div>
        </div>        
    );

}

export default UserCard
