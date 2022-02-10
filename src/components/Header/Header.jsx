import './Header.css'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const Header = ({name}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputFirst, setInputFirst] = useState('')
  const [inputLast, setInputLast] = useState('')
  const [firstName, setFirstName] = useState(name)


    const toggleEdit = (e) => {
      e.preventDefault()
      setIsEditing(!isEditing)
    }

    const handleChangeFirstname = (value) => {
      setInputFirst(value)
    }

    const handleChangeLastname = (value) => {
      setInputLast(value)
    }

    const handleClickSave = (e) => {
      toggleEdit(e)
      fetchData(e)
    }

    const inputValue = {
      "firstName": inputFirst,
      "lastName": inputLast
    }

    const token = useSelector((state) => state.token)

    const dispatch = useDispatch();

// Handle name Editing 

    const fetchData = async (e) => {
      e.preventDefault()
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
               dispatch({ type: "setUsername", firstName: response.body.firstName, lastName: response.body.lastName })
               setFirstName(inputFirst)
             } 
           else {
            console.error('error')
           }
           })
           .catch(error => console.error(error))
       } 
    }

  return (
    <div className="header">
    <h1>Welcome back<br /> <strong className={isEditing ? "hidden" : "userName"}>{firstName}</strong></h1>
    <button className={isEditing ? "edit-button hidden" : "edit-button"} onClick={toggleEdit}>Edit Name</button>
    <form className={isEditing ? "editName" : "editName hidden"}>
      <div className='editName__inputs '>
        <div className="input-wrapper editName__input">
          <label htmlFor="firstname"></label>
          <input placeholder='Prénom' type="text" id="firstname" onChange={e => handleChangeFirstname(e.target.value)}/>
        </div>
        <div className="input-wrapper editName__input">
          <label htmlFor="lastname"></label>
          <input placeholder='Nom' type="text" id="lastname" onChange={e => handleChangeLastname(e.target.value)}/>
        </div>
      </div>
      <div className='editName__buttons'>
        <button className="editName__btn edit-button save" onClick={e => handleClickSave(e)}>Save</button>
        <button className="editName__btn edit-button cancel" onClick={toggleEdit}>Cancel</button> 
      </div>
    </form>
  </div>
  );
}

export default Header;
