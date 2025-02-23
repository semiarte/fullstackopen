import React from 'react';

const PersonForm = ({ newName, newPhone, handleInputNameChange, handleInputPhoneChange, addNewPerson }) => {
  return (
    <form onSubmit={addNewPerson}>
      <div>
        name: 
        <input 
          type="text"
          value={newName}
          onChange={handleInputNameChange}
          placeholder="Write a name"
        />
      </div>
      <div>
        number: 
        <input 
          type="text"
          value={newPhone}
          onChange={handleInputPhoneChange}
          placeholder="Write a phone number"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;