import React,{useState,  useEffect} from 'react'
import data from '../data'
import {Link} from 'react-router-dom'
import '../pages/Home/home.css'

const HomeSlider = () => {

    const info = data.dataSlide

    
    const [selectedIndex, setSelectedIndex] = useState(1)

    const [selectedImg, setSelectedImg] = useState({})

 function handleSlideClickRight () {
   if(selectedIndex < 3 ){
    setSelectedIndex( selectedIndex +1)
   }
   if(selectedIndex === 3){
    setSelectedIndex(1)
   }
 }

 function handleSlideClickLeft () {
    if(selectedIndex > 1 ){
     setSelectedIndex( selectedIndex  - 1)
    }
    if(selectedIndex === 1){
     setSelectedIndex(3)
    }
  }


    useEffect (() =>{
       if(selectedIndex === 1) {
           setSelectedImg(info[0])
       }
       if(selectedIndex === 2 ) {
        setSelectedImg(info[1])
    }
    if(selectedIndex === 3 ) {
        setSelectedImg(info[2])
    }
  

 }, [selectedIndex, info])

 useEffect(() =>{
  const timer =  setTimeout(() =>{
        if(selectedIndex < 3){
            setSelectedIndex(selectedIndex +1)
           
        }
        if(selectedIndex ===3){
            setSelectedIndex(1)
        }
        }, 7000)

        return () =>{
            clearTimeout(timer)
        }
 }, [selectedIndex])

    return (
        <>
 
        <img src={selectedImg.img} alt={selectedImg.alt} />
        <div className="info">
          <span data-anime= 'down1'>{selectedImg.text}</span>
          <Link data-anime= 'down2' to={selectedImg.link}>
          <button className="btn-info">Conheça mais</button>
          </Link>
        </div>
        <div  className="home-slider-left">
        <i onClick={handleSlideClickLeft} class="far fa-arrow-alt-circle-left"></i>
        </div>
        <div className="home-slider-right">
        <i onClick={handleSlideClickRight} class="far fa-arrow-alt-circle-right"></i>
        </div>
  
        </>
    )
}

export default HomeSlider