import React from 'react';
import { Link } from 'react-router-dom';

import './navbar2.css'

function Navbar2() {
  return (
      <>
      <div className="navbar2">
          <div className="navbar2-container">
              <div className="navbar2-contacts">
                  <span>Entre em contato: <i className="fab fa-whatsapp"></i> 96473-0514</span>
              </div>
              <div className="acompanhe">
                  <Link to="/Matrícula">Acompanhe sua matrícula</Link>
                  </div>
              <div className="navbar2-login">
                  <Link to="/Autentificação">
                  <button>Área do aluno</button>
                  </Link>
              </div>
          </div>
      </div>
      </>
  )
}

export default Navbar2;