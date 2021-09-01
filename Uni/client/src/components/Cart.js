import React from 'react'
import '../pages/Courses/cursos.css'
import {Link} from 'react-router-dom'

function Cart({text, img, alt,id}) {
   
    return (
       
        <div>
          <Link  to={`/Curso/${id}`}>
             <div  className='card'>
                    <img className='cardImg' alt={alt} src={img}/>
                    <span>{text}</span>
                </div>
                </Link>
               
        </div>
       
    )
}

export default Cart