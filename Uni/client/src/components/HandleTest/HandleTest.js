import React, { useContext} from 'react'
import { AuthContext } from '../../context/authContext';

function HandleTest({A, B, C, D,question, questionPart2, name,position, img}) {

    const {result,setResult,timer} = useContext(AuthContext)

    const handleCheck = (e) => {
        setResult({...result,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <div>
                <span>{position}</span>
                <span>{question}</span>
               {img && <div><img src={img} alt="questão" /></div> } 
               {questionPart2 &&  <span>{questionPart2}</span>}
           </div>
           <div className="Test-options">
             <label><input  disabled={!timer} className={!timer ? 'disabled' : ''} required onChange={handleCheck} value="A" name={name} type="radio"/>{A}</label>
             <label><input  disabled={!timer} className={!timer ? 'disabled' : ''} onChange={handleCheck} value="B" name={name} type="radio"/>{B}</label>
             <label><input  disabled={!timer} className={!timer ? 'disabled' : ''} onChange={handleCheck} value="C" name={name} type="radio"/>{C}</label>
             <label><input  disabled={!timer} className={!timer ? 'disabled' : ''} onChange={handleCheck} value="D" name={name} type="radio"/>{D}</label>
           </div>
        </div>
    )
}

export default HandleTest
