import './Header.css'
import { useState } from "react";

const Header = () => {
  const [isEditing, setIsEditing] = useState(false);
    console.log(isEditing);
    const toggleEdit = () => {
      setIsEditing(!isEditing)
    }
  return (
    <div className="header">
    <h1>Welcome back<br />Tony Jarvis!</h1>
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
        <button className="editName__btn edit-button save">Save</button>
        <button className="editName__btn edit-button cancel" onClick={toggleEdit}>Cancel</button> 
      </div>
    </form>
  </div>
  );
}

export default Header;
