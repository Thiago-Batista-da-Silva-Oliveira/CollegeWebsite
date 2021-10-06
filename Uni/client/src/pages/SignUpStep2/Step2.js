import React, {useEffect, useContext, useState} from 'react'
import './step2.css'
import {AuthContext} from '../../context/authContext'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

function Step2() {
  const {selectedDatas,setStep2Form,step2Form} = useContext(AuthContext)

    const [nome, setNome] = useState(step2Form?.nome ? step2Form?.nome :'')
    const [nascimento, setNascimento] = useState(step2Form?.nascimento ? step2Form?.nascimento :'')
    const [cpf, setCpf] = useState(step2Form?.cpf ? step2Form?.cpf :'')
    const [email, setEmail] = useState(step2Form?.email ? step2Form?.email :'')
    const [sexo, setSexo] = useState(step2Form?.sexo ? step2Form?.sexo : 'Masculino')
    const [estadoCivil, setEstadoCivil] = useState(step2Form?.estadoCivil ? step2Form?.estadoCivil :'Solteiro')
    const [telefone, setTelefone] = useState(step2Form?.telefone ? step2Form?.telefone :'')
    const [bairro, setBairro] = useState(step2Form?.bairro ? step2Form?.bairro :'')
    const [cidade, setCidade] = useState(step2Form?.cidade ? step2Form?.cidade :'')
    const [estado, setEstado] = useState(step2Form?.estado ? step2Form?.estado :'')
    const [endereço, setEndereço] = useState(step2Form?.endereço ? step2Form?.endereço :'')
    const [cep, setCep] = useState(step2Form?.cep ? step2Form?.cep :'')
    const [orgaoEmissor, setOrgaoEmissor] = useState(step2Form?.orgaoEmissor ? step2Form?.orgaoEmissor : '')
    const [identidade, setIdentidade] = useState(step2Form?.identidade ? step2Form?.identidade :'')
  

    const history = useHistory()
    useEffect(() => {
      if(!selectedDatas){
        history.push('/Matrícula')
      
      }
      console.log(selectedDatas)
    }, [history,selectedDatas])

    const handleSubmit = (e) => {
        e.preventDefault()

        const step2Data = {nome, nascimento, cpf, email, sexo, estadoCivil, telefone, bairro, cidade, estado, endereço, cep,identidade,orgaoEmissor}

        const datas = {...step2Data, ...selectedDatas}
        localStorage.setItem('step2Form', JSON.stringify(datas))


        setStep2Form(JSON.parse(localStorage.getItem('step2Form')))

        history.push('/MatrículaStep3')
    }
    return (
        <div className="step2-container">
           <div className="steps">
                <span><strong>2/4</strong></span>
            </div>
          <div className="step2-info">
            <h1>Preencha o formulário para prosseguir</h1>
           <form onSubmit={handleSubmit} >

           <div className="form-container"> 
             <div className="flex1"> 
            <div  className="step2-inputs">
            <label htmlFor="nome">Nome:</label>   <input required value={nome} onChange={(e) => setNome(e.target.value) } id="nome" placeholder="Digite seu nome completo" />
            </div>
            <div  className="step2-inputs">
            <label htmlFor="nome">Data de Nascimento:</label>   <input type="date" required value={nascimento} onChange={(e) => setNascimento(e.target.value) } id="nome"  />
            </div>
            <div  className="step2-inputs">
            <label htmlFor="sexo">Sexo:</label>  
            <select value={sexo} onChange={(e) => setSexo(e.target.value) } id="sexo">
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
            </div>

            <div  className="step2-inputs">
            <label htmlFor="estadoCivil">Estado Civil:</label>  
            <select value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value) } id="estadoCivil">
              <option>Solteiro</option>
              <option>Casado</option>
              <option>Separado</option>
              <option>Divorciado</option>
              <option>Viúvo</option>
             
            </select>
            </div>
        
            <div  className="step2-inputs">
            <label htmlFor="email">Email:</label>  <input required value={email} onChange={(e) => setEmail(e.target.value) } id='email' placeholder="Digite seu email" />
            </div> 

            <div  className="step2-inputs">
                 <label htmlFor="telefone">Telefone:</label>  <input required value={telefone} onChange={(e) => setTelefone(e.target.value) } id='telefone' placeholder="Digite seu número" />
                 </div>
            
                 <div  className="step2-inputs">
                  <label htmlFor="cpf">CPF:</label>  <input required value={cpf} onChange={(e) => setCpf(e.target.value) } id='cpf' placeholder="Digite seu cpf" />
                  </div>


            </div>
               <div className="flex1 ml-5">

                 <div  className="step2-inputs">
                  <label htmlFor="identidade">Identidade:</label>  <input required value={identidade} onChange={(e) => setIdentidade(e.target.value) } id='identidade' placeholder="Digite seu RG" />
                  </div>
                  <div  className="step2-inputs">
                  <label htmlFor="emissor">Órgão Emissor:</label>  <input required value={orgaoEmissor} onChange={(e) => setOrgaoEmissor(e.target.value) } id='emissor' placeholder="Órgão emissor" />
                  </div>
                  <div  className="step2-inputs">
                  <label htmlFor="bairro">Bairro:</label>  <input required value={bairro} onChange={(e) => setBairro(e.target.value) } id='bairro' placeholder="bairro" />
                  </div>

                  <div  className="step2-inputs">
                  <label htmlFor="endereço">Cidade:</label>  <input required value={cidade} onChange={(e) => setCidade(e.target.value) } id='cidade' placeholder="cidade" />
                  </div>

                  <div  className="step2-inputs">
                  <label htmlFor="estado">Estado:</label>  <input required value={estado} onChange={(e) => setEstado(e.target.value) } id="estado" placeholder="estado" />
                  </div>

                  <div  className="step2-inputs">
                  <label htmlFor="endereço">Endereço:</label>  <input required value={endereço} onChange={(e) => setEndereço(e.target.value) } id="endereço" placeholder="Digite seu endereço" />
                  </div>

                  <div  className="step2-inputs">
                  <label htmlFor="cep">CEP:</label>  <input required value={cep} onChange={(e) => setCep(e.target.value) } id="cep" placeholder="Digite seu CEP" />
                  </div>

                 
               
               
            </div>
            </div>
              

            <button type="submit">Enviar</button>
       
               
           </form>
           </div>
           <div className="signUpBackToHome"> <Link to="/Matrícula"> <i class="far fa-arrow-alt-circle-left"></i> </Link></div> 
        </div>
    )
}

export default Step2
