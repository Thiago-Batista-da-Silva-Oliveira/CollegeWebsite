import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import {useParams, useHistory, Link} from 'react-router-dom'
import classesData from '../../classesData'
import HandleTest from '../../components/HandleTest/HandleTest';
import { AuthContext } from '../../context/authContext';



function Prova() {
    const {result,timer, setTimer} = useContext(AuthContext)
    const {id} =  useParams()
    const history = useHistory()
    const dataClass = classesData.classesFund.find((e) => e.class === id) || classesData.classesMedio.find((e) => e.class === id)
    const getTest = (dataClass.class === 'Matemática' && classesData.matematicaFundTeste2 )
     || (dataClass.class === 'Lingua Portuguesa' && classesData.PortuguesFundTeste3 )
     || (dataClass.class === 'História e Geografia' && classesData.HistoriaGeografiaFundTeste4 )
     || (dataClass.class === 'Ciências' && classesData.CienciasFundTeste1 )
    const ResultValues = Object.values(result)
    const [gabaResult, setGabaResult] = useState(0)
   // const [wrongAnswers, setWrongAnswers] = useState([])
    const [WantToFinish, SetWantToFinish] = useState(false)
    const [finished, setFinished] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        SetWantToFinish(true)
    
    }

    const ConfirmConclusion = (selection) => {
      

        if(selection === 'sim'){
            gabResult()
            setFinished(true)
        }

        SetWantToFinish(false)
        
      
    }

    const gabResult = () => {
          var values = []
          var result = 0
          var errors = []

        if(dataClass.class === "Matemática") {
                classesData.MatematicaFundTeste2Gab.forEach((info) => {
                   values.push(info.value)        
                })
               // console.log(values)
            }

            if(dataClass.class === "Lingua Portuguesa") {
                classesData.PortuguesFundTeste3Gab.forEach((info) => {
                   values.push(info.value)        
                })
               // console.log(values)
            }
        for(let i =0; i<values.length; i++){
            if(values[i] === ResultValues[i] ){
               result ++
            }
            else {
                errors.push(`option${i+1}`)        
            }
        }
        setGabaResult(result)
       // setWrongAnswers(errors)
     
    } 

    const handleTimeOver = () => {
        setTimer(false)
        gabResult()
    }

   setTimeout(handleTimeOver,1000*60*60)

    useEffect(() => { 
        if(!dataClass){
              history.push('/Disciplinas')
        }
       // console.log(ResultValues)
      
   }, [dataClass,history,result])

    return (
        <div className="testContainer">
                {WantToFinish && (
                <>
                   <div className="testContainerConclusion">
                       <span>Tem certeza que deseja finalizar a prova ? </span>
                       <div>
                           <button onClick={() => ConfirmConclusion('sim')}>Sim</button>
                           <button onClick={() => ConfirmConclusion('não')}>Não</button>
                       </div>
                   </div>
                </>
            )}
            <navbar className="testContainerNavbar">
                 <div><img alt="logo" src="/logo.png" /></div>
                 <div> <i class="fas fa-home"></i><Link to="/Disciplinas">Voltar</Link></div>
            </navbar>

        
           
         <div className="testContainerInfo">
             <span>Aluno: Thiago Batista da Silva Oliveira</span>
             <span>Prova: {dataClass?.class}</span>
             {(!timer ||finished)  && (
                 <span>Número de acertos {gabaResult}/30</span>
             )}
         </div>

         <div className="Test">
            
        <form onSubmit={handleSubmit}>
             {getTest?.map((info) => (
                 <HandleTest key={info.name} question={info.question} questionPart2={info.questionPart2} img={info.img} A={info.A} B={info.B} C={info.C} D={info.D} position={info.position} name={info.name} />
             ))}
           <button disabled={!timer} className = {!timer ? 'disabled' : ''} type="submit">Finalizar Prova</button>
        </form>
        </div>
        

        </div>
    )
}

export default Prova
