import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './eja.css'
function Cursos() {

    const [selectedvalue, setSelectedValue] = useState(1)
  

    return (
        <>
       <div className="teste">
        <div className='courses-container'>
        <Navbar color="black" />
        <div className='graduation'>
              <h1>EJA - Ensino Médio</h1>
        </div>

        <div className="Eja">
            
            <div className="Eja-img">
                <img src="/EJA-medio.png" alt="EJA-foto"/>
            </div>

            <div  className="Eja-info">
              <h1>Curso EJA - Ensino Médio</h1>
              <div>
                  (57 avaliações de clientes)
              </div>
              <h3>R$ 1.250,00</h3>
              <div className="Eja-spans">
              <span >Cursos Incluidos</span>
              <span><i class="fas fa-book-open"></i> Eja-Ensino Médio</span>
              <span><strong>EJA Ensino Médio</strong>: destinada a alunos maiores de 18 anos que não completaram o Ensino Médio, que completa a Educação Básica no Brasil. Ao concluir essa etapa, o aluno está preparado para realizar provas de vestibular e Enem, para ingressar em universidades.
             O tempo médio de conclusão é de 18 meses.</span>
             <div className="Eja-purchase">
                <input type="text" value={selectedvalue} onChange={(e) => setSelectedValue(e.target.value)} />
                 <button>Comprar</button>
             </div>
             </div>
            </div>

        
        
        </div>
        <div className="eja-avaliations">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
          consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
          consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
          consectetur adipiscing elit.</p>
        </div>
        </div>
        <Footer />
        </div>

        </>
    )
}

export default Cursos