import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Navbar2 from '../../components/Navbar2/Navbar2'
import Footer from '../../components/Footer/Footer'
import data from '../../data'
import Featured from '../../components/Featured'
import HomeSlider from '../../components/HomeSlider'

const Home = () => {

  useEffect(() => {
    const target = document.querySelectorAll('[data-anime]')
    function animeScrol(){
     
    
      const animationClasss = 'animate'
        target.forEach(function(element){
         
             element.classList.add(animationClasss)
          
        })
      }
      animeScrol()
     
  }, [])

   
  setTimeout(() =>{
    const target = document.querySelectorAll('[data-anime]')
    function animeRemove(){
     
    
      const removeClass = 'remove'
        target.forEach(function(element){
         
             element.classList.add(removeClass)
          
        })
      }
      animeRemove()
    }, [2000])

    return (
        <>
        <div className="teste">
        <Navbar2 />
        <Navbar />
        
     <div className="container" >
       
           <HomeSlider />
          

        
     </div>

      
      <div className='home-courses'>
        <div className='courses_info'>
          <h1>Cursos oferecidos</h1>
        </div>

        <div className='courses_info_'>
          <div className='courses-type'>
            <Link to="/EJA">
            <h2>EJA Fundamental e Médio</h2>
            <p>É destinada a jovens e adultos que não deram continuidade em seus estudos.</p>
            </Link>
          </div>
          <div className='courses-type'>
          <Link to="/Graduações">
            <h2>Graduação</h2>
            <p>Conheça os nossos cursos de Graduação, Semi-presencial e 100% Online.</p>
            </Link>
          </div>
          <div className='courses-type'>
          <Link to="/PósGraduações">
            <h2>Pós Graduação</h2>
            <p>Invista na sua carreira com uma PÓS 100% Online em todas as áreas.</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='onlineClasses'>
        <div className='onlineClasses_img'>
          <div className='onlineClasses_info'>
            <h1>Estude online de qualquer lugar do mundo!</h1>
            <Link href="/Contatos">
            <button className='btn'>Entre em Contato</button>
            </Link>
          </div>
        </div>
      </div>

       <div className='home-datas-container'>
      <div className='home-datas'>
        <div className='home-data-img'>
          <img alt="perfil" src='/homePagePerfilFoto.png' />
        </div>

        <div className='home-data'>
        <h1>Universidade Brasileira</h1>
           <span>Contribuindo com o crescimento educacional no Brasil.</span>
           <div className='yellow-bar'></div>
           <span>Proporcionando vínculos com as Secretarias Municipais de Educação e atendendo as demandas dos alunos com a oferta dos cursos superiores de Graduação, Tecnológos, Pós, Mestrado e Doutorado.</span>

           <div className='home-data-numbers'>
             <div className="home-data-numbers-info">
                <h1>35</h1>
                <h2>Países</h2>
             </div>
             <div className="home-data-numbers-info">
                <h1>+50</h1>
                <h2>Cursos</h2>
             </div>
             <div className="home-data-numbers-info">
                <h1>540</h1>
                <h2>Alunos</h2>
             </div>
           </div>
        </div>
      </div>
      </div>
      
      <div className="featured-container">
      <h1>Cursos em destaque</h1>
        <div id="featured" className="featured">

        
       
         <div className="featured-courses">
 
           {data.featuredCourses.map(curso => (
             <Featured type={curso.type} key={curso.name} img={curso.img} name={curso.name} link={curso.link} />
           ))}
          
        </div>

      
        
        </div>
      </div>
      <div className="Parceiros">
        <h2>Nossos Parceiros</h2>
        <span className="info-span">Conheça quem ajuda a você alcançar o seus objetivos.</span>
        <div className='yellow-bar'></div>
        <div className='logoDosParceiros'>
          <img src="/facol_2.png" alt="facol"/>
          <img src="/unef.png" alt="unef" />
          <img src="/uniassel.png" alt="uniassel" />
          <img src="/cpet.png" alt="cpet" />
          <img src="/universidade_educa_brasil.png" alt="universidade_educa_brasil" />
        </div>
      </div>

      <div className="Blog">
        <h2>Nosso Blog</h2>
        <span className="info-span">Fique por dentro com notícias e dicas educacionais</span>
        <div className='yellow-bar'></div>
        <div className='noticiais'>
          <div className="noticiais-info">
               
                   <img src="/estudantesBlog.jpg" alt="blog" />
                   <div>
                       <span>
                         MEC vai criar base de dados para estudantes com deficiência
                       </span>
                       <p>OUTUBRO 20,2020</p>
                       <p>A medida faz parte do Plano de Contingência para Pessoas com Deficiência, lançado pelo Governo...</p>
                   </div>
              
          </div>
          <div className="noticiais-info">
          
                   <img src="/cronogramaenem.png" alt="blog" />
                   <div>
                   <span>
                   Provas do Enem 2020 serão em janeiro e fevereiro de 2021
                       </span>
                       <p>FEVEREIRO 05,2016</p>
                       <p>Exame será em 17 e 24 de janeiro para os 5,7 milhões de inscritos que escolheram a prova...</p>
                   </div>
           
          </div>
        </div>
      </div>
      <Footer />
      </div>
        </>
    )
}

export default Home
