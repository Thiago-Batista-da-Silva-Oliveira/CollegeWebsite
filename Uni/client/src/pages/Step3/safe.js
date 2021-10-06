import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./step3.css";
import { AuthContext } from "../../context/authContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function Step3() {
  const { register, handleSubmit } = useForm();
  const [filesData, setFilesData] = useState()

  const history = useHistory();
  const { selectedDatas, step2Form, setStep3Form, setFiles } =
    useContext(AuthContext);
  const [historico, setHistorico] = useState()
  const [RG, setRG] = useState ()
   const [CPF, setCPF] = useState()
  const [certidao, setCertidao] = useState()
  const [comprovanteResidencia, setComprovanteResidencia] = useState()

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

  const onSubmit = (data) => {
    const dataStep3 = data;

    const datas = { ...selectedDatas, ...step2Form };

    //setFilesData(data)
   /* localStorage.setItem("step3Form", JSON.stringify(datas));
    localStorage.setItem("step3Files", JSON.stringify(dataStep3));

    setStep3Form(JSON.parse(localStorage.getItem("step3Form")));
    setFiles(JSON.parse(localStorage.getItem("step3Files")));

    history.push("/MatrículaStep4"); */
    console.log(data)
    
  };

  return (
    <div className="step3-container">
      <div className="steps">
        <span>
          <strong>3/4</strong>
        </span>
      </div>

      <div className="step3-info">
        <h1>Envie seus documentos para a análise</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container-step3">
            <div className="step3-inputs">
              <span>Histórico Escolar:</span>
              <label htmlFor="Históricoescolar">
              <i class="fas fa-upload"></i>   Selecione um arquivo
              </label>
              {historico ? historico.substr(12) : 'Nenhum arquivo selecionado' }
              <input
                {...register("histórico", {
                 })}
               
                id="Históricoescolar"
                name="histórico"
                type="file"
                onChange = {(e) => setHistorico(e.target.value)}
              />
            </div>
            <div className="step3-inputs">
            <span>RG: </span>
              <label htmlFor="RG">
              <i class="fas fa-upload"></i>  Selecione um arquivo
              </label>
              {RG ? RG.substr(12) : 'Nenhum arquivo selecionado' }
              <input
                {...register("RG", {
                  })}
                           name="RG"
                id="RG"
               
                type="file"
                onChange = {(e) => setRG(e.target.value)}
              />
            </div>

            <div className="step3-inputs">
            <span>CPF:</span>
              <label htmlFor="cpf">
              <i class="fas fa-upload"></i>  Selecione um arquivo
              </label>
              {CPF ? CPF.substr(12) : 'Nenhum arquivo selecionado' }
              <input
                {...register("CPF", {
                 })}
                           name="CPF"
                id="cpf"
                
                type="file"
                onChange = {(e) => setCPF(e.target.value)}
              />
            </div>

            <div className="step3-inputs cnh">
            <span>Certidão de nascimento:</span>
              <label htmlFor="Certidão">
              <i class="fas fa-upload"></i>  Selecione um arquivo
              </label>
              {certidao ? certidao.substr(12) : 'Nenhum arquivo selecionado' }
              <input
                {...register("certidão", {
                  })}
                    name="certidão"
                id="Certidão"
               
                type="file"
                onChange = {(e) => setCertidao(e.target.value)}
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
              {comprovanteResidencia ? comprovanteResidencia.substr(12) : 'Nenhum arquivo selecionado' }
              <input
                {...register("comprovante", {
                 })}
                name="comprovante"
                id="comprovante"
                
                type="file"
                onChange = {(e) => setComprovanteResidencia(e.target.value)}
              />
            </div>
          </div>
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
