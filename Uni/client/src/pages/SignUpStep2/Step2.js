import React, {useEffect, useContext, useState} from 'react'
import './step2.css'
import {AuthContext} from '../../context/authContext'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

function Step2() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')

    const {selectedDatas} = useContext(AuthContext)
    const history = useHistory()
    useEffect(() => {
      if(!selectedDatas){
        history.push('/Matrícula')
      }
    }, [history,selectedDatas])
    return (
        <div className="step2-container">
          <div className="step2-info">
            <h1 >Agora envie suas informações para análise</h1>
           <form >
             <div className="step2-inputs">
            <label htmlFor="curso">Curso selecionado:</label> <input id="curso" value={selectedDatas?.curso} disabled />
            </div>
            <div  className="step2-inputs">
            <label htmlFor="polo">Polo selecionado:</label>  <input id="polo"value={selectedDatas?.polo} disabled />
            </div>
            <div  className="step2-inputs">
            <label htmlFor="nome">Nome:</label>   <input value={name} onChange={(e) => setName(e.target.value) } id="nome" placeholder="Digite seu nome completo" />
            </div>
            <div  className="step2-inputs">
            <label htmlFor="cpf">CPF:</label>  <input value={cpf} onChange={(e) => setCpf(e.target.value) } id='cpf' placeholder="Digite seu cpf" />
            </div>
            <button>Enviar</button>
           </form>
           </div>
           <div className="signUpBackToHome"> <Link to="/Matrícula"> <i class="far fa-arrow-alt-circle-left"></i> </Link></div> 
        </div>
    )
}

export default Step2
