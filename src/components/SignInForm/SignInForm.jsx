import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { validateEmail } from "../../utils/tools/tools";
import './SignInForm.css'



const SignInForm = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [inputError, setInputError] = useState(false)

  const changeEmail = (value) => {
    setInputEmail(value)
  }

  const dispatch = useDispatch();
  const navigate= useNavigate()

  const inputValue = {
      "email": inputEmail,
      "password": inputPassword
    }
  
const fetchData = async (e) => {
  e.preventDefault()
 if(validateEmail(inputValue.email) !== false) {
   const response = await fetch('http://localhost:3001/api/v1/user/login', {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'X-Requested-Width': 'xmlhttprequest'
       },
       body: JSON.stringify(inputValue)
   })
   if (response.ok) {            
       response.json()
       .then(response => {
         if (response.status === 200) {
          setInputError(false)
           dispatch({ type: "login", token: response.body.token, rememberUser: rememberMe})
           navigate('/profile', { replace: true })
         } 
       })
       .catch(error => console.error(error))
   } else if (!response.ok) {
     setInputError(true)
   }
 }
}

  return (
    <form>
      <div className={validateEmail(inputEmail) === false && inputEmail.split('').length > 0? 'input-wrapper inputError' : 'input-wrapper'}>
        <label htmlFor="username">Username</label>
        <input 
        placeholder='Email' 
        type="text" 
        id="username" 
        onChange={e => changeEmail(e.target.value)} 
        />
        <p className={validateEmail(inputEmail) === false && inputEmail.split('').length > 0 ? 'invalidMail' : 'hidden'}>Email invalide, veuillez enter un email valide</p>
      </div>
      <div className={inputError? 'input-wrapper inputError' : 'input-wrapper'}>
        <label htmlFor="password">Password</label>
        <input placeholder="Password" type="password" id="password" onChange={e => setInputPassword(e.target.value)} />
      </div>
      <p className={inputError? 'errorInput' : 'hidden'}>L'email ou le mot de passe n'est pas valide, veuillez entre un mot de passe et un email valide</p>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onChange={e => setRememberMe(!rememberMe)}/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
          <button className="sign-in-button" onClick={fetchData}>Sign In</button> 
    </form>
  );
}

export default SignInForm;


