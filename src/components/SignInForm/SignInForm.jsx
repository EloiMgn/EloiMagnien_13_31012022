import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { validateEmail } from "../../utils/tools/tools";
import './SignInForm.css'



const SignInForm = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

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
           dispatch({ type: "login", token: response.body.token })
           navigate('/user', { replace: true })
         } 
       else {
         console.log('pas connecté')
       }
       })
       .catch(error => console.error(error))
   } 
 }
}

  return (
    <form>
      <div className={validateEmail(inputEmail) === false && inputEmail.split('').length > 0 ? 'input-wrapper emailError' : 'input-wrapper'}>
        <label htmlFor="username">Username</label>
        <input 
        placeholder='Email' 
        type="text" 
        id="username" 
        onChange={e => changeEmail(e.target.value)} 
        />
        <p className={validateEmail(inputEmail) === false && inputEmail.split('').length > 0 ? 'invalidMail' : 'hidden'}>Email invalide, veuillez enter un email valide</p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input placeholder="Password" type="password" id="password" onChange={e => setInputPassword(e.target.value)} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onChange={e => setRememberMe(!rememberMe)}/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
          <button className="sign-in-button" onClick={fetchData}>Sign In</button> 
    </form>
  );
}

export default SignInForm;


