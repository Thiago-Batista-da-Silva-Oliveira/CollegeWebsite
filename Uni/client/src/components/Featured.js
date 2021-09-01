import React from 'react'
import { Link } from 'react-router-dom'


function Featured({name,img,link, type}) {
 
    return (
        <>
    
            <div className="Featured-course">
        
                 <img src={img} alt={name}/>
                 {type !== "EJA" &&(
                     <span>{name}</span>
                 ) }
                 <div className="featured-btn">
                 <Link to={link}>Ver mais Informações</Link>
                 </div>
                
            </div>
        </>
    )
}

export default Featured
