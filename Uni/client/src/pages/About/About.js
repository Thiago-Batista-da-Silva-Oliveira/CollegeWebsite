import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './about.css'
import Footer from '../../components/Footer/Footer'

function Sobre (){
    const [universidade, setUniversidade] = useState(true)
    const [metodologia , setMetodologia ] = useState(false)
    const [campos, setCampos] = useState(false)
   // const [bolsas, setBolsas] = useState(false)

    function handleUniversidade(){
        setUniversidade(true)
        setMetodologia(false)
        setCampos(false)
        //setBolsas(false)
    }
    function handleMetodologia(){
        setUniversidade(false)
        setMetodologia(true)
        setCampos(false)
        //setBolsas(false)
    }
    function handleCampos(){
        setUniversidade(false)
        setMetodologia(false)
        setCampos(true)
       // setBolsas(false)
    }
  /*  function handleBolsas(){
        setUniversidade(false)
        setMetodologia(false)
        setCampos(false)
        setBolsas(true)
    } */
 
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
                        <li  className={metodologia ? 'red' : 'gray'} onClick={handleMetodologia} >Nossos Cursos</li>
                        <li  className={campos ? 'red' : 'gray'} onClick={handleCampos} >Nossos Campos</li>
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
               
                <h3>Complementação Pedagógica </h3> 
                  <span>A Complementação Pedagógica é destinada àqueles profissionais graduados em qualquer área, que desejam ampliar a sua atuação em outra área de conhecimento.

O curso é indicado para os profissionais que buscam exercer funções de magistério na Educação Infantil e nos anos iniciais do Ensino Fundamental, de Educação Profissional na área de serviços e apoio escolar e em outras áreas nas quais sejam previstos conhecimentos pedagógicos, além do exercício da organização e gestão de sistemas e instituições de ensino.

A resolução permite que o aluno que já é graduado faça sua complementação pedagógica em 12 meses (1ano).

Conforme a legislação, o curso de SEGUNDA LICENCIATURA tem por objetivo viabilizar, em menor tempo, uma outra Graduação para aqueles que já concluíram um curso de nível Superior, com titulação em Licenciatura, independentemente da área de formação.

RESOLUÇÃO Nº 2 de 01 de julho de 2015 – MEC

RESOLUÇÃO Nº 2 de 20 de dezembro de 2019-MEC

A Complementação Pedagógica – R2 e Segunda Licenciatura estão amparadas pelas resoluções acima, que permitem ao aluno já diplomado em um curso superior se habilitar à docência no ensino básico, mediante formação pedagógica específica.

COMPLEMENTAÇÃO PEDAGÓGICA (R2).</span>

<h3>Cursos Sequencias </h3> 
<span>Resolução N°1, de 22 de Maio de 2017

O Curso sequencial confere certificado de Ensino Superior que atesta conhecimento acadêmico em determinado campo do saber.

Estes cursos têm um viés profissionalizante e são entendidos como a oportunidade de um diferencial para o indivíduo poder inserir-se no mercado de trabalho.

CONCEITOS:

Por serem considerados de nível superior, os cursos sequenciais são aceitos em concursos públicos quando a vaga não especifica a modalidade de ensino. No entanto, se o edital declarar cursos de graduação de nível superior, não será permitida a participação do formado no curso sequencial, apenas diplomas de bacharelado, licenciatura ou tecnólogo.</span>
<br/>
<h3>CURSOS DE MBA E PÓS-GRADUAÇÃO EaD</h3>
<span>RESOLUÇÃO Nº 1 de 08 de junho de 2007 – MEC

Estabelece normas para o funcionamento de cursos de pós-graduação lato sensu, em nível de especialização.

Todos os cursos ofertados pela a Universidade Brasileira, estão de acordo com a Resolução Nº 1 de 8 de junho de 2007.

Cursos nas áreas de:

Direito, Saúde, Educação, Social, Empresarial e Sustentabilidade. </span>

<h4>ESPECIALIZAÇÃO: </h4>
<span>É um curso de pós-graduação Lato Sensu que consiste em aperfeiçoar aspectos do profissional focado em uma área específica direcionado para o mercado de trabalho.

É indicado para profissionais de diferentes áreas que procuram um diferencial e desejam focar sua atuação no mercado. </span>

<h4>MBA:</h4>
<span>MBA por sua vez, significa Master Business Administration. Nada mais é do que uma Pós-Graduação Lato Sensu, que direciona para a especialização, o aperfeiçoamento em uma área profissional específica, focada no mercado de trabalho.

Mas então por que não chamamos de Pós?

Porque o MBA se refere especialmente à área de Business, ou seja, de Negócios e Gestão Empresarial. </span>

<h3>Cursos Técnicos</h3> 
<span>PORTARIA Nº 1829/2018 – SEEC/GS

Autoriza o Plano de Expansão do Centro de Profissionalização Técnica – CPET, no âmbito do estado do Rio Grande do Norte e demais unidades da Federação, para ofertar a Educação Profissional Técnica de Nível Médio, na modalidade de Educação a Distância – EaD.

REGISTROS NOS CONSELHOS DE CLASSE:

MT – Ministério do Trabalho / CREA: Segurança do Trabalho

CFT – Conselho Federal de Técnicos: Eletrotécnica, Eletrônica, Edificações, Meio Ambiente, Informática para Internet, Computação Gráfica

CFA – Conselho Federal de Administração: Administração

CADASTRUR – Ministério do Turismo: Guia de Turismo

CFQ – Conselho Federal de Química: Meio Ambiente

COFECI / CRECI: Transações Imobiliárias </span>
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
        
        </div>
        <Footer />
        </div>
        </>
    )
}    


export default Sobre