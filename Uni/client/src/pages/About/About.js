import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './about.css'
import Footer from '../../components/Footer/Footer'

function Sobre (){
    const [universidade, setUniversidade] = useState(true)
    const [metodologia , setMetodologia ] = useState(false)
    const [campos, setCampos] = useState(false)
    const [bolsas, setBolsas] = useState(false)

    function handleUniversidade(){
        setUniversidade(true)
        setMetodologia(false)
        setCampos(false)
        setBolsas(false)
    }
    function handleMetodologia(){
        setUniversidade(false)
        setMetodologia(true)
        setCampos(false)
        setBolsas(false)
    }
    function handleCampos(){
        setUniversidade(false)
        setMetodologia(false)
        setCampos(true)
        setBolsas(false)
    }
    function handleBolsas(){
        setUniversidade(false)
        setMetodologia(false)
        setCampos(false)
        setBolsas(true)
    }
 
    return(
        <>
        <div className="teste">
        <div className='about-container'>
            <Navbar color="black"/>
            <div className='aboutContainer'>
              <h1>Sobre</h1>
              <div className='about-options'>
                <nav>
                    <ul>
                        <li className={universidade ? 'red' : 'gray'} onClick={handleUniversidade}>A Universidade</li>
                        <li  className={metodologia ? 'red' : 'gray'} onClick={handleMetodologia} >Nossa Métodologia</li>
                        <li  className={campos ? 'red' : 'gray'} onClick={handleCampos}>Nossos Campos</li>
                        <li  className={bolsas ? 'red' : 'gray'} onClick={handleBolsas} >Sistemas de bolsa</li>
                    </ul>
                </nav>
            </div>
        </div>
      { universidade &&( <div className='about'>
                <div>
                   <h2>Quem somos?</h2>
                    <span>Com vários polos no Brasil. A Universidade Brasileira Ltda, foi fundada em 28/03/2017 em Belo Horizonte – MG. Ela iniciou-se em 1998, quando o gestor Dário Ferreira, viajava pelo interior de Bahia, Espirito Santo e Minas Gerais, realizando nas escolas de ensino médio, palestras de Orientação Vocacional aos pré-vestibulandos. <br/>  <br/>

Na época visualizamos a demanda para criarmos uma Faculdade, onde posterior virou Universidade Educa Brasil.  <br/>  <br/>

Criamos também a Faculdade Mineira, onde iniciamos parcerias com diversas universidades, realizando em várias cidades convênios, ofertando cursos superiores de Graduação, Pós-graduação e cursos profissionalizantes. <br/>

Implantamos em 2010 os polos nos estados Rio de Janeiro, São Paulo, Bahia, Goiás. <br/>  <br/>

É um megaprojeto educacional, que com parcerias universidades sérias, queremos ser uma referência padrão de qualidade daqui alguns anos. <br/> <br/>

Fomos proprietários de Polos Universitários reconhecidas no MEC, dentre eles, ANHANGUERA – UNIP Universidade Paulista – DOM ALBERTO – FAVENI – UNIGRANRIO – ESAB – UNEF em várias localidades brasileiras.  <br/>

Temos uma atuação de 23 anos na gestão de polos universitários brasileiros. <br/> <br/>

A Universidade Brasil vem desde 2017 ofertando os cursos superiores, dentre eles temos as parcerias com as universidades: <br/> <br/>

A Universidade Brasileira tem como Gestor Educacional Dário Ferreira <br/> <br/>

–  02 Graduações em Administração de Empresas, Gestão Serviços Informação. <br/> <br/>
– 04 Pós Graduação: Administração Escolar/ Tutor Educação a Distância / Administração Hospitalar / Projetos Serviços Sociais <br/> <br/>

A Universidade Brasileira tem o nome fantasia (UNIBRASIL) teve o registro anterior com o nome de MR RIO EMPRESARIAL. <br/> <br/>

A alteração está na Junta Comercial do Estado de Minas Gerais. <br/> <br/>

Nos polos universitários os coordenadores são capacitados profissionalmente.</span>
</div>

             
            </div>
      )
            }
        { metodologia && (
             <div className='about'>
             <div>
                <h2>Nossa Metodologia</h2>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/>
                 Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident<br/>
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
             </div>

             <div>
                <h2>Objetivos</h2>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/>
                 Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident<br/>
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
             </div>
         </div>
        )
        }
         { campos && (
             <div className='about'>
             <div>
                <h2>Nossos Campos</h2>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/>
                 Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident<br/>
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
             </div>

             <div>
                <h2>Objetivos</h2>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/>
                 Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident<br/>
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
             </div>
         </div>
        )

        }
         { bolsas && (
             <div className='about'>
             <div>
                <h2>Sitema de Bolsas</h2>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/>
                 Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident<br/>
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
             </div>

             <div>
                <h2>Como Ingressar?</h2>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/>
                 Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident<br/>
                 sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
             </div>
         </div>
        )

        }
        </div>
        <Footer />
        </div>
        </>
    )
}    


export default Sobre