import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {useRouteMatch} from 'react-router-dom'


const Header = ({color}) => {

    const {path} = useRouteMatch()


    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    // const toggleHandler = () => setIsDrawerOpen((prev) => !prev) 
    const toggleHandler = () => {
    setIsDrawerOpen((prev) => !prev) 
    setMobileMenu((preve) => !preve)
   }
   const [isScrolled, setIsScrolled] = useState(false)
   const [isClicked, setIsClicked] = useState(false)

   function toggleMobileDropdown () {
       setIsClicked(!isClicked)
   }

   window.onscroll = () =>{
       setIsScrolled(window.pageYOffset === 0 ? false : true)
       return () => (window.onscroll = null)
   }


  
    return (
        <>
        <header className={color || isScrolled?`header headerBlack` : 'header'}>
            <div className='navbar-container'>
            <nav className='nav'>
                <Link to="/">
                <div className='logo'>
                  <img src="/logo.png" alt="logo" />
                </div>
                </Link>
                <div className='contacts'>
                    <Link  to="/">Inicio</Link>
                    <Link className={path === '/Sobre'? 'addColor': ''} to="/Sobre">Sobre</Link>
                    <div className="dropdown">
                    <span>Nossos Cursos</span>
                        <div className='dropdown-content'>
                        <Link  activeClassName="active" to="/Graduações">Graduação</Link>
                        <Link  to="/PósGraduações">Pós Graduação</Link>
                        <Link  to="/CursosSequenciais">Cursos Sequenciais</Link>
                        <Link  to="/EJA">EJA-Médio</Link>
                        <Link  to="/Técnico">Técnico</Link>
                        </div>
                    </div>
                    <button className='navbar-btn'><Link to="/Matrícula">Inscreva-se</Link></button>
                    
                </div>
                     {
                         isDrawerOpen ? (<div onClick={toggleHandler} className='handler'>
                            <i className="fas fa-times"></i>
                            </div>) :
                        <div onClick={toggleHandler} className='handler'>
                        <i className="fas fa-bars"></i>
                        </div>
                     }
            </nav>
           
            </div>
        </header>
          <div  className={mobileMenu ? `mobile_menu mobile_Active` : 'mobile_menu'}>
          <div className='contacts_Mobile'>
                    <Link className={path === '/'? 'addColor': ''} to="/">Inicio</Link>
                    <Link className={path === '/Sobre'? 'addColor': ''} to="/Sobre">Sobre</Link>
                    <span onClick={toggleMobileDropdown}>Nossos Cursos</span>
                    <div className={isClicked? 'showMobileDropdown' : 'mobileDropdown'}>
                        <Link  to="/Graduações">- Graduação</Link>
                        <Link  to="/PósGraduações">- Pós Graduação</Link>
                        <Link  to="/CursosSequenciais">- Cursos Sequenciais</Link>
                        <Link  to="/EJA">- EJA-Médio</Link>
                        <Link  to="/Técnico">- Técnico</Link>
                    </div>
                    <Link to="/Matrícula">Inscreva-se</Link>
                </div>
                <div className='social'>
              <div className='icons'>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              </div>
          </div>
          </div>
        
         </>
    )
}

export default Header