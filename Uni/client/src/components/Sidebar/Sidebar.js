import React,{useContext}  from 'react'
import './sidebar.css'
import {AuthContext} from '../../context/authContext'
import {Link} from "react-router-dom";


function Sidebar() {
    const {toggleStudentMenu} = useContext(AuthContext)
   
    

    return (
        <>
        <div className="sidebar">
            <div className="sidebar-header">
                <span className="logout"><i className="fas fa-times"></i> Sair</span>
               <div>
                   <span><i class="far fa-user"></i></span>
                   <span>Thiago Batista da Silva Oliveira</span>
               </div>
            </div>

            <div className="sidebar-body">

                <div className="sidebar-content">
                     <div className="sidebar-item">
                      
                         <Link to="Disciplinas">Disciplinas</Link>
                         {/*
                             showMore && (
                                 <>
                                   <div>
                                      <span>Matemática</span>
                                      <span>Lingua Portuguesa</span>
                                      <span>Ciências</span>
                                      <span>História e Geografia</span>
                                   </div>
                                 </>
                             ) */
                         }
                         
                     </div>

                     <div className="sidebar-item">
                      <span>Grade Curricular</span>
                     </div>

                     <div className="sidebar-item">
                       <span>Calendário </span>
                    </div>

                     <div className="sidebar-item">
                       <span>Dúvidas catálogadas</span>
                    </div>

                    <div className="sidebar-item">
                    <span>Financeiro</span>
                   </div>
                </div>
            </div>

            
                <div className="sidebar-logo">
                    <img src="logo.png" alt="logo"/>
                </div>
          
            
        </div>

        {//
        }
         <div className={toggleStudentMenu ? "sidebarMobile" : 'none'}>
            <div className="sidebar-header">
                <span className="logout"><i className="fas fa-times"></i> Sair</span>
               <div>
                   <span><i class="far fa-user"></i></span>
                   <span>Thiago Batista da Silva Oliveira</span>
               </div>
            </div>

            <div className="sidebar-body">

                <div className="sidebar-content">
                     <div className="sidebar-item">
                     <Link to="Disciplinas">Disciplinas</Link>
                     </div>

                     <div className="sidebar-item">
                      <span>Grade Curricular</span>
                     </div>

                     <div className="sidebar-item">
                       <span>Calendário </span>
                    </div>

                     <div className="sidebar-item">
                       <span>Dúvidas catálogadas</span>
                    </div>

                    <div className="sidebar-item">
                    <span>Financeiro</span>
                   </div>
                </div>
            </div>

            
                <div className="sidebar-logo">
                    <img src="logo.png" alt="logo"/>
                </div>
          
            
        </div>
        </>
    )
}

export default Sidebar
