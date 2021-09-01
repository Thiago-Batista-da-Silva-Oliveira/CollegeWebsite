import React, {useEffect, useState, useContext} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import data from '../../data'
import './signup.css'
import {AuthContext} from '../../context/authContext'
function SignUp() {
  
    const [graduação, setGraduação] = useState(false)
    const [posgraduação, setPosGraduação] = useState(false)
    const [graduaçãoSequencial, setGraduaçãoSequencial] = useState(false)
    const [técnico, setTécnico] = useState(false)
    const [EJAMédio, setEJAMédio] = useState(false)
    const [EJAFundMédio, setEJAFundMédio] = useState(false)
    const [curso, setCurso] = useState('')
    const [polo, setPolo] = useState('Santa Cruz')
    const {setSelectedDatas} = useContext(AuthContext)
    const history = useHistory()
    

    const handleGraduação = () =>{
        setGraduação(true)
        setCurso('Letras Português-Inglês')
        setPosGraduação(false)
        setGraduaçãoSequencial(false)
        setTécnico(false)
        setEJAFundMédio(false)
        setEJAMédio(false)
    }
    const handlePosGraduação = () =>{
        setPosGraduação(true)
        setCurso('Letras Português-Inglês')
        setGraduação(false)
        setGraduaçãoSequencial(false)
        setTécnico(false)
        setEJAFundMédio(false)
        setEJAMédio(false)
    }
    const handleGraduaçãoSequencial = () =>{
        setGraduaçãoSequencial(true)
        setCurso('Gestão em Segurança Pública e Privada')
        setPosGraduação(false)
        setGraduação(false)
        setTécnico(false)
        setEJAFundMédio(false)
        setEJAMédio(false)
    }
    const handleTécnico = () =>{
        setTécnico(true)
        setCurso('Administração')
        setPosGraduação(false)
        setGraduação(false)
        setGraduaçãoSequencial(false)
        setEJAFundMédio(false)
        setEJAMédio(false)
    }
    const handleEJAMédio = () =>{
        setEJAMédio(true)
        setPosGraduação(false)
        setGraduação(false)
        setGraduaçãoSequencial(false)
        setTécnico(false)
        setEJAFundMédio(false)
    }
    const handleEJAFundMédio = () =>{
        setEJAFundMédio(true)
        setPosGraduação(false)
        setGraduação(false)
        setGraduaçãoSequencial(false)
        setTécnico(false)
        setEJAMédio(false)
       
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      const datas = {curso,polo}
      setSelectedDatas(datas)
      history.push('/MatrículaStep2')
    }

    useEffect(() => {
        const target = document.querySelectorAll('[data-anime]')
        function animeScrol(){
         
        
          const animationClasss = 'animate'
            target.forEach(function(element){
             
                 element.classList.add(animationClasss)
              
            })
          }
          animeScrol()
         
      }, [])
    return (
        <div className="signUp-container">
            <div className="signUp">
               
                <h1 >Bem Vindo!</h1>
                
                <h2  data-anime='left'>Qual área deseja seguir?</h2>

                <div className="signUpChoose">
                    <div className="signUpChoose-button-container">
                    <button  data-anime='left2'  onClick={handleGraduação}>Graduação</button>
                    <button  data-anime='left2'  onClick={handlePosGraduação}>Pós-Graduação</button>
                    <button  data-anime='left2'  onClick={handleGraduaçãoSequencial}>Graduação Sequencial</button>
                    </div>
                    <div className="signUpChoose-button-container">
                    <button  data-anime='left2' onClick={handleTécnico}>Técnico</button>
                    <button  data-anime='left2'  onClick={handleEJAMédio}>EJA-Medio</button>
                    <button  data-anime='left2'  onClick={handleEJAFundMédio}>EJA-Fundamental e Medio</button>
                    </div>
                </div>
        
                 {graduação && (
                   <>
                <h3  >Agora escolha o curso e o pólo</h3>
                <form onSubmit={handleSubmit} className="signUpForm">
                  <select onChange={(e) => setCurso(e.target.value)} >
                      { graduação && (
                          data.courses.map((course) => (
                             <option key={course.alt} >{course.text}</option>
                          )))
                      }
                  </select>
                  <select  onChange={(e) => setPolo(e.target.value)}>
                      <option   >Santa Cruz</option>
                      <option   >Campo Grande</option>
                      <option  >Tijuca</option>
                  </select>
                  <button type="submit">Prosseguir</button>
                </form>
                </>
                )}
                 {posgraduação && (
                   <>
                <h3>Agora escolha o curso e o pólo</h3>
                <form onSubmit={handleSubmit} className="signUpForm">
                  <select onChange={(e) => setCurso(e.target.value)}>
                      {
                          data.courses.map((course) => (
                             <option  key={course.alt}>{course.text}</option>
                          ))
                      }
                  </select>
                  <select onChange={(e) => setPolo(e.target.value)} >
                      <option  >Santa Cruz</option>
                      <option   >Campo Grande</option>
                      <option   >Tijuca</option>
                  </select>
                  <button type="submit">Prosseguir</button>
                </form>
                </>
                )}
                 {graduaçãoSequencial && (
                   <>
                <h3>Agora escolha o curso e o pólo</h3>
                <form onSubmit={handleSubmit} className="signUpForm">
                  <select onChange={(e) => setCurso(e.target.value)} >
                      {
                          data.sequencialsCourses.map((course) => (
                             <option  key={course.alt} >{course.text}</option>
                          ))
                      }
                  </select>
                  <select onChange={(e) => setPolo(e.target.value)} >
                      <option    >Santa Cruz</option>
                      <option   >Campo Grande</option>
                      <option   >Tijuca</option>
                  </select>
                  <button type="submit">Prosseguir</button>
                </form>
                </>
                )}
                 {técnico &&  (
                   <>
                <h3>Agora escolha o curso e o pólo</h3>
                <form onSubmit={handleSubmit} className="signUpForm">
                  <select onChange={(e) => setCurso(e.target.value)}>
                      {
                          data.tecCourses.map((course) => (
                             <option  key={course.alt} >{course.text}</option>
                          ))
                      }
                  </select>
                  <select  onChange={(e) => setPolo(e.target.value)} >
                      <option   >Santa Cruz</option>
                      <option  >Campo Grande</option>
                      <option  >Tijuca</option>
                  </select>
                  <button type="submit">Prosseguir</button>
                </form>
                </>
                ) }
                 {EJAMédio && (
                   <>
                <h3>Agora escolha até onde concluiu o ensino médio e o pólo</h3>
                <form  className="signUpForm">
                  <select>
                      <option   value="NãoComecei">Ainda não comecei</option>
                      <option  value="PrimeiroAno">Já completei o primeiro ano</option>
                      <option  value="SEgundoAno">Já completei o segundo ano</option>
                  </select>
                  <select onChange={(e) => setPolo(e.target.value)} >
                      <option  >Santa Cruz</option>
                      <option  >Campo Grande</option>
                      <option   >Tijuca</option>
                  </select>
                  <button>Prosseguir</button>
                </form>
                </>
                )}
                 {EJAFundMédio && (
                   <>
                <h3>Agora escolha até onde concluiu o ensino fundamental e o pólo</h3>
                <form className="signUpForm">
                  <select>
                    <option  value="NãoComecei">Ainda não comecei</option>
                  </select>
                  <select onChange={(e) => setPolo(e.target.value)} >
                      <option    >Santa Cruz</option>
                      <option   >Campo Grande</option>
                      <option   >Tijuca</option>
                  </select>
                  <button>Prosseguir</button>
                </form>
                </>
                )}
               
            </div>
            <div className="signUpContainerLinks">
             <span>Você também pode se inscrever pelo celular: <i className="fab fa-whatsapp"></i> 96473-0514 </span>
           
            </div>
            <div className="signUpBackToHome"> <Link to="/"> <i class="far fa-arrow-alt-circle-left"></i> </Link></div> 
        </div>
    )
}

export default SignUp
