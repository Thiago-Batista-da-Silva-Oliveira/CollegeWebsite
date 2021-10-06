import React from 'react'
import data from '../data'
import {Link} from 'react-router-dom'
import '../pages/Home/home.css'

const HomeSlider = () => {
    return (
        <>
      
        {data.dataSlide.map(info => (
            <>
                    <div key={info.index} className="NewSlider">
                    <img src={info.img} alt={info.alt} />
                    <div className="info">
                      <span data-anime= 'down1'>{info.text}</span>
                      <Link data-anime= 'down2' to={info.link}>
                      <button className="btn-info">Conheça mais</button>
                      </Link>
                    </div>
                    </div>
                    </>
        ))}
      
        
  
        </>
    )
}

export default HomeSlider