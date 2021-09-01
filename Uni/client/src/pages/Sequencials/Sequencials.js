import React, { useState } from 'react'
import Cart from '../../components/Cart'
import data from '../../data'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
function Cursos() {
    const [todos] = useState(true)
   // const [exatas , setExatas ] = useState(false)
  //  const [humanas, setHumanas] = useState(false)
    //const [bioMédicas, setBioMédicas] = useState(false)

    const [search, setSearch] = useState('')

    const dataSearch = data.sequencialsCourses.filter(course => course.alt.toLowerCase().includes(search.toLowerCase()))
   // const dataSearchExatas = data.coursesExatas.filter(course => course.alt.toLowerCase().includes(search.toLowerCase()))
    //const dataSearchHumanas = data.coursesHumanas.filter(course => course.alt.toLowerCase().includes(search.toLowerCase()))
    //const dataSearchBioMédicas = data.coursesBioMédicas.filter(course => course.alt.toLowerCase().includes(search.toLowerCase()))


   

    return (
        <>
       <div className="teste">
        <div className='courses-container'>
        <Navbar color="black" />
        <div className='graduation'>
              <h1>Cursos Sequenciais</h1>

            <div className='options'>
                <nav>
                    <ul>
                        
                    </ul>
                </nav>
            </div>
        </div>
        <div className='coursesContainer'>
            <div className="search">
           {todos && <h2>Todos</h2>}
          
           <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Buscar" />
           </div>

            <div className='courses'>

                {dataSearch && todos && dataSearch.map(info =>{
                     return(
                       
                        <Cart type={info.type} key={info.alt} id={info.alt} text={info.text} img={info.img} alt={info.alt} />
                    )
                })}
                 
            </div>
        </div>

        </div>
        <Footer />
        </div>
        </>
    )
}

export default Cursos