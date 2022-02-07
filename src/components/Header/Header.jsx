import './Header.css'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Header = ({name}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputFirst, setInputFirst] = useState('')
  const [inputLast, setInputLast] = useState('')

    const toggleEdit = (e) => {
      e.preventDefault()
      setIsEditing(!isEditing)
    }

    const inputValue = {
      "firstName": inputFirst,
      "lastName": inputLast
    }

    const token = useSelector((state) => state.token)

    const dispatch = useDispatch();
    const navigate= useNavigate();

    const fetchData = async (e) => {
      e.preventDefault()
      console.log(token);
       const response = await fetch('http://localhost:3001/api/v1/user/profile', {
           method: 'PUT',
           headers: {
               'Accept': 'application/json',
               'Authorization': `Bearer ${token}`,
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

  return (
    <div className="header">
    <h1>Welcome back<br /> <strong className={isEditing ? "hidden" : "userName"}>{name}</strong></h1>
    <button className={isEditing ? "edit-button hidden" : "edit-button"} onClick={toggleEdit}>Edit Name</button>
    <form className={isEditing ? "editName" : "editName hidden"}>
      <div className='editName__inputs '>
        <div className="input-wrapper editName__input">
          <label htmlFor="firstname"></label>
          <input placeholder='Tony' type="text" id="firstname" />
        </div>
        <div className="input-wrapper editName__input">
          <label htmlFor="lastname"></label>
          <input placeholder='Jarvis' type="text" id="lastname" />
        </div>
      </div>
      <div className='editName__buttons'>
        <button className="editName__btn edit-button save" onClick={fetchData}>Save</button>
        <button className="editName__btn edit-button cancel" onClick={toggleEdit}>Cancel</button> 
      </div>
    </form>
  </div>
  );
}

export default Header;
