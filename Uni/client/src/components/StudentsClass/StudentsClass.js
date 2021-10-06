import React, {useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import './styles.css'
//import {useHistory} from 'react-router-dom'

function StudentsClass({text,pdf,testLink}) {
   // const history = useHistory()

    const { setFundClassTest } = useContext(AuthContext);


    const handleClick = (text) => {
        const datas = {text,testLink}
        setFundClassTest(datas)
       // history.push(`/Prova/${text}`)
    }

    return (
        <div className="subjects">
        <div className="subject-name">
               {text}
        </div>
        <div className="subject-content-wrapper">
        <div className="subject-pdf">
             <a href={pdf}><button><i class="fas fa-download"></i> Baixar PDF</button></a>
        </div>
        <div className="subject-test">
            <button onClick={() => handleClick(text)}>
              Acessar prova
            </button>
        </div>
        </div>
     </div>
    )
}

export default StudentsClass
