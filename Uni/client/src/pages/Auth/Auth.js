import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import "./Auth.css"


function Auth() {

 const history = useHistory()
 const [isSignUp] = useState(false)
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

    

 /*function handleToggle(e) {
     setIsSignUp(!isSignUp)
 } */

 function HandleSubmit (e) {
      e.preventDefault()

      if(!isSignUp) {
          history.push('/ÁreaDoAluno')
      } 

      setEmail("")
      setPassword("")
 }


    return (
      <>
        <div className="auth-container">
            <div className="form">
              <form onSubmit={HandleSubmit}>
                  <h1>{isSignUp ? "Bem Vindo" : "Bem Vindo de Volta"}</h1>
                  <h2>Universidade Brasileira</h2>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email"/>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="passoword" placeholder="senha" />
                  <button className="btn-auth" type="submit">{isSignUp ? "Cadastrar" : "Entrar"}</button>

                  <Link to="/Matrícula">Ainda não está matriculado ?</Link>
              </form>
              <Link to="/">Esqueceu o seu usuário ou senha?</Link>
            </div>
            <div className="signUpBackToHome"> <Link to="/"> <i class="far fa-arrow-alt-circle-left"></i> </Link></div> 
        </div>
      </>
    )
}

export default Auth;