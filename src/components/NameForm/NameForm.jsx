// import './Header.css'
import { useState } from "react";

const NameForm = ({name}) => {
  const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = (e) => {
      e.preventDefault()
      setIsEditing(!isEditing)
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
        <button className="editName__btn edit-button save"onClick={e => e.preventDefault()} >Save</button>
        <button className="editName__btn edit-button cancel" onClick={toggleEdit}>Cancel</button> 
      </div>
    </form>
  </div>
  );
}

export default NameForm;
