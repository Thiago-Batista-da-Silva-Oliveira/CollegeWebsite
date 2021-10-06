import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './eja.css'
function Cursos() {

  //  const [selectedvalue, setSelectedValue] = useState(1)
  

    return (
        <>
       <div className="teste">
        <div className='courses-container'>
        <Navbar color="black" />
        <div className='graduation'>
              <h1>EJA - Ensino Fundamental e Médio</h1>
        </div>

        <div className="Eja">
            
            <div className="Eja-img">
                <img src="/EJAFundamentalMedio.png" alt="EJA-foto"/>
            </div>

            <div  className="Eja-info">
              <h1>Curso EJA - Ensino Fundamental e Médio</h1>
              <div>
                  (57 avaliações de clientes)
              </div>
              <h3>R$ 1.650,00</h3>
              <div className="Eja-spans">
              <span >Cursos Incluidos</span>
              <span><i class="fas fa-book-open"></i> Eja Ensino Médio</span>
              <span className="yellowbook"><i class="fas fa-book-open"></i> Eja Ensino Fundamental e Médio</span>
              <span><strong>EJA Ensino Fundamental e Médio</strong>: destinada a jovens a partir de 15 anos que não completaram a etapa entre o 1º e o 9° ano. Nessa etapa, os alunos imagem em novas formas de aprender e pensar. Tem duração média de 2 anos para a conclusão..</span>
             <div className="Eja-purchase">
                {//<input type="text" value={selectedvalue} onChange={(e) => setSelectedValue(e.target.value)} />
                }
                 <button> <Link to="/Matrícula">Inscreva-se</Link></button>
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