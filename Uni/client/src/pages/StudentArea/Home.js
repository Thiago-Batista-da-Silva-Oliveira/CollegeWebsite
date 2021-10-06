import React,{useContext} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.css'
import {AuthContext} from '../../context/authContext'

function Home() {
    const {toggleStudentMenu,setToggleStudentMenu} = useContext(AuthContext)

    const toggleHandler = () => {
        setToggleStudentMenu((prev) => !prev)
    }

    return (
        <div className="student-container">
            <Sidebar />
            <div className="student-container-area">
                <div className="pendencias">
                    <span>Você possui pendências na documentação !</span>
                    <button>Clique aqui para ver o que falta</button>
                </div>
                <div className="manualDoAluno">
                <h1><strong>Guia do Aluno</strong></h1>
                    <div className="manualDoAluno-container">
                       <div>
                           <span>Calendários Acadêmicos</span>
                       </div>
                       <div>
                           <span>Aulas</span>
                       </div>
                       <div>
                           <span>Informações Financeiras</span>
                       </div>
                       <div>
                           <span>Atendimentos</span>
                       </div>
                       
                   </div>
                </div>
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

export default Home
