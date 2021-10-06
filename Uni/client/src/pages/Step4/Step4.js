import React, {useEffect,useContext, useState} from 'react'
import {AuthContext} from '../../context/authContext'
import { Link, useHistory } from "react-router-dom";
import './step4.css'

function Step4() {
    const history = useHistory()
    const {step3Form} = useContext(AuthContext)
    const [emAnalise] = useState(false)
    const [pendente] = useState(false)
    const [aprovada] = useState(true)
    //const preço = step3Form.curso === "Eja-Medio" ? 'R$ 1250,00' : "R$ 1650,00"

       useEffect(() => {
         if(!step3Form){
             history.push('/MatrículaStep3')
            
         }
        // console.log(step3Form)
      
       }, [history,step3Form])
    
    
    return (
        <div className="step4-container">

            <div className="steps">
                <span><strong>4/4</strong></span>
            </div>

            <h1>Estamos quase terminando !</h1> 
            <div className="step4-info">
                <div className="step4-info-container">
                 <div className="step4-info-wrapper">
                   <div className="analise-documentos">
                       <span>Situação dos documentos:</span> {emAnalise && <span className="red">Em análise</span>}
                        {pendente && <span className="red">Documentação pendente, deverá enviar até o final do curso</span>}
                        {aprovada && <span className="green">Tudo certo !</span>}
                       <span>{emAnalise ? 'Será enviado para o seu email informações para acompanhar a matrícula' : 'Após a realização do pagamento receberá sua senha no email'}</span>

                       {(pendente || aprovada) &&
                        <button>Gerar boleto</button>
                            
                       
                        
                        }
                   </div>

                   <div className="step4-user-info">
                      <span> Nome: {step3Form.nome} </span>
                      <span> Curso: {step3Form.curso} </span> 
                      <span> Opção: {step3Form.opção} </span>
                      <span> Polo: {step3Form.polo} </span>
                     

                   </div>
                   </div>
                  
                </div>
             
            </div>

            <div className="signUpBackToHome"> <Link to="/"> <i class="far fa-arrow-alt-circle-left"></i> </Link></div>
        </div>
    )
}

export default Step4
