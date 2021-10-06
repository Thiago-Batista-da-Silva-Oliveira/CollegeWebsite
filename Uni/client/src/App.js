import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Courses from './pages/Courses/Cursos'
import Pos from './pages/PosGrad/Pos'
import Course from './pages/Curso/Curso'
import About from './pages/About/About'
import Eja from './pages/EJA/Eja'
import EjaFundamentalMedio from './pages/EJAFundMed/EjaFund'
import Tec from './pages/Tec/Tec'
import Auth from './pages/Auth/Auth'
import Sequencials from './pages/Sequencials/Sequencials'
import SignUp from './pages/SignUp/SignUp';
import AuthProvider from './context/authContext';
import Step2 from './pages/SignUpStep2/Step2';
import Step3 from './pages/Step3/Step3';
import Step4 from './pages/Step4/Step4';
import StudentArea from './pages/StudentArea/Home'
import EJAClasses from './pages/EJAClasses/EJAClasses'
import Provas from './pages/Provas/Prova'
function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Graduações' exact component={Courses} />
        <Route path='/PósGraduações' exact component={Pos} />
        <Route path='/EJA' exact component={Eja} />
        <Route path='/EJAFundamental-médio' exact component={EjaFundamentalMedio} />
        <Route path='/Técnico' exact component={Tec} />
        <Route path='/CursosSequenciais' exact component={Sequencials} />
        <Route path='/Curso/:id' exact component={Course} />
        <Route path='/Sobre' exact component={About} />
        <Route path='/Autentificação' exact component={Auth} />
        <Route path='/Matrícula' exact component={SignUp} />
        <Route path='/MatrículaStep2' exact component={Step2} />
        <Route path='/MatrículaStep3' exact component={Step3} />
        <Route path='/MatrículaStep4' exact component={Step4} />
        <Route path='/ÁreaDoAluno' exact component={StudentArea} />
        <Route path='/Disciplinas' exact component={EJAClasses} />
        <Route path='/Prova/:id' exact component={Provas} />
   
        </Switch>
        
      </Router>
    </AuthProvider>
      
    </>
  );
}

export default App;