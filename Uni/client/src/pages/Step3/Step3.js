import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./step3.css";
import { AuthContext } from "../../context/authContext";
import { useHistory } from "react-router-dom";



const initialState = { historico: {}, RG: {}, CPF: {}, certidao: {}, comprovanteResidencia: {} };

function Step3() {
  
  const [filesData, setFilesData] = useState(initialState)

  const history = useHistory();
  const { selectedDatas, step2Form, setStep3Form } =
    useContext(AuthContext);
  /*const [historico, setHistorico] = useState()
  const [RG, setRG] = useState ()
   const [CPF, setCPF] = useState()
  const [certidao, setCertidao] = useState()
  const [comprovanteResidencia, setComprovanteResidencia] = useState() */

  useEffect(() => {
    if (!step2Form) {
      history.push("/MatrículaStep2");
    }
    console.log(step2Form);
  }, [history, step2Form]);

  /*  const handleSubmit = (e) => {
        e.preventDefault()

        const dataStep3 = {historico, RG, CPF, certidao, comprovanteResidencia}

        const datas ={...selectedDatas, ...step2Form, ...dataStep3}

        localStorage.setItem('step3Form', JSON.stringify(datas))


        setStep3Form(JSON.parse(localStorage.getItem('step3Form')))

        history.push('/MatrículaStep4')
    } */

  const handleSubmit = (e) => {

    const datas = { ...selectedDatas, ...step2Form,...filesData };

    localStorage.setItem("step3Form", JSON.stringify(datas));

    setStep3Form(JSON.parse(localStorage.getItem("step3Form")));

    history.push("/MatrículaStep4");  
    e.preventDefault() 
  
   // console.log(filesData)
   console.log(datas)
   
  };

  const handleUpload = (e) => {
        console.log(e.target.files[0])
        setFilesData({...filesData, [e.target.name] : e.target.files[0] })
  }

  return (
    <div className="step3-container">
      <div className="steps">
        <span>
          <strong>3/4</strong>
        </span>
      </div>

      <div className="step3-info">
        <h1>Envie seus documentos para a análise</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-container-step3">
            <div className="step3-inputs">
              <span>Histórico Escolar:</span>
              <label htmlFor="Históricoescolar">
              <i class="fas fa-upload"></i>   Selecione um arquivo
              </label>
              {filesData.historico.name ? filesData.historico.name : 'Nenhum arquivo selecionado' }
              <input
                id="Históricoescolar"
                name="historico"
                type="file"
                onChange = {(e) => handleUpload(e)}
              />
            </div>
            <div className="step3-inputs">
            <span>RG: </span>
              <label htmlFor="RG">
              <i class="fas fa-upload"></i>  Selecione um arquivo
              </label>
              {filesData.RG.name ? filesData.RG.name : 'Nenhum arquivo selecionado' }
              <input
               
                name="RG"
                id="RG"
               
                type="file"
                onChange = {(e) => handleUpload(e)}
              />
            </div>

            <div className="step3-inputs">
            <span>CPF:</span>
              <label htmlFor="cpf">
              <i class="fas fa-upload"></i>  Selecione um arquivo
              </label>
              {filesData.CPF.name ? filesData.CPF.name  : 'Nenhum arquivo selecionado' }
              <input
               
                           name="CPF"
                id="cpf"
                
                type="file"
                onChange = {(e) => handleUpload(e)}
              />
            </div>

            <div className="step3-inputs cnh">
            <span>Certidão de nascimento:</span>
              <label htmlFor="Certidão">
              <i class="fas fa-upload"></i>  Selecione um arquivo
              </label>
              {filesData.certidao.name ? filesData.certidao.name : 'Nenhum arquivo selecionado' }
              <input
                
                    name="certidao"
                id="Certidão"
               
                type="file"
                onChange = {(e) => handleUpload(e)}
              />
              {
                // <span><i class="fas fa-exclamation-circle"></i>(O CNH não é obrigatório, caso envie, deverá anexar a certidão: nascimento, casamento, divórcio)</span>
              }
            </div>

            <div className="step3-inputs">
            <span>Comprovante de residência: </span>
         
              <label htmlFor="comprovante">
              <i class="fas fa-upload"></i>  Selecione um arquivo
              </label>
              {filesData.comprovanteResidencia.name ? filesData.comprovanteResidencia.name : 'Nenhum arquivo selecionado' }
              <input
                
                name="comprovanteResidencia"
                id="comprovante"
                
                type="file"
                onChange = {(e) => handleUpload(e)}
              />
            </div>
          </div>
          <span className="red">Caso não tenha todos os documentos, deverá enviar até o término do curso! </span>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="signUpBackToHome">
     
        <Link to="/MatrículaStep2">
          
          <i class="far fa-arrow-alt-circle-left"></i>
        </Link>
      </div>
    </div>
  );
}

export default Step3;
