import { useState, useEffect } from "react";

const Header = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="header">
    <h1>Welcome back<br />Tony Jarvis!</h1>
    <button className="edit-button">Edit Name</button>
    {/* <form className={isEditing ? "editName" : "editName hidden"}>
    <div className="input-wrapper">
        <label htmlFor="firstname"></label>
        <input type="text" id="firstname" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastname"></label>
        <input type="text" id="lastname" />
      </div>
      <button className="btn-save">Save</button>
      <button className="btn-cancel" onClick={setIsEditing(false)}>Cancel</button>
    </form> */}
  </div>
  );
}

export default Header;
