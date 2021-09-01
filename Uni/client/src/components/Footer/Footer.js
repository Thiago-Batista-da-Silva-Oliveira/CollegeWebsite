import React from "react";
import {Link} from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-logo">
                 <img src="/logo.png" alt="logo" />
          </div>
          <div className="footer-Institucional">
             <h1>Institucional</h1>
             <span>A Universidade, atua nos 27 estados brasileiros e em 35 <br/>
             países da Europa, África, Estados Unidos e América do Sul.</span>
          </div>
          <div className="footer-fast-access">
              <h1>Acesso Rápido</h1>
              <div className="fast-access-content">
                  <Link to="/Sobre">Sobre</Link>
                  <Link to="/Graduações">Graduação</Link>
                  <Link to="/PósGraduações">Pós Graduação</Link>
                  <Link to="/EJA">EJA-Médio</Link>
                  <Link to="/Técnico">Técnico</Link>
                  <Link to="/Autentificação">Entrar</Link>
              </div>
          </div>
          <div className="footer-search-bar">
                 <h1>O que você está procurando?</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
