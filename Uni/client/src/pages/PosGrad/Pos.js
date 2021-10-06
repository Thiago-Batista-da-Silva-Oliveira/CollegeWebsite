import React, { useState } from 'react'
import Cart from '../../components/Cart'
import data from '../../data'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
function Cursos() {
    const [todos] = useState(true)
    const [exatas  ] = useState(false)
    const [humanas] = useState(false)
    //const [bioMédicas, setBioMédicas] = useState(false)

    const [search, setSearch] = useState('')

    const dataSearch = data.posGrad.filter(course => course.alt.toLowerCase().includes(search.toLowerCase()))
    //const dataSearchExatas = data.posGradExatas.filter(course => course.alt.toLowerCase().includes(search.toLowerCase()))
    //const dataSearchHumanas = data.posGradHumanas.filter(course => course.alt.toLowerCase().includes(search.toLowerCase()))
    //const dataSearchBioMédicas = data.coursesBioMédicas.filter(course => course.alt.toLowerCase().includes(search.toLowerCase()))


    /*function handleTodos(){
        setTodos(true)
        setExatas(false)
        setHumanas(false)
        //setBioMédicas(false)
    }
    function handleExatas(){
        setTodos(false)
        setExatas(true)
        setHumanas(false)
       // setBioMédicas(false)
    }
    function handleHumanas(){
        setTodos(false)
        setExatas(false)
        setHumanas(true)
       // setBioMédicas(false)
    }
    /*function handleBioMédicas(){
        setTodos(false)
        setExatas(false)
        setHumanas(false)
        setBioMédicas(true)
    } */

    return (
        <>
       <div className="teste">
        <div className='courses-container'>
        <Navbar color="black" />
        <div className='graduation'>
              <h1>Pós Graduação</h1>

            <div className='options'>
                
            </div>
        </div>
        <div className='coursesContainer'>
            <div className="search">
           {todos && <h2>Todos</h2>}
           {exatas && <h2>Exatas</h2>}
           {humanas && <h2>Humanas</h2>}
           <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Buscar" />
           </div>

            <div className='courses'>

                {dataSearch && todos && dataSearch.map(info =>{
                     return(
                       
                        <Cart key={info.alt} id={info.alt} text={info.text} img={info.img} alt={info.alt} />
                    )
                })}
               
            </div>
        </div>

        </div>
            <Footer/>
        </div>

        </>
    )
}

export default Cursos