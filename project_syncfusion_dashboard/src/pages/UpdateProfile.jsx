/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';

import { useStateContext } from '../contexts/ContextProvider';
import { license } from '../data/dummy';

function UpdateProfile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userT = localStorage.getItem('user');
    setUser(JSON.parse(userT));
  });
  const [Name, setName] = useState(user.Name);
  const [Email, setEmail] = useState(user.Email);
  const [Password, setPassword] = useState('');
  const [Role, setRole] = useState(user.Role);

  const handleNameChange = (event) => {
    setName(event.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.value);
  };

  const { currentColor } = useStateContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/user/update/${user._id}`, { Name, Email, Password, Role })
      .then((response) => {
        alert('User Updated Successfully.');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <MaskedTextBoxComponent
        className="text-2xl w-2xl"
        placeholder="Enter Name"
        licenseKey={license}
        value={Name}
        onChange={handleNameChange}
      />
      <MaskedTextBoxComponent
        className="text-2xl w-2xl"
        placeholder="Enter Email"
        licenseKey={license}
        value={Email}
        onChange={handleEmailChange}
      />
      <MaskedTextBoxComponent
        className="text-2xl w-2xl"
        placeholder="Enter Role"
        licenseKey={license}
        value={Role}
        onChange={handleRoleChange}
      />
      <MaskedTextBoxComponent
        className="text-2xl w-2xl"
        placeholder="Enter Password"
        licenseKey={license}
        value={Password}
        onChange={handlePasswordChange}
        type="Password"
      />
      <button
        type="submit"
        className="text-xl w-full p-3 hover:drop-shadow-xl hover:bg-"
        style={{ backgroundColor: currentColor, color: 'white', borderRadius: '10px' }}
      >Update Profile
      </button>
    </form>
  );
}

export default UpdateProfile;
