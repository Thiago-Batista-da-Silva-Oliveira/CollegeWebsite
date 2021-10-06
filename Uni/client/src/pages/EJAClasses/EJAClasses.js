import React, { useContext, useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { AuthContext } from '../../context/authContext'
import './style.css'
import { PieChart, Pie, Cell  } from 'recharts';
import StudentsClass from '../../components/StudentsClass/StudentsClass';
import classesData from '../../classesData'
import {useHistory} from 'react-router-dom'

const dataFund = [
    { name: 'Porcentagem que falta', value: 400 },
    { name: 'Porcentagem concluída', value: 600 },
  ];

const dataMedio = [
    { name: 'Porcentagem que falta', value: 900 },
    { name: 'Porcentagem concluída', value: 100 },
]
  
  const COLORS = ['#FF0000', '#5a5afb'];


export default function EjaClasses() {
    const history = useHistory()

    const {toggleStudentMenu,setToggleStudentMenu,fundClassTest,setFundClassTest} = useContext(AuthContext)

    const toggleHandler = () => {
        setToggleStudentMenu((prev) => !prev)
    }

    const closeModal = () => {
        if(fundClassTest){
            setFundClassTest(null)
        } 
        
    }

    const accessTest = () => {
        history.push(`/Prova/${fundClassTest?.text}`)
    }

    const [fund, setFund] = useState(true)
    const [médio, setMédio] = useState(false)

    const handleMedio = () => {
        setMédio(!médio)
        setFund(false)
    }

    const handleFund = () => {
        setMédio(false)
        setFund(!fund)
    }

    

    return (
        <div onClick={closeModal} className={fundClassTest ?'student-container opacity' :"student-container"}>
             {fundClassTest && (
                <>
                <div className="student-access-to-test">
                      <span>{fundClassTest.text}</span>  
                      <span>Após iniciar você terá uma hora para terminar a prova!</span>
                      <span>Certifique-se que está em um lugar silencioso.</span>
                      <button onClick={accessTest}>Iniciar</button>
                </div>
                </>
            )  
            }
            <Sidebar />
            <div className="aulas-container">
                <div className="subjects-container">
                 
                 <button onClick={handleFund} className="subjects-container-button">Ensino Fundamental</button>
                 {fund && (
                     <>
                     {classesData.classesFund.map((info) => (
                          <StudentsClass key={info.class} text={info.class} pdf={info.pdf} testLink={info.testLink}  />
                     ))}
                      
                     </>
                 )
                 }
                 <button onClick={handleMedio} className="subjects-container-button medio">Ensino Médio</button>
                 {
                     médio && (
                      <>
                       {classesData.classesMedio.map((info) => (
                          <StudentsClass  key={info.class} text={info.class} pdf={info.pdf} testLink={info.testLink}  />
                     ))}
                      </>
                     )
                 }
                 <span className="materialFonts">Fonte dos materiais: <a target="_blank" rel="noreferrer" href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja/materiais-de-estudo">https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja/materiais-de-estudo</a></span>
                 </div>
           {  fund &&    <div className="warnings">
                      { //<span>Últimas notícias </span>
                      // <span>Nenhum aviso</span>
                      }
         <span>Ensino Fundamental</span>
         <PieChart className="chart" width={250}  height={400}>
        <Pie
          data={dataFund}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {dataFund.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
         
        </Pie>
        
      </PieChart>
     
      <div className="chart-info-container">
          <div className="chat-info">
             <div className="square-red"></div>
             <span>Ainda Falta: 40%</span>
          </div>
          <div className="chat-info">
             <div className="square-blue"></div>
             <span>Foi concluído: 60%</span>
          </div>
         
      </div>
                       
                 </div>}
     {médio && <div className="warnings">
                      { //<span>Últimas notícias </span>
                      // <span>Nenhum aviso</span>
                      }
         <span>Ensino Médio</span>
         <PieChart width={250}  height={400}>
        <Pie
          data={dataMedio}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {dataMedio.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="chart-info-container">
          <div className="chat-info">
             <div className="square-red"></div>
             <span>Ainda Falta: 90%</span>
          </div>
          <div className="chat-info">
             <div className="square-blue"></div>
             <span>Foi concluído: 10%</span>
          </div>
         
      </div>
                       
                 </div> }
                 <span className="materialFontsMobile">Fonte dos materiais: <a target="_blank" rel="noreferrer" href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja/materiais-de-estudo">https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja/materiais-de-estudo</a></span>
            </div>
            
            {
                 toggleStudentMenu ? (<div onClick={toggleHandler} className='mobile-toggle-menu close'>
                            <i className="fas fa-times"></i>
                            </div>) :
                        <div onClick={toggleHandler} className='mobile-toggle-menu open'>
                        <i className="fas fa-bars"></i>
                        </div>
                     }
        </div>
    )
}
