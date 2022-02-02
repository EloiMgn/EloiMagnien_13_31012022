import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
// import { store } from "../../store";

const SignInForm = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const dispatch = useDispatch();
  // const isConnected1 = useSelector((state) => state.userConnected)

  const inputValue = {
      "email": inputEmail,
      "password": inputPassword
    }
  

const fetchData = async (e) => {
  // console.log(inputValue);
  // console.log(isConnected1);
  e.preventDefault()
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
          dispatch({ type: "login" })
      } 
      else {
        console.log('pas connecté')
      }
      })
      .catch(error => console.error(error))
  } 
}

const isUserConnected = useSelector((state) => state.userConnected)
console.log(isUserConnected);

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input placeholder='Email' type="text" id="username" onChange={e => setInputEmail(e.target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input placeholder="Password" type="password" id="password" onChange={e => setInputPassword(e.target.value)} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onChange={e => setRememberMe(!rememberMe)}/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
          <button className="sign-in-button" onClick={fetchData} >Sign In</button> 
    </form>
  );
}

export default SignInForm;


