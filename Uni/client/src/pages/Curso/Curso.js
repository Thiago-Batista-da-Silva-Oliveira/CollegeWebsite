import React from 'react'
//import { useRouter } from 'next/router'
import data from '../../data'
import './curso.css'
import Navbar from '../../components/Navbar/Navbar'
import {Link, useParams} from 'react-router-dom'
//import {AuthContext} from '../../context/authContext'

const Curso = (props) => {

//  const {handleType} = useContext(AuthContext)
      
         const {id} =  useParams()

         const dataCourse =  data.courses.find(e => e.alt === id)  || data.tecCourses.find(e => e.alt === id)  || data.sequencialsCourses.find(e => e.alt === id) 
       
              
     
    return (
       <>

        <div className='curso-container'>
          <Navbar color="black" />

        <div className='course'>
            <h1>{dataCourse?.text}</h1>
        </div>
        <div className='content'>
             <div className='description'>
               <span>Então deseja seguir a área de {dataCourse?.alt}?</span>
                   <span>{dataCourse?.description}</span>
                   <span>{dataCourse?.description}</span>
                   <span>{dataCourse?.description}</span>
                   <span>{dataCourse?.description}</span>
             </div>

             <div className='value'>
                <div className='imgContainer'>
                  <div className='duration'>
                    <h3>Tempo de duração {dataCourse?.duration}</h3>
                  </div>
                  <div >
                       <img src={dataCourse?.img}  alt={dataCourse?.alt}/>
                  </div>
                  <h3>Investimento: {dataCourse?.value}</h3>
                  <button>
                    <Link to="/Matrícula">Inscreva-se</Link>
                  </button>
                 
                </div>
             
             
             </div>

           
             
        </div>
        </div>
       </>
    )
}

export default Curso